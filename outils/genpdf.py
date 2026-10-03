# -*- coding: utf-8 -*-
"""Fiche de révision A4 en deux versions : claire (impression), sombre (écran).
   Usage :  node outils/extrait.js > outils/contenu.json
            python outils/genpdf.py
   Conversion par Chrome en mode impression (chemin ci-dessous)."""
import io, json, os, re, subprocess, sys

ICI = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(ICI)
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
D = json.load(io.open(os.path.join(ICI, "contenu.json"), encoding="utf-8"))

DEMI = 24          # largeur visible (car.) en deçà de laquelle une formule prend une demi-colonne

# ---------------------------------------------------------------------------
# Thèmes. Clair : contraste fort, aplats ≤ 6 %, lisible aussi en noir et blanc.
# ---------------------------------------------------------------------------
THEMES = {
 "impression": dict(
   bg="#FFFFFF", ink="#141C1A", ink2="#38423F", ink3="#56605D", rule="#A3ADAA", hair="#D3D9D7",
   panel="#F7F8F7", foot="#56605D", chip_ink="#FFFFFF",
   maths="#0A5A4F", maths_t="#EEF5F3", physique="#93450B", physique_t="#F8F0E8",
   francais="#7A2150", francais_t="#F7EDF2", anglais="#2A3D92", anglais_t="#EDEFF8",
   strat="#7A5A12", strat_t="#FBF5E7"),
 "ecran": dict(
   bg="#0E1517", ink="#E7EEEB", ink2="#B4C1BD", ink3="#90A09B", rule="#3E4E4A", hair="#24312E",
   panel="#142022", foot="#90A09B", chip_ink="#0E1517",
   maths="#5ECAB6", maths_t="#13292A", physique="#F2A96A", physique_t="#2A2019",
   francais="#EE98BF", francais_t="#2A1A23", anglais="#A0B0F6", anglais_t="#1A1F33",
   strat="#E7C06A", strat_t="#26211A"),
}

