/* Schémas explicatifs — un par mécanisme que les questions mettent en jeu.
   Tracés en SVG natif, sans image ni bibliothèque. Les traits prennent
   currentColor : ils suivent le thème clair comme le thème sombre.
   La classe « hot » réserve la couleur d'accent à l'élément qui porte le sens. */
window.SCHEMAS = {

young:{
 cap:"L'interfrange grandit quand l'écran s'éloigne (D) et rétrécit quand les fentes s'écartent (a).",
 alt:"Deux fentes distantes de a diffractent la lumière vers un écran placé à la distance D, où les franges sont espacées de l'interfrange i.",
 svg:'<svg class="dg" viewBox="0 0 470 210" role="img" aria-label="Dispositif des fentes d\'Young : deux fentes distantes de a, écran à la distance D, franges espacées de i">'+
  '<defs><marker id="ar" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<circle cx="34" cy="100" r="5" fill="currentColor"/>'+
  '<text x="34" y="82" class="dl" text-anchor="middle">S</text>'+
  '<line x1="40" y1="100" x2="136" y2="88" stroke="currentColor" stroke-width="1"/>'+
  '<line x1="40" y1="100" x2="136" y2="112" stroke="currentColor" stroke-width="1"/>'+
  '<line x1="140" y1="30" x2="140" y2="82" stroke="currentColor" stroke-width="3"/>'+
  '<line x1="140" y1="94" x2="140" y2="106" stroke="currentColor" stroke-width="3"/>'+
  '<line x1="140" y1="118" x2="140" y2="175" stroke="currentColor" stroke-width="3"/>'+
  '<text x="112" y="26" class="dl">fentes</text>'+
  '<line x1="126" y1="88" x2="126" y2="112" class="hot" stroke-width="1.4" marker-start="url(#ar)" marker-end="url(#ar)"/>'+
  '<text x="118" y="104" class="dl hot" text-anchor="end">a</text>'+
  '<line x1="144" y1="88" x2="392" y2="58" stroke="currentColor" stroke-width="1" opacity=".75"/>'+
  '<line x1="144" y1="88" x2="392" y2="140" stroke="currentColor" stroke-width="1" opacity=".75"/>'+
  '<line x1="144" y1="112" x2="392" y2="58" stroke="currentColor" stroke-width="1" opacity=".75"/>'+
  '<line x1="144" y1="112" x2="392" y2="140" stroke="currentColor" stroke-width="1" opacity=".75"/>'+
  '<line x1="396" y1="24" x2="396" y2="176" stroke="currentColor" stroke-width="2.5"/>'+
  '<text x="404" y="20" class="dl">écran</text>'+
  '<g class="hot">'+
  '<line x1="388" y1="58" x2="404" y2="58" stroke-width="4"/>'+
  '<line x1="388" y1="79" x2="404" y2="79" stroke-width="4"/>'+
  '<line x1="388" y1="100" x2="404" y2="100" stroke-width="4"/>'+
  '<line x1="388" y1="121" x2="404" y2="121" stroke-width="4"/>'+
  '<line x1="388" y1="142" x2="404" y2="142" stroke-width="4"/>'+
  '<line x1="424" y1="100" x2="424" y2="121" stroke-width="1.4" marker-start="url(#ar)" marker-end="url(#ar)"/>'+
  '<text x="432" y="114" class="dl">i</text></g>'+
  '<line x1="140" y1="192" x2="396" y2="192" stroke="currentColor" stroke-width="1.2" marker-start="url(#ar)" marker-end="url(#ar)"/>'+
  '<text x="268" y="186" class="dl" text-anchor="middle">D</text>'+
  '</svg>'},

rc:{
 cap:"La constante de temps τ = RC fixe la durée : à t = τ, la charge atteint 63 % et la décharge n'a plus que 37 %.",
 alt:"Deux courbes exponentielles : la charge monte de 0 vers E, la décharge descend de E vers 0, toutes deux réglées par τ.",
 svg:'<svg class="dg" viewBox="0 0 430 210" role="img" aria-label="Charge et décharge d\'un condensateur : courbes exponentielles réglées par la constante de temps tau">'+
  '<defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<line x1="56" y1="178" x2="410" y2="178" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar2)"/>'+
  '<line x1="56" y1="178" x2="56" y2="24" stroke="currentColor" stroke-width="1.4" marker-end="url(#ar2)"/>'+
  '<text x="404" y="196" class="dl" text-anchor="end">t</text>'+
  '<text x="46" y="34" class="dl" text-anchor="end">u<tspan baseline-shift="sub" font-size="8">C</tspan></text>'+
  '<line x1="56" y1="44" x2="400" y2="44" stroke="currentColor" stroke-dasharray="4 4" stroke-width="1" opacity=".6"/>'+
  '<text x="46" y="48" class="dl" text-anchor="end">E</text>'+
  '<path d="M56 178 Q 104 64 152 52 T 400 44" fill="none" class="hot" stroke-width="2.4"/>'+
  '<text x="270" y="72" class="dl hot">charge : E(1 − e<tspan baseline-shift="super" font-size="8">−t/τ</tspan>)</text>'+
  '<path d="M56 44 Q 104 158 152 170 T 400 178" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/>'+
  '<text x="270" y="152" class="dl">décharge : E·e<tspan baseline-shift="super" font-size="8">−t/τ</tspan></text>'+
  '<line x1="126" y1="178" x2="126" y2="94" stroke="currentColor" stroke-dasharray="3 3" stroke-width="1"/>'+
  '<line x1="56" y1="94" x2="126" y2="94" stroke="currentColor" stroke-dasharray="3 3" stroke-width="1"/>'+
  '<circle cx="126" cy="94" r="3.5" class="hot" fill="currentColor"/>'+
  '<text x="126" y="196" class="dl" text-anchor="middle">τ = RC</text>'+
  '<text x="46" y="98" class="dl" text-anchor="end">63 %</text>'+
  '</svg>'},

plan:{
 cap:"Seule la composante mg·sin α, parallèle à la pente, met le solide en mouvement ; mg·cos α est compensée par la réaction du support.",
 alt:"Un solide sur un plan incliné d'angle alpha : le poids se décompose en mg sin alpha le long de la pente et mg cos alpha perpendiculairement.",
 svg:'<svg class="dg" viewBox="0 0 420 230" role="img" aria-label="Plan incliné : décomposition du poids en composantes parallèle et perpendiculaire à la pente">'+
  '<defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>'+
  '<marker id="ar3h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<path d="M40 196 L340 196 L340 76 Z" fill="currentColor" opacity=".08"/>'+
  '<path d="M40 196 L340 196 L340 76 Z" fill="none" stroke="currentColor" stroke-width="1.6"/>'+
  '<path d="M78 196 A 38 38 0 0 0 75 181" fill="none" stroke="currentColor" stroke-width="1.2"/>'+
  '<text x="88" y="188" class="dl">α</text>'+
  '<rect x="-14" y="-11" width="28" height="22" transform="translate(182,121) rotate(-21.8)" fill="currentColor" opacity=".18" stroke="currentColor" stroke-width="1.4"/>'+
  '<line x1="182" y1="121" x2="182" y2="192" stroke="currentColor" stroke-width="2.2" marker-end="url(#ar3)"/>'+
  '<text x="190" y="186" class="dl">mg</text>'+'<text x="200" y="175" class="dl" font-size="9" text-anchor="middle">→</text>'+
  '<line x1="182" y1="121" x2="144" y2="136" class="hot" stroke-width="2.4" marker-end="url(#ar3h)"/>'+
  '<text x="112" y="148" class="dl hot">mg·sin α</text>'+
  '<line x1="182" y1="121" x2="209" y2="188" stroke="currentColor" stroke-width="1.6" stroke-dasharray="4 3" marker-end="url(#ar3)"/>'+
  '<text x="218" y="168" class="dl">mg·cos α</text>'+
  '<line x1="182" y1="121" x2="155" y2="54" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar3)"/>'+
  '<text x="132" y="48" class="dl">R</text>'+'<text x="137" y="37" class="dl" font-size="9" text-anchor="middle">→</text>'+
  '<text x="248" y="112" class="dl hot">a = g·sin α</text>'+
  '</svg>'},

lorentz:{
 cap:"La force de Lorentz reste perpendiculaire à la vitesse : elle courbe la trajectoire sans jamais changer la norme de v⃗.",
 alt:"Une particule chargée entre dans un champ magnétique entrant dans la page ; la force reste perpendiculaire à la vitesse et la trajectoire est un cercle de rayon R.",
 svg:'<svg class="dg" viewBox="0 0 470 230" role="img" aria-label="Particule chargée dans un champ magnétique uniforme : trajectoire circulaire de rayon R = mv sur qB">'+
  '<defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>'+
  '<marker id="ar4h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<rect x="24" y="24" width="250" height="182" fill="currentColor" opacity=".05" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/>'+
  '<g stroke="currentColor" stroke-width="1.1" opacity=".55">'+
  '<path d="M52 48l10 10M62 48l-10 10M112 48l10 10M122 48l-10 10M172 48l10 10M182 48l-10 10M232 48l10 10M242 48l-10 10"/>'+
  '<path d="M52 172l10 10M62 172l-10 10M112 172l10 10M122 172l-10 10M172 172l10 10M182 172l-10 10M232 172l10 10M242 172l-10 10"/></g>'+
  '<text x="150" y="20" class="dl" text-anchor="middle">champ B entrant dans la page</text>'+
  '<circle cx="150" cy="115" r="62" fill="none" stroke="currentColor" stroke-width="1.6" stroke-dasharray="5 4"/>'+
  '<circle cx="150" cy="115" r="3" fill="currentColor"/>'+
  '<line x1="150" y1="115" x2="212" y2="115" stroke="currentColor" stroke-width="1.2"/>'+
  '<text x="178" y="108" class="dl" text-anchor="middle">R</text>'+
  '<circle cx="212" cy="115" r="7" class="hot" fill="currentColor"/>'+
  '<line x1="212" y1="115" x2="212" y2="52" class="hot" stroke-width="2.4" marker-end="url(#ar4h)"/>'+
  '<text x="220" y="56" class="dl hot">v</text>'+'<text x="224" y="45" class="dl hot" font-size="9" text-anchor="middle">→</text>'+
  '<line x1="212" y1="115" x2="160" y2="115" stroke="currentColor" stroke-width="2.4" marker-end="url(#ar4)"/>'+
  '<text x="186" y="134" class="dl" text-anchor="middle">F</text>'+'<text x="186" y="123" class="dl" font-size="9" text-anchor="middle">→</text>'+
  '<text x="292" y="104" class="dl hot">R = mv / |q|B</text>'+
  '<text x="292" y="126" class="dl">F ⊥ v : la vitesse</text>'+'<text x="292" y="146" class="dl">garde la m\u00eame norme</text>'+
  '</svg>'},

lentille:{
 cap:"Un objet placé au-delà du foyer donne une image réelle, inversée et réduite : c'est le signe de γ qui le dit.",
 alt:"Construction d'image par une lentille convergente : le rayon parallèle passe par le foyer image, le rayon central n'est pas dévié, l'image est réelle inversée et réduite.",
 svg:'<svg class="dg" viewBox="0 0 470 200" role="img" aria-label="Lentille convergente : construction d\'une image réelle inversée et réduite">'+
  '<defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>'+
  '<marker id="ar5h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<line x1="24" y1="100" x2="450" y2="100" stroke="currentColor" stroke-width="1.2"/>'+
  '<line x1="230" y1="26" x2="230" y2="174" stroke="currentColor" stroke-width="2"/>'+
  '<path d="M224 32l6-8 6 8M224 168l6 8 6-8" fill="none" stroke="currentColor" stroke-width="1.6"/>'+
  '<circle cx="170" cy="100" r="3" fill="currentColor"/><text x="170" y="118" class="dl" text-anchor="middle">F</text>'+
  '<circle cx="290" cy="100" r="3" fill="currentColor"/><text x="290" y="118" class="dl" text-anchor="middle">F′</text>'+
  '<circle cx="230" cy="100" r="3" fill="currentColor"/><text x="236" y="118" class="dl">O</text>'+
  '<line x1="80" y1="100" x2="80" y2="55" stroke="currentColor" stroke-width="2.6" marker-end="url(#ar5)"/>'+
  '<text x="80" y="46" class="dl" text-anchor="middle">objet</text>'+
  '<line x1="80" y1="55" x2="230" y2="55" stroke="currentColor" stroke-width="1.2" opacity=".8"/>'+
  '<line x1="230" y1="55" x2="345" y2="141" stroke="currentColor" stroke-width="1.2" opacity=".8"/>'+
  '<line x1="80" y1="55" x2="345" y2="141" stroke="currentColor" stroke-width="1.2" opacity=".55" stroke-dasharray="4 3"/>'+
  '<line x1="330" y1="100" x2="330" y2="130" class="hot" stroke-width="2.6" marker-end="url(#ar5h)"/>'+
  '<text x="348" y="128" class="dl hot">image</text>'+
  '<text x="348" y="150" class="dl hot">réelle, inversée, réduite</text>'+
  '</svg>'},

trigo:{
 cap:"cos x = k coupe le cercle en DEUX points symétriques par rapport à l'axe des abscisses : il y a toujours deux solutions sur [0 ; 2π[.",
 alt:"Cercle trigonométrique : la droite verticale d'abscisse un demi coupe le cercle en deux points, d'angles pi sur trois et cinq pi sur trois.",
 svg:'<svg class="dg" viewBox="0 0 280 270" role="img" aria-label="Cercle trigonométrique : cos x = 1/2 admet deux solutions, pi/3 et 5pi/3">'+
  '<defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<line x1="16" y1="135" x2="268" y2="135" stroke="currentColor" stroke-width="1.2" marker-end="url(#ar6)"/>'+
  '<line x1="140" y1="256" x2="140" y2="16" stroke="currentColor" stroke-width="1.2" marker-end="url(#ar6)"/>'+
  '<text x="262" y="152" class="dl" text-anchor="end">cos</text>'+
  '<text x="150" y="26" class="dl">sin</text>'+
  '<circle cx="140" cy="135" r="95" fill="none" stroke="currentColor" stroke-width="1.6"/>'+
  '<line x1="187" y1="30" x2="187" y2="240" class="hot" stroke-width="1.6" stroke-dasharray="5 4"/>'+
  '<text x="196" y="46" class="dl hot">cos x = ½</text>'+
  '<line x1="140" y1="135" x2="187" y2="53" stroke="currentColor" stroke-width="1.6"/>'+
  '<line x1="140" y1="135" x2="187" y2="217" stroke="currentColor" stroke-width="1.6"/>'+
  '<circle cx="187" cy="53" r="5" class="hot" fill="currentColor"/>'+
  '<circle cx="187" cy="217" r="5" class="hot" fill="currentColor"/>'+
  '<text x="200" y="76" class="dl hot">π/3</text>'+
  '<text x="200" y="208" class="dl hot">5π/3</text>'+
  '<path d="M168 135 A 28 28 0 0 0 162 118" fill="none" stroke="currentColor" stroke-width="1.2"/>'+
  '</svg>'},

complexe:{
 cap:"Le module est une LONGUEUR (celle de OM), l'argument est un ANGLE : les confondre est l'erreur la plus fréquente du chapitre.",
 alt:"Plan complexe : le point M d'affixe z égale a plus i b, avec le module comme hypoténuse et l'argument comme angle avec l'axe réel.",
 svg:'<svg class="dg" viewBox="0 0 310 230" role="img" aria-label="Plan complexe : module et argument du nombre z = a + ib">'+
  '<defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<line x1="40" y1="182" x2="292" y2="182" stroke="currentColor" stroke-width="1.2" marker-end="url(#ar7)"/>'+
  '<line x1="40" y1="212" x2="40" y2="24" stroke="currentColor" stroke-width="1.2" marker-end="url(#ar7)"/>'+
  '<text x="286" y="200" class="dl" text-anchor="end">Re</text>'+
  '<text x="50" y="34" class="dl">Im</text>'+
  '<text x="30" y="196" class="dl" text-anchor="end">O</text>'+
  '<line x1="230" y1="182" x2="230" y2="62" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>'+
  '<line x1="40" y1="62" x2="230" y2="62" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/>'+
  '<line x1="40" y1="182" x2="230" y2="62" class="hot" stroke-width="2.4"/>'+
  '<circle cx="230" cy="62" r="5" fill="currentColor"/>'+
  '<text x="240" y="56" class="dl">M(z)</text>'+
  '<text x="135" y="198" class="dl">a = Re(z)</text>'+
  '<text x="246" y="126" class="dl">b = Im(z)</text>'+
  '<text x="104" y="106" class="dl hot">|z| = √(a² + b²)</text>'+
  '<path d="M80 182 A 40 40 0 0 0 71 157" fill="none" class="hot" stroke-width="1.6"/>'+
  '<text x="88" y="168" class="dl hot">θ = arg(z)</text>'+
  '</svg>'},

satellite:{
 cap:"L'attraction gravitationnelle FOURNIT l'accélération centripète : en écrivant GMm/r² = mv²/r, la masse du satellite disparaît.",
 alt:"Satellite en orbite circulaire de rayon r autour d'un astre : la force gravitationnelle pointe vers le centre, la vitesse est tangente à l'orbite.",
 svg:'<svg class="dg" viewBox="0 0 330 250" role="img" aria-label="Satellite en orbite circulaire : la force gravitationnelle est centripète et la vitesse tangente">'+
  '<defs><marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker>'+
  '<marker id="ar8h" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto">'+
  '<path d="M0 0L10 5L0 10z" fill="currentColor"/></marker></defs>'+
  '<circle cx="130" cy="140" r="100" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 5"/>'+
  '<circle cx="130" cy="140" r="44" fill="currentColor" opacity=".14" stroke="currentColor" stroke-width="1.6"/>'+
  '<text x="130" y="146" class="dl" text-anchor="middle">M</text>'+
  '<line x1="130" y1="140" x2="201" y2="69" stroke="currentColor" stroke-width="1.2"/>'+
  '<text x="170" y="118" class="dl" text-anchor="middle">r</text>'+
  '<rect x="194" y="63" width="14" height="14" class="hot" fill="currentColor"/>'+
  '<line x1="201" y1="69" x2="150" y2="120" stroke="currentColor" stroke-width="2.4" marker-end="url(#ar8)"/>'+
  '<text x="196" y="106" class="dl">F</text>'+'<text x="200" y="95" class="dl" font-size="9" text-anchor="middle">→</text>'+
  '<line x1="201" y1="69" x2="252" y2="120" class="hot" stroke-width="2.4" marker-end="url(#ar8h)"/>'+
  '<text x="242" y="102" class="dl hot">v</text>'+'<text x="246" y="91" class="dl hot" font-size="9" text-anchor="middle">→</text>'+
  '<text x="228" y="176" class="dl hot">v = √(GM/r)</text>'+
  '<text x="228" y="198" class="dl">T²/r³ = 4π²/GM</text>'+
  '<text x="130" y="238" class="dl" text-anchor="middle">r = R + h</text>'+
  '</svg>'}

};
