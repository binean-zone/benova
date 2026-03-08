# 🛡️ Bảo Mật & Độ Tin Cậy / Security & Reliability

> **"Trong ngành bảo hiểm, bảo mật không phải là tính năng — đó là yêu cầu không thể thương lượng."**
>
> *"In insurance, security isn't a feature — it's a non-negotiable requirement."*

---

## 🎯 Chuẩn Doanh Nghiệp Ngay Từ Thiết Kế / Enterprise-Grade by Design

Ngành bảo hiểm và tài chính không có chỗ cho sự cẩu thả về bảo mật. Một lỗ hổng nhỏ có thể dẫn đến vi phạm dữ liệu khách hàng, phạt hành chính, và thiệt hại danh tiếng không thể phục hồi. **Nexus được thiết kế từ đầu để vượt qua các tiêu chuẩn bảo mật nghiêm ngặt nhất**, với nhiều lớp bảo vệ tích hợp sâu trong từng thành phần.

*In insurance and financial services, a single security gap can mean customer data breaches, regulatory fines, and irreparable reputational damage. Nexus is engineered from the ground up to exceed the strictest security standards, with multiple layers of protection built into every component.*

---

## 🔐 Mã Hóa Credential Cấp Quân Sự / Military-Grade Credential Encryption

### AES-256-GCM — Tiêu chuẩn vàng của mã hóa
*AES-256-GCM — The gold standard of encryption*

Mọi dữ liệu nhạy cảm trong Nexus đều được bảo vệ bằng **AES-256-GCM** — cùng tiêu chuẩn mã hóa được sử dụng bởi chính phủ, quân đội và các tổ chức tài chính hàng đầu thế giới.

*All sensitive data in Nexus is protected using AES-256-GCM — the same encryption standard trusted by governments, military organizations, and leading financial institutions worldwide.*

- 🔑 **Khóa 256-bit** — Không thể tấn công brute-force trong tuổi thọ của vũ trụ | *Computationally infeasible to brute-force*
- 🛡️ **Chế độ GCM** — Bảo mật + xác thực toàn vẹn trong một bước | *Both confidentiality and integrity in one step*
- 🔍 **Phát hiện giả mạo** — Bất kỳ thay đổi nào trong dữ liệu mã hóa đều bị phát hiện ngay | *Any tampering is automatically detected*

### Vòng đời Credential — Không bao giờ lộ lọt
*Credential lifecycle — Zero exposure*

```
┌──────────────┐     ┌──────────────┐     ┌──────────────┐
│  Lưu trữ     │────▶│  Giải mã     │────▶│  Dùng & Xóa  │
│  Mã hóa      │     │  Trong Memory│     │  Ngay lập tức│
│  AES-256-GCM │     │  (Only)      │     │  (Verified)  │
└──────────────┘     └──────────────┘     └──────────────┘
```

1. **Lưu trữ** — Credential mã hóa AES-256-GCM trong file cấu hình | *Encrypted at rest*
2. **Sử dụng** — Chỉ giải mã trong memory khi cần, không bao giờ write ra đĩa | *Decrypted in memory only when needed*
3. **Sau khi dùng** — Environment variable chứa credential bị xóa ngay và xác nhận đã xóa | *Immediately unset with verification*
4. **Không bao giờ log** — Giá trị nhạy cảm không bao giờ xuất hiện trong log hay error message | *Never appears in logs or error messages*

> **Không mật khẩu plain-text. Không bao giờ. Không ở đâu.**
> *No plain-text passwords. Ever. Anywhere.*

---

## 🛡️ Bảo Vệ Khỏi OWASP Top 10 / OWASP Top 10 Protection

Nexus kiểm tra đầu vào tại **mọi ranh giới hệ thống** để ngăn chặn các kiểu tấn công phổ biến nhất:

*Nexus validates inputs at every system boundary to prevent the most common attack vectors:*

### Ngăn SQL Injection / SQL Injection Prevention
- **Hàm `sql_escape()` tích hợp** — Tự động escape ký tự đặc biệt trong mọi giá trị SQL
- **Kiểm tra tất cả đầu vào của người dùng** trước khi dùng trong truy vấn
- **Thao tác tham số hóa** — SQL statement dùng escape đúng chuẩn, không nối chuỗi

*Built-in `sql_escape()` function, input sanitization, and parameterized queries — no string concatenation.*