CSS = r"""
@page{
  size:A4; margin:10mm 9mm 12.5mm; background:%(bg)s;
  @bottom-left{content:"Cap ESP · fiche de révision · test d'entrée ESP — L1";
    font:7.6pt "Segoe UI",Arial,sans-serif; color:%(foot)s}
  @bottom-right{content:counter(page) " / " counter(pages);
    font:600 8pt Bahnschrift,"Segoe UI",sans-serif; color:%(foot)s}
}
:root{
  --bg:%(bg)s; --ink:%(ink)s; --ink2:%(ink2)s; --ink3:%(ink3)s; --rule:%(rule)s; --hair:%(hair)s;
  --panel:%(panel)s; --chip-ink:%(chip_ink)s;
  --f-disp:Bahnschrift,"Segoe UI",Arial,sans-serif;
  --f-body:"Segoe UI","Helvetica Neue",Arial,sans-serif;
  --f-math:Cambria,"Cambria Math",Georgia,"Times New Roman",serif;
}
.maths{--c:%(maths)s; --t:%(maths_t)s}
.physique{--c:%(physique)s; --t:%(physique_t)s}
.francais{--c:%(francais)s; --t:%(francais_t)s}
.anglais{--c:%(anglais)s; --t:%(anglais_t)s}
.strat{--c:%(strat)s; --t:%(strat_t)s}

*{box-sizing:border-box}
html{background:var(--bg); -webkit-print-color-adjust:exact; print-color-adjust:exact}
body{margin:0; background:var(--bg); color:var(--ink); font-family:var(--f-body);
  font-size:8.6pt; line-height:1.4; font-kerning:normal}
h1,h2,h3,h4{margin:0; line-height:1.15}
/* Voir ACCENTS plus bas : les bandeaux de matière gardent 2 pt au-dessus du
   titre pour que l'accent d'une capitale (MATHÉMATIQUES) reste dans la boîte. */
.mat{padding-top:2pt}
p{margin:0}
b{font-weight:700}
/* vertical-align neutralisé : sinon l'alignement « super » du navigateur
   s'ajoute au décalage et l'exposant flotte trop haut */
sub,sup{font-size:.74em; line-height:0; position:relative; vertical-align:baseline}
sup{top:-.42em} sub{bottom:-.22em}

/* fractions et vecteurs : rendu identique à l'application */
.fr{display:inline-flex; flex-direction:column; align-items:center; vertical-align:middle;
  margin:0 .18em; padding:.1em 0; line-height:1.12; text-align:center}
.fr>i{font-style:normal; display:block; padding:0 .26em; white-space:nowrap}
.fr>i:first-child{border-bottom:.8pt solid currentColor; padding-bottom:.12em}
.fr>i:last-child{padding-top:.26em}
.fr sup{top:-.34em}
.vec{position:relative; white-space:nowrap}
/* bornes d'intégrale empilées : ∫ suivi de b en haut, a en bas */
.lim{display:inline-flex; flex-direction:column; vertical-align:middle; line-height:1.02;
  font-size:.76em; margin:0 .1em 0 .02em}
.lim>sup,.lim>sub{position:static; font-size:1em; line-height:1.02; vertical-align:baseline}
.vec::after{content:"\2192"; position:absolute; left:50%%; top:-.6em;
  transform:translateX(-50%%); font-size:.6em; line-height:1}

/* ================================ en-tête ================================ */
.cover{display:grid; grid-template-columns:1fr auto; gap:6mm; align-items:end;
  padding-bottom:3.6mm; border-bottom:1.6pt solid var(--ink); margin-bottom:3.6mm}
.kick{font:700 7.4pt var(--f-disp); letter-spacing:.16em; text-transform:uppercase; color:var(--ink2)}
.cover h1{font-family:var(--f-disp); font-stretch:87.5%%; font-weight:700; font-size:24pt;
  letter-spacing:-.3pt; margin:1.2mm 0 1.2mm}
.meta{font-size:8.6pt; color:var(--ink2); line-height:1.45}
.legend{display:grid; grid-template-columns:auto auto; gap:1.1mm 4.5mm; font-size:8.6pt}
.lg{display:flex; align-items:center; gap:1.8mm; white-space:nowrap}
.sw{width:3.2mm; height:3.2mm; border-radius:.8mm; background:var(--c); flex:none}
.lg b{font-family:var(--f-disp); font-weight:700; margin-left:auto; padding-left:2mm; color:var(--c)}
.cv-note{grid-column:1/-1; margin-top:.8mm; font-size:7.8pt; color:var(--ink2); text-align:right}

/* ============================ stratégie (page 1) ============================ */
.strat-grid{column-count:2; column-gap:2.6mm; margin-bottom:3mm}
.sb{border:.6pt solid var(--rule); border-radius:1.6mm; padding:2.3mm 2.8mm 1.6mm; background:var(--panel);
  break-inside:avoid; margin-bottom:2.6mm}
.sb.hot{background:var(--t); border-color:var(--c); border-width:.9pt}
.sb h4{font:700 7.6pt var(--f-disp); letter-spacing:.08em; text-transform:uppercase;
  color:var(--c); margin-bottom:1.3mm}
.sb ul{margin:0; padding:0; list-style:none}
.sb li{position:relative; padding-left:3mm; margin-bottom:.9mm; line-height:1.38}
.sb li::before{content:""; position:absolute; left:.2mm; top:.52em; width:1.3mm; height:1.3mm;
  background:var(--c); border-radius:.3mm}

/* ============================== le formulaire ============================== */
.flow{column-count:2; column-gap:6mm; column-rule:.5pt solid var(--hair); column-fill:auto}
.mat{break-inside:avoid; break-after:avoid; display:flex; align-items:baseline; gap:2.4mm;
  border-bottom:1.3pt solid var(--c); padding-bottom:1mm; margin:3.4mm 0 2.4mm}
.mat.first{margin-top:0}
.mat h2{font-family:var(--f-disp); font-stretch:87.5%%; font-weight:700; font-size:14pt;
  color:var(--c); letter-spacing:-.15pt}
.chip{font:700 7.6pt var(--f-disp); color:var(--chip-ink); background:var(--c);
  padding:.5mm 1.7mm; border-radius:1.2mm; letter-spacing:.03em}
.mat .why{margin-left:auto; font-size:7.6pt; color:var(--ink3)}

.fi{margin-bottom:2.8mm}
.fi h3{font-family:var(--f-disp); font-stretch:87.5%%; font-weight:600; font-size:10.2pt;
  color:var(--ink); margin-bottom:1mm; break-after:avoid; display:flex; align-items:center; gap:1.6mm}
.fi h3::before{content:""; width:2mm; height:2mm; border-radius:.5mm; background:var(--c); flex:none}
.bl{margin-bottom:1.6mm}
.bl h4{font:700 7.2pt var(--f-disp); letter-spacing:.07em; text-transform:uppercase;
  color:var(--c); margin:1.3mm 0 .9mm; break-after:avoid}

/* formules : tuiles, deux par ligne quand elles sont courtes */
/* chaque ligne de formules est un bloc insécable : une grande grille unique se
   faisait découper entre deux pages et laissait un fragment en bas de colonne */
.tiles{display:block; --rg:1.1mm; --cg:1.1mm}
.rw{display:grid; grid-template-columns:1fr 1fr; column-gap:var(--cg); margin-bottom:var(--rg); break-inside:avoid}
.rw:last-child{margin-bottom:0}
.t{font-family:var(--f-math); font-size:9pt; line-height:1.52; background:var(--t);
  border-left:1.3pt solid var(--c); border-radius:.9mm; padding:.8mm 1.8mm; break-inside:avoid;
  display:flex; align-items:center}
/* le flex ne centre qu'UN enfant bloc : le texte garde ses espaces à l'intérieur */
.t>span{display:block}
.t.w{grid-column:1 / -1}

/* prose : puces carrées dans la couleur de la matière */
ul.pr{margin:0; padding:0; list-style:none}
ul.pr li{position:relative; padding-left:3mm; margin-bottom:.85mm; line-height:1.4; break-inside:avoid}
ul.pr li::before{content:""; position:absolute; left:.2mm; top:.52em; width:1.2mm; height:1.2mm;
  background:var(--c); border-radius:.3mm}
ul.pr i{font-style:italic}

/* tableaux */
table.tb{width:100%%; border-collapse:collapse; font-family:var(--f-math); font-size:9pt;
  break-inside:avoid; margin-top:.4mm; background:var(--t); border-radius:.9mm; overflow:hidden}
.tb th,.tb td{padding:.75mm 1.1mm; text-align:center; border-bottom:.5pt solid var(--hair); line-height:1.35}
.tb thead th{font-family:var(--f-disp); font-weight:700; font-size:8.4pt; color:var(--c);
  border-bottom:.9pt solid var(--c); background:transparent}
.tb tbody tr:last-child th,.tb tbody tr:last-child td{border-bottom:0}
.tb tbody th{font-family:var(--f-body); font-weight:700; font-size:8.6pt; text-align:left}
.tb.verbs td,.tb.verbs th{font-family:var(--f-body); font-size:8.5pt; padding:.55mm 1mm}
.tb.verbs .b{font-weight:700; text-align:left}
.tb .sep{border-left:.9pt solid var(--c)}
"""


