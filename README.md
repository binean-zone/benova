# BENOVA — Landing page

Site giới thiệu **BENOVA** và gói phát hành sớm **NOVA** (Orbit · Vista · Aster),
hướng đến hiện đại hóa backend từng bước theo Strangler Fig. Nexus, Echelon và Aira thuộc giai đoạn sau.
Trang hoàn toàn tĩnh, không framework runtime, triển khai trên GitHub Pages.

Tài liệu nội bộ được lưu riêng ngoài repository công khai.
Trang EVA chưa phát hành: giữ nguồn nội dung và renderer, không sinh trang hoặc đưa vào gói deploy.

**Kiến trúc:** `content/vi.mjs` + `content/en.mjs` và nội dung các trang con →
`scripts/build.mjs` (generator) → HTML tĩnh đã commit + `assets/`.

Trang có hai ngôn ngữ: tiếng Việt ở gốc, tiếng Anh ở `/en/`. Nút VI/EN nằm trên header.

HTML được sinh sẵn lúc build chứ không dựng ở trình duyệt, nên crawler đọc được toàn bộ
nội dung, trang tải nhanh và vẫn hiển thị đầy đủ khi tắt JavaScript.

---

## Chạy local

Không bắt buộc — GitHub tự build khi bạn push. Chỉ cần khi muốn xem trước ở máy.
Yêu cầu Node.js ≥ 18, không có dependency nào cần cài.

```bash
npm run dev          # http://localhost:4173, tự build lại mỗi lần tải trang
```

Chỉ build mà không chạy server:

```bash
npm run build        # kiểm tra song ngữ rồi sinh trang chủ, các trang sản phẩm và sitemap.xml
npm run check        # chỉ kiểm hai bản ngôn ngữ có khớp cấu trúc không
npm run test:site    # build rồi kiểm 10 trang, liên kết và gói deploy thực tế
npm run fonts        # tải lại font tự host — chỉ chạy khi đổi font, cần mạng
npm run social       # tạo lại hai ảnh chia sẻ từ headline; cần Chrome cục bộ
```

Không có Node cũng xem được trang đã build:

```bash
python3 -m http.server 4173     # rồi mở http://localhost:4173
```

---

## Cập nhật nội dung

### Trang NOVA (mô hình gói phát hành sớm)

Trang `nova/` giới thiệu mô hình gói phát hành sớm. Nội dung ở `content/nova-vi.mjs` và `content/nova-en.mjs`
(khoá `modelPage` trong `vi.mjs`/`en.mjs`); sơ đồ tổng quan inline SVG do
`scripts/model-diagram.mjs` dựng: người dùng → Vista → Orbit → backend hiện có; Aster là backend demo độc lập; Nexus,
Echelon và Aira vẽ nét đứt cùng nhau ở khung "giai đoạn sau". Desktop và mobile có
bố cục riêng, nhãn VI/EN, màu theo theme và mô tả cho trình đọc màn hình.

Quy tắc nội dung:

- **NOVA = Orbit + Vista + Aster.** Chữ "B" giữa hệ sao trang chủ là Binean.
- Không nêu tên sản phẩm, hệ thống hay thương hiệu của bên thứ ba trong nội dung công khai.
  `site.test.mjs` kiểm danh sách từ cấm trên mọi trang, metadata và sơ đồ.
- Mô tả hiện trạng trung thực: Orbit đang phát triển, Vista đang tích hợp, Aster là backend demo
  độc lập, đang lên kế hoạch triển khai; NOVA chưa phải bản triển khai đại trà. Không thêm số liệu,
  khách hàng hay lời chứng thực. Không hứa tự phát lại giao dịch hay vận hành không gián đoạn.
- Strangler Fig là hướng phát triển: mở rộng dịch vụ trên backend hiện có rồi chuyển đổi từng
  năng lực khi đủ điều kiện. Không mô tả cutover tự động hoặc thay backend bằng đổi cấu hình
  như khả năng đã sẵn sàng. Hiệu năng cần được đo trên cùng nghiệp vụ và điều kiện triển khai.
- Không đưa chi tiết triển khai nội bộ (tên crate, wire, bộ đệm) vào nội dung.
- Echelon là thành phần ngang hàng với Orbit, Vista, Aster và Nexus (không phải trung tâm): Vista
  gọi trực tiếp Orbit, Echelon chỉ là một đường khác, dùng khi flow cần chia task giữa nhiều
  agent hoặc nhiều step cần cân bằng tải và xử lý lỗi từng step. Về thời điểm phát hành,
  Echelon và Aira thuộc "giai đoạn sau" (`ecosystem.later`) và vẽ nét đứt ở sơ đồ.

