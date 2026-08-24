# BENOVA — Landing page

Trang giới thiệu sản phẩm một trang (one-page) cho **BENOVA**, hệ sinh thái hiện đại hóa
core bảo hiểm Ingenium. Trang hoàn toàn tĩnh, không framework runtime, triển khai trên
GitHub Pages.

**Kiến trúc:** `content/vi.mjs` + `content/en.mjs` (nội dung) → `scripts/build.mjs`
(generator) → `index.html` và `en/index.html` (HTML tĩnh đã commit) + `assets/`.

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
npm run build        # sinh index.html và sitemap.xml
```

Không có Node cũng xem được trang đã build:

```bash
python3 -m http.server 4173     # rồi mở http://localhost:4173
```

---

## Cập nhật nội dung

Chữ tiếng Việt nằm trong **`content/vi.mjs`**, chữ tiếng Anh trong **`content/en.mjs`**.
Những gì không đổi theo ngôn ngữ — email, URL, màu các hành tinh — nằm trong
**`content/shared.mjs`** để hai bản không trôi dạt khỏi nhau. Quy trình:

1. Sửa file ngôn ngữ tương ứng (sửa thẳng trên giao diện web của GitHub cũng được)
2. Push lên `main`

Hết. **GitHub tự build**: workflow chạy `npm run build`, sinh lại `index.html` và
`sitemap.xml` rồi deploy. Bạn không cần cài Node hay chạy lệnh gì ở máy.

Sửa một ngôn ngữ mà quên ngôn ngữ kia thì trang vẫn build được, chỉ là nội dung lệch
nhau — nên khi đổi nội dung, nhớ sửa cả hai file.

`index.html` có commit trong repo chỉ để xem trước và để host tĩnh ở nơi khác; nó luôn
bị workflow ghi đè trước khi deploy, nên bản chạy trên `binean.com` không bao giờ cũ so
với `content/site.mjs`. Nếu bạn sửa nội dung qua giao diện web mà không chạy `npm run build`,
`index.html` trong repo sẽ lệch một nhịp — site vẫn đúng, chỉ là bản xem trước cũ. Chạy
`npm run build` khi nào tiện là khớp lại.

Thêm một Agent mới chỉ cần thêm một phần tử vào `ecosystem.agents`; lưới thẻ tự cân bằng
lại. Thêm một mục vào `nav` là menu và scrollspy tự có mục đó. Thêm một hành tinh vào
`hero.satellites` là hệ mặt trời tự chia lại bán kính, chu kỳ và góc.

---

## Cấu trúc thư mục

```
/
├── index.html              # bản tiếng Việt, đã sinh (đừng sửa tay)
├── en/index.html           # bản tiếng Anh, đã sinh (đừng sửa tay)
├── sitemap.xml             # sinh cùng lúc, liệt kê cả hai ngôn ngữ
├── content/
│   ├── vi.mjs              # chữ tiếng Việt
│   ├── en.mjs              # chữ tiếng Anh
│   └── shared.mjs          # email, URL, màu hành tinh — dùng chung
├── scripts/
│   ├── build.mjs           # generator: content → HTML
│   └── serve.mjs           # dev server (chỉ dùng thư viện chuẩn Node)
├── assets/
│   ├── css/style.css       # toàn bộ style, dark-first + theme sáng
│   ├── js/main.js          # theme, menu mobile, reveal khi cuộn, scrollspy
│   └── images/             # logo, favicon; sơ đồ và ảnh OG sinh theo ngôn ngữ
├── docs/                   # tài liệu sản phẩm (nguồn tham chiếu, không deploy)
├── CNAME                   # binean.com — tên miền tùy chỉnh cho Pages
├── robots.txt
└── .nojekyll               # Pages phục vụ file nguyên trạng, bỏ qua Jekyll
```

---

## Deploy lên GitHub Pages

Domain: **http://binean.com** (file `CNAME`). DNS đã trỏ sẵn:
`binean.com` → A records `185.199.108–111.153`, `www.binean.com` → CNAME
`binean-zone.github.io`. GitHub Pages tự redirect `www` về apex.

`.github/workflows/deploy.yml` chạy khi:

| Sự kiện | Build | Deploy |
|---|---|---|
| Push vào `main` | ✅ | ✅ |
| Pull request | ✅ | ❌ (chỉ kiểm tra) |
| Chạy tay ở tab Actions → *Run workflow* | ✅ | ✅ |

Các bước: `npm run build` → kiểm tra output không rỗng → copy phần công khai
(`index.html`, `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`, `assets/`) vào `_site/`
→ deploy bằng `actions/deploy-pages`. `docs/`, `tasks/`, `personal/` **không** được publish.

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
- **Font.** Inter + JetBrains Mono từ Google Fonts, luôn có font hệ thống dự phòng nếu
  mạng chặn.

---

## Liên hệ

📧 ingenium.modernization@gmail.com
