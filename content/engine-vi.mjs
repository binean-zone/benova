/**
 * Trang giới thiệu Binean Engine — bản tiếng Việt.
 *
 * Engine là engine điều phối đa tác nhân, KHÔNG viết riêng cho ngành nào.
 * BENOVA là ứng dụng đầu tiên của nó, không phải phạm vi của nó. Mọi câu trên
 * trang này phải đọc được bởi người ngoài ngành bảo hiểm.
 *
 * Viết ở mức kiến trúc và quyết định thiết kế. Chi tiết đặc tả của project
 * spine không đưa ra đây: repo đó là proprietary.
 */
export default {
  seo: {
    title: 'Binean Engine — Bộ não điều phối cho người, máy và AI | Binean',
    description:
      'Binean Engine (BE) là engine điều phối đa tác nhân: con người, một service và một AI Agent là cùng một khái niệm Agent. Kiến trúc, các quyết định thiết kế kèm cái giá của chúng, và so sánh thẳng thắn với Temporal, Camunda, Conductor, Step Functions và các framework agent AI.',
    keywords:
      'Binean Engine, brain engine, multi-agent orchestration, workflow orchestration, human in the loop, AI agent orchestration, durable execution, Temporal, Camunda, Zeebe, Conductor, Step Functions, LangGraph, event-driven, Spine',
  },

  hero: {
    back: 'BENOVA',
    eyebrow: 'BE — Binean Engine, cũng là Brain Engine',
    title: 'Bộ não điều phối cho người, máy và AI',
    lead: 'Binean Engine không viết riêng cho ngành nào. Nó là một engine điều phối nơi con người, một service và một AI Agent là cùng một khái niệm. BENOVA — hiện đại hóa core bảo hiểm — là ứng dụng đầu tiên của nó, không phải giới hạn của nó. Trang này nói Engine là gì, nó quyết định khác thị trường ở chỗ nào, và nó chưa làm được gì.',
  },

  sections: [
    {
      id: 'van-de',
      eyebrow: 'Vấn đề',
      title: 'Ba loại tác nhân, một quy trình, không cơ chế nào chung',
      body: [
        'Phần lớn công việc đáng để điều phối đều có cùng một hình dạng: vài bước máy chạy xong trong mili giây, vài bước một con người phải đọc rồi quyết định, và ngày càng nhiều bước giao cho một mô hình. Duyệt bồi thường, phê duyệt tín dụng, kiểm duyệt nội dung, ứng cứu sự cố, quy trình tuyển dụng — bên dưới đều là một chuỗi việc mà người, máy và AI thay phiên nhau làm, kéo dài hàng giờ đến hàng tháng.',
        'Viết chuyện đó bằng code gọi hàm tuần tự thì hỏng ngay ở bước có con người: một tiến trình không thể đứng chờ ba ngày. Viết bằng hàng đợi tin nhắn thì mỗi bước phải tự lo trạng thái, tự lo chạy lại, tự nhớ cái gì đã chạy rồi — và không ai còn nhìn ra hình dạng của quy trình nữa.',
        'Các engine điều phối sinh ra để giải chuyện này. Nhưng gần như tất cả đều giải bằng cách chia thế giới ra: "service task" là một loại, "user task" là loại khác, và giờ agent AI được gắn thêm vào như loại thứ ba. Mỗi loại có vòng đời riêng, cách giao việc riêng, cách báo kết quả riêng. Càng về sau, phần lớn độ phức tạp của hệ nằm đúng ở chỗ nối ba loại đó lại với nhau.',
        'Engine bắt đầu từ giả định ngược lại: cả ba vốn là một. Việc cần giao, năng lực để làm được việc đó, và kết quả trả về — ba thứ ấy có hình dạng giống nhau bất kể ai làm. Cái khác chỉ là độ trễ và cách gọi, mà đó là chuyện của tầng chạy chứ không phải của mô hình.',
      ],
    },
    {
      id: 'brain',
      eyebrow: 'Vì sao là brain engine',
      title: 'BE đọc là Binean Engine, và cũng là Brain Engine',
      lead: 'Cái tên không phải chơi chữ suông. Nó mô tả đúng cách hệ được chia phần.',
      body: [
        'Một bộ não không quan tâm tín hiệu cuối cùng đi tới bàn tay, tới thanh quản hay tới một cơ trơn nào đó. Việc của nó là biết đang ở đâu trong chuỗi hành động, quyết định điều gì xảy ra tiếp theo, rồi phát tín hiệu đi và chờ phản hồi. Engine được dựng theo đúng hình đó.',
      ],
      glossary: [
        {
          term: 'Vỏ não — Basal',
          desc: 'Nơi duy nhất có quyền quyết định bước kế tiếp. Không tác nhân nào tự đi bước tiếp theo mà không qua đây, nên trạng thái quy trình luôn có đúng một nguồn sự thật.',
        },
        {
          term: 'Tủy sống — Spine',
          desc: 'Mô hình dẫn truyền: việc đi ra, kết quả đi về, theo sự kiện và theo thứ tự. Đây là phần được đặc tả kỹ nhất của Engine và là nhân của nó.',
        },
        {
          term: 'Phản xạ — Reflex',
          desc: 'Những việc máy móc không cần lên tới não: rẽ nhánh theo điều kiện, biến đổi dữ liệu giữa hai bước, gọi một quy trình con như một năng lực.',
        },
        {
          term: 'Chi thể — Agent',
          desc: 'Bên thực thi. Một con người, một service, hay một mô hình. Với não thì cả ba là cùng một loại đầu ra: giao việc, chờ, nhận kết quả.',
        },
      ],
      after: [
        'Phần quan trọng của phép ẩn dụ này lại nằm ở chỗ nó **không** nói: bộ não không mô tả chi tiết cách bàn tay cầm nắm. Engine cũng vậy — nó định nghĩa việc gì phải làm và theo thứ tự nào, chứ không định nghĩa cách một service kết nối cơ sở dữ liệu, cách một mô hình được gọi, hay cách một con người đăng nhập vào biểu mẫu.',
      ],
    },
    {
      id: 'mo-hinh',
      eyebrow: 'Mô hình',
      title: 'Năm danh từ, và một thẩm quyền duy nhất',
      lead: 'Engine cố ý giữ số khái niệm ở mức nhỏ nhất có thể. Gần như mọi thứ trong hệ quy về năm danh từ sau.',
      glossary: [
        {
          term: 'Flow',
          desc: 'Định nghĩa quy trình. Bất biến, và có định danh chính xác kèm số phiên bản — sửa quy trình là sinh ra một Flow mới chứ không phải sửa Flow cũ.',
        },
        {
          term: 'Process',
          desc: 'Một lần chạy của một Flow. Mang theo trạng thái nghiệp vụ của riêng nó dưới dạng dữ liệu JSON.',
        },
        {
          term: 'Task',
          desc: 'Một đơn vị công việc trong một Process. Có dữ liệu đầu vào đã được kiểm tra sẵn, và trả về kết quả qua một Outcome độc lập.',
        },
        {
          term: 'Skill',
          desc: 'Năng lực mà một Task đòi hỏi, mô tả bằng schema đầu vào và đầu ra. Một Flow cũng có thể đóng vai một Skill, nên quy trình lồng được vào nhau.',
        },
        {
          term: 'Agent',
          desc: 'Bên thực thi Task. Engine chỉ có đúng một khái niệm Agent và không phân loại nó — xem phần dưới, đây là quyết định thiết kế chứ không phải thiếu sót.',
        },
      ],
      after: [
        'Điều phối tất cả những thứ đó là **Basal**. Nó không phải bộ định tuyến thụ động chờ người ta gọi: Basal chủ động chạy vòng lặp — nhận một lô sự kiện, quyết định điều gì xảy ra tiếp theo cho từng Process, rồi giao toàn bộ kết quả cho tầng lưu trữ như một khối. Mỗi Process tại một thời điểm chỉ có đúng một Basal có thẩm quyền.',
        'Vì Skill được mô tả bằng schema chứ không bằng loại tác nhân, một bước trong quy trình có thể đổi người thực thi mà định nghĩa quy trình không đổi một chữ. Việc hôm nay một chuyên viên làm bằng tay, sáu tháng sau giao cho một mô hình, và một năm sau thành một service — cả ba lần đều là cùng một Task đòi cùng một Skill.',
      ],
    },
    {
      id: 'quyet-dinh',
      eyebrow: 'Quyết định thiết kế',
      title: 'Bốn chỗ Engine đi khác số đông',
      lead: 'Đây là những chỗ đáng bàn. Mỗi quyết định đều có cái giá của nó, và tôi ghi cả hai mặt.',
      decisions: [
        {
          title: 'Đặc tả là sản phẩm, không phải tài liệu đi kèm',
          desc: 'Engine viết đặc tả trước, rồi mới hiện thực; bộ conformance test tồn tại để chứng minh đặc tả đúng chứ không phải để chứng minh code chạy. Hệ quả: hành vi được định nghĩa độc lập với ngôn ngữ, và bản hiện thực thứ hai có thể được kiểm chứng là tương đương.',
          cost: 'Cái giá: chậm. Phần lớn engine trên thị trường ra tính năng nhanh hơn nhiều vì họ không phải chốt đặc tả trước.',
        },
        {
          title: 'Một khái niệm Agent, không phân loại người, máy hay AI',
          desc: 'Engine không có "user task", "service task" và "agent step" như ba loại khác nhau. Chỉ có Task, và một tham chiếu tới Agent. Người, service hay mô hình đều là Agent; diễn giải tham chiếu đó thành năng lực thực thi cụ thể là việc của tầng runtime. Đây là chỗ khác biệt lớn nhất so với thị trường, và cũng là chỗ dễ bị phản đối nhất.',
          cost: 'Đổi lại, những gì đi kèm khái niệm "human task" ở engine khác — biểu mẫu, hàng đợi công việc, phân quyền, uỷ quyền — Engine không cho sẵn. Bạn phải dựng ở tầng trên; trong BENOVA, đó là việc của Vista.',
        },
        {
          title: 'Lõi không sở hữu chỗ lưu trữ',
          desc: 'Việc đọc sự kiện, ghi kết quả, giành Task và áp kết quả đều là các ranh giới thay thế được. Lõi định nghĩa ngữ nghĩa, còn chuyện chạy trên Postgres, Kafka hay một hàng đợi có sẵn trong nhà là quyết định của bạn. Với tổ chức đã có hạ tầng riêng và ràng buộc về nơi dữ liệu được phép nằm, đây là điểm cộng lớn.',
          cost: 'Cái giá: không có đường "cài một cái là chạy". Engine khác đóng gói sẵn cả tầng lưu trữ nên khởi động nhanh hơn nhiều.',
        },
        {
          title: 'Phiên bản quy trình là công dân hạng nhất',
          desc: 'Mỗi Flow có định danh chính xác kèm số phiên bản, và Process gắn cứng vào đúng phiên bản nó khởi chạy. Process đang chạy dở không bao giờ bị đổi hành vi giữa chừng vì ai đó vừa sửa quy trình. Với quy trình sống hàng tháng tới hàng năm — một hồ sơ vay, một hợp đồng, một ca điều tra — đây không phải chi tiết nhỏ.',
          cost: 'Đổi lại, không có cách "vá nóng" một Process đang chạy sai. Muốn sửa thì phải xử lý bằng cơ chế phục hồi, không phải bằng cách sửa định nghĩa.',
        },
      ],
    },
    {
      id: 'ung-dung',
      eyebrow: 'Ứng dụng',
      title: 'BENOVA là ứng dụng đầu tiên của Engine, không phải phạm vi của nó',
      body: [
        'BENOVA dùng Engine để hiện đại hóa core bảo hiểm Ingenium: Engine điều phối, Nexus lo vận hành, Orbit mở core ra thành API, Vista lo phần con người tương tác, AI Agent nói Agent Client Protocol. Đó là một cách lắp — không phải cách duy nhất.',
        'Bảo hiểm được chọn làm ứng dụng đầu tiên vì nó ép Engine phải đúng ở nhiều chỗ khó cùng một lúc: quy trình sống nhiều năm, phê duyệt nhiều cấp, ràng buộc kiểm toán chặt, và chạy trên hạ tầng không thể thay thế một lần. Một engine sống được ở đó thì phần lớn nơi khác nhẹ hơn.',
        'Dưới đây là những nơi có cùng hình dạng bài toán. Nói cho rõ: đây là phạm vi thiết kế, không phải danh sách khách hàng — hiện tại chỉ có BENOVA đang được xây.',
      ],
      glossary: [
        {
          term: 'Quy trình nghiệp vụ có phê duyệt',
          desc: 'Bồi thường, tín dụng, mua sắm, tuyển dụng. Máy chuẩn bị hồ sơ, người quyết định, hệ thống thực thi kết quả — và toàn bộ phải để lại dấu vết kiểm toán được.',
        },
        {
          term: 'Quy trình có AI trong vòng lặp',
          desc: 'Mô hình đề xuất, con người duyệt hoặc bác, và lần duyệt đó quay lại thành dữ liệu. Cần một chỗ dừng chờ người mà không phải giữ tiến trình sống suốt thời gian chờ.',
        },
        {
          term: 'Vận hành và ứng cứu sự cố',
          desc: 'Cảnh báo kích hoạt quy trình, một phần chạy tự động, một phần dừng lại chờ người xác nhận trước khi động vào hệ thống đang chạy thật.',
        },
        {
          term: 'Điều phối nhiều agent AI',
          desc: 'Nhiều agent cùng theo đuổi một mục tiêu. Cần biết ai đang giữ việc gì, việc nào đã xong, và ai có quyền quyết định bước kế tiếp — thay vì để các agent tự gọi nhau.',
        },
      ],
    },
  ],

  comparison: {
    id: 'so-sanh',
    eyebrow: 'So sánh',
    title: 'Engine đứng ở đâu giữa thị trường',
    lead: 'Tôi không làm bảng tick xanh đỏ ở đây. Một bảng như vậy luôn nghiêng về phía người viết nó, và trong trường hợp này nó sẽ nghiêng một cách vô lý: các sản phẩm dưới đây đều đang chạy thật trong sản xuất ở quy mô lớn, còn Engine thì chưa.',
    items: [
      {
        name: 'Temporal',
        kind: 'Durable execution',
        strength:
          'Viết quy trình bằng code thường của ngôn ngữ bạn dùng, engine bảo đảm nó chạy tới cùng kể cả khi máy chết. Bền bỉ, đã được kiểm chứng ở quy mô rất lớn, SDK phủ nhiều ngôn ngữ. Nếu bạn cần một engine điều phối hôm nay, đây là lựa chọn mặc định hợp lý.',
        diff:
          'Temporal bảo đảm tính xác định bằng cách phát lại lịch sử sự kiện, nên code quy trình phải tuân thủ những ràng buộc riêng và việc đổi phiên bản quy trình nổi tiếng là chỗ khó. Engine đi đường khác: quy trình là dữ liệu chứ không phải code, và tính xác định đến từ việc giới hạn hẹp những gì đoạn biến đổi dữ liệu được phép làm.',
      },
      {
        name: 'Camunda 8 / Zeebe',
        kind: 'BPMN, hướng mô hình',
        strength:
          'Chuẩn BPMN, có công cụ vẽ quy trình trực quan mà người nghiệp vụ đọc được, và phần human task rất chín — biểu mẫu, hàng đợi công việc, phân quyền đều có sẵn. Khi quy trình có con người tham gia, đây là đối thủ gần nhất.',
        diff:
          'Camunda phân biệt rõ user task và service task như hai loại khác nhau, còn Engine cố ý không phân biệt. Camunda cho bạn nhiều thứ dùng được ngay; Engine cho bạn một model nhỏ hơn và một lõi không dính vào hạ tầng của bạn. Nếu điều bạn cần là biểu mẫu và hàng đợi công việc cho tháng sau, Camunda đang có, Engine thì chưa.',
      },
      {
        name: 'LangGraph, CrewAI, AutoGen',
        kind: 'Framework agent AI',
        strength:
          'Dựng vòng lặp agent rất nhanh: gọi công cụ, chia vai, nhiều agent nói chuyện với nhau, và có sẵn hệ sinh thái quanh mô hình ngôn ngữ. Nếu bài toán của bạn nằm trọn trong một phiên làm việc kéo dài vài phút, đây là chỗ nên bắt đầu.',
        diff:
          'Nhóm này điều phối trong phạm vi một lần chạy chương trình, còn chờ con người phê duyệt trong ba ngày là thứ phải tự gắn thêm. Engine đặt vấn đề ngược lại: chờ người là trường hợp bình thường, và một agent AI chỉ là một Agent trong số đó — cùng cách giao việc, cùng cách trả kết quả, cùng cách bị timeout như mọi Agent khác.',
      },
      {
        name: 'Netflix Conductor / Orkes',
        kind: 'Điều phối microservice',
        strength:
          'Quy trình mô tả bằng JSON, hợp với việc xâu chuỗi các service lại thành một luồng nghiệp vụ. Nhẹ hơn BPMN, dễ bắt đầu, có bản thương mại kèm giao diện vận hành.',
        diff:
          'Cùng ý tưởng "quy trình là dữ liệu" với Engine. Khác ở chỗ Engine đặt nặng định danh phiên bản bất biến và ranh giới thay thế được, còn Conductor thiên về sự tiện dụng khi vận hành đội microservice.',
      },
      {
        name: 'AWS Step Functions',
        kind: 'Máy trạng thái phi máy chủ',
        strength:
          'Không phải vận hành gì cả, tích hợp sâu với phần còn lại của AWS, trả tiền theo lượt chuyển trạng thái. Nếu hệ thống của bạn vốn đã nằm trọn trong AWS thì đây là con đường ít ma sát nhất.',
        diff:
          'Đổi lại là gắn chặt vào một nhà cung cấp. Với hệ chạy tại chỗ hoặc lai — và với tổ chức bị ràng buộc về nơi dữ liệu được phép nằm — phần lớn giá trị của Step Functions biến mất. Engine đặt việc chạy ở đâu là quyết định của bạn.',
      },
      {
        name: 'Airflow, Dagster, Prefect',
        kind: 'Điều phối dữ liệu — khác loại',
        strength:
          'Rất mạnh cho pipeline dữ liệu chạy theo lịch: phụ thuộc giữa các bước, chạy bù, theo dõi lần chạy.',
        diff:
          'Nêu ra đây để tránh so nhầm. Chúng giải bài toán "chạy đúng thứ tự theo lịch", không phải "một quy trình sống nhiều ngày, có người tham gia và có phê duyệt". Đừng chọn nhóm này cho bài toán của Engine, và ngược lại.',
      },
    ],
  },

  fit: {
    id: 'phu-hop',
    eyebrow: 'Đánh giá thẳng',
    title: 'Khi nào nên, và khi nào không nên',
    good: {
      title: 'Engine đáng cân nhắc nếu',
      items: [
        'Quy trình của bạn trộn người, máy và AI, và bạn không muốn ba loại đó là ba cơ chế khác nhau.',
        'Quy trình sống hàng giờ tới hàng tháng: có chờ đợi, có phê duyệt, có việc phải chạy lại.',
        'Bạn có ràng buộc phải chạy trên hạ tầng sẵn có, hoặc phải kiểm toán được nơi dữ liệu nằm.',
        'Bạn cần chắc chắn một lần chạy đã bắt đầu sẽ không đổi hành vi vì một bản cập nhật quy trình sau đó.',
        'Bạn coi trọng việc có một đặc tả đọc được hơn là có một sản phẩm nhiều tính năng.',
      ],
    },
    bad: {
      title: 'Đừng chọn Engine nếu',
      items: [
        'Bạn cần đưa vào sản xuất trong quý này. Engine chưa sẵn sàng, và nói khác đi là không trung thực.',
        'Quy trình của bạn chỉ có máy gọi máy và kết thúc trong vài giây. Hàng đợi hoặc gọi trực tiếp là đủ; thêm engine chỉ thêm một tầng.',
        'Bạn cần biểu mẫu, hàng đợi công việc và giao diện quản trị có sẵn. Camunda đang có, Engine thì chưa.',
        'Đội của bạn viết Java, Go hay Python và cần SDK cho ngôn ngữ đó. Hiện chỉ có một bản hiện thực bằng Rust.',
        'Bạn cần một cộng đồng, một hệ sinh thái plugin, hoặc một nhà cung cấp có thể gọi lúc hai giờ sáng.',
      ],
    },
  },

  status: {
    id: 'trang-thai',
    eyebrow: 'Trạng thái',
    title: 'Engine đang ở đâu, nói thẳng',
    body: [
      'Đặc tả V1 của Spine đã chốt được phần lớn ngữ nghĩa cốt lõi và có một bản hiện thực bằng Rust chạy được từ đầu đến cuối, kèm bộ test đi qua. Nhưng V1 **chưa đạt mức sẵn sàng cho hiện thực**: vẫn còn những chỗ trong đặc tả đang được sửa vì quá trình hiện thực phát hiện ra mâu thuẫn.',
      'Nói cách khác: Engine hôm nay là một thiết kế đã suy nghĩ kỹ và một bản chạy thử để kiểm chứng thiết kế đó, không phải một sản phẩm để đưa vào vận hành. Trong BENOVA, Nexus mới là thành tố đã chạy trên hệ Ingenium thật; Engine thì chưa.',
      'Nếu bạn đang vận hành một quy trình có người, máy và AI cùng tham gia, và thấy mô hình này đáng bàn, cuộc trao đổi có ích nhất lúc này là về thiết kế — chỗ nào chúng tôi nghĩ sai, chỗ nào bạn đã va phải trong thực tế.',
    ],
  },

  cta: {
    title: 'Bàn về thiết kế',
    lead: 'Chúng tôi muốn nghe từ người thật sự vận hành những quy trình kiểu này, nhất là những chỗ bạn cho rằng mô hình này sẽ vỡ.',
    label: 'Trao đổi 30 phút',
    subject: 'Binean Engine - Trao doi ve thiet ke',
    back: 'Xem BENOVA — ứng dụng đầu tiên của Engine',
  },
};
