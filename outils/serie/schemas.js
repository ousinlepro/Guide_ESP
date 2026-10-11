/* Schémas de la série, en SVG vectoriel.
   Les courbes sont calculées point par point à partir des vraies fonctions ;
   les circuits et montages sont dessinés avec une petite boîte à outils commune. */

const INK = "#1d2523", MUTE = "#6b7774", ACC = "#0b6b5f", ACC2 = "#b0611a", FILL = "#e3efec";

/* ---------- primitives ---------- */
const f2 = v => +v.toFixed(2);
function svg(w, h, body, largeur) {
  return `<svg class="sch" viewBox="0 0 ${w} ${h}" style="width:${largeur || w * 0.26}mm" xmlns="http://www.w3.org/2000/svg">
<defs>
 <marker id="fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,1 L10,5 L0,9 z" fill="context-stroke"/></marker>
 <marker id="flp" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,1.5 L10,5 L0,8.5 z" fill="context-stroke"/></marker>
 <pattern id="hach" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" stroke="${MUTE}" stroke-width="1.2"/></pattern>
 <pattern id="hachA" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)"><line x1="0" y1="0" x2="0" y2="5" stroke="${ACC}" stroke-width="1" opacity=".55"/></pattern>
</defs>${body}</svg>`;
}
const L = (x1, y1, x2, y2, o = {}) =>
  `<line x1="${f2(x1)}" y1="${f2(y1)}" x2="${f2(x2)}" y2="${f2(y2)}" stroke="${o.c || INK}" stroke-width="${o.w || 1.4}"${o.d ? ` stroke-dasharray="${o.d}"` : ""}${o.fl ? ` marker-end="url(#${o.fl === 2 ? "flp" : "fl"})"` : ""}${o.fl0 ? ` marker-start="url(#fl)"` : ""} stroke-linecap="round"/>`;
const P = (d, o = {}) =>
  `<path d="${d}" fill="${o.f || "none"}" stroke="${o.c || INK}" stroke-width="${o.w || 1.4}"${o.d ? ` stroke-dasharray="${o.d}"` : ""}${o.fl ? ` marker-end="url(#fl)"` : ""} stroke-linejoin="round" stroke-linecap="round"${o.op ? ` opacity="${o.op}"` : ""}/>`;
const C = (x, y, r, o = {}) =>
  `<circle cx="${f2(x)}" cy="${f2(y)}" r="${r}" fill="${o.f || "none"}" stroke="${o.c || INK}" stroke-width="${o.w || 1.4}"${o.d ? ` stroke-dasharray="${o.d}"` : ""}/>`;
const Rect = (x, y, w, h, o = {}) =>
  `<rect x="${f2(x)}" y="${f2(y)}" width="${f2(w)}" height="${f2(h)}" fill="${o.f || "none"}" stroke="${o.c || INK}" stroke-width="${o.w || 1.4}"${o.rx ? ` rx="${o.rx}"` : ""}/>`;
/* texte : *x* en italique (grandeur), _x_ en indice, ^x^ en exposant, vecteur avec ~ */
function T(x, y, s, o = {}) {
  const html = s
    .replace(/\*([^*]+)\*/g, '<tspan font-style="italic">$1</tspan>')
    .replace(/_([^_]+)_/g, '<tspan baseline-shift="sub" font-size="72%">$1</tspan>')
    .replace(/\^([^^]+)\^/g, '<tspan baseline-shift="super" font-size="72%">$1</tspan>');
  return `<text x="${f2(x)}" y="${f2(y)}" font-size="${o.s || 13}" fill="${o.c || INK}" text-anchor="${o.a || "middle"}"${o.b ? ' font-weight="600"' : ""} font-family="${o.sans ? "Source Sans 3, Segoe UI" : "Source Serif 4, Cambria Math, Cambria, Segoe UI Symbol"}">${html}</text>`;
}
/* vecteur : nom avec flèche au-dessus */
function V(x, y, nom, o = {}) {
  const w = (o.s || 13) * 0.5 * nom.replace(/[_*]/g, "").length;
  return T(x, y, nom, o) + L(x - w / 2 - 1, y - (o.s || 13) * 0.95, x + w / 2 + 2, y - (o.s || 13) * 0.95, { w: 0.9, fl: 2, c: o.c || INK });
}

