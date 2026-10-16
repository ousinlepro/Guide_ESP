"""Fiche « Derniers réglages » (thème sombre, lecture à l'écran), tirée des vrais tests ESP.
Usage : python outils/reglages.py  ->  Cap-ESP-derniers-reglages.pdf"""
import io, os, subprocess

ICI = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(ICI)
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

CSS = """
@page{size:A4; margin:11mm 11mm 12mm; background:#0B1413;
  @bottom-right{content:counter(page) " / " counter(pages); font:600 8pt Bahnschrift; color:#5E716C}
  @bottom-left{content:"CAP ESP // DERNIERS RÉGLAGES"; font:600 8pt Bahnschrift; color:#5E716C; letter-spacing:.08em}}
*{box-sizing:border-box}
html{-webkit-print-color-adjust:exact; print-color-adjust:exact; background:#0B1413}
body{margin:0; color:#E2EDE9; font:10.2pt/1.42 "Segoe UI",Calibri,sans-serif}
b{color:#FFFFFF}
h1{font:700 30pt/1 Bahnschrift; margin:0 0 2mm; letter-spacing:-.01em}
.kick{font:600 9pt Consolas,monospace; color:#4FC1AC; letter-spacing:.12em; text-transform:uppercase}
.lead{color:#A9BBB6; margin:1mm 0 5mm; max-width:170mm}
h2{font:700 13pt Bahnschrift; margin:4mm 0 2mm; padding:1.6mm 3mm; background:#4FC1AC; color:#06201C; letter-spacing:.02em; break-after:avoid}
h2.am{background:#DFA157; color:#2A1A06}
h2.fr{background:#9CB8F0; color:#0B1630}
h3{font:600 9pt Consolas,monospace; color:#4FC1AC; margin:3.4mm 0 1.6mm; text-transform:uppercase; letter-spacing:.06em; break-after:avoid}
.g2{display:grid; grid-template-columns:1fr 1fr; gap:1.8mm 4mm}
.c{background:#13201E; border-left:2.4px solid #4FC1AC; border-radius:2mm; padding:1.5mm 2.6mm; break-inside:avoid}
.c.am{border-left-color:#DFA157} .c.fr{border-left-color:#9CB8F0}
.c .q{color:#A9BBB6; font-size:9.2pt}
.c .r{font-weight:600; color:#FFFFFF; font-size:10.4pt}
.c .y{font:600 7.6pt Consolas,monospace; color:#5E716C; float:right; margin-left:2mm}
ul{margin:0; padding-left:4.6mm} li{margin-bottom:1.2mm}
.box{border:1px solid #2F4A44; border-radius:2.4mm; padding:3mm 4mm; background:#101C1A; break-inside:avoid}
.big{display:grid; grid-template-columns:repeat(4,1fr); gap:3mm; margin:3mm 0 1mm}
.big div{background:#13201E; border-radius:2mm; padding:2.6mm; text-align:center}
.big b{display:block; font:700 18pt Bahnschrift; color:#4FC1AC}
.big span{font-size:8.6pt; color:#A9BBB6}
table{border-collapse:collapse; width:100%; font-size:9.6pt}
td{padding:1.3mm 2mm; border-bottom:1px solid #22332F; vertical-align:top}
td:first-child{color:#A9BBB6; width:44%}
.pb{break-before:page}
"""

def carte(q, r, y="", cls=""):
    return f'<div class="c {cls}"><span class="y">{y}</span><div class="q">{q}</div><div class="r">{r}</div></div>'

def tableau(lignes):
    return "<table>" + "".join(f"<tr><td>{a}</td><td>{b}</td></tr>" for a, b in lignes) + "</table>"

