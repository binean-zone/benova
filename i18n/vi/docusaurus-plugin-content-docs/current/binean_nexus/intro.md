# 🌐 Nexus — Nền Tảng Chuyển Đổi Số Cho Ngành Bảo Hiểm

> **"Trước khi có thể nâng cấp động cơ, bạn cần một xưởng đẳng cấp thế giới."**
>
> *"Before you can transform the engine, you need a world-class workshop."*

---

## 💢 Vấn đề bạn đang đối mặt mỗi ngày

Nếu doanh nghiệp của bạn đang vận hành hệ thống lõi **Ingenium**, bạn hiểu rõ hơn ai hết những áp lực mà đội ngũ phải gánh chịu:

- ⏳ Biên dịch một lần thay đổi nhỏ tốn **hàng giờ** — lập trình viên chờ, năng suất đình trệ
- 🔧 Triển khai lên môi trường mới là quy trình **thủ công đầy rủi ro**, không ai dám làm vội
- 🔐 Mật khẩu cơ sở dữ liệu **lưu dạng plain-text** trong file cấu hình — mỗi lần audit là một lần lo lắng
- 📊 Không ai thực sự biết hệ thống đang **khỏe hay đang sắp sập** cho đến khi sự cố xảy ra
- 🏗️ Kiến thức vận hành **nằm trong đầu một vài người** — rủi ro cực cao khi họ rời đi

*These are the daily realities for enterprises running legacy Ingenium systems: hours lost to manual compilation, error-prone deployments, plain-text passwords, zero visibility, and institutional knowledge locked inside a few people's heads.*

---

## 🚀 Nexus — Giải Pháp Chuyển Đổi Toàn Diện

**Nexus** là giai đoạn đầu tiên và nền tảng quan trọng nhất trong lộ trình **Binean Nova** — một hệ sinh thái DevOps được xây dựng riêng cho Ingenium, giải quyết trực tiếp từng vấn đề trên và mang lại **giá trị tức thì ngay từ ngày đầu triển khai**.

*Nexus is the first and most critical phase of the Binean Nova transformation roadmap — a DevOps ecosystem purpose-built for Ingenium that solves each of these problems head-on, delivering measurable ROI from day one.*

| Thách thức hiện tại | Giải pháp Nexus | *Nexus Solution* |
|---|---|---|
| Build thủ công mất hàng giờ | **icomp** — Biên dịch thông minh, chỉ build những gì thay đổi | *Intelligent incremental compilation* |
| Triển khai dễ lỗi, tốn nhân lực | **isman + ipol** — Tự động hóa hoàn toàn quy trình deploy | *Fully automated policy deployment* |
| Không có môi trường phát triển chuẩn | **VS Code Extension** — Workspace khởi tạo chỉ một lần nhấn | *One-click workspace setup* |
| Mật khẩu lưu plain-text | **Mã hóa AES-256-GCM** — Tiêu chuẩn quân sự, không bao giờ plain-text | *Military-grade credential encryption* |
| Thiếu tầm nhìn hệ thống | **Health Monitoring** — Theo dõi uptime và trạng thái realtime | *Real-time health monitoring* |
| Kiến thức vận hành phân tán | **Quy trình chuẩn hóa** — Mọi thao tác đều có thể tái lặp và kiểm soát | *Standardized, repeatable operations* |

---

## 📈 Giá Trị Thực Tế — Không Phải Lời Hứa

Nexus không bán tầm nhìn — Nexus giải quyết vấn đề ngay hôm nay:

- ⚡ **Thời gian build giảm từ hàng giờ xuống còn vài phút** — icomp chỉ biên dịch đúng những gì thay đổi, không làm thừa một dòng code nào
- 🎯 **Triển khai zero-error** — Quy trình deploy được tự động hóa, kiểm tra và xác nhận từng bước
- 🔒 **Vượt qua mọi audit bảo mật** — AES-256-GCM, không có plain-text password, đầy đủ log kiểm tra
- 👨‍💻 **Onboard lập trình viên mới trong một buổi chiều** — Không còn phụ thuộc vào "người biết"
- 📊 **Biết hệ thống đang như thế nào — mọi lúc** — Dashboard status realtime, cảnh báo chủ động

*Real results, not promises: build times drop from hours to minutes, deployments become zero-error automated pipelines, security audits pass first time, new developers onboard in hours, and you always know your system health.*

---

## 🏗️ Kiến Trúc Tổng Quan

Nexus được xây dựng như một **workspace Rust mô-đun** — tập hợp các công cụ chuyên biệt hoạt động độc lập nhưng tích hợp liền mạch. Mỗi thành phần có thể triển khai và nâng cấp mà không ảnh hưởng đến phần còn lại.

*Nexus is a modular Rust workspace — specialized tools that work independently yet integrate seamlessly. Each component deploys and upgrades without disrupting the others.*

```
┌─────────────────────────────────────────────────────┐
│              🖥️ VS Code Extension                    │
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
    └──┴──┬───┴──┴──┬───┴──┴───┬────┴──┴────────┘  │
           └─────────┴──────────┘
                     │
    ┌────────────────▼────────────────────────────┐
    │           Core Library (Rust)                │
    │  Terminal │ DB2 │ AES-256 │ SSH │ Pool       │
    └─────────────────────────────────────────────┘
```

