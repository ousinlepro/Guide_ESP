# -*- coding: utf-8 -*-
"""Cinq modèles de la fiche de révision, en NOIR ET BLANC pour l'impression.
   Même contenu que la fiche principale ; seul l'habillage change.
   Usage :  node outils/extrait.js > outils/contenu.json
            python outils/modeles.py
   Produit dans prepa-esp/modeles/ : un PDF par modèle, un aperçu PNG des
   pages 1 et 2 de chacun, et une planche comparative modeles-apercu.png."""
import io, os, sys

ICI = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, ICI)
import genpdf                                   # contenu, structure et conversion

DOSSIER = os.path.join(genpdf.ROOT, "modeles")
os.makedirs(DOSSIER, exist_ok=True)

# Socle en niveaux de gris : la mécanique de la fiche (fractions, exposants,
# appariement des formules, tableaux) reste celle de genpdf ; chaque modèle
# ne fait que repeindre par-dessus.
GRIS = dict(bg="#FFFFFF", ink="#000000", ink2="#2E2E2E", ink3="#4D4D4D", rule="#8A8A8A",
            hair="#C4C4C4", panel="#FFFFFF", foot="#444444", chip_ink="#FFFFFF",
            maths="#000000", maths_t="#F0F0F0", physique="#000000", physique_t="#F0F0F0",
            francais="#000000", francais_t="#F0F0F0", anglais="#000000", anglais_t="#F0F0F0",
            strat="#000000", strat_t="#F0F0F0")

# ---------------------------------------------------------------------------
# 1. CLASSIQUE — l'aide-mémoire de manuel scolaire. Garamond, filets doubles,
#    petites capitales, formules sur lignes pointillées, aucun aplat.
# ---------------------------------------------------------------------------
CLASSIQUE = r"""
@page{size:A4; margin:11mm 10mm 13mm; background:#fff;
  @bottom-left{content:"Cap ESP — fiche de révision · test d'entrée ESP, L1"; font:italic 9pt Garamond,serif; color:#333}
  @bottom-right{content:"— " counter(page) " —"; font:9.5pt Garamond,serif; color:#222}}
:root{--f-disp:Garamond,"Palatino Linotype",serif; --f-body:Garamond,"Palatino Linotype",serif;
  --f-math:Cambria,"Cambria Math",serif}
body{font-size:10pt; line-height:1.25}
.cover{grid-template-columns:1fr; text-align:center; border-bottom:3.2pt double #000;
  padding-bottom:2.4mm; margin-bottom:3mm}
.kick{font:600 8.8pt Garamond,serif; letter-spacing:.24em; color:#333}
.cover h1{font:700 26pt Garamond,serif; letter-spacing:.3pt; margin:.8mm 0 .6mm}
.meta{font-style:italic; font-size:10.4pt; color:#1a1a1a}
.legend{display:flex; justify-content:center; gap:6mm; margin-top:1.4mm; font-size:10.4pt}
.sw{display:none}
.lg b{color:#000; padding-left:1.2mm; font-family:Garamond,serif}
.cv-note{text-align:center; font-style:italic; font-size:9.6pt}
.sb{background:#fff; border:.7pt solid #000; border-radius:0}
.sb.hot{background:#fff; border:2.6pt double #000}
.sb h4{font:600 10pt Garamond,serif; font-variant:small-caps; text-transform:none; letter-spacing:.1em; color:#000}
.sb li::before, ul.pr li::before{content:"–"; background:none; width:auto; height:auto; top:0; left:0;
  font-weight:700; border-radius:0}
.flow{column-rule:.5pt solid #999}
.mat{border-top:1pt solid #000; border-bottom:1pt solid #000; padding:1mm 0; justify-content:center}
.mat h2{font:700 16pt Garamond,serif; font-variant:small-caps; letter-spacing:.08em; color:#000}
.chip{background:none; color:#000; font:italic 10.4pt Garamond,serif; padding:0}
.mat .why{display:none}
.fi h3{font:700 italic 11.8pt Garamond,serif}
.fi h3::before{display:none}
.bl h4{font:600 9.6pt Garamond,serif; font-variant:small-caps; text-transform:none; letter-spacing:.1em; color:#2a2a2a}
.tiles{--rg:0; --cg:3mm}
.t{background:none; border:0; border-bottom:.6pt dotted #555; border-radius:0; padding:.3mm .4mm; font-size:9.2pt; line-height:1.46}
.fi{margin-bottom:2.2mm} .bl{margin-bottom:1.2mm}
.mat{margin:2.8mm 0 2mm}
table.tb{background:none; border-top:1.3pt solid #000; border-bottom:1.3pt solid #000; border-radius:0}
.tb thead th{color:#000; border-bottom:.6pt solid #000; font:700 9.6pt Garamond,serif}
.tb th,.tb td{border-bottom:0}
.tb tbody th{font-family:Garamond,serif; font-size:9.8pt}
.tb.verbs td,.tb.verbs th{font-family:Garamond,serif; font-size:9.6pt}
.tb .sep{border-left:.6pt solid #000}
"""