REVIENT_M = [
    ("z̄ + |z| = 6 + 2i", "z = 8/3 − 2i", "17·22·24"),
    ("lim (1 − 1/x)<sup>2x</sup> en +∞", "e⁻² ; et (1 − 1/x)<sup>αx</sup> → e<sup>−α</sup>", "19·22·24"),
    ("∫₋₁¹ x³e<sup>|x|</sup> dx", "0 (fonction impaire)", "17·19·22"),
    ("u<sub>n</sub> = ∫₀¹ tⁿe<sup>−t</sup> dt", "1/(e(n+1)) ≤ u<sub>n</sub> ≤ 1/(n+1)", "19·22"),
    ("Coefficient de x⁷ dans (x² − 1)(x + 1)<sup>11</sup>", "132 = C(11,5) − C(11,7)", "19·22"),
    ("4∫₁<sup>e</sup> x ln x dx", "e² + 1", "19·24"),
    ("z = (2 + 4i)/(2 − i)", "z = 2i : imaginaire pur", "17·24"),
    ("Dérivée de 2<sup>x</sup> + ln(−x)", "2<sup>x</sup> ln 2 + 1/x", "19·24"),
    ("(cos x − 1)/√(1 − x²) est définie sur", "]−1 ; 1[", "19·24"),
    ("Rotation de centre i, d'angle −π/3", "z′ = (1/2 − i√3/2)z − √3/2 + i/2", "17·22"),
    ("|z − 1 − i| = |z − 1 + i|", "médiatrice de [AB]", "24"),
    ("√(x² − 2|x|) définie sur", "]−∞ ; −2] ∪ [2 ; +∞[ ∪ {0}", "24"),
]
REVIENT_P = [
    ("Ion −2e, m = 2,65×10⁻²⁶ kg, v = 5×10⁵, B = 0,1 T, demi-cercle", "t = πm/(|q|B) ≈ 2,6 μs", "22·24"),
    ("Solénoïde : 800 spires, 20 cm, 2 A, μ₀ = 1,25×10⁻⁶", "B = μ₀NI/L = 10 mT", "22·24"),
    ("LC : 10 μF, 100 mH ; q = 400 μC quand i = 300 mA", "W = 12,5 mJ ; I<sub>max</sub> = 0,5 A", "17·19"),
    ("R (Ω ; I<sub>max</sub>) : (5 ; 0,6) (10 ; 0,4) (15 ; 0,3)", "Série : 9 V · Parallèle : 3 V et 3,3 W", "17·19"),
    ("Puissance de la force de Lorentz", "nulle : la force est perpendiculaire à la vitesse", "22·24"),
    ("Énergie : condensateur / bobine", "q²/(2C) = ½CU² ; ½Li²", "22·24"),
    ("Freinage : 800 kg, 90 → 54 km·h⁻¹ en 5 s", "a = 2 m·s⁻² ; F = 1 600 N", "19"),
    ("Double amplitude d'un pendule simple", "période inchangée", "19"),
]

