# 🔌 Binean Nova VsCode Extension

---

## 🎯 Giới thiệu

**Binean Nova Extension** là một bộ công cụ mạnh mẽ tích hợp trong **Visual Studio Code (VS Code)**, được thiết kế để cách mạng hóa quy trình phát triển và vận hành (DevOps) cho hệ thống Ingenium.

Làm việc với một hệ thống kế thừa (legacy) như Ingenium thường đi kèm với các quy trình thủ công, phức tạp và dễ xảy ra lỗi. **Binean Nova Extension** ra đời như một giải pháp toàn diện, phá vỡ những rào cản này và mang lại trải nghiệm phát triển hiện đại, liền mạch và hiệu quả ngay trên môi trường VS Code quen thuộc.

Mặc dù môi trường triển khai chính thức (Production) của Nova là Linux, môi trường phát triển phổ biến lại là Windows. Để đảm bảo sự đồng nhất và giảm thiểu lỗi, chúng tôi khuyến khích sử dụng Windows Subsystem for Linux (WSL) làm môi trường phát triển chuẩn. Tuy nhiên, do nhiều doanh nghiệp có chính sách hạn chế WSL, **Binean Nova Extension** được thiết kế để hỗ trợ linh hoạt cả hai: ưu tiên hỗ trợ trực tiếp trên Windows trước, đồng thời đảm bảo tương thích hoàn toàn với WSL.

---

## 📋 Yêu cầu cài đặt

Để sử dụng **Binean Nova Extension**, môi trường của bạn cần đáp ứng các yêu cầu sau:

- **Phần mềm bắt buộc:**
  - Visual Cobol
  - Db2 Server (hoặc Db2 Client)
- **Tiện ích VS Code đi kèm:**
  - `Rocket COBOL` (của OpenText)
  - `Cobol` (của BitLang)
  - `Git`

---

## ✨ Thành phần chính

**Binean Nova Extension** được cấu thành từ nhiều công cụ chuyên biệt, mỗi công cụ giải quyết một bài toán cụ thể trong quy trình làm việc với Ingenium. Bộ công cụ này sẽ liên tục được mở rộng trong tương lai để đáp ứng các nhu cầu mới của dự án.

### 1. Nexus Core
- **Nền tảng điều phối:** Cung cấp các tính năng cốt lõi như quản lý cấu hình đa môi trường (Dev, ST, AT), tự động thiết lập biến môi trường, và là trung tâm điều phối cho các thành phần khác.
- **Tích hợp VS Code:** Đảm bảo các công cụ bên dưới có thể tương tác liền mạch với giao diện VS Code, chẳng hạn như hiển thị lỗi trong tab "Problems".

### 2. Bộ công cụ biên dịch `icomp` & `igo`
- **`icomp` (Cho Lập trình viên):** Công cụ biên dịch thông minh, tích hợp sâu với Git để phân tích và biên dịch tăng dần (incremental compilation) các chương trình bị ảnh hưởng khi chuyển đổi branch. `icomp` giúp tiết kiệm thời gian và đảm bảo tính chính xác ngay trên môi trường phát triển.
- **`igo` (Cho DevOps - Sẽ phát triển sau):** Là phiên bản mở rộng của `icomp`, được thiết kế để tự động hóa hoàn toàn quy trình biên dịch và đóng gói trên môi trường máy chủ. `igo` sẽ là nhân tố chính để tích hợp liền mạch vào các pipeline CI/CD trong tương lai.

### 3. Trình quản lý `iman`
- **Nền tảng cho Nova App:** Ở giai đoạn hiện tại, `iman` (Ingenium Manager) là công cụ quản lý các worker COBOL của Ingenium. Tuy nhiên, đây không chỉ là một tiện ích, mà còn là nền tảng ban đầu sẽ được phát triển để trở thành **Nova App** – core bảo hiểm thế hệ mới viết bằng Rust. Lộ trình dài hạn là dần tích hợp logic nghiệp vụ vào chính `iman`, từng bước biến nó thành một core bảo hiểm hoàn chỉnh.
- **Quản lý Worker đa nền tảng:**
  - **Trên Windows (Dev):** Hỗ trợ chạy một tiến trình (worker) duy nhất ở chế độ debug, cho phép tự động "attach" và gọi lại extension `Rocket COBOL` để gỡ lỗi chương trình.
  - **Trên Linux (Server):** Hỗ trợ khởi chạy nhiều tiến trình worker song song, với số lượng được cấu hình sẵn, giúp tăng hiệu suất xử lý.
