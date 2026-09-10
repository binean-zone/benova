/**
 * Trang giới thiệu mô hình EVA — bản tiếng Việt.
 *
 * EVA là lớp sản phẩm dùng chung gồm Echelon, Vista và Aice. BENOVA là một
 * ứng dụng theo ngành của mô hình này, bổ sung Nexus và Orbit cho Ingenium.
 */
export default {
  seo: {
    title: 'Binean EVA — Một quy trình cho người, service và AI',
    description:
      'Binean EVA kết hợp Echelon, Vista và Aice thành một mô hình vận hành quy trình có thể kiểm soát: hệ thống điều phối, con người xử lý và AI hỗ trợ trên cùng một luồng công việc.',
    keywords:
      'Binean EVA, Echelon, Vista, Aice, human in the loop, AI workflow, multi-agent orchestration, private AI, process automation',
  },

  brandName: 'Binean EVA',
  headerCta: 'Trao đổi use case',

  notice: {
    text: 'EVA đang được xây dựng theo hướng đặc tả trước, thử nghiệm trên một quy trình thật trước khi mở rộng.',
    linkLabel: 'Trao đổi cùng Binean',
  },

  nav: [
    { href: '#bai-toan', label: 'Bài toán' },
    { href: '#mo-hinh', label: 'Mô hình EVA' },
    { href: '#gia-tri', label: 'Giá trị' },
    { href: '#ung-dung', label: 'Ứng dụng' },
    { href: '#benova', label: 'BENOVA' },
  ],

  hero: {
    back: 'Về BENOVA',
    eyebrow: 'Echelon · Vista · Aice',
    title: 'Một quy trình. Người, service và AI cùng hoàn thành.',
    lead: 'EVA là mô hình vận hành quy trình có thể kiểm soát của Binean. Echelon giữ luồng công việc, Vista đưa đúng Task tới người phụ trách, còn Aice đảm nhận hoặc hỗ trợ phần việc phù hợp với AI.',
    primaryCta: { label: 'Khám phá mô hình EVA', href: '#mo-hinh' },
    secondaryCta: { label: 'Chọn một use case', href: '#lien-he-eva' },
    outcome: 'Kết quả cần đạt',
    outcomeText: 'Ít thao tác tay hơn, quyết định quan trọng vẫn ở đúng người, và mọi bước đều có dấu vết để kiểm tra.',
  },

  problem: {
    id: 'bai-toan',
    eyebrow: 'Bài toán',
    title: 'Quy trình thật luôn đi qua nhiều người và nhiều hệ thống',
    lead: 'Hồ sơ không chỉ chạy qua API. Nó chờ người kiểm tra, cần AI đọc tài liệu, gọi service nghiệp vụ rồi quay lại cho một quyết định. Khi mỗi bên dùng một cơ chế riêng, trạng thái phân mảnh và trách nhiệm trở nên khó theo dõi.',
    items: [
      {
        icon: '↗',
        title: 'Bàn giao dễ đứt gãy',
        desc: 'Email, bảng tính, hàng đợi và script giữ những phần khác nhau của cùng một hồ sơ. Không ai thấy trọn hành trình.',
      },
      {
        icon: '◎',
        title: 'AI trở thành hộp đen',
        desc: 'Một kết quả do model tạo ra nhưng thiếu dữ liệu nguồn, người xác nhận và trạng thái xử lý thì khó đưa vào vận hành thật.',
      },
      {
        icon: '⌁',
        title: 'Tự động hóa bị khóa cứng',
        desc: 'Đổi một bước từ người sang AI hoặc service thường kéo theo việc viết lại luồng, tích hợp và cơ chế kiểm soát xung quanh.',
      },
    ],
  },

  model: {
    id: 'mo-hinh',
    eyebrow: 'Mô hình EVA',
    title: 'Ba lớp, một vòng công việc khép kín',
    lead: 'EVA tách rõ ai điều phối, ai tương tác và ai thực thi. Mỗi lớp làm đúng phần việc của mình nhưng cùng dùng Task và Outcome để phối hợp.',
    pillars: [
      {
        key: 'E',
        name: 'Echelon',
        role: 'Engine điều phối',
        color: '#5eead4',
        desc: 'Giữ trạng thái của Flow và Process, phát Task, nhận Outcome rồi quyết định bước tiếp theo từ một nguồn thẩm quyền duy nhất.',
        features: ['Quy trình dài hạn và có version', 'Một Task cho người, service hoặc AI', 'Khôi phục và kiểm tra theo sự kiện'],
        link: { label: 'Tìm hiểu Echelon', href: 'echelon/' },
      },
      {
        key: 'V',
        name: 'Vista',
        role: 'Bàn làm việc cho con người',
        color: '#fb7185',
        desc: 'Trình bày đúng Task, dữ liệu và hành động mà người dùng cần. Vista thu ý định của người dùng nhưng không tự quyết định logic nghiệp vụ.',
        features: ['Task, form và ngữ cảnh trong một nơi', 'Trạng thái xử lý rõ ràng', 'Giao diện thích ứng theo Flow'],
      },
      {
        key: 'A',
        name: 'Aice',
        role: 'Năng lực AI',
        color: '#a3e635',
        desc: 'Nhận trọn một Task phù hợp với AI, hoặc tạo bản nháp ngay trong Human Task để người phụ trách xem, sửa và xác nhận.',
        features: ['Trích xuất, phân loại và tổng hợp', 'Bản nháp theo cấu trúc đầu ra', 'Giữ người trong vòng kiểm soát'],
      },
    ],
    flow: {
      title: 'Cùng một hợp đồng từ đầu đến cuối',
      caption: 'Đổi người thực thi không buộc phải đổi Flow: hôm nay một người xử lý, ngày mai Aice hỗ trợ, và khi quy tắc đã đủ rõ một service có thể đảm nhận.',
      steps: [
        { num: '01', title: 'Echelon phát Task', desc: 'Flow xác định việc cần làm và dữ liệu đầu vào.' },
        { num: '02', title: 'Vista hoặc Aice thực thi', desc: 'Người, AI hay service nhận đúng phần việc được giao.' },
        { num: '03', title: 'Outcome quay về', desc: 'Kết quả và trạng thái được trả theo cùng một hợp đồng.' },
        { num: '04', title: 'Echelon điều hướng', desc: 'Basal quyết định bước kế tiếp và giữ một nguồn sự thật.' },
      ],
    },
  },

  value: {
    id: 'gia-tri',
    eyebrow: 'Giá trị',
    title: 'Tự động hóa tăng dần mà quyền kiểm soát không giảm đi',
    lead: 'EVA được thiết kế cho những quy trình cần cả tốc độ của máy lẫn phán đoán của con người.',
    items: [
      {
        icon: '◫',
        title: 'Một hành trình có thể kiểm tra',
        desc: 'Task, người thực hiện, kết quả và bước chuyển tiếp nằm trong cùng một dòng sự kiện thay vì rải rác qua nhiều công cụ.',
      },
      {
        icon: '✓',
        title: 'Con người giữ quyết định quan trọng',
        desc: 'Aice có thể soạn nháp và đề xuất; người phụ trách vẫn là bên xác nhận những kết quả có tác động cao.',
      },
      {
        icon: '⇄',
        title: 'Bàn giao theo mức sẵn sàng',
        desc: 'Từng Task có thể đi từ người sang AI rồi sang service khi dữ liệu, độ tin cậy và quy tắc đã đủ rõ.',
      },
      {
        icon: '⌂',
        title: 'Phù hợp môi trường riêng',
        desc: 'Kiến trúc hướng tới khả năng triển khai trong hạ tầng do tổ chức lựa chọn khi dữ liệu không thể rời khỏi ranh giới kiểm soát.',
      },
    ],
  },

  applications: {
    id: 'ung-dung',
    eyebrow: 'Ứng dụng',
    title: 'Bắt đầu từ một quy trình có hồ sơ, quy tắc và người review',
    lead: 'EVA phù hợp nhất khi công việc có đầu vào rõ, đi qua nhiều bước và cần giữ bằng chứng cho quyết định cuối cùng.',
    items: [
      {
        num: '01',
        title: 'Tiếp nhận và kiểm tra hồ sơ',
        desc: 'AI trích xuất và kiểm tra dữ liệu; người xử lý tập trung vào ngoại lệ và quyết định cuối.',
      },
      {
        num: '02',
        title: 'Phê duyệt nhiều bước',
        desc: 'Service chuẩn bị dữ liệu, Vista đưa Task đến đúng vai trò, Echelon giữ điều kiện và lịch sử của quy trình.',
      },
      {
        num: '03',
        title: 'Điều tra và xử lý sự cố',
        desc: 'Máy thu thập tín hiệu, AI tổng hợp bối cảnh, con người duyệt hành động trước khi hệ thống tiếp tục.',
      },
    ],
    note: 'Một pilot tốt nên bắt đầu bằng một Flow, một loại hồ sơ và một tích hợp có tiêu chí thành công đo được.',
  },

  benova: {
    id: 'benova',
    eyebrow: 'Từ EVA đến BENOVA',
    title: 'EVA là mô hình nền. BENOVA đưa mô hình đó vào Ingenium.',
    lead: 'Trong BENOVA, Echelon, Vista và Aice phối hợp quy trình giữa người, service và AI. Nexus bổ sung DevOps chuyên biệt cho Ingenium; Orbit cho hệ cũ và service mới cùng chạy sau một mặt tiền API.',
    formula: [
      { name: 'EVA', desc: 'Điều phối · Trải nghiệm · AI' },
      { name: 'Nexus + Orbit', desc: 'Vận hành · Tích hợp Ingenium' },
      { name: 'BENOVA', desc: 'Hiện đại hóa core theo từng bước' },
    ],
    cta: { label: 'Khám phá BENOVA', href: '' },
  },

  cta: {
    id: 'lien-he-eva',
    title: 'Chọn một quy trình đủ nhỏ để chứng minh giá trị.',
    lead: 'Mang đến một quy trình đang tốn nhiều thao tác tay, có hồ sơ thật và một người chịu trách nhiệm kết quả. Binean sẽ cùng bạn xác định chỗ nào nên giao cho service, chỗ nào Aice có thể hỗ trợ và chỗ nào con người phải giữ quyền quyết định.',
    label: 'Trao đổi use case trong 30 phút',
    subject: 'EVA - Trao doi use case',
    back: 'Xem BENOVA',
  },
};
