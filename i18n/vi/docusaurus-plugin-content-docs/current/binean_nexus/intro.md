# 🌐 Nexus — Nền Tảng Chuyển Đổi Số Cho Ngành Bảo Hiểm

> **"Trước khi có thể nâng cấp động cơ, bạn cần một xưởng đẳng cấp thế giới."**

![Sơ đồ kiến trúc NEXUS](/img/Nexus.png)

---

## 💢 Vấn Đề Bạn Đang Đối Mặt Mỗi Ngày

Nếu doanh nghiệp đang vận hành hệ thống lõi **Ingenium**, bạn hiểu rõ hơn ai hết những áp lực mà đội ngũ phải gánh chịu hàng ngày:

- ⏳ Biên dịch một thay đổi nhỏ tốn **hàng giờ** — lập trình viên chờ, năng suất đình trệ
- 🔧 Triển khai lên môi trường mới là quy trình **thủ công đầy rủi ro**, không ai dám làm vội
- 🔐 Mật khẩu cơ sở dữ liệu **lưu dạng plain-text** trong file cấu hình — mỗi lần audit là một lần lo lắng
- 📊 Không ai thực sự biết hệ thống đang **khỏe hay sắp sập** cho đến khi sự cố xảy ra
- 🏗️ Kiến thức vận hành **nằm trong đầu một vài người** — rủi ro cực cao khi họ rời đi

---

## 🚀 Nexus — Giải Pháp Chuyển Đổi Toàn Diện

**Nexus** là giai đoạn đầu tiên và nền tảng quan trọng nhất trong lộ trình **Binean Nova** — một hệ sinh thái DevOps được xây dựng riêng cho Ingenium, giải quyết trực tiếp từng vấn đề trên và mang lại **giá trị tức thì ngay từ ngày đầu triển khai**.

| Thách thức hiện tại | Giải pháp Nexus |
|---|---|
| Build thủ công mất hàng giờ | **icomp** — Biên dịch thông minh, chỉ build những gì thay đổi |
| Triển khai thủ công dễ sai, tốn nhân lực | **isman + ipol** — Tự động hóa hoàn toàn quy trình deploy |
| Không có môi trường phát triển chuẩn | **VS Code Extension** — Workspace khởi tạo chỉ với một lệnh |
| Mật khẩu lưu plain-text | **Mã hóa AES-256-GCM** — Tiêu chuẩn quân sự, không bao giờ plain-text |
| Không có tầm nhìn về trạng thái hệ thống | **Health Monitoring** — Theo dõi uptime và trạng thái realtime |
| Kiến thức vận hành phân tán | **Quy trình chuẩn hóa** — Mọi thao tác đều tái lặp được và kiểm soát được |

---

## 📈 Giá Trị Thực Tế

- ⚡ **Thời gian build giảm từ hàng giờ xuống vài phút** — icomp chỉ biên dịch đúng những gì thay đổi
- 🎯 **Triển khai không lỗi** — Quy trình deploy được tự động hóa, kiểm tra và xác nhận từng bước
- 🔒 **Vượt qua mọi audit bảo mật** — AES-256-GCM, không có plain-text password, đầy đủ log kiểm tra
- 👨‍💻 **Onboard lập trình viên mới trong một buổi chiều** — Không còn phụ thuộc vào "người biết"
- 📊 **Nắm trạng thái hệ thống mọi lúc** — Dashboard realtime, cảnh báo chủ động

---

## 🏗️ Kiến Trúc Tổng Quan

Nexus được xây dựng như một **workspace Rust mô-đun** — tập hợp các công cụ chuyên biệt hoạt động độc lập nhưng tích hợp liền mạch. Mỗi thành phần có thể triển khai và nâng cấp riêng lẻ mà không ảnh hưởng đến phần còn lại.

