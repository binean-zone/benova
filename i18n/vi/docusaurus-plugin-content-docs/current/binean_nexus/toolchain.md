# 🛠️ Bộ Công Cụ Nexus

> **"Mỗi giờ chờ biên dịch là một giờ không mang lại giá trị cho khách hàng."**

---

## Những Vấn Đề Mà Nexus Giải Quyết

Trước Nexus, đội ngũ IT tại các tập đoàn bảo hiểm dùng Ingenium phải đối mặt hàng ngày với:

- ⏳ Biên dịch COBOL thủ công ngốn **nhiều giờ** cho mỗi thay đổi nhỏ
- 🔁 Copy-paste lệnh giữa máy dev và server — nguồn gốc của mọi lỗi "hoạt động trên máy tôi"
- 🔒 Quản lý mật khẩu DB2 và SSH rải rác trong file config, rủi ro bảo mật cao
- 📦 Quản lý policy bảo hiểm thủ công, dễ nhầm lẫn khi migrate giữa môi trường
- 🌩️ Không có công cụ tự động hóa batch processing hàng đêm đáng tin cậy

Nexus giải quyết **tất cả** những vấn đề này với bộ công cụ được xây dựng chuyên biệt.

---

## ⚡ `icomp` — Trình Biên Dịch Thông Minh

Hệ thống biên dịch COBOL thế hệ mới cho Ingenium — từ hàng giờ xuống còn **vài phút**, từ rủi ro sai lệnh xuống **không bao giờ sai**.

### Tại Sao icomp Nhanh Đến Vậy?

| Vấn đề cũ | Giải pháp icomp | Kết quả |
|-----------|-----------------|---------|
| Biên dịch tuần tự, từng file | **Phân tích dependency graph** — biên dịch song song tối đa | Nhanh gấp 5–10x |
| Không biết file nào cần recompile | **Phát hiện thay đổi thông minh** — chỉ biên dịch phần bị ảnh hưởng | Tránh biên dịch thừa |
| Lệnh thủ công dài, dễ nhầm | **API đơn giản một lệnh** | Không còn lỗi người dùng |

### Tính Năng Chính

- 🔍 **Phân tích dependency COBOL** — tự động xác định thứ tự và phạm vi biên dịch
- 🚀 **Biên dịch song song** — tận dụng tất cả CPU cores có sẵn
- 📊 **Báo cáo chi tiết** — thời gian, kết quả, danh sách lỗi với context đầy đủ
- 🔄 **Incremental build** — chỉ rebuild những gì thực sự thay đổi

---

## 🖥️ `iman` — Quản Lý Ingenium

Giao diện dòng lệnh thống nhất cho tất cả thao tác Ingenium, **hoạt động giống hệt** trên Windows lẫn Linux — không có sự khác biệt nào.

| Tính năng | Windows | Linux (Production) |
|-----------|---------|---------------------|
| Quản lý Ingenium process | ✅ | ✅ |
| Thao tác file system | ✅ | ✅ |
| Tương tác DB2 | ✅ | ✅ |
| Quản lý COBOL artifacts | ✅ | ✅ |
| Remote server management | ✅ qua SSH | ✅ native |

---

## 🌐 `isman` — Management Server

Server quản lý trung tâm cho phép **automation, monitoring và tích hợp bên ngoài** mà không cần đăng nhập thủ công vào server.

### Kiến Trúc isman

```
Dashboard / CI/CD
       │
       │ REST API
       ▼
┌─────────────────┐
│   isman server  │
│   (Axum/Tokio)  │
├─────────────────┤
│  Policy Service │──────▶ Môi trường Ingenium
│  Batch Scheduler│──────▶ Job hàng đêm
│  Health Monitor │──────▶ Cảnh báo & alert
└─────────────────┘
```

### Tính Năng Chính

| Tính năng | Mô tả |
|-----------|-------|
| **REST API** | Tất cả thao tác đều có API — dễ tích hợp CI/CD, dashboard |
| **Scheduler tích hợp** | Lên lịch batch job không cần cron riêng |
| **Health monitoring** | Theo dõi uptime server Ingenium, cảnh báo khi có vấn đề |
| **Zero-downtime deploy** | Hot reload config mà không restart |
| **Connection pooling** | Tái sử dụng kết nối SSH và DB2, hiệu năng cao |

---

## 📋 `ipol` — Quản Lý Policy

Wrapper chuyên biệt trên `isman` cho phép **copy policy giữa các môi trường** một cách an toàn và có kiểm soát.

### Ví Dụ Workflow

```bash
# Copy policy từ TEST sang PROD
ipol copy --from test --to prod --id POL-2024-001

# Export toàn bộ policy artifacts để backup
ipol export --env test --out ./exports/daily-backup.tar.zst

# Import policy vào môi trường mới
ipol import --env prod --file ./exports/daily-backup.tar.zst
```

---

## 🧩 `nexus` CLI — Điều Phối Môi Trường

Công cụ cốt lõi khởi tạo và quản lý cấu hình toàn bộ môi trường Nexus — **một lệnh để bắt đầu mọi thứ**.

```bash
# Khởi tạo workspace mới
nexus init

# Kiểm tra trạng thái tất cả kết nối
nexus status

# Quản lý thông tin kết nối (mã hóa AES-256-GCM)
nexus credentials add
nexus credentials list
```

---

## 🔄 Workflow Hàng Ngày Với Nexus

```
     Buổi sáng
         │
         ▼
┌──────────────────┐
│  nexus status    │ ← Kiểm tra tất cả server online
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  Code → icomp    │ ← Biên dịch thay đổi (nhanh gấp 10x)
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  iman test       │ ← Chạy test trên môi trường dev
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  ipol copy       │ ← Promote policy lên staging/prod
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│  isman monitor   │ ← Theo dõi health production
└──────────────────┘
```

---

## 📄 Tuyên Bố Pháp Lý

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn. Mọi thương hiệu thuộc sở hữu của chủ tương ứng. Dự án không liên kết với DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.