# L'accent d'une capitale (É) dépasse au-dessus d'un titre à interligne serré.
# Quand ce titre ouvre une colonne, Chrome peignait l'accent orphelin en bas de
# la colonne précédente. Remède sans coût de place : une marge intérieure en
# haut, annulée par une marge négative. En milieu de colonne rien ne bouge ; en
# haut de colonne la marge négative est supprimée et l'accent reste dans la
# boîte. Ajouté EN DERNIER, après tout modèle, pour ne pas être écrasé.
ACCENTS = "\n.fi h3,.bl h4{padding-top:.24em !important; margin-top:-.24em !important}\n"


BORNES = re.compile(r"<sub>([^<]*)</sub><sup>([^<]*)</sup>")


def bornes(h):
    """Indice immédiatement suivi d'un exposant (bornes d'intégrale, [uv]ₐᵇ) :
    on les empile, borne supérieure en haut, comme dans un cours."""
    return BORNES.sub(r'<span class="lim"><sup>\2</sup><sub>\1</sub></span>', h)


def tiles(items):
    """Deux formules courtes consécutives partagent une ligne ; une courte
    sans voisine courte prend toute la largeur. L'ordre de l'auteur est
    conservé : il regroupe ce qui va ensemble (somme et produit, etc.)."""
    h, attente = ['<div class="tiles">'], None
    items = [dict(it, h=bornes(it["h"])) for it in items]
    paire = '<div class="rw"><div class="t"><span>%s</span></div><div class="t"><span>%s</span></div></div>'
    seule = '<div class="rw"><div class="t w"><span>%s</span></div></div>'
    for it in items:
        if it["w"] <= DEMI:
            if attente is None:
                attente = it
            else:
                h.append(paire % (attente["h"], it["h"]))
                attente = None
        else:
            if attente is not None:
                h.append(seule % attente["h"])
                attente = None
            h.append(seule % it["h"])
    if attente is not None:
        h.append(seule % attente["h"])
    h.append("</div>")
    return "".join(h)


def prose(items):
    return '<ul class="pr">' + "".join("<li>%s</li>" % it["h"] for it in items) + "</ul>"


def table(b):
    hd, rows = b["h"], b["r"]
    double = len(hd) == 6 and hd[0] == hd[3]          # verbes irréguliers : deux séries côte à côte
    single = len(rows) == 1                          # une seule ligne : pas d'en-tête de ligne
    cls = "tb verbs" if double else "tb"
    h = ['<table class="%s"><thead><tr>' % cls]
    for i, x in enumerate(hd):
        h.append('<th%s>%s</th>' % (' class="sep"' if double and i == 3 else "", x))
    h.append("</tr></thead><tbody>")
    for r in rows:
        h.append("<tr>")
        for i, x in enumerate(r):
            if double:
                c = []
                if i in (0, 3): c.append("b")
                if i == 3: c.append("sep")
                h.append('<td class="%s">%s</td>' % (" ".join(c), x))
            elif i == 0 and not single:
                h.append("<th>%s</th>" % x)
            else:
                h.append("<td>%s</td>" % x)
        h.append("</tr>")
    h.append("</tbody></table>")
    return "".join(h)


