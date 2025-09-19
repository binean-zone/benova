# ☁️ ING on Cloud

---

## 📝 Giới thiệu

Dự án **Ingenium Modernization** tại Sun Life Việt Nam là một hành trình chuyển đổi số đầy thử thách nhưng cũng rất thành công, đưa hệ thống Ingenium lên nền tảng cloud chỉ trong vòng chưa đầy một năm (bao gồm cả giai đoạn POC). Quá trình này đòi hỏi sự phối hợp chặt chẽ, tinh thần đổi mới và quyết tâm cao của toàn đội dự án.

> ⚡ **Lưu ý quan trọng:** Việc triển khai Ingenium trên cloud chính là **bước khởi đầu chiến lược cho dự án Nova**. Đặc biệt, việc chuyển đổi toàn bộ hệ thống từ AIX sang Linux là **yếu tố bắt buộc** nếu doanh nghiệp muốn áp dụng Nova cho các môi trường vận hành chính thức. Đây là nền tảng kỹ thuật then chốt để tiến tới hiện đại hóa toàn diện với Nova.

**Các hạng mục chuyển đổi chính:**
- Xây dựng lớp kết nối mới giữa Ingenium và ActiveMQ (thay thế IBM MQ/CICS đã ngừng hỗ trợ)
- Di chuyển Ingenium từ NetExpress sang Visual Cobol
- Chuyển đổi Ingenium và các ứng dụng liên quan từ AIX sang Linux, sau đó lên cloud
- Di chuyển PathFinder từ WebSphere sang JBoss (do WebSphere không còn cập nhật mới)
- Chuyển đổi PathFinder từ HTTP sang JSP

Trong suốt quá trình chuyển đổi, đội ngũ đã đối mặt với nhiều thách thức về công nghệ, vận hành và tích hợp. Tuy nhiên, với tinh thần chủ động, sáng tạo và nỗ lực không ngừng, dự án đã hoàn thành mục tiêu "đưa Ingenium lên cloud" trong thời gian kỷ lục hơn 9 tháng, tạo nền tảng vững chắc cho các bước phát triển tiếp theo của doanh nghiệp.

---

## 🚀 Động lực chuyển đổi lên Cloud

Việc chuyển đổi hệ thống Ingenium lên nền tảng cloud xuất phát từ nhiều động lực chiến lược và thực tiễn:

- **Tối ưu chi phí vận hành:** Cloud giúp doanh nghiệp chuyển đổi sang mô hình chi phí linh hoạt (pay-as-you-go), giảm thiểu đầu tư ban đầu và tối ưu hóa chi phí vận hành lâu dài.
- **Khả năng mở rộng linh hoạt:** Cloud cho phép mở rộng hoặc thu hẹp tài nguyên nhanh chóng, đáp ứng kịp thời các yêu cầu kinh doanh mà không bị giới hạn bởi hạ tầng vật lý.
- **Tăng tốc đổi mới và triển khai:** Cloud cung cấp môi trường triển khai tự động, hỗ trợ DevOps, CI/CD, giúp rút ngắn thời gian phát triển, kiểm thử và đưa sản phẩm mới ra thị trường.
- **Tăng cường bảo mật và tuân thủ:** Các nền tảng cloud hiện đại cung cấp nhiều lớp bảo mật, khả năng giám sát, kiểm soát truy cập và tuân thủ các tiêu chuẩn quốc tế, giúp doanh nghiệp yên tâm hơn về an toàn dữ liệu.
- **Giảm phụ thuộc vào công nghệ cũ:** Việc chuyển đổi lên cloud là cơ hội để loại bỏ dần các thành phần công nghệ lạc hậu (AIX, MQ, WebSphere...), giảm rủi ro về nhân sự và phụ thuộc vào vendor.
- **Hỗ trợ chuyển đổi số và tích hợp hệ sinh thái:** Cloud tạo nền tảng vững chắc để doanh nghiệp tích hợp các dịch vụ số hóa, mở rộng hệ sinh thái đối tác, kết nối đa kênh và đáp ứng nhanh các yêu cầu chuyển đổi số trong tương lai.

> **Tóm lại:** Chuyển đổi lên cloud không chỉ là xu hướng công nghệ mà còn là bước đi chiến lược giúp doanh nghiệp nâng cao năng lực cạnh tranh, tối ưu vận hành và sẵn sàng cho sự phát triển bền vững.

---

## 🏗️ Kiến trúc tổng thể trên Cloud

