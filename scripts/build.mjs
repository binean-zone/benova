/**
 * BENOVA static site generator.
 *
 * Đọc content/vi.mjs và content/en.mjs rồi sinh ra hai trang tĩnh hoàn chỉnh —
 * không có runtime framework, không fetch dữ liệu ở client, crawler đọc được
 * ngay. Bản tiếng Việt ra index.html, bản tiếng Anh ra en/index.html.
 *
 *   node scripts/build.mjs
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import vi from '../content/vi.mjs';
import en from '../content/en.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Bản đầu tiên là ngôn ngữ mặc định, nằm ở gốc site. */
const locales = [vi, en];

/** site trỏ tới ngôn ngữ đang dựng; mọi hàm sinh HTML đọc từ đây. */
let site = vi;
/** Tiền tố đường dẫn từ trang hiện tại về gốc site, ví dụ '../' cho /en/. */
let base = '';

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const list = (items, render) => items.map(render).join('\n');

/* Địa chỉ đầu tiên là địa chỉ chính, dùng cho mọi nút CTA. */
const mailto = (address, subject) => `mailto:${address}?subject=${encodeURIComponent(subject)}`;

/** Đường dẫn tương đối từ trang đang dựng sang một ngôn ngữ khác. */
const localeHref = (target) => {
  const href = base + target.locale.path;
  return href === '' ? './' : href;
};

/* -------------------------------------------------------------- head --- */

const head = () => {
  const { seo, brand } = site;
  const canonical = new URL(site.locale.path, seo.url).href;
  const ogImageFile = `assets/images/og-benova-${site.locale.code}.png`;
  const ogImage = new URL(ogImageFile, seo.url).href;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: brand.name,
    applicationCategory: 'BusinessApplication',
    description: seo.description,
    url: canonical,
    operatingSystem: 'Linux, Kubernetes, Cloud, On-premise',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Tư vấn và POC theo phạm vi' },
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
        new URL(l.locale.path, seo.url).href
      )}" />`
  )
  .join('\n')}
  <link rel="alternate" hreflang="x-default" href="${esc(new URL(locales[0].locale.path, seo.url).href)}" />

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
  <link rel="stylesheet" href="${base}assets/css/fonts.css" />
  <link rel="stylesheet" href="${base}assets/css/style.css" />
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

const notice = () => `  <div class="site-notice" role="status">
    <div class="shell notice-inner">
      <span class="notice-dot" aria-hidden="true"></span>
      <p>${esc(site.notice.text)}</p>
      <a href="${esc(mailto(site.brand.emails[0], 'BENOVA - Lien he'))}">${esc(site.notice.linkLabel)}</a>
    </div>
  </div>`;

const header = () => `  <a class="skip-link" href="#main">${esc(site.ui.skipToContent)}</a>
  <header class="site-header" id="site-header">
    <div class="shell header-inner">
      <a class="brand" href="#top" aria-label="${esc(site.brand.name)} — về đầu trang">
        <span class="brand-mark" aria-hidden="true">
          <img class="logo-dark" src="${base}assets/images/binean-dark.svg" alt="" width="60" height="60" />
          <img class="logo-light" src="${base}assets/images/binean.svg" alt="" width="60" height="60" />
        </span>
        <span class="brand-name">${esc(site.brand.name)}</span>
      </a>

      <nav class="site-nav" id="site-nav" aria-label="${esc(site.ui.mainNav)}">
        <ul>
${list(site.nav, (item) => `          <li><a href="${esc(item.href)}">${esc(item.label)}</a></li>`)}
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
        <a class="btn btn-primary btn-sm header-cta" href="#${esc(site.cta.id)}">${esc(site.ui.headerCta)}</a>
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

  // Hành tinh to nhỏ chênh nhau rõ rệt; Engine là bộ khung nên to nhất.
  const SCALES = [1.24, 0.88, 1.12, 0.8, 1];
  // Chu kỳ quỹ đạo trong cùng, tính bằng giây.
  const BASE_PERIOD = 19;
  // Mặt phẳng quỹ đạo: mỗi hành tinh một hướng nút lên và một độ nghiêng riêng,
  // nên không cái nào cùng mặt phẳng với cái nào.
  const NODES = [-26, 12, -7, 31, -16];
  const INCLINATIONS = [-9, 6, -3, 11, -6];

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
  (pain) => `          <article class="card pain-card reveal">
            <span class="card-icon" aria-hidden="true">${esc(pain.icon)}</span>
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
            alt="Sơ đồ chiến lược Strangler Fig: các luồng nghiệp vụ mới đi qua Orbit vào service Rust và AI, các luồng còn lại vẫn vào Ingenium COBOL, tỉ lệ dịch chuyển dần theo thời gian."
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

