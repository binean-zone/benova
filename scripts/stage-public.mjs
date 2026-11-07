import { cpSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const publicEntries = [
  'index.html', '404.html', 'sitemap.xml', 'robots.txt', 'CNAME', '.nojekyll',
  'assets', 'nova', 'echelon', 'nexus', 'orbit',
  'en/index.html', 'en/nova', 'en/echelon', 'en/nexus', 'en/orbit',
];

export function stagePublic(destination) {
  mkdirSync(destination, { recursive: true });
  if (readdirSync(destination).length) {
    throw new Error(`Public staging directory must be empty: ${destination}`);
  }
  for (const entry of publicEntries) {
    const target = join(destination, entry);
    mkdirSync(dirname(target), { recursive: true });
    cpSync(join(root, entry), target, { recursive: true });
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const destination = join(root, '_site');
  stagePublic(destination);
  console.log(`Public site staged at ${destination}`);
}