/* ---------- composants de circuit (horizontaux ou verticaux) ---------- */
function resist(x, y, vert, lab) {      // centre (x,y), longueur 40
  return vert
    ? L(x, y - 30, x, y - 18) + Rect(x - 7, y - 18, 14, 36, { f: "#fff" }) + L(x, y + 18, x, y + 30) + (lab ? T(x + 14, y + 5, lab, { a: "start" }) : "")
    : L(x - 30, y, x - 18, y) + Rect(x - 18, y - 7, 36, 14, { f: "#fff" }) + L(x + 18, y, x + 30, y) + (lab ? T(x, y - 13, lab) : "");
}
function capa(x, y, vert, lab) {
  return vert
    ? L(x, y - 30, x, y - 5) + L(x - 13, y - 5, x + 13, y - 5, { w: 2.4 }) + L(x - 13, y + 5, x + 13, y + 5, { w: 2.4 }) + L(x, y + 5, x, y + 30) + (lab ? T(x + 19, y + 5, lab, { a: "start" }) : "")
    : L(x - 30, y, x - 5, y) + L(x - 5, y - 13, x - 5, y + 13, { w: 2.4 }) + L(x + 5, y - 13, x + 5, y + 13, { w: 2.4 }) + L(x + 5, y, x + 30, y) + (lab ? T(x, y - 19, lab) : "");
}
function bobine(x, y, vert, lab) {
  let d = "";
  if (vert) {
    d = `M${x},${y - 30} L${x},${y - 20}`;
    for (let k = 0; k < 4; k++) d += ` a 5 5 0 0 1 0 10`;
    d += ` L${x},${y + 30}`;
    return P(d) + (lab ? T(x + 14, y + 5, lab, { a: "start" }) : "");
  }
  d = `M${x - 30},${y} L${x - 20},${y}`;
  for (let k = 0; k < 4; k++) d += ` a 5 5 0 0 1 10 0`;
  d += ` L${x + 30},${y}`;
  return P(d) + (lab ? T(x, y - 14, lab) : "");
}
function gene(x, y, vert, lab, alt) {   // générateur : cercle (+ ~ si alternatif)
  const body = C(x, y, 13, { f: "#fff" }) + (alt
    ? P(`M${x - 7},${y} q 3.5 -7 7 0 t 7 0`, { w: 1.3 })
    : (vert ? L(x, y - 7, x, y + 7, { w: 1.3 }) : L(x - 7, y, x + 7, y, { w: 1.3 })));
  const fils = vert ? L(x, y - 30, x, y - 13) + L(x, y + 13, x, y + 30) : L(x - 30, y, x - 13, y) + L(x + 13, y, x + 30, y);
  return fils + body + (lab ? (vert ? T(x - 19, y + 5, lab, { a: "end" }) : T(x, y - 19, lab)) : "");
}
const point = (x, y, r = 2.6, c = INK) => `<circle cx="${f2(x)}" cy="${f2(y)}" r="${r}" fill="${c}"/>`;

/* ---------- repère et courbes ---------- */
function repere(o) {
  /* o : {x0,x1,y0,y1, W,H, pad, gx, gy, lx, ly} -> {X, Y, body} */
  const pad = o.pad || 26, W = o.W, H = o.H;
  const X = v => pad + (v - o.x0) / (o.x1 - o.x0) * (W - 2 * pad);
  const Y = v => H - pad - (v - o.y0) / (o.y1 - o.y0) * (H - 2 * pad);
  let b = "";
  if (o.grille !== false) {
    for (let v = Math.ceil(o.x0); v <= o.x1; v += o.gx || 1) b += L(X(v), Y(o.y0), X(v), Y(o.y1), { c: "#dfe5e3", w: 0.7 });
    for (let v = Math.ceil(o.y0); v <= o.y1; v += o.gy || 1) b += L(X(o.x0), Y(v), X(o.x1), Y(v), { c: "#dfe5e3", w: 0.7 });
  }
  b += L(X(o.x0), Y(0), X(o.x1) + 8, Y(0), { w: 1.1, fl: 1 });
  b += L(X(0), Y(o.y0), X(0), Y(o.y1) - 8, { w: 1.1, fl: 1 });
  b += T(X(o.x1) + 6, Y(0) + 16, o.lx || "*x*", { s: 12 });
  b += T(X(0) - 8, Y(o.y1) - 2, o.ly || "*y*", { s: 12, a: "end" });
  b += T(X(0) - 6, Y(0) + 14, "O", { s: 11, a: "end", c: MUTE });
  (o.tx || []).forEach(v => { b += L(X(v[0]), Y(0) - 3, X(v[0]), Y(0) + 3, { w: 1 }) + T(X(v[0]), Y(0) + 15, v[1], { s: 11, c: MUTE }); });
  (o.ty || []).forEach(v => { b += L(X(0) - 3, Y(v[0]), X(0) + 3, Y(v[0]), { w: 1 }) + T(X(0) - 6, Y(v[0]) + 4, v[1], { s: 11, c: MUTE, a: "end" }); });
  return { X, Y, body: b };
}
function courbe(R, f, a, b, o = {}) {
  let d = "", n = o.n || 220, pen = false;
  for (let k = 0; k <= n; k++) {
    const x = a + (b - a) * k / n, y = f(x);
    if (!isFinite(y) || y < (o.ymin ?? -1e9) || y > (o.ymax ?? 1e9)) { pen = false; continue; }
    d += (pen ? " L" : " M") + f2(R.X(x)) + "," + f2(R.Y(y));
    pen = true;
  }
  return P(d.trim(), { c: o.c || ACC, w: o.w || 2 , d: o.d });
}
function aire(R, f, a, b, g = () => 0, o = {}) {
  let d = `M${f2(R.X(a))},${f2(R.Y(g(a)))}`;
  for (let k = 0; k <= 80; k++) { const x = a + (b - a) * k / 80; d += ` L${f2(R.X(x))},${f2(R.Y(f(x)))}`; }
  for (let k = 80; k >= 0; k--) { const x = a + (b - a) * k / 80; d += ` L${f2(R.X(x))},${f2(R.Y(g(x)))}`; }
  return P(d + " Z", { f: o.f || "url(#hachA)", c: "none", w: 0 });
}

/* ============================ MATHS ============================ */
const S = {};

