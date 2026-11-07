export default {
  seo: {
    title: 'Binean Echelon — Chia việc cho nhiều tác nhân, kiểm soát từng bước',
    description: 'Echelon điều phối đa tác nhân cho những flow cần chia task giữa nhiều agent hoặc có số lượng step lớn. Webservice đã chạy được; kiểm định production đang tiếp tục.',
    keywords: 'Binean Echelon, điều phối đa tác nhân, chia task, xử lý theo từng bước, cân bằng tải, NOVA',
  },
  brandName: 'Binean Echelon',
  headerCta: 'Trao đổi nhu cầu',
  notice: {
    text: 'Echelon là lớp điều phối đa tác nhân cho flow cần chia task giữa nhiều agent hoặc có nhiều step. Webservice đã chạy được; kiểm định production đang tiếp tục.',
    linkLabel: 'Trao đổi phạm vi đánh giá',
  },
  nav: [
    { href: '#model', label: 'Tính năng' },
    { href: '#apprenticeship', label: 'Phối hợp' },
    { href: '#decisions', label: 'Lợi ích' },
    { href: '#fit', label: 'Phù hợp với bạn' },
    { href: '#status', label: 'Trạng thái' },
  ],
  hero: {
    back: 'Trang chủ',
    eyebrow: 'Binean Echelon',
    title: 'Chia việc cho nhiều tác nhân. Kiểm soát từng bước.',
    lead: 'Echelon dùng khi một flow cần chia task giữa nhiều agent, hoặc khi số lượng step lớn cần cân bằng tải và xử lý lỗi cho từng step. Đây là một đường bổ sung ngang hàng với các thành phần khác, không nằm giữa Vista và Orbit.',
  },
  sections: [
    {
      id: 'problem',
      eyebrow: 'Bài toán của đội ngũ',
      title: 'Một bước lỗi không nên làm hỏng cả flow.',
      body: [
        'Khi một flow cần nhiều agent phối hợp hoặc có rất nhiều step, một lỗi hay một điểm chậm có thể làm hỏng cả flow. Echelon theo dõi và xử lý theo từng step để đội ngũ biết chính xác bước nào cần can thiệp.',
        'Các thành phần vẫn gọi nhau trực tiếp, như Vista gọi Orbit. Echelon chỉ tham gia khi flow cần chia task hoặc cần kiểm soát từng step, nhờ vậy nó không trở thành điểm nghẽn trên đường gọi mặc định.',
      ],
    },
    {
      id: 'model',
      eyebrow: 'Tính năng chính',
      title: 'Điều phối theo từng bước, khi flow cần.',
      glossary: [
        { term: 'Chia task cho nhiều agent', desc: 'Một flow có thể giao từng phần việc cho các agent chuyên biệt thay vì dồn tất cả vào một chỗ xử lý.' },
        { term: 'Cân bằng tải theo từng step', desc: 'Phân bổ các step đang chờ để nhiều agent cùng tham gia khi khối lượng công việc lớn.' },
        { term: 'Xử lý lỗi từng step, không hỏng cả flow', desc: 'Theo dõi kết quả ở mức từng step để xác định phần cần xử lý tiếp hoặc cần người can thiệp.' },
        { term: 'Agent bên ngoài nhận task và nộp kết quả', desc: 'Agent nhận task và gửi kết quả qua HTTP/JSON; trạng thái được lưu bền vững để tra cứu lại khi cần.' },
      ],
    },
    {
      id: 'apprenticeship',
      eyebrow: 'Phối hợp hiệu quả',
      title: 'Agent chạy các step. Con người giữ quyết định.',
      lead: 'Mỗi bên có vai trò rõ ràng: agent xử lý phần được giao, con người quyết định khi cần phán đoán nghiệp vụ.',
      glossary: [
        { term: 'Agent', desc: 'Chạy các step được giao và nộp kết quả để Echelon ghi nhận trạng thái.' },
        { term: 'Con người', desc: 'Xử lý ngoại lệ và chịu trách nhiệm cho quyết định cần phán đoán nghiệp vụ.' },
        { term: 'AI — dự kiến', desc: 'Chưa phải tính năng đã phát hành; kết quả quan trọng cần người xem xét.' },
      ],
    },
    {
      id: 'decisions',
      eyebrow: 'Lợi ích cho doanh nghiệp',
      title: 'Dùng khi cần, không bắt mọi lời gọi đi qua.',
      decisions: [
        { title: 'Chỉ dùng khi cần', desc: 'Vista vẫn gọi trực tiếp Orbit; Echelon chỉ tham gia khi flow cần chia task hoặc kiểm soát từng step.', cost: 'Giá trị: đường gọi mặc định đơn giản, không thêm một chặng không cần thiết.' },
        { title: 'Cân bằng tải khi số step lớn', desc: 'Phân bổ các step đang chờ cho nhiều agent khi khối lượng công việc tăng.', cost: 'Giá trị: nhiều agent cùng tham gia một flow khi cần.' },
        { title: 'Lỗi cục bộ theo step', desc: 'Một step lỗi được ghi nhận riêng, không làm mất dấu các step khác.', cost: 'Giá trị: khoanh vùng được phần cần xử lý tiếp hoặc cần người can thiệp.' },
        { title: 'Phiên bản flow rõ ràng để rà soát khi thay đổi', desc: 'Phiên bản flow được publish rõ ràng, thuận tiện đối chiếu khi cách làm thay đổi.', cost: 'Giá trị: có cơ sở rà soát trước khi đưa thay đổi vào sử dụng.' },
      ],
    },
    {
      id: 'applications',
      eyebrow: 'Ứng dụng đề xuất',
      title: 'Bắt đầu ở nơi flow có nhiều step hoặc nhiều agent.',
      body: [
        'Flow xử lý số lượng lớn step cần cân bằng tải và theo dõi từng bước là hướng phù hợp để đánh giá Echelon.',
        'Flow chia việc giữa các agent chuyên biệt cũng là hướng cần đánh giá. Các ví dụ này là hướng ứng dụng, không phải tham chiếu khách hàng đã triển khai.',
      ],
    },
  ],
  fit: {
    id: 'fit',
    eyebrow: 'Phù hợp với bạn',
    title: 'Đánh giá theo nhu cầu và mức độ sẵn sàng.',
    good: {
      title: 'Phù hợp để bắt đầu đánh giá khi',
      items: ['Flow cần chia task giữa nhiều agent.', 'Số lượng step lớn và cần cân bằng tải.', 'Cần xử lý lỗi theo từng step.', 'Có phạm vi thử và người phụ trách cụ thể.'],
    },
    bad: {
      title: 'Cần trao đổi thêm nếu',
      items: ['Luồng đơn giản Vista ↔ Orbit — nên dùng đường gọi trực tiếp.', 'Bạn cần ngay bản production đã hoàn tất kiểm định.', 'Bắt buộc tính sẵn sàng cao nhiều node hoặc đa tổ chức.', 'Cần AI, lập lịch hoặc xử lý quá hạn đã phát hành.'],
    },
  },
  status: {
    id: 'status',
    eyebrow: 'Trạng thái sản phẩm',
    title: 'Webservice đã chạy được, kiểm định production đang tiếp tục.',
    body: [
      'Echelon có webservice điều phối đa tác nhân: publish flow/skill, khởi tạo process, gửi event và đọc trạng thái qua HTTP/JSON; agent bên ngoài nhận task và nộp kết quả qua HTTP; trạng thái được lưu bền vững. Phạm vi đầu là một node vận hành; kiểm định production chưa hoàn tất.',
      'Echelon không nằm trên đường gọi mặc định: Vista gọi trực tiếp Orbit, còn Echelon tham gia khi flow cần. Nhờ vậy tải của Echelon được giữ ở mức thấp và các lời gọi thường ngày không phải đi thêm một chặng.',
      'Lập lịch và xử lý quá hạn chưa được triển khai. Aira còn ở giai đoạn thiết kế. Phạm vi hỗ trợ, bảo mật và vận hành cần được thống nhất cho từng đánh giá.',
    ],
  },
  cta: {
    title: 'Flow nào của bạn cần chia việc cho nhiều tác nhân?',
    lead: 'Cùng xác định flow có nhiều step hoặc nhiều agent, chọn phạm vi thử và thống nhất kết quả cần thấy trước khi mở rộng.',
    label: 'Trao đổi về Echelon',
    subject: 'Echelon - Trao doi nhu cau',
    back: 'Về BENOVA',
  },
};
