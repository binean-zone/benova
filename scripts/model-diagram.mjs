const paths = {
  routing: '<rect x="2" y="9" width="5" height="6" rx="1"/><rect x="17" y="2" width="5" height="6" rx="1"/><rect x="17" y="16" width="5" height="6" rx="1"/><path d="M7 12h5V5h5m-5 7v7h5"/>',
  shield: '<path d="m12 2 8 3v6c0 5-4 8-8 11-4-3-8-6-8-11V5z"/><rect x="9" y="10" width="6" height="5" rx="1"/><path d="M10 10V8a2 2 0 0 1 4 0v2"/>',
  link: '<path d="m10 13 4-4m-6 7-1 1a4 4 0 0 1-6-6l4-4a4 4 0 0 1 6 0m2 1 1-1a4 4 0 0 1 6 6l-4 4a4 4 0 0 1-6 0"/>',
  capacity: '<rect x="3" y="14" width="4" height="7" rx="1"/><rect x="10" y="9" width="4" height="12" rx="1"/><rect x="17" y="3" width="4" height="18" rx="1"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>',
  activity: '<path d="M2 12h5l3-8 4 16 3-8h5"/>',
  control: '<path d="M5 3v7m0 4v7M12 3v12m0 4v2M19 3v2m0 4v12"/><circle cx="5" cy="12" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="19" cy="7" r="2"/>',
  code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18"/>',
  application: '<rect x="2" y="3" width="20" height="15" rx="3"/><path d="M8 22h8m-4-4v4M2 8h20m-15-2h.01M10 6h.01"/>',
  core: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 9h18M9 9v12"/>',
  spark: '<path d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16v4m-2-2h4"/>',
};

export const modelIcon = (name) => {
  if (!paths[name]) throw new Error(`Unknown model icon: ${name}`);
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};

/**
 * Sơ đồ tổng quan NOVA. Dữ liệu `d`:
 *   users, backend               — dải ngang (eyebrow, title, lines)
 *   vista, orbit, aster          — ba thành phần chính (eyebrow, title, lines)
 *   later: { label, nexus, echelon, aira } — giai đoạn sau, vẽ nét đứt
 */
