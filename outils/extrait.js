/* Extrait les fiches de l'application et les pré-rend avec le VRAI formateur
   (fractions empilées, flèches de vecteur) et la VRAIE règle de présentation.
   Usage : node outils/extrait.js > outils/contenu.json */
const fs = require("fs"), path = require("path");
const ROOT = path.resolve(__dirname, "..");

const src = fs.readFileSync(path.join(ROOT, "index.html"), "utf8").replace(/\r\n/g, "\n");
const app = src.match(/<script>([\s\S]*)<\/script>/)[1];
const a0 = app.indexOf("var CH   =");
const a1 = app.indexOf("/* ===================== Statistiques");
const bf = app.match(/\/\* Un bloc est[\s\S]*?\nfunction blocFormule\(lignes\)\{[\s\S]*?\n}\n/);
const dc = app.match(/\nfunction decoupe\(s\)\{[\s\S]*?\n}\n/);
if (a0 < 0 || a1 < 0 || !bf || !dc) throw new Error("formateur, blocFormule ou decoupe introuvable dans index.html");

const ctx = {};
new Function(app.slice(a0, a1) + bf[0] + dc[0] +
  "\nthis.M = mathify; this.bloc = blocFormule; this.decoupe = decoupe;").call(ctx);
const M = ctx.M;

global.window = {};
require(path.join(ROOT, "data", "fiches.js"));

/* Largeur visible estimée d'un fragment rendu, en caractères :
   une fraction empilée compte pour la plus longue de ses deux lignes,
   un exposant ou un indice pour 70 % de sa longueur. */
function texte(h) { return h.replace(/<[^>]*>/g, "").replace(/&[a-z]+;/g, "x"); }
function largeur(h) {
  let s = h, avant;
  do {                                   // fractions, de l'intérieur vers l'extérieur
    avant = s;
    s = s.replace(/<span class="fr"><i>((?:(?!<span class="fr">)[\s\S])*?)<\/i><i>((?:(?!<span class="fr">)[\s\S])*?)<\/i><\/span>/,
      (m, a, b) => "x".repeat(Math.max(texte(a).length, texte(b).length) + 1));
  } while (s !== avant);
  s = s.replace(/<su[bp]>([\s\S]*?)<\/su[bp]>/g, (m, a) => "x".repeat(Math.ceil(texte(a).length * 0.7)));
  return texte(s).length;
}

const LIB = { maths: "Mathématiques", physique: "Physique · électricité", francais: "Français",
              anglais: "Anglais", strategie: "Stratégie" };
const COEF = { maths: 3, physique: 3, francais: 2, anglais: 1 };

function bloc(b) {
  if (b.tab) return {
    t: b.t, kind: "tab",
    h: b.tab.h.map(M),
    r: b.tab.r.map(r => r.map(M))
  };
  const fx = b.k ? b.k === "fx" : ctx.bloc(b.l);
  if (fx) {
    const items = [];
    b.l.forEach(l => ctx.decoupe(l).forEach(p => {
      const h = M(p.trim());
      items.push({ h, w: largeur(h) });
    }));
    return { t: b.t, kind: "fx", items };
  }
  return { t: b.t, kind: "prose", items: b.l.map(l => ({ h: M(l) })) };
}

const out = { matieres: [], strategie: [] };
["maths", "physique", "francais", "anglais"].forEach(mat => {
  out.matieres.push({
    cle: mat, nom: LIB[mat], coef: COEF[mat],
    fiches: window.FICHES.filter(f => f.mat === mat).map(f => ({ titre: f.titre, blocs: f.bloc.map(bloc) }))
  });
});
window.FICHES.filter(f => f.mat === "strategie").forEach(f => f.bloc.forEach(b => out.strategie.push(bloc(b))));

process.stdout.write(JSON.stringify(out));
