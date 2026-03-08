# 🧩 VS Code Extension — Nexus

> **"Môi trường phát triển lý tưởng là nơi developer không phải nhớ lệnh — họ chỉ cần tập trung vào nghiệp vụ."**

---

## Tích Hợp Trực Tiếp Vào IDE

Nexus VS Code Extension đưa toàn bộ sức mạnh của Nexus toolchain vào ngay trong IDE mà đội ngũ của bạn đang dùng hàng ngày — không cần chuyển đổi công cụ, không cần nhớ cú pháp lệnh.

---

## 🖥️ Hỗ Trợ Đa Nền Tảng

Extension hoạt động native trên mọi môi trường mà đội ngũ Ingenium cần:

| Nền tảng | Hỗ trợ | Ghi chú |
|----------|--------|---------|
| **Windows** | ✅ Full | Môi trường dev phổ biến nhất |
| **WSL (Windows Subsystem for Linux)** | ✅ Full | Cầu nối hoàn hảo Windows ↔ Linux |
| **Linux** | ✅ Full | Server production — hành vi giống hệt |
| **Remote SSH** | ✅ Full | Qua VS Code Remote SSH extension |

---

## 📋 Yêu Cầu Cài Đặt

1. **VS Code** phiên bản 1.80 trở lên
2. **Nexus CLI** đã cài đặt và trong PATH
3. **Workspace đã khởi tạo** bằng `nexus init` (file `nexus.json` tồn tại)
4. Với WSL: Cài extension trong môi trường WSL, không phải Windows

---

## 📦 Các Thành Phần

### Nexus Core
Xương sống của extension — quản lý vòng đời workspace, đọc cấu hình, và điều phối toàn bộ các công cụ khác.

**Tính năng:**
- Tự động phát hiện file `nexus.json` khi mở workspace
- Validate cấu hình và cảnh báo ngay nếu thiếu thông tin
- Cung cấp context cho các command khác
- Quản lý trạng thái kết nối đến isman server

### icomp / `igo`
Tích hợp trình biên dịch COBOL thông minh vào VS Code.

**Tính năng:**
- **Compile on save** — tùy chọn tự động biên dịch khi lưu file
- **Problem panel integration** — lỗi biên dịch hiển thị ngay trong Problems tab
- **Go-to-error** — click vào lỗi, nhảy đến đúng dòng trong file COBOL
- **Build history** — xem lịch sử biên dịch và so sánh kết quả

### iman
Quản lý Ingenium instance ngay từ VS Code — không cần mở terminal riêng.

**Tính năng:**
- **Tree view** hiển thị cấu trúc Ingenium environment
- **One-click operations** — start/stop processes, refresh data
- **Log viewer** tích hợp — xem log Ingenium với syntax highlighting
- **Status bar indicator** — trạng thái server hiển thị permanentlyở status bar

### ibatch
Tạo, quản lý và theo dõi batch job hàng đêm.

**Tính năng:**
- **Visual scheduler** — giao diện đồ họa để cấu hình lịch chạy
- **Job monitoring** — real-time progress tracking
- **Alert integration** — nhận thông báo khi job thành công hoặc thất bại
- **History & logs** — lịch sử toàn diện cho compliance

---

## 🚀 Lệnh Chính

### Initialize Workspace

```
Ctrl+Shift+P → "Nexus: Initialize Workspace"
```

Khởi tạo môi trường Nexus trong workspace hiện tại:
1. Tạo file `nexus.json` với template cấu hình
2. Hướng dẫn từng bước để điền thông tin server
3. Validate kết nối ngay sau khi điền xong
4. Tạo `.gitignore` entry để bảo vệ credential

### Update Configuration

```
Ctrl+Shift+P → "Nexus: Update Configuration"
```

Cập nhật cấu hình an toàn mà không cần sửa file JSON thủ công:
- Validate input trước khi lưu
- Mã hóa credential tự động
- Không để lại plaintext ở bất kỳ đâu

---

## 💡 Lợi Ích Thực Tế

| Không có Extension | Với Nexus Extension |
|-------------------|---------------------|
| Nhớ cú pháp lệnh terminal | Click vào nút trong VS Code |
| Biên dịch thủ công, xem log riêng | Lỗi hiển thị ngay trong editor |
| Mở nhiều terminal cho nhiều công cụ | Tất cả tích hợp trong một IDE |
| Không có visibility trạng thái server | Status bar luôn hiển thị |
| Script batch phức tạp | Visual scheduler |

---

## 📄 Tuyên Bố Pháp Lý

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn. Mọi thương hiệu thuộc sở hữu của chủ tương ứng. Dự án không liên kết với DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.