# ---------------------------------------------------------------------------
# 2. INGÉNIEUR — esprit plan technique. Bahnschrift condensée, étiquettes en
#    Consolas, bandeaux de matière inversés, angles vifs, encadrés gris.
# ---------------------------------------------------------------------------
INGENIEUR = r"""
@page{size:A4; margin:10mm 9mm 12.5mm; background:#fff;
  @bottom-left{content:"CAP ESP // FICHE DE RÉVISION // TEST D'ENTRÉE ESP — L1"; font:8pt Consolas,monospace; color:#333}
  @bottom-right{content:"P." counter(page) "/" counter(pages); font:700 8.8pt Consolas,monospace; color:#000}}
:root{--f-disp:Bahnschrift,"Segoe UI",sans-serif; --f-body:Bahnschrift,"Segoe UI",sans-serif;
  --f-math:Cambria,"Cambria Math",serif}
body{font-size:8.9pt; line-height:1.3}
.cover{border-bottom:3.6pt solid #000; padding-bottom:3mm; margin-bottom:3mm}
.kick{font:700 8.2pt Consolas,monospace; letter-spacing:.04em; color:#222}
.cover h1{font-size:26pt; text-transform:uppercase; font-stretch:80%; letter-spacing:.2pt}
.meta{font-family:Consolas,monospace; font-size:8.4pt; color:#222}
.sw{display:none}
.lg{font:8.8pt Consolas,monospace}
.lg b{color:#000; font-family:Consolas,monospace}
.cv-note{font-family:Consolas,monospace; font-size:8pt}
.sb{background:#fff; border:1pt solid #000; border-radius:0}
.sb.hot{border-width:2.2pt; background:#EFEFEF}
.sb h4{display:inline-block; background:#000; color:#fff; padding:.5mm 1.8mm;
  font:700 8pt Consolas,monospace; letter-spacing:.03em}
.sb li::before, ul.pr li::before{border-radius:0; background:#000}
.mat{background:#111; border:0; padding:1.1mm 2.2mm; margin-top:2.2mm; margin-bottom:1.8mm}
.mat.first{margin-top:0}
.mat h2{color:#fff; text-transform:uppercase; font-size:13.5pt; font-stretch:80%}
.chip{background:#fff; color:#000; border-radius:0; font-family:Consolas,monospace}
.mat .why{color:#E2E2E2; font-family:Consolas,monospace; font-size:7.8pt}
.fi h3{text-transform:uppercase; font-size:10pt; letter-spacing:.02em; font-stretch:85%}
.fi h3::before{border-radius:0; background:#000; width:2.3mm; height:2.3mm}
.bl h4{font:700 8pt Consolas,monospace; color:#2a2a2a; text-transform:none; letter-spacing:0}
.bl h4::before{content:"// "}
.t{background:#EFEFEF; border-left:2.2pt solid #000; border-radius:0; padding:.45mm 1.8mm}
.fi{margin-bottom:2.2mm}
ul.pr li{margin-bottom:.65mm}
table.tb{background:none; border:.9pt solid #000; border-radius:0}
.tb thead th{background:#000; color:#fff; border-bottom:0; font-family:Consolas,monospace; font-size:8.6pt}
.tb th,.tb td{border:.4pt solid #9A9A9A}
.tb .sep{border-left:1.8pt solid #000}
"""