S.m1 = () => {   // plan complexe : A(√3+i), B(√3−i), triangle OAB équilatéral
  const R = repere({ x0: -0.6, x1: 2.6, y0: -1.6, y1: 1.6, W: 300, H: 230, pad: 24, grille: true, gx: 1, gy: 1,
    tx: [[1, "1"]], ty: [[1, "1"], [-1, "−1"]], lx: "", ly: "" });
  const A = [Math.sqrt(3), 1], B = [Math.sqrt(3), -1];
  let b = R.body;
  b += P(`M${R.X(0)},${R.Y(0)} L${R.X(A[0])},${R.Y(A[1])} L${R.X(B[0])},${R.Y(B[1])} Z`, { f: FILL, c: ACC, w: 1.6 });
  b += P(`M${f2(R.X(0) + 34)},${R.Y(0)} A 34 34 0 0 0 ${f2(R.X(0) + 34 * Math.cos(Math.PI / 6))},${f2(R.Y(0) - 34 * Math.sin(Math.PI / 6))}`, { c: ACC2, w: 1.2 });
  b += T(R.X(0) + 48, R.Y(0) - 6, "π/6", { s: 11, c: ACC2, a: "start" });
  b += T(R.X(Math.sqrt(3)) - 4, R.Y(0) + 15, "√3", { s: 11, c: MUTE, a: "end" });
  b += point(R.X(A[0]), R.Y(A[1]), 3, ACC) + point(R.X(B[0]), R.Y(B[1]), 3, ACC);
  b += T(R.X(A[0]) + 8, R.Y(A[1]) - 6, "A(*z*_1_)", { a: "start" }) + T(R.X(B[0]) + 8, R.Y(B[1]) + 16, "B(*z*_2_)", { a: "start" });
  b += T(R.X(0.75), R.Y(0.68), "2", { s: 12, c: ACC }) + T(R.X(1.88), R.Y(0.25), "2", { s: 12, c: ACC, a: "start" });
  return svg(300, 230, b, 62);
};

S.m4 = () => {
  const f = x => (2 * x * x - x + 1) / (x - 1);
  const R = repere({ x0: -4, x1: 6, y0: -9, y1: 17, W: 330, H: 300, pad: 22, gx: 1, gy: 2,
    tx: [[2, "2"], [-2, "−2"], [4, "4"]], ty: [[7, "7"], [3, "3"], [-1, "−1"]] });
  let b = R.body;
  b += L(R.X(1), R.Y(-9), R.X(1), R.Y(17), { c: ACC2, w: 1.2, d: "5 4" });
  b += L(R.X(-4), R.Y(-7), R.X(6), R.Y(13), { c: ACC2, w: 1.2, d: "5 4" });
  b += courbe(R, f, -4, 0.97, { ymin: -10, ymax: 18 }) + courbe(R, f, 1.03, 6, { ymin: -10, ymax: 18 });
  b += point(R.X(0), R.Y(-1), 3, ACC) + point(R.X(2), R.Y(7), 3, ACC) + point(R.X(1), R.Y(3), 3, ACC2);
  b += T(R.X(1) + 6, R.Y(3) + 4, "Ω", { a: "start", c: ACC2 });
  b += T(R.X(1) + 5, R.Y(16), "*x* = 1", { s: 11, a: "start", c: ACC2 });
  b += T(R.X(3.6), R.Y(5.3), "*y* = 2*x* + 1", { s: 11, a: "start", c: ACC2 });
  b += T(R.X(3.1), R.Y(12.3), "𝒞", { s: 14, c: ACC });
  return svg(330, 300, b, 70);
};

S.m5 = () => {
  const f = x => Math.log(x) / x, e = Math.E;
  const R = repere({ x0: -0.5, x1: 9, y0: -1.6, y1: 0.75, W: 340, H: 210, pad: 22, gx: 1, gy: 0.5, grille: false,
    tx: [[1, "1"], [e, "e"], [Math.exp(1.5), "e^3/2^"], [8, "8"]], ty: [[1 / e, "1/e"], [-1, "−1"]] });
  let b = R.body;
  b += L(R.X(e), R.Y(0), R.X(e), R.Y(1 / e), { c: MUTE, w: 0.9, d: "3 3" }) + L(R.X(0), R.Y(1 / e), R.X(e), R.Y(1 / e), { c: MUTE, w: 0.9, d: "3 3" });
  b += aire(R, f, 1, e);
  b += L(R.X(0.4), R.Y(-0.6), R.X(2.2), R.Y(1.2 - 0.0), { c: ACC2, w: 1.2, d: "5 4" });
  b += courbe(R, f, 0.33, 9, { ymin: -1.7 });
  b += point(R.X(e), R.Y(1 / e), 3, ACC) + point(R.X(1), R.Y(0), 3, ACC2);
  b += T(R.X(2.05), R.Y(0.62), "T : *y* = *x* − 1", { s: 11, c: ACC2, a: "start" });
  b += T(R.X(1.85), R.Y(0.11), "𝒜", { s: 12, c: ACC });
  b += T(R.X(6.5), R.Y(0.42), "𝒞", { s: 14, c: ACC });
  return svg(340, 210, b, 72);
};

S.m6 = () => {
  const f = x => (x + 1) * Math.exp(-x);
  const R = repere({ x0: -1.8, x1: 5.5, y0: -1.6, y1: 1.4, W: 340, H: 200, pad: 22, grille: false,
    tx: [[-1, "−1"], [1, "1"], [2, "2"], [4, "4"]], ty: [[1, "1"]] });
  let b = R.body;
  b += aire(R, f, 0, 1);
  b += L(R.X(-1.8), R.Y(1), R.X(2), R.Y(1), { c: ACC2, w: 1.1, d: "5 4" });
  b += courbe(R, f, -1.65, 5.5, { ymin: -1.7 });
  b += point(R.X(0), R.Y(1), 3, ACC) + point(R.X(1), R.Y(2 / Math.E), 3, ACC2) + point(R.X(-1), R.Y(0), 3, ACC);
  b += T(R.X(1.6), R.Y(1.05), "I (1 ; 2/e)", { s: 11, a: "start", c: ACC2 });
  b += T(R.X(0.5), R.Y(0.3), "𝒜", { s: 12, c: ACC });
  b += T(R.X(4), R.Y(0.32), "𝒞", { s: 14, c: ACC });
  return svg(340, 200, b, 72);
};

