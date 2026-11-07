/**
 * BENOVA static site generator.
 *
 * Đọc content/vi.mjs và content/en.mjs rồi sinh ra hai trang tĩnh hoàn chỉnh —
 * không có runtime framework, không fetch dữ liệu ở client, crawler đọc được
 * ngay. Bản tiếng Việt ra index.html, bản tiếng Anh ra en/index.html.
 *
 *   node scripts/build.mjs
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import vi from '../content/vi.mjs';
import en from '../content/en.mjs';
import { modelDiagram, modelIcon } from './model-diagram.mjs';


const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const assetVersions = new Map();
const versionedAsset = (path) => {
  if (!assetVersions.has(path)) {
    assetVersions.set(path, createHash('sha256').update(readFileSync(join(root, path))).digest('hex').slice(0, 12));
  }
  return `${path}?v=${assetVersions.get(path)}`;
};

/** Bản đầu tiên là ngôn ngữ mặc định, nằm ở gốc site. */
const locales = [vi, en];

/** site trỏ tới ngôn ngữ đang dựng; mọi hàm sinh HTML đọc từ đây. */
let site = vi;
/** Tiền tố đường dẫn từ trang hiện tại về gốc site, ví dụ '../' cho /en/. */
let base = '';

/** Đường dẫn của trang trong một ngôn ngữ: '' là trang chủ, các slug còn lại
    là trang sản phẩm. Ghép với locale.path ra đường dẫn đầy đủ. */
let pagePath = '';

const fullPath = (locale = site) => locale.locale.path + pagePath;

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const list = (items, render) => items.map(render).join('\n');

/** Nội dung riêng của trang sản phẩm đang dựng, nếu có. */
const detailPage = () => {
  if (pagePath === 'echelon/') return site.echelonPage;
  if (pagePath === 'eva/') return site.evaPage;
  if (pagePath === 'nova/') return site.modelPage;
  if (pagePath === 'nexus/') return site.nexusPage;
  if (pagePath === 'orbit/') return site.orbitPage;
  return null;
};

/* Địa chỉ đầu tiên là địa chỉ chính, dùng cho mọi nút CTA. */
const mailto = (address, subject) => `mailto:${address}?subject=${encodeURIComponent(subject)}`;

/** Đường dẫn tương đối từ trang đang dựng sang một ngôn ngữ khác. */
/* Đổi ngôn ngữ thì giữ nguyên trang đang xem, không đá về trang chủ. */
const localeHref = (target) => {
  const href = base + fullPath(target);
  return href === '' ? './' : href;
};

/* -------------------------------------------------------------- head --- */

const head = () => {
  const { brand } = site;
  // Trang sản phẩm mang khối SEO riêng; những trường chung thì kế thừa.
  const current = detailPage();
  const seo = { ...site.seo, ...(current?.seo || {}) };
  const canonical = new URL(fullPath(), seo.url).href;
  const ogImageFile = `assets/images/og-benova-${site.locale.code}.png`;
  const ogImage = new URL(ogImageFile, seo.url).href;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: current?.brandName || brand.name,
    applicationCategory: 'BusinessApplication',
    description: seo.description,
    url: canonical,
    publisher: { '@type': 'Organization', name: brand.name, email: brand.emails[0] },
  };

  return `  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${esc(seo.title)}</title>
  <meta name="description" content="${esc(seo.description)}" />
  <meta name="keywords" content="${esc(seo.keywords)}" />
  <meta name="theme-color" content="${esc(seo.themeColor)}" />
  <link rel="canonical" href="${esc(canonical)}" />
${locales
  .map(
    (l) =>
      `  <link rel="alternate" hreflang="${esc(l.locale.code)}" href="${esc(
        new URL(fullPath(l), seo.url).href
      )}" />`
  )
  .join('\n')}
  <link rel="alternate" hreflang="x-default" href="${esc(new URL(fullPath(locales[0]), seo.url).href)}" />

  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="${esc(brand.name)}" />
  <meta property="og:title" content="${esc(seo.title)}" />
  <meta property="og:description" content="${esc(seo.description)}" />
  <meta property="og:url" content="${esc(canonical)}" />
  <meta property="og:image" content="${esc(ogImage)}" />
  <meta property="og:locale" content="${esc(site.locale.code)}" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${esc(seo.title)}" />
  <meta name="twitter:description" content="${esc(seo.description)}" />
  <meta name="twitter:image" content="${esc(ogImage)}" />

  <link rel="icon" href="${base}assets/images/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="${base}assets/images/binean.svg" />
  <!-- Font tự host: trang không gọi ra máy chủ ngoài nào. Nạp trước hai file
       chắc chắn cần để chữ không nhảy font giữa chừng. -->