export function modelDiagram(d, esc) {
  const W = 1120;
  const COL = 340;
  const GAP = 50;
  const LINK = 36;

  const graphic = (mobile) => {
    const suffix = mobile ? 'mobile' : 'desktop';
    const width = mobile ? 360 : W;
    const nodes = [];
    const links = [];
    let height = 0;

    const icon = (name, x, y) => `<g transform="translate(${x} ${y})">
          <rect class="model-map-icon-bg" width="44" height="44" rx="13"/>
          <g transform="translate(10 10)" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[name]}</g>
        </g>`;

    /* Thành phần chính: icon, nhãn, tên và ba dòng tính năng. */
    const product = (key, x, y, w, h, ic) => {
      const n = d[key];
      nodes.push(`<g transform="translate(${x} ${y})" class="model-map-node is-product">
        <rect class="model-map-panel" width="${w}" height="${h}" rx="22"/>
        <rect class="model-map-inset" x="6" y="6" width="${w - 12}" height="${h - 12}" rx="17"/>
        ${icon(ic, 24, 24)}
        <text class="model-map-eyebrow" x="24" y="94">${esc(n.eyebrow)}</text>
        <text class="model-map-title" x="24" y="125">${esc(n.title)}</text>
        ${n.lines.map((line, i) => `<g transform="translate(24 ${149 + i * 44})">
          <rect class="model-map-feature" width="${w - 48}" height="35" rx="9"/>
          <circle class="model-map-dot" cx="16" cy="17.5" r="3"/>
          <text class="model-map-body" x="30" y="22">${esc(line)}</text>
        </g>`).join('\n')}
      </g>`);
    };

    /* Dải ngang: desktop xếp các dòng thành viên nang bên phải, mobile xếp dọc. */
    const band = (key, y, ic, cls = '') => {
      const n = d[key];
      if (mobile) {
        const h = 108 + n.lines.length * 22;
        nodes.push(`<g transform="translate(20 ${y})" class="model-map-node${cls}">
        <rect class="model-map-panel" width="320" height="${h}" rx="18"/>
        ${icon(ic, 20, 18).replace('width="44" height="44"', 'width="36" height="36"')}
        <text class="model-map-eyebrow" x="20" y="${72 - 6}">${esc(n.eyebrow)}</text>
        <text class="model-map-title" x="20" y="${72 + 14}">${esc(n.title)}</text>
        ${n.lines.map((line, i) => `<text class="model-map-body" x="20" y="${72 + 38 + i * 22}">${esc(line)}</text>`).join('\n')}
      </g>`);
        return h;
      }
      const h = 64;
      const pillW = Math.floor((W - 360 - 24 - 12 * (n.lines.length - 1)) / n.lines.length);
      nodes.push(`<g transform="translate(0 ${y})" class="model-map-node${cls}">
        <rect class="model-map-panel" width="${W}" height="${h}" rx="18"/>
        <g transform="translate(16 10)">
          <rect class="model-map-icon-bg" width="44" height="44" rx="13"/>
          <g transform="translate(10 10)" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[ic]}</g>
        </g>
        <text class="model-map-eyebrow" x="76" y="26">${esc(n.eyebrow)}</text>
        <text class="model-map-title" x="76" y="49">${esc(n.title)}</text>
        ${n.lines.map((line, i) => `<g transform="translate(${360 + i * (pillW + 12)} 16)">
          <rect class="model-map-feature" width="${pillW}" height="32" rx="9"/>
          <text class="model-map-body" x="14" y="21">${esc(line)}</text>
        </g>`).join('\n')}
      </g>`);
      return h;
    };

    const connector = (x1, y1, x2, y2) =>
      links.push(`<path class="model-map-connection" d="M${x1} ${y1}L${x2} ${y2}" marker-start="url(#model-arrow-${suffix})" marker-end="url(#model-arrow-${suffix})"/>`);

    /* Giai đoạn sau: khung nét đứt chứa Nexus, Echelon và Aira. */
    const later = (y) => {
      const items = [d.later.nexus, d.later.echelon, d.later.aira];
      const ic = ['code', 'activity', 'spark'];
      const maxLines = Math.max(...items.map((n) => n.lines.length));
      // Desktop: ba ô cùng chiều cao; mobile: mỗi ô theo số dòng của nó.
      const nodeH = (n) => 74 + (mobile ? n.lines.length : maxLines) * 22;
      const inner = mobile ? items.reduce((s, n) => s + nodeH(n) + 12, 0) : nodeH(items[0]) + 12;
      // Nhãn dài được tách theo dấu "·" thành nhiều dòng trên mobile để không tràn khung.
      const labelLines = mobile ? d.later.label.split(' · ') : [d.later.label];
      const headerH = mobile ? 14 + labelLines.length * 16 + 8 : 44;
      const total = headerH + inner + 4;
      const x0 = mobile ? 20 : 0;
      const w0 = mobile ? 320 : W;
      let out = `<g transform="translate(${x0} ${y})" class="model-map-node is-later-box">
        <rect class="model-map-later-box" width="${w0}" height="${total}" rx="22"/>
        ${labelLines.map((line, i) => `<text class="model-map-eyebrow" x="24" y="${27 + i * 16}">${esc(line)}</text>`).join('\n')}`;
      let cy = headerH;
      items.forEach((n, i) => {
        const nw = mobile ? w0 - 32 : Math.floor((w0 - 48 - 16 * (items.length - 1)) / items.length);
        const nx = mobile ? 16 : 24 + i * (nw + 16);
        const h = nodeH(n);
        out += `<g transform="translate(${nx} ${cy})" class="model-map-node is-later">
          <rect class="model-map-panel" width="${nw}" height="${h}" rx="16"/>
          <g transform="translate(14 14) scale(.82)">
            <rect class="model-map-icon-bg" width="44" height="44" rx="13"/>
            <g transform="translate(10 10)" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${paths[ic[i]]}</g>
          </g>
          <text class="model-map-eyebrow" x="62" y="28">${esc(n.eyebrow)}</text>
          <text class="model-map-title" x="62" y="50">${esc(n.title)}</text>
          ${n.lines.map((line, j) => `<text class="model-map-body" x="16" y="${76 + j * 22}">${esc(line)}</text>`).join('\n')}
        </g>`;
        if (mobile) cy += h + 12;
      });
      out += '</g>';
      nodes.push(out);
      return total;
    };

    if (!mobile) {
      let y = band('users', 0, 'user');
      const rowB = y + LINK + 0;
      const productH = 292;
      const xs = [0, COL + GAP, 2 * (COL + GAP)];
      connector(xs[0] + COL / 2, y, xs[0] + COL / 2, rowB);
      connector(xs[1] + COL / 2, y, xs[1] + COL / 2, rowB);
      product('vista', xs[0], rowB, COL, productH, 'layout');
      product('orbit', xs[1], rowB, COL, productH, 'routing');
      product('aster', xs[2], rowB, COL, productH, 'application');
      const mid = rowB + 154;
      connector(xs[0] + COL, mid, xs[1], mid);
      y = rowB + productH;
      connector(xs[1] + COL / 2, y, xs[1] + COL / 2, y + LINK);
      y += LINK;
      y += band('backend', y, 'core');
      y += LINK;
      y += later(y);
      height = y;
    } else {
      let y = 12;
      const chain = (key, ic) => {
        product(key, 20, y, 320, 292, ic);
        y += 292;
      };
      y += band('users', y, 'user');
      connector(180, y, 180, y + LINK); y += LINK;
      chain('vista', 'layout');
      connector(180, y, 180, y + LINK); y += LINK;
      chain('orbit', 'routing');
      connector(180, y, 180, y + LINK); y += LINK;
      y += band('backend', y, 'core');
      y += LINK;
      chain('aster', 'application');
      y += LINK;
      y += later(y);
      height = y + 12;
    }

    return `<svg class="model-map-svg is-${suffix}" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="model-map-title-${suffix} model-map-desc-${suffix}">
      <title id="model-map-title-${suffix}">${esc(d.label)}</title>
      <desc id="model-map-desc-${suffix}">${esc(d.description)}</desc>
      <defs>
        <marker id="model-arrow-${suffix}" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="m2 2 4 3-4 3" fill="none" stroke="currentColor" stroke-width="1.5"/></marker>
      </defs>
      ${links.join('\n')}
      ${nodes.join('\n')}
    </svg>`;
  };

  return `<figure class="model-map reveal">
    ${graphic(false)}
    ${graphic(true)}
    <figcaption>${esc(d.caption)}</figcaption>
  </figure>`;
}
