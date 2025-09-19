# ☁️ Infrastructure Modernization: ING on Cloud

---

## Giới thiệu

Dự án Ingenium Modernization tại Sun Life Việt Nam là một hành trình chuyển đổi số đầy thử thách nhưng cũng rất thành công, đưa hệ thống Ingenium lên nền tảng cloud chỉ trong vòng chưa đầy một năm (bao gồm cả giai đoạn POC). Quá trình này đòi hỏi sự phối hợp chặt chẽ, tinh thần đổi mới và quyết tâm cao của toàn đội dự án.

Các hạng mục chuyển đổi chính bao gồm:
- Xây dựng lớp kết nối mới giữa Ingenium và ActiveMQ (thay thế IBM CICS đã ngừng hỗ trợ)
- Di chuyển Ingenium từ NetExpress sang Visual Cobol
- Chuyển đổi Ingenium và các ứng dụng liên quan từ AIX sang Linux, sau đó lên cloud
- Di chuyển PathFinder từ WebSphere sang JBoss (do WebSphere không còn cập nhật mới)
- Chuyển đổi PathFinder từ HTTP sang JSP

Trong suốt quá trình chuyển đổi, đội ngũ đã đối mặt với nhiều khó khăn về công nghệ, vận hành và tích hợp. Tuy nhiên, với tinh thần chủ động, sáng tạo và không ngừng nỗ lực, dự án đã hoàn thành mục tiêu "move Ingenium to cloud" trong thời gian kỷ lục hơn 9 tháng, tạo nền tảng vững chắc cho các bước phát triển tiếp theo của doanh nghiệp.

## Các hạng mục chính

### Động lực chuyển đổi lên Cloud

Việc chuyển đổi hệ thống Ingenium lên nền tảng cloud xuất phát từ nhiều động lực chiến lược và thực tiễn:

- **Tối ưu chi phí vận hành:** Mô hình on-premise truyền thống đòi hỏi đầu tư lớn vào hạ tầng vật lý, bảo trì phần cứng, chi phí điện năng và nhân sự vận hành. Cloud giúp doanh nghiệp chuyển đổi sang mô hình chi phí linh hoạt (pay-as-you-go), giảm thiểu đầu tư ban đầu và tối ưu hóa chi phí vận hành lâu dài.

- **Khả năng mở rộng linh hoạt:** Khi nhu cầu kinh doanh tăng trưởng hoặc biến động, hệ thống cloud cho phép mở rộng hoặc thu hẹp tài nguyên nhanh chóng, đáp ứng kịp thời các yêu cầu mới mà không bị giới hạn bởi hạ tầng vật lý.

- **Tăng tốc đổi mới và triển khai:** Cloud cung cấp môi trường triển khai tự động, hỗ trợ DevOps, CI/CD, giúp rút ngắn thời gian phát triển, kiểm thử và đưa sản phẩm mới ra thị trường.

- **Tăng cường bảo mật và tuân thủ:** Các nền tảng cloud hiện đại cung cấp nhiều lớp bảo mật, khả năng giám sát, kiểm soát truy cập và tuân thủ các tiêu chuẩn quốc tế, giúp doanh nghiệp yên tâm hơn về an toàn dữ liệu.

- **Giảm phụ thuộc vào công nghệ cũ:** Việc chuyển đổi lên cloud là cơ hội để loại bỏ dần các thành phần công nghệ lạc hậu (AIX, MQ, WebSphere...), giảm rủi ro về nhân sự và phụ thuộc vào vendor.

- **Hỗ trợ chuyển đổi số và tích hợp hệ sinh thái:** Cloud tạo nền tảng vững chắc để doanh nghiệp tích hợp các dịch vụ số hóa, mở rộng hệ sinh thái đối tác, kết nối đa kênh và đáp ứng nhanh các yêu cầu chuyển đổi số trong tương lai.

**Tóm lại:** Chuyển đổi lên cloud không chỉ là xu hướng công nghệ mà còn là bước đi chiến lược giúp doanh nghiệp nâng cao năng lực cạnh tranh, tối ưu vận hành và sẵn sàng cho sự phát triển bền vững.

### Kiến trúc tổng thể trên Cloud
  - Mô hình triển khai ING trên các nền tảng cloud hiện đại
  - Các thành phần chính và cách tổ chức hạ tầng

### Lợi ích nổi bật của mô hình Cloud
  - Khả năng mở rộng linh hoạt
  - Tối ưu chi phí vận hành
  - Tăng cường bảo mật và tuân thủ

### Hạn chế và Định hướng phát triển
  - Lộ trình chuyển đổi từng bước
  - Các lưu ý khi vận hành ING trên cloud

---

> *Chương này giúp doanh nghiệp hình dung rõ ràng về mô hình hạ tầng mới, các giá trị mang lại và các bước cần chuẩn bị khi chuyển đổi ING lên cloud.*