${(site.locale.code === 'vi' ? ['inter-latin', 'inter-vietnamese'] : ['inter-latin'])
    .map(
      (file) =>
        `  <link rel="preload" as="font" type="font/woff2" href="${base}assets/fonts/${file}.woff2" crossorigin />`
    )
    .join('\n')}
  <link rel="stylesheet" href="${base}${versionedAsset('assets/css/fonts.css')}" />
  <link rel="stylesheet" href="${base}${versionedAsset('assets/css/style.css')}" />
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
  <script>
    // Áp dụng theme trước khi paint để tránh nhấp nháy màu.
    (function () {
      var theme = null;
      try {
        theme = localStorage.getItem('benova-theme');
      } catch (e) {}
      if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light';
      if (theme) document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>`;
};

/* ------------------------------------------------------------ header --- */

const notice = () => {
  const current = detailPage();
  const n = current?.notice || site.notice;
  const subject = current?.cta.subject || 'BENOVA - Lien he';
  return `  <div class="site-notice" role="status">
    <div class="shell notice-inner">
      <span class="notice-dot" aria-hidden="true"></span>
      <p>${esc(n.text)}</p>
      <a href="${esc(mailto(site.brand.emails[0], subject))}">${esc(n.linkLabel)}</a>
    </div>
  </div>`;
};

const header = () => {
  const current = detailPage();
  const brandName = current?.brandName || site.brand.name;
  const brandHref = current ? `${base}${site.locale.path}` : '#top';
  const navItems = current?.nav || site.nav;
  const ctaHref = current
    ? mailto(site.brand.emails[0], current.cta.subject)
    : `#${site.cta.id}`;
  const ctaLabel = current?.headerCta || site.ui.headerCta;

  return `  <a class="skip-link" href="#main">${esc(site.ui.skipToContent)}</a>
  <header class="site-header" id="site-header">
    <div class="shell header-inner">
      <a class="brand" href="${esc(brandHref)}" aria-label="${esc(brandName)}">
        <span class="brand-mark" aria-hidden="true">
          <img class="logo-dark" src="${base}assets/images/binean-dark.svg" alt="" width="60" height="60" />
          <img class="logo-light" src="${base}assets/images/binean.svg" alt="" width="60" height="60" />
        </span>
        <span class="brand-name">${esc(brandName)}</span>
      </a>

      <nav class="site-nav" id="site-nav" aria-label="${esc(site.ui.mainNav)}">
        <ul>
${list(navItems, (item) => `          <li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`)}
        </ul>
      </nav>

      <div class="header-actions">
        <nav class="lang-switch" aria-label="${esc(site.ui.languageNav)}">
${locales
  .map(
    (l) =>
      `          <a
            href="${esc(localeHref(l))}"
            lang="${esc(l.locale.code)}"
            hreflang="${esc(l.locale.code)}"
            title="${esc(l.locale.label)}"${
        l.locale.code === site.locale.code ? '\n            aria-current="page"' : ''
      }
          >${esc(l.locale.short)}</a>`
  )
  .join('\n')}
        </nav>
        <button
          class="theme-toggle"
          id="theme-toggle"
          type="button"
          aria-label="${esc(site.ui.toggleTheme)}"
          title="${esc(site.ui.toggleTheme)}"
        >
          <svg class="icon-sun" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <circle cx="12" cy="12" r="4.5" />
            <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M19.8 4.2l-2.1 2.1M6.3 17.7l-2.1 2.1" />
          </svg>
          <svg class="icon-moon" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" />
          </svg>
        </button>
        <a class="btn btn-primary btn-sm header-cta" href="${esc(ctaHref)}">${esc(ctaLabel)}</a>
        <button
          class="nav-toggle"
          id="nav-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="site-nav"
          aria-label="${esc(site.ui.openMenu)}"
          data-label-open="${esc(site.ui.openMenu)}"
          data-label-close="${esc(site.ui.closeMenu)}"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
};

/* -------------------------------------------------------------- hero --- */

const hero = () => {
  const { hero } = site;
  const sats = hero.satellites;

  /* Hệ mặt trời dựng bằng CSS 3D thật: sân khấu có perspective, mọi lớp đều
     preserve-3d. Elip, xa gần và việc hành tinh chui ra sau mặt trời đều là kết
     quả của phép chiếu phối cảnh chứ không phải keyframe mô phỏng.
     Thêm hay bớt thành tố chỉ cần sửa content/site.mjs. */
  const R_INNER = 0.28;
  const R_OUTER = 0.5;

  // Hành tinh to nhỏ chênh nhau rõ rệt; Echelon là bộ khung nên to nhất.
  const SCALES = [1.12, 1.24, 0.88, 1, 0.8, 0.94];
  // Chu kỳ quỹ đạo trong cùng, tính bằng giây.
  const BASE_PERIOD = 19;
  // Mặt phẳng quỹ đạo: mỗi hành tinh một hướng nút lên và một độ nghiêng riêng,
  // nên không cái nào cùng mặt phẳng với cái nào.
  const NODES = [-26, 12, -7, 31, -16, 22];
  const INCLINATIONS = [-9, 6, -3, 11, -6, 8];

  const orbits = sats.map((sat, i) => {
    const t = sats.length > 1 ? i / (sats.length - 1) : 0;
    const radius = R_INNER + (R_OUTER - R_INNER) * t;
    // Chu kỳ theo định luật Kepler 3: T tỉ lệ với r mũ 1.5. Quỹ đạo ngoài chậm
    // hơn hẳn quỹ đạo trong chứ không chỉ chậm hơn một chút.
    const duration = Math.round(BASE_PERIOD * Math.pow(radius / R_INNER, 1.5));
    // Góc vàng: các hành tinh không bao giờ xếp thành hình sao đều.
    const angle = (i * 137.508) % 360;
    // Animation ghi đè transform nên lệch pha bằng delay âm thay vì rotate tĩnh.
    const delay = -(angle / 360) * duration;
    return {
      sat,
      radius,
      duration,
      delay,
      angle,
      scale: SCALES[i % SCALES.length],
      node: NODES[i % NODES.length],
      incl: INCLINATIONS[i % INCLINATIONS.length],
    };
  });

  /* Chuỗi biến đổi từ ngoài vào trong:
       .orbit-scene  rotateX(scene)              nghiêng cả hệ để nhìn chếch
       .sat-plane    rotateZ(node) rotateX(incl) mặt phẳng riêng của quỹ đạo
       .sat          rotateZ(θ)                  quay quanh mặt trời   (động)
       .sat-pos      translateX(r)               đẩy ra bán kính
       .sat-chip     rotateZ(-θ)                 billboard phần động   (động)
       .sat-body     rotateX(-incl) rotateZ(-node) rotateX(-scene)     billboard
     Ba phép quay cuối là nghịch đảo của toàn bộ chuỗi trên, nên thân hành tinh
     luôn quay mặt về phía người xem và chữ luôn đứng thẳng. */
  const planets = list(
    orbits,
    (o) => `            <li
              class="sat-plane"
              style="--rf:${o.radius.toFixed(4)}; --node:${o.node}deg; --incl:${
      o.incl
    }deg; --dur:${o.duration}s; --delay:${o.delay.toFixed(2)}s; --static-a:${o.angle.toFixed(
      2
    )}deg; --c:${esc(o.sat.color)}; --ps:${o.scale}"
            >
              <span class="sat">
                <span class="sat-pos">
                  <span class="sat-chip">
                    <span
                      class="sat-body${o.sat.ring ? ' sat-ringed' : ''}"
                      title="${esc(o.sat.name)} — ${esc(o.sat.desc)}"
                    >
                      <span class="sat-key">${esc(o.sat.key)}</span>
                    </span>
                  </span>
                </span>
              </span>
            </li>`
  );

  /* Trường sao tĩnh, sinh bằng PRNG có seed để mỗi lần build ra đúng một kết
     quả — nếu ngẫu nhiên thật thì CI sẽ thấy index.html đổi sau mỗi lần build. */
  let seed = 20260824;
  const rand = () => {
    seed = (seed * 1103515245 + 12345) % 2147483648;
    return seed / 2147483648;
  };
  const stars = Array.from({ length: 42 }, () => {
    const size = (rand() * 1.6 + 0.8).toFixed(2);
    return `            <i style="--x:${(rand() * 100).toFixed(2)}%; --y:${(rand() * 100).toFixed(
      2
    )}%; --s:${size}px; --tw:${(rand() * 4 + 3).toFixed(2)}s; --td:${(rand() * 5).toFixed(
      2
    )}s"></i>`;
  }).join('\n');

  return `    <section class="hero" id="top">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="shell hero-inner">
        <div class="hero-copy">
          <p class="eyebrow reveal">${esc(hero.eyebrow)}</p>
          <h1 class="hero-title reveal">
            <span>${esc(hero.headline[0])}</span>
            <span class="grad">${esc(hero.headline[1])}</span>
          </h1>
          <p class="hero-sub reveal">${esc(hero.sub)}</p>
          <div class="hero-actions reveal">
            <a class="btn btn-primary" href="${esc(hero.primaryCta.href)}">${esc(hero.primaryCta.label)}</a>
            <a class="btn btn-ghost" href="${esc(hero.secondaryCta.href)}">${esc(hero.secondaryCta.label)}</a>
          </div>
          <p class="hero-note reveal">${esc(hero.note)}</p>
        </div>

        <div class="hero-visual reveal" aria-hidden="true">
          <div class="orbit-stage">
            <div class="starfield">
${stars}
            </div>
            <div class="orbit-corona"></div>
            <div class="orbit-flare"></div>
            <div class="orbit-scene">
              <div class="orbit-core">
                <span class="core-name">${esc(hero.core.key)}</span>
              </div>
              <ul class="orbit-sats">
${planets}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="shell hero-principles">
${list(hero.principles, (principle, index) => `        <div class="hero-principle">
          <span class="principle-index" aria-hidden="true">0${index + 1}</span>
          <div><h2>${esc(principle.title)}</h2><p>${esc(principle.desc)}</p></div>
        </div>`)}
      </div>
    </section>`;
};

/* ---------------------------------------------------------- problem ---- */

const problem = () => {
  const p = site.problem;
  return `    <section class="section section-problem" id="${esc(p.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.eyebrow)}</p>
          <h2>${esc(p.title)}</h2>
          <p class="lead">${esc(p.lead)}</p>
        </div>
        <div class="pain-grid">
${list(
  p.pains,
  (pain, index) => `          <article class="card pain-card reveal">
            <span class="card-icon" aria-hidden="true">0${index + 1}</span>
            <h3>${esc(pain.title)}</h3>
            <p>${esc(pain.desc)}</p>
          </article>`
)}
        </div>
        <p class="section-bridge reveal">${esc(p.bridge)}</p>
      </div>
    </section>`;
};

/* --------------------------------------------------------- strategy ---- */

