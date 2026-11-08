import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { after, before, test } from 'node:test';
import { existsSync, mkdtempSync, readFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { extname, join } from 'node:path';
import { stagePublic } from './stage-public.mjs';

const temporary = mkdtempSync(join(tmpdir(), 'benova-site-'));
const output = join(temporary, 'public');
const routes = ['', 'nova/', 'echelon/', 'nexus/', 'orbit/']
  .flatMap((slug) => [slug, `en/${slug}`]);
const origin = 'https://binean.com/';
const html = new Map();
const fileFor = (pathname) => join(output, ...decodeURIComponent(pathname).split('/').filter(Boolean));

before(() => {
  stagePublic(output);
  for (const route of routes) {
    html.set(route, readFileSync(join(fileFor(route), 'index.html'), 'utf8'));
  }
});
after(() => rmSync(temporary, { recursive: true, force: true }));

test('the deploy artifact contains all 10 complete pages and matching language URLs', () => {
  for (const [route, text] of html) {
    const language = route.startsWith('en/') ? 'en' : 'vi';
    assert.match(text, new RegExp(`<html lang="${language}"`), route);
    assert.match(text, /<\/html>\s*$/, route);
    assert.equal((text.match(/<h1\b/g) || []).length, 1, route);
    assert.ok(text.includes(`<link rel="canonical" href="${origin}${route}"`), route);
    const slug = route.replace(/^en\//, '');
    for (const [code, prefix] of [['vi', ''], ['en', 'en/']]) {
      assert.ok(text.includes(`hreflang="${code}" href="${origin}${prefix}${slug}"`), route);
    }
    const metadata = text.match(/<script type="application\/ld\+json">([^<]+)<\/script>/);
    assert.ok(metadata, route);
    assert.equal(JSON.parse(metadata[1]).url, `${origin}${route}`, route);
    assert.doesNotMatch(text, /\bundefined\b|\[object Object\]/, route);
  }
  assert.ok(existsSync(join(output, '404.html')));
});

test('every local link, asset and fragment resolves inside the staged artifact', () => {
  for (const route of [...routes, '404.html']) {
    const text = html.get(route) || readFileSync(join(output, route), 'utf8');
    for (const [, attribute] of text.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
      const url = new URL(attribute.replace(/&amp;/g, '&'), `${origin}${route}`);
      if (url.origin !== new URL(origin).origin) continue;
      let target = fileFor(url.pathname);
      const context = `${route || '/'} -> ${attribute}`;
      assert.ok(existsSync(target), context);
      if (statSync(target).isDirectory()) target = join(target, 'index.html');
      assert.ok(existsSync(target), context);
      if (url.hash && extname(target) === '.html') {
        const contents = readFileSync(target, 'utf8');
        assert.ok(contents.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), context);
      }
    }
  }
});

test('all sitemap routes exist in the artifact', () => {
  const sitemap = readFileSync(join(output, 'sitemap.xml'), 'utf8');
  const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) => url);
  assert.deepEqual(new Set(locations), new Set(routes.map((route) => `${origin}${route}`)));
});