---

## 🧩 Các Thành Phần Cốt Lõi

### 🔧 Core Library — Nền tảng bất biến
*The battle-tested foundation*

Thư viện lõi cung cấp: **terminal abstraction** (local & SSH), **tích hợp DB2**, **mã hóa AES-256-GCM**, **engine thực thi song song**, và **quản lý process đa nền tảng**. Mọi công cụ Nexus đều xây dựng trên nền tảng này.

*Provides universal capabilities: terminal abstraction (local & SSH), DB2 integration, AES-256-GCM encryption, parallel execution engine, and cross-platform process management.*

### ⚙️ icomp — Trình biên dịch thông minh
*The Intelligent Compiler*

Phân tích Git để **chỉ biên dịch những gì thay đổi**. Build thời gian giảm từ hàng giờ xuống vài phút — không ai phải chờ, không ai phải đoán.

*Git-aware compilation that only builds what changed. Hours of builds become minutes. No waiting, no guesswork.*

### 🏢 isman — Server quản lý trung tâm
*The Central Management Hub*

HTTP server hiệu năng cao (Axum + Tokio) — **trung tâm điều phối** mọi hoạt động Ingenium: quản lý policy, lên lịch job tự động, giám sát sức khỏe hệ thống.

*High-performance HTTP server — the command center for all Ingenium operations: policy management, automated job scheduling, and system health monitoring.*

### 📦 ipol — Quản lý Policy
*The Policy Engine*

Vận hành toàn bộ vòng đời policy: export, import, copy, deploy giữa các môi trường. Không thao tác thủ công, không rủi ro.

*Full policy lifecycle management: export, import, copy, and deploy across environments — automated, validated, auditable.*

### 🔌 VS Code Extension — Trung tâm chỉ huy
*The Developer Command Center*

Biến VS Code thành môi trường phát triển Ingenium chuyên dụng — khởi tạo workspace, quản lý cấu hình, tích hợp liền mạch tất cả công cụ Nexus.

*Transforms VS Code into a dedicated Ingenium development environment — workspace initialization, configuration management, seamless integration with all Nexus tools.*

---

## ⚡ Tại Sao Rust?

Nexus được viết hoàn toàn bằng **Rust** — ngôn ngữ được AWS, Google, Microsoft và Cloudflare tin dùng cho hạ tầng quan trọng.

*Nexus is written entirely in Rust — the language trusted by AWS, Google, Microsoft, and Cloudflare for mission-critical infrastructure.*

| Lợi thế | *Advantage* | Chi tiết |
|---|---|---|
| 🚀 Hiệu năng | *Performance* | Ngang C/C++ — nhanh nhất có thể |
| 🔒 An toàn bộ nhớ | *Memory Safety* | Không buffer overflow, không use-after-free |
| 🧵 Concurrency an toàn | *Safe Concurrency* | Đảm bảo tại compile time |
| 📦 Triển khai đơn giản | *Simple Deployment* | Một file binary duy nhất, không phụ thuộc runtime |

> Rust được bình chọn **ngôn ngữ được yêu thích nhất 8 năm liên tiếp** trong Stack Overflow Developer Survey.
>
> *Rust has been voted the #1 most loved programming language for 8 consecutive years in the Stack Overflow Developer Survey.*

---

## 🛣️ Lộ Trình Chuyển Đổi

Nexus là bước đầu tiên trong một hành trình toàn diện:

```
[Nexus] ──► [Orbit] ──► [Vista] ──► [Apex]
  DevOps     API Layer    Modern UI   New Core
  ngay hôm  bypass MQ    React/Web   Full Rust
  nay!       (Orbit)      (Vista)     Core
```

*Nexus is the first step in a comprehensive modernization journey leading to a fully modern insurance core — each phase building on the last.*

---

## 🚀 Bắt Đầu Hành Trình

Nexus được thiết kế để **áp dụng nhanh, rủi ro thấp**:

1. **Cài Extension VS Code** — Cổng vào hệ sinh thái Nexus
2. **Khởi tạo Workspace** — Một lệnh, toàn bộ môi trường sẵn sàng
3. **Bắt đầu Build thông minh** — Tiết kiệm hàng giờ ngay ngày đầu tiên

*Designed for rapid adoption with minimal risk. Install the extension, initialize once, and start saving hours from day one.*

Để tìm hiểu chi tiết kỹ thuật, xem [Kiến trúc Hệ thống](./architecture).  
Để xem danh sách công cụ đầy đủ, xem [Bộ Công Cụ Nexus](./toolchain).  
Để hiểu về bảo mật & tuân thủ, xem [Bảo Mật & Độ tin cậy](./security).

---

## 📄 Tuyên bố pháp lý / Legal Disclaimer

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn về giải pháp tích hợp và chuyển đổi hệ thống. Tất cả thương hiệu và tên sản phẩm thuộc sở hữu của chủ sở hữu tương ứng. Dự án này không liên kết, bảo lãnh hoặc được tài trợ bởi DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.

*This document is provided for reference and consulting purposes. All trademarks and product names are the property of their respective owners. This project is not affiliated with, sponsored by, or endorsed by DXC Technology, Sun Life, or any other third party mentioned.*