const strategy = () => {
  const t = site.strategy;
  return `    <section class="section section-strategy" id="${esc(t.id)}">
      <div class="shell">
        <div class="strangler">
          <div class="strangler-copy reveal">
            <p class="eyebrow">${esc(t.eyebrow)}</p>
            <h2>${esc(t.title)}</h2>
            <p class="lead">${esc(t.lead)}</p>
          </div>
          <ol class="strangler-steps">
${list(
  t.steps,
  (step) => `            <li class="reveal">
              <span class="step-num">${esc(step.num)}</span>
              <div>
                <h3>${esc(step.title)}</h3>
                <p>${esc(step.desc)}</p>
              </div>
            </li>`
)}
          </ol>
        </div>
        <figure class="diagram reveal">
          <img
            src="${base}assets/images/strangler-fig-${esc(site.locale.code)}.svg"
            alt="${esc(t.diagram.alt)}"
            width="1120"
            height="420"
            loading="lazy"
            decoding="async"
          />
          <figcaption>${esc(t.caption)}</figcaption>
        </figure>
      </div>
    </section>`;
};

/* -------------------------------------------------------- ecosystem ---- */


const agentCard = (agent, wide) => `          <article class="card agent-card${wide ? ' agent-card-wide' : ''} reveal">
            <header class="agent-head">
              <span class="agent-key" aria-hidden="true">${esc(agent.key)}</span>
              <div>
                <h3>${esc(agent.name)}</h3>
                <p class="agent-role">${esc(agent.role)}</p>
              </div>
              <span class="status">${esc(agent.status)}</span>
            </header>
            <p class="agent-desc">${esc(agent.desc)}</p>
            <ul class="feature-list">
${list(agent.features, (f) => `              <li>${esc(f)}</li>`)}
            </ul>
${
  agent.link
    ? `            <a class="agent-more" href="${esc(agent.link.href)}">${esc(agent.link.label)} →</a>`
    : ''
}
          </article>`;

const ecosystem = () => {
  const e = site.ecosystem;
  return `    <section class="section section-ecosystem" id="${esc(e.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(e.eyebrow)}</p>
          <h2>${esc(e.title)}</h2>
          <p class="lead">${esc(e.lead)}</p>
        </div>
        <h3 class="agent-group-label reveal"><span>${esc(e.novaLabel)}</span><small>${esc(e.novaNote)}</small></h3>
        <div class="agent-grid agent-grid-pair">
${list(e.agents, (agent) => agentCard(agent, false))}
        </div>
        <details class="ecosystem-later">
          <summary class="agent-group-label is-later"><span>${esc(e.laterLabel)}</span><small>${esc(e.laterNote)}</small></summary>
          <div class="agent-grid agent-grid-pair">
${list(e.later, (agent) => agentCard(agent, false))}
          </div>
        </details>
      </div>
    </section>`;
};

/* --------------------------------------------------------- benefits ---- */

const benefits = () => {
  const b = site.benefits;
  return `    <section class="section section-benefits" id="${esc(b.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(b.eyebrow)}</p>
          <h2>${esc(b.title)}</h2>
          <p class="lead">${esc(b.lead)}</p>
        </div>
        <div class="benefit-grid">
${list(
  b.items,
  (item, index) => `          <article class="card benefit-card reveal">
            <span class="card-icon" aria-hidden="true">0${index + 1}</span>
            <p class="benefit-answers">${esc(site.ui.answersPrefix)}: ${esc(item.answers)}</p>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
          </article>`
)}
        </div>
        <p class="section-bridge reveal">${esc(b.note)}</p>
      </div>
    </section>`;
};

/* --------------------------------------------------------------- cta --- */

const cta = () => {
  const c = site.cta;
  return `    <section class="section section-cta" id="${esc(c.id)}">
      <div class="shell">
        <div class="cta-box reveal">
          <h2>${esc(c.title)}</h2>
          <p class="lead">${esc(c.lead)}</p>
          <p class="assessment-label">${esc(c.deliverablesLabel)}</p>
          <ol class="assessment-outcomes">
${list(c.deliverables, (item) => `            <li><h3>${esc(item.title)}</h3><p>${esc(item.desc)}</p></li>`)}
          </ol>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${esc(c.primary.href)}">${esc(c.primary.label)}</a>
            <a class="btn btn-ghost btn-lg" href="${esc(c.secondary.href)}">${esc(c.secondary.label)}</a>
          </div>
          <p class="hero-note">${esc(c.note)}</p>
          <p class="cta-contact">
${list(
  site.brand.emails,
  (address) =>
    `            <a href="${esc(mailto(address, 'BENOVA - Yeu cau tu van'))}">${esc(address)}</a>`
)}
          </p>
        </div>
      </div>
    </section>`;
};

/* ------------------------------------------------------------ footer --- */

const footer = () => {
  const f = site.footer;
  /* Footer là điều hướng chung của cả site, nhưng link của nó là anchor của
     trang chủ. Ở trang con, anchor trần sẽ trỏ vào chính trang đó và chết —
     nên phải gắn thêm đường về trang chủ phía trước. */
  const siteLink = (href) => {
    if (href.startsWith('#')) return pagePath ? `${base}${site.locale.path}${href}` : href;
    if (/^(?:[a-z]+:|\/)/i.test(href)) return href;
    return `${base}${site.locale.path}${href}`;
  };
  return `  <footer class="site-footer">
    <div class="shell footer-inner">
      <div class="footer-brand">
        <span class="brand-name">${esc(site.brand.name)}</span>
        <p>${esc(f.blurb)}</p>
        <p class="footer-company">
          <span>${esc(site.ui.companyLine)}</span>
          <img class="logo-dark" src="${base}assets/images/binean-full-dark.svg" alt="Binean" width="169" height="65" loading="lazy" />
          <img class="logo-light" src="${base}assets/images/binean-full.svg" alt="Binean" width="169" height="65" loading="lazy" />
        </p>
      </div>
${list(
  f.columns,
  (col) => `      <nav class="footer-col" aria-label="${esc(col.title)}">
        <h2>${esc(col.title)}</h2>
        <ul>
${list(col.links, (l) => `          <li><a href="${esc(siteLink(l.href))}">${esc(l.label)}</a></li>`)}
        </ul>
      </nav>`
)}
      <div class="footer-col">
        <h2>${esc(site.ui.contactTitle)}</h2>
        <ul>
${list(
  site.brand.emails,
  (address) =>
    `          <li><a href="${esc(mailto(address, 'BENOVA - Lien he'))}">${esc(address)}</a></li>`
)}
        </ul>
        <p class="footer-contact-note">${esc(site.ui.contactNote)}</p>
      </div>
    </div>
    <div class="shell footer-bottom">
      <p>${esc(f.copyright)}</p>
${f.legal.length
  ? `      <ul>
${list(f.legal, (l) => `        <li><a href="${esc(siteLink(l.href))}">${esc(l.label)}</a></li>`)}
      </ul>`
  : ''}
    </div>
  </footer>`;
};

/* ------------------------------------------------------------- page ---- */

const page = () => `<!DOCTYPE html>
<html lang="${esc(site.locale.code)}" data-theme="dark">
<head>
${head()}
</head>
<body class="home-page">
${notice()}
${header()}

  <main id="main">
${hero()}

${problem()}

${benefits()}

${ecosystem()}

${strategy()}

${cta()}
  </main>

${footer()}

  <script src="${base}${versionedAsset('assets/js/main.js')}" defer></script>
</body>
</html>
`;


/* ------------------------------------------------ trang Echelon ------- */

/* Escape TRƯỚC rồi mới đổi cú pháp, nên nội dung không chèn được thẻ vào trang.
   Chỉ hỗ trợ **đậm** và `mã` — vừa đủ cho tên định danh kỹ thuật trong bài. */
const rich = (text) =>
  esc(text)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>');

