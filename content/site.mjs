/**
 * BENOVA — nguồn nội dung duy nhất của landing page.
 *
 * Toàn bộ chữ hiển thị trên trang được khai báo tại đây.
 * Sửa file này rồi chạy `npm run build` để sinh lại index.html.
 */
const mail = 'mailto:ingenium.modernization@gmail.com';

export default {
  brand: {
    name: 'BENOVA',
    tagline: 'Hệ sinh thái hiện đại hóa core bảo hiểm Ingenium',
    emails: ['ingenium.modernization@gmail.com', 'binean.enova@gmail.com'],
  },

  notice: {
    text: 'Trang đang trong quá trình hoàn thiện. Nội dung và lộ trình sản phẩm sẽ tiếp tục được cập nhật.',
    linkLabel: 'Liên hệ qua email',
  },

  seo: {
    lang: 'vi',
    title: 'BENOVA — Hiện đại hóa Ingenium. Tiếp sức bởi AI và Rust.',
    description:
      'BENOVA là hệ sinh thái core bảo hiểm thế hệ mới cho các công ty đang vận hành Ingenium: di cư từ COBOL/AIX sang nền tảng Cloud-native bằng Rust và AI, theo chiến lược Strangler Fig, không ngừng vận hành.',
    keywords:
      'BENOVA, Ingenium modernization, core bảo hiểm, COBOL modernization, Strangler Fig, Rust, AI Agent, insurance core, cloud-native, Binean',
    url: 'https://binean.com/',
    ogImage: 'assets/images/og-benova.png',
    themeColor: '#0A192F',
  },

  nav: [
    { label: 'Vấn đề', href: '#van-de' },
    { label: 'Hệ sinh thái', href: '#kien-truc' },
    { label: 'Triển khai', href: '#trien-khai' },
    { label: 'Lợi ích', href: '#loi-ich' },
    { label: 'Liên hệ', href: '#lien-he' },
  ],

  hero: {
    eyebrow: 'Dành cho doanh nghiệp bảo hiểm đang vận hành Ingenium · COBOL · AIX · IBM MQ',
    headline: ['Hiện đại hóa Ingenium.', 'Tiếp sức bởi AI và Rust.'],
    sub: 'BENOVA – Hệ sinh thái core bảo hiểm thế hệ mới, cho phép bạn di cư từ hệ thống cũ sang nền tảng Cloud-native hiện đại mà không ngừng vận hành.',
    primaryCta: { label: 'Khám phá kiến trúc', href: '#kien-truc' },
    secondaryCta: { label: 'Liên hệ tư vấn', href: '#lien-he' },
    note: 'Giữ nguyên logic nghiệp vụ · Không đụng tới giấy phép Ingenium · Triển khai cloud, on-prem hoặc hybrid',
    core: { key: 'B', name: 'Binean' },
    satellites: [
      { key: 'E', name: 'Engine', desc: 'Framework điều phối' },
      { key: 'N', name: 'Nexus', desc: 'DevOps cho Ingenium' },
      { key: 'O', name: 'Orbit', desc: 'Hybrid Service Host' },
      { key: 'V', name: 'Vista', desc: 'Flow & Task Management' },
      { key: 'A', name: 'AI Agent', desc: 'Autonomous Control Plane' },
    ],
  },

  problem: {
    id: 'van-de',
    eyebrow: 'Vấn đề',
    title: 'Core cũ không sai. Chỉ là nó đang ngày càng đắt hơn giá trị nó tạo ra.',
    lead: 'Ingenium vẫn chạy đúng nghiệp vụ sau hàng chục năm. Nhưng chi phí vận hành, tốc độ ra tính năng và nguồn nhân lực xung quanh nó thì không còn bền vững.',
    pains: [
      {
        icon: '💸',
        title: 'Chi phí nền tảng leo thang',
        desc: 'AIX, IBM MQ và WebSphere là giấy phép độc quyền, chi phí bảo trì tăng đều mỗi năm trong khi năng lực không đổi.',
      },
      {
        icon: '👤',
        title: 'Thiếu nhân sự COBOL',
        desc: 'Lớp kỹ sư am hiểu COBOL đang nghỉ hưu dần. Tuyển mới gần như bất khả thi, đào tạo lại thì tốn nhiều năm.',
      },
      {
        icon: '🐢',
        title: 'Không theo kịp tốc độ số hóa',
        desc: 'Biên dịch hàng giờ, triển khai thủ công, không có REST API — mỗi kênh số hay đối tác mới đều cần middleware chắp vá.',
      },
      {
        icon: '⚠️',
        title: 'Rủi ro vận hành tích tụ',
        desc: 'Môi trường DEV/SIT/UAT trôi dạt khỏi PRD theo thời gian, sinh ra lỗi "chạy ở đây, hỏng ở kia" và lỗ hổng kiểm toán.',
      },
    ],
    bridge: 'Thay thế toàn bộ core là chương trình nhiều năm với rủi ro rất cao. BENOVA đi đường khác.',
  },

  ecosystem: {
    id: 'kien-truc',
    eyebrow: 'Hệ sinh thái lõi',
    title: 'Năm thành tố, một nền tảng',
    lead: 'BENOVA = B + ENOVA. B là Binean, công ty đứng sau nền tảng. ENOVA là năm thành tố: Engine điều phối, Nexus vận hành, Orbit mở core, Vista trải nghiệm và AI Agent tăng tốc. Mỗi thành tố giải quyết một tầng của bài toán hiện đại hóa và triển khai được độc lập, theo thứ tự phù hợp với bạn.',
    engine: {
      key: 'E',
      name: 'Binean Engine',
      role: 'Framework điều phối',
      status: 'Đang phát triển',
      icon: '🧠',
      desc: 'Bộ khung điều phối của toàn hệ sinh thái, hợp thành từ nhiều project độc lập. Nhân điều phối là Spine: Flow định nghĩa quy trình, mỗi lần chạy là một Process, và Process sinh ra Task để giao cho Agent thực thi. Spine cố tình không phân loại Agent — cùng một điểm nối có thể là con người, một service, hay một AI Agent.',
      highlights: ['Event-driven', 'Đặc tả trước, hiện thực sau', 'Cùng một Agent: người, máy hay AI'],
      children: [
        {
          key: 'Spine',
          icon: '🦴',
          title: 'Spine — Model điều phối',
          desc: 'Model workflow event-driven của Binean Engine. Flow là định nghĩa quy trình bất biến và có version, Process là một lần chạy, Task là một đơn vị công việc. Đặc tả được viết trước, còn implementation và conformance test tồn tại để chứng minh đặc tả đúng.',
        },
        {
          key: 'Basal',
          icon: '🔀',
          title: 'Basal — Thẩm quyền điều hướng',
          desc: 'Không phải bộ định tuyến thụ động: Basal là bên duy nhất có thẩm quyền điều hướng, và là bên chủ động chạy vòng lặp xử lý. Nó sở hữu vòng đời Process, chuyển trạng thái Task, điều kiện hội tụ nhánh và cơ chế phục hồi.',
        },
        {
          key: 'Reflex',
          icon: '⚡',
          title: 'Reflex — Task Agent dựng sẵn',
          desc: 'Agent có sẵn trong lõi, lo phần việc máy móc của mỗi Flow: nhánh rẽ do compiler sinh ra, biến đổi dữ liệu bằng script, và gọi một Flow khác như một Skill để tạo process con.',
        },
        {
          key: 'Scheduler',
          icon: '⏱️',
          title: 'Scheduler & Timeout',
          desc: 'Project riêng trong Binean Engine, đang phát triển, lo lịch trình và giám sát timeout. Mục tiêu: không Task nào bị treo im lặng — quá hạn là có sự kiện, có đền bù, có cảnh báo.',
        },
      ],
    },
    agents: [
      {
        key: 'N',
        name: 'Nexus',
        role: 'DevOps cho Ingenium',
        status: 'Sẵn sàng',
        icon: '🛠️',
        desc: 'Bộ công cụ DevOps được xây riêng cho Ingenium, hoạt động ngay trong VS Code. Biến các thao tác thủ công đầy rủi ro thành pipeline chuẩn hóa và lặp lại được.',
        features: [
          'Biên dịch COBOL song song theo đồ thị phụ thuộc',
          'Backup / restore database có kiểm chứng',
          'Policy management: export, import, copy giữa các môi trường',
          'Start/stop region và tự động hóa vận hành',
          'Thông tin đăng nhập mã hóa AES-256-GCM, không ghi log thô',
        ],
      },
      {
        key: 'O',
        name: 'Orbit',
        role: 'Hybrid Service Host',
        status: 'Đang phát triển',
        icon: '🛰️',
        desc: 'Nơi hệ cũ và hệ mới cùng sống. Orbit chạy song song service Rust mới và Ingenium cũ sau một mặt tiền API duy nhất — nền tảng kỹ thuật cho chiến lược Strangler Fig.',
        features: [
          'Chạy song song service Rust và Ingenium trong cùng một host',
          'Phơi bày core dưới dạng REST API, bỏ middleware MQ',
          'Triển khai tính năng mới mà không ngưng hệ cũ',
          'Truy vấn hợp đồng 24/7, kể cả trong cửa sổ batch',
          'Chuyển đổi từng luồng, có đường lùi ở mọi bước',
        ],
      },
      {
        key: 'V',
        name: 'Vista',
        role: 'Flow & Task Management',
        status: 'Theo lộ trình',
        icon: '🖥️',
        desc: 'Giao diện người dùng thiết kế theo flow chứ không theo màn hình. Người dùng kích hoạt flow, hệ thống sinh process, process sinh Task và phân cho Machine, Human hoặc AI.',
        features: [
          'Kích hoạt flow từ menu → tạo process mới',
          'Process sinh Task, phân cho Machine / Human / AI',
          'Human task thực hiện qua form, kết quả trả về process',
          'Basal nhận kết quả và điều hướng bước tiếp theo',
          'Trang admin: quản lý user, flow, task và giám sát process',
        ],
      },
      {
        key: 'A',
        name: 'AI Agent',
        role: 'Trí tuệ nhân tạo',
        status: 'Theo lộ trình',
        icon: '✨',
        desc: 'AI không phải là một tính năng gắn thêm, mà là một loại Agent ngang hàng với người và máy. AI Agent nhận Task từ Spine đúng như mọi Agent khác — nên có thể bàn giao dần từng phần việc.',
        features: [
          'Hỗ trợ ACP — Autonomous Control Plane',
          'Tự động đảm nhận Task theo mức độ tin cậy',
          'Học từ dữ liệu vận hành và lịch sử xử lý',
          'Đề xuất tối ưu quy trình và phát hiện bất thường',
          'Luôn có human-in-the-loop cho quyết định rủi ro cao',
        ],
      },
    ],
  },

  strategy: {
    id: 'trien-khai',
    eyebrow: 'Cách triển khai',
    title: 'Strangler Fig — thay thế dần, không thay thế một lần',
    lead: 'BENOVA bao quanh Ingenium và siết dần từng luồng nghiệp vụ: luồng mới chạy trên Rust và AI, luồng cũ vẫn phục vụ khách hàng. Khi một luồng đã ổn định trên nền tảng mới, phần COBOL tương ứng được ngưng sử dụng. Không có ngày "big bang".',
    steps: [
      {
        num: '01',
        title: 'Bao quanh',
        desc: 'Orbit đứng trước Ingenium, phơi bày core dưới dạng REST API mà không sửa một dòng COBOL nào.',
      },
      {
        num: '02',
        title: 'Chuyển hướng',
        desc: 'Basal điều hướng từng luồng nghiệp vụ: luồng đã hiện đại hóa đi vào Rust/AI, phần còn lại vẫn đi vào Ingenium.',
      },
      {
        num: '03',
        title: 'Thay thế',
        desc: 'Từng Task được cài đặt lại bằng Rust hoặc giao cho AI Agent, chạy song song và đối chiếu kết quả với hệ cũ.',
      },
      {
        num: '04',
        title: 'Ngưng hệ cũ',
        desc: 'Khi mọi luồng đã đi qua nền tảng mới, phần COBOL tương ứng được cho nghỉ, theo tiến độ bạn chọn.',
      },
    ],
    caption:
      'Cùng một mặt tiền API, tỉ trọng lưu lượng dịch dần từ Ingenium sang Rust và AI theo từng luồng nghiệp vụ.',
  },

  benefits: {
    id: 'loi-ich',
    eyebrow: 'Lợi ích',
    title: 'Bốn vấn đề ở trên, bốn kết quả ở đây',
    lead: 'Mỗi lợi ích gắn với một thay đổi kỹ thuật cụ thể — không phải khẩu hiệu.',
    items: [
      {
        icon: '💸',
        title: 'Thoát dần khỏi giấy phép độc quyền',
        answers: 'Chi phí nền tảng leo thang',
        desc: 'Orbit bỏ middleware MQ, service mới đóng gói container và điều phối bằng Kubernetes. Càng nhiều luồng chuyển sang, phần hạ tầng phải trả tiền giấy phép càng nhỏ lại.',
      },
      {
        icon: '👤',
        title: 'Giảm phụ thuộc vào nhân sự COBOL',
        answers: 'Thiếu nhân sự COBOL',
        desc: 'Nexus đưa COBOL vào VS Code với pipeline chuẩn hóa nên người mới tiếp cận được. Luồng đã chuyển sang Rust thì tuyển dụng và đào tạo nằm trong mặt bằng thị trường hiện tại.',
      },
      {
        icon: '🚀',
        title: 'Rút ngắn thời gian ra tính năng',
        answers: 'Không theo kịp tốc độ số hóa',
        desc: 'Biên dịch song song và triển khai tự động thay cho thao tác thủ công. REST API sẵn có nên kênh số và đối tác mới không phải chờ một lớp middleware riêng.',
      },
      {
        icon: '🛡️',
        title: 'Giảm rủi ro thay vì tích tụ thêm',
        answers: 'Rủi ro vận hành tích tụ',
        desc: 'Môi trường dựng lại được từ baseline có version nên hết trôi dạt. Mỗi bước di cư có cổng go/no-go và đường lùi, hệ thống đang chạy không bị đụng tới.',
      },
    ],
    note: 'Bạn giữ nguyên logic nghiệp vụ, dữ liệu và quyền sở hữu. BENOVA tích hợp với Ingenium chứ không thay thế giấy phép hay chỉnh sửa mã nguồn của nó.',
  },

  cta: {
    id: 'lien-he',
    title: 'Sẵn sàng chuyển đổi core bảo hiểm?',
    lead: 'Bắt đầu bằng một POC có phạm vi rõ ràng trên chính một luồng nghiệp vụ Ingenium của bạn. Chứng minh cải thiện build-and-deploy trước, rồi mới quyết định đi xa tới đâu.',
    primary: {
      label: 'Đăng ký xem demo',
      href: `${mail}?subject=${encodeURIComponent('BENOVA - Dang ky xem demo')}`,
    },
    secondary: {
      label: 'Đặt lịch trao đổi 30 phút',
      href: `${mail}?subject=${encodeURIComponent('BENOVA - Dat lich trao doi 30 phut')}`,
    },
    note: 'Hiện tại chúng tôi chỉ nhận liên hệ qua email. Trao đổi 30 phút, không ràng buộc.',
  },

  footer: {
    blurb: 'BENOVA = B + ENOVA. B là Binean; ENOVA là năm thành tố hiện đại hóa core bảo hiểm Ingenium: Engine, Nexus, Orbit, Vista và AI Agent.',
    columns: [
      {
        title: 'Sản phẩm',
        links: [
          { label: 'Binean Engine', href: '#kien-truc' },
          { label: 'Nexus', href: '#kien-truc' },
          { label: 'Orbit', href: '#kien-truc' },
          { label: 'Vista', href: '#kien-truc' },
          { label: 'AI Agent', href: '#kien-truc' },
        ],
      },
      {
        title: 'Tìm hiểu',
        links: [
          { label: 'Vấn đề', href: '#van-de' },
          { label: 'Cách triển khai', href: '#trien-khai' },
          { label: 'Lợi ích', href: '#loi-ich' },
          { label: 'Liên hệ', href: '#lien-he' },
        ],
      },
    ],
    legal: [],
    copyright: '© 2026 BENOVA. All rights reserved.',
  },
};