S.m7 = () => {
  const R = repere({ x0: -0.25, x1: 1.35, y0: -0.2, y1: 1.3, W: 200, H: 190, pad: 22, grille: false,
    tx: [[1, "1"]], ty: [[1, "1"]] });
  let b = R.body;
  b += aire(R, x => x, 0, 1, x => x * x);
  b += courbe(R, x => x, -0.1, 1.25, { c: ACC2 }) + courbe(R, x => x * x, -0.25, 1.12);
  b += T(R.X(1.2), R.Y(1.05), "*y* = *x*", { s: 11, c: ACC2, a: "start" }) + T(R.X(0.83), R.Y(1.18), "*y* = *x*^2^", { s: 11, c: ACC, a: "end" });
  b += L(R.X(1), R.Y(0), R.X(1), R.Y(1), { c: MUTE, w: 0.9, d: "3 3" });
  return svg(200, 190, b, 44);
};

S.m11 = () => {
  const X = [1, 2, 3, 4, 5, 6], Y = [3, 5, 6, 9, 10, 12];
  const R = repere({ x0: 0, x1: 8.6, y0: 0, y1: 17, W: 330, H: 230, pad: 26, gx: 1, gy: 2,
    tx: [[2, "2"], [4, "4"], [6, "6"], [8, "8"]], ty: [[4, "4"], [8, "8"], [12, "12"], [16, "16"]], lx: "*x*", ly: "*y*" });
  let b = R.body;
  b += courbe(R, x => 1.8 * x + 1.2, 0, 8.5, { c: ACC2, w: 1.5 });
  X.forEach((x, i) => b += `<g transform="translate(${f2(R.X(x))},${f2(R.Y(Y[i]))})">${L(-4, -4, 4, 4, { w: 1.8, c: ACC })}${L(-4, 4, 4, -4, { w: 1.8, c: ACC })}</g>`);
  b += point(R.X(3.5), R.Y(7.5), 3.4, INK) + T(R.X(3.5) - 8, R.Y(7.5) - 7, "G", { a: "end", b: true });
  b += L(R.X(8), R.Y(0), R.X(8), R.Y(15.6), { c: MUTE, w: 0.9, d: "3 3" }) + point(R.X(8), R.Y(15.6), 3, ACC2);
  b += T(R.X(6.3), R.Y(14.6), "*y* = 1,8*x* + 1,2", { s: 11, c: ACC2, a: "end" });
  return svg(330, 230, b, 70);
};

/* ========================== PHYSIQUE ========================== */
S.p2 = () => {   // plan incliné de 30°, puis piste horizontale BC
  const a = Math.PI / 6, W = 380, H = 200;
  const B = [210, 160], A = [B[0] - 170 * Math.cos(a), B[1] - 170 * Math.sin(a)];
  const dir = [Math.cos(a), Math.sin(a)], nor = [Math.sin(a), -Math.cos(a)];   // le long de la pente / normale sortante
  const D0 = [A[0] - 20 * dir[0], A[1] - 20 * dir[1]];
  let b = "";
  b += P(`M${f2(D0[0])},${f2(D0[1])} L${B[0]},${B[1]} L360,${B[1]} L360,${B[1] + 10} L${f2(D0[0])},${B[1] + 10} Z`, { f: "url(#hach)", c: "none" });
  b += P(`M${f2(D0[0])},${f2(D0[1])} L${B[0]},${B[1]} L360,${B[1]}`, { w: 1.8 });
  b += L(D0[0], B[1], B[0] - 50, B[1], { c: MUTE, w: 0.8, d: "3 3" });
  b += P(`M${B[0] - 50},${B[1]} A 50 50 0 0 1 ${f2(B[0] - 50 * dir[0])},${f2(B[1] - 50 * dir[1])}`, { c: ACC2, w: 1.1 });
  b += T(B[0] - 66, B[1] - 5, "α", { c: ACC2 });
  const M = [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2];
  b += `<g transform="translate(${f2(M[0])},${f2(M[1])}) rotate(30)">${Rect(-17, -26, 34, 26, { f: FILL })}</g>`;
  const G = [M[0] + 13 * nor[0], M[1] + 13 * nor[1]];
  b += point(G[0], G[1], 2.4);
  b += L(G[0], G[1], G[0], G[1] + 60, { c: ACC, w: 1.8, fl: 1 }) + V(G[0] - 10, G[1] + 52, "*P*", { c: ACC, a: "end" });
  const Rn = [G[0] + 50 * nor[0], G[1] + 50 * nor[1]];
  b += L(G[0], G[1], Rn[0], Rn[1], { c: ACC, w: 1.8, fl: 1 }) + V(Rn[0] + 8, Rn[1] + 2, "*R*_n_", { c: ACC, a: "start" });
  const F0 = [M[0] - 17 * dir[0] + 3 * nor[0], M[1] - 17 * dir[1] + 3 * nor[1]];
  b += L(F0[0], F0[1], F0[0] - 34 * dir[0], F0[1] - 34 * dir[1], { c: ACC2, w: 1.8, fl: 1 });
  b += V(F0[0] - 26 * dir[0] + 4, F0[1] - 26 * dir[1] - 12, "*f*", { c: ACC2 });
  b += point(A[0], A[1], 3) + T(A[0] - 2, A[1] + 22, "A", { b: true });
  b += point(B[0], B[1], 3) + T(B[0], B[1] + 26, "B", { b: true });
  b += point(330, B[1], 3) + T(330, B[1] + 26, "C", { b: true });
  return svg(W, H + 20, b, 78);
};