const echelonPage = () => {
  const p = site.echelonPage;

  const section = (sec) => `    <section class="section ech-section" id="${esc(sec.id)}">
      <div class="shell ech-shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(sec.eyebrow)}</p>
          <h2>${esc(sec.title)}</h2>
${sec.lead ? `          <p class="lead">${esc(sec.lead)}</p>` : ''}
        </div>
${(sec.body || []).map((t) => `        <p class="ech-para reveal">${rich(t)}</p>`).join('\n')}
${
  sec.glossary
    ? `        <dl class="ech-glossary reveal">
${sec.glossary
  .map(
    (g) => `          <div>
            <dt>${esc(g.term)}${g.tag ? ` <span class="ech-tag">${esc(g.tag)}</span>` : ''}</dt>
            <dd>${esc(g.desc)}</dd>
          </div>`
  )
  .join('\n')}
        </dl>`
    : ''
}
${(sec.after || []).map((t) => `        <p class="ech-para reveal">${rich(t)}</p>`).join('\n')}
${
  sec.decisions
    ? `        <div class="ech-decisions">
${sec.decisions
  .map(
    (dec, i) => `          <article class="card ech-decision reveal">
            <span class="ech-num" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span>
            <h3>${esc(dec.title)}</h3>
            <p>${esc(dec.desc)}</p>
            <p class="ech-cost">${esc(dec.cost)}</p>
          </article>`
  )
  .join('\n')}
        </div>`
    : ''
}
      </div>
    </section>`;

  const fitList = (block, cls) => `          <article class="card ech-fit ${cls} reveal">
            <h3>${esc(block.title)}</h3>
            <ul>
${block.items.map((i) => `              <li>${esc(i)}</li>`).join('\n')}
            </ul>
          </article>`;

  const fit = `    <section class="section ech-section" id="${esc(p.fit.id)}">
      <div class="shell ech-shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.fit.eyebrow)}</p>
          <h2>${esc(p.fit.title)}</h2>
        </div>
        <div class="ech-fits">
${fitList(p.fit.good, 'ech-fit-good')}
${fitList(p.fit.bad, 'ech-fit-bad')}
        </div>
      </div>
    </section>`;

  const status = `    <section class="section ech-section section-status" id="${esc(p.status.id)}">
      <div class="shell ech-shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.status.eyebrow)}</p>
          <h2>${esc(p.status.title)}</h2>
        </div>
${p.status.body.map((t) => `        <p class="ech-para reveal">${rich(t)}</p>`).join('\n')}
      </div>
    </section>`;

  const cta = `    <section class="section section-cta">
      <div class="shell">
        <div class="cta-box reveal">
          <h2>${esc(p.cta.title)}</h2>
          <p class="lead">${esc(p.cta.lead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${esc(
              mailto(site.brand.emails[0], p.cta.subject)
            )}">${esc(p.cta.label)}</a>
            <a class="btn btn-ghost btn-lg" href="${base}${esc(site.locale.path)}">${esc(
    p.cta.back
  )}</a>
          </div>
        </div>
      </div>
    </section>`;

  return `<!DOCTYPE html>
<html lang="${esc(site.locale.code)}" data-theme="dark">
<head>
${head()}
</head>
<body>
${notice()}
${header()}

  <main id="main">
    <section class="ech-hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="shell ech-shell">
        <a class="ech-back" href="${base}${esc(site.locale.path)}">← ${esc(p.hero.back)}</a>
        <p class="eyebrow reveal">${esc(p.hero.eyebrow)}</p>
        <h1 class="ech-title reveal">${esc(p.hero.title)}</h1>
        <p class="ech-lead reveal">${esc(p.hero.lead)}</p>
      </div>
    </section>

${p.sections.map(section).join('\n\n')}

${fit}

${status}

${cta}
  </main>

${footer()}

  <script src="${base}${versionedAsset('assets/js/main.js')}" defer></script>
</body>
</html>
`;
};

/* ------------------------------------------------------------- trang EVA */

const evaPage = () => {
  const p = site.evaPage;

  const productPath = (href) => `${base}${site.locale.path}${href}`;

  const problemCards = p.problem.items
    .map(
      (item) => `          <article class="card eva-problem-card reveal">
            <span class="eva-card-icon" aria-hidden="true">${esc(item.icon)}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
          </article>`
    )
    .join('\n');

  const pillarCards = p.model.pillars
    .map(
      (pillar) => `          <article class="card eva-pillar reveal" style="--pillar:${esc(
        pillar.color
      )}">
            <header class="eva-pillar-head">
              <span class="eva-pillar-key" aria-hidden="true">${esc(pillar.key)}</span>
              <div>
                <h3>${esc(pillar.name)}</h3>
                <p>${esc(pillar.role)}</p>
              </div>
            </header>
            <p class="eva-pillar-desc">${esc(pillar.desc)}</p>
            <ul class="feature-list">
${pillar.features.map((feature) => `              <li>${esc(feature)}</li>`).join('\n')}
            </ul>
${
  pillar.link
    ? `            <a class="eva-pillar-link" href="${esc(productPath(pillar.link.href))}">${esc(
        pillar.link.label
      )} →</a>`
    : ''
}
          </article>`
    )
    .join('\n');

  const flowSteps = p.model.flow.steps
    .map(
      (step) => `            <li class="reveal">
              <span>${esc(step.num)}</span>
              <div>
                <h4>${esc(step.title)}</h4>
                <p>${esc(step.desc)}</p>
              </div>
            </li>`
    )
    .join('\n');

  const valueCards = p.value.items
    .map(
      (item) => `          <article class="card eva-value-card reveal">
            <span class="eva-value-icon" aria-hidden="true">${esc(item.icon)}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
          </article>`
    )
    .join('\n');

  const applicationCards = p.applications.items
    .map(
      (item) => `          <article class="eva-use-card reveal">
            <span>${esc(item.num)}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
          </article>`
    )
    .join('\n');

  const formula = p.benova.formula
    .map(
      (item, index) => `${
        index
          ? `          <span class="eva-formula-op" aria-hidden="true">${
              index === p.benova.formula.length - 1 ? '=' : '+'
            }</span>\n`
          : ''
      }          <div class="eva-formula-part${
        index === p.benova.formula.length - 1 ? ' is-result' : ''
      }">
            <strong>${esc(item.name)}</strong>
            <span>${esc(item.desc)}</span>
          </div>`
    )
    .join('\n');

  return `<!DOCTYPE html>
<html lang="${esc(site.locale.code)}" data-theme="dark">
<head>
${head()}
</head>
<body>
${notice()}
${header()}

  <main id="main">
    <section class="eva-hero" id="top">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="shell eva-hero-inner">
        <div class="eva-hero-copy">
          <a class="ech-back" href="${base}${esc(site.locale.path)}">← ${esc(p.hero.back)}</a>
          <p class="eyebrow reveal">${esc(p.hero.eyebrow)}</p>
          <h1 class="eva-title reveal">${esc(p.hero.title)}</h1>
          <p class="eva-lead reveal">${esc(p.hero.lead)}</p>
          <div class="hero-actions reveal">
            <a class="btn btn-primary" href="${esc(p.hero.primaryCta.href)}">${esc(
    p.hero.primaryCta.label
  )}</a>
            <a class="btn btn-ghost" href="${esc(p.hero.secondaryCta.href)}">${esc(
    p.hero.secondaryCta.label
  )}</a>
          </div>
        </div>

        <div class="eva-system reveal">
          <p class="eva-system-kicker">${esc(p.hero.outcome)}</p>
          <p class="eva-system-outcome">${esc(p.hero.outcomeText)}</p>
          <ol class="eva-system-parts" aria-label="Echelon, Vista, Aira">
${p.model.pillars
  .map(
    (pillar) => `            <li style="--pillar:${esc(pillar.color)}">
              <span>${esc(pillar.key)}</span>
              <div><strong>${esc(pillar.name)}</strong><small>${esc(pillar.role)}</small></div>
            </li>`
  )
  .join('\n')}
          </ol>
          <div class="eva-signal" aria-hidden="true"><span>Task</span><i></i><span>Outcome</span></div>
        </div>
      </div>
    </section>

    <section class="section eva-section" id="${esc(p.problem.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.problem.eyebrow)}</p>
          <h2>${esc(p.problem.title)}</h2>
          <p class="lead">${esc(p.problem.lead)}</p>
        </div>
        <div class="eva-problem-grid">
${problemCards}
        </div>
      </div>
    </section>

    <section class="section eva-section eva-model-section" id="${esc(p.model.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.model.eyebrow)}</p>
          <h2>${esc(p.model.title)}</h2>
          <p class="lead">${esc(p.model.lead)}</p>
        </div>
        <div class="eva-pillar-grid">
${pillarCards}
        </div>
        <div class="eva-flow">
          <div class="eva-flow-intro reveal">
            <p class="eyebrow">Task → Outcome</p>
            <h3>${esc(p.model.flow.title)}</h3>
            <p>${esc(p.model.flow.caption)}</p>
          </div>
          <ol class="eva-flow-steps">
${flowSteps}
          </ol>
        </div>
      </div>
    </section>

    <section class="section eva-section" id="${esc(p.value.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.value.eyebrow)}</p>
          <h2>${esc(p.value.title)}</h2>
          <p class="lead">${esc(p.value.lead)}</p>
        </div>
        <div class="eva-value-grid">
${valueCards}
        </div>
      </div>
    </section>

    <section class="section eva-section eva-applications" id="${esc(p.applications.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.applications.eyebrow)}</p>
          <h2>${esc(p.applications.title)}</h2>
          <p class="lead">${esc(p.applications.lead)}</p>
        </div>
        <div class="eva-use-grid">
${applicationCards}
        </div>
        <p class="section-bridge reveal">${esc(p.applications.note)}</p>
      </div>
    </section>

    <section class="section eva-section eva-benova" id="${esc(p.benova.id)}">
      <div class="shell">
        <div class="eva-benova-copy reveal">
          <p class="eyebrow">${esc(p.benova.eyebrow)}</p>
          <h2>${esc(p.benova.title)}</h2>
          <p class="lead">${esc(p.benova.lead)}</p>
          <a class="eva-benova-link" href="${esc(productPath(p.benova.cta.href))}">${esc(
    p.benova.cta.label
  )} →</a>
        </div>
        <div class="eva-formula reveal">
${formula}
        </div>
      </div>
    </section>

    <section class="section section-cta" id="${esc(p.cta.id)}">
      <div class="shell">
        <div class="cta-box reveal">
          <h2>${esc(p.cta.title)}</h2>
          <p class="lead">${esc(p.cta.lead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${esc(
              mailto(site.brand.emails[0], p.cta.subject)
            )}">${esc(p.cta.label)}</a>
            <a class="btn btn-ghost btn-lg" href="${base}${esc(site.locale.path)}">${esc(
    p.cta.back
  )}</a>
          </div>
        </div>
      </div>
    </section>
  </main>

${footer()}

  <script src="${base}${versionedAsset('assets/js/main.js')}" defer></script>
</body>
</html>
`;
};