Mô hình triển khai Ingenium (ING) trên nền tảng cloud hiện đại được thiết kế để tận dụng tối đa các ưu điểm về khả năng mở rộng, linh hoạt, tự động hóa và bảo mật mà hạ tầng đám mây mang lại. Vì lý do pháp lý và chuyên môn, tài liệu này chỉ trình bày các nguyên tắc và kiến trúc tổng quan, không đi sâu vào chi tiết dự án cụ thể.

Về tổng thể, toàn bộ các máy chủ và dịch vụ quan trọng như MQ, Ingenium, PathFinder và Db2 đều đã được chuyển dịch lên cloud và triển khai trên nền tảng Linux. Việc lựa chọn Linux làm hệ điều hành chủ đạo giúp tối ưu hiệu suất, tăng tính ổn định, giảm chi phí bản quyền và tận dụng tối đa các công cụ, dịch vụ hiện đại của cloud.

Mô hình tất cả các server chạy trên Linux là yếu tố khởi đầu quan trọng cho dự án này, giúp loại bỏ hoàn toàn sự phụ thuộc vào hệ điều hành AIX cũ kỹ và không còn được hỗ trợ. Việc chuyển đổi sang Linux không chỉ tối ưu hiệu suất, giảm chi phí bản quyền mà còn mở ra khả năng tận dụng tối đa các công nghệ, công cụ hiện đại của nền tảng cloud, tạo nền tảng vững chắc cho đổi mới và phát triển bền vững.

Tất cả các thành phần đều được tổ chức linh hoạt, hỗ trợ tự động hóa triển khai (CI/CD), giám sát thông minh, và dễ dàng tích hợp với các dịch vụ số hóa mới trong tương lai. Kiến trúc này không chỉ giúp hệ thống vận hành ổn định, tiết kiệm chi phí mà còn tạo nền tảng vững chắc cho đổi mới và phát triển bền vững.

---

## 🌟 Lợi ích nổi bật của mô hình Cloud

Việc triển khai Ingenium trên nền tảng cloud mang lại nhiều lợi ích vượt trội so với mô hình on-premise truyền thống:

- **Khả năng mở rộng linh hoạt:** Dễ dàng tăng hoặc giảm tài nguyên hệ thống theo nhu cầu thực tế mà không cần đầu tư thêm hạ tầng vật lý.
- **Tối ưu chi phí vận hành:** Chỉ trả tiền cho tài nguyên thực sự sử dụng, giảm thiểu lãng phí và tối ưu hóa ngân sách CNTT.
- **Tăng cường bảo mật và tuân thủ:** Nhiều lớp bảo mật, kiểm soát truy cập, giám sát liên tục, hỗ trợ tuân thủ các tiêu chuẩn quốc tế về an toàn thông tin.
- **Tự động hóa và tối ưu vận hành:** Hỗ trợ triển khai tự động (CI/CD), giám sát thông minh, tự động mở rộng (autoscaling), backup và khôi phục thảm họa.
- **Hỗ trợ đổi mới và chuyển đổi số:** Tạo nền tảng vững chắc để tích hợp các dịch vụ số hóa, phát triển sản phẩm mới, kết nối đa kênh và mở rộng hệ sinh thái đối tác.

---

## ⚠️ Hạn chế & Định hướng phát triển

Mặc dù việc chuyển đổi Ingenium lên cloud mang lại nhiều lợi ích, quá trình này cũng tồn tại một số hạn chế và yêu cầu cần lưu ý:

- **Yêu cầu chuyển đổi sang Linux:** Nova sẽ không hỗ trợ hệ điều hành AIX mà chỉ hỗ trợ Linux cho các môi trường server như ST, AT, PRD và Windows cho môi trường phát triển (Dev). Việc chuyển đổi toàn bộ hệ thống từ AIX sang Linux là điều kiện bắt buộc nếu doanh nghiệp muốn áp dụng Nova cho các môi trường vận hành chính thức.

- **Yêu cầu về môi trường phát triển:** Dự án yêu cầu sử dụng **Visual Studio Code (VS Code)** làm môi trường phát triển chính, mang lại trải nghiệm hiện đại và hiệu quả hơn so với Eclipse. Hiện tại, các IDE khác chưa được hỗ trợ.

- **Hạn chế về công cụ DevOps:** Hiện tại chưa có công cụ quản lý DevOps chuyên biệt cho Ingenium; các quy trình DevOps vẫn phải thực hiện thủ công hoặc bán thủ công. Đây cũng chính là động lực cho **giai đoạn Nexus** của dự án, với mục tiêu phát triển một extension tích hợp vào VS Code, hỗ trợ toàn diện quy trình Continuous Delivery cho Ingenium.

