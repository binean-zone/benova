# 🏢 Nova

**Nova – Nền Tảng Ứng Dụng Bảo Hiểm Hiện Đại**

![Sơ đồ Kiến trúc Nova](/img/nova.png)

---

## 🎯 Mục tiêu

Nova đặt mục tiêu hiện đại hóa toàn diện hệ thống core bảo hiểm Ingenium, đảm bảo vận hành liên tục, ổn định và an toàn trong suốt quá trình chuyển đổi số. Lộ trình được hoạch định thành các giai đoạn rõ ràng, mỗi giai đoạn là một bước tiến vững chắc giúp giảm thiểu rủi ro và tối ưu nguồn lực:

- **Nexus – Nền Tảng Vững Chắc:** Xây dựng hạ tầng kỹ thuật số vững chắc và thiết lập quy trình DevOps thông minh. Đây là bước đi nền móng, đảm bảo sự ổn định, an toàn và khả năng mở rộng cho toàn bộ hệ thống trong dài hạn.
- **Orbit – Trọng Tâm Hiện Đại Hóa:** Hiện đại hóa và tối ưu hóa core Ingenium, chuẩn hóa kiến trúc và dịch vụ. Giai đoạn này tạo ra một "quỹ đạo" tăng trưởng bền vững, đưa hệ thống truyền thống tiến vào kỷ nguyên số. Cụ thể, Orbit sẽ biến Ingenium thành một REST service, loại bỏ các thành phần trung gian cũ (như MQ) và bắt đầu chuyển đổi các chức năng quan trọng sang Rust.
- **Vista – Tầm Nhìn Trải Nghiệm:** Mở rộng tầm nhìn bằng cách thiết kế lại toàn bộ trải nghiệm người dùng và các dịch vụ bên ngoài (SOAP → REST). Chúng tôi mang đến giao diện trực quan, hiện đại và liền mạch, định hình chiến lược cho thế hệ sản phẩm mới.
- **Apex – Đỉnh Cao Đổi Mới:** Chạm đến đỉnh cao của sự đổi mới bằng việc tái cấu trúc toàn diện logic nghiệp vụ và dữ liệu. Giai đoạn này mở khóa tiềm năng tích hợp không giới hạn, từng bước chuyển đổi hoàn toàn core bảo hiểm từ COBOL sang Rust, hình thành một hệ sinh thái số năng động, liên tục phát triển.

Thông qua lộ trình này, Nova kiến tạo một nền tảng ứng dụng bảo hiểm hiện đại, linh hoạt, dễ mở rộng và sẵn sàng tích hợp, đáp ứng mọi yêu cầu chuyển đổi số của doanh nghiệp.

---

## 🌟 Tầm Nhìn & Định Hướng

Nova được định hình là nền tảng ứng dụng hiện đại, kết hợp hài hòa giữa sức mạnh công nghệ truyền thống và kiến trúc cloud-native tiên tiến. Không chỉ tập trung hiện đại hóa hệ thống core bảo hiểm Ingenium, Nova còn hướng tới xây dựng một hệ sinh thái công nghệ mở, linh hoạt, sẵn sàng đáp ứng mọi yêu cầu chuyển đổi số của doanh nghiệp bảo hiểm trong tương lai.

**Các giá trị cốt lõi mà Nova hướng đến:**

- 📈 Khả năng mở rộng linh hoạt, đáp ứng nhu cầu tăng trưởng không giới hạn
- 🔗 Tích hợp dễ dàng với các hệ thống, dịch vụ bên ngoài
- 🤖 Tự động hóa toàn diện từ phát triển đến triển khai (CI/CD)
- 🚀 Sẵn sàng cho tốc độ chuyển đổi số nhanh của ngành bảo hiểm và tài chính
- 🛡️ Đảm bảo an toàn, ổn định và tối ưu vận hành trong mọi giai đoạn phát triển

Nova cam kết trở thành nền tảng vững chắc, đồng hành cùng doanh nghiệp trên hành trình đổi mới, tối ưu vận hành và kiến tạo giá trị bền vững trong kỷ nguyên số.

---

## 🏗️ Tổng Quan Kiến Trúc