S.p3 = () => {  // tir parabolique v0 = 20 m/s, α = 30°, mur à 20 m
  const v0 = 20, a = Math.PI / 6, g = 10;
  const R = repere({ x0: -2, x1: 40, y0: -1.2, y1: 9, W: 400, H: 190, pad: 24, grille: false,
    tx: [[20, "20 m"], [20 * Math.sqrt(3), "*x*_P_"]], ty: [[5, "*h*"]], lx: "*x*", ly: "*z*" });
  let b = R.body;
  const z = x => x * Math.tan(a) - g * x * x / (2 * v0 * v0 * Math.cos(a) ** 2);
  b += courbe(R, z, 0, 20 * Math.sqrt(3), { d: "", w: 1.8 });
  b += L(R.X(0), R.Y(0), R.X(9), R.Y(9 * Math.tan(a)), { c: ACC2, w: 1.8, fl: 1 });
  b += V(R.X(9) + 4, R.Y(9 * Math.tan(a)) - 4, "*v*_0_", { c: ACC2, a: "start" });
  b += P(`M${R.X(0) + 40},${R.Y(0)} A 40 40 0 0 0 ${f2(R.X(0) + 40 * Math.cos(Math.atan(Math.tan(a) * (R.Y(0) - R.Y(1)) / (R.X(1) - R.X(0)))))},${f2(R.Y(0) - 40 * Math.sin(Math.atan(Math.tan(a) * (R.Y(0) - R.Y(1)) / (R.X(1) - R.X(0)))))}`, { c: ACC2, w: 1 });
  b += T(R.X(0) + 52, R.Y(0) - 5, "α", { c: ACC2, s: 12 });
  b += L(R.X(17.32), R.Y(0), R.X(17.32), R.Y(5), { c: MUTE, w: 0.9, d: "3 3" }) + L(R.X(0), R.Y(5), R.X(17.32), R.Y(5), { c: MUTE, w: 0.9, d: "3 3" });
  b += point(R.X(17.32), R.Y(5), 3, ACC) + T(R.X(17.32), R.Y(5) - 8, "S", { b: true });
  // mur
  b += Rect(R.X(20) - 3, R.Y(3.2), 6, R.Y(0) - R.Y(3.2), { f: "url(#hach)", c: INK, w: 1.1 });
  b += T(R.X(20) + 8, R.Y(1.6), "mur", { s: 11, a: "start", c: MUTE, sans: true });
  b += point(R.X(20 * Math.sqrt(3)), R.Y(0), 3, ACC) + T(R.X(20 * Math.sqrt(3)) + 2, R.Y(0) - 8, "P", { b: true, a: "start" });
  return svg(400, 190, b, 84);
};

S.p4 = () => {  // déviation électrostatique
  const W = 420, H = 200;
  let b = "";
  const y0 = 100, xa = 60, xb = 180, xe = 380;
  b += Rect(xa, y0 - 52, xb - xa, 7, { f: "#cfd8d5" }) + Rect(xa, y0 + 45, xb - xa, 7, { f: "#cfd8d5" });
  b += T(xa - 8, y0 - 44, "P_1_", { a: "end" }) + T(xa - 8, y0 + 55, "P_2_", { a: "end" });
  b += L(10, y0, xe, y0, { c: MUTE, w: 0.8, d: "4 4" });
  b += L(10, y0, 46, y0, { c: ACC2, w: 1.8, fl: 1 }) + V(28, y0 - 8, "*v*_0_", { c: ACC2 });
  b += T(56, y0 + 18, "O", { a: "end", b: true });
  // parabole puis droite
  const L_ = xb - xa, ys = 12;
  let d = `M${xa},${y0}`;
  for (let k = 1; k <= 40; k++) { const u = k / 40; d += ` L${f2(xa + u * L_)},${f2(y0 - ys * u * u)}`; }
  const pente = 2 * ys / L_, xs = xb, Ys = y0 - ys;
  d += ` L${xe},${f2(Ys - pente * (xe - xs))}`;
  b += P(d, { c: ACC, w: 2 });
  b += L((xa + xb) / 2, y0, xe, Ys - pente * (xe - xs), { c: MUTE, w: 0.8, d: "2 3" });
  b += L(xe, 30, xe, 175, { w: 3 }) + T(xe + 6, 175, "écran", { a: "start", s: 11, c: MUTE, sans: true });
  b += point(xe, Ys - pente * (xe - xs), 3.2, ACC) + T(xe - 6, Ys - pente * (xe - xs) - 6, "M", { a: "end", b: true });
  b += L(xe + 12, y0, xe + 12, Ys - pente * (xe - xs), { w: 1, fl: 1, fl0: 1 }) + T(xe + 18, (y0 + Ys - pente * (xe - xs)) / 2 + 4, "*Y*", { a: "start" });
  b += L(xa, y0 + 70, xb, y0 + 70, { w: 1, fl: 1, fl0: 1 }) + T((xa + xb) / 2, y0 + 86, "ℓ", { s: 14 });
  b += L((xa + xb) / 2, y0 + 70 + 18 + 4, xe, y0 + 92, { w: 1, fl: 1, fl0: 1, c: MUTE }) + T(((xa + xb) / 2 + xe) / 2, y0 + 88, "*D*", { c: MUTE });
  b += L(xb + 14, y0 - 45, xb + 14, y0 + 45, { w: 1, fl: 1, fl0: 1 }) + T(xb + 20, y0 + 30, "*d*", { a: "start" });
  b += L(150, y0 + 12, 150, y0 + 38, { c: ACC2, w: 1.6, fl: 1 }) + V(160, y0 + 32, "*E*", { c: ACC2, a: "start" });
  
  return svg(W, H, b, 88);
};