# ---------------------------------------------------------------------------
# 3. CARNET — un cahier de notes soigné. Candara et Corbel, titres soulignés
#    d'un trait épais, formules sur pointillés, cartes à bord tireté.
# ---------------------------------------------------------------------------
CARNET = r"""
@page{size:A4; margin:10.5mm 9.5mm 12.5mm; background:#fff;
  @bottom-left{content:"Cap ESP · mes fiches de révision"; font:italic 9pt Corbel,sans-serif; color:#444}
  @bottom-right{content:counter(page) " / " counter(pages); font:700 9.4pt Candara,sans-serif; color:#000}}
:root{--f-disp:Candara,Corbel,"Segoe UI",sans-serif; --f-body:Corbel,"Segoe UI",sans-serif;
  --f-math:Cambria,"Cambria Math",serif}
/* Corbel et Candara ont des chiffres elzéviriens (0 pareil à o) : on force les chiffres alignés */
body{font-size:9.6pt; line-height:1.34; font-variant-numeric:lining-nums}
.cover{border-bottom:0; margin-bottom:3mm}
.cover h1{font:700 27pt Candara,sans-serif; display:inline-block;
  border-bottom:3.4pt solid #000; padding-bottom:.4mm}
.kick{font:600 8.8pt Candara,sans-serif; letter-spacing:.12em; color:#444}
.meta{font-size:9.8pt; margin-top:1.4mm}
.sw{border-radius:50%; background:#fff; border:1.1pt solid #000; width:3.4mm; height:3.4mm}
.lg b{color:#000; font-family:Candara,sans-serif}
.sb{background:#fff; border:1pt dashed #555; border-radius:2.6mm}
.sb.hot{border:1.8pt solid #000; background:#fff}
.sb h4{font:600 10pt Candara,sans-serif; text-transform:none; letter-spacing:0; color:#000}
.sb li::before, ul.pr li::before{border-radius:50%; background:#000; width:1.3mm; height:1.3mm}
.flow{column-rule:.8pt solid #9A9A9A}
.mat{display:block; border-bottom:0; margin:3.8mm 0 2mm}
.mat h2{display:inline; font:700 17pt Candara,sans-serif; color:#000; border-bottom:3pt solid #000}
.chip{background:none; color:#000; border:1.1pt solid #000; border-radius:3mm; margin-left:2.2mm;
  font:600 8.4pt Candara,sans-serif}
.mat .why{display:block; margin:1.4mm 0 0; font-style:italic; color:#444}
.fi h3{font:600 11.2pt Candara,sans-serif; border-bottom:1pt solid #000; padding-bottom:.5mm}
.fi h3::before{display:none}
.bl h4{font:italic 700 9.4pt Corbel,sans-serif; text-transform:none; letter-spacing:0; color:#333}
.tiles{--rg:0; --cg:3mm}
.t{background:none; border:0; border-bottom:.7pt dotted #777; border-radius:0; padding:.55mm .3mm}
table.tb{background:none; border-radius:0}
.tb thead th{color:#000; font-family:Candara,sans-serif; border-bottom:1.1pt solid #000}
.tb tbody th{font-family:Corbel,sans-serif; font-size:9.4pt}
.tb.verbs td,.tb.verbs th{font-family:Corbel,sans-serif; font-size:9.2pt}
.tb .sep{border-left:.9pt dashed #000}
/* la propriété font: des titres remet les chiffres à leur forme elzévirienne : on impose partout */
*{font-variant-numeric:lining-nums !important}
"""