def page():
    h = ['<div class="kick">Cap ESP · test d\'entrée · Génie informatique</div><h1>Derniers réglages</h1>',
         '<p class="lead">Tiré des vrais sujets de l\'ESP (2017, 2019, 2022, 2024). À relire calmement, sans chercher à apprendre du nouveau.</p>',
         '<div class="big"><div><b>4 × 20</b><span>maths · français · anglais · physique-électricité</span></div>'
         '<div><b>2 h 30</b><span>durée indiquée sur le sujet 2022</span></div>'
         '<div><b>≈ 1 min 50</b><span>par question en moyenne</span></div>'
         '<div><b>0 vide</b><span>aucun malus annoncé : toujours cocher</span></div></div>',
         '<h2>Questions qui reviennent — maths</h2><div class="g2">',
         "".join(carte(q, r, y) for q, r, y in REVIENT_M), '</div>',
         '<h2 class="am">Questions qui reviennent — physique et électricité</h2><div class="g2">',
         "".join(carte(q, r, y, "am") for q, r, y in REVIENT_P), '</div>']

    h.append('<h2 class="am pb">Physique : ce que les sujets demandent vraiment</h2>')
    h.append('<p class="lead" style="margin:0 0 2mm">L\'épreuve « Physique et Électricité » contient aussi de la mécanique, de la gravitation et du nucléaire.</p>')
    h.append('<div class="g2"><div>')
    h.append('<h3>Électricité</h3>' + tableau([
        ("Puissance max fournie à R variable", "R = r : P = E²/(4r)"),
        ("Tension aux bornes d'un générateur", "U = E − rI ; récepteur U = E′ + r′I"),
        ("Pouillet", "I = E/(R + r)"),
        ("Fil, ligne bifilaire", "R = ρl/S avec l = 2 × longueur ; ρ en Ω·m"),
        ("Résistance marquée R, P", "U<sub>max</sub> = √(PR)"),
        ("Coût électrique", "kW × h × prix du kWh"),
        ("RC : moitié de la tension", "t = τ ln 2 ; à t = τ : 63 %"),
        ("Condensateurs", "parallèle : somme ; série : 1/C = Σ1/Cᵢ"),
        ("R critique (fin des oscillations)", "R<sub>c</sub> = 2√(L/C)"),
        ("Facteur de qualité", "Q = Lω₀/R, avec R = U<sub>m</sub>/I<sub>m</sub> à la résonance"),
        ("Impédance R-L", "Z = √(R² + (Lω)²)"),
        ("RL : équation, solution", "di/dt + i/τ = E/L ; i = E/(R + r)(1 − e<sup>−t/τ</sup>)"),
        ("Sphère conductrice", "V = kQ/r ⇒ ΔQ = rΔV/k"),
        ("Solénoïde : auto-inductance", "L = μ₀N²S/l (N total)"),
        ("B augmente pour une particule", "rayon plus petit, vitesse inchangée"),
    ]))
    h.append('</div><div>')
    h.append('<h3>Mécanique, gravitation, atome</h3>' + tableau([
        ("km·h⁻¹ → m·s⁻¹", "diviser par 3,6"),
        ("Force constante", "F = m·Δv/Δt ; énergie dissipée = ½mv²"),
        ("Chute libre depuis h", "v = √(2gh) ; t = √(2h/g)"),
        ("Portée / hauteur max", "v₀² sin 2α/g (∝ v₀²) ; (v₀ sin α)²/(2g)"),
        ("Angle mesuré depuis la VERTICALE", "h = (v₀ cos θ)²/(2g)"),
        ("Circulaire uniforme", "a = v²/R : v × 2 ⇒ a × 4 ; R × 2 ⇒ a ÷ 2"),
        ("Poursuite depuis l'arrêt", "½at² = vt ⇒ t = 2v/a"),
        ("Croisement de deux mobiles", "t = distance/(v₁ + v₂)"),
        ("Pendule élastique", "E = ½kX<sub>m</sub>² ; T = 2π√(m/k) ; v<sub>max</sub> = ωX<sub>m</sub>"),
        ("Deux ressorts de part et d'autre", "k = k₁ + k₂"),
        ("Pendule simple", "T = 2π√(l/g), indépendante de l'amplitude"),
        ("Ressort vertical", "allongement mg/k"),
        ("Poids sur une autre planète", "g ∝ M/R²"),
        ("Kepler 2 ; géostationnaire", "loi des aires ; h ≈ 36 000 km"),
        ("α ; β⁺ ; demi-vies", "noyau d'hélium ; positon ; N₀/2ⁿ"),
        ("Photon ; seuil ; visible", "E = hc/λ ; f₀ = W/h ; 400 à 800 nm"),
        ("Puissance radioactive ; Δm", "P = A·E ; E = Δm·c², 1 u = 1,66×10⁻²⁷ kg"),
        ("Effet photoélectrique", "un photon absorbé, un électron émis"),
    ]))
    h.append('</div></div>')

    h.append('<h2>Le jour J</h2><div class="box"><ul>')
    for x in [
        "<b>Arriver en avance</b>, avec la convocation, une pièce d'identité, des stylos et une montre.",
        "<b>Premier passage rapide</b> : les questions qui reviennent et les applications directes de formule. Marquer le reste.",
        "<b>Maths et physique d'abord</b> : coefficient 3 chacune.",
        "<b>Vérifier les unités</b> : cm → m, μ = 10⁻⁶, m = 10⁻³, km·h⁻¹ ÷ 3,6. C'est le piège n° 1 des sujets de physique.",
        "<b>Question défectueuse</b> (aucune option juste, deux options identiques) : cocher la plus proche et passer, sans y perdre de temps.",
        "<b>Aucune case vide</b> : sans malus, répondre au hasard rapporte en moyenne 1 point sur 4.",
    ]:
        h.append(f"<li>{x}</li>")
    h.append("</ul></div>")
    h.append('<h2 class="fr">Français : les règles qui sont tombées</h2><div class="g2">')
    fr = [
        ("Participe + infinitif", "Elle s'est <b>senti</b> piquer (la guêpe pique) · Elle s'est <b>sentie</b> mourir (elle meurt) · les sornettes que j'ai <b>entendu raconter</b>"),
        ("Pronominaux invariables", "Les années se sont <b>succédé</b> · je me suis <b>rendu compte</b> · elle s'est <b>coupé</b> l'auriculaire, mais elle s'est <b>coupée</b> à l'auriculaire"),
        ("Impératif sans s", "<b>Garde</b> pour toi · <b>Essuie</b>-toi · Ne <b>morcelle</b> pas"),
        ("Demi, aucun, tout", "une <b>demi-heure</b> · <b>aucunes funérailles</b> (pluriel seul) · elle était <b>toute</b> fière"),
        ("Avoir l'air", "Ses cheveux ont l'air <b>desséchés</b> (chose : accord avec le sujet)"),
        ("Mots seulement au pluriel", "grègues, hardes, pierreries, saturnales, funérailles, peignures"),
        ("Orthographe piégée", "sibyllin · vermisseau · malocclusion · quolibet · céans · comté · réveille-matin · tic-tac · bled · balèze · plinthe"),
        ("Expressions", "<b>au temps</b> pour moi · se mettre <b>martel</b> en tête · <b>alter ego</b> · <b>ad vitam aeternam</b> · <b>entrer</b> dans les ordres · un point d'<b>ancrage</b>"),
        ("Conjugaison", "nous <b>plûmes</b>, nous <b>hâtâmes</b> · que nous <b>vouvoyions</b> · que j'<b>aie</b> moulu (subjonctif passé)"),
        ("Accords d'adjectifs", "elle m'a paru <b>pâlotte</b> · expressions <b>désuètes</b> · une jument <b>baie</b> · une rue mal <b>famée</b>"),
    ]
    h.append("".join(carte(a, b, "", "fr") for a, b in fr) + '</div>')

    h.append('<h2 class="fr">Anglais : ce qui revient</h2><div class="g2">')
    en = [
        ("Indénombrables", "advice, luggage, information, time, sugar, noise : <b>much</b>, <b>a little</b>, pas de s"),
        ("Faux amis", "currency (devise) · training (formation) · fees (frais) · eventually (finalement)"),
        ("-ing ou base verbale", "be used to <b>working</b> · stop <b>behaving</b> (arrêter) ≠ stop <b>to take</b> (pour) · had better <b>devote</b> · had rather <b>invest</b>"),
        ("Conditionnel et connecteurs", "If they <b>knew</b>, they would… · Had they known, they would <b>have</b>… · <b>thanks to</b> / <b>because of</b> + nom"),
        ("Prépositions", "thank <b>for</b> · proud <b>of</b> · care <b>about</b> · <b>on</b> the phone · <b>on</b> my way · congratulations <b>on</b>"),
        ("Temps", "last week → prétérit · since 9 → present perfect continu · « Listen! » → présent continu"),
    ]
    h.append("".join(carte(a, b, "", "fr") for a, b in en) + '</div>')

    return "".join(h)


def main():
    html = f'<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Derniers réglages</title><style>{CSS}</style></head><body>{page()}</body></html>'
    src = os.path.join(ICI, "reglages.html")
    io.open(src, "w", encoding="utf-8").write(html)
    out = os.path.join(ROOT, "Cap-ESP-derniers-reglages.pdf")
    if os.path.exists(out):
        os.remove(out)
    subprocess.run([CHROME, "--headless", "--disable-gpu", "--no-pdf-header-footer",
                    "--print-to-pdf=" + out, "file:///" + src.replace("\\", "/")], capture_output=True, timeout=180)
    import pypdf
    print("%d pages  %s" % (len(pypdf.PdfReader(out).pages), out))


if __name__ == "__main__":
    main()