```
┌─────────────────────────────────────────────────────┐
│              VS Code Extension                       │
│         (Trung tâm điều hành của lập trình viên)    │
└────────┬──────────────────────────────────┬─────────┘
         │                                  │
    ┌────▼────┐                       ┌─────▼─────┐
    │  nexus  │                       │   icomp   │
    │  (CLI)  │                       │(Compiler) │
    └────┬────┘                       └───────────┘
         │
    ┌────▼──────────────────────────────────────────┐
    │           isman (Management Server)            │
    │  ┌──────┐  ┌──────┐  ┌────────┐  ┌────────┐  │
    │  │ ipol │  │  ing │  │  jobs  │  │ health │  │
    └──┴──────┴──┴──────┴──┴────────┴──┴────────┘  │
                     │
    ┌────────────────▼────────────────────────────┐
    │           Core Library (Rust)                │
    │  Terminal | DB2 | AES-256 | SSH | Pool       │
    └─────────────────────────────────────────────┘
```

---

## 🧩 Các Thành Phần Cốt Lõi

### 🔧 Core Library — Nền Tảng Dùng Chung
Cung cấp các khả năng cốt lõi: **terminal abstraction** (local & SSH), **tích hợp DB2**, **mã hóa AES-256-GCM**, **engine thực thi song song**, và **quản lý process đa nền tảng**. Mọi công cụ Nexus đều xây dựng trên nền tảng này.

### ⚙️ icomp — Trình Biên Dịch Thông Minh
Phân tích Git để chỉ biên dịch những gì thay đổi. Thời gian build giảm từ hàng giờ xuống vài phút.

### 🏢 isman — Server Quản Lý Trung Tâm
HTTP server hiệu năng cao (Axum + Tokio) — trung tâm điều phối mọi hoạt động Ingenium: quản lý policy, lên lịch job tự động, giám sát sức khỏe hệ thống.

### 📦 ipol — Quản Lý Policy
Vận hành toàn bộ vòng đời policy: export, import, copy, deploy giữa các môi trường. Tự động, được xác nhận, có đầy đủ audit trail.

### 🔌 VS Code Extension — Trung Tâm Chỉ Huy
Biến VS Code thành môi trường phát triển Ingenium chuyên dụng — khởi tạo workspace, quản lý cấu hình, tích hợp liền mạch với tất cả công cụ Nexus.

---

## ⚡ Tại Sao Rust?

Nexus được viết hoàn toàn bằng **Rust** — ngôn ngữ được AWS, Google, Microsoft và Cloudflare tin dùng cho hạ tầng quan trọng.

| Lợi thế | Chi tiết |
|---|---|
| 🚀 Hiệu năng tối đa | Ngang C/C++, không có overhead ẩn |
| 🔒 An toàn bộ nhớ | Không buffer overflow, không use-after-free |
| 🧵 Concurrency an toàn | Đảm bảo tại compile time, không data race |
| 📦 Triển khai đơn giản | Một file binary duy nhất, không phụ thuộc runtime |

> Rust được bình chọn là **ngôn ngữ được yêu thích nhất 8 năm liên tiếp** trong Stack Overflow Developer Survey.

---

## 🛣️ Lộ Trình Chuyển Đổi

Nexus là bước đầu tiên trong hành trình hiện đại hóa toàn diện:

| Giai đoạn | Trọng tâm |
|---|---|
| **Nexus** | Tự động hóa DevOps, công cụ thông minh — mang lại giá trị ngay hôm nay |
| **Orbit** | iman trở thành API layer, bypass MQ, đảm bảo 99.99% uptime |
| **Vista** | Thay thế giao diện JSP bằng React hiện đại |
| **Apex** | Core bảo hiểm thế hệ mới hoàn toàn bằng Rust |

---

## 🚀 Bắt Đầu Hành Trình

Nexus được thiết kế để **áp dụng nhanh, rủi ro thấp**:

1. **Cài Extension VS Code** — Cổng vào hệ sinh thái Nexus
2. **Khởi tạo Workspace** — Một lệnh, toàn bộ môi trường sẵn sàng
3. **Build thông minh ngay** — Tiết kiệm hàng giờ từ ngày đầu tiên

Xem chi tiết kỹ thuật: [Kiến trúc Hệ thống](./architecture) · [Bộ Công Cụ Nexus](./toolchain) · [Bảo Mật & Độ Tin Cậy](./security)

---

## 📄 Tuyên Bố Pháp Lý

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn về giải pháp tích hợp và chuyển đổi hệ thống. Tất cả thương hiệu và tên sản phẩm thuộc sở hữu của chủ sở hữu tương ứng. Dự án này không liên kết, bảo lãnh hoặc được tài trợ bởi DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.