# ---------------------------------------------------------------------------
# 4. ÉDITORIAL — une mise en page de magazine. Grands titres en Bodoni, texte
#    en Palatino, filets fins, formules séparées par des traits, sans cadres.
# ---------------------------------------------------------------------------
EDITORIAL = r"""
@page{size:A4; margin:11mm 10mm 13mm; background:#fff;
  @bottom-left{content:"Cap ESP — Fiche de révision"; font:italic 8.8pt "Palatino Linotype",serif; color:#444}
  @bottom-right{content:counter(page); font:10pt "Bodoni MT",serif; color:#000}}
:root{--f-disp:"Bodoni MT",Didot,serif; --f-body:"Palatino Linotype","Book Antiqua",serif;
  --f-math:Cambria,"Cambria Math",serif}
body{font-size:9pt; line-height:1.38}
.cover{border-bottom:.6pt solid #000; padding-bottom:3mm; margin-bottom:3.2mm}
.kick{font:600 7.8pt "Palatino Linotype",serif; letter-spacing:.32em; color:#333}
.cover h1{font:700 33pt "Bodoni MT",serif; letter-spacing:-.5pt; line-height:1; margin:1.6mm 0 1.2mm}
.meta{font-style:italic; color:#222}
.sw{display:none}
.lg{font:9.2pt "Palatino Linotype",serif}
.lg b{font:700 italic 12pt "Bodoni MT",serif; color:#000}
.cv-note{font-style:italic}
.sb{background:#fff; border:0; border-left:2.4pt solid #000; border-radius:0; padding:.6mm 0 .4mm 3.4mm}
.sb.hot{background:#F1F1F1; padding:2mm 2.6mm 1.4mm 3.4mm}
.sb h4{font:italic 700 12pt "Bodoni MT",serif; text-transform:none; letter-spacing:0; color:#000}
.sb li::before, ul.pr li::before{background:#000; width:1.1mm; height:1.1mm; border-radius:50%}
.flow{column-rule:none; column-gap:6.5mm}
.mat{border-top:2.8pt solid #000; border-bottom:0; padding-top:1.2mm; margin-top:3.4mm; margin-bottom:2mm}
.mat.first{margin-top:0}
.mat h2{font:700 19pt "Bodoni MT",serif; color:#000; letter-spacing:-.25pt}
.chip{background:none; color:#000; font:italic 11pt "Bodoni MT",serif; padding:0}
.mat .why{font-style:italic; font-family:"Palatino Linotype",serif; color:#444}
.fi h3{font:700 10.6pt "Palatino Linotype",serif; font-variant:small-caps; letter-spacing:.05em}
.fi h3::before{display:none}
.bl h4{font:italic 9.2pt "Palatino Linotype",serif; text-transform:none; letter-spacing:0; color:#333}
.tiles{--rg:0; --cg:4mm}
.t{background:none; border:0; border-top:.45pt solid #9C9C9C; border-radius:0; padding:.5mm .3mm}
table.tb{background:none; border-radius:0}
.tb thead th{font:700 10pt "Bodoni MT",serif; color:#000; border-bottom:.9pt solid #000}
.tb tbody th{font-family:"Palatino Linotype",serif}
.tb.verbs td,.tb.verbs th{font-family:"Palatino Linotype",serif; font-size:8.8pt}
.tb .sep{border-left:.6pt solid #000}
"""

# ---------------------------------------------------------------------------
# 5. BRISTOL COMPACT — la fiche la plus dense, pour imprimer moins de pages.
#    Tw Cen condensée et Calibri, filets tiretés, encadrés gris très légers.
# ---------------------------------------------------------------------------
COMPACT = r"""
@page{size:A4; margin:8mm 8mm 11mm; background:#fff;
  @bottom-left{content:"Cap ESP · fiche de révision · version compacte"; font:8.6pt Calibri,sans-serif; color:#444}
  @bottom-right{content:counter(page) " / " counter(pages); font:700 9.4pt "Tw Cen MT Condensed",sans-serif; color:#000}}
:root{--f-disp:"Tw Cen MT Condensed","Tw Cen MT",Bahnschrift,sans-serif; --f-body:Calibri,"Segoe UI",sans-serif;
  --f-math:Cambria,"Cambria Math",serif}
body{font-size:8.9pt; line-height:1.23}
.cover{border-bottom:1.3pt dashed #000; padding-bottom:2mm; margin-bottom:2.4mm}
.cover h1{font:700 23pt "Tw Cen MT Condensed",sans-serif; letter-spacing:.3pt; margin:.4mm 0 .4mm}
.kick{font:700 9pt "Tw Cen MT Condensed",sans-serif; letter-spacing:.1em}
.sw{display:none}
.lg{font:9.2pt Calibri,sans-serif}
.lg b{color:#000; font-family:"Tw Cen MT Condensed",sans-serif; font-size:11pt}
.strat-grid{margin-bottom:2mm}
.sb{background:#fff; border:.7pt solid #777; border-radius:1mm; padding:1.3mm 2.2mm .7mm; margin-bottom:1.8mm}
.sb.hot{border:1.3pt solid #000; background:#F2F2F2}
.sb h4{font:700 10pt "Tw Cen MT Condensed",sans-serif; letter-spacing:.06em; color:#000}
.sb li{margin-bottom:.35mm; line-height:1.26}
.sb li::before, ul.pr li::before{border-radius:0; background:#000}
.mat{border-bottom:1.3pt dashed #000; margin:2mm 0 1.3mm; padding-bottom:.6mm}
.mat h2{font:700 15pt "Tw Cen MT Condensed",sans-serif; color:#000; text-transform:uppercase; letter-spacing:.05em}
.chip{background:#000; color:#fff; border-radius:.6mm}
.mat .why{color:#444}
.fi{margin-bottom:1.4mm}
.fi h3{font:700 11.2pt "Tw Cen MT Condensed",sans-serif; margin-bottom:.6mm}
.fi h3::before{background:#000; border-radius:0}
.bl{margin-bottom:.8mm}
.bl h4{font:700 8.8pt "Tw Cen MT Condensed",sans-serif; letter-spacing:.08em; color:#2a2a2a; margin:.7mm 0 .45mm}
.tiles{--rg:.55mm; --cg:.55mm}
.t{background:#F2F2F2; border:0; border-radius:.6mm; padding:.22mm 1.3mm; font-size:8.9pt; line-height:1.34}
ul.pr li{margin-bottom:.3mm; line-height:1.26}
table.tb{background:none}
.tb th,.tb td{padding:.45mm .8mm}
.tb thead th{color:#000; font:700 9.6pt "Tw Cen MT Condensed",sans-serif; border-bottom:1pt solid #000}
.tb tbody th{font-family:Calibri,sans-serif}
.tb.verbs td,.tb.verbs th{font-family:Calibri,sans-serif; font-size:9pt}
"""