Kiến trúc Nova được thiết kế theo định hướng hiện đại hóa toàn diện, đảm bảo khả năng mở rộng, tích hợp linh hoạt và vận hành ổn định. Nova không chỉ kế thừa các giá trị cốt lõi của hệ thống Ingenium truyền thống mà còn từng bước chuyển đổi sang mô hình cloud-native, sẵn sàng đáp ứng mọi yêu cầu phát triển trong tương lai.

Nova được xây dựng trên các công nghệ cập nhật nhất, đảm bảo hiệu năng, bảo mật và linh hoạt:
- **React** cho giao diện người dùng hiện đại, thân thiện.
- **Rust** cho các dịch vụ lõi, mang lại hiệu năng vượt trội và an toàn bộ nhớ.
- **Microservices** cho sự linh hoạt, dễ mở rộng và bảo trì.
- **API Gateway** (ví dụ: Kong) và **Event Bus** (ví dụ: Kafka) cho tích hợp an toàn, bất đồng bộ.
- **YugabyteDB** (hoặc các CSDL phân tán hiện đại khác) cho lớp dữ liệu cloud-native, có khả năng mở rộng.
- **Continuous Delivery (CD)** để tự động hóa đóng gói và triển khai, sẵn sàng tích hợp vào các pipeline CI/CD hiện đại.

Hệ thống được tổ chức thành bốn lớp chính, tương ứng với từng giai đoạn hiện đại hóa:

### 🖥️ Lớp Trình bày (Presentation Layer)
- **Nova UI (React Webservice):** Giao diện người dùng hiện đại, hỗ trợ trải nghiệm trực quan và tương tác trực tiếp.
- Hỗ trợ đa giao thức (REST, GraphQL), cho phép truy xuất dữ liệu linh hoạt và mở rộng tích hợp với các hệ thống bên ngoài qua API.

### 🌉 Lớp Tích hợp (Integration Layer)
- **API Gateway (Kong):** Đóng vai trò trung gian, quản lý, bảo mật và định tuyến các yêu cầu từ UI hoặc hệ thống ngoài đến backend.
- **Event Bus (Kafka):** Cung cấp cơ chế nhắn tin bất đồng bộ, giúp các microservice giao tiếp hiệu quả, giảm phụ thuộc trực tiếp và tăng khả năng mở rộng hệ thống.

> *Lưu ý: Lớp Integration Layer không phải là thành phần bắt buộc của dự án Nova mà phụ thuộc vào nhu cầu và hạ tầng của từng doanh nghiệp. Doanh nghiệp có thể sử dụng các ứng dụng, dịch vụ của bên thứ ba (như API Gateway, Event Bus, Kubernetes, v.v.) để tăng giá trị và bảo mật cho hệ thống. Nova được thiết kế mở, sẵn sàng tích hợp dễ dàng với các giải pháp này nhằm đáp ứng tối đa yêu cầu vận hành và mở rộng trong tương lai.*
 
### ⚙️ Lớp Ứng dụng (Application Layer)
- **Nova App (Rust Microservices):** Các dịch vụ lõi được phát triển bằng Rust, nổi bật về hiệu năng và an toàn bộ nhớ.
- Kiến trúc microservices đảm bảo khả năng mở rộng độc lập, dễ dàng triển khai, nâng cấp và bảo trì.
- Trong các giai đoạn chuyển đổi, một số chức năng của Ingenium sẽ được chuyển dần sang Rust, từng bước hình thành core bảo hiểm mới hiện đại, linh hoạt.

### 🗄️ Lớp Dữ liệu (Data Layer)
- **Nova Data (Db2/Yugabyte):** Lớp dữ liệu lai, vừa duy trì Db2 truyền thống cho các nghiệp vụ cũ, vừa mở rộng sang YugabyteDB để đáp ứng nhu cầu phân tán, mở rộng và cloud-native.
- Đảm bảo dữ liệu luôn an toàn, nhất quán và sẵn sàng phục vụ các dịch vụ hiện đại hóa trong tương lai.
- Data Layer được thiết kế lại để đảm bảo khả năng chuyển đổi linh hoạt sang các hệ quản trị cơ sở dữ liệu khác, không phụ thuộc vào Db2 Embedded SQL.

Kiến trúc này cho phép Nova vận hành ổn định trong suốt quá trình chuyển đổi, từng bước thay thế các thành phần cũ bằng công nghệ mới mà không làm gián đoạn hoạt động của doanh nghiệp.

