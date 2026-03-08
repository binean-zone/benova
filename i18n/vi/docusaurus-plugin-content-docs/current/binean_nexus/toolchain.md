# 🛠️ Bộ Công Cụ Nexus / Nexus Toolchain

> **"Mỗi vấn đề cần một công cụ đúng đắn. Nexus mang đến tất cả — trong một nền tảng thống nhất."**
>
> *"Every problem deserves the right tool. Nexus delivers them all — in one unified platform."*

---

## 🎯 Hệ Sinh Thái DevOps Hoàn Chỉnh / A Complete DevOps Ecosystem

Bộ công cụ Nexus là tập hợp các công cụ **được thiết kế riêng cho Ingenium** — không phải giải pháp chung chung, mà là câu trả lời trực tiếp cho từng vấn đề vận hành mà đội ngũ của bạn đang đối mặt hàng ngày.

*The Nexus Toolchain is a suite of purpose-built tools designed specifically for Ingenium — not generic solutions, but direct answers to the exact operational challenges your teams face every day.*

> **Một nền tảng. Mọi quy trình. Từ dòng code đầu tiên đến production.**
> *One platform. Every workflow. From the first line of code to production.*

---

## ⚙️ icomp — Trình Biên Dịch Thông Minh / Intelligent Compiler

### Vấn đề bạn đang gặp phải
*The problem you're facing today*

Biên dịch hệ thống Ingenium là một trong những công việc **tốn thời gian và rủi ro nhất** trong chu kỳ phát triển. Một build đầy đủ có thể bao gồm hàng trăm chương trình COBOL với phụ thuộc phức tạp. Cách tiếp cận truyền thống yêu cầu lập trình viên **tự tay** xác định chương trình nào cần biên dịch lại — quy trình chậm, không đáng tin cậy, và phụ thuộc vào kinh nghiệm của một vài người.

*Compiling an Ingenium system is one of the most time-consuming and error-prone tasks in the development lifecycle. Traditional approaches require developers to manually identify which programs need recompilation — slow, unreliable, and dependent on tribal knowledge.*

### Giải pháp icomp
*The icomp solution*

**icomp** là engine biên dịch tích hợp Git, **tự động phân tích thay đổi** giữa các nhánh để xác định chính xác chương trình nào cần build lại — không hơn, không kém.

*icomp is a Git-aware intelligent compilation engine that automatically analyzes code changes between branches to determine exactly which programs need rebuilding — nothing more, nothing less.*

```
  Git Repository
       │
       ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│Diff Analysis│────▶│ Dependency  │────▶│ Incremental │
│(Git Branch) │     │   Graph     │     │    Build    │
└─────────────┘     └─────────────┘     └─────────────┘
```

1. **Phát hiện thay đổi** — So sánh nhánh hiện tại với nhánh mục tiêu (e.g. `main`)
2. **Giải quyết phụ thuộc** — Dò đồ thị phụ thuộc COBOL để tìm tất cả chương trình bị ảnh hưởng
3. **Build tăng dần** — Chỉ biên dịch những gì thực sự cần

### Kết quả thực tế / Real Results

| Chỉ số | *Metric* | Phương pháp cũ | Với icomp |
|--------|----------|----------------|-----------|
| Phạm vi build | *Build scope* | Toàn bộ (100%) | Chỉ thay đổi + phụ thuộc (~5–15%) |
| Thời gian build | *Build time* | Hàng giờ | Vài phút |
| Rủi ro lỗi thủ công | *Human error* | Cao (chọn tay) | Bằng không (tự động) |
| Tích hợp Git | *Git integration* | Không có | So sánh nhánh gốc |

### Trải nghiệm lập trình viên / Developer Experience
- Chạy trực tiếp từ VS Code hoặc command line
- Báo cáo tiến trình rõ ràng: đếm lỗi, cảnh báo, tên file
- Kết quả tương thích với panel "Problems" của VS Code — nhấp vào lỗi, nhảy thẳng đến dòng code

*Runs from VS Code or CLI. Clear progress reporting. Output compatible with VS Code's Problem panel for instant error navigation.*

---

## 🏢 iman — Quản Lý Ingenium / Ingenium Manager

### Vấn đề
*The problem*

Quản lý worker COBOL của Ingenium trên môi trường Dev (Windows) và Production (Linux) đòi hỏi kiến thức chuyên sâu về từng nền tảng. Trên Windows cần debug với IDE, trên Linux cần nhiều process song song — hai thế giới khác nhau, không có công cụ nào quản lý được cả hai.

*Managing Ingenium's COBOL workers across Windows (Dev) and Linux (Production) requires deep platform-specific knowledge. No single tool managed both — until now.*

### Giải pháp / Solution

**iman** cung cấp quản lý worker thống nhất trên mọi nền tảng, với hành vi phù hợp từng môi trường:

*iman provides unified worker management across all platforms, with environment-appropriate behavior:*

#### Trên Windows (Dev)
- **Worker debug đơn** — Một process debug mode, tự động attach vào Rocket COBOL extension
- **Step-through debugging** — Debug COBOL từng dòng ngay trong VS Code
- **Feedback tức thì** — Thấy kết quả thực thi COBOL realtime

#### Trên Linux (Production)
- **Multi-worker song song** — Khởi chạy N worker process đồng thời (số lượng cấu hình được)
- **Quản lý process** — Start, stop, monitor tất cả worker từ một lệnh
- **Graceful shutdown** — Đảm bảo tất cả transaction đang xử lý hoàn tất trước khi dừng

