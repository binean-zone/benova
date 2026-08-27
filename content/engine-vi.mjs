/**
 * Trang giới thiệu Binean Engine — bản tiếng Việt.
 *
 * Engine là engine điều phối đa tác nhân, KHÔNG viết riêng cho ngành nào, và
 * trang này phải đứng độc lập với BENOVA. BENOVA chỉ được nhắc tới đúng hai
 * lần, ở vai trò triển khai đầu tiên.
 *
 * Văn phong: khách quan, không dùng ngôi thứ nhất số ít. "Chúng tôi" chỉ xuất
 * hiện ở khối liên hệ, nơi công ty lên tiếng.
 *
 * Chi tiết đặc tả của project spine không đưa ra đây: repo đó là proprietary.
 */
export default {
  seo: {
    title: 'Binean Engine — Điều phối quy trình cho người, máy và AI | Binean',
    description:
      'Binean Engine (BE) là engine điều phối đa tác nhân: con người, service và AI Agent dùng chung một khái niệm Agent. Kiến trúc, các quyết định thiết kế kèm chi phí, và bảng đánh giá có tính điểm đặt Engine cạnh Temporal, Camunda, Conductor, Step Functions và các framework agent AI.',
    keywords:
      'Binean Engine, brain engine, multi-agent orchestration, workflow orchestration, human in the loop, AI agent orchestration, durable execution, Temporal, Camunda, Zeebe, Conductor, Step Functions, LangGraph, event-driven, Spine',
  },

  brandName: 'Binean',
  headerCta: 'Liên hệ',

  notice: {
    text: 'Binean Engine đang ở giai đoạn đặc tả và hiện thực thử nghiệm, chưa sẵn sàng cho vận hành.',
    linkLabel: 'Liên hệ qua email',
  },

  nav: [
    { href: '#mo-hinh', label: 'Mô hình' },
    { href: '#quyet-dinh', label: 'Thiết kế' },
    { href: '#so-sanh', label: 'Đánh giá' },
    { href: '#phu-hop', label: 'Phù hợp' },
    { href: '#trang-thai', label: 'Trạng thái' },
  ],

  hero: {
    back: 'Trang chủ',
    eyebrow: 'Binean Engine',
    title: 'Điều phối quy trình cho người, máy và AI trong cùng một mô hình',
    lead: 'Binean Engine là engine điều phối đa tác nhân. Một con người, một service và một AI Agent được mô tả bằng cùng một khái niệm, nhận việc theo cùng một cơ chế và trả kết quả theo cùng một hợp đồng. Tài liệu này trình bày mô hình, các quyết định thiết kế kèm chi phí của chúng, và một bảng đánh giá có tính điểm đặt Engine cạnh các engine điều phối đang có trên thị trường.',
  },

  sections: [
    {
      id: 'van-de',
      eyebrow: 'Bài toán',
      title: 'Ba loại tác nhân, một quy trình, không cơ chế chung',
      body: [
        'Hầu hết quy trình đáng được điều phối đều mang cùng một cấu trúc: một số bước hoàn tất trong mili giây bằng phần mềm, một số bước cần con người đọc và ra quyết định, và một số bước ngày càng được giao cho mô hình. Xét duyệt bồi thường, phê duyệt tín dụng, kiểm duyệt nội dung, ứng cứu sự cố hay quy trình tuyển dụng đều thuộc dạng này, với tổng thời gian tính bằng giờ hoặc bằng tháng.',
        'Hai cách hiện thực phổ biến đều chạm giới hạn. Gọi hàm tuần tự thất bại ngay ở bước cần con người, vì một tiến trình không thể duy trì trạng thái chờ trong nhiều ngày. Ghép bằng hàng đợi tin nhắn buộc mỗi bước tự quản lý trạng thái, tự xử lý chạy lại và tự ghi nhận phần việc đã hoàn tất, khiến hình dạng của quy trình biến mất khỏi mã nguồn.',
        'Các engine điều phối ra đời để lấp khoảng trống đó. Điểm khác biệt giữa chúng nằm ở cách mô hình hóa. Phần lớn tách thế giới thành nhiều loại bước — bước gọi service, bước giao cho người, và gần đây là bước gọi agent — mỗi loại có vòng đời, cách giao việc và cách báo kết quả riêng. Chi phí tích hợp giữa các loại đó tăng dần theo thời gian và thường trở thành phần phức tạp nhất của hệ thống.',
        'Binean Engine chọn giả định ngược lại. Việc cần giao, năng lực để thực hiện và kết quả trả về có cùng cấu trúc bất kể ai thực hiện. Khác biệt chỉ nằm ở độ trễ và giao thức gọi, và cả hai thuộc tầng thực thi chứ không thuộc mô hình quy trình.',
      ],
    },
    {
      id: 'brain',
      eyebrow: 'Kiến trúc',
      title: 'Brain Engine: bốn vai trò tách bạch',
      lead: 'Ký hiệu BE mang hai nghĩa — Binean Engine và Brain Engine — và nghĩa thứ hai mô tả đúng cách hệ thống phân vai.',
      body: [
        'Hệ thần kinh trung ương không mô tả cách bàn tay cầm nắm. Nhiệm vụ của nó là xác định vị trí hiện tại trong chuỗi hành động, quyết định bước kế tiếp, phát tín hiệu và tiếp nhận phản hồi. Engine phân vai theo đúng nguyên tắc đó.',
      ],
      glossary: [
        {
          term: 'Basal — vỏ não',
          desc: 'Thẩm quyền điều hướng duy nhất. Không tác nhân nào tự chuyển quy trình sang bước kế tiếp, nhờ đó trạng thái quy trình luôn có một nguồn sự thật.',
        },
        {
          term: 'Spine — tủy sống',
          desc: 'Mô hình dẫn truyền theo sự kiện: việc được phát đi, kết quả được thu về, thứ tự được bảo toàn. Đây là phần được đặc tả chặt nhất và là nhân của Engine.',
        },
        {
          term: 'Reflex — phản xạ',
          desc: 'Tác nhân dựng sẵn trong lõi, đảm nhận phần cơ học mà mọi quy trình đều cần: rẽ nhánh theo điều kiện, biến đổi dữ liệu giữa các bước, và gọi một quy trình khác như một năng lực.',
        },
        {
          term: 'Agent — cơ quan thực thi',
          desc: 'Bên thực hiện công việc: một con người, một service, hoặc một mô hình. Ở tầng điều phối, cả ba tuân theo cùng một hợp đồng.',
        },
      ],
      after: [
        'Cách phân vai này đồng thời xác định phạm vi Engine **không** đảm nhận. Cách một service truy cập cơ sở dữ liệu, cách một mô hình được gọi, hay cách một người đăng nhập vào biểu mẫu đều thuộc tầng thực thi và nằm ngoài mô hình.',
      ],
    },
    {
      id: 'mo-hinh',
      eyebrow: 'Mô hình',
      title: 'Năm danh từ và một thẩm quyền duy nhất',
      lead: 'Engine giữ số khái niệm ở mức tối thiểu. Toàn bộ mô hình quy về năm danh từ.',
      glossary: [
        {
          term: 'Flow',
          desc: 'Định nghĩa quy trình. Bất biến, mang định danh chính xác kèm số phiên bản; cập nhật quy trình tạo ra một Flow mới thay vì sửa Flow cũ.',
        },
        {
          term: 'Process',
          desc: 'Một lần chạy của một Flow, mang theo trạng thái nghiệp vụ riêng dưới dạng dữ liệu JSON.',
        },
        {
          term: 'Task',
          desc: 'Một đơn vị công việc trong một Process. Dữ liệu đầu vào được kiểm tra trước khi giao, kết quả trả về qua một Outcome độc lập.',
        },
        {
          term: 'Skill',
          desc: 'Năng lực mà một Task đòi hỏi, mô tả bằng schema đầu vào và đầu ra. Một Flow cũng có thể đóng vai một Skill, nhờ đó quy trình lồng được vào nhau.',
        },
        {
          term: 'Agent',
          desc: 'Bên thực thi Task. Engine chỉ định nghĩa một khái niệm Agent và không phân loại nó; đây là quyết định thiết kế, được trình bày ở phần dưới.',
        },
      ],
      after: [
        'Việc điều phối do **Basal** đảm nhận. Đây không phải bộ định tuyến thụ động: Basal chủ động nhận một lô sự kiện, xác định bước kế tiếp cho từng Process, rồi ghi toàn bộ kết quả xuống tầng lưu trữ như một đơn vị nguyên tử. Tại mỗi thời điểm, một Process chỉ chịu thẩm quyền của một Basal.',
        'Vì Skill được mô tả bằng schema thay vì bằng loại tác nhân, một bước có thể đổi bên thực thi mà định nghĩa quy trình giữ nguyên. Công việc hôm nay do chuyên viên xử lý thủ công, sáu tháng sau chuyển cho một mô hình, một năm sau được một service đảm nhận — cả ba giai đoạn vẫn là cùng một Task đòi hỏi cùng một Skill.',
      ],
    },
    {
      id: 'quyet-dinh',
      eyebrow: 'Quyết định thiết kế',
      title: 'Bốn điểm Engine đi khác số đông',
      lead: 'Bốn quyết định dưới đây định hình toàn bộ mô hình. Mỗi quyết định đều có chi phí đi kèm, ghi ngay bên dưới.',
      decisions: [
        {
          title: 'Đặc tả là sản phẩm, không phải tài liệu đi kèm',
          desc: 'Đặc tả được viết trước, hiện thực đến sau. Bộ conformance test tồn tại để chứng minh đặc tả đúng, không phải để chứng minh mã nguồn chạy. Hệ quả là hành vi được định nghĩa độc lập với ngôn ngữ, và một bản hiện thực thứ hai có thể được kiểm chứng là tương đương.',
          cost: 'Chi phí: tốc độ ra tính năng. Phần lớn engine trên thị trường phát hành nhanh hơn đáng kể vì không phải chốt đặc tả trước.',
        },
        {
          title: 'Một khái niệm Agent, không phân loại người, máy hay AI',
          desc: 'Engine không định nghĩa "user task", "service task" và "agent step" như ba loại riêng biệt. Chỉ có Task và một tham chiếu tới Agent. Con người, service và mô hình đều là Agent; việc diễn giải tham chiếu đó thành năng lực thực thi cụ thể thuộc tầng runtime. Đây là khác biệt lớn nhất so với thị trường và cũng là điểm dễ bị phản đối nhất.',
          cost: 'Chi phí: những thành phần thường đi kèm khái niệm "human task" ở nơi khác — biểu mẫu, hàng đợi công việc, phân quyền, ủy quyền — không có sẵn và phải được dựng ở tầng trên.',
        },
        {
          title: 'Lõi không sở hữu tầng lưu trữ',
          desc: 'Đọc sự kiện, ghi kết quả, giành Task và áp kết quả đều là các ranh giới thay thế được. Lõi định nghĩa ngữ nghĩa; việc chạy trên Postgres, Kafka hay một hàng đợi có sẵn trong tổ chức là quyết định của bên triển khai. Với tổ chức đã có hạ tầng riêng và ràng buộc về nơi dữ liệu được phép lưu, đây là điều kiện tiên quyết.',
          cost: 'Chi phí: không có đường cài đặt một bước là chạy. Các engine đóng gói sẵn tầng lưu trữ khởi động nhanh hơn nhiều.',
        },
        {
          title: 'Phiên bản quy trình là khái niệm hạng nhất',
          desc: 'Mỗi Flow mang định danh chính xác kèm số phiên bản, và mỗi Process gắn cố định vào phiên bản nó khởi chạy. Một Process đang chạy không đổi hành vi giữa chừng vì định nghĩa quy trình vừa được cập nhật. Với quy trình sống hàng tháng tới hàng năm — một hồ sơ vay, một hợp đồng, một hồ sơ điều tra — đây là ràng buộc bắt buộc.',
          cost: 'Chi phí: không có cơ chế vá nóng một Process đang chạy sai. Việc khắc phục đi qua cơ chế phục hồi, không qua việc sửa định nghĩa.',
        },
      ],
    },
    {
      id: 'ung-dung',
      eyebrow: 'Phạm vi ứng dụng',
      title: 'Những bài toán Engine nhắm tới',
      body: [
        'Engine không gắn với một nghiệp vụ cụ thể. Điều kiện phù hợp nằm ở cấu trúc bài toán chứ không ở lĩnh vực: quy trình kéo dài, nhiều loại tác nhân cùng tham gia, và toàn bộ diễn tiến phải để lại dấu vết kiểm toán được.',
      ],
      glossary: [
        {
          term: 'Quy trình nghiệp vụ có phê duyệt',
          desc: 'Bồi thường, tín dụng, mua sắm, tuyển dụng. Hệ thống chuẩn bị hồ sơ, con người ra quyết định, hệ thống thực thi kết quả.',
        },
        {
          term: 'Quy trình có AI trong vòng lặp',
          desc: 'Mô hình đề xuất, con người phê duyệt hoặc bác bỏ, và phán quyết đó quay lại thành dữ liệu huấn luyện. Yêu cầu một điểm dừng chờ người mà không giữ tiến trình sống suốt thời gian chờ.',
        },
        {
          term: 'Vận hành và ứng cứu sự cố',
          desc: 'Cảnh báo khởi tạo quy trình, một phần chạy tự động, một phần dừng chờ xác nhận trước khi tác động lên hệ thống đang phục vụ.',
        },
        {
          term: 'Điều phối nhiều agent AI',
          desc: 'Nhiều agent cùng theo đuổi một mục tiêu, cần một nơi ghi nhận ai đang giữ việc gì, việc nào đã hoàn tất, và ai có thẩm quyền quyết định bước kế tiếp.',
        },
      ],
      after: [
        'Danh sách trên là phạm vi thiết kế, không phải danh sách khách hàng. Triển khai đầu tiên là BENOVA, chương trình hiện đại hóa hệ core bảo hiểm của Binean. Bảo hiểm được chọn làm ứng dụng mở đầu vì nó tập trung nhiều ràng buộc khó vào cùng một hệ: quy trình kéo dài nhiều năm, phê duyệt nhiều cấp, yêu cầu kiểm toán chặt, và hạ tầng không thể thay thế trong một lần.',
      ],
    },
  ],

  comparison: {
    id: 'so-sanh',
    eyebrow: 'Đánh giá',
    title: 'Engine đặt cạnh thị trường, chấm theo sáu tiêu chí',
    lead: 'Sáu tiêu chí dưới đây được chọn theo yêu cầu của lớp bài toán vừa nêu và chấm trên thang 0–5. Bốn tiêu chí đầu thuộc về mô hình, hai tiêu chí sau thuộc về mức độ trưởng thành của sản phẩm.',
    max: 5,
    chartTitle: 'Engine, Temporal và Camunda 8 trên sáu tiêu chí',
    chartCaption:
      'Chỉ ba sản phẩm được vẽ để hình còn đọc được; toàn bộ sáu sản phẩm có mặt trong bảng điểm bên dưới. Đường nét đứt là Engine, biểu thị điểm theo thiết kế đã đặc tả chứ không phải kết quả đo trên hệ thống sản xuất.',
    provisionalLabel: 'điểm theo thiết kế',
    axes: [
      {
        key: 'agent',
        label: 'Tác nhân hợp nhất',
        group: 'design',
        desc: 'Người, máy và AI được mô tả bằng cùng một khái niệm thay vì ba loại bước khác nhau.',
      },
      {
        key: 'longrun',
        label: 'Quy trình dài hạn',
        group: 'design',
        desc: 'Chạy nhiều ngày, dừng chờ tác nhân bên ngoài, phục hồi sau sự cố mà không mất trạng thái.',
      },
      {
        key: 'infra',
        label: 'Độc lập hạ tầng',
        group: 'design',
        desc: 'Nơi chạy và nơi lưu trữ do tổ chức quyết định, không do engine áp đặt.',
      },
      {
        key: 'version',
        label: 'Phiên bản quy trình',
        group: 'design',
        desc: 'Một lần chạy đang dở giữ nguyên hành vi khi định nghĩa quy trình được cập nhật.',
      },
      {
        key: 'tooling',
        label: 'Công cụ và SDK',
        group: 'ops',
        desc: 'Giao diện vận hành, biểu mẫu, hàng đợi công việc, SDK cho nhiều ngôn ngữ.',
      },
      {
        key: 'maturity',
        label: 'Độ chín sản xuất',
        group: 'ops',
        desc: 'Mức đã được kiểm chứng ở quy mô thật, cùng cộng đồng và nhà cung cấp hỗ trợ.',
      },
    ],
    products: [
      {
        name: 'Binean Engine',
        kind: 'Điều phối đa tác nhân',
        scores: [5, 4, 5, 5, 1, 1],
        plot: true,
        provisional: true,
        note: 'Bốn tiêu chí đầu là lý do Engine tồn tại; hai tiêu chí sau là khoảng cách còn phải rút ngắn.',
      },
      {
        name: 'Temporal',
        kind: 'Durable execution',
        scores: [2, 5, 3, 2, 5, 5],
        plot: true,
        note: 'Lựa chọn mặc định hợp lý nếu cần một engine điều phối ngay hôm nay; đổi phiên bản quy trình là điểm yếu được ghi nhận rộng rãi.',
      },
      {
        name: 'Camunda 8 / Zeebe',
        kind: 'BPMN, hướng mô hình',
        scores: [3, 5, 3, 4, 5, 5],
        plot: true,
        note: 'Đối chiếu gần nhất khi quy trình có con người tham gia, nhưng phân biệt rõ bước giao cho người với bước gọi service.',
      },
      {
        name: 'Netflix Conductor / Orkes',
        kind: 'Điều phối microservice',
        scores: [2, 4, 3, 4, 4, 5],
        note: 'Cùng nguyên tắc quy trình là dữ liệu, nhưng tối ưu cho việc xâu chuỗi dịch vụ hơn là cho tác nhân hỗn hợp.',
      },
      {
        name: 'AWS Step Functions',
        kind: 'Máy trạng thái phi máy chủ',
        scores: [2, 4, 1, 3, 4, 5],
        note: 'Chi phí vận hành gần bằng không và tích hợp sâu trong AWS; điểm độc lập hạ tầng thấp là hệ quả trực tiếp.',
      },
      {
        name: 'LangGraph, CrewAI, AutoGen',
        kind: 'Framework agent AI',
        scores: [2, 2, 3, 1, 4, 4],
        note: 'Dựng vòng lặp agent rất nhanh trong phạm vi một lần chạy chương trình; chờ người phê duyệt nhiều ngày nằm ngoài mô hình gốc.',
      },
    ],
    table: {
      product: 'Sản phẩm',
      design: 'Mô hình',
      designSub: '4 tiêu chí đầu',
      ops: 'Vận hành',
      opsSub: '2 tiêu chí sau',
      total: 'Tổng',
      caption: 'Điểm từng tiêu chí trên thang 0–5, cùng tổng theo hai nhóm.',
    },
    verdict: [
      'Cộng đơn giản, Camunda 8 dẫn đầu và Engine đứng thứ tư trong sáu. Con số phản ánh đúng hiện trạng: Engine đạt 19 trên 20 ở nhóm tiêu chí mô hình và 2 trên 10 ở nhóm tiêu chí vận hành.',
      'Cách đọc bảng này quan trọng hơn thứ hạng. Với tổ chức cần triển khai trong quý này, hai tiêu chí vận hành mới là yếu tố quyết định, và lựa chọn hợp lý nằm ở nhóm sản phẩm đã trưởng thành. Engine chỉ đáng cân nhắc khi bốn tiêu chí đầu là ràng buộc không thể thỏa hiệp và tổ chức chấp nhận tham gia từ giai đoạn thiết kế.',
    ],
    method: {
      title: 'Về cách chấm điểm',
      body: 'Thang điểm do Binean tự chấm, dựa trên tài liệu công khai của từng sản phẩm và giả định sáu tiêu chí có trọng số bằng nhau — một giả định không đúng với bất kỳ tổ chức cụ thể nào. Trọng số khác sẽ cho thứ hạng khác. Airflow, Dagster và Prefect không có trong bảng vì chúng giải bài toán khác: điều phối pipeline dữ liệu theo lịch. Đưa chúng vào cùng thang điểm sẽ cho kết luận sai cho cả hai phía.',
    },
  },

  fit: {
    id: 'phu-hop',
    eyebrow: 'Điều kiện áp dụng',
    title: 'Khi nào phù hợp, và khi nào không',
    good: {
      title: 'Engine đáng cân nhắc khi',
      items: [
        'Quy trình trộn người, máy và AI, và ba loại tác nhân đó không nên là ba cơ chế khác nhau.',
        'Quy trình kéo dài từ hàng giờ tới hàng tháng, có thời gian chờ, có phê duyệt và có phần việc phải chạy lại.',
        'Tổ chức bị ràng buộc phải chạy trên hạ tầng sẵn có, hoặc phải kiểm toán được nơi dữ liệu lưu trữ.',
        'Một lần chạy đã khởi động bắt buộc phải giữ nguyên hành vi khi quy trình được cập nhật.',
        'Một đặc tả đọc được có giá trị cao hơn một sản phẩm nhiều tính năng.',
      ],
    },
    bad: {
      title: 'Engine không phù hợp khi',
      items: [
        'Yêu cầu đưa vào sản xuất trong quý này. Engine chưa sẵn sàng cho mục tiêu đó.',
        'Quy trình chỉ gồm máy gọi máy và kết thúc trong vài giây. Hàng đợi hoặc lời gọi trực tiếp là đủ; thêm engine chỉ thêm một tầng.',
        'Cần biểu mẫu, hàng đợi công việc và giao diện quản trị có sẵn ngay. Camunda đáp ứng được, Engine thì chưa.',
        'Đội ngũ phát triển bằng Java, Go hoặc Python và cần SDK cho ngôn ngữ đó. Hiện chỉ có một bản hiện thực bằng Rust.',
        'Cần một cộng đồng, một hệ sinh thái plugin, hoặc một nhà cung cấp có cam kết hỗ trợ ngoài giờ.',
      ],
    },
  },

  status: {
    id: 'trang-thai',
    eyebrow: 'Trạng thái',
    title: 'Mức độ hoàn thiện hiện tại',
    body: [
      'Đặc tả V1 của Spine đã chốt phần lớn ngữ nghĩa cốt lõi, và có một bản hiện thực bằng Rust chạy được từ đầu đến cuối kèm bộ test đi qua. Tuy vậy V1 **chưa đạt mức sẵn sàng cho hiện thực**: một số phần của đặc tả vẫn đang được hiệu chỉnh vì quá trình hiện thực tiếp tục phát hiện mâu thuẫn.',
      'Nói ngắn gọn, Engine ở thời điểm này là một thiết kế đã được cân nhắc kỹ cùng một bản chạy thử để kiểm chứng thiết kế đó, chưa phải một sản phẩm để đưa vào vận hành. Đây cũng là lý do hai tiêu chí vận hành trong bảng đánh giá chỉ đạt 1 trên 5.',
      'Với tổ chức đang vận hành những quy trình thuộc lớp bài toán nêu trên, trao đổi có giá trị nhất ở giai đoạn này là trao đổi về thiết kế: những điểm mô hình còn sai, và những tình huống thực tế mà mô hình chưa lường tới.',
    ],
  },

  cta: {
    title: 'Trao đổi về thiết kế',
    lead: 'Chúng tôi muốn nghe từ những người trực tiếp vận hành các quy trình thuộc lớp bài toán này, đặc biệt là những điểm mà mô hình được cho là sẽ không đứng vững.',
    label: 'Đặt lịch trao đổi 30 phút',
    subject: 'Binean Engine - Trao doi ve thiet ke',
    back: 'Xem BENOVA — triển khai đầu tiên',
  },
};
