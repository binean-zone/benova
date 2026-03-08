# 🔒 Bảo Mật Nexus

> **"Trong ngành bảo hiểm, dữ liệu khách hàng không chỉ là tài sản — đó là niềm tin."**

---

## Tại Sao Bảo Mật Là Ưu Tiên Số Một?

Hệ thống Ingenium chứa dữ liệu hàng triệu khách hàng bảo hiểm — thông tin cá nhân, hợp đồng, lịch sử thanh toán. Một vi phạm bảo mật có thể dẫn đến:

- 💸 Phạt hành chính theo GDPR/Luật An ninh mạng Việt Nam
- 📰 Thiệt hại uy tín không thể đo lường
- ⚖️ Trách nhiệm pháp lý đối với hàng triệu khách hàng

Nexus được thiết kế từ gốc rễ với **security-first mindset** — bảo mật không phải tính năng thêm vào, mà là nền tảng của kiến trúc.

---

## 🔐 Mã Hóa Credential

### AES-256-GCM — Tiêu Chuẩn Quân Sự

Tất cả credential (mật khẩu DB2, SSH, API key) đều được mã hóa bằng AES-256-GCM trước khi lưu.

```
Nhập mật khẩu
      │
      ▼
┌──────────────────────┐
│  Derive encryption   │ ← scrypt (CPU/memory-hard)
│  key from passphrase │   Không thể brute force
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  AES-256-GCM Encrypt │ ← NIST 800-38D
│  Random 96-bit IV    │   IV mới cho mỗi lần mã hóa
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  Lưu trữ an toàn     │ ← File hệ thống (ciphertext only)
│  (Ciphertext + Auth  │   Không bao giờ lưu plaintext
│   Tag + IV)          │
└──────────────────────┘
```

### Vòng Đời Credential

- **Giải mã lazy**: Chỉ giải mã khi thực sự cần dùng
- **Zero plaintext persistence**: Credential ở dạng plaintext chỉ tồn tại trong RAM, trong phạm vi hàm sử dụng
- **Secure drop**: Bộ nhớ được ghi đè bằng zeros ngay sau khi dùng xong (Rust `zeroize`)
- **Không bao giờ log**: Hệ thống logging chủ động ngăn in credential ra console hoặc file log

---

## 🛡️ Bảo Vệ Theo Chuẩn OWASP Top 10

### Ngăn Injection Attacks

**SQL Injection — Zero Risk:**
```rust
// Hàm sql_escape() tích hợp trong Core library
// Escape tất cả ký tự đặc biệt trước khi đưa vào query
let safe_query = format!(
    "SELECT * FROM policies WHERE id = '{}'",
    sql_escape(&user_input)
);
```

**Command Injection — Kiến Trúc Ngăn Chặn:**
- Không bao giờ thực thi shell command từ user input trực tiếp
- Tất cả tham số được whitelist validation trước khi dùng
- Parameterized commands với argument escaping

### Kiểm Soát Truy Cập

| Lớp bảo vệ | Cơ chế |
|------------|--------|
| **Authentication** | Xác thực credential mã hóa trước mọi thao tác |
| **Authorization** | Phân quyền theo vai trò, principle of least privilege |
| **Audit trail** | Ghi log không thể xóa cho mọi thao tác nhạy cảm |
| **Rate limiting** | Giới hạn số request để ngăn brute force |

---

## 🦀 Rust — An Toàn Bộ Nhớ Theo Chuẩn Ngôn Ngữ

Không như C/C++ truyền thống, Rust ngăn chặn các lỗ hổng bộ nhớ **ngay tại thời điểm biên dịch** — không cần runtime check, không có overhead.

| Lỗ hổng phổ biến | C/C++ | Rust |
|-----------------|-------|------|
| Buffer overflow | ❌ Không phát hiện | ✅ Compile error |
| Use-after-free | ❌ Crash/exploit | ✅ Borrow checker ngăn chặn |
| Null pointer dereference | ❌ Segfault | ✅ Option&lt;T&gt; bắt buộc xử lý |
| Race condition | ❌ Khó phát hiện | ✅ Send/Sync traits ngăn compile |
| Memory leak | ❌ Phổ biến | ✅ RAII tự động giải phóng |

**Kết quả thực tế**: Không có mức độ nghiêm trọng CVE nào liên quan đến lỗi bộ nhớ trong Nexus.

---

## 🌐 Bảo Mật Kết Nối Mạng

### SSH Security
- **Key-based authentication** được khuyến nghị, password authentication có thể tắt
- **Known hosts verification** — ngăn MITM attacks
- **Connection pooling** với health check định kỳ

### HTTP API Security (isman)
- Tất cả request đều qua authentication middleware
- Input validation cho mọi endpoint
- Error responses không leak thông tin hệ thống

---

## 📊 Giám Sát Và Phát Hiện Bất Thường

| Sự kiện | Hành động |
|---------|-----------|
| Đăng nhập thất bại liên tiếp | Tăng delay, alert, lock sau N lần |
| Query DB2 bất thường (> threshold) | Log cảnh báo, notify operator |
| Server Ingenium không phản hồi | Cảnh báo ngay, failover nếu cấu hình |
| Credential decryption failure | Alert bảo mật, không tiết lộ nguyên nhân cụ thể |

---

## ✅ Checklist Bảo Mật Khi Triển Khai

| Hạng mục | Trạng thái mặc định |
|----------|---------------------|
| Credential lưu dạng mã hóa AES-256-GCM | ✅ Bắt buộc |
| Không có plaintext trong log | ✅ Bắt buộc |
| SSH dùng key pair thay vì password | 🔶 Khuyến nghị |
| Giới hạn quyền truy cập file credential | ✅ Bắt buộc |
| Audit log cho thao tác nhạy cảm | ✅ Bắt buộc |
| Network segmentation (isman không public) | 🔶 Khuyến nghị |
| Regular credential rotation | 🔶 Khuyến nghị |
| Backup mã hóa credential store | 🔶 Khuyến nghị |

---

## 📄 Tuyên Bố Pháp Lý

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn. Mọi thương hiệu thuộc sở hữu của chủ tương ứng. Dự án không liên kết với DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.
