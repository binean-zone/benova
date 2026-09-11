/**
 * Trang giới thiệu Binean Nexus — bản tiếng Việt.
 *
 * Nexus giữ năng lực chuyên biệt cho Ingenium. Echelon điều phối Flow, còn
 * Vista đưa Human Task và trạng thái Flow tới developer trong VS Code.
 */
export default {
  seo: {
    title: 'Binean Nexus — Tự động hóa vận hành và phát triển Ingenium',
    description:
      'Binean Nexus biến các công cụ DB2, database, policy, COBOL, Git và runtime Ingenium thành Skill có thể kết hợp trong Flow cho CI/CD, refresh môi trường và support debug.',
    keywords:
      'Binean Nexus, Ingenium DevOps, Ingenium CI/CD, COBOL build, DB2 automation, database refresh, policy copy, VS Code Ingenium, Echelon, Vista',
  },

  brandName: 'Binean Nexus',
  headerCta: 'Trao đổi về Nexus',

  notice: {
    text: 'Bộ công cụ Nexus đã được dùng trên hệ Ingenium thật; kiến trúc Agent, Flow và Vista integration đang bước vào round revamp.',
    linkLabel: 'Trao đổi về môi trường của bạn',
  },

  nav: [
    { href: '#nang-luc', label: 'Năng lực' },
    { href: '#flow', label: 'Flow' },
    { href: '#kien-truc-nexus', label: 'Kiến trúc' },
    { href: '#developer', label: 'Developer' },
    { href: '#trang-thai', label: 'Trạng thái' },
  ],

  hero: {
    back: 'Về BENOVA',
    eyebrow: 'DevOps chuyên biệt cho Ingenium',
    title: 'Biến công việc Ingenium thành những Flow có thể lặp lại.',
    lead: 'Nexus gom tri thức vận hành Ingenium vào một bộ công cụ chuyên dụng. Mỗi công cụ trở thành Skill của Nexus Agent; Echelon kết hợp chúng thành Flow, còn Vista đưa đúng Task và trạng thái tới developer ngay trong VS Code.',
    primaryCta: { label: 'Xem các Flow', href: '#flow' },
    secondaryCta: { label: 'Xem trạng thái hiện tại', href: '#trang-thai' },
    terminal: {
      label: 'Developer Flow',
      context: 'work-item / T02073',
      steps: [
        { tool: 'igit', text: 'xác định source thay đổi', state: 'done' },
        { tool: 'icomp', text: 'compile phần bị ảnh hưởng', state: 'done' },
        { tool: 'ing', text: 'restart DEV region', state: 'running' },
        { tool: 'flow', text: 'thu test evidence', state: 'queued' },
      ],
      result: 'Một hành trình · Một trạng thái · Một dấu vết',
    },
  },

  capabilities: {
    id: 'nang-luc',
    eyebrow: 'Skill primitives',
    title: 'Công cụ nhỏ, ranh giới rõ, ghép được thành việc lớn',
    lead: 'Nexus giữ từng thao tác ở dạng xác định và kiểm tra được. Agent không cần biết cách nói chuyện trực tiếp với DB2 hay Ingenium; nó gọi Skill với đầu vào, quyền hạn và kết quả rõ ràng.',
    items: [
      {
        icon: 'DB',
        title: 'DB2, database và policy',
        tools: 'iadm · idb · ipol',
        desc: 'Tạo và cấu hình database bằng quyền DB admin; backup, restore và refresh database Ingenium; export hoặc import policy giữa các môi trường.',
        points: ['Tách thao tác DBA khỏi thao tác thường ngày', 'Giữ bước kiểm tra trước và sau thay đổi', 'Phù hợp cho flow refresh và support'],
      },
      {
        icon: 'CO',
        title: 'Ingenium và COBOL',
        tools: 'ing · icomp',
        desc: 'Start hoặc stop Ingenium region, biên dịch project và chỉ xử lý phần source thực sự bị ảnh hưởng để rút ngắn vòng phản hồi.',
        points: ['Compile song song và tăng dần', 'Bind, restart và kiểm tra theo chuỗi', 'Dùng được từ terminal hoặc Flow'],
      },
      {
        icon: 'GI',
        title: 'Source và work item',
        tools: 'igit + icomp',
        desc: 'Đặt Git vào đúng ngữ cảnh Ingenium: branch theo work item, so với golden point, tìm file thay đổi và đưa tập source đó sang compile.',
        points: ['Một ngữ cảnh từ branch tới build', 'Giảm thao tác Git dễ sai', 'Tạo đầu vào rõ cho CI/CD'],
      },
      {
        icon: 'NX',
        title: 'Môi trường và tiện ích',
        tools: 'nexus · dev tools · VS Code',
        desc: 'Chuẩn bị cấu hình môi trường, các tiện ích dùng chung và một lớp tích hợp cơ bản trong VS Code để developer làm việc ngay trong ngữ cảnh hiện tại.',
        points: ['Cấu hình theo environment', 'Một điểm vào cho developer', 'Nền để đưa Task của Vista vào IDE'],
      },
    ],
  },

  flows: {
    id: 'flow',
    eyebrow: 'Operational flows',
    title: 'Giá trị xuất hiện khi các Skill chạy cùng nhau',
    lead: 'Một CLI giúp giảm một vài thao tác. Một Flow nối đúng công cụ, quyền hạn và điểm kiểm tra sẽ thay đổi cả cách đội ngũ vận hành Ingenium.',
    items: [
      {
        num: '01',
        title: 'CI/CD cho Ingenium',
        summary: 'Đưa work item từ thay đổi source tới một release package có bằng chứng.',
        steps: ['Đọc branch và golden point', 'Tìm source bị ảnh hưởng', 'Compile và bind có chọn lọc', 'Chạy kiểm tra, gom log và kết quả', 'Đưa tới bước review hoặc deploy'],
        outcome: 'Một pipeline có thể chạy lại thay cho chuỗi lệnh truyền miệng.',
      },
      {
        num: '02',
        title: 'Refresh low environment',
        summary: 'Phối hợp database, Ingenium runtime và kiểm tra sau refresh trong một hành trình.',
        steps: ['Xác nhận nguồn và đích', 'Dừng region liên quan', 'Backup, restore hoặc refresh database', 'Cấu hình lại và khởi động region', 'Kiểm tra trạng thái rồi bàn giao'],
        outcome: 'Giảm thời gian chờ và giữ đầy đủ trạng thái của từng bước.',
      },
      {
        num: '03',
        title: 'Copy policy để support và debug',
        summary: 'Đưa đúng policy tới DEV để tái hiện lỗi trong phạm vi được kiểm soát.',
        steps: ['Nhận policy và môi trường nguồn', 'Kiểm tra quyền và dữ liệu đích', 'Export policy', 'Import vào DEV', 'Chuẩn bị region và Task debug'],
        outcome: 'Support có môi trường tái hiện nhất quán và một dấu vết để đối chiếu.',
      },
    ],
    note: 'Flow không chỉ cộng chức năng của các tool. Nó giữ thứ tự, điều kiện, quyền hạn, bước chờ người và khả năng tiếp tục khi một thao tác thất bại.',
  },

  architecture: {
    id: 'kien-truc-nexus',
    eyebrow: 'Trong BENOVA',
    title: 'Echelon điều phối. Nexus thực thi. Vista giữ developer trong vòng công việc.',
    lead: 'Các lớp dùng chung Task và Outcome nhưng giữ trách nhiệm riêng. Nhờ vậy Nexus tập trung vào tri thức Ingenium, còn Flow vẫn có thể được quan sát và kiểm soát từ đầu tới cuối.',
    layers: [
      { key: 'E', title: 'Echelon', role: 'Flow authority', desc: 'Giữ Process, phát Task, nhận Outcome và quyết định bước kế tiếp.' },
      { key: 'N', title: 'Nexus Agent', role: 'Ingenium executor', desc: 'Chọn và gọi Skill phù hợp với Task, environment và quyền được cấp.' },
      { key: 'S', title: 'Nexus Skills', role: 'Deterministic actions', desc: 'Thao tác với DB2, database, policy, COBOL, Git và Ingenium runtime.' },
    ],
    human: {
      key: 'V',
      title: 'Vista for VS Code',
      role: 'Human workbench',
      desc: 'Hiển thị Task, tiến độ, log và điểm cần developer review hoặc hành động.',
    },
    signal: 'Task ↓ · Outcome ↑',
  },

  developer: {
    id: 'developer',
    eyebrow: 'Developer experience',
    title: 'Một catalog Flow riêng cho môi trường phát triển',
    lead: 'Vista VS Code Host có thể đi cùng Echelon Local — runtime gọn cho một developer, dùng cùng contract với Echelon đầy đủ nhưng chạy các Flow thiên về DEV.',
    windowTitle: 'Vista for VS Code · DEV',
    features: [
      { icon: '▶', title: 'Chạy Flow tại chỗ', desc: 'Start, pause, retry và theo dõi từng Task mà không rời IDE.' },
      { icon: '◎', title: 'Đúng ngữ cảnh đang mở', desc: 'Flow biết workspace, branch, program hoặc policy mà developer đang xử lý.' },
      { icon: '◇', title: 'Người và máy cùng một luồng', desc: 'Nexus chạy Skill; Vista dừng đúng chỗ để developer review hoặc quyết định.' },
      { icon: '↗', title: 'Cùng contract với server', desc: 'Flow phù hợp có thể chuyển sang Echelon server mà không đổi mô hình Task và Outcome.' },
    ],
    examples: ['Build work item', 'Prepare debug policy', 'Reset DEV region', 'Collect test evidence'],
  },

  status: {
    id: 'trang-thai',
    eyebrow: 'Now / Next',
    title: 'Giữ phần đã chứng minh, revamp cách các phần phối hợp',
    lead: 'Nexus không bắt đầu từ một slide kiến trúc. Bộ công cụ và VS Code extension đã tồn tại; round tiếp theo chuẩn hóa chúng quanh Agent, Skill và Flow.',
    current: {
      tag: 'NOW · ĐÃ CÓ',
      title: 'Nền công cụ Ingenium',
      items: ['CLI cho DB2, database, policy, runtime, compile và Git', 'Các tối ưu dành riêng cho vòng phát triển Ingenium', 'VS Code extension cơ bản', 'Kinh nghiệm từ hệ Ingenium thật'],
    },
    next: {
      tag: 'NEXT · REVAMP',
      title: 'Một hệ vận hành theo Flow',
      items: ['Chuẩn hóa CLI thành Nexus Skill', 'Nexus Agent thực thi Task từ Echelon', 'Chuyển các workflow tiền thân sang Echelon Flow', 'Vista VS Code Host cùng Echelon Local cho DEV'],
    },
    note: 'Không cam kết một ngày phát hành chung. Mỗi Flow sẽ được chứng minh trên một hành trình thật trước khi mở rộng.',
  },

  cta: {
    id: 'lien-he-nexus',
    title: 'Bắt đầu từ một Flow Ingenium đang làm đội ngũ mất thời gian.',
    lead: 'Chọn một hành trình có đầu vào, người chịu trách nhiệm và kết quả đo được — như compile một work item, refresh low environment hoặc copy policy để debug. Binean sẽ cùng bạn tách nó thành Skill, Task và điểm kiểm soát phù hợp.',
    label: 'Trao đổi về Nexus',
    subject: 'Binean Nexus - Trao doi ve Ingenium Flow',
    back: 'Xem BENOVA',
  },
};