/* ----------------------------------------------------------- trang Nexus */

const nexusPage = () => {
  const p = site.nexusPage;

  const terminalSteps = p.hero.terminal.steps
    .map(
      (step) => `            <li class="is-${esc(step.state)}">
              <span class="nx-terminal-state" aria-hidden="true"></span>
              <code>${esc(step.tool)}</code>
              <span>${esc(step.text)}</span>
            </li>`
    )
    .join('\n');

  const capabilityCards = p.capabilities.items
    .map(
      (item) => `          <article class="card nx-capability reveal">
            <header>
              <span class="nx-capability-icon" aria-hidden="true">${esc(item.icon)}</span>
              <div>
                <h3>${esc(item.title)}</h3>
                <code>${esc(item.tools)}</code>
              </div>
            </header>
            <p>${esc(item.desc)}</p>
            <ul class="feature-list">
${item.points.map((point) => `              <li>${esc(point)}</li>`).join('\n')}
            </ul>
          </article>`
    )
    .join('\n');

  const flowCards = p.flows.items
    .map(
      (flow) => `          <article class="nx-flow-card reveal">
            <header>
              <span>${esc(flow.num)}</span>
              <div>
                <h3>${esc(flow.title)}</h3>
                <p>${esc(flow.summary)}</p>
              </div>
            </header>
            <ol>
${flow.steps
  .map(
    (step, index) => `              <li><span>${String(index + 1).padStart(2, '0')}</span>${esc(
      step
    )}</li>`
  )
  .join('\n')}
            </ol>
            <p class="nx-flow-outcome">${esc(flow.outcome)}</p>
          </article>`
    )
    .join('\n');

  const architectureLayers = p.architecture.layers
    .map(
      (layer, index) => `${
        index
          ? `            <div class="nx-arch-arrow" aria-hidden="true"><i></i></div>\n`
          : ''
      }            <article class="nx-arch-node nx-arch-${esc(layer.key.toLowerCase())}">
              <span class="nx-arch-key" aria-hidden="true">${esc(layer.key)}</span>
              <div>
                <p>${esc(layer.role)}</p>
                <h3>${esc(layer.title)}</h3>
                <span>${esc(layer.desc)}</span>
              </div>
            </article>`
    )
    .join('\n');

  const developerFeatures = p.developer.features
    .map(
      (feature) => `              <li>
                <span aria-hidden="true">${esc(feature.icon)}</span>
                <div><strong>${esc(feature.title)}</strong><small>${esc(feature.desc)}</small></div>
              </li>`
    )
    .join('\n');

  const statusColumn = (status, extraClass) => `          <article class="nx-status-card ${extraClass} reveal">
            <p>${esc(status.tag)}</p>
            <h3>${esc(status.title)}</h3>
            <ul class="feature-list">
${status.items.map((item) => `              <li>${esc(item)}</li>`).join('\n')}
            </ul>
          </article>`;

  return `<!DOCTYPE html>
<html lang="${esc(site.locale.code)}" data-theme="dark">
<head>
${head()}
</head>
<body>
${notice()}
${header()}

  <main id="main">
    <section class="nx-hero" id="top">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="shell nx-hero-inner">
        <div class="nx-hero-copy">
          <a class="ech-back" href="${base}${esc(site.locale.path)}">← ${esc(p.hero.back)}</a>
          <p class="eyebrow reveal">${esc(p.hero.eyebrow)}</p>
          <h1 class="nx-title reveal">${esc(p.hero.title)}</h1>
          <p class="nx-lead reveal">${esc(p.hero.lead)}</p>
          <div class="hero-actions reveal">
            <a class="btn btn-primary" href="${esc(p.hero.primaryCta.href)}">${esc(
    p.hero.primaryCta.label
  )}</a>
            <a class="btn btn-ghost" href="${esc(p.hero.secondaryCta.href)}">${esc(
    p.hero.secondaryCta.label
  )}</a>
          </div>
        </div>

        <div class="nx-terminal reveal">
          <div class="nx-terminal-bar">
            <span aria-hidden="true"><i></i><i></i><i></i></span>
            <strong>${esc(p.hero.terminal.label)}</strong>
          </div>
          <p class="nx-terminal-context"><span>›</span> ${esc(p.hero.terminal.context)}</p>
          <ol>
${terminalSteps}
          </ol>
          <p class="nx-terminal-result">${esc(p.hero.terminal.result)}</p>
        </div>
      </div>
    </section>

    <section class="section nx-section" id="${esc(p.capabilities.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.capabilities.eyebrow)}</p>
          <h2>${esc(p.capabilities.title)}</h2>
          <p class="lead">${esc(p.capabilities.lead)}</p>
        </div>
        <div class="nx-capability-grid">
${capabilityCards}
        </div>
      </div>
    </section>

    <section class="section nx-section nx-flow-section" id="${esc(p.flows.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.flows.eyebrow)}</p>
          <h2>${esc(p.flows.title)}</h2>
          <p class="lead">${esc(p.flows.lead)}</p>
        </div>
        <div class="nx-flow-grid">
${flowCards}
        </div>
        <p class="section-bridge nx-flow-note reveal">${esc(p.flows.note)}</p>
      </div>
    </section>

    <section class="section nx-section nx-architecture" id="${esc(p.architecture.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.architecture.eyebrow)}</p>
          <h2>${esc(p.architecture.title)}</h2>
          <p class="lead">${esc(p.architecture.lead)}</p>
        </div>
        <div class="nx-architecture-board reveal">
          <div class="nx-arch-machine">
${architectureLayers}
          </div>
          <div class="nx-arch-human-link" aria-hidden="true"><i></i><span>${esc(
            p.architecture.signal
          )}</span></div>
          <article class="nx-arch-node nx-arch-v">
            <span class="nx-arch-key" aria-hidden="true">${esc(p.architecture.human.key)}</span>
            <div>
              <p>${esc(p.architecture.human.role)}</p>
              <h3>${esc(p.architecture.human.title)}</h3>
              <span>${esc(p.architecture.human.desc)}</span>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section nx-section nx-developer" id="${esc(p.developer.id)}">
      <div class="shell nx-developer-grid">
        <div class="nx-developer-copy reveal">
          <p class="eyebrow">${esc(p.developer.eyebrow)}</p>
          <h2>${esc(p.developer.title)}</h2>
          <p class="lead">${esc(p.developer.lead)}</p>
          <div class="nx-example-row">
${p.developer.examples.map((item) => `            <span>${esc(item)}</span>`).join('\n')}
          </div>
        </div>
        <div class="nx-vscode reveal">
          <header><span aria-hidden="true">⌘</span><strong>${esc(p.developer.windowTitle)}</strong></header>
          <ul>
${developerFeatures}
          </ul>
        </div>
      </div>
    </section>

    <section class="section nx-section nx-status" id="${esc(p.status.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.status.eyebrow)}</p>
          <h2>${esc(p.status.title)}</h2>
          <p class="lead">${esc(p.status.lead)}</p>
        </div>
        <div class="nx-status-grid">
${statusColumn(p.status.current, 'is-current')}
${statusColumn(p.status.next, 'is-next')}
        </div>
        <p class="nx-status-note reveal">${esc(p.status.note)}</p>
      </div>
    </section>

    <section class="section section-cta" id="${esc(p.cta.id)}">
      <div class="shell">
        <div class="cta-box reveal">
          <h2>${esc(p.cta.title)}</h2>
          <p class="lead">${esc(p.cta.lead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${esc(
              mailto(site.brand.emails[0], p.cta.subject)
            )}">${esc(p.cta.label)}</a>
            <a class="btn btn-ghost btn-lg" href="${base}${esc(site.locale.path)}">${esc(
    p.cta.back
  )}</a>
          </div>
        </div>
      </div>
    </section>
  </main>

${footer()}

  <script src="${base}${versionedAsset('assets/js/main.js')}" defer></script>
</body>
</html>
`;
};

