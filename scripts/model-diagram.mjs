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
  vista: '<circle cx="12" cy="12" r="10"/><path d="M 11.46 4.63 L 11.75 4.74 L 12.02 4.86 L 12.28 4.99 L 12.54 5.13 L 12.78 5.28 L 13.02 5.44 L 13.24 5.61 L 13.45 5.78 L 13.65 5.96 L 13.84 6.15 L 14.02 6.34 L 14.19 6.54 L 14.34 6.74 L 14.48 6.94 L 14.61 7.15 L 14.73 7.36 L 14.84 7.58 L 14.94 7.79 L 15.02 8.01 L 15.09 8.22 L 15.15 8.44 L 15.20 8.65 L 15.23 8.87 L 15.26 9.08 L 15.27 9.29 L 15.28 9.50 L 15.27 9.71 L 15.25 9.91 L 15.22 10.10 L 15.19 10.30 L 15.14 10.49 L 15.08 10.67 L 15.01 10.85 L 14.93 11.02 L 14.85 11.19 L 14.75 11.34 L 14.65 11.50 L 14.54 11.64 L 14.42 11.78 L 14.30 11.92 L 14.30 11.92 L 14.47 11.86 L 14.65 11.77 L 14.82 11.68 L 14.98 11.56 L 15.14 11.43 L 15.30 11.29 L 15.45 11.13 L 15.59 10.96 L 15.72 10.77 L 15.85 10.57 L 15.96 10.36 L 16.07 10.14 L 16.16 9.90 L 16.24 9.66 L 16.30 9.40 L 16.35 9.14 L 16.39 8.87 L 16.41 8.59 L 16.42 8.30 L 16.41 8.01 L 16.39 7.71 L 16.34 7.41 L 16.28 7.11 L 16.21 6.80 L 16.11 6.49 L 16.00 6.18 L 15.87 5.87 L 15.72 5.57 L 15.55 5.26 L 15.37 4.96 L 15.16 4.67 L 14.94 4.38 L 14.70 4.09 L 14.44 3.82 L 14.17 3.55 L 13.87 3.29 L 13.56 3.04 L 13.24 2.81 L 12.89 2.58 A 1.25 1.25 0 0 1 11.46 4.63 Z M 18.65 15.22 L 18.41 15.41 L 18.17 15.59 L 17.93 15.75 L 17.68 15.90 L 17.43 16.04 L 17.17 16.16 L 16.92 16.27 L 16.66 16.37 L 16.40 16.45 L 16.15 16.52 L 15.89 16.58 L 15.64 16.62 L 15.39 16.66 L 15.14 16.68 L 14.89 16.69 L 14.65 16.69 L 14.41 16.67 L 14.18 16.65 L 13.95 16.61 L 13.73 16.56 L 13.51 16.51 L 13.30 16.44 L 13.09 16.37 L 12.90 16.28 L 12.71 16.19 L 12.53 16.09 L 12.35 15.98 L 12.19 15.86 L 12.03 15.74 L 11.88 15.61 L 11.74 15.47 L 11.61 15.33 L 11.49 15.18 L 11.38 15.03 L 11.28 14.87 L 11.19 14.71 L 11.11 14.55 L 11.04 14.38 L 10.98 14.21 L 10.92 14.03 L 10.92 14.03 L 10.89 14.21 L 10.87 14.41 L 10.87 14.60 L 10.89 14.80 L 10.92 15.01 L 10.97 15.21 L 11.03 15.42 L 11.11 15.63 L 11.20 15.84 L 11.31 16.05 L 11.44 16.25 L 11.58 16.45 L 11.74 16.65 L 11.91 16.84 L 12.10 17.03 L 12.30 17.20 L 12.52 17.37 L 12.75 17.53 L 12.99 17.68 L 13.25 17.82 L 13.52 17.94 L 13.80 18.06 L 14.10 18.16 L 14.40 18.24 L 14.72 18.32 L 15.04 18.37 L 15.37 18.41 L 15.71 18.44 L 16.06 18.44 L 16.41 18.43 L 16.77 18.40 L 17.13 18.36 L 17.50 18.29 L 17.87 18.20 L 18.23 18.10 L 18.60 17.98 L 18.97 17.83 L 19.34 17.67 L 19.71 17.48 A 1.25 1.25 0 0 1 18.65 15.22 Z M 5.88 16.15 L 5.84 15.85 L 5.81 15.55 L 5.79 15.26 L 5.78 14.97 L 5.79 14.68 L 5.81 14.40 L 5.84 14.12 L 5.89 13.85 L 5.94 13.59 L 6.01 13.33 L 6.09 13.08 L 6.18 12.84 L 6.27 12.60 L 6.38 12.38 L 6.49 12.16 L 6.62 11.95 L 6.75 11.75 L 6.89 11.56 L 7.03 11.38 L 7.18 11.21 L 7.34 11.05 L 7.50 10.90 L 7.67 10.76 L 7.84 10.64 L 8.02 10.52 L 8.20 10.41 L 8.38 10.32 L 8.56 10.23 L 8.75 10.16 L 8.93 10.09 L 9.12 10.04 L 9.31 10.00 L 9.50 9.97 L 9.68 9.95 L 9.87 9.94 L 10.06 9.94 L 10.24 9.96 L 10.42 9.98 L 10.60 10.01 L 10.78 10.05 L 10.78 10.05 L 10.64 9.93 L 10.48 9.82 L 10.31 9.72 L 10.13 9.64 L 9.94 9.56 L 9.73 9.50 L 9.52 9.45 L 9.30 9.41 L 9.07 9.39 L 8.84 9.38 L 8.60 9.39 L 8.35 9.41 L 8.10 9.45 L 7.85 9.50 L 7.60 9.57 L 7.34 9.66 L 7.09 9.76 L 6.84 9.88 L 6.59 10.02 L 6.34 10.17 L 6.09 10.35 L 5.85 10.53 L 5.62 10.74 L 5.39 10.96 L 5.17 11.19 L 4.96 11.45 L 4.76 11.71 L 4.57 12.00 L 4.39 12.29 L 4.22 12.60 L 4.07 12.93 L 3.93 13.27 L 3.80 13.62 L 3.69 13.98 L 3.60 14.35 L 3.52 14.73 L 3.46 15.12 L 3.42 15.53 L 3.40 15.93 A 1.25 1.25 0 0 1 5.88 16.15 Z" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="2.1" fill="currentColor" stroke="none"/>',
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
      product('vista', xs[0], rowB, COL, productH, 'vista');
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
      chain('vista', 'vista');
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
