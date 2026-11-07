/**
 * Dev server tối giản cho BENOVA — chỉ dùng thư viện chuẩn của Node.
 *
 *   node scripts/serve.mjs [port]
 *
 * Mỗi lần tải index.html, nội dung được build lại từ `content/site.mjs`
 * nên chỉ cần F5 là thấy thay đổi.
 */
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join, extname, normalize } from 'node:path';
import { spawnSync } from 'node:child_process';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.argv[2] || process.env.PORT || 4173);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
};

function rebuild() {
  const result = spawnSync(process.execPath, [join(root, 'scripts', 'build.mjs')], { encoding: 'utf-8' });
  if (result.status !== 0) console.error(result.stderr || result.stdout);
}

createServer(async (req, res) => {
  let path = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  if (path.endsWith('/')) path += 'index.html';

  // Chặn path traversal ra ngoài thư mục dự án.
  const file = join(root, normalize(path).replace(/^(\.\.[/\\])+/, ''));
  if (!file.startsWith(root)) {
    res.writeHead(403).end('Forbidden');
    return;
  }

  if (file.endsWith('index.html')) rebuild();

  try {
    const body = await readFile(file);
    res.writeHead(200, {
      'Content-Type': TYPES[extname(file)] || 'application/octet-stream',
      'Cache-Control': 'no-store',
    });
    res.end(body);
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('404 Not Found');
  }
}).listen(port, () => {
  rebuild();
  console.log(`BENOVA → http://localhost:${port}`);
});
