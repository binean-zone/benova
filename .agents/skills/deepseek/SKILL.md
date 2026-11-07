---
name: deepseek
description: Gọi worker DeepSeek Flash qua wrapper `deepseek` cho bước hẹp đã pin; không thay planning/approval. Dùng khi cần dispatch DeepSeek. Không dùng khi cần điều phối danh sách US.
---

# Gọi DeepSeek worker

## Mục đích

Hợp đồng dispatch một session CLI DeepSeek cho bước hẹp: chọn effort, gọi wrapper, cấp `--tools`,
kiểm envelope và xử lý quota. Skill tự đứng một mình, không cần nạp `manage-us`.

## Khi nào dùng

- Dùng khi: có bước hẹp với input, scope và acceptance đã pin — tìm file và gom context, áp bản sửa
  Markdown đã chốt, implement/fix theo tier, validation, review hẹp `LOCAL`/`CONTRACT`.
- Không dùng khi: cần plan, approval, chọn tier, điều phối danh sách US hoặc quyết định semantic —
  dùng skill điều phối của repo. Không dùng khi tier hoặc risk bắt buộc Claude hay GPT Sol.

## Quy trình

### Kiểm wrapper

Kiểm `command -v deepseek`, `command -v claude` và `claude --help` trước dispatch đầu. Wrapper
`deepseek` chuyển tiếp toàn bộ tham số cho `claude`; gọi trực tiếp wrapper với flag của Claude.
Không sửa wrapper, không đọc credential trong wrapper/config, không cài dependency, không gọi API
để dò model. Repo để wrapper tự map model thì bỏ `--model` ở invocation và chỉ giữ `--effort` theo
bảng.

Wrapper export `ANTHROPIC_BASE_URL`, `ANTHROPIC_AUTH_TOKEN`, `ANTHROPIC_MODEL`, các
`ANTHROPIC_DEFAULT_*_MODEL`, `CLAUDE_CODE_SUBAGENT_MODEL` và `CLAUDE_CODE_EFFORT_LEVEL` cho process
con. Session được khởi động qua wrapper truyền các biến đó cho mọi `claude` con, nên `--model sonnet`
bị map thành DeepSeek. Khi cần Claude native từ trong session DeepSeek, xoá đúng các biến đó trước
khi spawn:

```bash
env -u ANTHROPIC_BASE_URL -u ANTHROPIC_AUTH_TOKEN -u ANTHROPIC_API_KEY \
    -u ANTHROPIC_MODEL -u ANTHROPIC_DEFAULT_OPUS_MODEL -u ANTHROPIC_DEFAULT_SONNET_MODEL \
    -u ANTHROPIC_DEFAULT_HAIKU_MODEL -u CLAUDE_CODE_SUBAGENT_MODEL -u CLAUDE_CODE_EFFORT_LEVEL \
    -u DEEPSEEK_API_KEY \
  claude -p --model sonnet --effort medium ...
```

`modelUsage` phải là `claude-sonnet-*`; `deepseek-*` hoặc `unrecognized_model` nghĩa là env chưa
sạch. Không sửa wrapper, không xoá credential/OAuth, không dùng `--bare`. Khi dispatch DeepSeek thì
giữ nguyên wrapper; chỉ process native mới cần xoá override.

### Chọn effort

| Việc | Model | Effort |
| --- | --- | --- |
| Bước cơ học, scope đã pin | `deepseek-flash` | `low` |
| Implement/fix `chuẩn`, task giao rõ | `deepseek-flash` | `high` |
| Review mạnh/`CRITICAL` | `deepseek-flash` | `max` |

Workflow gọi skill quyết định tier và risk; bảng chỉ là default. Wrapper mặc định effort `max`, nên
override ngay ở invocation để giảm reasoning token. Không coi context `[1m]` là ngân sách cần dùng hết.

### Mẫu lệnh