/* ----------------------------------------------------------- trang Orbit */

const orbitPage = () => {
  const p = site.orbitPage;

  const hybridCards = p.hybrid.items
    .map(
      (item) => `          <article class="card or-hybrid-card reveal">
            <span aria-hidden="true">${esc(item.icon)}</span>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
          </article>`
    )
    .join('\n');

  const journeySteps = p.journey.steps
    .map(
      (step) => `          <article class="or-journey-step reveal">
            <header><span>${esc(step.num)}</span><code>${esc(step.tag)}</code></header>
            <h3>${esc(step.title)}</h3>
            <p>${esc(step.desc)}</p>
          </article>`
    )
    .join('\n');

  const exampleOutputs = p.example.outputs
    .map(
      (output) => `              <li>
                <span aria-hidden="true">${esc(output.key)}</span>
                <div><strong>${esc(output.title)}</strong><small>${esc(output.desc)}</small></div>
              </li>`
    )
    .join('\n');

  const agentNodes = p.agent.nodes
    .map(
      (node, index) => `${
        index ? '            <span class="or-agent-arrow" aria-hidden="true">→</span>\n' : ''
      }            <article>
              <span aria-hidden="true">${esc(node.key)}</span>
              <div><strong>${esc(node.title)}</strong><small>${esc(node.desc)}</small></div>
            </article>`
    )
    .join('\n');

  const statusColumn = (status, extraClass) => `          <article class="or-status-card ${extraClass} reveal">
            <p>${esc(status.tag)}</p>
            <h3>${esc(status.title)}</h3>
            <ul class="feature-list">
${status.items.map((item) => `              <li>${esc(item)}</li>`).join('\n')}
            </ul>
          </article>`;

  return `<!DOCTYPE html>
<html lang="${esc(site.locale.code)}" data-theme="dark">
<head>
${head()}
</head>
<body>
${notice()}
${header()}

  <main id="main">
    <section class="or-hero" id="top">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="shell or-hero-inner">
        <div class="or-hero-copy">
          <a class="ech-back" href="${base}${esc(site.locale.path)}">← ${esc(p.hero.back)}</a>
          <p class="eyebrow reveal">${esc(p.hero.eyebrow)}</p>
          <h1 class="or-title reveal">${esc(p.hero.title)}</h1>
          <p class="or-lead reveal">${esc(p.hero.lead)}</p>
          <div class="hero-actions reveal">
            <a class="btn btn-primary" href="${esc(p.hero.primaryCta.href)}">${esc(
    p.hero.primaryCta.label
  )}</a>
            <a class="btn btn-ghost" href="${esc(p.hero.secondaryCta.href)}">${esc(
    p.hero.secondaryCta.label
  )}</a>
          </div>
        </div>

        <div class="or-hybrid-visual reveal">
          <header><span aria-hidden="true">O</span><strong>${esc(p.hero.visual.label)}</strong></header>
          <div class="or-request"><span>${esc(p.hero.visual.request)}</span><i aria-hidden="true"></i></div>
          <div class="or-api">${esc(p.hero.visual.api)}</div>
          <div class="or-route" aria-hidden="true"><i></i><i></i></div>
          <div class="or-runtime-grid">
            <div class="is-cobol"><span>01</span><strong>${esc(p.hero.visual.cobol)}</strong></div>
            <div class="is-rust"><span>02</span><strong>${esc(p.hero.visual.rust)}</strong></div>
          </div>
          <p>${esc(p.hero.visual.caption)}</p>
        </div>
      </div>
    </section>

    <section class="section or-section" id="${esc(p.hybrid.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.hybrid.eyebrow)}</p>
          <h2>${esc(p.hybrid.title)}</h2>
          <p class="lead">${esc(p.hybrid.lead)}</p>
        </div>
        <div class="or-hybrid-grid">
${hybridCards}
        </div>
      </div>
    </section>

    <section class="section or-section or-journey" id="${esc(p.journey.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.journey.eyebrow)}</p>
          <h2>${esc(p.journey.title)}</h2>
          <p class="lead">${esc(p.journey.lead)}</p>
        </div>
        <div class="or-journey-grid">
${journeySteps}
        </div>
        <p class="section-bridge or-journey-note reveal">${esc(p.journey.note)}</p>
      </div>
    </section>

    <section class="section or-section or-example" id="${esc(p.example.id)}">
      <div class="shell or-example-grid">
        <div class="or-example-copy reveal">
          <p class="eyebrow">${esc(p.example.eyebrow)}</p>
          <h2>${esc(p.example.title)}</h2>
          <p class="lead">${esc(p.example.lead)}</p>
          <p>${esc(p.example.copy)}</p>
        </div>
        <div class="or-allocation reveal">
          <div class="or-allocation-input"><span>${esc(p.example.input)}</span></div>
          <div class="or-allocation-line" aria-hidden="true"><i></i></div>
          <div class="or-allocation-engine"><span>O</span><strong>${esc(p.example.engine)}</strong></div>
          <div class="or-allocation-line is-split" aria-hidden="true"><i></i></div>
          <ul>
${exampleOutputs}
          </ul>
        </div>
      </div>
    </section>

    <section class="section or-section or-agent" id="${esc(p.agent.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.agent.eyebrow)}</p>
          <h2>${esc(p.agent.title)}</h2>
          <p class="lead">${esc(p.agent.lead)}</p>
        </div>
        <div class="or-agent-chain reveal">
${agentNodes}
        </div>
        <div class="or-skill-row reveal">
          <strong>${esc(p.agent.skillsLabel)}</strong>
${p.agent.skills.map((skill) => `          <span>${esc(skill)}</span>`).join('\n')}
        </div>
      </div>
    </section>

    <section class="section or-section or-status" id="${esc(p.status.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.status.eyebrow)}</p>
          <h2>${esc(p.status.title)}</h2>
          <p class="lead">${esc(p.status.lead)}</p>
        </div>
        <div class="or-status-grid">
${statusColumn(p.status.foundation, 'is-foundation')}
${statusColumn(p.status.direction, 'is-direction')}
        </div>
        <p class="or-status-note reveal">${esc(p.status.note)}</p>
      </div>
    </section>

    <section class="section section-cta" id="${esc(p.cta.id)}">
      <div class="shell">
        <div class="cta-box reveal">
          <h2>${esc(p.cta.title)}</h2>
          <p class="lead">${esc(p.cta.lead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${esc(
              mailto(site.brand.emails[0], p.cta.subject)
            )}">${esc(p.cta.label)}</a>
            <a class="btn btn-ghost btn-lg" href="${base}${esc(site.locale.path)}">${esc(
    p.cta.back
  )}</a>
          </div>
        </div>
      </div>
    </section>
  </main>

${footer()}

  <script src="${base}${versionedAsset('assets/js/main.js')}" defer></script>
</body>
</html>
`;
};

