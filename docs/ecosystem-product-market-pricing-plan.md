# Kế hoạch sản phẩm, marketing và giá bán hệ sinh thái BENOVA

<!-- markdownlint-disable MD013 -->

- Ngày: 2026-09-08.
- Trạng thái: đề xuất nội bộ để quyết định đầu tư; không thay roadmap hoặc spec của các project.
- Phạm vi: BENOVA, Spine, Echelon, Vista, Aice và Meta AI.
- “Định giá” trong bài là giá bán sản phẩm/dịch vụ, không phải định giá doanh nghiệp.
- Tất cả giá BENOVA, doanh thu, thời gian và KPI dưới đây là giả thuyết để thử, chưa là báo giá công khai hoặc bằng chứng thị trường.

## 1. Quyết định chiến lược

Bán một giải pháp giúp nhóm nghiệp vụ xử lý hồ sơ bằng người, service và AI có thể kiểm tra, triển khai trong môi trường riêng khi cần. Spine là nền semantics, Echelon là runtime, Vista là bàn làm việc, Aice là năng lực AI. Khách hàng mua kết quả và khả năng vận hành của giải pháp, không cần mua bốn repository.

BENOVA hiện định vị quanh hiện đại hóa core bảo hiểm Ingenium. Đề xuất dùng hiểu biết/ngõ tiếp cận ngành này làm điểm vào nếu founder có khách hàng phù hợp, nhưng không bắt dự án đầu tiên thay core hoặc tự động phê duyệt quyền lợi. Chọn một quy trình bên cạnh core: kiểm tra đủ hồ sơ, trích xuất, tổng hợp và người review. Nếu không có đường tiếp cận ngành, kiểm chứng cùng bài toán ở đội vận hành xử lý tài liệu thay vì giữ ngành bằng mọi giá.

Chưa định vị là công cụ tự động hóa phổ thông giá rẻ hoặc nền tảng thay thế toàn bộ orchestration hiện có. Điểm khác biệt cần chứng minh là kết hợp người–AI–service, dữ liệu triển khai riêng, evidence và phục hồi. Local AI không tự chứng minh tổng chi phí thấp hoặc bảo mật đầy đủ.

## 2. Giả định và năng lực đội ngũ

Timeline minh họa tính từ kickoff: 2 kỹ sư toàn thời gian, founder dành thời gian đều cho discovery/sales, có domain reviewer và hỗ trợ thiết kế/QA bán thời gian. Chưa xác nhận đội thực tế hoặc ngân sách; cần lập lại lịch theo capacity trước khi cam kết với khách.

Nếu một người vừa code vừa bán hàng, giữ cùng thứ tự gate nhưng giảm scope còn một Skill, một integration, một khách pilot; không áp dụng lịch dưới đây nguyên xi. Không lấy tốc độ AI sinh code làm capacity triển khai production.

Một lần chỉ nên có một chuỗi sản phẩm xuyên các repo làm ưu tiên chính. Thiết kế Meta AI và fine-tune nhiều model không được làm chậm Human Task journey, recovery và pilot đầu.

## 3. Các giai đoạn và điều kiện chuyển tiếp

| Giai đoạn | Khoảng lịch minh họa | Sản phẩm cần có | Điều kiện chuyển tiếp |
| --- | --- | --- | --- |
| G0: Chọn vấn đề | Tuần 1–3 | Hồ sơ use case, baseline thủ công, scope và dataset thử | Có chủ nghiệp vụ, dữ liệu hợp lệ, tiêu chí thành công và ít nhất một đối tác nghiêm túc bàn pilot trả phí |
| G1: Chứng minh hành trình | Tuần 4–10 | Echelon–Vista chạy một Task thật, Aice một Skill, người review | Hoàn thành journey, kiểm recovery/authority, biết độ đúng và chi phí trên bộ thử |
| G2: Pilot trả phí | Tháng 3–5 | Một deployment riêng, một quy trình, hướng dẫn vận hành và hỗ trợ có giới hạn | 1–2 pilot có kết quả đo; có quyết định tiếp tục trả tiền hoặc bằng chứng cần đổi hướng |
| G3: Sản phẩm lặp lại | Tháng 6–9 | Đóng gói triển khai, cập nhật, telemetry, template và onboarding | 3–5 khách mục tiêu dùng phần lõi chung; triển khai và hỗ trợ không phụ thuộc sửa riêng liên tục |
| G4: Mở rộng có chọn lọc | Tháng 10–15 | Thêm quy trình cùng domain, vận hành enterprise theo nhu cầu, authoring AI thử nghiệm | Khách mở rộng/renew, unit economics đạt, năng lực mới có người mua và bằng chứng kỹ thuật |
| G5: Meta AI và mở rộng nền tảng | Tháng 16–24+ | Candidate Flow, graph, validator/scenario, review và pilot version mới | Đo được giảm công sức authoring hoặc cải thiện quy trình; Flow đang chạy giữ semantics |

