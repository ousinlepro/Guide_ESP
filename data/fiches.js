/* Fiches de révision — formulaires et mémos condensés.
   Chaque bloc : t (titre) et soit l (lignes), soit tab (tableau {h, r}).
   k force la présentation : "fx" = encadrés de formules, "prose" = puces.
   Sans k, l'application décide (blocFormule). Les « ; » séparent des formules
   qui deviennent des encadrés distincts. */
window.FICHES = [

/* ============================== MATHÉMATIQUES ============================== */
{mat:"maths",titre:"Limites, continuité, dérivation",bloc:[
 {t:"Limites à connaître",k:"fx",l:[
  "lim<sub>x→0</sub> (sin x)/x = 1 ; lim<sub>x→0</sub> (tan x)/x = 1 ; lim<sub>x→0</sub> (1 − cos x)/x² = 1/2",
  "lim<sub>x→0</sub> (e<sup>x</sup> − 1)/x = 1 ; lim<sub>x→0</sub> ln(1 + x)/x = 1 ; lim<sub>h→0</sub> (a<sup>h</sup> − 1)/h = ln a",
  "lim<sub>x→+∞</sub> (ln x)/x<sup>a</sup> = 0 ; lim<sub>x→0<sup>+</sup></sub> x<sup>a</sup> ln x = 0 ; lim<sub>x→+∞</sub> e<sup>x</sup>/x<sup>a</sup> = +∞ ; lim<sub>x→−∞</sub> x<sup>n</sup>e<sup>x</sup> = 0",
  "lim<sub>n→+∞</sub> (1 + 1/n)<sup>n</sup> = e ; a<sup>x</sup> = e<sup>x ln a</sup>"]},
 {t:"Théorèmes et réflexes",k:"prose",l:[
  "<b>TVI</b> : f continue sur [a ; b] et f(a)·f(b) &lt; 0 ⇒ au moins une solution de f(x) = 0. Unicité seulement si f est en plus strictement monotone.",
  "<b>Rolle</b> : f(a) = f(b) ⇒ il existe c ∈ ]a ; b[ tel que f′(c) = 0. <b>Accroissements finis</b> : f(b) − f(a) = f′(c)(b − a).",
  "∞/∞ rationnelle : termes de plus haut degré · ∞ − ∞ avec une racine : conjugué · forme 0/0 : factoriser par (x − a) ou reconnaître un nombre dérivé.",
  "Asymptote oblique y = ax + b ⇔ f(x) − (ax + b) → 0 : faire la division euclidienne."]},
 {t:"Dérivées",k:"fx",l:[
  "(x<sup>n</sup>)′ = nx<sup>n−1</sup> ; (√x)′ = 1/(2√x) ; (1/x)′ = −1/x²",
  "(uv)′ = u′v + uv′ ; (u/v)′ = (u′v − uv′)/v²",
  "(ln u)′ = u′/u ; (e<sup>u</sup>)′ = u′e<sup>u</sup> ; (u<sup>n</sup>)′ = nu′u<sup>n−1</sup> ; (√u)′ = u′/(2√u)",
  "(sin x)′ = cos x ; (cos x)′ = −sin x ; (tan x)′ = 1 + tan²x = 1/cos²x",
  "Tangente en a : y = f′(a)(x − a) + f(a) ; Inflexion : f″ s'annule <b>en changeant</b> de signe"]}]},

{mat:"maths",titre:"Primitives, intégrales, équations différentielles",bloc:[
 {t:"Primitives",k:"fx",l:[
  "u′u<sup>n</sup> → u<sup>n+1</sup>/(n + 1) ; u′/u → ln|u| ; u′e<sup>u</sup> → e<sup>u</sup>",
  "u′/√u → 2√u ; u′/u² → −1/u ; 1/cos²x → tan x",
  "cos(ax) → sin(ax)/a ; sin(ax) → −cos(ax)/a ; e<sup>ax</sup> → e<sup>ax</sup>/a"]},
 {t:"Intégrales",k:"fx",l:[
  "Chasles : ∫<sub>a</sub><sup>b</sup>f + ∫<sub>b</sub><sup>c</sup>f = ∫<sub>a</sub><sup>c</sup>f",
  "Parties : ∫<sub>a</sub><sup>b</sup>u′v = [uv]<sub>a</sub><sup>b</sup> − ∫<sub>a</sub><sup>b</sup>uv′ (on dérive le polynôme)",
  "Valeur moyenne : 1/(b − a) × ∫<sub>a</sub><sup>b</sup>f(x)dx",
  "f impaire ⇒ ∫<sub>−a</sub><sup>a</sup>f = 0 ; f paire ⇒ ∫<sub>−a</sub><sup>a</sup>f = 2∫<sub>0</sub><sup>a</sup>f"]},
 {t:"Équations différentielles",k:"fx",l:[
  "y′ = ay ⇒ y = Ce<sup>ax</sup>",
  "y″ + ω²y = 0 ⇒ y = A cos ωx + B sin ωx, période 2π/ω",
  "y″ − a²y = 0 ⇒ y = Ae<sup>ax</sup> + Be<sup>−ax</sup>"]}]},

{mat:"maths",titre:"Logarithme, exponentielle, suites",bloc:[
 {t:"ln et exp",k:"fx",l:[
  "ln(ab) = ln a + ln b ; ln(a/b) = ln a − ln b ; ln(a<sup>n</sup>) = n ln a",
  "e<sup>a+b</sup> = e<sup>a</sup>e<sup>b</sup> ; e<sup>ln x</sup> = x (x &gt; 0) ; ln(e<sup>x</sup>) = x",
  "ln x = a ⇔ x = e<sup>a</sup> ; e<sup>x</sup> &gt; 0 pour tout x ; log x = ln x / ln 10",
  "Domaine d'abord : chaque ln exige un argument &gt; 0 ; e<sup>2x</sup> + be<sup>x</sup> + c = 0 : poser X = e<sup>x</sup> &gt; 0"]},
 {t:"Suites",k:"fx",l:[
  "Arithmétique : u<sub>n</sub> = u₀ + nr ; S = (nombre de termes) × (premier + dernier)/2",
  "Géométrique : u<sub>n</sub> = u₀q<sup>n</sup> ; 1 + q + … + q<sup>n</sup> = (1 − q<sup>n+1</sup>)/(1 − q)",
  "|q| &lt; 1 ⇒ q<sup>n</sup> → 0 ; q &gt; 1 ⇒ q<sup>n</sup> → +∞ ; 1 + 2 + … + n = n(n + 1)/2",
  "u<sub>n+1</sub> = f(u<sub>n</sub>) → L, f continue ⇒ L = f(L) ; Croissante et majorée ⇒ converge"]}]},

{mat:"maths",titre:"Trigonométrie et second degré",bloc:[
 {t:"Valeurs remarquables",tab:{
  h:["x","0","π/6","π/4","π/3","π/2","π"],
  r:[["cos x","1","√3/2","√2/2","1/2","0","−1"],
     ["sin x","0","1/2","√2/2","√3/2","1","0"],
     ["tan x","0","√3/3","1","√3","—","0"]]}},
 {t:"Formules",k:"fx",l:[
  "cos²x + sin²x = 1 ; 1 + tan²x = 1/cos²x",
  "cos(a + b) = cos a cos b − sin a sin b",
  "sin(a + b) = sin a cos b + cos a sin b",
  "sin 2a = 2 sin a cos a ; cos 2a = 2cos²a − 1 = 1 − 2sin²a",
  "cos(−x) = cos x ; sin(−x) = −sin x ; cos(π − x) = −cos x ; sin(π − x) = sin x",
  "cos x = cos a ⇔ x = ±a + 2kπ",
  "sin x = sin a ⇔ x = a + 2kπ ou x = π − a + 2kπ"]},
 {t:"Second degré",k:"fx",l:[
  "ax² + bx + c = 0 : Δ = b² − 4ac ; Δ &gt; 0 : x = (−b ± √Δ)/(2a) ; Δ = 0 : x = −b/(2a)",
  "Δ &lt; 0 : z = (−b ± i√(−Δ))/(2a), racines complexes conjuguées",
  "Somme −b/a ; Produit c/a ; Racine évidente r : factoriser par (x − r), schéma de Hörner"]}]},

{mat:"maths",titre:"Complexes, probabilités, dénombrement",bloc:[
 {t:"Nombres complexes",k:"fx",l:[
  "i² = −1 ; i<sup>n</sup> : reste de n par 4 → 1, i, −1, −i",
  "|a + ib| = √(a² + b²) ; |z₁z₂| = |z₁||z₂| ; arg(z₁z₂) = arg z₁ + arg z₂",
  "Moivre : (cos θ + i sin θ)<sup>n</sup> = cos nθ + i sin nθ ; Euler : e<sup>iθ</sup> = cos θ + i sin θ",
  "Quotient : multiplier par le conjugué ; (a + ib)(a − ib) = a² + b²",
  "AB = |z<sub>B</sub> − z<sub>A</sub>| ; arg[(z<sub>C</sub> − z<sub>A</sub>)/(z<sub>B</sub> − z<sub>A</sub>)] = (AB⃗ , AC⃗ )",
  "Similitude z′ = az + b : rapport |a|, angle arg a, centre b/(1 − a)"]},
 {t:"Probabilités, dénombrement, statistiques",k:"fx",l:[
  "P(A∪B) = P(A) + P(B) − P(A∩B) ; P(A|B) = P(A∩B)/P(B)",
  "Indépendants : P(A∩B) = P(A)P(B) ; Incompatibles : P(A∩B) = 0",
  "ℬ(n ; p) : P(X = k) = C(n,k)p<sup>k</sup>(1 − p)<sup>n−k</sup> ; E = np ; V = np(1 − p)",
  "Ordre : A(n,p) = n!/(n − p)! ; Sans ordre : C(n,p) = n!/(p!(n − p)!) ; Parties : 2<sup>n</sup>",
  "Régression : passe par G(x̄ ; ȳ) ; −1 ≤ r ≤ 1"]}]},

/* ================================ PHYSIQUE ================================ */
{mat:"physique",titre:"Mécanique et gravitation",bloc:[
 {t:"Cinématique, dynamique, énergie",k:"fx",l:[
  "MRUV : v = at + v₀ ; x = ½at² + v₀t + x₀ ; v² − v₀² = 2a(x − x₀)",
  "Circulaire uniforme : a = v²/R, vers le centre ; v = Rω ; ω = 2πN = 2π/T",
  "RFD — théorème du centre d'inertie : ΣF⃗ = ma⃗<sub>G</sub> (référentiel galiléen)",
  "ΔE<sub>c</sub> = ΣW(F⃗) ; W(P⃗) = mg(z<sub>A</sub> − z<sub>B</sub>) ; W = F·AB·cos α",
  "Sans frottement : E<sub>m</sub> = E<sub>c</sub> + E<sub>p</sub> = constante"]},
 {t:"Applications",k:"fx",l:[
  "Chute libre : t = √(2h/g) ; v = √(2gh) (masse sans effet)",
  "Plan incliné sans frottement : a = g sin α",
  "Projectile : portée (v₀² sin 2α)/g, maximale à 45°",
  "Particule accélérée sous une tension U : E<sub>c</sub> = |q|U"]},
 {t:"Gravitation",k:"fx",l:[
  "F = Gmm′/r² ; g₀ = GM/R² ; g = GM/(R + h)²",
  "Satellite : v = √(GM/r) ; T²/r³ = 4π²/(GM) ; r = R + h",
  "Géostationnaire : T = 24 h, plan équatorial, h ≈ 36 000 km"]}]},

{mat:"physique",titre:"Électromagnétisme et circuits",bloc:[
 {t:"Champ magnétique et forces",k:"fx",l:[
  "Solénoïde : B = μ₀nI (n = N/L) ; Fil : B = μ₀I/(2πr)",
  "Lorentz : F⃗ = qv⃗ ∧ B⃗ ne travaille pas ⇒ ‖v⃗‖ constante",
  "R = mv/(|q|B) ; T = 2πm/(|q|B), indépendante de v",
  "Laplace : F = BIL sin α",
  "Induction : e = −dΦ/dt ; Φ = BS cos θ ; Lenz : l'effet s'oppose à la cause"]},
 {t:"Dipôles RC, RL, LC, RLC",k:"fx",l:[
  "q = Cu ; E = ½Cu² ; u<sub>C</sub> continue ; τ = RC",
  "Charge : u = E(1 − e<sup>−t/τ</sup>) ; Décharge : u = Ee<sup>−t/τ</sup> ; À t = τ : 63 % chargé, 37 % restant",
  "Bobine : u = ri + L·di/dt ; E = ½Li² ; i continue ; τ = L/R",
  "LC : T₀ = 2π√(LC) ; ω₀ = 1/√(LC) ; ω = 2πf",
  "RLC : Z = √(R² + (Lω − 1/(Cω))²) ; Résonance Lω = 1/(Cω) ⇒ Z = R, I max, φ = 0",
  "P = UI cos φ"]},
 {t:"Associations et conducteurs",k:"fx",l:[
  "Résistances : série R₁ + R₂ ; parallèle 1/R = 1/R₁ + 1/R₂",
  "Condensateurs : parallèle C₁ + C₂ ; série 1/C = 1/C₁ + 1/C₂",
  "Ressorts : parallèle k₁ + k₂ ; série 1/k = 1/k₁ + 1/k₂",
  "U = RI ; R = ρl/S ; P = RI² = U²/R"]}]},

{mat:"physique",titre:"Oscillations, ondes, optique, atome",bloc:[
 {t:"Oscillateurs",k:"fx",l:[
  "Pendule élastique : T = 2π√(m/k) ; Pendule simple : T = 2π√(l/g), sans m",
  "x″ + ω₀²x = 0 ⇒ x = A cos(ω₀t + φ) ; a = −ω₀²x ; E<sub>m</sub> = ½kA²"]},
 {t:"Ondes, interférences, lentille",k:"fx",l:[
  "λ = v/f = vT ; Young : i = λD/a ; δ = ax/D",
  "Brillante : δ = kλ ; Sombre : δ = (k + ½)λ ; Centre blanc en lumière blanche",
  "Lentille : 1/OA′ − 1/OA = 1/f′ (objet réel : OA &lt; 0) ; γ = OA′/OA ; C = 1/f′ (f′ en m)"]},
 {t:"Quantique et nucléaire",k:"fx",l:[
  "E = hν = hc/λ ; hc ≈ 1240 eV·nm",
  "Photoélectrique : E<sub>c,max</sub> = hν − W₀ ; W₀ = hν₀ = hc/λ₀ (seuil en fréquence)",
  "Hydrogène : E<sub>n</sub> = −13,6/n² eV ; Lyman → n = 1 (UV), Balmer → n = 2 (visible), Paschen → n = 3 (IR)",
  "Soddy : A et Z conservés ; α : (A − 4, Z − 2) ; β⁻ : (A, Z + 1) ; β⁺ : (A, Z − 1)",
  "N = N₀e<sup>−λt</sup> ; T = ln2/λ ; A = λN (Bq) ; Après n demi-vies : N₀/2<sup>n</sup> ; E<sub>liaison</sub> = Δm·c²"]}]},

{mat:"physique",titre:"Unités, préfixes et constantes",bloc:[
 {t:"Préfixes",tab:{
  h:["G","M","k","m","µ","n","p","f"],
  r:[["10⁹","10⁶","10³","10⁻³","10⁻⁶","10⁻⁹","10⁻¹²","10⁻¹⁵"]]}},
 {t:"Constantes",k:"fx",l:[
  "c = 3×10⁸ m·s⁻¹ ; e = 1,6×10⁻¹⁹ C ; h = 6,63×10⁻³⁴ J·s",
  "G = 6,67×10⁻¹¹ SI ; μ₀ = 4π×10⁻⁷ SI ; g ≈ 9,8 m·s⁻²",
  "1 eV = 1,6×10⁻¹⁹ J ; m<sub>e</sub> = 9,1×10⁻³¹ kg ; m<sub>p</sub> = 1,67×10⁻²⁷ kg",
  "Coulomb : F = k|qq′|/r² ; k = 9×10⁹ SI"]}]},

/* ================================ FRANÇAIS ================================ */
{mat:"francais",titre:"Accord du participe passé — les 6 règles qui tombent",bloc:[
 {t:"Le cœur du programme QCM",k:"prose",l:[
  "Avec <b>être</b> : accord avec le sujet. « Elles sont arrivées. »",
  "Avec <b>avoir</b> : accord avec le COD <i>seulement s'il est placé avant</i>. « Les lettres qu'elle a écrites. »",
  "Suivi d'un <b>infinitif</b> : accord si le COD fait l'action. « Les fleurs que j'ai vues pousser » / « les airs que j'ai entendu chanter ».",
  "<b>Fait</b> et <b>laissé</b> + infinitif : toujours invariables. « Elle s'est fait mal. »",
  "<b>Pronominaux</b> : accord si le pronom est COD. « Elles se sont lavées » mais « se sont lavé les mains », « se sont souri », « se sont succédé », « se sont rendu compte ».",
  "<b>Impersonnels</b> (falloir, pleuvoir, y avoir) et <b>coûté, valu, pesé, vécu, couru</b> au sens propre : invariables."]}]},

{mat:"francais",titre:"Orthographe, homophones, conjugaison",bloc:[
 {t:"Accords délicats",k:"prose",l:[
  "Couleur composée : <b>invariable</b> (vert clair, bleu foncé, jaune citron).",
  "Adjectif composé avec adverbe : 1<sup>er</sup> élément invariable (court-vêtues, nouveau-nés).",
  "<b>Tout</b> adverbe : invariable devant voyelle (tout étonnées), accordé devant consonne ou h aspiré (toutes honteuses).",
  "<b>Demi</b> : invariable avant (une demi-heure), accordé en genre après (deux heures et demie).",
  "<b>Vingt, cent</b> : « s » seulement si multipliés et non suivis d'un nombre (quatre-vingts, deux cent trois).",
  "<b>Quel que</b> + être, accordé avec le sujet (quelles que soient) ; <b>quelque</b> = environ.",
  "En -aux : bail, corail, émail, soupirail, travail, vantail, vitrail. Mais sérail → sérails, détail → détails."]},
 {t:"Homophones",k:"prose",l:[
  "quand (lorsque) · quant à (en ce qui concerne) · qu'en",
  "plutôt (de préférence) · plus tôt (≠ plus tard) — peut être (verbe) · peut-être (sans doute)",
  "quoique (bien que) · quoi que (quelle que soit la chose que)",
  "leur (pronom devant le verbe, invariable) · leurs (déterminant, accordé)"]},
 {t:"Conjugaison",k:"prose",l:[
  "<b>Jamais de conditionnel après « si »</b> : si + présent → futur ; si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé.",
  "Subjonctif après bien que, quoique, avant que, pour que, il faut que. Indicatif après <b>après que</b>.",
  "Le « i » signale l'imparfait : nous conquérions, nous criions (présent : nous conquérons).",
  "Passés simples piégés : il résolut, il conquit, il vainquit, il naquit, il mourut.",
  "Subjonctifs piégés : que vous fassiez, que nous soyons, que vous ayez, qu'il aille."]}]},

{mat:"francais",titre:"Fonctions, figures, versification, littérature",bloc:[
 {t:"Fonctions à reconnaître",k:"prose",l:[
  "<b>Attribut du COD</b> : après juger, croire, trouver, nommer, élire (« nous le jugeons compétent »).",
  "<b>COS</b> : 2<sup>e</sup> complément quand le verbe a déjà un COD (« octroyer aux étudiants des bourses »).",
  "<b>Interrogative indirecte</b> : « J'ignore si il viendra » — COD, ≠ condition. <b>Participiale</b> : « Le soir venu, … »."]},
 {t:"Figures de style",k:"prose",l:[
  "Comparaison (avec outil) · métaphore (sans outil) · personnification",
  "Métonymie (contenant pour contenu) · synecdoque (partie pour le tout) · périphrase",
  "Litote (dire moins pour plus) · euphémisme (atténuer) · hyperbole (exagérer)",
  "Oxymore (deux mots contraires accolés) · antithèse (deux idées opposées)",
  "Anaphore (répétition en tête) · allitération (consonnes) · assonance (voyelles) · chiasme (AB-BA) · gradation"]},
 {t:"Versification",k:"prose",l:[
  "12 = alexandrin (césure après la 6<sup>e</sup>) · 10 = décasyllabe · 9 = ennéasyllabe · 8 = octosyllabe",
  "Distique (2 vers) · tercet (3) · quatrain (4) · sonnet = 2 quatrains + 2 tercets",
  "Rimes AABB plates, ABAB croisées, ABBA embrassées. Le « e » muet s'élide devant voyelle."]},
 {t:"Repères littéraires",k:"prose",l:[
  "XVI<sup>e</sup> humanisme · XVII<sup>e</sup> classicisme · XVIII<sup>e</sup> Lumières · XIX<sup>e</sup> romantisme, réalisme, naturalisme, symbolisme · XX<sup>e</sup> surréalisme, négritude",
  "Négritude : Senghor, Césaire, Damas. Poésie : Senghor <i>Chants d'ombre</i> · David Diop <i>Coups de pilon</i>",
  "Romans : Oyono <i>Une vie de boy</i> · C. H. Kane <i>L'Aventure ambiguë</i> · Sembène <i>Les Bouts de bois de Dieu</i> · Mariama Bâ <i>Une si longue lettre</i> · A. Sow Fall <i>La Grève des bàttu</i> · Camara Laye <i>L'Enfant noir</i>",
  "Contes : Birago Diop <i>Les Contes d'Amadou Koumba</i>"]}]},

/* ================================= ANGLAIS ================================= */
{mat:"anglais",titre:"Les temps — la matière n°1 de l'épreuve",bloc:[
 {t:"Quand employer quoi",k:"prose",l:[
  "<b>Present simple</b> : habitude, vérité générale, horaire (« The train comes at 10 »).",
  "<b>Present continuous</b> : action en cours, projet organisé (« I'm meeting him tomorrow »).",
  "<b>Present perfect</b> : bilan, résultat présent ; <i>since</i> + point de départ, <i>for</i> + durée.",
  "<b>Present perfect continuous</b> : durée d'une action encore en cours (« has been waiting for 15 min »).",
  "<b>Preterit</b> : fait passé daté (<i>yesterday, ago, last week, in 1998</i>) — jamais de present perfect avec ces repères.",
  "<b>Past perfect</b> (had + PP) : antériorité dans le passé (« When he arrived, the party had begun »).",
  "<b>Past perfect continuous</b> : durée avant un moment passé. <b>Future perfect</b> : « By 2030, she will have finished »."]},
 {t:"Conditionnels",k:"prose",l:[
  "Type 1 : If + présent, will + BV · Type 2 : If + prétérit (<i>were</i> partout), would + BV · Type 3 : If + past perfect, would have + PP.",
  "<i>If only</i> + past perfect = regret · <i>unless</i> = if… not · jamais de « will » après « if »."]},
 {t:"Verbes irréguliers les plus piégés",tab:{
  h:["base","prétérit","participe","base","prétérit","participe"],
  r:[["be","was, were","been","go","went","gone"],
     ["begin","began","begun","know","knew","known"],
     ["bring","brought","brought","leave","left","left"],
     ["build","built","built","lose","lost","lost"],
     ["buy","bought","bought","read","read","read"],
     ["come","came","come","see","saw","seen"],
     ["do","did","done","shine","shone","shone"],
     ["eat","ate","eaten","speak","spoke","spoken"],
     ["fall","fell","fallen","take","took","taken"],
     ["get","got","got","think","thought","thought"],
     ["give","gave","given","write","wrote","written"]]}}]},

{mat:"anglais",titre:"Connecteurs, modaux, faux amis",bloc:[
 {t:"Connecteurs",k:"prose",l:[
  "<b>because</b> + proposition · <b>because of / due to / owing to</b> + nom",
  "<b>although / though</b> + proposition · <b>despite / in spite of</b> + nom ou -ing",
  "<b>so that / in order that</b> + proposition · <b>so as to / in order to / to</b> + BV",
  "<b>however, nevertheless, therefore</b> : adverbes de liaison, suivis d'une virgule"]},
 {t:"Modaux",k:"prose",l:[
  "mustn't = interdiction ≠ don't have to = absence d'obligation · must = quasi-certitude ≠ can't = impossible",
  "should have + PP = reproche ou regret · Après <i>make</i> et <i>let</i> (actif) : BV sans « to »"]},
 {t:"Gérondif, infinitif, faux amis",k:"prose",l:[
  "Après une préposition : -ing (about, without, before, look forward <b>to</b>).",
  "enjoy, avoid, mind, suggest, finish, practise + -ing · want, hope, decide, promise, agree + to + BV",
  "stop + -ing (cesser de) ≠ stop to + BV (s'arrêter pour)",
  "<b>Faux amis</b> : actually = en fait · currently = actuellement · attend = assister à · sensible = sensé · sensitive = sensible · library = bibliothèque · pass an exam = le réussir · sit for an exam = le passer",
  "make a mistake, progress, a decision — do homework, research · much / less + indénombrable, many / fewer + dénombrable"]}]},

/* ================================ STRATÉGIE ================================ */
{mat:"strategie",titre:"Stratégie le jour du test",bloc:[
 {t:"Ce qu'est un test d'entrée",k:"prose",l:[
  "Un <b>test d'entrée</b> n'est pas un concours : on franchit une barre d'admission, on ne se bat pas pour un rang.",
  "<b>Une question facile rapporte autant qu'une difficile</b>. Ne jamais rester bloqué.",
  "Objectif réaliste : 12 à 14 sur 20 en note pondérée, pas la perfection."]},
 {t:"Gestion des 3 heures (4 matières)",k:"prose",l:[
  "<b>1<sup>er</sup> passage (≈ 90 min)</b> : seulement ce qui se règle en moins d'une minute. Marquer le reste.",
  "<b>2<sup>e</sup> passage (≈ 60 min)</b> : les questions marquées, maths et physique d'abord (coefficients 3).",
  "<b>Dernier quart d'heure</b> : reporter, vérifier qu'aucune ligne n'est décalée sur la grille.",
  "Français et anglais se traitent vite : les faire tôt, ce sont des points sûrs."]},
 {t:"Technique QCM",k:"prose",l:[
  "Éliminer d'abord : deux distracteurs sautent presque toujours.",
  "Physique : <b>vérifier l'homogénéité</b> et l'ordre de grandeur, sans calcul.",
  "Maths : tester une valeur particulière (x = 0, x = 1, n = 1) plutôt que tout résoudre.",
  "Sans malus annoncé, <b>aucune case vide</b> : une réponse au hasard vaut 25 % d'espérance.",
  "Français : la faute porte souvent sur un seul mot entre deux phrases presque identiques.",
  "« Aucune des réponses » : rarement juste, mais pas jamais."]},
 {t:"La veille et le matin",k:"prose",l:[
  "Aucun chapitre nouveau : fiches, erreurs passées, épreuves blanches.",
  "Arrêter à 20 h la veille, dormir normalement. Le matin : cette fiche, dix minutes.",
  "Pièce d'identité ou carte d'étudiant, convocation, plusieurs stylos, une montre.",
  "Arriver à l'ESP (UCAD, Corniche Ouest) largement en avance."]}]}

];