### Ngăn Path Traversal / Path Traversal Prevention
Tất cả tham số liên quan đến file đều được kiểm tra chặt chẽ:
- Chặn ký tự phân cách đường dẫn (`/`, `\`) trong filename do người dùng cung cấp
- Chặn null byte và shell metacharacter
- Xác nhận đường dẫn archive nằm trong thư mục được phép

*All file parameters are validated: blocks path separators, null bytes, and shell metacharacters. Generated paths are verified to resolve within expected directories.*

### Ngăn Command Injection / Command Injection Prevention
- Đầu vào của người dùng không bao giờ được pass thẳng vào shell command
- Hàm `process::escape()` đảm bảo xây dựng command an toàn
- Terminal operation dùng structured API thay vì raw shell string

*User inputs never passed directly to shell commands. Structured APIs replace raw shell strings.*

### Kiểm tra Tham số HTTP / HTTP Parameter Validation

```
Request → Validate → Process → Respond
            │
            ▼ (nếu lỗi / on failure)
       400 Bad Request
       + Thông báo lỗi rõ ràng
```

Các trường được kiểm tra:
- **Trường bắt buộc** — `from`, `to`, `policy` không được trống
- **Ký tự an toàn** — Không path separator, quote, semicolon, hay null byte
- **Tag validation** — Tag tùy chọn cũng qua cùng quy trình kiểm tra

---

## 🔒 An Toàn Bộ Nhớ — Lợi Thế Của Rust / Memory Safety — The Rust Advantage

Bằng cách chọn Rust, Nexus kế thừa **đảm bảo an toàn bộ nhớ tại compile time** — loại bỏ hoàn toàn cả một lớp lỗ hổng bảo mật:

*By choosing Rust, Nexus inherits compile-time memory safety guarantees — eliminating an entire class of security vulnerabilities:*

| Lỗ hổng | *Vulnerability* | C/C++ | Java | **Rust** |
|---------|----------------|-------|------|----------|
| Buffer overflow | | ❌ Phổ biến | ✅ An toàn | ✅ **Ngăn tại compile time** |
| Use-after-free | | ❌ Phổ biến | ✅ Safe (GC) | ✅ **Ngăn bởi ownership** |
| Data race | | ❌ Phổ biến | ⚠️ Có thể | ✅ **Ngăn tại compile time** |
| Null pointer | | ❌ Phổ biến | ❌ Phổ biến | ✅ **Không có null — dùng Option\<T\>** |
| Memory leak | | ❌ Phổ biến | ⚠️ Có thể | ✅ **Ngăn bởi RAII** |

> **70% lỗ hổng bảo mật** trong codebase C/C++ lớn là các vấn đề memory safety (Microsoft Security Response Center, 2019). Rust loại bỏ toàn bộ danh mục này.
>
> *70% of security vulnerabilities in large C/C++ codebases are memory safety issues. Rust eliminates this entire category.*

---

## 🔄 Độ Tin Cậy & Khả Năng Phục Hồi / Reliability & Resilience

### Timeout có thể cấu hình / Configurable Timeouts
- **Terminal read** — Timeout 300s mặc định, phù hợp batch job dài
- **Override theo implementation** — Mỗi loại terminal có thể thiết lập timeout phù hợp
- **Thông báo lỗi rõ ràng** — Khi timeout xảy ra, biết chính xác thao tác nào thất bại

### Quản lý sức khỏe kết nối / Connection Health Management
- **Health check tự động** — Kết nối chết bị phát hiện trước khi dùng
- **Tái sử dụng kết nối** — Pool recycling hiệu quả, giảm overhead
- **Giảm cấp graceful** — Kết nối lỗi được tạo lại trong suốt với người dùng
- **Giới hạn sử dụng** — Kết nối được reset chủ động sau N lần dùng để ngăn resource leak

### Kiến trúc Non-blocking / Non-Blocking Architecture
- **Async event loop** — Không bao giờ bị block bởi I/O
- **Thread pool riêng** — DB query, file I/O, SSH command chạy trên thread riêng qua `spawn_blocking`
- **Graceful shutdown** — Các request đang xử lý hoàn tất trước khi server dừng
- **Panic isolation** — Lỗi từng request không crash toàn server

---

## 📊 Giám Sát & Quan Sát / Monitoring & Observability

### Health Endpoints tích hợp / Built-in Health Endpoints

| Endpoint | Mục đích | *Purpose* | Response |
|----------|----------|-----------|----------|
| `GET /ping` | Kiểm tra kết nối nhanh | *Quick connectivity check* | `pong` |
| `GET /status` | Báo cáo sức khỏe hệ thống | *Full health report* | `{status, uptime_secs}` |

### Structured Logging
Sử dụng framework `tracing` với logging có cấu trúc và phân cấp:
- **INFO** — Sự kiện vận hành bình thường
- **WARN** — Vấn đề có thể phục hồi (retry credential cleanup)
- **ERROR** — Thao tác thất bại cần điều tra
- **TRACE** — Thông tin debug chi tiết

*Structured, leveled logging with contextual metadata for efficient filtering and audit analysis.*

---

## ✅ Danh Sách Kiểm Tra Bảo Mật / Security Checklist

| Hạng mục | *Area* | Trạng thái | Chi tiết |
|---------|--------|------------|----------|
| Mã hóa credential | *Encryption* | ✅ | AES-256-GCM cho tất cả mật khẩu lưu trữ |
| Xóa credential | *Cleanup* | ✅ | Xóa ngay + xác nhận sau mỗi lần dùng |
| Ngăn SQL injection | *SQL Injection* | ✅ | Escape tích hợp + validation |
| Ngăn Path traversal | *Path Traversal* | ✅ | Character validation trên tất cả tham số file |
| Validation HTTP | *Input Validation* | ✅ | Mọi tham số HTTP đều qua validation |
| An toàn bộ nhớ | *Memory Safety* | ✅ | Đảm bảo bởi ownership system của Rust |
| Non-blocking I/O | *Async I/O* | ✅ | spawn_blocking cho mọi blocking operation |
| Connection health | *Pool Health* | ✅ | Health check tự động + pool management |
| Graceful shutdown | *Shutdown* | ✅ | Broadcast-based, đảm bảo clean |
| Structured logging | *Logging* | ✅ | Leveled, contextual, qua tracing |

---

## 📄 Tuyên bố pháp lý / Legal Disclaimer

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn. Mọi thương hiệu thuộc sở hữu của chủ tương ứng. Dự án không liên kết với DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.

*This document is for reference and consulting purposes. All trademarks belong to their respective owners. This project is not affiliated with DXC Technology, Sun Life, or any third party mentioned.*