Mốc theo gate, không theo lịch một cách máy móc. G0 discovery tiếp tục suốt dự án; G5 có thể prototype offline sớm với effort nhỏ nhưng không thành cam kết thương mại trước bằng chứng.

### G0: Khảo sát vấn đề và khả năng mua

Mục tiêu thử: 10–15 cuộc trao đổi với người xử lý, quản lý vận hành và người quyết định kỹ thuật. Quan sát hồ sơ thật đã được phép dùng, thời gian xử lý, lỗi, handoff và hệ thống cần tích hợp. Chọn buyer có ngân sách, champion có quyền đưa người dùng vào pilot và quy trình đủ hẹp để hoàn tất.

Deliverable: mô tả một trang, baseline, ba scenario khó, data boundary, scope tích hợp, đề xuất pilot và điều kiện dừng. Không đổi tên mọi tính năng thành “AI” để tăng hấp dẫn. Nếu sau các cuộc trao đổi chưa tìm được vấn đề lặp lại hoặc người trả tiền, đổi use case trước khi xây thêm nền tảng.

### G1: Đầu tư kỹ thuật tập trung

- Spine: giữ semantics và conformance, chỉ xử lý gap chặn journey thật.
- Echelon: hoàn tất adoption AgentHost liên quan, identity/session đúng boundary, claim/submit/read và recovery cho pilot; đo storage trước khi đổi architecture.
- Vista: direct Task link nếu chưa có inbox API, form thủ công, draft và submit/status rõ; evidence và đề xuất từng trường sau đó.
- Aice: chốt HTTP client so với mô tả ACP, một model local, binding theo Skill, structured output, validator, budget và journal. Chưa fine-tune nhiều model trước baseline.
- BENOVA: demo theo một câu chuyện sử dụng; nội dung nói rõ đã làm được và đang nghiên cứu.

Tối thiểu thử mất response sau commit, restart sau inference, output sai/evidence sai, hai người cạnh tranh Task và quyền bị thu hồi. Không bán lời hứa HA, audit đầy đủ hoặc reclaim mà contract/implementation chưa có.

### G2: Pilot có giới hạn và kết quả đo

Phạm vi tham chiếu: một nhóm 5–15 người được mời, một quy trình, một loại tài liệu và tối đa một tích hợp đã khảo sát. Đây là phạm vi hợp đồng thử, không phải năng lực quy mô đã chứng minh. Khách cung cấp hạ tầng/GPU hoặc trả riêng hạ tầng được thuê cho họ.

Chốt trước baseline, nhãn đúng, tiêu chí chất lượng, retention, tải, cửa sổ hỗ trợ và nghiệm thu. Đo thời gian làm việc thực tế tách khỏi thời gian chờ; không chỉ báo tỷ lệ output được AI sinh. Tuần đầu chạy song song/quyền hạn thấp phù hợp contract, mọi kết quả quan trọng qua người.

Không coi tự động hóa công việc có rủi ro thấp là bằng chứng sẵn sàng cho phê duyệt nghiệp vụ rủi ro cao. Kết quả pilot quyết định mở rộng, sửa hoặc dừng, không mặc định gia hạn.

### G3–G4: Từ dự án dịch vụ thành sản phẩm

Chuẩn hóa phần lặp lại: cấu hình, install/update, migration được kiểm, backup/restore, runbook, giới hạn tải, hỗ trợ và template domain. Theo dõi effort triển khai từng khách; nếu khách mới luôn cần sửa Core, dừng mở ngành và sửa abstraction hoặc thu hẹp lời hứa sản phẩm.

