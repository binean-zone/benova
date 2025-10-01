# 🏢 Ingenium – Hệ Thống Core Bảo Hiểm Chuyên Dụng

**Ingenium** là hệ thống lõi (core system) dành cho ngành bảo hiểm, được thiết kế để quản lý toàn diện các quy trình nghiệp vụ phức tạp. Từ tiếp nhận yêu cầu, xử lý hợp đồng, đến thanh toán quyền lợi. Trong nhiều năm, Ingenium đã là nền tảng vững chắc, đảm bảo sự ổn định, bảo mật và tuân thủ các tiêu chuẩn khắt khe của ngành tài chính – bảo hiểm.

![Sơ đồ kiến trúc Ingenium](/img/ingenium.png)

---

## 🗺️ Tổng quan kiến trúc

Ingenium được triển khai theo mô hình on-premise trên nền tảng AIX và cơ sở dữ liệu Db2. Kiến trúc được phân tách thành các lớp chức năng rõ ràng, giúp tối ưu hóa việc bảo trì và mở rộng hệ thống:

- **Presentation & Integration Layer**: Giao diện người dùng, tích hợp hệ thống ngoài.
- **Network Layer**: Điều phối, truyền thông giữa các thành phần.
- **Application Layer**: Xử lý nghiệp vụ bảo hiểm.
- **Data Layer**: Lưu trữ, quản lý dữ liệu nghiệp vụ.

---

## Các thành phần chính

## 🌐 PathFinder
* Presentation & Integration Layer: UI Server kiêm cổng tích hợp (integration gateway).
* Phát triển bằng Java, triển khai trên WebSphere HTTP Server (AIX On-premise).
* Hỗ trợ tùy biến linh hoạt để đáp ứng yêu cầu nghiệp vụ của từng doanh nghiệp.

## 📦 MQ Server
* Network Layer: Trung tâm điều phối, truyền thông giữa các thành phần.
* Quản lý các hàng đợi (Dispatcher Queue, Input Queue, Output Queue), đảm bảo xử lý tuần tự, chính xác.
* Cầu nối giữa PathFinder và Ingenium, sử dụng message **MIR** (binary COBOL Copybook).

## ⚙️ Ingenium
* Application Layer: "Business core" – trung tâm xử lý nghiệp vụ bảo hiểm.
* Nhiều module COBOL chạy trên AIX, đảm bảo hiệu năng, ổn định.
* Khởi tạo nhiều "queue worker" độc lập (ví dụ: XSBUQWK) để chủ động lấy yêu cầu từ MQ, xử lý và trả kết quả qua định dạng MIR.

## 🗄️ Ingenium Database
* Data Layer: Db2 AIX (On-premise) lưu trữ toàn bộ dữ liệu nghiệp vụ.
* Module COBOL giao tiếp qua lớp dbsrce, đảm bảo hiệu quả, an toàn dữ liệu.
* Các hệ thống ngoài (bao gồm PathFinder) có thể truy cập trực tiếp khi cần.

## 🔗 External Systems
Các hệ thống ngoài tích hợp với Ingenium qua PathFinder (SOAP TxLife), phục vụ trao đổi thông tin nghiệp vụ bảo hiểm, đảm bảo an toàn và tuân thủ chuẩn ngành.

---

## ✅ Di Sản Nền Tảng Vững Chắc
Ingenium mang lại những giá trị cốt lõi đã được kiểm chứng qua thời gian, là nền móng cho hoạt động của nhiều doanh nghiệp bảo hiểm.
* **Ổn định và đáng tin cậy:** Xây dựng trên các công nghệ đã được kiểm chứng trong ngành tài chính, đảm bảo hệ thống vận hành bền bỉ.
* **Xử lý nghiệp vụ phức tạp:** Khả năng đáp ứng các yêu cầu nghiệp vụ bảo hiểm đa dạng và chuyên sâu.
* **Bảo mật tối đa:** Mô hình on-premise và dữ liệu tập trung cho phép kiểm soát an ninh ở mức cao nhất.
* **Hiệu suất xử lý lớn:** Kiến trúc queue/worker song song giúp xử lý hiệu quả khối lượng giao dịch lớn.
* **Tuân thủ và kiểm toán:** Dễ dàng truy vết giao dịch, đáp ứng các yêu cầu kiểm toán nghiêm ngặt của ngành.