/* ------------------------------------------------------------ trang Base */

const modelPage = () => {
  const p = site.modelPage;
  const cards = (items) => items
    .map(
      (item, i) => `          <article class="card model-capability-card reveal">
            <div class="model-capability-top"><span class="model-icon">${modelIcon(item.icon)}</span><span class="model-card-number" aria-hidden="true">${String(i + 1).padStart(2, '0')}</span></div>
            <h3>${esc(item.title)}</h3>
            <p>${esc(item.desc)}</p>
          </article>`
    )
    .join('\n');
  const capabilities = cards(p.capabilities.items);
  const flow = cards(p.flow.items);

  return `<!DOCTYPE html>
<html lang="${esc(site.locale.code)}" data-theme="dark">
<head>
${head()}
</head>
<body class="model-body">
${notice()}
${header()}

  <main id="main" class="model-page">
    <section class="model-hero" id="top">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-grid-lines" aria-hidden="true"></div>
      <div class="shell">
        <div class="model-hero-copy">
          <a class="ech-back" href="${base}${esc(site.locale.path)}">← ${esc(p.hero.back)}</a>
          <p class="eyebrow reveal">${esc(p.hero.eyebrow)}</p>
          <h1 class="model-title reveal">${esc(p.hero.title)}<span>${esc(p.hero.emphasis)}</span></h1>
          <p class="model-lead reveal">${esc(p.hero.lead)}</p>
          <div class="hero-actions reveal">
            <a class="btn btn-primary" href="${esc(p.hero.primaryCta.href)}">${esc(
    p.hero.primaryCta.label
  )}</a>
            <a class="btn btn-ghost" href="${esc(p.hero.secondaryCta.href)}">${esc(
    p.hero.secondaryCta.label
  )}</a>
          </div>
          <ul class="model-highlights reveal">
${p.hero.highlights.map((text) => `            <li><span aria-hidden="true">✓</span>${esc(text)}</li>`).join('\n')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section model-section" id="${esc(p.architecture.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.architecture.eyebrow)}</p>
          <h2>${esc(p.architecture.title)}</h2>
          <p class="lead">${esc(p.architecture.lead)}</p>
        </div>
${modelDiagram(p.architecture.diagram, esc)}
      </div>
    </section>

    <section class="section model-section" id="${esc(p.flow.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.flow.eyebrow)}</p>
          <h2>${esc(p.flow.title)}</h2>
          <p class="lead">${esc(p.flow.lead)}</p>
        </div>
        <div class="model-capability-grid">
${flow}
        </div>
      </div>
    </section>

    <section class="section model-section model-capabilities" id="${esc(p.capabilities.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.capabilities.eyebrow)}</p>
          <h2>${esc(p.capabilities.title)}</h2>
          <p class="lead">${esc(p.capabilities.lead)}</p>
        </div>
        <div class="model-capability-grid">
${capabilities}
        </div>
      </div>
    </section>

    <section class="section model-section model-performance" id="${esc(p.value.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.value.eyebrow)}</p>
          <h2>${esc(p.value.title)}</h2>
        </div>
        <div class="model-performance-grid">
${[p.value.business, p.value.status].map((block, i) => `          <article class="model-performance-card reveal">
            <span class="model-icon">${modelIcon(i === 0 ? 'capacity' : 'activity')}</span>
            <p class="eyebrow">${esc(block.label)}</p>
            <h3>${esc(block.title)}</h3>
            <p>${esc(block.desc)}</p>
            <ul class="feature-list">
${block.points.map((point) => `              <li>${esc(point)}</li>`).join('\n')}
            </ul>
          </article>`).join('\n')}
        </div>
        <p class="model-note reveal">${esc(p.value.note)}</p>
      </div>
    </section>

    <section class="section model-section" id="${esc(p.adoption.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.adoption.eyebrow)}</p>
          <h2>${esc(p.adoption.title)}</h2>
          <p class="lead">${esc(p.adoption.lead)}</p>
        </div>
        <div class="model-fit reveal">
          <div>
            <p class="eyebrow">${esc(p.adoption.fitLabel)}</p>
            <h3>${esc(p.adoption.fitTitle)}</h3>
            <p>${esc(p.adoption.fitDesc)}</p>
            <a class="model-text-link" href="${esc(p.adoption.faqLink.href)}">${esc(p.adoption.faqLink.label)} <span aria-hidden="true">↗</span></a>
          </div>
          <ul>
${p.adoption.needs.map((text) => `            <li><span aria-hidden="true">✓</span>${esc(text)}</li>`).join('\n')}
          </ul>
        </div>
      </div>
    </section>

    <section class="section model-section model-readiness" id="${esc(p.readiness.id)}">
      <div class="shell">
        <div class="section-head reveal">
          <p class="eyebrow">${esc(p.readiness.eyebrow)}</p>
          <h2>${esc(p.readiness.title)}</h2>
        </div>
        <div class="model-faq">
${p.readiness.items.map((item) => `          <details class="reveal">
            <summary>${esc(item.question)}</summary>
            <p>${esc(item.answer)}</p>
          </details>`).join('\n')}
        </div>
      </div>
    </section>

    <section class="section section-cta" id="${esc(p.cta.id)}">
      <div class="shell">
        <div class="cta-box reveal">
          <h2>${esc(p.cta.title)}</h2>
          <p class="lead">${esc(p.cta.lead)}</p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${esc(
              mailto(site.brand.emails[0], p.cta.subject)
            )}">${esc(p.cta.label)}</a>
            <a class="btn btn-ghost btn-lg" href="${base}${esc(site.locale.path)}">${esc(
    p.cta.back
  )}</a>
          </div>
        </div>
      </div>
    </section>
  </main>

${footer()}

  <script src="${base}${versionedAsset('assets/js/main.js')}" defer></script>
</body>
</html>
`;
};

/* ---------------------------------------------------------- diagram ---- */