Bổ sung SSO, HA, multi-tenant hay connector chỉ khi có demand cùng owner/acceptance rõ. Giai đoạn đầu nhiều khách có thể dùng deployment riêng; không nhầm nhiều deployment với multi-tenant runtime đã hoàn thiện.

Mở rộng từ một quy trình sang quy trình kế cận trong cùng khách trước khi mở nhiều ngành. Hợp tác đơn vị tích hợp chỉ sau khi có tài liệu, scope và economics để họ triển khai thành công.

### G5: Bán năng lực Meta AI khi đã kiểm chứng

Meta AI tạo candidate và graph cùng artifact, đề xuất cải tiến dựa trên evidence, chạy validator/scenario và để người publish version mới. Theo [thiết kế Meta AI](../../aice/backlog/meta-ai-flow-evolution.md), không tự sửa Process đang chạy.

MVP thương mại có thể là workshop thiết kế quy trình được hỗ trợ bởi AI, rồi mới thành add-on thường xuyên. Chưa thu phí “tự học tối ưu” nếu mới chỉ sinh graph đẹp và chưa đo được hiệu quả.

## 4. Marketing theo giai đoạn

| Giai đoạn | Thông điệp và tài sản | Kênh ưu tiên | KPI thử nghiệm |
| --- | --- | --- | --- |
| G0 | Một trang vấn đề/use case, câu hỏi discovery | Mạng lưới founder và cuộc trao đổi trực tiếp được đồng ý | 10–15 phỏng vấn, 3 vấn đề/scope đủ rõ, 1–2 cơ hội pilot |
| G1 | Video demo 3–5 phút, mô tả giới hạn và cách giữ quyền người | Demo riêng, LinkedIn của founder, nội dung website theo use case | 5 demo đúng đối tượng, phản hồi có tình huống cụ thể |
| G2 | Báo cáo trước/sau pilot và case study có quyền công bố | Giới thiệu từ khách, workshop nhóm nhỏ | 1–2 pilot trả phí; theo dõi lý do mua/từ chối và thời gian ra quyết định |
| G3 | Case study, hướng dẫn triển khai, trang gói giải pháp | Nội dung ngành, partner tích hợp, outbound chọn lọc do người thực hiện | 3–5 khách phù hợp, conversion và thời gian onboarding đo được |
| G4 | Bằng chứng vận hành và mở rộng cùng khách | Account expansion, partner, hội thảo ngành chọn lọc | Renewal, mở rộng hợp đồng, hỗ trợ/khách và contribution margin |
| G5 | Demo authoring có validation/diff, kết quả cải tiến thật | Workshop với khách hiện có, nội dung kỹ thuật chuyên sâu | Khách trả tiền cho authoring/optimization, thời gian tiết kiệm đo được |

KPI là mục tiêu vận hành để thử, không dự báo doanh thu. Một quy trình mua doanh nghiệp có thể dài hơn timeline sản phẩm; ghi thời gian discovery, security review và procurement riêng.

Tổ chức thương hiệu: BENOVA giữ câu chuyện hệ sinh thái/ngành; Echelon là nền triển khai giải pháp; Vista/Aice xuất hiện như năng lực; Spine dành cho tài liệu kỹ thuật. Đây là kiến trúc thông điệp đề xuất, không tự đổi tên hoặc license sản phẩm.

Tránh dùng radar chủ quan làm bằng chứng bán hàng, đăng số tiết kiệm chưa đo, tuyên bố zero-error/exactly-once toàn hệ thống hoặc nêu khách hàng khi chưa được phép. Nội dung mỗi tháng nên bám một bằng chứng: journey, recovery, field-level evidence, hoặc kết quả pilot.

Ngân sách tiền mặt thử ngoài lương: G0–G1 khoảng 0–5 triệu đồng/tháng cho công cụ/nội dung/cuộc gặp; G2 khoảng 5–15 triệu; G3 khoảng 10–25 triệu chỉ khi có funnel hiệu quả. Chưa chạy quảng cáo rộng trước khi biết buyer và tỷ lệ chuyển đổi. Theo dõi cả thời gian founder trong chi phí thu hút khách.

## 5. Giá bán theo giai đoạn