test('styles and scripts use content versions to prevent stale assets after deployment', () => {
  for (const route of [...routes, '404.html']) {
    const text = html.get(route) || readFileSync(join(output, route), 'utf8');
    const assets = [...text.matchAll(/(?:href|src)="([^"]+\.(?:css|js)(?:\?[^"]*)?)"/g)];
    assert.ok(assets.length >= 2, route);
    for (const [, attribute] of assets) {
      const url = new URL(attribute, `${origin}${route}`);
      if (url.origin !== new URL(origin).origin) continue;
      const hash = createHash('sha256').update(readFileSync(fileFor(url.pathname))).digest('hex').slice(0, 12);
      assert.equal(url.searchParams.get('v'), hash, `${route}: ${attribute}`);
    }
  }
});

test('unreleased EVA pages and links are absent from the deploy artifact', () => {
  for (const route of ['eva', 'en/eva']) {
    assert.equal(existsSync(join(output, route)), false, route);
  }
  for (const [route, text] of html) {
    assert.doesNotMatch(text, /\bEVA\b|(?:href|src)="[^"]*\/eva\//i, route);
  }
  const sitemap = readFileSync(join(output, 'sitemap.xml'), 'utf8');
  assert.doesNotMatch(sitemap, /\/eva\//);
});

test('retired routes are absent from the public artifact and sitemap', () => {
  assert.ok(!existsSync(join(output, 'base')) && !existsSync(join(output, 'en', 'base')));
  const sitemap = readFileSync(join(output, 'sitemap.xml'), 'utf8');
  assert.doesNotMatch(sitemap, /\/base\//);
});

test('NOVA colors use the same theme-dependent accents as the home page', () => {
  const css = readFileSync(join(output, 'assets', 'css', 'style.css'), 'utf8');
  assert.match(css, /\.model-page\s*\{\s*--model-accent:\s*var\(--accent\);/);
  assert.match(css, /\.model-map-panel\s*\{[^}]*fill:\s*var\(--bg-raise\);/);
  assert.match(css, /\.model-map-title\s*\{[^}]*fill:\s*var\(--text-strong\);/);
});

test('NOVA page has accessible responsive diagrams, four flow steps, six components and eight FAQ items', () => {
  for (const route of ['nova/', 'en/nova/']) {
    const text = html.get(route);
    for (const layout of ['desktop', 'mobile']) {
      assert.ok(text.includes(`aria-labelledby="model-map-title-${layout} model-map-desc-${layout}"`), route);
      assert.match(text, new RegExp(`<title id="model-map-title-${layout}">[^<]+</title>`), route);
      assert.match(text, new RegExp(`<desc id="model-map-desc-${layout}">[^<]+</desc>`), route);
    }
    assert.equal((text.match(/class="card model-capability-card reveal"/g) || []).length, 10, route);
    assert.equal((text.match(/<details class="reveal">/g) || []).length, 9, route);
    const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(new Set(ids).size, ids.length, `${route}: duplicate SVG or section ID`);
    for (const anchor of ['architecture', 'flow', 'components', 'status', 'adoption', 'readiness', 'contact']) {
      assert.ok(ids.includes(anchor), `${route}: missing anchor ${anchor}`);
    }
    for (const name of ['Vista', 'Orbit', 'Aster', 'Nexus', 'Echelon', 'Aira']) {
      assert.ok(text.includes(name), `${route}: diagram misses ${name}`);
    }
  }
});

test('NOVA states its status honestly and keeps Echelon and Aira in a later phase', () => {
  for (const [route, patterns] of [
    ['nova/', [/chưa phải bản sẵn sàng triển khai đại trà/, /không tự phát lại giao dịch/, /giai đoạn sau/i]],
    ['en/nova/', [/not yet a generally deployable release/, /does not replay the transaction automatically/, /later phase/i]],
  ]) {
    for (const pattern of patterns) assert.match(html.get(route), pattern, route);
  }
  for (const route of ['', 'en/']) {
    const text = html.get(route);
    assert.match(text, /agent-group-label is-later/, route);
    assert.match(text, /nova\//, route);
  }
});

test('Nexus is presented as a later-phase component, outside the early-release NOVA package', () => {
  for (const route of ['', 'en/']) {
    const text = html.get(route);
    const later = text.match(/<details class="ecosystem-later">[\s\S]*?<\/details>/);
    assert.ok(later, route);
    assert.match(later[0], /Nexus/, route);
    assert.doesNotMatch(text.replace(later[0], ''), /agent-key[^>]*>N</, route);
  }
  for (const route of ['nexus/', 'en/nexus/']) {
    const text = html.get(route);
    assert.match(text, /class="nx-phase is-later/, route);
    assert.match(text, /class="nx-phase is-current/, route);
  }
});

test('source, internal documentation and release tooling are not deployed', () => {
  for (const entry of ['content', 'scripts', 'docs', '.github', 'package.json', 'README.md']) {
    assert.equal(existsSync(join(output, entry)), false, entry);
  }
  assert.throws(() => stagePublic(output), /must be empty/);
});
