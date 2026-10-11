/* Construit la série corrigée : node build.js  ->  serie.html puis PDF via Chrome.
   Formules : KaTeX rendu ici (aucun script dans la page imprimée).
   Polices : Source Serif 4 (texte) et Source Sans 3 (titres), servies en local. */
const fs = require("fs"), path = require("path"), { execFileSync } = require("child_process");
const katex = require("katex");
const { MATHS, PHYSIQUE, ECLAIR, PLAN } = require("./contenu.js");
const S = require("./schemas.js");

const ICI = __dirname;
const SORTIE = path.resolve(ICI, "..", "..", "Cap-ESP-serie-corrigee.pdf");
const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";

/* ---------- mathématiques ---------- */
const macros = {};
function tex(s, display) {
  return katex.renderToString(s, { displayMode: display, throwOnError: true, macros, strict: "ignore", output: "html" });
}
function math(h) {
  return h
    .replace(/\$\$([\s\S]+?)\$\$/g, (m, t) => tex(t.trim(), true))
    .replace(/\$([^$]+?)\$/g, (m, t) => tex(t.trim(), false));
}

/* ---------- polices locales ---------- */
const fs4 = "node_modules/@fontsource/source-serif-4/files/source-serif-4-";
const fs3 = "node_modules/@fontsource/source-sans-3/files/source-sans-3-";
const face = (fam, base, w, st) => ["latin", "latin-ext"].map(sub =>
  `@font-face{font-family:"${fam}";src:url("${base}${sub}-${w}-${st}.woff2") format("woff2");font-weight:${w};font-style:${st};unicode-range:${sub === "latin" ? "U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD" : "U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF"}}`).join("\n");
const POLICES = [
  face("Source Serif 4", fs4, 400, "normal"), face("Source Serif 4", fs4, 400, "italic"),
  face("Source Serif 4", fs4, 600, "normal"), face("Source Serif 4", fs4, 700, "normal"),
  face("Source Sans 3", fs3, 400, "normal"), face("Source Sans 3", fs3, 600, "normal"),
  face("Source Sans 3", fs3, 700, "normal")
].join("\n");