Đơn vị: triệu VND, chưa gồm thuế nếu áp dụng. Giá là giả thuyết thương mại nội bộ, chưa là báo giá. GPU, cloud, third-party model/API, integration đặc thù và SLA ngoài scope tính riêng. Không suy ra tỷ giá hoặc giá thị trường từ bảng này.

| Giai đoạn | Đề xuất giá thử | Phạm vi và cách thu |
| --- | --- | --- |
| G0 | Discovery ban đầu miễn phí; assessment sâu 10–25 | Miễn phí cho buổi xác định phù hợp; chỉ thu assessment khi có báo cáo, baseline và scope cụ thể |
| G1 | Demo nội bộ/đối tác thiết kế miễn phí có giới hạn | Không bán thuê bao production khi chưa đạt gate; giới hạn effort và dữ liệu thử |
| G2 | Pilot 40–90 tổng, trong 6–8 tuần | Một quy trình/nhóm/tích hợp trong scope; không cộng thuê bao cho cùng thời gian pilot |
| G3 | Setup 30–80 + 8–18/tháng | Một deployment production, 1–3 quy trình trong profile đã benchmark, cửa sổ hỗ trợ giờ làm việc |
| G4 | Setup 80–200 + 20–50/tháng | Nhiều nhóm/quy trình hơn, integration và support theo profile đã nghiệm thu; không mặc định bao gồm HA/SSO/24×7 |
| G5 | Workshop Meta AI 20–60 hoặc add-on 5–15/tháng | Thu theo đầu ra workshop hoặc subscription authoring có quota; tránh thu hai lần cho cùng deliverable |

Nếu khách pilot chuyển sang production, chỉ thu setup bổ sung cho phần onboarding chưa làm hoặc scope mới; không mặc định thu đủ setup lần nữa. Thanh toán pilot có thể chia theo kickoff, bàn giao và nghiệm thu, nhưng tỷ lệ cụ thể phải thương lượng trong báo giá.

Giá gói G3/G4 là khoảng theo phạm vi, không phải gói có cùng entitlement nhưng giá tùy khách. Trước báo giá phải viết số môi trường, quy trình, workload/concurrency, retention, hỗ trợ, trách nhiệm hạ tầng và giới hạn inference. Không bán “unlimited AI”.

### Đơn vị tính phí đề xuất

Bắt đầu với phí deployment/workspace + profile sử dụng và hỗ trợ, vì bán triển khai riêng. Bao gồm người review trong phạm vi nhóm; không thu theo số message hay số bước để tránh phạt sự cộng tác và thiết kế có kiểm tra.

Khi có hosted service thật, có thể thêm quota theo business Process được khởi tạo, định nghĩa rõ test/production, child Process và retry. Không thu thêm cho retry giao nhận cùng logical request. Chưa xây metering phức tạp trước khi cần billing tự phục vụ.

Compute AI tách minh bạch: khách tự cấp GPU thì chi phí nằm ở hạ tầng của họ; nhà cung cấp trả GPU/cloud thì có line item hoặc quota riêng. Local không đồng nghĩa miễn phí: cần tính khấu hao/thuê, điện, utilization và vận hành.

### Cách kiểm giá trước khi công bố

Dùng 3–5 cơ hội phù hợp để thử báo giá có cùng scope; ghi phản hồi về ngân sách, giá trị, integration và niềm tin vận hành. Không xem “thích demo” là willingness to pay. Giá sàn từ chi phí, giá trị từ baseline khách, và khả năng trả tiền từ hợp đồng thực tế cần được xét cùng nhau.

Không hạ giá để đổi lấy tùy biến không giới hạn. Nếu ngân sách thấp, giảm scope. Early adopter discount có thời hạn và điều kiện rõ; không đổi giá ưu đãi lấy lời đánh giá tích cực.

## 6. Unit economics và ngân sách quyết định

Tính riêng dịch vụ triển khai và doanh thu recurring. Công thức kiểm tra:

```text
Contribution/tháng/khách = phí recurring
  - compute do nhà cung cấp chịu
  - hosting/storage/monitoring phân bổ
  - giờ support trực tiếp × chi phí đầy đủ/giờ
  - license bên thứ ba và chi phí delivery recurring khác

Số khách hòa vốn minh họa = chi phí cố định/tháng / contribution/khách
```

