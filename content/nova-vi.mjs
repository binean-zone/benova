export default {
  seo: {
    title: 'Binean NOVA — Hiện đại hóa hệ thống lõi bảo hiểm',
    description: 'NOVA gồm bốn nhóm giải pháp Nexus, Orbit, Vista và Add-ons; Orbit–Vista là trọng tâm triển khai đầu tiên. Bắt đầu từ một nghiệp vụ bảo hiểm, đánh giá trong phạm vi đã thống nhất.',
    keywords: 'Binean NOVA, Nexus, Orbit, Vista, Add-ons, Aster, Astra, hiện đại hóa hệ thống lõi bảo hiểm',
  },
  brandName: 'Binean NOVA',
  headerCta: 'Đánh giá cùng NOVA',
  notice: {
    text: 'NOVA đang hoàn thiện trọng tâm Orbit–Vista. Mức sẵn sàng của từng nhóm được trình bày ở phần hiện trạng.',
    linkLabel: 'Trao đổi phạm vi',
  },
  nav: [
    { href: '#architecture', label: 'Tổng quan' },
    { href: '#axis', label: 'Trục trung tâm' },
    { href: '#families', label: 'Bốn nhóm' },
    { href: '#status', label: 'Hiện trạng' },
    { href: '#contact', label: 'Liên hệ' },
  ],
  hero: {
    back: 'Về BENOVA',
    eyebrow: 'Mô hình hiện đại hóa · Bốn nhóm giải pháp',
    title: 'Hiện đại hóa hệ thống lõi bảo hiểm.',
    emphasis: 'Từng bước, có kiểm soát.',
    lead: 'NOVA gồm bốn nhóm giải pháp — Nexus, Orbit, Vista và Add-ons. Orbit và Vista tạo thành trục trung tâm và là trọng tâm triển khai đầu tiên: bắt đầu từ một nghiệp vụ bảo hiểm, đánh giá trong phạm vi đã thống nhất rồi quyết định bước tiếp theo.',
    primaryCta: { label: 'Đánh giá một nghiệp vụ bảo hiểm', href: '#contact' },
    secondaryCta: { label: 'Xem bốn nhóm giải pháp', href: '#families' },
    highlights: [
      'Bốn nhóm giải pháp, một mô hình',
      'Orbit–Vista là trục trung tâm',
      'Giữ giá trị nghiệp vụ đã tích lũy',
      'Kiểm soát giao dịch chưa rõ kết quả',
    ],
  },
  architecture: {
    id: 'architecture',
    eyebrow: 'Mô hình tổng quan',
    title: 'Bốn nhóm giải pháp, một trục trung tâm.',
    lead: 'Nexus, Orbit, Vista và Add-ons là bốn nhóm giải pháp của NOVA. Orbit và Vista tạo thành trục trung tâm và trọng tâm triển khai đầu tiên; Nexus hỗ trợ phát triển và vận hành; Add-ons mở rộng mô hình bằng các hướng bổ sung.',
    diagram: {
      label: 'Sơ đồ mô hình NOVA',
      description: 'Sơ đồ bốn nhóm giải pháp NOVA: Nexus hỗ trợ phát triển và vận hành; Orbit kết nối và điều phối năng lực hệ thống hiện hữu, kèm phần mềm trình diễn Aster; Vista mang không gian làm việc thống nhất; Add-ons gồm các hướng bổ sung AIRA, AIRAS và định hướng dài hạn Astra. Orbit và Vista là trục trung tâm.',
      caption: 'Sơ đồ mô tả vai trò của bốn nhóm giải pháp và trục trung tâm Orbit–Vista.',
      axisLabel: 'Trục trung tâm · trọng tâm triển khai đầu tiên',
      families: {
        nexus: {
          eyebrow: 'N · PHÁT TRIỂN VÀ VẬN HÀNH',
          title: 'Nexus',
          lines: ['Build và quản trị dùng chung', 'DevOps, batch, vận hành'],
        },
        orbit: {
          eyebrow: 'O · TRỤC TRUNG TÂM',
          title: 'Orbit',
          lines: ['Kết nối năng lực hiện hữu', 'Điều phối luồng nghiệp vụ'],
          nested: {
            eyebrow: 'TRÌNH DIỄN',
            title: 'Aster',
            lines: ['Phần mềm trình diễn'],
          },
        },
        vista: {
          eyebrow: 'V · TRỤC TRUNG TÂM',
          title: 'Vista',
          lines: ['Một không gian làm việc', 'Menu, biểu mẫu, bảng'],
        },
        addons: {
          eyebrow: 'A · MỞ RỘNG',
          title: 'Add-ons',
          lines: ['AIRA, AIRAS: hướng bổ sung', 'Mở rộng quanh Orbit–Vista'],
          nested: {
            eyebrow: 'ĐỊNH HƯỚNG DÀI HẠN',
            title: 'Astra',
            lines: ['Hệ thống lõi thế hệ mới'],
          },
        },
      },
    },
  },
  axis: {
    id: 'axis',
    eyebrow: 'Trục trung tâm',
    title: 'Orbit–Vista: kết nối, điều phối và làm việc.',
    lead: 'Orbit và Vista tạo thành trục trung tâm: Orbit kết nối và điều phối năng lực nghiệp vụ; Vista đưa các năng lực đó đến người dùng trong một không gian làm việc thống nhất. Đây là trọng tâm triển khai đầu tiên của NOVA.',
    items: [
      {
        icon: 'core',
        title: 'Kết nối năng lực nghiệp vụ hiện có',
        desc: 'Orbit làm việc với chương trình và dữ liệu hiện hữu, mở cách sử dụng hiện đại với ít thay đổi sâu trong lõi.',
      },
      {
        icon: 'routing',
        title: 'Điều phối luồng nghiệp vụ',
        desc: 'Các bước xử lý của một nghiệp vụ được điều phối trong cùng một luồng, có kiểm soát thời gian và tải.',
      },
      {
        icon: 'control',
        title: 'Báo rõ giao dịch chưa rõ kết quả',
        desc: 'Khi kết quả chưa rõ, hệ thống báo để đội vận hành đối soát thay vì tự gửi lại giao dịch.',
      },
      {
        icon: 'layout',
        title: 'Một không gian làm việc nhất quán',
        desc: 'Vista đưa menu, biểu mẫu, bảng dữ liệu và thao tác về cùng một cách dùng cho nhiều nghiệp vụ.',
      },
    ],
  },
  families: {
    id: 'families',
    eyebrow: 'Bốn nhóm giải pháp',
    title: 'Mỗi nhóm một vai trò trong mô hình.',
    lead: 'Bốn nhóm giải pháp cùng thuộc mô hình NOVA; Orbit và Vista là trục trung tâm và trọng tâm triển khai đầu tiên.',
    items: [
      {
        icon: 'code',
        title: 'Nexus — công cụ phát triển và vận hành',
        desc: 'Nhóm công cụ cho đội phát triển và vận hành: build, môi trường, dữ liệu kiểm thử và quản trị dùng chung. Phạm vi định hướng mở rộng sang DevOps, tác vụ batch và vận hành hằng ngày.',
      },
      {
        icon: 'routing',
        title: 'Orbit — kết nối và điều phối',
        desc: 'Kết nối năng lực nghiệp vụ từ hệ thống hiện hữu, điều phối luồng xử lý và mở cách sử dụng hiện đại với ít thay đổi sâu trong lõi. Phần mềm trình diễn Aster đi kèm nhóm Orbit để trải nghiệm luồng mà không cần dùng hệ thống đang vận hành.',
      },
      {
        icon: 'vista',
        title: 'Vista — không gian làm việc thống nhất',
        desc: 'Menu, tab, biểu mẫu, bảng dữ liệu và thao tác trong cùng một cách dùng, giúp người dùng chuyển giữa các nghiệp vụ mà không phải học lại giao diện.',
      },
      {
        icon: 'spark',
        title: 'Add-ons — năng lực bổ sung',
        desc: 'Các hướng bổ sung quanh trục Orbit–Vista, gồm AIRA, AIRAS và định hướng dài hạn Astra — hệ thống lõi bảo hiểm thế hệ mới. Đây là định hướng của mô hình.',
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
      desc: 'NOVA hướng đến cải thiện trải nghiệm và mở rộng dịch vụ, đồng thời tạo cơ sở chuyển đổi từng nghiệp vụ. Mỗi bước cần kiểm chứng tính đúng đắn, hiệu năng và điều kiện vận hành; hệ thống lõi vẫn chịu trách nhiệm về quyền và quy tắc nghiệp vụ.',
      points: [
        'Thay đổi từng lớp độc lập',
        'Kết nối hiện đại, hạn chế thay đổi sâu trong lõi',
        'Ranh giới rõ giữa trình bày, điều phối và nghiệp vụ',
      ],
    },
    status: {
      label: 'HIỆN TRẠNG',
      title: 'Trọng tâm Orbit–Vista đang được hoàn thiện',
      desc: 'Trọng tâm hiện nay là tích hợp Orbit–Vista và đánh giá theo từng nghiệp vụ. Mức sẵn sàng của từng giải pháp được xác nhận theo năng lực và môi trường triển khai.',
      points: [
        'Orbit: nền tảng xử lý chính đã vận hành; tích hợp NOVA đang hoàn thiện.',
        'Vista: khung làm việc đã dùng được; tích hợp đăng nhập và gọi Orbit đang hoàn thiện.',
        'Nexus: công cụ build và quản trị dùng chung; phạm vi DevOps và vận hành đang mở rộng.',
        'Add-ons: các hướng bổ sung và Astra thuộc định hướng dài hạn.',
      ],
    },
    note: 'Giá trị được đánh giá theo từng nghiệp vụ; chi phí, bảo mật và điều kiện vận hành được thống nhất trước khi triển khai.',
  },
  adoption: {
    id: 'adoption',
    eyebrow: 'Phù hợp khi nào',
    title: 'Bắt đầu từ một nghiệp vụ bảo hiểm cụ thể.',
    lead: 'Phù hợp để đánh giá khi doanh nghiệp muốn mở rộng dịch vụ trên hệ thống lõi hiện hữu và chuẩn bị lộ trình chuyển đổi theo từng nghiệp vụ.',
    needs: [
      'Một không gian làm việc thống nhất cho nhiều nghiệp vụ',
      'Kết nối hiện đại, hạn chế thay đổi sâu trong lõi',
      'Kiểm soát giao dịch chưa rõ kết quả để đối soát',
      'Mở rộng từng bước theo kết quả đã đánh giá',
    ],
    fitLabel: 'PHẠM VI ĐÁNH GIÁ',
    fitTitle: 'Chọn một nghiệp vụ bảo hiểm để đi hết luồng.',
    fitDesc: 'Chọn một chức năng từ không gian làm việc đến hệ thống lõi. So sánh với hệ thống hiện tại theo tiêu chí đã thống nhất trước khi quyết định bước tiếp theo.',
    faqLink: { label: 'Câu hỏi triển khai thường gặp', href: '#readiness' },
  },
  readiness: {
    id: 'readiness',
    eyebrow: 'Hỏi đáp triển khai',
    title: 'Những điều cần rõ trước khi triển khai.',
    items: [
      {
        question: 'Có phải thay toàn bộ hệ thống lõi ngay từ đầu không?',
        answer: 'Không bắt buộc. Có thể bắt đầu bằng việc để Orbit làm việc với chương trình và dữ liệu hiện có, sau khi kiểm tra tương thích. Định hướng là mở rộng rồi chuyển đổi từng nghiệp vụ khi đủ điều kiện; mỗi thay đổi cần phạm vi và kiểm thử riêng.',
      },
      {
        question: 'Orbit và Vista khác gì một cổng kết nối hay giao diện thông thường?',
        answer: 'Orbit kết nối và điều phối năng lực nghiệp vụ từ hệ thống hiện hữu, còn Vista đưa các năng lực đó đến người dùng trong một không gian làm việc nhất quán. Mức tương thích của từng hệ thống được đánh giá trước khi áp dụng.',
      },
      {
        question: 'Bắt đầu từ một nghiệp vụ bảo hiểm nghĩa là thế nào?',
        answer: 'Chọn một chức năng cụ thể, thống nhất hiện trạng, tiêu chí nghiệm thu và phạm vi kết nối cần giữ. Kết quả đánh giá là cơ sở quyết định có mở rộng hay cần kiểm chứng thêm.',
      },
      {
        question: 'Điều gì xảy ra khi giao dịch không rõ kết quả?',
        answer: 'Hệ thống dừng và báo rõ, không tự phát lại giao dịch; đội vận hành đối soát theo quy trình. Hết thời gian chờ không có nghĩa giao dịch đã hoàn tác.',
      },
      {
        question: 'Vista có thay giao diện hiện tại ngay không?',
        answer: 'Không bắt buộc. Có thể bắt đầu với một nhóm chức năng và chạy song song với giao diện hiện tại.',
      },
      {
        question: 'Cần gì để triển khai?',
        answer: 'Cần xác định nghiệp vụ bảo hiểm cần đánh giá, đánh giá mức tương thích với hệ thống hiện có, thống nhất mục tiêu và tiêu chí nghiệm thu, cùng điều kiện triển khai cụ thể. Các điều kiện này được xác nhận trước khi bắt đầu.',
      },
      {
        question: 'Nexus nằm ở đâu trong mô hình?',
        answer: 'Nexus là một trong bốn nhóm giải pháp của NOVA. Công cụ hiện có tập trung vào build và quản trị dùng chung; phạm vi DevOps, tác vụ batch và vận hành hằng ngày được xác nhận theo nhu cầu cụ thể.',
      },
      {
        question: 'Aster là gì?',
        answer: 'Aster là phần mềm trình diễn đi kèm nhóm Orbit, giúp trải nghiệm luồng làm việc mà không cần dùng hệ thống đang vận hành. Đánh giá trên hệ thống thật vẫn cần rà soát tương thích và thống nhất phạm vi kiểm thử.',
      },
    ],
  },
  cta: {
    id: 'contact',
    title: 'Xác định phạm vi đánh giá cùng NOVA.',
    lead: 'Chia sẻ một nghiệp vụ bảo hiểm cần cải thiện và các kết nối cần giữ. Cùng thống nhất hiện trạng, tiêu chí nghiệm thu và điều kiện cho bước triển khai tiếp theo.',
    subject: 'Binean NOVA - Danh gia mot nghiep vu bao hiem',
    label: 'Đề xuất đánh giá một nghiệp vụ bảo hiểm',
    back: 'Khám phá BENOVA',
  },
};
