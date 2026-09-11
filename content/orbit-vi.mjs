/**
 * Trang giới thiệu Binean Orbit — bản tiếng Việt.
 *
 * Orbit là lớp chuyển đổi Ingenium theo từng module: cô lập COBOL sau một
 * contract ổn định, xây implementation Rust, đối chiếu rồi chuyển dần.
 */
export default {
  seo: {
    title: 'Binean Orbit — Chuyển dần Ingenium từ COBOL sang Rust',
    description:
      'Binean Orbit biến Ingenium thành hybrid core, cho phép cô lập từng module COBOL, xây lại bằng Rust và chuyển đổi từng bước sau một Web API ổn định.',
    keywords:
      'Binean Orbit, Ingenium modernization, COBOL to Rust, hybrid core, Strangler Fig, insurance core API, policy administration, gradual modernization',
  },

  brandName: 'Binean Orbit',
  headerCta: 'Trao đổi về Orbit',

  notice: {
    text: 'Orbit đang ở giai đoạn hình thành; Web API Rust và cầu nối COBOL là foundation cho round thiết kế tiếp theo.',
    linkLabel: 'Trao đổi về một module',
  },

  nav: [
    { href: '#hybrid', label: 'Hybrid core' },
    { href: '#hanh-trinh', label: 'Hành trình' },
    { href: '#premium-allocation', label: 'Ví dụ' },
    { href: '#orbit-agent', label: 'Orbit Agent' },
    { href: '#trang-thai-orbit', label: 'Trạng thái' },
  ],

  hero: {
    back: 'Về BENOVA',
    eyebrow: 'Từng module · Cùng một core · Không big bang',
    title: 'Chuyển Ingenium sang Rust. Từng phần một.',
    lead: 'Orbit đặt một Web API ổn định trước Ingenium để COBOL và Rust có thể cùng phục vụ một core. Mỗi module được cô lập, thiết kế lại và chuyển đổi theo mức sẵn sàng của chính nó — trong khi phần còn lại tiếp tục vận hành.',
    primaryCta: { label: 'Xem hành trình chuyển đổi', href: '#hanh-trinh' },
    secondaryCta: { label: 'Xem ví dụ module', href: '#premium-allocation' },
    visual: {
      label: 'Orbit Hybrid Core',
      api: 'Stable Web API',
      request: 'Policy request',
      cobol: 'COBOL modules',
      rust: 'Rust modules',
      caption: 'Routing dịch chuyển theo từng module, không theo một ngày cutover chung.',
    },
  },

  hybrid: {
    id: 'hybrid',
    eyebrow: 'Hybrid by design',
    title: 'Hệ cũ và hệ mới cùng chạy sau một ranh giới ổn định',
    lead: 'Orbit tạo một mặt tiền chung cho các năng lực xử lý và quản trị hợp đồng. Bên gọi không cần biết module phía sau đang là COBOL hay Rust.',
    items: [
      {
        icon: '↔',
        title: 'Một Web API',
        desc: 'Kênh số, service và Flow gọi cùng một contract trong suốt hành trình chuyển đổi.',
      },
      {
        icon: '◫',
        title: 'Chuyển theo module',
        desc: 'Mỗi năng lực nghiệp vụ có boundary và nhịp chuyển đổi riêng, phù hợp với độ phức tạp và rủi ro của nó.',
      },
      {
        icon: '↶',
        title: 'Luôn có đường lùi',
        desc: 'COBOL tiếp tục phục vụ cho tới khi implementation Rust đã được đối chiếu và đủ tin cậy để nhận routing.',
      },
    ],
  },

  journey: {
    id: 'hanh-trinh',
    eyebrow: 'Module-by-module',
    title: 'Bốn bước để một phần COBOL trở thành Rust',
    lead: 'Orbit bắt đầu bằng việc tạo ranh giới quanh module hiện có. Việc viết lại chỉ diễn ra sau khi đầu vào, đầu ra và trách nhiệm của module đã rõ.',
    steps: [
      {
        num: '01',
        title: 'Chạy hybrid',
        desc: 'Đặt Orbit trước Ingenium để request có thể đi vào implementation COBOL hoặc Rust sau cùng một API.',
        tag: 'COBOL + RUST',
      },
      {
        num: '02',
        title: 'Cô lập module',
        desc: 'Chia core theo năng lực nghiệp vụ, định nghĩa contract và bọc module COBOL hiện tại sau boundary đó.',
        tag: 'STABLE CONTRACT',
      },
      {
        num: '03',
        title: 'Thiết kế lại bằng Rust',
        desc: 'Xây implementation Rust dùng cùng contract và đối chiếu kết quả với logic đang vận hành.',
        tag: 'VERIFY',
      },
      {
        num: '04',
        title: 'Chuyển hẳn',
        desc: 'Dịch routing sang Rust khi đủ tin cậy, ổn định trong thực tế rồi ngưng phần COBOL tương ứng.',
        tag: 'RUST',
      },
    ],
    note: 'Một core lớn được hiện đại hóa bằng nhiều quyết định nhỏ có thể kiểm chứng, thay vì một lần thay thế toàn bộ.',
  },

  example: {
    id: 'premium-allocation',
    eyebrow: 'Ví dụ module đầu tiên',
    title: 'Premium Allocation: một boundary nhỏ nhưng giàu logic nghiệp vụ',
    lead: 'Khi khách hàng đóng tiền, module phân bổ khoản tiền đó theo rule được cấu hình cho sản phẩm.',
    input: 'Customer payment',
    engine: 'Premium Allocation',
    outputs: [
      { key: 'S', title: 'Suspense', desc: 'Giữ tiền khi chưa tới thời điểm phù hợp.' },
      { key: 'P', title: 'Policy account', desc: 'Phân bổ vào tài khoản hợp đồng.' },
      { key: 'E', title: 'Excess', desc: 'Đưa phần vượt điều kiện vào excess.' },
    ],
    copy: 'Orbit cô lập logic COBOL hiện tại sau một contract, xây bản Rust tương đương, đối chiếu kết quả rồi chuyển routing khi đủ tin cậy.',
  },

  agent: {
    id: 'orbit-agent',
    eyebrow: 'Trong mô hình EVA',
    title: 'Orbit là Agent chuyên về xử lý và quản trị hợp đồng',
    lead: 'Các năng lực của hybrid core được cung cấp thành Skill qua Web API. Echelon có thể giao Task cho Orbit trong một Flow mà không phụ thuộc implementation đang là COBOL hay Rust.',
    nodes: [
      { key: 'E', title: 'Echelon Flow', desc: 'Giao Task nghiệp vụ và giữ hành trình.' },
      { key: 'O', title: 'Orbit Agent', desc: 'Chọn Skill hợp đồng qua Web API.' },
      { key: 'H', title: 'Hybrid Core', desc: 'Routing tới module COBOL hoặc Rust.' },
    ],
    skillsLabel: 'Policy skills',
    skills: ['Inquiry', 'Validation', 'Processing', 'Administration'],
  },

  status: {
    id: 'trang-thai-orbit',
    eyebrow: 'Foundation / Direction',
    title: 'Orbit đã có điểm nối kỹ thuật; sản phẩm vẫn đang được định hình',
    lead: 'Source hiện tại cho thấy hướng Web API Rust, authentication và giao tiếp với COBOL. Round tiếp theo sẽ biến các mảnh đó thành một kiến trúc migration theo module nhất quán.',
    foundation: {
      tag: 'FOUNDATION · ĐÃ CÓ',
      title: 'Cầu nối hybrid ban đầu',
      items: ['Rust Web API service', 'Authentication và role mapping', 'COBOL IPC và multi-worker dispatcher', 'Khung xử lý policy ban đầu'],
    },
    direction: {
      tag: 'DIRECTION · ĐANG HÌNH THÀNH',
      title: 'Con đường chuyển đổi core',
      items: ['Contract ổn định cho từng module', 'COBOL và Rust chạy song song', 'Đối chiếu trước khi chuyển routing', 'Orbit Skills cho Echelon Flow'],
    },
    note: 'Orbit chưa được định vị là sản phẩm sẵn sàng để thay thế core. Mỗi module sẽ cần một phạm vi, bằng chứng và tiêu chí chuyển đổi riêng.',
  },

  cta: {
    id: 'lien-he-orbit',
    title: 'Chọn một module đủ nhỏ để bắt đầu, đủ thật để chứng minh.',
    lead: 'Bắt đầu từ một năng lực có boundary rõ, logic đang vận hành và kết quả có thể đối chiếu. Binean sẽ cùng bạn xác định contract, cách chạy hybrid và tiêu chí chuyển routing phù hợp.',
    label: 'Trao đổi về một module',
    subject: 'Binean Orbit - Trao doi ve Ingenium module',
    back: 'Xem BENOVA',
  },
};