S.p5 = () => {  // Terre et orbite géostationnaire (non à l'échelle)
  let b = "";
  b += C(150, 110, 42, { f: FILL, c: ACC, w: 1.6 }) + T(150, 136, "Terre", { s: 12, sans: true, c: ACC });
  b += C(150, 110, 96, { c: INK, w: 1.2, d: "6 5" });
  b += point(150, 110, 2.2) + T(144, 104, "O", { s: 11, a: "end" });
  const S_ = [150 + 96 * Math.cos(-0.7), 110 + 96 * Math.sin(-0.7)];
  b += Rect(S_[0] - 7, S_[1] - 5, 14, 10, { f: INK }) + L(S_[0] - 16, S_[1], S_[0] + 16, S_[1], { w: 2.4, c: MUTE });
  b += T(S_[0] + 18, S_[1] - 8, "S", { a: "start", b: true });
  b += L(150, 110, S_[0], S_[1], { c: MUTE, w: 1, d: "3 3" }) + T(193, 104, "*r* = *R* + *h*", { s: 11, a: "start" });
  b += L(S_[0] - 2, S_[1] + 2, S_[0] - 2 - 38 * Math.cos(-0.7), S_[1] + 2 - 38 * Math.sin(-0.7), { c: ACC2, w: 1.8, fl: 1 });
  b += V(S_[0] - 34, S_[1] + 34, "*F*", { c: ACC2 });
  b += L(S_[0], S_[1], S_[0] + 46 * Math.sin(0.7), S_[1] + 46 * Math.cos(0.7), { c: ACC, w: 1.8, fl: 1 });
  b += V(S_[0] + 40, S_[1] + 46, "*v*", { c: ACC, a: "start" });
  return svg(300, 220, b, 54);
};

S.p6 = () => {  // spectrographe de masse
  let b = "";
  const yP = 60;
  b += L(20, 30, 20, 90, { w: 3 }) + L(70, 30, 70, 90, { w: 3 });
  b += T(20, 22, "P_1_", { s: 12 }) + T(70, 22, "P_2_", { s: 12 });
  b += T(45, 110, "*U*", { s: 13 });
  b += L(28, yP, 62, yP, { c: ACC2, w: 1.6, fl: 1 });
  b += L(70, yP, 110, yP, { c: ACC, w: 1.8 });
  b += point(70, yP, 2.6) + T(76, yP - 8, "O", { a: "start", b: true });
  // région du champ B (points = vers le lecteur)
  b += Rect(110, 40, 290, 218, { f: "#f3f6f5", c: MUTE, w: 1, d: "5 4" });
  for (let x = 128; x < 400; x += 30) for (let y = 70; y < 255; y += 30) b += C(x, y, 4.5, { c: MUTE, w: 0.9 }) + point(x, y, 1.2, MUTE);
  b += T(392, 58, "zone de champ *B*", { s: 11, a: "end", c: MUTE, sans: true });
  // demi-cercles
  const r1 = 108, r2 = 118;
  b += P(`M110,${yP} A ${r1} ${r1} 0 0 1 ${110 + 0},${yP + 2 * r1 - 0.01}`, { c: "none" });
  b += P(`M110,${yP} A ${r1 * 0.8} ${r1 * 0.8} 0 0 1 110,${yP + 2 * r1 * 0.8}`, { c: ACC, w: 1.8 });
  b += P(`M110,${yP} A ${r2 * 0.8} ${r2 * 0.8} 0 0 1 110,${yP + 2 * r2 * 0.8}`, { c: ACC2, w: 1.8, d: "6 4" });
  b += L(110, 40, 110, 258, { w: 2.6 });
  b += point(110, yP + 2 * r1 * 0.8, 3.2, ACC) + T(102, yP + 2 * r1 * 0.8 + 4, "I_1_", { a: "end", b: true });
  b += point(110, yP + 2 * r2 * 0.8, 3.2, ACC2) + T(102, yP + 2 * r2 * 0.8 + 6, "I_2_", { a: "end", b: true });
  b += T(110 + r1 * 0.8 - 10, yP + r1 * 0.8 + 4, "³⁹K⁺", { s: 12, a: "end", c: ACC });
  b += T(110 + r2 * 0.8 + 10, yP + r2 * 0.8 + 4, "⁴¹K⁺", { s: 12, a: "start", c: ACC2 });
  b += T(104, 276, "plaque photographique", { s: 11, a: "start", c: MUTE, sans: true });
  return svg(410, 284, b, 80);
};

S.p7 = () => {  // rails de Laplace
  let b = "";
  b += L(40, 50, 360, 50, { w: 2.6 }) + L(40, 150, 360, 150, { w: 2.6 });
  b += resist(40, 100, true, "*R*");
  b += L(40, 50, 40, 70) + L(40, 130, 40, 150);
  b += Rect(220, 40, 10, 120, { f: ACC, c: ACC }) + T(236, 36, "MN", { a: "start", b: true });
  for (let x = 70; x < 360; x += 34) for (let y = 70; y < 140; y += 30) if (Math.abs(x - 225) > 14) b += `<g stroke="${MUTE}" stroke-width="1">${L(x - 4, y - 4, x + 4, y + 4, { c: MUTE, w: 1 })}${L(x - 4, y + 4, x + 4, y - 4, { c: MUTE, w: 1 })}</g>`;
  b += T(355, 178, "*B* (entrant)", { s: 11, a: "end", c: MUTE });
  b += L(240, 100, 290, 100, { c: ACC2, w: 1.8, fl: 1 }) + V(266, 90, "*v*", { c: ACC2 });
  b += L(380, 50, 380, 150, { w: 1, fl: 1, fl0: 1 }) + T(386, 104, "ℓ", { a: "start", s: 14 });
  b += T(225, 172, "*x*", { s: 12 }) + L(40, 182, 225, 182, { w: 0.9, fl: 1, c: MUTE });
  return svg(400, 195, b, 74);
};