MODELES = [
    ("classique", "Classique",       "Garamond · filets doubles · petites capitales", CLASSIQUE),
    ("ingenieur", "Ingénieur",       "Bahnschrift et Consolas · bandeaux inversés",   INGENIEUR),
    ("carnet",    "Carnet",          "Candara et Corbel · titres soulignés",          CARNET),
    ("editorial", "Éditorial",       "Bodoni et Palatino · filets fins, sans cadres", EDITORIAL),
    ("compact",   "Bristol compact", "Tw Cen condensée et Calibri · le plus dense",   COMPACT),
]


def construire():
    import fitz, pypdf
    resultats = []
    for i, (slug, nom, police, css) in enumerate(MODELES, 1):
        html = genpdf.document(genpdf.CSS % GRIS + css + genpdf.ACCENTS)
        out = os.path.join(DOSSIER, "modele-%d-%s.pdf" % (i, slug))
        genpdf.vers_pdf(html, os.path.join(ICI, "modele-%d.html" % i), out)
        n = len(pypdf.PdfReader(out).pages)
        doc = fitz.open(out)
        apercus = []
        for p in (0, 1):                 # aperçu en niveaux de gris : ce que donnera l'imprimante
            png = os.path.join(DOSSIER, "modele-%d-%s-page%d.png" % (i, slug, p + 1))
            doc[p].get_pixmap(dpi=130, colorspace=fitz.csGRAY).save(png)
            apercus.append(png)
        doc.close()
        resultats.append(dict(i=i, slug=slug, nom=nom, police=police, pages=n, pdf=out, png=apercus))
        print("%d  %-16s %d pages  %s" % (i, nom, n, os.path.basename(out)))
    planche(resultats)
    return resultats


def planche(res):
    """Planche comparative : page 1 (en haut) et page 2 (en bas) de chaque modèle."""
    from PIL import Image, ImageDraw, ImageFont
    L = 620                                           # largeur d'une vignette
    vign = []
    for r in res:
        col = []
        for png in r["png"]:
            im = Image.open(png).convert("L")
            col.append(im.resize((L, round(im.height * L / im.width)), Image.LANCZOS))
        vign.append(col)
    H = vign[0][0].height
    marge, entete, legende = 40, 110, 96
    W = marge + len(res) * (L + marge)
    Ht = entete + 2 * H + legende + 3 * marge
    sheet = Image.new("L", (W, Ht), 236)
    d = ImageDraw.Draw(sheet)
    f_t = ImageFont.truetype(r"C:\Windows\Fonts\bahnschrift.ttf", 46)
    f_n = ImageFont.truetype(r"C:\Windows\Fonts\bahnschrift.ttf", 34)
    f_s = ImageFont.truetype(r"C:\Windows\Fonts\segoeui.ttf", 22)
    d.text((marge, 34), "Cap ESP — cinq modèles de fiche de révision, noir et blanc", font=f_t, fill=20)
    for k, (r, col) in enumerate(zip(res, vign)):
        x = marge + k * (L + marge)
        y = entete
        d.text((x, y), "%d · %s" % (r["i"], r["nom"]), font=f_n, fill=10)
        d.text((x, y + 44), "%s · %d pages" % (r["police"], r["pages"]), font=f_s, fill=70)
        y += legende
        for im in col:
            d.rectangle([x - 2, y - 2, x + L + 1, y + H + 1], outline=150, width=2)
            sheet.paste(im, (x, y))
            y += H + marge
    out = os.path.join(DOSSIER, "modeles-apercu.png")
    sheet.save(out, optimize=True)
    print("planche :", os.path.basename(out), sheet.size)


if __name__ == "__main__":
    construire()
