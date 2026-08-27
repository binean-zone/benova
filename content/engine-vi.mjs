/**
 * Trang giới thiệu Binean Engine — bản tiếng Việt.
 *
 * Viết ở mức kiến trúc và quyết định thiết kế. Chi tiết đặc tả của project
 * spine không đưa ra đây: repo đó là proprietary.
 */
export default {
  seo: {
    title: 'Binean Engine — Bộ khung điều phối cho Agent lai | BENOVA',
    description:
      'Binean Engine là bộ khung điều phối của BENOVA: Flow, Process, Task và Agent, với Basal là thẩm quyền điều hướng duy nhất. Giới thiệu kiến trúc, các quyết định thiết kế, và so sánh thẳng thắn với Temporal, Camunda, Conductor và Step Functions.',
    keywords:
      'Binean Engine, Spine, workflow orchestration, durable execution, Temporal, Camunda, Zeebe, Conductor, Step Functions, event-driven, human in the loop, AI agent orchestration',
  },

  hero: {
    back: 'BENOVA',
    eyebrow: 'Thành tố E của ENOVA',
    title: 'Điều phối là phần khó, không phải phần thừa',
    lead: 'Binean Engine là bộ khung điều phối của BENOVA. Nhân của nó là Spine — một model workflow event-driven được đặc tả trước khi hiện thực. Trang này nói Engine là gì, nó quyết định khác thị trường ở chỗ nào, và nó chưa làm được gì.',
  },

  sections: [
    {
      id: 'van-de',
      eyebrow: 'Vấn đề',
      title: 'Một quy trình bảo hiểm không chạy hết trong một tiến trình',
      body: [
        'Xét một yêu cầu bồi thường. Hệ thống tra cứu hợp đồng, một giám định viên xem hồ sơ, một mô hình chấm điểm rủi ro, một cấp quản lý phê duyệt nếu số tiền vượt ngưỡng, rồi kế toán chi trả. Bốn loại người thực thi khác nhau, chạy trên bốn hạ tầng khác nhau, và tổng thời gian tính bằng ngày chứ không phải mili giây.',
        'Viết chuyện đó bằng code gọi hàm tuần tự thì hỏng ngay ở bước có con người: tiến trình không thể đứng chờ ba ngày. Viết bằng hàng đợi tin nhắn thì mỗi bước phải tự lo trạng thái, tự lo retry, tự lo cái gì đã chạy rồi — và không ai nhìn ra được toàn cảnh quy trình nữa.',
        'Đây chính là bài toán mà các engine điều phối sinh ra để giải. Câu hỏi không phải "có cần engine không", mà là "engine đó mô hình hóa thế giới theo cách nào".',
      ],
    },
    {
      id: 'mo-hinh',
      eyebrow: 'Mô hình',
      title: 'Năm danh từ, và một thẩm quyền duy nhất',
      lead: 'Spine cố ý giữ số khái niệm ở mức nhỏ nhất có thể. Gần như mọi thứ trong hệ quy về năm danh từ sau.',
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
          desc: 'Bên thực thi Task. Spine chỉ có đúng một khái niệm Agent và không phân loại nó — xem phần dưới, đây là quyết định thiết kế chứ không phải thiếu sót.',
        },
      ],
      after: [
        'Điều phối tất cả những thứ đó là **Basal**. Nó không phải bộ định tuyến thụ động chờ người ta gọi: Basal chủ động chạy vòng lặp — nhận một lô sự kiện, quyết định điều gì xảy ra tiếp theo cho từng Process, rồi giao toàn bộ kết quả cho tầng lưu trữ như một khối. Mỗi Process tại một thời điểm chỉ có đúng một Basal có thẩm quyền.',
        'Bên cạnh đó là **Reflex**, một Agent dựng sẵn trong lõi, lo phần việc máy móc mà mọi quy trình đều cần: nhánh rẽ điều kiện, biến đổi dữ liệu giữa các bước, và gọi một Flow khác như một Skill.',
      ],
    },
    {
      id: 'quyet-dinh',
      eyebrow: 'Quyết định thiết kế',
      title: 'Bốn chỗ Spine đi khác số đông',
      lead: 'Đây là những chỗ đáng bàn. Mỗi quyết định đều có cái giá của nó, và tôi ghi cả hai mặt.',
      decisions: [
        {
          title: 'Đặc tả là sản phẩm, không phải tài liệu đi kèm',
          desc: 'Spine viết đặc tả trước, rồi mới hiện thực; bộ conformance test tồn tại để chứng minh đặc tả đúng chứ không phải để chứng minh code chạy. Hệ quả: hành vi được định nghĩa độc lập với ngôn ngữ, và bản hiện thực thứ hai có thể được kiểm chứng là tương đương.',
          cost: 'Cái giá: chậm. Phần lớn engine trên thị trường ra tính năng nhanh hơn nhiều vì họ không phải chốt đặc tả trước.',
        },
        {
          title: 'Một khái niệm Agent, không phân loại người hay máy',
          desc: 'Spine không có "user task" và "service task" như hai loại khác nhau. Chỉ có Task, và một tham chiếu tới Agent. Người, service hay mô hình AI đều là Agent; diễn giải tham chiếu đó thành năng lực thực thi cụ thể là việc của tầng runtime.',
          cost: 'Đổi lại, những gì đi kèm khái niệm "human task" ở engine khác — biểu mẫu, hàng đợi công việc, phân quyền, uỷ quyền — Spine không cho sẵn. Bạn phải tự dựng, hoặc chờ Vista.',
        },
        {
          title: 'Lõi không sở hữu chỗ lưu trữ',
          desc: 'Việc đọc sự kiện, ghi kết quả, giành Task và áp kết quả đều là các ranh giới thay thế được. Lõi định nghĩa ngữ nghĩa, còn chuyện chạy trên Postgres, Kafka hay một hàng đợi có sẵn trong nhà là quyết định của bạn. Với một công ty bảo hiểm đã có hạ tầng và ràng buộc kiểm toán riêng, đây là điểm cộng lớn.',
          cost: 'Cái giá: không có đường "cài một cái là chạy". Engine khác đóng gói sẵn cả tầng lưu trữ nên khởi động nhanh hơn nhiều.',
        },
        {
          title: 'Phiên bản quy trình là công dân hạng nhất',
          desc: 'Mỗi Flow có định danh chính xác kèm số phiên bản, và Process gắn cứng vào đúng phiên bản nó khởi chạy. Process đang chạy dở không bao giờ bị đổi hành vi giữa chừng vì ai đó vừa sửa quy trình. Với hợp đồng bảo hiểm kéo dài nhiều năm, đây không phải chi tiết nhỏ.',
          cost: 'Đổi lại, không có cách "vá nóng" một Process đang chạy sai. Muốn sửa thì phải xử lý bằng cơ chế phục hồi, không phải bằng cách sửa định nghĩa.',
        },
      ],
    },
  ],

  comparison: {
    id: 'so-sanh',
    eyebrow: 'So sánh',
    title: 'Spine đứng ở đâu giữa thị trường',
    lead: 'Tôi không làm bảng tick xanh đỏ ở đây. Một bảng như vậy luôn nghiêng về phía người viết nó, và trong trường hợp này nó sẽ nghiêng một cách vô lý: bốn sản phẩm dưới đây đều đang chạy thật trong sản xuất ở quy mô lớn, còn Spine thì chưa.',
    items: [
      {
        name: 'Temporal',
        kind: 'Durable execution',
        strength:
          'Viết quy trình bằng code thường của ngôn ngữ bạn dùng, engine bảo đảm nó chạy tới cùng kể cả khi máy chết. Bền bỉ, đã được kiểm chứng ở quy mô rất lớn, SDK phủ nhiều ngôn ngữ. Nếu bạn cần một engine điều phối hôm nay, đây là lựa chọn mặc định hợp lý.',
        diff:
          'Temporal bảo đảm tính xác định bằng cách phát lại lịch sử sự kiện, nên code quy trình phải tuân thủ những ràng buộc riêng và việc đổi phiên bản quy trình nổi tiếng là chỗ khó. Spine đi đường khác: quy trình là dữ liệu chứ không phải code, và tính xác định đến từ việc giới hạn hẹp những gì đoạn biến đổi dữ liệu được phép làm.',
      },
      {
        name: 'Camunda 8 / Zeebe',
        kind: 'BPMN, hướng mô hình',
        strength:
          'Chuẩn BPMN, có công cụ vẽ quy trình trực quan mà người nghiệp vụ đọc được, và phần human task rất chín — biểu mẫu, hàng đợi công việc, phân quyền đều có sẵn. Đây là đối thủ gần nhất với bài toán bảo hiểm.',
        diff:
          'Camunda phân biệt rõ user task và service task như hai loại khác nhau, còn Spine cố ý không phân biệt. Camunda cho bạn nhiều thứ dùng được ngay; Spine cho bạn một model nhỏ hơn và một lõi không dính vào hạ tầng của bạn. Nếu điều bạn cần là biểu mẫu và hàng đợi công việc cho ngày mai, Camunda đang có, Spine thì chưa.',
      },
      {
        name: 'Netflix Conductor / Orkes',
        kind: 'Điều phối microservice',
        strength:
          'Quy trình mô tả bằng JSON, hợp với việc xâu chuỗi các service lại thành một luồng nghiệp vụ. Nhẹ hơn BPMN, dễ bắt đầu, có bản thương mại kèm giao diện vận hành.',
        diff:
          'Cùng ý tưởng "quy trình là dữ liệu" với Spine. Khác ở chỗ Spine đặt nặng định danh phiên bản bất biến và ranh giới thay thế được, còn Conductor thiên về sự tiện dụng khi vận hành đội microservice.',
      },
      {
        name: 'AWS Step Functions',
        kind: 'Máy trạng thái phi máy chủ',
        strength:
          'Không phải vận hành gì cả, tích hợp sâu với phần còn lại của AWS, trả tiền theo lượt chuyển trạng thái. Nếu hệ thống của bạn vốn đã nằm trọn trong AWS thì đây là con đường ít ma sát nhất.',
        diff:
          'Đổi lại là gắn chặt vào một nhà cung cấp. Với một core bảo hiểm chạy tại chỗ hoặc lai, phần lớn giá trị của Step Functions biến mất. Spine đặt việc chạy ở đâu là quyết định của bạn.',
      },
      {
        name: 'Airflow, Dagster, Prefect',
        kind: 'Điều phối dữ liệu — khác loại',
        strength:
          'Rất mạnh cho pipeline dữ liệu chạy theo lịch: phụ thuộc giữa các bước, chạy bù, theo dõi lần chạy.',
        diff:
          'Nêu ra đây để tránh so nhầm. Chúng giải bài toán "chạy đúng thứ tự theo lịch", không phải "một quy trình nghiệp vụ sống nhiều ngày, có người tham gia, có phê duyệt". Đừng chọn nhóm này cho bài toán của Spine, và ngược lại.',
      },
    ],
  },

  fit: {
    id: 'phu-hop',
    eyebrow: 'Đánh giá thẳng',
    title: 'Khi nào nên, và khi nào không nên',
    good: {
      title: 'Spine đáng cân nhắc nếu',
      items: [
        'Quy trình của bạn trộn người, máy và AI, và bạn không muốn ba loại đó là ba cơ chế khác nhau.',
        'Bạn có ràng buộc phải chạy trên hạ tầng sẵn có, hoặc phải kiểm toán được nơi dữ liệu nằm.',
        'Quy trình sống nhiều năm và bạn cần chắc chắn một hồ sơ mở năm nay không đổi hành vi vì bản cập nhật năm sau.',
        'Bạn coi trọng việc có một đặc tả đọc được hơn là có một sản phẩm nhiều tính năng.',
      ],
    },
    bad: {
      title: 'Đừng chọn Spine nếu',
      items: [
        'Bạn cần đưa vào sản xuất trong quý này. Spine chưa sẵn sàng, và nói khác đi là không trung thực.',
        'Bạn cần biểu mẫu, hàng đợi công việc và giao diện quản trị có sẵn. Camunda đang có, Spine thì chưa.',
        'Đội của bạn viết Java, Go hay Python và cần SDK cho ngôn ngữ đó. Hiện chỉ có một bản hiện thực bằng Rust.',
        'Bạn cần một cộng đồng, một hệ sinh thái plugin, hoặc một nhà cung cấp có thể gọi lúc hai giờ sáng.',
      ],
    },
  },

  status: {
    id: 'trang-thai',
    eyebrow: 'Trạng thái',
    title: 'Spine đang ở đâu, nói thẳng',
    body: [
      'Đặc tả V1 đã chốt được phần lớn ngữ nghĩa cốt lõi và có một bản hiện thực bằng Rust chạy được từ đầu đến cuối, kèm bộ test đi qua. Nhưng V1 **chưa đạt mức sẵn sàng cho hiện thực**: vẫn còn những chỗ trong đặc tả đang được sửa vì quá trình hiện thực phát hiện ra mâu thuẫn.',
      'Nói cách khác: Spine hôm nay là một thiết kế đã suy nghĩ kỹ và một bản chạy thử để kiểm chứng thiết kế đó, không phải một sản phẩm để đưa vào vận hành. Nexus là thành tố duy nhất của BENOVA đã chạy trên hệ Ingenium thật.',
      'Nếu bạn đang vận hành core bảo hiểm và thấy mô hình này đáng bàn, cuộc trao đổi có ích nhất lúc này là về thiết kế — chỗ nào chúng tôi nghĩ sai, chỗ nào bạn đã va phải trong thực tế.',
    ],
  },

  cta: {
    title: 'Bàn về thiết kế',
    lead: 'Chúng tôi muốn nghe từ người thật sự vận hành core bảo hiểm, nhất là những chỗ bạn cho rằng mô hình này sẽ vỡ.',
    label: 'Trao đổi 30 phút',
    subject: 'Binean Engine - Trao doi ve thiet ke',
    back: 'Xem toàn bộ hệ sinh thái BENOVA',
  },
};
