---
name: publish-safety
description: Kiểm tra an toàn công khai trước commit/push repo public — chặn tên vendor legacy, mô tả cơ chế giả lập/dịch ngược, và cụm legacy/stand-in. Dùng bắt buộc ngay trước mọi `git commit` và `git push`, sau khi sửa content/README/docs/scripts, hoặc khi được yêu cầu rà soát nội dung public.
---

# Publish safety

## Mục đích

Repo này public: mọi file được track — không chỉ trang deploy — đều có thể bị đọc. Skill này là
quy trình bắt buộc để không đưa tên nhà cung cấp legacy, mô tả cơ chế giả lập/dịch ngược, hoặc cụm
mô tả legacy/stand-in ra ngoài.

## Khi nào bắt buộc dùng

- Ngay trước mọi `git commit`.
- Ngay trước mọi `git push`.
- Sau khi sửa `content/`, `README.md`, `.github/`, `.agents/`, `scripts/`, hoặc thêm file mới.
- Khi được yêu cầu rà soát nội dung public.

## Bắt buộc dùng /deepseek để chạy check

Mọi bước check publish-safety phải dispatch qua skill `deepseek` (gọi `/deepseek`), không tự chạy
trực tiếp. Đây là bước validation hẹp, input/scope/acceptance đã pin — đúng phạm vi của skill
`deepseek`; không dùng nó để quyết định sửa gì và không giao việc planning/approval.

Worker chỉ được cấp `Read,Glob,Grep,Bash`; prompt phải cấm sửa file, commit, push, đọc credential.
Effort `low` là đủ. Agent chính đọc exit code + `is_error` + output, rồi quyết định sửa và dispatch
lại. Nếu wrapper `deepseek` không khả dụng hoặc lỗi auth/quota sau một lần retry, báo `BLOCKED` —
không tự chạy thay để lấy exit 0. Hook git vẫn là chốt cứng độc lập.

Invocation local đã kiểm chứng (không dùng `bypassPermissions` — auto-mode có thể từ chối):

```bash
deepseek -p \
  --model deepseek-flash --effort low --output-format json \
  --no-session-persistence --permission-mode acceptEdits \
  --tools 'Read,Glob,Grep,Bash' \
  --settings '{"permissions":{"allow":["Bash(git diff:*)","Bash(node scripts/check-public-safety.mjs:*)"]}}' \
  <<'PROMPT'
Chạy đúng lệnh publish-safety trong repository root, không sửa file, không commit/push,
không đọc credential. Trả về exit code, stdout/stderr và danh sách file:line vi phạm.
PROMPT
```

Nếu allowlist bị chặn hoặc wrapper không chạy được: báo `BLOCKED`, xin người dùng cấp quyền;
không tự chạy thay và không tuyên bố pass.

`/deepseek` chỉ chạy ở local agent. GitHub Actions không chạy skill và không cập nhật skill; CI
chạy thẳng `scripts/check-public-safety.mjs` làm chốt cuối. Muốn skill có trên GitHub thì commit
file này; CI vẫn không phụ thuộc skill.

## Quy trình bắt buộc

### 1. Bảo đảm hook đã bật

```bash
git config core.hooksPath
# Phải là .githooks. Nếu không:
npm run hooks
```

### 2. Trước commit — xem diff rồi để deepseek quét diff

```bash
git diff --cached --stat
```

Dispatch `/deepseek` với prompt:

```text
Chạy đúng lệnh sau trong repository root, không sửa file, không commit/push,
không đọc credential:

node scripts/check-public-safety.mjs --diff --strict

Trả về exit code, toàn bộ stdout/stderr và danh sách file:line vi phạm.
Nếu exit != 0, dừng và báo BLOCKED.
```

- Deepseek trả exit 0: được commit. Exit != 0: dừng, sửa nội dung, `git add` lại, dispatch lại.
- `--diff` chỉ đọc các dòng **được thêm** trong index, không quét lại toàn repo hay toàn file.
- Diff rỗng: không có gì để commit, bỏ qua.
- Hook `pre-commit` chạy lại đúng lệnh này; `commit-msg` quét message với `--strict`.
- Khi cần quét kỹ toàn bộ file staged (không chỉ dòng thêm): dispatch deepseek với `--staged --strict`.