S.p8 = () => {  // circuit RC avec interrupteur
  let b = "";
  b += gene(40, 110, true, "*E*", false);
  b += L(40, 80, 40, 40) + L(40, 40, 120, 40);
  // interrupteur K
  b += point(120, 40, 2.6) + L(120, 40, 150, 28, { w: 1.6 }) + point(156, 40, 2.6) + T(138, 22, "K", { b: true });
  b += L(156, 40, 200, 40);
  b += resist(230, 40, false, "*R*");
  b += L(260, 40, 300, 40) + L(300, 40, 300, 80);
  b += capa(300, 110, true, "*C*");
  b += L(300, 140, 300, 180) + L(300, 180, 40, 180) + L(40, 180, 40, 140);
  b += L(330, 86, 330, 134, { c: ACC2, w: 1.4, fl: 1 }) + T(338, 116, "*u*_C_", { a: "start", c: ACC2 });
  b += L(150, 52, 186, 52, { c: ACC, w: 1.4, fl: 1 }) + T(168, 66, "*i*", { c: ACC });
  return svg(380, 200, b, 66);
};
S.p8c = () => {  // courbe de charge uC(t) avec tangente à l'origine
  const E = 12, tau = 0.1;
  const R = repere({ x0: 0, x1: 0.55, y0: 0, y1: 14, W: 340, H: 200, pad: 40, grille: false,
    tx: [[0.1, "τ"], [0.3, "3τ"], [0.5, "5τ"]], ty: [[12, "*E*"], [12 * (1 - Math.exp(-1)), "0,63*E*"]], lx: "*t*", ly: "*u*_C_" });
  let b = R.body;
  b += L(R.X(0), R.Y(12), R.X(0.55), R.Y(12), { c: MUTE, w: 0.9, d: "4 3" });
  b += L(R.X(0), R.Y(0), R.X(0.1), R.Y(12), { c: ACC2, w: 1.2, d: "5 4" });
  b += L(R.X(0.1), R.Y(0), R.X(0.1), R.Y(12 * (1 - Math.exp(-1))), { c: MUTE, w: 0.9, d: "3 3" }) + L(R.X(0), R.Y(12 * (1 - Math.exp(-1))), R.X(0.1), R.Y(12 * (1 - Math.exp(-1))), { c: MUTE, w: 0.9, d: "3 3" });
  b += courbe(R, t => E * (1 - Math.exp(-t / tau)), 0, 0.55);
  b += T(R.X(0.13), R.Y(13.2), "tangente à l'origine", { s: 10.5, c: ACC2, a: "start", sans: true });
  return svg(330, 200, b, 64);
};

S.p9 = () => {  // pendule élastique horizontal
  let b = "";
  b += P("M30,40 L30,130", { w: 2 }) + Rect(18, 40, 12, 90, { f: "url(#hach)", c: "none" });
  b += L(20, 130, 380, 130, { w: 2 }) + Rect(20, 130, 360, 10, { f: "url(#hach)", c: "none" });
  let d = "M30,100 L60,100";
  for (let k = 0; k < 9; k++) d += ` l7,${k % 2 ? 14 : -14} l7,${k % 2 ? -14 : 14}`;
  d += " L196,100";
  b += P(d, { w: 1.5 });
  b += Rect(196, 76, 48, 54, { f: FILL, c: INK, w: 1.5 }) + point(220, 103, 2.4) + T(220, 92, "G", { s: 11 });
  b += L(185, 160, 360, 160, { w: 1.1, fl: 1 }) + T(360, 176, "*x*", { s: 12 });
  b += L(185, 155, 185, 165, { w: 1.1 }) + T(185, 178, "O", { s: 11 });
  b += L(185, 60, 185, 168, { c: MUTE, w: 0.8, d: "3 3" });
  b += T(185, 52, "position d'équilibre", { s: 10.5, c: MUTE, sans: true });
  b += L(185, 34, 220, 34, { w: 1, fl: 1 }) + T(203, 28, "*x*", { s: 12 });
  return svg(400, 190, b, 74);
};

S.p10 = () => {  // RLC série alimenté par un GBF
  let b = "";
  b += gene(60, 110, true, "GBF", true);
  b += L(60, 80, 60, 40) + L(60, 40, 70, 40);
  b += resist(100, 40, false, "*R*") + L(130, 40, 160, 40);
  b += bobine(190, 40, false, "*L*") + L(220, 40, 250, 40);
  b += L(250, 40, 290, 40) + L(290, 40, 290, 80) + capa(290, 110, true, "*C*") + L(290, 140, 290, 180);
  b += L(290, 180, 60, 180) + L(60, 180, 60, 140);
  b += C(165, 180, 13, { f: "#fff" }) + T(165, 185, "A", { s: 12, b: true, sans: true });
  b += L(80, 194, 130, 194, { c: ACC, w: 1.4, fl: 1 }) + T(105, 210, "*i*(*t*)", { c: ACC, s: 12 });
  return svg(330, 216, b, 62);
};
S.p10c = () => {  // courbe de résonance I(ω)
  const Rr = 20, Lb = 0.1, C = 1e-5, U = 10;
  const I = w => U / Math.sqrt(Rr * Rr + (Lb * w - 1 / (C * w)) ** 2);
  const R = repere({ x0: 0, x1: 2100, y0: 0, y1: 0.58, W: 350, H: 200, pad: 44, grille: false, gx: 500, gy: 0.1,
    tx: [[1000, "ω_0_"], [900, ""], [1100, ""]], ty: [[0.5, "*U*/*R*"], [0.5 / Math.SQRT2, "*I*_0_/√2"]], lx: "ω", ly: "*I*" });
  let b = R.body;
  const w1 = (-Rr / Lb + Math.sqrt((Rr / Lb) ** 2 + 4e6)) / 2, w2 = w1 + Rr / Lb;
  b += L(R.X(0), R.Y(0.5 / Math.SQRT2), R.X(w2), R.Y(0.5 / Math.SQRT2), { c: MUTE, w: 0.9, d: "3 3" });
  b += L(R.X(w1), R.Y(0), R.X(w1), R.Y(0.5 / Math.SQRT2), { c: MUTE, w: 0.9, d: "3 3" }) + L(R.X(w2), R.Y(0), R.X(w2), R.Y(0.5 / Math.SQRT2), { c: MUTE, w: 0.9, d: "3 3" });
  b += L(R.X(1000), R.Y(0), R.X(1000), R.Y(0.5), { c: MUTE, w: 0.9, d: "3 3" });
  b += courbe(R, I, 60, 2100, { n: 400 });
  b += L(R.X(w1), R.Y(0.42) - 0, R.X(w2), R.Y(0.42), { c: ACC2, w: 1.1, fl: 1, fl0: 1 });
  b += T(R.X(w2) + 6, R.Y(0.42) + 4, "Δω", { s: 12, c: ACC2, a: "start" });
  b += point(R.X(800), R.Y(I(800)), 3, ACC2) + T(R.X(800) - 6, R.Y(I(800)) - 2, "ω = 800", { s: 10.5, c: ACC2, a: "end" });
  return svg(340, 200, b, 66);
};

