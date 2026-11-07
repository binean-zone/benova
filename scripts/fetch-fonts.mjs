/**
 * Tải font về tự host, chạy tay khi cần đổi font:
 *
 *   node scripts/fetch-fonts.mjs
 *
 * Kết quả là assets/fonts/*.woff2 và assets/css/fonts.css, cả hai đều commit
 * vào repo. Build thường ngày không gọi script này và không cần mạng.
 *
 * Chỉ giữ ba subset trang thực sự dùng: latin, latin-ext và vietnamese. Bỏ
 * cyrillic, greek và các subset khác — chúng chỉ làm nặng thư mục chứ trình
 * duyệt không bao giờ tải tới.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
/* Chỉ ba subset này được dùng. Thứ tự ở đây là thứ tự ghi ra CSS, và nó quan
   trọng: khi hai subset cùng phủ một ký tự thì khối khai báo SAU thắng. Chữ
   ă, đ, ơ, ư nằm trong cả latin-ext lẫn vietnamese, nên phải để vietnamese
   cuối cùng — nếu không trang tiếng Việt sẽ tải latin-ext 83 KB thay cho
   vietnamese 10 KB. Google trả về theo thứ tự ngược lại, nên phải sắp lại. */
const KEEP = ['latin-ext', 'latin', 'vietnamese'];

// User-agent của trình duyệt hiện đại thì Google mới trả về woff2.
const UA =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

/* Chỉ tự host Inter. Font mono từng được tải về nhưng đã bỏ: nó chỉ hiện ở
   bốn số thứ tự và năm badge chữ cái mỗi trang, mà tốn 31 KB — gần 30% cân
   nặng trang. Mono hệ thống trông gần như y hệt ở cỡ chữ đó. */
const FAMILIES = [{ name: 'Inter', query: 'Inter:wght@400..800', slug: 'inter' }];

const fetchText = async (url) => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
};

mkdirSync(join(root, 'assets', 'fonts'), { recursive: true });

let css = `/* Sinh bởi scripts/fetch-fonts.mjs — đừng sửa tay. */\n`;
let total = 0;

for (const family of FAMILIES) {
  const source = await fetchText(
    `https://fonts.googleapis.com/css2?family=${family.query}&display=swap`
  );

  // Mỗi khối @font-face trong CSS của Google đứng ngay sau một comment tên subset.
  const blocks = new Map(
    source
      .split('/* ')
      .slice(1)
      .map((block) => [block.slice(0, block.indexOf(' */')), block])
  );

  for (const subset of KEEP) {
    const block = blocks.get(subset);
    if (!block) throw new Error(`${family.name} không có subset ${subset}`);

    const url = block.match(/url\((https:[^)]+\.woff2)\)/)?.[1];
    const range = block.match(/unicode-range:\s*([^;]+);/)?.[1];
    const weight = block.match(/font-weight:\s*([^;]+);/)?.[1];
    if (!url || !range || !weight) throw new Error(`Không đọc được khối ${family.name}/${subset}`);

    const file = `${family.slug}-${subset}.woff2`;
    const bytes = Buffer.from(
      await (await fetch(url, { headers: { 'User-Agent': UA } })).arrayBuffer()
    );
    writeFileSync(join(root, 'assets', 'fonts', file), bytes);
    total += bytes.length;

    css += `
/* ${family.name} — ${subset} */
@font-face {
  font-family: '${family.name}';
  font-style: normal;
  font-weight: ${weight.trim()};
  font-display: swap;
  src: url('../fonts/${file}') format('woff2');
  unicode-range: ${range.trim()};
}
`;
    console.log(`  ${file}  ${(bytes.length / 1024).toFixed(1)} KB`);
  }
}

writeFileSync(join(root, 'assets', 'css', 'fonts.css'), css, 'utf-8');
console.log(`✓ ${(total / 1024).toFixed(1)} KB font, assets/css/fonts.css đã sinh`);