Chạy từ repository root, prompt qua stdin bằng heredoc quoted để giữ nguyên `$`, backtick và newline:

```bash
CLAUDE_CODE_EFFORT_LEVEL=low deepseek -p \
  --model deepseek-flash --effort low --output-format json \
  --no-session-persistence --permission-mode bypassPermissions \
  --tools 'Read,Glob,Grep,Edit,Write,Bash' <<'PROMPT'
<prompt của bước hẹp, kèm package và path cần đọc>
PROMPT
```

Prompt phải pin scope, path được đọc, acceptance hoặc validation, và cấm spawn/commit/push nếu
không được cấp. Không truyền lịch sử của session cha, toàn bộ docs hoặc log PASS.

### Quyền và tools

Người dùng đã cấp `--permission-mode bypassPermissions` cho worker; không hỏi lại. Chế độ này bỏ
hàng rào quyền, nên giới hạn thật là `--tools` theo vai trò và scope trong prompt:

- Implement/fix: `Read,Glob,Grep,Edit,Write,Bash`.
- Review/validation: `Read,Glob,Grep,Bash`, không `Edit`/`Write`; reviewer chỉ đọc trước verdict.
- Không push, không sửa repository sibling, không đọc secret hay credential.

### Kiểm kết quả

Kiểm exit code, `is_error` khi có, `result`, lỗi quota/permission và usage. Exit code 0 không thay
package hoặc verdict hợp lệ. Diagnostic `[claude-code:unrecognized_model]` riêng lẻ không chứng
minh model/API thất bại; exit code, `is_error` và package mới quyết định. Không in envelope thô,
credential hoặc reasoning cho người dùng.

Lỗi hạ tầng/quota: retry tối đa một lần cùng model sau khi kiểm worktree; vẫn lỗi thì dừng
`BLOCKED`. Không đổi provider, không hạ model, không tuyên bố PASS; lỗi auth/model/permission là
blocker thật, báo đúng thứ cần có.

### Mẫu validation

```bash
deepseek -p \
  --model deepseek-flash --effort low --output-format json \
  --no-session-persistence --permission-mode bypassPermissions \
  --tools 'Read,Glob,Grep,Bash' <<'PROMPT'
Chạy đúng các lệnh gate dưới đây trong repository root, theo thứ tự, không sửa file:
git diff --check
python3 tools/check_docs.py
npx --yes markdownlint-cli2@0.23.2 "**/*.md"
Trả về từng lệnh kèm exit code, kết quả và lỗi nguyên văn nếu có.
PROMPT
```

Gate riêng của repo (Rust, UI, VM) lấy từ `.agents/skills/README.md` và `CONTRIBUTING.md`; không tự
đổi edition hoặc formatter. Chờ Bash chạy xong thật với timeout tối đa 600000 ms rồi mới thu exit
code và receipt; không trả trạng thái "đang chờ" thay cho kết quả.

## Đầu ra

Command đã chạy, exit code, `is_error`/`result`/usage; package, verdict hoặc receipt nếu bước đó sinh
ra. Thiếu số liệu usage thì báo không có, không ước lượng từ ký tự.

## Validation

Gate Markdown chung: `git diff --check`, `python3 tools/check_docs.py`, markdownlint. Với thay đổi
Markdown phải chạy lại sau mỗi lần sửa; không thay gate bằng nhận xét của model.

## Ranh giới

- Không thay planning, approval, chọn tier hoặc closure; không tự review code mình viết.
- Không đổi model/provider khi lỗi auth hoặc quota, không bịa CLI/API/model ID, không sửa wrapper.
- `--permission-mode bypassPermissions` bỏ hàng rào quyền; `--tools` và scope trong prompt là giới
  hạn thật.
- Không push, không sửa repository sibling, không đọc credential, không lưu secret.
- Prompt terse tham chiếu (không bắt buộc): `.agents/prompts/deepseek-terse.md`.