/** Sơ đồ Strangler Fig, sinh riêng cho mỗi ngôn ngữ từ nhãn trong content. */
const diagram = () => {
  const d = site.strategy.diagram;
  const phaseX = [380, 600, 820, 1020];

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1120 420" width="1120" height="420"
     role="img" aria-label="${esc(d.alt)}">
  <defs>
    <linearGradient id="legacy" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#8FA3BF" stop-opacity=".55"/>
      <stop offset="1" stop-color="#8FA3BF" stop-opacity=".18"/>
    </linearGradient>
    <linearGradient id="modern" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#64FFDA" stop-opacity=".2"/>
      <stop offset="1" stop-color="#64FFDA" stop-opacity=".85"/>
    </linearGradient>
    <style>
      .lbl   { font: 600 15px 'Inter', system-ui, sans-serif; fill: #E6EDF7; }
      .small { font: 500 12px 'Inter', system-ui, sans-serif; fill: #93A7C4; }
      .tag   { font: 700 12px 'JetBrains Mono', ui-monospace, monospace; fill: #64FFDA; letter-spacing: .08em; }
      .phase { font: 700 13px 'Inter', system-ui, sans-serif; fill: #FFBE6B; }
      .box   { fill: rgba(255,255,255,.04); stroke: rgba(136,173,214,.28); }
    </style>
  </defs>

  <rect width="1120" height="420" rx="18" fill="#0A192F"/>

  <rect class="box" x="16" y="150" width="150" height="110" rx="14"/>
  <text class="lbl" x="91" y="196" text-anchor="middle">${esc(d.channels[0])}</text>
  <text class="small" x="91" y="218" text-anchor="middle">${esc(d.channels[1])}</text>

  <rect x="206" y="120" width="120" height="170" rx="14" fill="rgba(100,255,218,.08)" stroke="#64FFDA" stroke-opacity=".55"/>
  <text class="tag" x="266" y="188" text-anchor="middle">${esc(d.facade[0])}</text>
  <text class="small" x="266" y="210" text-anchor="middle">${esc(d.facade[1])}</text>
  <text class="small" x="266" y="228" text-anchor="middle">${esc(d.facade[2])}</text>

  <path d="M166 205 H206" stroke="#8FA3BF" stroke-opacity=".6" stroke-width="2"/>
  <path d="M198 199 l10 6 -10 6 z" fill="#8FA3BF" fill-opacity=".8"/>

  <path d="M326 130 C 560 130, 720 150, 1010 176 L1010 250 C 720 254, 560 268, 326 282 Z" fill="url(#legacy)"/>
  <path d="M326 282 C 560 300, 720 320, 1010 336 L1010 262 C 720 258, 560 288, 326 282 Z" fill="url(#modern)"/>

  <text class="lbl" x="470" y="196">${esc(d.legacy[0])}</text>
  <text class="small" x="470" y="216">${esc(d.legacy[1])}</text>
  <text class="lbl" x="700" y="316" text-anchor="middle">${esc(d.modern[0])}</text>
  <text class="small" x="700" y="336" text-anchor="middle">${esc(d.modern[1])}</text>

  <rect class="box" x="1024" y="150" width="80" height="110" rx="14"/>
  <text class="tag" x="1064" y="200" text-anchor="middle">${esc(d.target[0])}</text>
  <text class="small" x="1064" y="220" text-anchor="middle">${esc(d.target[1])}</text>

  <path d="M326 384 H1080" stroke="rgba(136,173,214,.35)" stroke-width="1.5"/>
  <path d="M1072 379 l10 5 -10 5 z" fill="rgba(136,173,214,.6)"/>
  <g>
${d.phases
  .map(
    (label, i) =>
      `    <circle cx="${phaseX[i]}" cy="384" r="4" fill="#FFBE6B"/><text class="phase" x="${
        phaseX[i]
      }" y="368" text-anchor="middle">${esc(label)}</text>`
  )
  .join('\n')}
  </g>

  <text class="small" x="326" y="46">${esc(d.banner)}</text>
  <path d="M326 60 H1080" stroke="rgba(136,173,214,.2)" stroke-dasharray="4 6"/>
</svg>
`;
};

/* -------------------------------------------------------------- 404 --- */

/* GitHub Pages trả file này cho MỌI đường dẫn không tồn tại, kể cả dưới /en/,
   nên đường dẫn tài nguyên phải tính từ gốc site chứ không được tương đối. Một
   file phục vụ cả hai cây ngôn ngữ nên nội dung để song ngữ. */
const notFound = () => {
  const [first, ...rest] = locales;
  const block = (l) => `      <section class="nf-block" lang="${esc(l.locale.code)}">
        <h${l === first ? '1' : '2'}>${esc(l.notFound.title)}</h${l === first ? '1' : '2'}>
        <p>${esc(l.notFound.desc)}</p>
        <a class="btn ${l === first ? 'btn-primary' : 'btn-ghost'}" href="/${esc(
    l.locale.path
  )}">${esc(l.notFound.home)}</a>
      </section>`;

  return `<!DOCTYPE html>
<html lang="${esc(first.locale.code)}" data-theme="dark">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>404 — ${esc(first.brand.name)}</title>
  <meta name="robots" content="noindex" />
  <meta name="theme-color" content="${esc(first.seo.themeColor)}" />
  <link rel="icon" href="/assets/images/favicon.ico" sizes="any" />
  <link rel="stylesheet" href="/${versionedAsset('assets/css/fonts.css')}" />
  <link rel="stylesheet" href="/${versionedAsset('assets/css/style.css')}" />
  <script>
    (function () {
      var theme = null;
      try {
        theme = localStorage.getItem('benova-theme');
      } catch (e) {}
      if (!theme && window.matchMedia('(prefers-color-scheme: light)').matches) theme = 'light';
      if (theme) document.documentElement.setAttribute('data-theme', theme);
    })();
  </script>
</head>
<body>
  <main class="not-found">
    <div class="shell nf-inner">
      <p class="nf-code" aria-hidden="true">404</p>
${[first, ...rest].map(block).join('\n')}
    </div>
  </main>
</body>
</html>
`;
};

/* ------------------------------------------------------------ output --- */

/** Các trang dựng cho mỗi ngôn ngữ. slug rỗng là trang chủ. */
const pages = [
  { slug: '', render: page },
  { slug: 'nova/', render: modelPage },
  { slug: 'echelon/', render: echelonPage },
  { slug: 'nexus/', render: nexusPage },
  { slug: 'orbit/', render: orbitPage },
];

for (const locale of locales) {
  site = locale;

  for (const { slug, render } of pages) {
    pagePath = slug;
    const path = fullPath();
    // Độ sâu tính theo đường dẫn đầy đủ, nên /en/echelon/ trỏ đúng lên gốc.
    base = '../'.repeat(path.split('/').filter(Boolean).length);

    const dir = join(root, path);
    mkdirSync(dir, { recursive: true });

    const html = render();
    writeFileSync(join(dir, 'index.html'), html, 'utf-8');
    console.log(`✓ ${path}index.html (${(html.length / 1024).toFixed(1)} KB)`);
  }

  pagePath = '';
  base = '../'.repeat(locale.locale.path.split('/').filter(Boolean).length);
  writeFileSync(
    join(root, 'assets', 'images', `strangler-fig-${locale.locale.code}.svg`),
    diagram(),
    'utf-8'
  );
}

writeFileSync(join(root, '404.html'), notFound(), 'utf-8');
console.log('✓ 404.html');

/* ---------------------------------------------------------- sitemap --- */

const sitemapEntries = pages.flatMap(({ slug }) =>
  locales.map((l) => ({ locale: l, slug }))
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapEntries
  .map(
    ({ locale, slug }) => `  <url>
    <loc>${esc(new URL(locale.locale.path + slug, locale.seo.url).href)}</loc>
${locales
  .map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${esc(alt.locale.code)}" href="${esc(
        new URL(alt.locale.path + slug, alt.seo.url).href
      )}" />`
  )
  .join('\n')}
    <changefreq>monthly</changefreq>
    <priority>${locale === locales[0] && slug === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'sitemap.xml'), sitemap, 'utf-8');
console.log('✓ sitemap.xml');