const CSS = String.raw`
${POLICES}
@page{size:A4; margin:15mm 15mm 17mm 15mm;
  @bottom-left{content:"Cap ESP · Série corrigée · Maths et sciences physiques"; font:500 7.6pt "Source Sans 3"; color:#7a8683}
  @bottom-right{content:counter(page) " / " counter(pages); font:600 7.6pt "Source Sans 3"; color:#7a8683}}
@page :first{@bottom-left{content:none} @bottom-right{content:none}}
:root{--ink:#1d2523; --ink2:#4a5653; --mute:#7a8683; --line:#d5dcda; --soft:#f1f5f4;
  --m:#0b6b5f; --m-soft:#e3efec; --p:#9a4f12; --p-soft:#f6ebe0}
*{box-sizing:border-box}
html{-webkit-print-color-adjust:exact; print-color-adjust:exact}
body{margin:0; font:400 10pt/1.46 "Source Serif 4","Cambria Math",Cambria,serif; color:var(--ink);
  font-variant-numeric:lining-nums; hyphens:auto; font-optical-sizing:auto}
h1,h2,h3,.sans{font-family:"Source Sans 3","Segoe UI",sans-serif}
p{margin:0 0 5pt}
b{font-weight:700}
.katex{font-size:1.06em}
.katex-display{margin:5pt 0 6pt}

/* ---------- couverture ---------- */
.cover{height:265mm; display:flex; flex-direction:column; break-after:page; overflow:hidden}
.c-top{border-top:3.2pt solid var(--ink); padding-top:7mm}
.c-kick{font:700 9pt "Source Sans 3"; letter-spacing:.2em; text-transform:uppercase; color:var(--m)}
.c-title{font:700 38pt/1 "Source Sans 3"; letter-spacing:-.02em; margin:4mm 0 3mm}
.c-sub{font:400 15pt/1.3 "Source Serif 4"; font-style:italic; color:var(--ink2); max-width:150mm}
.c-meta{margin-top:5mm; font:600 9pt "Source Sans 3"; color:var(--mute); letter-spacing:.04em}
.c-grid{display:grid; grid-template-columns:1fr 1fr; gap:8mm; margin-top:9mm}
.c-box h3{font:700 8.6pt "Source Sans 3"; letter-spacing:.14em; text-transform:uppercase; color:var(--ink2);
  border-bottom:1pt solid var(--ink); padding-bottom:1.6mm; margin:0 0 2.6mm}
.toc{width:100%; border-collapse:collapse; font-size:9pt}
.toc td{padding:.62mm 0; border-bottom:.5pt solid var(--line); vertical-align:baseline}
.toc td.id{font:700 8.6pt "Source Sans 3"; width:10mm}
.toc td.d{text-align:right; font:400 8.4pt "Source Sans 3"; color:var(--mute); white-space:nowrap}
.toc tr.m td.id{color:var(--m)} .toc tr.p td.id{color:var(--p)}
.plan{width:100%; border-collapse:collapse; font-size:9.2pt}
.plan th{font:700 8pt "Source Sans 3"; text-align:left; color:var(--mute); letter-spacing:.06em; text-transform:uppercase; padding:0 0 1.4mm}
.plan td{padding:1.5mm 0; border-bottom:.5pt solid var(--line); vertical-align:top}
.plan td:first-child{font:700 8.8pt "Source Sans 3"; width:15mm; white-space:nowrap}
.mode{font-size:9.4pt; color:var(--ink2)}
.mode li{margin-bottom:1.6mm}
.mode ol{padding-left:4.6mm; margin:0}
.donnees{border:.8pt solid var(--ink); padding:3mm 3.6mm; font-size:9pt; display:grid; grid-template-columns:1fr 1fr; gap:1.2mm 3mm}
.donnees .t{grid-column:1/-1; font:700 8.4pt "Source Sans 3"; letter-spacing:.14em; text-transform:uppercase}

/* ---------- parties ---------- */
.part{break-before:page; display:flex; align-items:baseline; gap:4mm; border-bottom:1.4pt solid var(--ink);
  padding-bottom:2.2mm; margin-bottom:5mm}
.part .n{font:700 26pt/1 "Source Sans 3"; color:var(--k)}
.part h2{font:700 17pt/1.1 "Source Sans 3"; margin:0; letter-spacing:-.01em}
.part .s{margin-left:auto; font:600 8.6pt "Source Sans 3"; color:var(--mute); letter-spacing:.06em; text-transform:uppercase}
.maths{--k:var(--m); --k-soft:var(--m-soft)}
.phys{--k:var(--p); --k-soft:var(--p-soft)}

/* ---------- exercice ---------- */
.ex{margin:0 0 6.4mm; break-inside:avoid}
.ex.long{break-inside:auto}
.exh{display:flex; align-items:center; gap:3mm; margin-bottom:2.4mm; break-after:avoid}
.badge{font:700 10.5pt/1 "Source Sans 3"; color:#fff; background:var(--k); padding:1.4mm 2.2mm; border-radius:1.2mm; min-width:11mm; text-align:center}
.exh .tt{flex:1}
.exh .ch{font:700 7.8pt "Source Sans 3"; letter-spacing:.13em; text-transform:uppercase; color:var(--k)}
.exh .ti{font:600 12.4pt/1.2 "Source Sans 3"; color:var(--ink)}
.exh .meta{font:600 8.2pt "Source Sans 3"; color:var(--mute); white-space:nowrap; text-align:right}
.exh .meta i{font-style:normal; color:var(--k); letter-spacing:.08em}
.ex-body{border-left:1.2pt solid var(--k-soft); padding-left:4.4mm; margin-left:1mm}
.ex-body::after{content:""; display:block; clear:both}
ol.q{margin:2mm 0 0; padding-left:5.4mm}
ol.q>li{margin-bottom:1.9mm; padding-left:.8mm}
ol.q>li::marker{font:700 9.6pt "Source Sans 3"; color:var(--k)}
.fig{float:right; margin:0 0 2mm 5mm; text-align:center}
.fig.centre{float:none; margin:2mm auto 1mm; display:block}
.sch{display:block; height:auto; overflow:visible}
table.tab{border-collapse:collapse; margin:2mm 0 2.6mm; font-size:10pt}
table.tab th,table.tab td{border:.6pt solid var(--line); padding:1.2mm 3.6mm; text-align:center}
table.tab th{background:var(--soft)}

/* ---------- corrigé ---------- */
.corr ol.q>li{margin-bottom:2.3mm}
.res{background:var(--k-soft); border-radius:1mm; padding:.1mm 1.1mm; box-decoration-break:clone; -webkit-box-decoration-break:clone;
  font-weight:600}
.res .katex{font-weight:normal}
.reflexe{margin-top:2.6mm; border:.8pt solid var(--k); border-radius:1.6mm; padding:2.2mm 3.2mm 2.2mm 3.2mm; font-size:9.6pt;
  background:#fff; break-inside:avoid; clear:both}
.reflexe::before{content:"Réflexe test"; display:block; font:700 7.6pt "Source Sans 3"; letter-spacing:.16em;
  text-transform:uppercase; color:var(--k); margin-bottom:.8mm}

/* ---------- éclair ---------- */
.eclair{display:grid; grid-template-columns:1fr 1fr; column-gap:8mm; font-size:9.6pt; break-inside:avoid}
.eq{display:flex; align-items:baseline; gap:2.4mm; padding:1.05mm 0; border-bottom:.5pt solid var(--line)}
.eq .no{font:700 8.8pt "Source Sans 3"; color:var(--k); min-width:6mm}
.eq .r{margin-left:auto; padding-left:3mm; font-weight:600; text-align:right; white-space:nowrap; flex:none}
.chapo{font-size:9.6pt; color:var(--ink2); font-style:italic; margin:-1mm 0 4mm}
.bloc-eclair{break-inside:avoid}
h3.sec{font:700 9pt "Source Sans 3"; letter-spacing:.14em; text-transform:uppercase; color:var(--k); margin:5mm 0 2.6mm;
  border-bottom:.6pt solid var(--line); padding-bottom:1.2mm; break-after:avoid}
`;