---

## ⚠️ Thách Thức Của Hệ Thống Di Sản
Tuy nhiên, cùng với sự phát triển của công nghệ, Ingenium bộc lộ những hạn chế cố hữu, trở thành rào cản cho quá trình chuyển đổi số.
* **Công nghệ lỗi thời:** Nền tảng COBOL, AIX, và các thành phần trong hệ sinh thái IBM (MQ, WebSphere) đã cũ, khan hiếm nhân lực và không còn được hỗ trợ đầy đủ.
* **Khó mở rộng và chi phí cao:** Mô hình on-premise cứng nhắc, tốn kém chi phí vận hành và khó mở rộng nhanh chóng theo nhu cầu thị trường.
* **Tích hợp hạn chế:** Thiếu các giao thức hiện đại như API/REST, gây khó khăn khi kết nối với các dịch vụ số và hệ sinh thái đối tác.
* **Quy trình thủ công:** Việc triển khai, quản lý phiên bản và rollback đều thực hiện thủ công, thiếu tự động hóa (DevOps), làm chậm tốc độ đổi mới.
* **Rào cản chuyển đổi số:** Khó đáp ứng các yêu cầu về tích hợp đa kênh, phân tích dữ liệu lớn và triển khai các dịch vụ số hóa mới.

---

## 🚀 Con Đường Chuyển Đổi Bắt Buộc
Những thách thức trên đòi hỏi một lộ trình chuyển đổi chiến lược và toàn diện. Đây không còn là một lựa chọn, mà là yêu cầu bắt buộc để doanh nghiệp tồn tại và phát triển trong kỷ nguyên số.
* **Hiện đại hóa công nghệ:** Chuyển đổi từ COBOL sang các ngôn ngữ hiện đại, nâng cấp nền tảng để tăng khả năng tích hợp.
* **Chuyển đổi lên Cloud/Hybrid:** Áp dụng mô hình linh hoạt để tối ưu chi phí, tăng khả năng mở rộng và tận dụng sức mạnh của điện toán đám mây.
* **Tự động hóa toàn diện (DevOps):** Xây dựng quy trình CI/CD để tăng tốc độ phát triển, triển khai và giảm thiểu rủi ro.

**Đây chính là sứ mệnh mà dự án Binean Nova ra đời để giải quyết.**

---

## 📄 Điều khoản pháp lý

Tài liệu này chỉ phục vụ mục đích tham khảo và tư vấn giải pháp tích hợp, chuyển đổi hệ thống.  
Mọi nhãn hiệu, tên sản phẩm, tên công ty được đề cập đều thuộc quyền sở hữu của các bên liên quan.  
Dự án này không liên kết, không được bảo trợ hoặc xác nhận bởi DXC Technology, Sun Life hay bất kỳ bên thứ ba nào được nhắc đến.  
Không có mã nguồn, license hoặc thông tin độc quyền nào của hệ thống Ingenium hay bất kỳ hệ thống bên thứ ba nào được cung cấp hoặc phân phối dưới bất kỳ hình thức nào thông qua tài liệu hoặc dịch vụ liên quan này.

Bằng việc sử dụng hoặc tham khảo tài liệu này, bạn xác nhận và đồng ý tuân thủ mọi quy định pháp luật về sở hữu trí tuệ cũng như các điều khoản đã nêu ở trên.

---

> **Thuật ngữ:**
> - **On-premise**: Triển khai hệ thống trên hạ tầng máy chủ vật lý của doanh nghiệp, không dùng cloud.
> - **COBOL**: Ngôn ngữ lập trình lâu đời, phổ biến trong ngành tài chính – ngân hàng, bảo hiểm.
> - **MQ (IBM MQ)**: Hệ thống hàng đợi message trung gian, giúp truyền thông tin giữa các thành phần.
> - **SOAP TxLife**: Chuẩn giao tiếp dữ liệu bảo hiểm qua giao thức SOAP.
> - **AIX**: Hệ điều hành UNIX của IBM, dùng cho máy chủ doanh nghiệp.