S.p11 = () => {  // fentes de Young
  let b = "";
  b += C(30, 110, 9, { f: "#fff3d6", c: ACC2 }) + T(30, 140, "S", { b: true });
  b += L(130, 20, 130, 98, { w: 3 }) + L(130, 104, 130, 116, { w: 3 }) + L(130, 122, 130, 200, { w: 3 });
  b += T(140, 96, "S_1_", { s: 12, a: "start" }) + T(140, 134, "S_2_", { s: 12, a: "start" });
  b += L(118, 101, 118, 119, { w: 0.9, fl: 2, fl0: 0 }) + T(112, 114, "*a*", { a: "end", s: 12 });
  b += L(380, 20, 380, 200, { w: 3 }) + T(386, 210, "écran", { s: 11, a: "start", c: MUTE, sans: true });
  b += L(40, 110, 130, 101, { c: ACC2, w: 0.9, op: 0.8 }) + L(40, 110, 130, 119, { c: ACC2, w: 0.9 });
  b += L(130, 101, 380, 60, { c: ACC, w: 1.2 }) + L(130, 119, 380, 60, { c: ACC, w: 1.2 });
  b += point(380, 60, 3, ACC) + T(372, 54, "M", { a: "end", b: true });
  b += L(130, 110, 380, 110, { c: MUTE, w: 0.8, d: "4 4" }) + point(380, 110, 2.6) + T(388, 114, "O", { a: "start", b: true });
  b += L(395, 110, 395, 60, { w: 1, fl: 1 }) + T(401, 88, "*x*", { a: "start" });
  b += L(130, 186, 380, 186, { w: 1, fl: 1, fl0: 1 }) + T(255, 180, "*D*");
  // franges
  for (let k = -4; k <= 4; k++) b += Rect(380 + 4, 110 + k * 20 - 4, 6, 8, { f: INK, c: "none" });
  return svg(430, 216, b, 80);
};

S.p13 = () => {  // diagramme des niveaux de l'hydrogène
  const lv = [[1, -13.6], [2, -3.4], [3, -1.51], [4, -0.85], [Infinity, 0]];
  const Y = E => 30 + (-E) / 13.6 * 320;
  let b = "";
  lv.forEach(([n, E]) => {
    b += L(70, Y(E), 280, Y(E), { w: n === Infinity ? 1.2 : 1.8, d: n === Infinity ? "5 4" : "" });
    b += T(62, Y(E) + 4, n === Infinity ? "0" : String(E).replace(".", ","), { s: 11, a: "end", c: MUTE });
    b += T(288, Y(E) + 4, n === Infinity ? "*n* = ∞" : "*n* = " + n, { s: 11.5, a: "start" });
  });
  b += T(40, 16, "*E* (eV)", { s: 11.5, a: "middle" });
  b += L(130, Y(-1.51), 130, Y(-3.4), { c: ACC, w: 2, fl: 1 }) + T(138, Y(-2.3), "H_α_", { s: 12, c: ACC, a: "start" });
  b += L(200, Y(-13.6), 200, Y(-3.4), { c: ACC2, w: 2, fl: 1 }) + T(208, Y(-8.5), "10,2 eV", { s: 11.5, c: ACC2, a: "start" });
  b += L(250, Y(-3.4), 250, Y(0) + 1, { c: INK, w: 1.4, fl: 1, d: "4 3" }) + T(246, Y(-1.2) + 26, "ionisation", { s: 10.5, c: MUTE, a: "end", sans: true });
  return svg(350, 365, b, 60);
};

S.p14 = () => {  // décroissance radioactive N(t)
  const R = repere({ x0: 0, x1: 4.4, y0: 0, y1: 1.12, W: 330, H: 190, pad: 26, grille: false,
    tx: [[1, "*T*"], [2, "2*T*"], [3, "3*T*"], [4, "4*T*"]], ty: [[1, "*N*_0_"], [0.5, "*N*_0_/2"], [0.25, "*N*_0_/4"], [0.125, "*N*_0_/8"]], lx: "*t*", ly: "*N*" });
  let b = R.body;
  [[1, 0.5], [2, 0.25], [3, 0.125]].forEach(([t, v]) => {
    b += L(R.X(t), R.Y(0), R.X(t), R.Y(v), { c: MUTE, w: 0.9, d: "3 3" }) + L(R.X(0), R.Y(v), R.X(t), R.Y(v), { c: MUTE, w: 0.9, d: "3 3" });
  });
  b += courbe(R, t => Math.pow(2, -t), 0, 4.4);
  return svg(330, 190, b, 62);
};

module.exports = S;
