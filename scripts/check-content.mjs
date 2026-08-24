/**
 * So cấu trúc hai bản ngôn ngữ.
 *
 *   node scripts/check-content.mjs
 *
 * Vì sao cần: sửa vi.mjs mà quên en.mjs thì trang VẪN build được và VẪN deploy
 * được — chỉ có nội dung là lệch, và không ai thấy cho tới khi khách hàng mở
 * bản tiếng Anh. Script này biến lỗi âm thầm đó thành lỗi build.
 *
 * So hình dạng, không so chữ: cùng tập khoá ở mọi tầng, cùng độ dài mảng, cùng
 * kiểu dữ liệu. Riêng những trường không được dịch (href, id, key, màu, icon)
 * thì so cả giá trị.
 */
import vi from '../content/vi.mjs';
import en from '../content/en.mjs';

/* Trường mang ý nghĩa kỹ thuật, hai ngôn ngữ phải giống hệt nhau. href KHÔNG
   nằm ở đây: anchor được bản địa hoá theo từng trang (#van-de và #problem), và
   tiêu đề email cũng viết theo ngôn ngữ. Tính đúng đắn của href được kiểm bằng
   phép kiểm anchor ở cuối file. */
const IDENTICAL = new Set(['key', 'color', 'ring', 'icon', 'num', 'name']);
/** Trường đương nhiên khác nhau giữa hai ngôn ngữ. */
const SKIP = new Set(['locale', 'seo', 'id', 'nav']);

const problems = [];

const walk = (a, b, path = '') => {
  const at = Array.isArray(a) ? 'array' : a === null ? 'null' : typeof a;
  const bt = Array.isArray(b) ? 'array' : b === null ? 'null' : typeof b;

  if (at !== bt) {
    problems.push(`${path}: vi là ${at}, en là ${bt}`);
    return;
  }

  if (at === 'array') {
    if (a.length !== b.length) {
      problems.push(`${path}: vi có ${a.length} phần tử, en có ${b.length}`);
      return;
    }
    a.forEach((item, i) => walk(item, b[i], `${path}[${i}]`));
    return;
  }

  if (at !== 'object') return;

  const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
  for (const key of keys) {
    if (!path && SKIP.has(key)) continue;
    const next = path ? `${path}.${key}` : key;

    if (!(key in a)) {
      problems.push(`${next}: chỉ có ở en`);
      continue;
    }
    if (!(key in b)) {
      problems.push(`${next}: chỉ có ở vi`);
      continue;
    }
    if (IDENTICAL.has(key) && a[key] !== b[key]) {
      problems.push(`${next}: phải giống nhau nhưng vi="${a[key]}" còn en="${b[key]}"`);
      continue;
    }
    walk(a[key], b[key], next);
  }
};

walk(vi, en);

/* Mọi anchor trong trang — nav, nút hero, link footer — phải trỏ tới một id có
   thật của chính bản ngôn ngữ đó. Đây mới là phép kiểm đúng cho href, thay vì
   đòi hai ngôn ngữ dùng chung một chuỗi. */
const collectAnchors = (value, path, out) => {
  if (Array.isArray(value)) {
    value.forEach((item, i) => collectAnchors(item, `${path}[${i}]`, out));
  } else if (value && typeof value === 'object') {
    for (const [key, child] of Object.entries(value)) {
      if (key === 'href' && typeof child === 'string' && child.startsWith('#')) {
        out.push({ path, anchor: child.slice(1) });
      } else {
        collectAnchors(child, path ? `${path}.${key}` : key, out);
      }
    }
  }
};

for (const [code, content] of [
  ['vi', vi],
  ['en', en],
]) {
  const ids = new Set(
    ['problem', 'ecosystem', 'strategy', 'benefits', 'cta']
      .map((section) => content[section]?.id)
      .filter(Boolean)
  );
  const anchors = [];
  collectAnchors(content, '', anchors);

  for (const { path, anchor } of anchors) {
    if (!ids.has(anchor)) problems.push(`${code}: ${path} trỏ tới #${anchor} không tồn tại`);
  }

  const used = new Set(anchors.map((a) => a.anchor));
  for (const id of ids) {
    if (!used.has(id)) problems.push(`${code}: section #${id} không có link nào trỏ tới`);
  }
}

if (problems.length) {
  console.error('✗ Hai bản ngôn ngữ lệch nhau:\n');
  for (const p of problems) console.error(`  · ${p}`);
  console.error(`\n${problems.length} vấn đề. Sửa content/vi.mjs hoặc content/en.mjs cho khớp.`);
  process.exit(1);
}

console.log('✓ vi và en khớp cấu trúc');