Nexus thuộc "giai đoạn sau" (`ecosystem.later`) cùng Echelon và Aira, không nằm trong gói phát hành sớm. Đó là bộ công cụ
build, môi trường và vận hành đã dùng độc lập trong môi trường thực, dự kiến tích hợp vào NOVA ở giai đoạn sau
(`nexus-*.mjs`). Trang `nexus/` có mục "Vị trí trong lộ trình" (`placement`) nói rõ điều này; không mô tả Nexus
như thành phần của gói phát hành sớm.

### Nguyên tắc nội dung công khai

- Trang chủ dẫn từ bài toán → giá trị → nền tảng → cách đánh giá → liên hệ. Hero tập trung
  ba thành phần NOVA; Echelon và Aira nằm trong mục mở rộng thu gọn ở giai đoạn sau.
- Orbit tùy biến kết nối phía ứng dụng và làm việc trực tiếp với backend hiện có. Aster là backend demo độc lập
  (không phải thành phần kết nối), đang lên kế hoạch triển khai; không mô tả Aster như connector hay như
  thành phần đã kiểm chứng.
  CTA ưu tiên đề xuất đánh giá một nghiệp vụ, với phạm vi tương thích, tiêu chí kiểm chứng
  và lộ trình tiếp theo; điều kiện pilot được thống nhất riêng.
- Viết theo thứ tự: nhu cầu khách hàng → tính năng → lợi ích → cách đánh giá.
- Giữ trạng thái sản phẩm rõ ràng: đã sử dụng, đã kiểm thử, đang kiểm định,
  đang phát triển hoặc đang thiết kế. Không biến định hướng thành tính năng đã có.
- Không công khai sơ đồ triển khai, thành phần nội bộ, giao thức, thuật toán,
  tham số cấu hình hoặc quy trình kỹ thuật đủ chi tiết để tái tạo giải pháp.
  Các sơ đồ công khai chỉ mô tả giá trị và hành trình hợp tác.
- Giữ điều kiện áp dụng và giới hạn có ý nghĩa với khách hàng, tránh lặp lại
  cảnh báo kỹ thuật ở mọi khối nội dung.
- Cập nhật đồng thời VI/EN, metadata SEO, nội dung sơ đồ và ảnh chia sẻ xã hội.
  Hai ảnh PNG Open Graph trong `assets/images/` được tạo bằng `npm run social`; script dùng
  Chrome headless và font cục bộ, không tham gia build/deploy thông thường. Có thể đặt `CHROME_BIN`
  để chọn executable Chrome. Không cần cài dependency Node mới.
- Tài liệu nội bộ trong repo không thuộc website và không đưa vào gói deploy.
- CSS và JavaScript được gắn phiên bản theo nội dung khi build để tránh trình duyệt hoặc CDN
  dùng tài nguyên cũ với HTML mới sau deploy. Test kiểm phiên bản khớp file trong gói công khai.

### Quy trình biên tập

Chữ tiếng Việt nằm trong **`content/vi.mjs`**, chữ tiếng Anh trong **`content/en.mjs`**.
Những gì không đổi theo ngôn ngữ — email, URL, màu các hành tinh — nằm trong
**`content/shared.mjs`** để hai bản không trôi dạt khỏi nhau. Quy trình:

1. Sửa file ngôn ngữ tương ứng (sửa thẳng trên giao diện web của GitHub cũng được)
2. Push lên `main`

Hết. **GitHub tự build**: workflow chạy `npm run build`, sinh lại `index.html` và
`sitemap.xml` rồi deploy. Bạn không cần cài Node hay chạy lệnh gì ở máy.

Kiểm tra build chặn hai bản lệch cấu trúc, nhưng không kiểm chứng được nghĩa bản
dịch. Khi đổi nội dung, cần sửa và rà soát cả hai ngôn ngữ.

`index.html` có commit trong repo chỉ để xem trước và để host tĩnh ở nơi khác; nó luôn
bị workflow ghi đè trước khi deploy, nên bản chạy trên `binean.com` không bao giờ cũ so
với `content/`. Nếu bạn sửa nội dung qua giao diện web mà không chạy `npm run build`,
`index.html` trong repo sẽ lệch một nhịp — site vẫn đúng, chỉ là bản xem trước cũ. Chạy
`npm run build` khi nào tiện là khớp lại.

Thêm một Agent mới chỉ cần thêm một phần tử vào `ecosystem.agents`; lưới thẻ tự cân bằng
lại. Thêm một mục vào `nav` là menu và scrollspy tự có mục đó. Thêm một hành tinh vào
`hero.satellites` là hệ mặt trời tự chia lại bán kính, chu kỳ và góc.