---

## 🔄 Hệ Thống Continuous Delivery

Hiện tại, Nova tập trung xây dựng hệ thống **Continuous Delivery (CD)** với mục tiêu tự động hóa tối đa quy trình đóng gói, triển khai phần mềm và chuẩn bị sẵn sàng cho việc tích hợp vào các pipeline CI/CD trong tương lai. Do hạn chế về nguồn lực, hệ thống chưa triển khai auto test và các quy trình CI/CD hoàn chỉnh; đồng thời, việc triển khai CI/CD thực tế sẽ phụ thuộc vào từng doanh nghiệp.

- **Sẵn sàng tích hợp:** Nova CD đã chuẩn bị đầy đủ các câu lệnh, script và quy trình đóng gói, giúp các doanh nghiệp dễ dàng cấu hình, tích hợp vào hệ thống CI/CD riêng khi cần thiết.
- Quy trình tự động hóa đóng gói và triển khai giúp giảm thiểu rủi ro khi phát hành, tăng tính ổn định và nhất quán cho hệ thống.
- Hỗ trợ rollback nhanh chóng khi phát sinh sự cố, đảm bảo hệ thống luôn vận hành an toàn.

> *Lưu ý: Nova chưa tích hợp auto test và chưa triển khai pipeline CI/CD hoàn chỉnh, nhưng đã sẵn sàng để mở rộng khi doanh nghiệp có nhu cầu.*

---

## 💡 Ưu Điểm Nổi Bật

Nova không chỉ kế thừa mà còn khắc phục triệt để các hạn chế cố hữu của hệ thống Ingenium truyền thống, mang lại nhiều cải tiến vượt trội:

- ⚡ **Hiệu năng vượt trội:** Ứng dụng ngôn ngữ Rust cho các dịch vụ lõi giúp tối ưu tốc độ xử lý và tài nguyên hệ thống.
- 📊 **Khả năng mở rộng linh hoạt:** Kiến trúc microservices và hỗ trợ cơ sở dữ liệu phân tán đáp ứng tốt nhu cầu tăng trưởng, dễ dàng mở rộng theo quy mô doanh nghiệp.
- 🔗 **Tích hợp mạnh mẽ:** Thiết kế mở, dễ dàng kết nối với các hệ thống, dịch vụ bên ngoài (REST/GraphQL, API Gateway, Event Bus). *Lưu ý: Lớp Integration Layer là tùy chọn, không bắt buộc. Để đơn giản, trong dự án này, lớp Presentation sẽ gọi trực tiếp lớp Application.*
- 🤖 **Tự động hóa toàn diện:** Hỗ trợ quy trình đóng gói, triển khai tự động, sẵn sàng tích hợp CI/CD để rút ngắn chu kỳ phát triển và tăng tốc đổi mới.
- 🏛️ **Hỗ trợ chuyển đổi linh hoạt:** Vừa duy trì hệ thống cũ (Db2), vừa sẵn sàng cho nền tảng cloud-native (YugabyteDB) hoặc các hệ quản trị cơ sở dữ liệu khác trong tương lai.
- 🛡️ **An toàn & ổn định:** Quy trình kiểm thử, triển khai và rollback tự động giúp giảm thiểu rủi ro, đảm bảo hệ thống luôn sẵn sàng phục vụ nghiệp vụ.
- 🚀 **Công nghệ luôn cập nhật:** Nova được thiết kế dựa trên các công nghệ mới nhất, luôn ưu tiên cập nhật (up to date) để đảm bảo hiệu quả, bảo mật và khả năng mở rộng vượt trội, đồng thời dễ dàng tích hợp với các giải pháp công nghệ tiên tiến trong tương lai.

---

## 🏁 Kết Luận

Nova không chỉ là một giải pháp công nghệ, mà còn là nền tảng thúc đẩy chuyển đổi số toàn diện cho doanh nghiệp bảo hiểm.
Với sự kết hợp của các công nghệ hiện đại như React, Rust, và hệ thống CI/CD tự động hóa, Nova mang đến một hệ sinh thái linh hoạt, an toàn, bền vững—sẵn sàng thích ứng và phát triển cùng mọi thay đổi của thị trường, đồng hành cùng doanh nghiệp trên hành trình đổi mới và phát triển bền vững.