Ví dụ giả định: phí 12 triệu/tháng, chi phí delivery trực tiếp 4 triệu, contribution 8 triệu. Nếu chi phí cố định còn lại 120 triệu/tháng thì cần 15 khách cùng economics để bù chi phí đó. Không tính trùng support đã nằm trong delivery vào fixed cost; chưa gồm chi phí một lần và biến động tiền mặt. Đây là phép tính giả định, không forecast.

Với cùng giả định, 3 khách chỉ tạo 36 triệu MRR, 24 triệu contribution; chưa nuôi được đội có fixed cost 120 triệu. Thu nhập pilot/setup có thể hỗ trợ tiền mặt nhưng không thay bằng chứng recurring bền vững.

Trước mỗi giai đoạn lập ngân sách theo số người × chi phí đầy đủ × thời gian, thêm hạ tầng, domain review, bảo trì và marketing. Chưa có dữ liệu đội ngũ nên không gán ngân sách phát triển tổng như một con số chắc chắn. Không nhận nhiều pilot song song nếu support làm dừng sản phẩm.

## 7. Tham chiếu thị trường và giới hạn so sánh

Đối chiếu trang chính thức ngày 2026-09-08:

- [n8n pricing](https://n8n.io/pricing/): tính theo workflow executions; Starter 20 EUR/tháng và Pro 50 EUR/tháng khi thanh toán năm, Business self-hosted 667 EUR/tháng theo điều kiện trang giá. Đây là tham chiếu tự phục vụ và commercial packaging, không tương đương dịch vụ pilot/tích hợp BENOVA.
- [Camunda pricing](https://camunda.com/pricing/): self-managed development miễn phí, production cần Enterprise license; cloud/production liên hệ sales. Không dùng giá Starter cũ trong bài blog làm giá hiện hành.
- [Temporal Cloud pricing](https://docs.temporal.io/cloud/pricing): tham chiếu cấu trúc giá dịch vụ orchestration cloud; không suy từ đó ra giá giải pháp domain có UI, AI và triển khai riêng.

Suy luận cho kế hoạch: không cạnh tranh trực diện với mức giá self-service thấp bằng một gói phải hỗ trợ thủ công nhiều. Giá thử BENOVA phản ánh giả thuyết bán giải pháp có triển khai, không chứng minh khách sẽ trả hoặc sản phẩm có feature parity với các nền tảng trên.

## 8. Kế hoạch 30 ngày đầu

| Thời gian | Sản phẩm | Thị trường và thương mại | Đầu ra quyết định |
| --- | --- | --- | --- |
| Tuần 1 | Kiểm blocker, chọn một journey và phần cứng thử | Lập danh sách khách phù hợp, bắt đầu discovery | Một use case và giả định buyer |
| Tuần 2 | Chốt input/output, authority, tiêu chí recovery | Quan sát baseline, thử scope/giá assessment | Dataset/scenario và pilot brief |
| Tuần 3 | Form thủ công nối backend; baseline model offline | Demo phần thật, nhận phản biện | Danh sách gap bắt buộc, đối tác có khả năng pilot |
| Tuần 4 | Ưu tiên journal, submit/status, evidence theo tiến độ | Hoàn thiện proposal pilot và tiêu chí thành công | Quyết định tiếp tục/use case khác; kế hoạch G1 theo capacity |

Đây là kế hoạch discovery và khởi động, không hứa hoàn tất toàn bộ backend trong bốn tuần. Người phụ trách sales không chờ mọi tính năng hoàn hảo mới kiểm nhu cầu.

## 9. Những quyết định cần xác nhận để chốt kế hoạch

- Có bao nhiêu người full-time, vai trò và ngân sách runway?
- Có đường tiếp cận khách bảo hiểm/Ingenium thật hay nên chọn domain khác?
- Phần cứng local AI, môi trường deployment và ai trả chi phí vận hành?
- Buyer mua license, managed deployment hay dự án triển khai trước?
- Phạm vi hỗ trợ và trách nhiệm vận hành nào đội có thể thực hiện?

Nếu “định giá” được hiểu là valuation doanh nghiệp, cần bài riêng với doanh thu, retention, pipeline, IP/license, đội và bằng chứng thị trường. Số repo, lượng code hoặc radar kiến trúc không đủ để gán valuation đáng tin.