- **Hạn chế về công nghệ web:** Sau khi chuyển đổi PathFinder (PF) sang JSP trong dự án ING on Cloud, đã xuất hiện một số vấn đề về hiệu năng, đặc biệt là việc phải render lại toàn bộ các thành phần khi cập nhật, ảnh hưởng đến khả năng phản hồi và hiệu quả vận hành. Bên cạnh đó, việc tiếp tục sử dụng công nghệ JSP cũ cũng đặt ra thách thức về khả năng bảo trì và mở rộng lâu dài. Việc khắc phục các hạn chế này sẽ là trọng tâm nâng cấp trong các giai đoạn tiếp theo.

- **Cloud là một lựa chọn, không bắt buộc:** Việc chuyển đổi lên cloud mang lại nhiều giá trị, tuy nhiên đây không phải là yêu cầu bắt buộc. Doanh nghiệp hoàn toàn có thể triển khai mô hình Nova trên hạ tầng on-premise nếu phù hợp với chiến lược và điều kiện thực tế. Nova được thiết kế linh hoạt để hỗ trợ cả hai mô hình cloud và on-premise.

- **Quản lý vận hành và tối ưu chi phí:** Khi vận hành trên cloud, doanh nghiệp cần xây dựng quy trình quản lý tài nguyên, giám sát chi phí và tối ưu hóa vận hành để tránh lãng phí và đảm bảo hiệu quả đầu tư.

- **Đảm bảo an toàn, bảo mật và tuân thủ:** Việc chuyển đổi lên cloud đòi hỏi doanh nghiệp phải chú trọng đến các vấn đề bảo mật, tuân thủ quy định pháp lý và bảo vệ dữ liệu khách hàng, đặc biệt trong lĩnh vực tài chính – bảo hiểm.

- **Lộ trình chuyển đổi từng bước:** Để giảm thiểu rủi ro, doanh nghiệp nên xây dựng lộ trình chuyển đổi từng bước, kiểm thử kỹ lưỡng ở từng giai đoạn trước khi triển khai diện rộng trên môi trường Production.

---

## 🛡️ Lưu ý về phạm vi hỗ trợ & bản quyền

Dự án này **không cung cấp mã nguồn, license hoặc bất kỳ tài nguyên nào liên quan trực tiếp đến hệ thống Ingenium**. Chúng tôi chỉ cung cấp một giải pháp sản phẩm đóng vai trò như bên thứ ba, hỗ trợ tích hợp và nâng cấp dần hệ thống Ingenium hiện hữu, từng bước chuyển đổi lên một core bảo hiểm mới, hiện đại và mạnh mẽ hơn.

Việc chuyển đổi Ingenium từ AIX sang Linux có thể thực hiện thông qua nhà sản xuất gốc hoặc liên hệ trực tiếp với chúng tôi – đội ngũ đã có kinh nghiệm thực chiến trong các dự án chuyển đổi tương tự. Chúng tôi cam kết tư vấn lộ trình tối ưu, chi phí hợp lý và giải pháp phù hợp nhất với nhu cầu thực tế của doanh nghiệp.

> **Lưu ý:** Dự án chỉ cung cấp giải pháp tích hợp và chuyển đổi, không can thiệp vào bản quyền hoặc mã nguồn của hệ thống gốc.

---

## 📄 Điều khoản pháp lý

Tài liệu này được cung cấp cho mục đích tham khảo và tư vấn giải pháp tích hợp, chuyển đổi hệ thống.  
Mọi nhãn hiệu, tên sản phẩm, tên công ty được đề cập đều thuộc quyền sở hữu của các bên liên quan.  
Dự án này không liên kết, không được bảo trợ hoặc xác nhận bởi Sun Life, DXC Technology hay bất kỳ bên thứ ba nào được nhắc đến trong tài liệu.  
Không có mã nguồn, license hoặc thông tin độc quyền nào của hệ thống Ingenium hay bất kỳ hệ thống bên thứ ba nào được cung cấp hoặc phân phối dưới bất kỳ hình thức nào thông qua tài liệu hoặc dịch vụ liên quan này.

Bằng việc sử dụng hoặc tham khảo tài liệu này, bạn xác nhận và đồng ý tuân thủ mọi quy định pháp luật về sở hữu trí tuệ cũng như các điều khoản đã nêu ở trên.

---