/* ---------- gabarits ---------- */
const etoiles = n => n === 2 ? "★★" : "★";
function tete(ex, corrige) {
  return `<div class="exh"><div class="badge">${ex.id}</div><div class="tt"><div class="ch">${ex.chap}</div>
<div class="ti">${corrige ? "Corrigé — " : ""}${math(ex.titre)}</div></div>
<div class="meta">${corrige ? "" : `${ex.duree} min<br><i>${etoiles(ex.niv)}</i>`}</div></div>`;
}
function figure(nom) { return nom ? `<div class="fig">${S[nom]()}</div>` : ""; }
const enonce = ex => `<section class="ex">${tete(ex, false)}<div class="ex-body">${figure(ex.schemaE)}${math(ex.enonce)}</div></section>`;
const corrige = ex => `<section class="ex corr${ex.long ? " long" : ""}">${tete(ex, true)}<div class="ex-body">${figure(ex.schemaC)}${math(ex.corrige)}<div class="reflexe">${math(ex.reflexe)}</div></div></section>`;
function eclair(liste, avecReponse) {
  return `<div class="eclair">${liste.map((q, i) => `<div class="eq"><span class="no">${i + 1}</span><span>${math(q[0])}</span>${avecReponse ? `<span class="r">${math(q[1])}</span>` : ""}</div>`).join("")}</div>`;
}
const part = (cls, n, titre, sous) => `<div class="part ${cls}"><span class="n">${n}</span><h2>${titre}</h2><span class="s">${sous}</span></div>`;

