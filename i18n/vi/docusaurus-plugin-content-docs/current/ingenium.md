
# 🏢 Ingenium – Hệ thống lõi bảo hiểm doanh nghiệp

**Ingenium** là hệ thống lõi (core system) dành cho ngành bảo hiểm, hỗ trợ quản lý toàn diện các quy trình nghiệp vụ: tiếp nhận yêu cầu, xử lý hợp đồng, quản lý dữ liệu khách hàng, thanh toán quyền lợi và các tác vụ hậu mãi. Được thiết kế để đáp ứng các nghiệp vụ phức tạp, Ingenium đảm bảo tính ổn định, bảo mật, khả năng mở rộng và tuân thủ các tiêu chuẩn ngành tài chính – bảo hiểm.


![Sơ đồ kiến trúc Ingenium](/img/ingenium.png)


**Chú thích ký hiệu trên sơ đồ:**

| Ký hiệu | Ý nghĩa |
|:-------:|:--------|
| ![](/img/rx.png) | Hệ thống ngoài gửi/nhận yêu cầu tới PathFinder (PF) qua **SOAP TxLife** |
| ![](/img/p1.png) | PF chuyển đổi yêu cầu sang nhị phân **MIR** trước khi gửi vào MQ, nhận lại kết quả **MIR** |
| ![](/img/p2.png) | Queue Worker trên Ingenium tự động lấy message từ MQ, xử lý và trả kết quả về dưới dạng **MIR** |
| ![](/img/d1.png) | Ingenium có lớp trung gian giao tiếp với Db2 qua **Embedded SQL** |
| ![](/img/d2.png) | PathFinder (PF) có thể truy cập trực tiếp vào database Ingenium khi cần |


---

## 🗺️ Tổng quan kiến trúc
Hệ thống Ingenium triển khai theo mô hình on-premise trên nền tảng AIX, sử dụng cơ sở dữ liệu Db2. Kiến trúc phân lớp giúp tách biệt chức năng, tối ưu bảo trì và mở rộng:

- **Presentation & Integration Layer**: Giao diện người dùng, tích hợp hệ thống ngoài.
- **Network Layer**: Điều phối, truyền thông giữa các thành phần.
- **Application Layer**: Xử lý nghiệp vụ bảo hiểm.
- **Data Layer**: Lưu trữ, quản lý dữ liệu nghiệp vụ.


---

## Các thành phần chính

## 🌐 PathFinder
* Presentation & Integration Layer: UI Server kiêm cổng tích hợp (integration gateway).
* Phát triển bằng Java, triển khai trên WebSphere HTTP Server (AIX On-premise).
* Hỗ trợ tùy biến linh hoạt, dễ mở rộng theo yêu cầu nghiệp vụ từng doanh nghiệp.

## 📦 MQ Server
* Network Layer: Trung tâm điều phối, truyền thông giữa các thành phần.
* Quản lý các hàng đợi (Dispatcher Queue, Input Queue, Output Queue), đảm bảo xử lý tuần tự, chính xác.
* Cầu nối giữa PathFinder và Ingenium, sử dụng message **MIR** (binary COBOL Copybook).

## ⚙️ Ingenium
* Application Layer: "Business core" – trung tâm xử lý nghiệp vụ bảo hiểm.
* Nhiều module COBOL chạy trên AIX, đảm bảo hiệu năng, ổn định.
* Khởi tạo nhiều queue worker độc lập, chủ động lấy yêu cầu từ MQ, xử lý và trả kết quả.
* Module tiêu biểu: XSBUQWK_01, XSBUQWK_D2, XSBUQWK_XX.

## 🗄️ Ingenium Database
* Data Layer: Db2 AIX (On-premise) lưu trữ toàn bộ dữ liệu nghiệp vụ.
* Module COBOL giao tiếp qua lớp dbsrce, đảm bảo hiệu quả, an toàn dữ liệu.
* Các hệ thống ngoài (bao gồm PathFinder) có thể truy cập trực tiếp khi cần.

## 🔗 External Systems
Các hệ thống ngoài tích hợp với Ingenium qua PathFinder (SOAP TxLife), phục vụ trao đổi thông tin nghiệp vụ bảo hiểm, đảm bảo an toàn và tuân thủ chuẩn ngành.


---

## ✨ Đặc điểm nổi bật
* Triển khai on-premise: kiểm soát, bảo mật dữ liệu tối đa.
* Kiến trúc phân lớp: dễ quản lý, bảo trì, mở rộng.
* Phụ thuộc hệ sinh thái IBM (WebSphere, MQ, Db2, JDK1.8, Orexx) – nhiều nền tảng đã cũ, hết hỗ trợ.
* Business core bằng COBOL: ổn định, tin cậy nhưng hạn chế mở rộng, tích hợp công nghệ mới.


---

## ✅ Ưu điểm
* Kiến trúc phân lớp rõ ràng, dễ kiểm soát, bảo trì, mở rộng dù logic nghiệp vụ lớn.
* Ổn định, tin cậy nhờ công nghệ kiểm chứng ngành tài chính – bảo hiểm.
* Đáp ứng tốt nghiệp vụ phức tạp, hỗ trợ tùy biến linh hoạt.
* Vận hành on-premise: bảo mật dữ liệu tối đa.
* Queue/worker song song tối ưu hiệu suất, xử lý khối lượng lớn.
* Dữ liệu tập trung, kiểm soát truy cập, bảo mật nghiêm ngặt.
* Dễ audit, truy vết giao dịch, đáp ứng yêu cầu kiểm toán nội bộ/ngành.
* Có thể tích hợp với các hệ thống legacy khác trong doanh nghiệp.


---

## ⚠️ Hạn chế
* Mô hình on-premise: khó mở rộng nhanh, chi phí vận hành lớn.
* Công nghệ cũ (COBOL, AIX, MQ, JDK1.8, Orexx): khan hiếm nhân lực, khó đào tạo mới.
* Tích hợp hạn chế: chủ yếu dùng MQ, XML, thiếu API/REST hiện đại.
* Quản lý version, rollback, automation còn thủ công, thiếu DevOps.
* Phụ thuộc vendor, hệ sinh thái IBM, khó chủ động nâng cấp/chuyển đổi.
* Khó đáp ứng chuyển đổi số, tích hợp đa kênh, dịch vụ số hóa mới.
* Bảo trì lâu dài gặp thách thức khi công nghệ tiếp tục lỗi thời.

---

## 🚀 Định hướng phát triển & khuyến nghị
* Xem xét lộ trình chuyển đổi dần sang nền tảng cloud/hybrid để tăng khả năng mở rộng, giảm chi phí vận hành.
* Từng bước hiện đại hóa, bổ sung các API/REST, tăng khả năng tích hợp với hệ sinh thái số.
* Đầu tư tự động hóa (DevOps, CI/CD), tăng hiệu quả quản lý version, rollback, triển khai.

---

> **Thuật ngữ:**
> - **On-premise**: Triển khai hệ thống trên hạ tầng máy chủ vật lý của doanh nghiệp, không dùng cloud.
> - **COBOL**: Ngôn ngữ lập trình lâu đời, phổ biến trong ngành tài chính – ngân hàng, bảo hiểm.
> - **MQ (IBM MQ)**: Hệ thống hàng đợi message trung gian, giúp truyền thông tin giữa các thành phần.
> - **SOAP TxLife**: Chuẩn giao tiếp dữ liệu bảo hiểm qua giao thức SOAP.
> - **AIX**: Hệ điều hành UNIX của IBM, dùng cho máy chủ doanh nghiệp.
