import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { after, before, test } from 'node:test';
import { existsSync, mkdtempSync, readdirSync, readFileSync, rmSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { extname, join } from 'node:path';
import { scanDirectoryForBlockedTerms } from './check-public-safety.mjs';
import { stagePublic } from './stage-public.mjs';

const temporary = mkdtempSync(join(tmpdir(), 'benova-site-'));
const output = join(temporary, 'public');
const routes = ['', 'nova/', 'nexus/', 'orbit/']
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

test('the deploy artifact contains all 8 complete pages and matching language URLs', () => {
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

test('unpublished Echelon pages, routes and references are absent from the deploy artifact', () => {
  for (const route of ['echelon', 'en/echelon']) {
    assert.equal(existsSync(join(output, route)), false, route);
  }
  const sitemap = readFileSync(join(output, 'sitemap.xml'), 'utf8');
  assert.doesNotMatch(sitemap, /echelon/i);

  const textFiles = [];
  const walk = (directory) => {
    for (const entry of readdirSync(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        walk(path);
      } else if (!/\.(?:png|jpe?g|gif|webp|avif|ico|woff2?|ttf|otf|eot|pdf|zip|gz)$/i.test(entry.name)) {
        textFiles.push(path);
      }
    }
  };
  walk(output);
  for (const file of textFiles) {
    assert.doesNotMatch(readFileSync(file, 'utf8'), /echelon/i, file);
  }
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

test('NOVA page has accessible responsive diagrams, four axis capabilities and four family cards', () => {
  for (const route of ['nova/', 'en/nova/']) {
    const text = html.get(route);
    for (const layout of ['desktop', 'mobile']) {
      assert.ok(text.includes(`aria-labelledby="model-map-title-${layout} model-map-desc-${layout}"`), route);
      assert.match(text, new RegExp(`<title id="model-map-title-${layout}">[^<]+</title>`), route);
      assert.match(text, new RegExp(`<desc id="model-map-desc-${layout}">[^<]+</desc>`), route);
    }
    assert.equal((text.match(/class="card model-capability-card reveal"/g) || []).length, 8, route);
    assert.equal((text.match(/<details class="reveal">/g) || []).length, 8, route);
    const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map(([, id]) => id);
    assert.equal(new Set(ids).size, ids.length, `${route}: duplicate SVG or section ID`);
    for (const anchor of ['architecture', 'axis', 'families', 'status', 'adoption', 'readiness', 'contact']) {
      assert.ok(ids.includes(anchor), `${route}: missing anchor ${anchor}`);
    }
    for (const name of ['Nexus', 'Orbit', 'Vista', 'Add-ons', 'Aster', 'Astra']) {
      assert.ok(text.includes(name), `${route}: model misses ${name}`);
    }
  }
});

test('NOVA states its status honestly and focuses the first delivery on Orbit–Vista', () => {
  for (const [route, patterns] of [
    ['nova/', [/mức sẵn sàng của từng giải pháp/i, /không tự phát lại giao dịch/, /trọng tâm triển khai đầu tiên/i]],
    ['en/nova/', [/readiness of each solution/i, /does not replay the transaction automatically/, /first delivery focus/i]],
  ]) {
    for (const pattern of patterns) assert.match(html.get(route), pattern, route);
  }
  for (const route of ['', 'en/']) {
    const text = html.get(route);
    assert.match(text, /agent-group-label/, route);
    assert.match(text, /agent-grid-core/, route);
    assert.match(text, /nova\//, route);
  }
});

test('N, O, V and A map to Nexus, Orbit, Vista and Add-ons across the public model', () => {
  for (const route of ['', 'en/']) {
    const text = html.get(route);
    for (const name of ['Nexus', 'Orbit', 'Vista', 'Add-ons']) {
      assert.ok(text.includes(`title="${name} — `), `${route}: hero satellite missing ${name}`);
    }
    assert.doesNotMatch(text, /title="Aster — /, `${route}: Aster is not a family`);
    assert.match(text, /agent-key[^>]*>A<\/span>\s*<div>\s*<h3>Add-ons<\/h3>/, route);
    assert.doesNotMatch(text, /Orbit · Vista · Aster/, route);
  }
  for (const route of ['nova/', 'en/nova/']) {
    const text = html.get(route);
    assert.match(text, /<h3>Add-ons — /, route);
    assert.match(text, /<h3>Orbit — /, route);
    assert.match(text, /Aster/, route);
    assert.match(text, /Astra/, route);
    assert.doesNotMatch(text, /Echelon/, route);
  }
});

test('Nexus is presented as a member of the NOVA model with current build and administration scope', () => {
  for (const route of ['', 'en/']) {
    const text = html.get(route);
    assert.match(text, /agent-key[^>]*>N<\/span>\s*<div>\s*<h3>Nexus<\/h3>/, route);
    assert.match(text, /is-supporting/, route);
  }
  for (const route of ['nexus/', 'en/nexus/']) {
    const text = html.get(route);
    assert.match(text, /class="nx-phase is-current/, route);
    assert.match(text, /class="nx-phase is-standalone/, route);
    assert.match(text, /class="nx-phase is-later/, route);
    assert.doesNotMatch(text, /gói phát hành sớm|early-release package/i, route);
  }
});

test('the deploy artifact contains no blocked vendor or copyright-risk terms', () => {
  const findings = scanDirectoryForBlockedTerms(output);
  assert.deepEqual(
    findings,
    [],
    findings.map(({ file, line, label }) => `${file}:${line} ${label}`).join('\n')
  );
});

test('source, internal documentation and release tooling are not deployed', () => {
  for (const entry of ['content', 'scripts', 'docs', '.github', 'package.json', 'README.md']) {
    assert.equal(existsSync(join(output, entry)), false, entry);
  }
  assert.throws(() => stagePublic(output), /must be empty/);
});