### 3. Trước push — để deepseek quét commit sắp đẩy

Dispatch `/deepseek` với prompt:

```text
Chạy đúng lệnh sau trong repository root, không sửa file, không commit/push,
không đọc credential:

node scripts/check-public-safety.mjs --range origin/main..HEAD --strict

Trả về exit code, stdout/stderr và danh sách commit/file:line vi phạm.
Nếu exit != 0, dừng và báo BLOCKED.
```

Hook `pre-push` tự chạy `--pre-push --strict`: chỉ commit message và dòng thêm của các commit
sắp push, không quét lại lịch sử cũ. CI cũng chỉ quét range của push/PR (xem
`.github/workflows/deploy.yml`); chỉ khi chạy tay `workflow_dispatch` mới quét toàn bộ
`--all --history`.

### 4. Full audit định kỳ — để deepseek quét toàn bộ

Dispatch `/deepseek` với prompt:

```text
Chạy đúng lệnh sau trong repository root, không sửa file, không commit/push,
không đọc credential:

node scripts/check-public-safety.mjs --all --history --strict

Trả về exit code, stdout/stderr và danh sách file:line/commit vi phạm.
Nếu exit != 0, dừng và báo BLOCKED.
```

Build và test vẫn chạy local vì có ghi file sinh ra:

```bash
npm run build
npm run test:site
```

`test:site` quét lại artifact deploy lần cuối.

## Khi bị chặn

1. Sửa câu chữ trong file.
2. Ghi chú nội bộ thật sự cần giữ → chuyển vào `private/` hoặc `docs/` (cả hai đã gitignore).
3. Thêm từ riêng cần chặn vào `private/forbidden-terms.txt` (mỗi dòng một từ) hoặc biến
   `BENOVA_SAFETY_EXTRA_TERMS`.
4. Không thêm tên bị chặn vào skill, README, content hay bất kỳ file public nào.

## Không được làm

- Không dùng `--no-verify` để bỏ qua hook, trừ khi người dùng yêu cầu rõ và hiểu CI vẫn chặn.
- Không sửa hoặc nới danh sách mã hoá trong `scripts/check-public-safety.mjs`.
- Không in từ bị chặn ra log public/CI. Script tự che khi `CI` hoặc `GITHUB_ACTIONS`; giữ nguyên.
- Không coi exit 0 của `npm run build` là đủ: phải chạy `--strict`.
- Không tự chạy các lệnh check publish-safety trực tiếp khi skill `deepseek` khả dụng; phải
  dispatch qua `/deepseek` và chỉ dùng kết quả của worker để kết luận pass/fail.
- Không bỏ qua bước deepseek rồi tuyên bố pass chỉ vì hook không chặn.

## Thứ tự ưu tiên để giảm tải

1. Deepseek `--diff` cho pre-commit — chỉ dòng thêm trong index.
2. `--pre-push` hoặc deepseek `--range` cho push — chỉ commit sắp đẩy.
3. Deepseek `--all --history` chỉ khi rà soát toàn bộ hoặc định kỳ, không chạy mỗi commit.

## Định nghĩa hoàn tất

- Deepseek trả exit 0 cho `--diff --strict` trước commit.
- Deepseek trả exit 0 cho `--range <range> --strict` trước push.
- Nếu không dispatch được deepseek: `BLOCKED`, không tự chạy thay.
- `npm run check` (song ngữ) pass.
- `npm run test:site` pass.

## Ghi chú

- Danh sách mặc định nằm mã hoá trong `scripts/check-public-safety.mjs` để bản thân guard không
  công khai tên cần chặn.
- Hook chạy tự động; skill này bảo đảm agent chủ động dispatch `/deepseek`, đọc kết quả và xử lý
  đúng khi bị chặn.
