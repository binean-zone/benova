# BENOVA — Landing page

Trang giới thiệu sản phẩm một trang (one-page) cho **BENOVA**, hệ sinh thái hiện đại hóa
core bảo hiểm Ingenium. Trang hoàn toàn tĩnh, không framework runtime, triển khai trên
GitHub Pages.

**Kiến trúc:** `content/site.mjs` (nội dung) → `scripts/build.mjs` (generator) → `index.html`
(HTML tĩnh đã commit) + `assets/` (CSS, JS, ảnh).

HTML được sinh sẵn lúc build chứ không dựng ở trình duyệt, nên crawler đọc được toàn bộ
nội dung, trang tải nhanh và vẫn hiển thị đầy đủ khi tắt JavaScript.

---

## Chạy local

Yêu cầu Node.js ≥ 18. Không có dependency nào cần cài.

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

Toàn bộ chữ trên trang nằm trong **`content/site.mjs`** — mô tả các Agent, lợi ích,
số liệu, menu, thông tin liên hệ, thẻ SEO. Quy trình:

1. Sửa `content/site.mjs`
2. Chạy `npm run build`
3. Commit cả `content/site.mjs` lẫn `index.html` + `sitemap.xml` vừa sinh ra

CI sẽ báo lỗi nếu `index.html` không khớp với kết quả build từ `content/site.mjs`, nên
không có chuyện nội dung và HTML lệch nhau.

Thêm một Agent mới chỉ cần thêm một phần tử vào `ecosystem.agents`; lưới thẻ tự cân bằng
lại. Thêm một mục vào `nav` là menu và scrollspy tự có mục đó.

---

## Cấu trúc thư mục

```
/
├── index.html              # trang đã sinh (commit vào repo, đừng sửa tay)
├── sitemap.xml             # sinh cùng lúc với index.html
├── content/
│   └── site.mjs            # NGUỒN NỘI DUNG DUY NHẤT
├── scripts/
│   ├── build.mjs           # generator: content → HTML
│   └── serve.mjs           # dev server (chỉ dùng thư viện chuẩn Node)
├── assets/
│   ├── css/style.css       # toàn bộ style, dark-first + theme sáng
│   ├── js/main.js          # theme, menu mobile, reveal khi cuộn, scrollspy
│   └── images/             # favicon, sơ đồ Strangler Fig, ảnh Open Graph
├── docs/                   # tài liệu sản phẩm (nguồn tham chiếu, không deploy)
├── CNAME                   # tên miền tùy chỉnh cho GitHub Pages
├── robots.txt
└── .nojekyll               # Pages phục vụ file nguyên trạng, bỏ qua Jekyll
```

---

## Deploy lên GitHub Pages

`.github/workflows/deploy.yml` tự chạy khi push vào `main`:

1. `npm run build` và kiểm tra `index.html` không bị cũ so với `content/site.mjs`
2. Copy phần công khai (`index.html`, `sitemap.xml`, `robots.txt`, `CNAME`, `.nojekyll`,
   `assets/`) vào `_site/` — `docs/`, `tasks/`, `personal/` **không** được publish
3. Upload `_site/` và deploy bằng `actions/deploy-pages`

Cần bật một lần trong repo: **Settings → Pages → Source: GitHub Actions**.

Vì trang là file tĩnh thuần, có thể host ở bất kỳ đâu (Netlify, Vercel, S3, nginx) bằng
cách trỏ document root vào thư mục chứa `index.html`.

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
  JSON-LD `SoftwareApplication` đều sinh từ khối `seo` trong `content/site.mjs`.
- **Font.** Inter + JetBrains Mono từ Google Fonts, luôn có font hệ thống dự phòng nếu
  mạng chặn.

---

## Liên hệ

📧 ingenium.modernization@gmail.com