---

## Cấu trúc thư mục

```text
/
├── index.html              # trang chủ tiếng Việt (sinh ra, đừng sửa tay)
├── en/index.html           # trang chủ tiếng Anh (sinh ra)
├── nova/index.html         # trang NOVA (mô hình gói), tiếng Việt (sinh ra)
├── en/nova/index.html      # trang NOVA (mô hình gói), tiếng Anh (sinh ra)
├── echelon/index.html      # trang Binean Echelon, tiếng Việt (sinh ra)
├── en/echelon/index.html   # trang Binean Echelon, tiếng Anh (sinh ra)
├── nexus/index.html        # trang Binean Nexus, tiếng Việt (sinh ra)
├── en/nexus/index.html     # trang Binean Nexus, tiếng Anh (sinh ra)
├── orbit/index.html        # trang Binean Orbit, tiếng Việt (sinh ra)
├── en/orbit/index.html     # trang Binean Orbit, tiếng Anh (sinh ra)
├── 404.html                # trang lỗi song ngữ (sinh ra)
├── sitemap.xml             # sinh cùng lúc, có hreflang cho cả hai bản
├── content/
│   ├── shared.mjs          # thương hiệu, email, URL, màu hành tinh
│   ├── vi.mjs              # NGUỒN NỘI DUNG trang chủ, tiếng Việt
│   ├── en.mjs              # NGUỒN NỘI DUNG trang chủ, tiếng Anh
│   ├── eva-vi.mjs          # nội dung EVA chưa phát hành, tiếng Việt
│   ├── eva-en.mjs          # nội dung EVA chưa phát hành, tiếng Anh
│   ├── echelon-vi.mjs      # NGUỒN NỘI DUNG trang Echelon, tiếng Việt
│   ├── echelon-en.mjs      # NGUỒN NỘI DUNG trang Echelon, tiếng Anh
│   ├── nexus-vi.mjs        # NGUỒN NỘI DUNG trang Nexus, tiếng Việt
│   ├── nexus-en.mjs        # NGUỒN NỘI DUNG trang Nexus, tiếng Anh
│   ├── orbit-vi.mjs        # NGUỒN NỘI DUNG trang Orbit, tiếng Việt
│   ├── orbit-en.mjs        # NGUỒN NỘI DUNG trang Orbit, tiếng Anh
│   ├── nova-vi.mjs         # NGUỒN NỘI DUNG trang NOVA, tiếng Việt
│   └── nova-en.mjs         # NGUỒN NỘI DUNG trang NOVA, tiếng Anh
├── scripts/
│   ├── build.mjs           # generator: content → HTML + SVG sơ đồ + sitemap
│   ├── model-diagram.mjs   # sơ đồ tổng quan NOVA (inline SVG)
│   ├── check-content.mjs   # chặn hai bản ngôn ngữ trôi dạt khỏi nhau
│   ├── stage-public.mjs    # đóng gói các trang và tài nguyên được phép deploy
│   ├── site.test.mjs       # kiểm trang, liên kết, nội dung và artifact deploy
│   ├── fetch-fonts.mjs     # tải font về tự host (chạy tay)
│   ├── render-social-cards.mjs # tạo ảnh chia sẻ từ nội dung và font cục bộ (chạy tay)
│   └── serve.mjs           # dev server (chỉ dùng thư viện chuẩn Node)
├── assets/
│   ├── css/style.css       # toàn bộ style, dark-first + theme sáng
│   ├── css/fonts.css       # sinh bởi fetch-fonts.mjs
│   ├── fonts/              # Inter tự host, woff2 biến thiên
│   ├── js/main.js          # theme, menu, reveal khi cuộn, scrollspy
│   └── images/             # logo, favicon, sơ đồ, ảnh Open Graph
├── CNAME                   # binean.com
├── robots.txt
└── .nojekyll               # Pages phục vụ file nguyên trạng, bỏ qua Jekyll
```

---

## Deploy lên GitHub Pages

