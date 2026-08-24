/**
 * BENOVA — nguồn nội dung duy nhất của landing page.
 *
 * Toàn bộ chữ hiển thị trên trang được khai báo tại đây.
 * Sửa file này rồi chạy `npm run build` để sinh lại index.html.
 */
export default {
  brand: {
    name: 'BENOVA',
    tagline: 'Hệ sinh thái hiện đại hóa core bảo hiểm Ingenium',
    email: 'ingenium.modernization@gmail.com',
    phone: '+84 28 7300 0000',
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
    { label: 'Giới thiệu', href: '#gioi-thieu' },
    { label: 'Kiến trúc', href: '#kien-truc' },
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
    satellites: [
      { key: 'BE', name: 'Binean Engine', desc: 'Framework điều phối Agent lai' },
      { key: 'N', name: 'Nexus', desc: 'DevOps cho Ingenium' },
      { key: 'O', name: 'Orbit', desc: 'Hybrid Service Host' },
      { key: 'V', name: 'Vista', desc: 'Flow & Task Management' },
      { key: 'A', name: 'AI Agent', desc: 'Autonomous Control Plane' },
    ],
  },

  proof: {
    title: 'Được chứng minh trên một chương trình di cư thật',
    metrics: [
      { value: '3 giờ → 20 phút', label: 'Thời gian triển khai một thay đổi tiêu biểu' },
      { value: '~9 tháng', label: 'Hoàn tất di cư Ingenium từ AIX sang Linux' },
      { value: '~5 phút', label: 'Cửa sổ downtime có kế hoạch mỗi lần deploy' },
      { value: '5–10x', label: 'Tăng tốc biên dịch COBOL nhờ phân tích phụ thuộc' },
    ],
  },

  problem: {
    id: 'gioi-thieu',
    eyebrow: 'Vấn đề & Giải pháp',
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
    solution: {
      eyebrow: 'Chiến lược',
      title: 'Strangler Fig — thay thế dần, không thay thế một lần',
      lead: 'Thay vì "rip and replace" nhiều năm với rủi ro rất cao, BENOVA bao quanh Ingenium và siết dần từng luồng nghiệp vụ: luồng mới chạy trên Rust và AI, luồng cũ vẫn phục vụ khách hàng. Khi một luồng đã ổn định trên nền tảng mới, phần COBOL tương ứng được ngưng sử dụng.',
      steps: [
        {
          num: '01',
          title: 'Bao quanh',
          desc: 'Orbit đứng trước Ingenium, phơi bày core dưới dạng REST API mà không sửa một dòng COBOL nào.',
        },
        {
          num: '02',
          title: 'Chuyển hướng',
          desc: 'Basal định tuyến từng luồng nghiệp vụ: luồng đã hiện đại hóa đi vào Rust/AI, phần còn lại vẫn đi vào Ingenium.',
        },
        {
          num: '03',
          title: 'Thay thế',
          desc: 'Từng Task được cài đặt lại bằng Rust hoặc giao cho AI Agent, chạy song song và đối chiếu kết quả với hệ cũ.',
        },
        {
          num: '04',
          title: 'Ngưng hệ cũ',
          desc: 'Khi mọi luồng đã đi qua nền tảng mới, phần COBOL tương ứng được cho nghỉ. Không có ngày "big bang".',
        },
      ],
    },
  },

  ecosystem: {
    id: 'kien-truc',
    eyebrow: 'Hệ sinh thái lõi',
    title: 'Năm thành phần, một nền tảng',
    lead: 'BENOVA = BE + N + O + V + A. Mỗi thành phần giải quyết một tầng của bài toán hiện đại hóa và có thể triển khai độc lập, theo thứ tự phù hợp với bạn.',
    engine: {
      key: 'BE',
      name: 'Binean Engine',
      role: 'Framework điều phối',
      status: 'Nền tảng',
      icon: '🧠',
      desc: 'Bộ khung điều phối của toàn hệ sinh thái. Binean Engine mô hình hóa mọi việc cần làm thành Skill và Task, rồi phân phối cho Agent phù hợp — dù Agent đó là con người, máy, hay AI.',
      highlights: ['Agent lai: Human + Machine + AI', 'Event-driven', 'Độ trễ cực thấp (Rust)'],
      children: [
        {
          key: 'Spine',
          icon: '🦴',
          title: 'Spine — Orchestrator chính',
          desc: 'Trái tim điều phối. Thiết kế để hỗ trợ Agent lai (Human + Machine + AI), quản lý vòng đời Skill và Task, đảm bảo mỗi việc đến đúng người thực thi với đúng ngữ cảnh.',
        },
        {
          key: 'Basal',
          icon: '🔀',
          title: 'Basal — Event Machine Agent',
          desc: 'Bộ định tuyến sự kiện. Nhận sự kiện từ process, quyết định bước kế tiếp và điều hướng giữa các Agent — đây cũng là nơi chiến lược Strangler Fig được thực thi trong thực tế.',
        },
        {
          key: 'Reflex',
          icon: '⚡',
          title: 'Reflex — Machine Agent nội bộ',
          desc: 'Agent máy nằm sát Spine, thực thi Task với độ trễ cực thấp. Dành cho các tác vụ tính toán, kiểm tra và biến đổi dữ liệu cần phản hồi tức thì.',
        },
        {
          key: 'Scheduler',
          icon: '⏱️',
          title: 'Scheduler & Timeout',
          desc: 'Agent chuyên trách lịch trình và giám sát timeout. Không Task nào bị treo im lặng: quá hạn là có sự kiện, có đền bù, có cảnh báo — giúp Spine vận hành bền vững dài hạn.',
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

  benefits: {
    id: 'loi-ich',
    eyebrow: 'Lợi ích',
    title: 'Điều thay đổi trong vận hành hằng ngày',
    lead: 'Mỗi lợi ích dưới đây gắn với một thay đổi kỹ thuật cụ thể — không phải khẩu hiệu.',
    items: [
      {
        icon: '🚀',
        title: 'Tốc độ',
        desc: 'Các luồng nghiệp vụ nóng được viết lại bằng Rust — nhanh hơn tới 10x so với cài đặt COBOL tương ứng, đồng thời an toàn bộ nhớ theo thiết kế.',
        stat: '10x',
        statLabel: 'nhanh hơn ở luồng đã chuyển sang Rust',
      },
      {
        icon: '🛡️',
        title: 'An toàn',
        desc: 'Di cư từng bước theo Strangler Fig. Hệ thống đang chạy không bị phá vỡ, mỗi bước đều có cổng go/no-go và đường lùi rõ ràng.',
        stat: '0',
        statLabel: 'ngày "big bang" trong lộ trình',
      },
      {
        icon: '🤖',
        title: 'Thông minh',
        desc: 'AI Agent đảm nhận các Task lặp lại và kiểm tra chéo kết quả, giảm sai sót thủ công và giải phóng đội ngũ cho phần việc cần phán đoán.',
        stat: '24/7',
        statLabel: 'xử lý không phụ thuộc ca trực',
      },
      {
        icon: '☁️',
        title: 'Sẵn sàng Cloud-native',
        desc: 'Đóng gói container, điều phối bằng Kubernetes, quan sát bằng công cụ chuẩn ngành. Chạy trên cloud, on-premise hay hybrid đều cùng một cách vận hành.',
        stat: 'K8s',
        statLabel: 'triển khai cloud, on-prem hoặc hybrid',
      },
      {
        icon: '🔓',
        title: 'Không khóa nhà cung cấp',
        desc: 'Bạn giữ nguyên logic nghiệp vụ, dữ liệu và quyền sở hữu. BENOVA tích hợp với Ingenium chứ không thay thế giấy phép hay chỉnh sửa mã nguồn của nó.',
        stat: '100%',
        statLabel: 'quyền sở hữu nghiệp vụ thuộc về bạn',
      },
    ],
  },

  cta: {
    id: 'lien-he',
    title: 'Sẵn sàng chuyển đổi core bảo hiểm?',
    lead: 'Bắt đầu bằng một POC có phạm vi rõ ràng trên chính một luồng nghiệp vụ Ingenium của bạn. Chứng minh cải thiện build-and-deploy trước, rồi mới quyết định đi xa tới đâu.',
    primary: { label: 'Đăng ký Demo', href: '#' },
    secondary: { label: 'Tải Whitepaper', href: '#' },
    note: 'Tư vấn 30 phút, không ràng buộc. Phản hồi trong vòng 2 ngày làm việc.',
  },

  footer: {
    blurb: 'BENOVA là hệ sinh thái hiện đại hóa core bảo hiểm Ingenium: điều phối bằng Binean Engine, vận hành bằng Nexus, mở core bằng Orbit, trải nghiệm bằng Vista và tăng tốc bằng AI Agent.',
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
          { label: 'Vấn đề & Giải pháp', href: '#gioi-thieu' },
          { label: 'Chiến lược Strangler Fig', href: '#strangler' },
          { label: 'Lợi ích', href: '#loi-ich' },
          { label: 'Đăng ký Demo', href: '#lien-he' },
        ],
      },
    ],
    legal: [
      { label: 'Chính sách bảo mật', href: '#' },
      { label: 'Điều khoản sử dụng', href: '#' },
    ],
    copyright: '© 2026 BENOVA. All rights reserved.',
  },
};