### Lộ trình: Nền tảng cho Nova App / Future: Nova App Foundation

> iman không chỉ là công cụ quản lý — đây là **mầm mống của Nova App**, core bảo hiểm thế hệ mới viết hoàn toàn bằng Rust.
>
> *iman is not just a management tool — it's the seed of Nova App, the next-generation insurance core written entirely in Rust.*

Lộ trình giai đoạn Orbit:
- **MIR API** — PathFinder gọi Ingenium trực tiếp, bypass hoàn toàn MQ layer
- **REST API** — Giao diện HTTP hiện đại cho tích hợp ứng dụng mới
- **99.99% Availability** — Truy vấn thông tin hợp đồng kể cả khi đang chạy batch
- **Autoscaling** — Tự điều chỉnh số worker theo tải thực tế

---

## 🌐 isman — Server Quản Lý Trung Tâm / Central Management Server

### Vấn đề
*The problem*

Vận hành Ingenium trên nhiều môi trường (Dev, ST, AT, Production) đồng nghĩa với hàng chục thao tác thủ công: deploy policy update, transfer artifacts, lên lịch job, theo dõi sức khỏe hệ thống — mỗi thứ một cách làm riêng, không có một trung tâm điều phối nào.

*Operating Ingenium across multiple environments means dozens of manual tasks with no single control plane. isman changes that.*

### Giải pháp: isman
*The solution: isman*

HTTP server hiệu năng cao — **trung tâm điều phối toàn bộ hoạt động Ingenium**.

*A high-performance HTTP server serving as the central operations hub for all Ingenium management tasks.*

#### 📦 Quản lý Policy (ipol) / Policy Management

| Thao tác | *Operation* | Mô tả |
|----------|-------------|-------|
| **Copy** | *Copy* | Sao chép policy configuration giữa các môi trường |
| **Export** | *Export* | Đóng gói artifacts thành archive nén (.zst) |
| **Import** | *Import* | Deploy policy archive lên môi trường mục tiêu |
| **Upload/Download** | *Transfer* | Transfer artifacts qua HTTP cho cross-network deployment |
| **Task Tracking** | *Audit* | Audit trail đầy đủ của mọi thao tác |

#### ⏰ Job Scheduler
Lên lịch tác vụ tự động: thread pool cấu hình được, graceful shutdown, broadcast-based coordination.

*Automated task scheduling with configurable thread pools and graceful shutdown.*

#### 💓 Giám sát sức khỏe / Health Monitoring
- `/ping` — Kiểm tra kết nối | *Connectivity check*
- `/status` — Uptime + trạng thái hệ thống realtime | *Real-time health report*

---

## 📦 ipol — Quản Lý Policy CLI / Policy Manager (CLI)

Khi không cần server đầy đủ, **ipol** cung cấp truy cập command-line trực tiếp vào các thao tác policy:

*For scenarios where a full server isn't needed, ipol provides direct CLI access:*

```bash
# Sao chép policy từ DEV sang ST / Copy policy from DEV to ST
ipol copy DEV ST POLICY_001

# Sao chép với tag cụ thể / Copy with specific tag
ipol copy DEV ST POLICY_001 --tag v2.1
```

Lý tưởng cho:
- Thao tác một lần nhanh | *Quick one-off operations*
- Tự động hóa trong CI/CD pipeline
- Môi trường không muốn chạy server thường trực

---

## 🖥️ nexus — Điều Phối Môi Trường / Environment Orchestrator

CLI trung tâm kết nối toàn bộ hệ sinh thái:

*The CLI command-center tying the entire ecosystem together:*

- **Quản lý môi trường** — Switch tức thì giữa Dev, ST, AT, Production
- **Điều phối công cụ** — Khởi chạy và cấu hình các công cụ Nexus khác
- **Sinh configuration** — Tự động sinh cài đặt theo môi trường
- **Quản lý license** — Xử lý license và activation

---

## 🔗 Workflow Lập Trình Viên Hàng Ngày / Daily Developer Workflow

```
1. Mở VS Code  →  Extension khởi tạo workspace
   Open VS Code → Extension initializes workspace

2. Viết code   →  Git tự động theo dõi thay đổi
   Write code  → Git tracks changes automatically

3. Build       →  icomp chỉ build những gì thay đổi
   Build       → icomp compiles only what changed

4. Test local  →  iman chạy debug worker
   Test local  → iman runs debug worker

5. Deploy ST   →  isman/ipol copy policy lên staging
   Deploy ST   → isman/ipol copies policy to staging

6. Giám sát   →  /status confirms system health
   Monitor    → /status confirms system health

7. Lên PROD    →  Cùng toolchain, khác target
   Go PROD    → Same toolchain, different target
```

> Sức mạnh của Nexus Toolchain không chỉ ở từng công cụ riêng lẻ — mà ở cách chúng **hợp thành một workflow liền mạch**: từ dòng code đầu tiên đến production, mọi bước đều được tự động hóa, kiểm tra và có thể kiểm toán.
>
> *The power of the Nexus Toolchain lies not in individual tools, but in how they compose into a seamless workflow — automated, validated, and auditable from first commit to production.*

---

## 📄 Tuyên bố pháp lý / Legal Disclaimer

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn. Mọi thương hiệu thuộc sở hữu của chủ tương ứng. Dự án không liên kết với DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được đề cập.

*This document is for reference and consulting purposes. All trademarks belong to their respective owners. This project is not affiliated with DXC Technology, Sun Life, or any third party mentioned.*
