/** Render code-based social cards. Requires a local Chrome installation. */
import { execFileSync } from 'node:child_process';
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vi from '../content/vi.mjs';
import en from '../content/en.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const temporary = mkdtempSync(join(tmpdir(), 'benova-social-'));
const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const chrome = process.env.CHROME_BIN || 'google-chrome';
const font = (name) => pathToFileURL(join(root, 'assets', 'fonts', name)).href;

try {
  for (const site of [vi, en]) {
    const code = site.locale.code;
    const description = code === 'vi'
      ? 'Giữ giá trị nghiệp vụ. Mở rộng theo ưu tiên.'
      : 'Preserve business value. Expand around your priorities.';
    const html = `<!DOCTYPE html>
<html lang="${code}">
<meta charset="utf-8">
<title>${escapeHtml(site.seo.title)}</title>
<style>
@font-face {
  font-family: Inter; font-style: normal; font-weight: 100 900;
  src: url('${font('inter-latin.woff2')}') format('woff2');
}
@font-face {
  font-family: Inter; font-style: normal; font-weight: 100 900;
  src: url('${font('inter-vietnamese.woff2')}') format('woff2');
  unicode-range: U+0102-0103,U+0110-0111,U+0128-0129,U+0168-0169,U+01A0-01A1,U+01AF-01B0,U+0300-0301,U+0303-0304,U+0308-0309,U+0323,U+0329,U+1EA0-1EF9,U+20AB;
}
* { box-sizing: border-box; }
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
body {
  padding: 60px 76px; color: #f4f7fc; font-family: Inter, sans-serif;
  background: linear-gradient(120deg, #123146, #09192d);
  display: flex; flex-direction: column;
}
header { color: #64ffda; font-size: 23px; font-weight: 700; letter-spacing: 2px; }
main { flex: 1; padding-top: 58px; }
h1 { margin: 0; font-size: 59px; font-weight: 750; line-height: 1.25; letter-spacing: -1.5px; }
h1 span { display: block; color: #64ffda; margin-top: 12px; }
p { margin: 33px 0 0; font-size: 25px; color: #b4c3d8; }
.status { margin-top: 20px; font-size: 18px; color: #b4c3d8; }
footer { display: flex; justify-content: space-between; font-size: 21px; font-weight: 600; }
footer span:last-child { color: #64ffda; }
</style>
<body>
  <header>${escapeHtml(site.brand.name)}</header>
  <main>
    <h1>${escapeHtml(site.hero.headline[0])}<span>${escapeHtml(site.hero.headline[1])}</span></h1>
    <p>${escapeHtml(description)}</p>
    <p class="status">${code === 'vi' ? 'Gói phát hành sớm · đang hoàn thiện' : 'Early-release package · in development'}</p>
  </main>
  <footer><span>NOVA · Orbit · Vista · Aster</span><span>binean.com</span></footer>
</body>
</html>`;
    const input = join(temporary, `${code}.html`);
    writeFileSync(input, html);
    const output = join(root, 'assets', 'images', `og-benova-${code}.png`);
    execFileSync(chrome, [
      '--headless', '--no-sandbox', '--disable-gpu', '--hide-scrollbars',
      '--disable-background-networking', '--disable-component-update',
      '--disable-sync', '--disable-extensions', '--no-first-run',
      '--no-default-browser-check', '--disable-dev-shm-usage',
      `--user-data-dir=${join(temporary, `profile-${code}`)}`,
      '--window-size=1200,630', '--force-device-scale-factor=1',
      '--virtual-time-budget=3000', `--screenshot=${output}`, pathToFileURL(input).href,
    ], { stdio: 'pipe', timeout: 30000 });
    console.log(`Rendered ${output}`);
  }
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