Domain: [binean.com](https://binean.com) (file `CNAME`). DNS đã trỏ sẵn:
`binean.com` → A records `185.199.108–111.153`, `www.binean.com` → CNAME
`binean-zone.github.io`. GitHub Pages tự redirect `www` về apex.

`.github/workflows/deploy.yml` chạy khi:

| Sự kiện | Build | Deploy |
| --- | --- | --- |
| Push vào `main` | ✅ | ✅ |
| Pull request | ✅ | ❌ (chỉ kiểm tra) |
| Chạy tay ở tab Actions → *Run workflow* | ✅ | ✅ |

Các bước: `npm run build` → `node --test scripts/site.test.mjs` →
`node scripts/stage-public.mjs` → deploy bằng `actions/deploy-pages`.
Script staging đóng gói trang chủ, trang 404, sitemap, robots, CNAME, `.nojekyll`,
`assets/` và các trang được phát hành dưới `nova/`, `echelon/`, `nexus/`, `orbit/` cùng bản tiếng Anh
vào `_site/`. Cây `en/` được copy theo từng trang cho phép, không copy toàn bộ để tránh lọt trang
chưa phát hành còn sót. Thư mục đích phải rỗng để tránh lẫn file từ lần chạy trước.
`eva/`, `en/eva/`, `docs/`, `content/` và `scripts/` **không** được publish.

Test dựng artifact bằng chính hàm staging dùng khi deploy, kiểm đủ 10 trang,
link nội bộ, anchor, tài nguyên, URL song ngữ và sitemap. Nhờ đó lỗi sinh trang
nhưng quên copy thư mục (như `/nova/`) sẽ làm CI thất bại trước khi deploy.
Khi thêm trang mới, cập nhật generator, danh sách staging và các route trong test.

Cần bật một lần trong repo:

- **Settings → Pages → Source: GitHub Actions**
- **Settings → Pages → Custom domain: `binean.com`**, rồi bật **Enforce HTTPS**
  (đổi custom domain sẽ khiến GitHub cấp lại chứng chỉ, mất vài phút mới bật được HTTPS)
- Nếu muốn *Run workflow* deploy được từ nhánh khác `main`: **Settings → Environments →
  `github-pages` → Deployment branches**, thêm nhánh đó vào danh sách cho phép

---

## Ghi chú kỹ thuật

- **Không dependency.** Không Tailwind, không AOS.js, không bundler. Hiệu ứng reveal
  dùng `IntersectionObserver`, animation quỹ đạo dùng CSS thuần.
- **Theme sáng/tối.** Mặc định tối; theo `prefers-color-scheme` ở lần vào đầu tiên và
  ghi nhớ lựa chọn trong `localStorage`. Một đoạn script inline trong `<head>` đặt theme
  trước khi paint để không nhấp nháy màu.
- **Accessibility.** Có skip link, landmark, `aria-expanded` cho menu, focus ring rõ ràng,
  và tôn trọng `prefers-reduced-motion` (tắt animation, hiện thẳng nội dung).
- **SEO.** Title, meta description, keywords, canonical, Open Graph, Twitter Card và
  JSON-LD sinh từ khối `seo` của từng ngôn ngữ. Hai bản trỏ tới nhau bằng `hreflang`,
  bản tiếng Việt là `x-default`, và sitemap liệt kê cả hai.
- **Hệ mặt trời ở hero** dựng bằng CSS 3D thật (`perspective` + `preserve-3d`). Không
  đặt `overflow`, `filter` hay `opacity` lên bất kỳ lớp nào trong cảnh — ba thuộc tính
  đó ép lớp về phẳng và làm hỏng phép sắp xếp chiều sâu.
- **Không request ra ngoài.** Font Inter tự host trong `assets/fonts/`, sinh bởi
  `npm run fonts`. Trang không gọi tới máy chủ nào ngoài chính nó. Chữ mono dùng font
  hệ thống: webfont mono từng tốn 31 KB cho vỏn vẹn bốn số thứ tự và năm badge chữ cái
  mỗi trang.
- **Cân nặng.** Trang tiếng Việt khoảng 78 KB sau gzip, tiếng Anh khoảng 68 KB. Ảnh
  Open Graph không nằm trong số đó — chỉ crawler mạng xã hội tải nó, trình duyệt thì
  không.
- **Song ngữ.** `content/vi.mjs` và `content/en.mjs`; phần không đổi theo ngôn ngữ nằm ở
  `content/shared.mjs`. `npm run build` chạy `scripts/check-content.mjs` trước, vì hai
  bản lệch nội dung thì trang **vẫn build và vẫn deploy được** — không ai thấy cho tới
  khi khách hàng mở bản tiếng Anh. Script so cấu trúc, độ dài mảng, và kiểm mọi anchor
  có trỏ tới section có thật của chính ngôn ngữ đó.
- **Trang 404.** GitHub Pages trả `404.html` cho mọi đường dẫn sai, kể cả dưới `/en/`,
  nên nó dùng đường dẫn tính từ gốc site và để nội dung song ngữ.

---

## Liên hệ

📧 [binean.enova@gmail.com](mailto:binean.enova@gmail.com)