def bloc_html(b):
    corps = tiles(b["items"]) if b["kind"] == "fx" else table(b) if b["kind"] == "tab" else prose(b["items"])
    return '<div class="bl"><h4>%s</h4>%s</div>' % (b["t"], corps)


WHY = {"maths": "un tiers de la note", "physique": "un tiers de la note",
       "francais": "des points sûrs, à prendre tôt", "anglais": "surtout les temps verbaux"}


def page(theme):
    return document(CSS % THEMES[theme] + ACCENTS)


def document(css):
    """Le même contenu, habillé par n'importe quelle feuille de style :
    les thèmes ci-dessus comme les modèles de outils/modeles.py."""
    return ("<!doctype html><html lang=\"fr\"><head><meta charset=\"utf-8\">"
            "<title>Cap ESP — fiche de révision</title><style>%s</style></head><body>%s</body></html>"
            % (css, corps()))


def corps():
    h = []
    # --- en-tête ---------------------------------------------------------
    h.append('<header class="cover"><div>'
             '<div class="kick">Fiche de révision · dernière relecture</div>'
             "<h1>Test d'entrée ESP — L1</h1>"
             '<div class="meta">École Supérieure Polytechnique de Dakar · UCAD<br>'
             'QCM de 3 heures · quatre matières · niveau Terminale S2</div></div>'
             '<div><div class="legend">')
    for m in D["matieres"]:
        h.append('<div class="lg %s"><span class="sw"></span>%s<b>×%d</b></div>' % (m["cle"], m["nom"], m["coef"]))
    h.append('<div class="cv-note">Maths et physique : 67 % de la note</div></div></div></header>')

    # --- stratégie : 2 × 2 -----------------------------------------------------
    h.append('<section class="strat-grid strat">')
    # ordre choisi pour équilibrer les deux colonnes : 1-3 à gauche, 2-4 à droite
    ordre = sorted(D["strategie"], key=lambda b: ["Ce qu", "Technique", "Gestion", "La veille"].index(
        next(k for k in ["Ce qu", "Technique", "Gestion", "La veille"] if b["t"].startswith(k))))
    for b in ordre:
        hot = " hot" if b["t"].startswith("Technique") else ""
        h.append('<div class="sb%s"><h4>%s</h4><ul>%s</ul></div>'
                 % (hot, b["t"], "".join("<li>%s</li>" % it["h"] for it in b["items"])))
    h.append("</section>")

    # --- formulaire en deux colonnes ------------------------------------------
    h.append('<main class="flow">')
    for k, m in enumerate(D["matieres"]):
        h.append('<div class="mat %s%s"><h2>%s</h2><span class="chip">coef %d</span><span class="why">%s</span></div>'
                 % (m["cle"], " first" if k == 0 else "", m["nom"], m["coef"], WHY[m["cle"]]))
        for f in m["fiches"]:
            h.append('<article class="fi %s"><h3>%s</h3>%s</article>'
                     % (m["cle"], f["titre"], "".join(bloc_html(b) for b in f["blocs"])))
    h.append("</main>")
    return "".join(h)


def vers_pdf(html, src, out):
    """Écrit le HTML dans src puis le fait imprimer en PDF par Chrome."""
    io.open(src, "w", encoding="utf-8").write(html)
    if os.path.exists(out):
        os.remove(out)
    r = subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
                        "--print-to-pdf=" + out, "file:///" + src.replace("\\", "/")],
                       capture_output=True, timeout=180)
    if not os.path.exists(out):
        sys.stderr.write(r.stderr.decode("utf-8", "replace")[-2000:])
        raise SystemExit("Chrome n'a pas produit " + out)
    return out


def rendre(theme):
    return vers_pdf(page(theme), os.path.join(ICI, "fiche-%s.html" % theme),
                    os.path.join(ROOT, "Cap-ESP-fiche-revision-%s.pdf" % theme))


if __name__ == "__main__":
    import pypdf
    for th in ("impression", "ecran"):
        o = rendre(th)
        n = len(pypdf.PdfReader(o).pages)
        print("%-10s %d pages  %4d Ko  %s" % (th, n, os.path.getsize(o) // 1024, os.path.basename(o)))
