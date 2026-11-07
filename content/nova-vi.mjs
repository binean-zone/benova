export default {
  seo: {
    title: 'Binean NOVA — Hiện đại hóa backend theo từng nghiệp vụ',
    description: 'NOVA hướng đến mở rộng dịch vụ và chuyển đổi backend từng bước, kết hợp giao diện, điều phối, kết nối backend và công cụ phát triển. Gói phát hành sớm đang hoàn thiện.',
    keywords: 'Binean NOVA, Nexus, Orbit, Vista, Aster, điều phối yêu cầu, giao diện làm việc, kết nối backend, gói phát hành sớm',
  },
  brandName: 'Binean NOVA',
  headerCta: 'Đánh giá cùng NOVA',
  notice: {
    text: 'NOVA đang hoàn thiện để phát hành sớm. Mức sẵn sàng của từng thành phần được trình bày ở phần hiện trạng.',
    linkLabel: 'Trao đổi phạm vi',
  },
  nav: [
    { href: '#architecture', label: 'Tổng quan' },
    { href: '#flow', label: 'Luồng yêu cầu' },
    { href: '#components', label: 'Thành phần' },
    { href: '#status', label: 'Hiện trạng' },
    { href: '#contact', label: 'Liên hệ' },
  ],
  hero: {
    back: 'Về BENOVA',
    eyebrow: 'Gói phát hành sớm: Nexus · Orbit · Vista · Aster',
    title: 'Hiện đại hóa backend theo từng nghiệp vụ.',
    emphasis: 'Giữ giá trị hiện có. Mở đường cho thay đổi.',
    lead: 'NOVA hướng đến mở rộng dịch vụ trên backend hiện có, rồi chuyển đổi từng năng lực khi đủ điều kiện. Vista phục vụ người dùng, Orbit điều phối, Aster kết nối backend, Nexus hỗ trợ build và vận hành.',
    primaryCta: { label: 'Đánh giá một nghiệp vụ', href: '#contact' },
    secondaryCta: { label: 'Xem mô hình tổng quan', href: '#architecture' },
    highlights: [
      'Giao diện làm việc thống nhất',
      'Cổng kết nối theo từng hệ thống',
      'Khai thác giá trị backend hiện có',
      'Triển khai và đánh giá từng bước',
    ],
  },
  architecture: {
    id: 'architecture',
    eyebrow: 'Mô hình tổng quan',
    title: 'Một đường đi rõ ràng từ người dùng đến backend.',
    lead: 'Orbit tùy biến cách tiếp nhận yêu cầu từ ứng dụng. Aster xử lý kết nối với backend tương thích. Vista và Nexus bổ sung trải nghiệm làm việc và công cụ vận hành trong lộ trình hiện đại hóa từng bước (Strangler Fig).',
    diagram: {
      label: 'Sơ đồ mô hình NOVA',
      description: 'Mô hình gói NOVA đang hoàn thiện: Vista là giao diện làm việc, Orbit điều phối yêu cầu, Aster kết nối backend nghiệp vụ hiện có. Nexus cung cấp công cụ build và vận hành. Vista kết nối Orbit; Echelon là đường điều phối bổ sung cho flow cần nhiều tác nhân, thuộc giai đoạn sau cùng Aira.',
      caption: 'Orbit đảm nhận kết nối phía ứng dụng; Aster đảm nhận kết nối phía backend. Mức tương thích và phạm vi chuyển đổi được kiểm chứng theo từng nghiệp vụ.',
      users: {
        eyebrow: 'NGƯỜI DÙNG VÀ KÊNH',
        title: 'Người dùng nghiệp vụ',
        lines: ['Trình duyệt', 'Ứng dụng khác', 'Hệ thống tích hợp'],
      },
      backend: {
        eyebrow: 'GIÁ TRỊ ĐANG ĐƯỢC KHAI THÁC',
        title: 'Backend nghiệp vụ lõi',
        lines: ['Chương trình hiện có', 'Cơ sở dữ liệu hiện có', 'Quyền và quy tắc nghiệp vụ'],
      },
      tools: {
        eyebrow: 'CÔNG CỤ ĐI KÈM',
        title: 'Nexus — build và vận hành',
        lines: ['Biên dịch backend hiện có', 'Làm mới môi trường, dữ liệu', 'Làm việc trong VS Code'],
      },
      vista: {
        eyebrow: 'GIAO DIỆN LÀM VIỆC',
        title: 'Vista',
        lines: ['Menu, tab và bảng làm việc', 'Biểu mẫu, bảng và thao tác', 'Đăng nhập an toàn qua Gateway'],
      },
      orbit: {
        eyebrow: 'ĐIỀU PHỐI',
        title: 'Orbit',
        lines: ['Nhiều cổng kết nối tùy biến', 'Điều phối nghiệp vụ dùng chung', 'Xác thực, giới hạn tải, thời gian'],
      },
      aster: {
        eyebrow: 'KẾT NỐI BACKEND',
        title: 'Aster',
        lines: ['Kết nối backend theo bản ghi', 'Quản lý phiên và tiến trình', 'Ánh xạ dữ liệu hai chiều'],
      },
      later: {
        label: 'GIAI ĐOẠN SAU · VẪN NẰM TRONG THIẾT KẾ TỔNG QUAN',
        echelon: {
          eyebrow: 'ĐIỀU PHỐI ĐA AGENT',
          title: 'Echelon',
          lines: ['Chia task cho nhiều agent', 'Cân bằng tải, xử lý lỗi từng step'],
        },
        aira: {
          eyebrow: 'HỖ TRỢ AI',
          title: 'Aira',
          lines: ['Đọc, tóm tắt tài liệu', 'Người duyệt quyết định'],
        },
      },
    },
  },
  flow: {
    id: 'flow',
    eyebrow: 'Luồng yêu cầu',
    title: 'Bốn bước của một yêu cầu.',
    lead: 'Một yêu cầu đi qua mô hình như thế nào.',
    items: [
      {
        icon: 'layout',
        title: 'Người dùng thao tác trên Vista',
        desc: 'Chọn chức năng, nhập biểu mẫu hoặc làm việc với bảng; trình duyệt chỉ tương tác với giao diện làm việc.',
      },
      {
        icon: 'shield',
        title: 'Gateway chuyển yêu cầu an toàn',
        desc: 'Lớp kết nối phía máy chủ tiếp nhận thao tác từ Vista và chuyển yêu cầu đến Orbit theo cấu hình bảo mật đã thống nhất.',
      },
      {
        icon: 'routing',
        title: 'Orbit xác thực và chạy kịch bản',
        desc: 'Kiểm tra token, nhận yêu cầu vào hàng đợi có giới hạn và chạy kịch bản nghiệp vụ tương ứng.',
      },
      {
        icon: 'link',
        title: 'Aster làm việc với backend',
        desc: 'Chuyển dữ liệu sang bản ghi backend hiểu, nhận và kiểm tra kết quả, rồi trả về Vista dưới dạng màn hình hoặc dữ liệu.',
      },
    ],
  },
  capabilities: {
    id: 'components',
    eyebrow: 'Thành phần',
    title: 'Mỗi thành phần một trách nhiệm',
    lead: 'Bốn thành phần trong gói, mỗi thành phần giữ một vai trò riêng và có thể thay đổi độc lập.',
    items: [
      {
        icon: 'layout',
        title: 'Vista — không gian làm việc thống nhất',
        desc: 'Menu, tab, bảng và biểu mẫu trong một giao diện làm việc; người dùng chuyển giữa các nghiệp vụ mà không phải học lại cách thao tác.',
      },
      {
        icon: 'shield',
        title: 'Phiên đăng nhập an toàn',
        desc: 'Thiết kế giữ thông tin kết nối ở phía máy chủ, tách biệt với giao diện người dùng. Điều kiện xác thực và quản lý phiên được thống nhất khi tích hợp.',
      },
      {
        icon: 'routing',
        title: 'Orbit — cổng kết nối tùy biến',
        desc: 'Thích ứng với cách gọi và định dạng dữ liệu của ứng dụng hiện có qua các cổng tiếp nhận tùy biến. Các cổng dùng chung lớp điều phối nghiệp vụ, hướng đến hạn chế chỉnh sửa những hệ thống đang kết nối.',
      },
      {
        icon: 'control',
        title: 'Điều phối theo kịch bản',
        desc: 'Kịch bản điều phối các bước nghiệp vụ, có giới hạn thời gian, hủy và kiểm soát tải. Mỗi thay đổi được kiểm thử với backend và phạm vi sử dụng tương ứng.',
      },
      {
        icon: 'link',
        title: 'Aster — kết nối backend nghiệp vụ',
        desc: 'Ánh xạ dữ liệu và quản lý phiên xử lý theo hồ sơ kết nối của backend. Phạm vi tương thích được xác nhận bằng kiểm thử tích hợp trên phiên bản và nghiệp vụ cụ thể.',
      },
      {
        icon: 'code',
        title: 'Nexus — công cụ đi kèm',
        desc: 'Biên dịch backend tăng dần và song song; sao lưu, phục hồi, làm mới dữ liệu; chuyển bản ghi sang môi trường kiểm thử; extension VS Code cơ bản.',
      },
    ],
  },
  value: {
    id: 'status',
    eyebrow: 'Giá trị và hiện trạng',
    title: 'Giá trị hướng tới và mức độ hoàn thiện.',
    business: {
      label: 'GIÁ TRỊ',
      title: 'Đổi mới từng phần, bảo toàn giá trị nghiệp vụ',
      desc: 'NOVA hướng đến cải thiện trải nghiệm và mở rộng dịch vụ, đồng thời tạo cơ sở chuyển đổi từng nghiệp vụ. Mỗi bước cần kiểm chứng tính đúng đắn, hiệu năng và điều kiện vận hành; backend chịu trách nhiệm về quyền và quy tắc nghiệp vụ.',
      points: [
        'Thay đổi từng lớp độc lập',
        'Tùy biến cổng kết nối để giữ cách tích hợp hiện có',
        'Ranh giới rõ giữa trình bày, điều phối và nghiệp vụ',
      ],
    },
    status: {
      label: 'HIỆN TRẠNG',
      title: 'Đang hoàn thiện để phát hành',
      desc: 'NOVA đang hoàn thiện tích hợp giữa các thành phần và chưa phải bản sẵn sàng triển khai đại trà.',
      points: [
        'Orbit: runtime webservice đã chạy; cổng HTTP/JSON chung đang triển khai.',
        'Vista: khung ứng dụng đã dùng được; tích hợp đăng nhập và gọi Orbit đang triển khai.',
        'Aster: adapter đã qua kiểm thử mô phỏng và review độc lập; kiểm chứng trên hệ thống thật theo từng phạm vi.',
      ],
    },
    note: 'Phạm vi đánh giá phụ thuộc vào mức sẵn sàng thực tế. Echelon và Aira là các thành phần ngang hàng thuộc giai đoạn sau.',
  },
  adoption: {
    id: 'adoption',
    eyebrow: 'Phù hợp khi nào',
    title: 'Bắt đầu từ một nghiệp vụ cụ thể.',
    lead: 'Phù hợp để đánh giá khi doanh nghiệp muốn mở rộng dịch vụ trên backend hiện hữu và chuẩn bị lộ trình chuyển đổi theo từng nghiệp vụ.',
    needs: [
      'Giao diện làm việc hiện đại, thống nhất cho nhiều nghiệp vụ',
      'Giữ cách kết nối của ứng dụng hiện có qua cổng tiếp nhận tùy biến',
      'Mở rộng trước, chuyển đổi từng phần theo kết quả kiểm chứng',
      'Kiểm soát phiên, thời gian chờ và tải ở một lớp điều phối',
    ],
    fitLabel: 'PHẠM VI ĐÁNH GIÁ',
    fitTitle: 'Chọn một nghiệp vụ để đi hết luồng.',
    fitDesc: 'Chọn một chức năng từ giao diện đến backend, cùng công cụ build và vận hành cần thiết. So sánh với hệ thống hiện tại theo tiêu chí đã thống nhất trước khi quyết định bước tiếp theo.',
    faqLink: { label: 'Câu hỏi triển khai thường gặp', href: '#readiness' },
  },
  readiness: {
    id: 'readiness',
    eyebrow: 'Hỏi đáp triển khai',
    title: 'Những điều cần rõ trước khi triển khai.',
    items: [
      {
        question: 'Có phải thay toàn bộ backend ngay từ đầu không?',
        answer: 'Có thể bắt đầu bằng việc kết nối chương trình và dữ liệu hiện có qua Aster, sau khi kiểm tra tương thích. Định hướng là mở rộng rồi chuyển đổi từng nghiệp vụ khi đủ điều kiện; mỗi thay đổi cần phạm vi và kiểm thử riêng.',
      },
      {
        question: 'Vista có thay giao diện hiện tại ngay không?',
        answer: 'Không bắt buộc. Có thể bắt đầu với một nhóm chức năng và chạy song song với giao diện hiện tại.',
      },
      {
        question: 'Orbit khác gì một API gateway thông thường?',
        answer: 'Orbit kết hợp cổng kết nối tùy biến với điều phối nghiệp vụ dùng chung, quản lý phiên, thời gian chờ và tải. Có thể giữ cách gọi và định dạng dữ liệu của client hiện có qua cổng phù hợp; mức tương thích được kiểm chứng trước khi áp dụng.',
      },
      {
        question: 'Aster có phải sản phẩm riêng không?',
        answer: 'Aster là thành phần kết nối backend trong gói NOVA. Hồ sơ cấu hình mô tả backend tương thích; việc giữ nguyên Orbit và Vista khi đổi backend phụ thuộc vào contract và kết quả kiểm thử. Phạm vi tích hợp được xác nhận trước khi triển khai.',
      },
      {
        question: 'Demo có chạy trên hệ thống thật của tôi không?',
        answer: 'Demo dùng backend tham chiếu đi kèm để minh họa luồng xử lý, tách khỏi hệ thống đang vận hành của bạn. Đánh giá trên backend thực cần rà soát tương thích, chuẩn bị hồ sơ kết nối và thống nhất phạm vi kiểm thử.',
      },
      {
        question: 'Điều gì xảy ra khi giao dịch không rõ kết quả?',
        answer: 'Hệ thống dừng và báo rõ, không tự phát lại giao dịch; đội vận hành đối soát theo quy trình. Hết thời gian chờ không có nghĩa giao dịch đã hoàn tác.',
      },
      {
        question: 'Cần gì để triển khai?',
        answer: 'Backend nghiệp vụ tương thích, máy chủ cho Orbit và Gateway trong mạng nội bộ, cùng tiêu chí nghiệm thu. Phiên bản, bảo mật và năng lực được thống nhất theo từng triển khai; Orbit không mở trực tiếp ra internet.',
      },
      {
        question: 'Echelon nằm ở đâu trong mô hình?',
        answer: 'Echelon là thành phần ngang hàng, thuộc giai đoạn sau. Vista kết nối Orbit; Echelon bổ sung điều phối khi flow cần chia việc cho nhiều tác nhân, cân bằng tải hoặc xử lý lỗi từng bước.',
      },
    ],
  },
  cta: {
    id: 'contact',
    title: 'Xác định phạm vi đánh giá cùng NOVA.',
    lead: 'Chia sẻ một nghiệp vụ cần cải thiện và các kết nối cần giữ. Cùng thống nhất baseline, tiêu chí nghiệm thu và điều kiện cho bước triển khai tiếp theo.',
    subject: 'Binean NOVA - Danh gia mot nghiep vu',
    label: 'Đề xuất đánh giá một nghiệp vụ',
    back: 'Khám phá BENOVA',
  },
};