/* ---------- couverture ---------- */
const toc = [...MATHS.map(e => ["m", e]), ...PHYSIQUE.map(e => ["p", e])];
const couverture = String.raw`
<section class="cover">
 <div class="c-top">
  <div class="c-kick">Cap ESP · Test d'entrée en L1</div>
  <h1 class="c-title">Série corrigée</h1>
  <div class="c-sub">Mathématiques et sciences physiques : ${MATHS.length + PHYSIQUE.length} exercices de fond, deux séries éclair, des corrigés complets et un réflexe pour le jour du test.</div>
  <div class="c-meta">École Supérieure Polytechnique de Dakar · niveau Terminale S2 · programme officiel sénégalais</div>
 </div>
 <div class="c-grid">
  <div class="c-box"><h3>Sommaire</h3>
   <table class="toc">${toc.map(([k, e]) => `<tr class="${k}"><td class="id">${e.id}</td><td>${math(e.chap)}</td><td class="d">${e.duree} min</td></tr>`).join("")}
   <tr class="m"><td class="id">É1</td><td>Série éclair · maths</td><td class="d">15 min</td></tr>
   <tr class="p"><td class="id">É2</td><td>Série éclair · physique</td><td class="d">15 min</td></tr></table>
  </div>
  <div>
   <div class="c-box"><h3>Plan des jours restants</h3>
    <table class="plan"><tr><th></th><th>Maths</th><th>Physique</th></tr>
    ${PLAN.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join("")}</table>
   </div>
   <div class="c-box mode" style="margin-top:5mm"><h3>Mode d'emploi</h3>
    <ol>
     <li>Chronométrez-vous avec la durée indiquée. ★ niveau test d'entrée, ★★ renforcé.</li>
     <li>Cherchez sur brouillon <b>sans regarder le corrigé</b>, puis corrigez au stylo d'une autre couleur.</li>
     <li>Les résultats à retenir sont <span class="res" style="--k-soft:#e3efec">surlignés</span> dans les corrigés.</li>
     <li>Chaque corrigé finit par un <b>réflexe test</b> : l'astuce qui fait gagner du temps sur un QCM.</li>
     <li>Notez les exercices ratés : on les refait au jour 7.</li>
    </ol>
   </div>
   <div class="donnees" style="margin-top:4mm"><span class="t">Données (sauf indication contraire)</span>
    <span>$g = 10$ m/s²</span><span>$G = 6{,}67 \times 10^{-11}$ SI</span>
    <span>$e = 1{,}6 \times 10^{-19}$ C</span><span>$m_e = 9{,}1 \times 10^{-31}$ kg</span>
    <span>$h = 6{,}63 \times 10^{-34}$ J·s</span><span>$c = 3 \times 10^8$ m/s</span>
    <span>$1$ eV $= 1{,}6 \times 10^{-19}$ J</span><span>$1$ u $= 931{,}5$ MeV/$c^2$</span>
   </div>

  </div>
 </div>
</section>`;

const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Cap ESP · Série corrigée</title>
<link rel="stylesheet" href="node_modules/katex/dist/katex.min.css"><style>${CSS}</style></head><body>
${math(couverture)}
${part("maths", "1", "Énoncés de mathématiques", `${MATHS.length} exercices`)}<div class="maths">${MATHS.map(enonce).join("")}
<div class="bloc-eclair"><h3 class="sec">Série éclair · maths — 15 minutes, sans calculatrice</h3><p class="chapo">Répondez de tête ou en une ligne de brouillon. Objectif : 14 sur 16.</p>${eclair(ECLAIR.maths, false)}</div></div>
${part("phys", "2", "Énoncés de sciences physiques", `${PHYSIQUE.length} exercices`)}<div class="phys">${PHYSIQUE.map(enonce).join("")}
<div class="bloc-eclair"><h3 class="sec">Série éclair · physique — 15 minutes</h3><p class="chapo">Ordres de grandeur et formules à connaître par cœur. Objectif : 14 sur 16.</p>${eclair(ECLAIR.physique, false)}</div></div>
${part("maths", "3", "Corrigés de mathématiques", "résultats surlignés")}<div class="maths">${MATHS.map(corrige).join("")}
<div class="bloc-eclair"><h3 class="sec">Série éclair · maths — réponses</h3>${eclair(ECLAIR.maths, true)}</div></div>
${part("phys", "4", "Corrigés de sciences physiques", "résultats surlignés")}<div class="phys">${PHYSIQUE.map(corrige).join("")}
<div class="bloc-eclair"><h3 class="sec">Série éclair · physique — réponses</h3>${eclair(ECLAIR.physique, true)}</div></div>
</body></html>`;

fs.writeFileSync(path.join(ICI, "serie.html"), html);
if (process.argv.includes("--html")) process.exit(0);
execFileSync(CHROME, ["--headless", "--disable-gpu", "--no-pdf-header-footer", "--allow-file-access-from-files",
  "--virtual-time-budget=8000", `--print-to-pdf=${SORTIE}`, "file:///" + path.join(ICI, "serie.html").replace(/\\/g, "/")], { stdio: "ignore" });
console.log("PDF :", SORTIE);