- **Bảo mật:** Tích hợp tính năng mã hóa mật khẩu kết nối cơ sở dữ liệu, tăng cường an toàn cho hệ thống.
- **Lộ trình phát triển (Giai đoạn Orbit):** Trong giai đoạn **Orbit**, `iman` sẽ được nâng cấp mạnh mẽ, trở thành một dịch vụ trung tâm với các tính năng đột phá:
  - **Chạy như một MIR API:** Cung cấp một giao diện API chuyên dụng cho phép PathFinder gọi trực tiếp Ingenium bằng định dạng MIR, bỏ qua hoàn toàn lớp MQ (ActiveMQ/IBM MQ). Điều này giúp giảm độ trễ và đơn giản hóa kiến trúc cho các hệ thống cũ.
  - **Chạy như một REST API:** Song song với MIR API, `iman` cũng sẽ được triển khai như một dịch vụ RESTful, cho phép các ứng dụng hiện đại dễ dàng tích hợp.
  - **Hỗ trợ 24/7:** Cung cấp khả năng truy vấn một số thông tin hợp đồng ngay cả khi hệ thống đang chạy các batch job, đảm bảo tính sẵn sàng cao.
  - **Tự động co giãn (Autoscaling):** Tự động điều chỉnh số lượng tiến trình xử lý dựa trên tải công việc thực tế.

### 4. Trình chạy batch `ibatch`
- **Chạy Batch Job đa nền tảng:** `ibatch` là công cụ chuyên dụng để thực thi các Ingenium batch job.
- **Hỗ trợ Windows & Linux:** Đảm bảo các batch job có thể chạy nhất quán trên cả môi trường phát triển (Windows) và môi trường máy chủ (Linux).

---

## 🚀 Tính năng ban đầu

Phiên bản hiện tại của extension cung cấp các tính năng nền tảng để khởi tạo và cấu hình môi trường làm việc (sẽ được mở rộng trong tương lai):

### 1. `Initialize Ingenium Cobol Workspace`
- **Mục đích:** Khởi tạo nhanh một không gian làm việc (workspace) chuẩn cho dự án Ingenium.
- **Hoạt động:** Lệnh này sẽ tự động tạo các tệp cấu hình cần thiết trong thư mục `.vscode`.
- **Cấu hình người dùng:** Sau khi khởi tạo, người dùng cần cung cấp các thông tin quan trọng như đường dẫn cài đặt Visual Cobol, thông tin đăng nhập Db2, v.v. (sẽ có hướng dẫn chi tiết trong tài liệu của extension).

### 2. `Update Configuration`
- **Mục đích:** Đồng bộ hóa cấu hình và tạo môi trường dòng lệnh chuyên dụng.
- **Hoạt động:** Dựa trên các thông tin người dùng đã cung cấp, lệnh này sẽ tạo ra một tệp `Noval.cmd`.
- **Môi trường chuyên dụng:** Tệp `Noval.cmd` dùng để mở một cửa sổ dòng lệnh đã được thiết lập sẵn các biến môi trường cần thiết. Tất cả các công cụ trong dự án Nova (`icomp`, `igo`, `iman`) đều yêu cầu chạy trong môi trường này. Một shortcut của tệp sẽ được đặt trên Desktop để tiện truy cập.

---

## 💡 Lợi ích mang lại

- **Tăng tốc phát triển:** Loại bỏ các thao tác thủ công, lặp đi lặp lại, giúp lập trình viên tập trung hoàn toàn vào việc sáng tạo và phát triển logic nghiệp vụ.
- **Nâng cao chất lượng:** Tự động hóa và biên dịch thông minh đảm bảo tính nhất quán, chính xác, giảm thiểu tối đa rủi ro do con người gây ra.
- **Chuẩn hóa quy trình làm việc:** Thiết lập một quy trình DevOps hiện đại, dễ tiếp cận cho lập trình viên mới và dễ dàng quản lý cho toàn đội.
- **Hiện đại hóa trải nghiệm lập trình:** Mang sức mạnh và sự linh hoạt của DevOps hiện đại vào một hệ thống truyền thống, tạo ra một môi trường làm việc hiệu quả và đầy cảm hứng.

---

**Binean Nova Extension** là mảnh ghép quan trọng của dự án Nova, biến VS Code thành một trung tâm chỉ huy (command center) mạnh mẽ cho việc phát triển và vận hành Ingenium trong suốt hành trình hiện đại hóa.