const engineCard = (engine) => `          <article class="card engine-card reveal">
            <header class="agent-head">
              <span class="agent-key" aria-hidden="true">${esc(engine.key)}</span>
              <div>
                <h3>${esc(engine.name)}</h3>
                <p class="agent-role">${esc(engine.role)}</p>
              </div>
              <span class="status status-core">${esc(engine.status)}</span>
            </header>
            <p class="agent-desc">${esc(engine.desc)}</p>
            <ul class="tag-row">
${list(engine.highlights, (h) => `              <li>${esc(h)}</li>`)}
            </ul>
            <div class="sub-grid">
${list(
  engine.children,
  (child) => `              <div class="sub-card">
                <span class="sub-icon" aria-hidden="true">${esc(child.icon)}</span>
                <h4>${esc(child.title)}</h4>
                <p>${esc(child.desc)}</p>
              </div>`
)}
            </div>
          </article>`;

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
        <div class="agent-grid">
${engineCard(e.engine)}
${list(e.agents, (agent, index) =>
  // Card cuối được kéo rộng khi nó lẻ ra một mình ở hàng 3 cột.
  agentCard(agent, index === e.agents.length - 1 && e.agents.length % 3 === 1)
)}
        </div>
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
  (item) => `          <article class="card benefit-card reveal">
            <span class="card-icon" aria-hidden="true">${esc(item.icon)}</span>
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
${list(col.links, (l) => `          <li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)}
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
${list(f.legal, (l) => `        <li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)}
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
<body>
${notice()}
${header()}

  <main id="main">
${hero()}

${problem()}

${ecosystem()}

${strategy()}

${benefits()}

${cta()}
  </main>

${footer()}

  <script src="${base}assets/js/main.js" defer></script>
</body>
</html>
`;

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
  <link rel="stylesheet" href="/assets/css/fonts.css" />
  <link rel="stylesheet" href="/assets/css/style.css" />
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

for (const locale of locales) {
  site = locale;
  base = '../'.repeat(locale.locale.path.split('/').filter(Boolean).length);

  const dir = join(root, locale.locale.path);
  mkdirSync(dir, { recursive: true });

  const html = page();
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
  console.log(`✓ ${locale.locale.path}index.html (${(html.length / 1024).toFixed(1)} KB)`);

  writeFileSync(
    join(root, 'assets', 'images', `strangler-fig-${locale.locale.code}.svg`),
    diagram(),
    'utf-8'
  );
}

writeFileSync(join(root, '404.html'), notFound(), 'utf-8');
console.log('✓ 404.html');

/* ---------------------------------------------------------- sitemap --- */

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${locales
  .map(
    (l) => `  <url>
    <loc>${esc(new URL(l.locale.path, l.seo.url).href)}</loc>
${locales
  .map(
    (alt) =>
      `    <xhtml:link rel="alternate" hreflang="${esc(alt.locale.code)}" href="${esc(
        new URL(alt.locale.path, alt.seo.url).href
      )}" />`
  )
  .join('\n')}
    <changefreq>monthly</changefreq>
    <priority>${l === locales[0] ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

writeFileSync(join(root, 'sitemap.xml'), sitemap, 'utf-8');
console.log('✓ sitemap.xml');
