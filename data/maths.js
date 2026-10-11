/* Banque MATHÉMATIQUES — programme Terminale S2 (Sénégal, Office du Bac)
   d:1 = niveau test d'entree (bac S2)   d:2 = niveau renforce (marge de securite) */
window.BANQUE = window.BANQUE || {};
window.BANQUE.maths = [

/* ---------- Limites & continuité ---------- */
{id:"M001",ch:"Limites & continuité",d:1,q:"lim<sub>x→+∞</sub> (3x² − 5x + 1)/(2x² + x − 4) =",o:["3/2","0","+∞","−5"],r:0,e:"Pour une fraction rationnelle en +∞, on ne garde que les termes de plus haut degré : 3x²/2x² = 3/2."},
{id:"M002",ch:"Limites & continuité",d:1,q:"lim<sub>x→0</sub> sin(3x)/(5x) =",o:["3/5","1","5/3","0"],r:0,e:"sin(3x)/(5x) = (3/5)·sin(3x)/(3x) et sin(u)/u → 1. Donc 3/5."},
{id:"M003",ch:"Limites & continuité",d:2,q:"lim<sub>x→+∞</sub> (√(x² + x) − x) =",o:["1/2","0","+∞","1"],r:0,e:"On multiplie par le conjugué : (x²+x−x²)/(√(x²+x)+x) = x/(x√(1+1/x)+x) → 1/2."},
{id:"M004",ch:"Limites & continuité",d:1,q:"f(x) = (x² − 4)/(x − 2). Pour prolonger f par continuité en 2, il faut poser f(2) =",o:["4","0","2","f n'est pas prolongeable"],r:0,e:"(x²−4)/(x−2) = x+2 pour x≠2, dont la limite en 2 vaut 4."},
{id:"M005",ch:"Limites & continuité",d:1,q:"f est continue sur [a ; b] et f(a)·f(b) &lt; 0. D'après le théorème des valeurs intermédiaires :",o:["l'équation f(x)=0 admet au moins une solution dans ]a ; b[","f est strictement monotone","f admet un maximum en a","l'équation f(x)=0 admet exactement une solution"],r:0,e:"Le TVI garantit l'existence, pas l'unicité. L'unicité exige en plus la stricte monotonie."},
{id:"M006",ch:"Limites & continuité",d:1,q:"lim<sub>x→+∞</sub> (ln x)/x =",o:["0","+∞","1","−∞"],r:0,e:"Croissances comparées : x l'emporte sur ln x. Plus généralement (ln x)/x<sup>a</sup> → 0 pour a &gt; 0."},
{id:"M007",ch:"Limites & continuité",d:2,q:"La courbe de f(x) = (2x² + 3x − 1)/(x + 1) admet pour asymptote oblique en +∞ :",o:["y = 2x + 1","y = 2x − 1","y = x + 2","y = 2x + 3"],r:0,e:"Division euclidienne : f(x) = 2x + 1 − 2/(x+1). Le reste −2/(x+1) → 0, donc y = 2x + 1."},
{id:"M008",ch:"Limites & continuité",d:1,q:"lim<sub>x→0<sup>+</sup></sub> x·ln x =",o:["0","−∞","+∞","1"],r:0,e:"Croissances comparées. On peut poser x = 1/t : −(ln t)/t → 0."},
{id:"M009",ch:"Limites & continuité",d:1,q:"lim<sub>x→2</sub> (x³ − 8)/(x − 2) =",o:["12","8","6","0"],r:0,e:"x³−8 = (x−2)(x²+2x+4). La limite vaut 4+4+4 = 12 (c'est aussi f′(2) avec f(x)=x³)."},
{id:"M010",ch:"Limites & continuité",d:2,q:"Si lim<sub>x→a</sub> f(x) = b et si g est continue en b, alors lim<sub>x→a</sub> g(f(x)) =",o:["g(b)","b","g(a)","la limite n'existe pas toujours"],r:0,e:"Théorème de la limite d'une fonction composée, au programme de TS2."},
{id:"M011",ch:"Limites & continuité",d:1,q:"lim<sub>x→+∞</sub> (√(x² + 1) − x) =",o:["0","1","+∞","1/2"],r:0,e:"Conjugué : 1/(√(x²+1)+x) → 0. La droite y = x est asymptote oblique."},
{id:"M012",ch:"Limites & continuité",d:2,q:"f est continue et strictement croissante sur [0 ; 3], f(0) = −2 et f(3) = 5. Le nombre de solutions de f(x) = 1 dans [0 ; 3] est :",o:["exactement 1","0","au moins 2","on ne peut pas conclure"],r:0,e:"Continuité + stricte monotonie ⇒ bijection de [0;3] sur [−2;5]. Comme 1 ∈ [−2;5], il y a une solution unique."},

/* ---------- Dérivation ---------- */
{id:"M020",ch:"Dérivation",d:1,q:"La dérivée de f(x) = ln(x² + 1) est :",o:["2x/(x² + 1)","1/(x² + 1)","2x·ln(x² + 1)","1/(2x)"],r:0,e:"(ln u)′ = u′/u avec u = x²+1, u′ = 2x."},
{id:"M021",ch:"Dérivation",d:1,q:"La dérivée de f(x) = e<sup>3x − 1</sup> est :",o:["3e<sup>3x − 1</sup>","e<sup>3x − 1</sup>","(3x−1)e<sup>3x−2</sup>","3e<sup>3x</sup>"],r:0,e:"(e<sup>u</sup>)′ = u′·e<sup>u</sup> avec u = 3x−1, u′ = 3."},
{id:"M022",ch:"Dérivation",d:1,q:"La dérivée de f(x) = x²e<sup>x</sup> est :",o:["x(x + 2)e<sup>x</sup>","2xe<sup>x</sup>","x²e<sup>x</sup>","(x² + 2)e<sup>x</sup>"],r:0,e:"(uv)′ = u′v + uv′ = 2xe<sup>x</sup> + x²e<sup>x</sup> = x(x+2)e<sup>x</sup>."},
{id:"M023",ch:"Dérivation",d:1,q:"La dérivée de f(x) = (x + 1)/(x − 1) est :",o:["−2/(x − 1)²","2/(x − 1)²","1","−2/(x − 1)"],r:0,e:"(u/v)′ = (u′v − uv′)/v² = [(x−1) − (x+1)]/(x−1)² = −2/(x−1)²."},
{id:"M024",ch:"Dérivation",d:1,q:"L'équation de la tangente à la courbe de f(x) = x² au point d'abscisse 1 est :",o:["y = 2x − 1","y = 2x + 1","y = x","y = 2x"],r:0,e:"y = f′(1)(x−1) + f(1) = 2(x−1) + 1 = 2x − 1."},
{id:"M025",ch:"Dérivation",d:1,q:"f(x) = x³ − 3x + 2. f admet un minimum local en :",o:["x = 1","x = −1","x = 0","x = 3"],r:0,e:"f′(x) = 3x²−3 s'annule en ±1. f′ est négative sur ]−1;1[ puis positive : minimum en x = 1 (et maximum en x = −1)."},
{id:"M026",ch:"Dérivation",d:1,q:"La dérivée de tan x est :",o:["1 + tan²x","−1/cos²x","cotan x","sin x/cos²x"],r:0,e:"(tan x)′ = 1/cos²x = 1 + tan²x."},
{id:"M027",ch:"Dérivation",d:1,q:"La courbe de f admet un point d'inflexion en x₀ si :",o:["f″ s'annule en changeant de signe en x₀","f′ s'annule en x₀","f″(x₀) = 0 suffit","f n'est pas dérivable en x₀"],r:0,e:"Il faut le changement de signe de f″ : la courbe traverse alors sa tangente. f(x)=x⁴ vérifie f″(0)=0 sans inflexion."},
{id:"M028",ch:"Dérivation",d:2,q:"f est dérivable en 0. lim<sub>h→0</sub> [f(2h² + h) − f(3h)]/(2h) vaut :",o:["−f′(0)","f′(0)","f′(0)/2","−f′(0)/2"],r:0,e:"Écrire [f(2h²+h) − f(0)]/(2h) − [f(3h) − f(0)]/(2h). Le 1er tend vers f′(0)·(1/2), le 2nd vers f′(0)·(3/2). Différence : (1/2 − 3/2)f′(0) = −f′(0)."},
{id:"M029",ch:"Dérivation",d:2,q:"La dérivée d'ordre 100 de f(x) = xe<sup>x</sup> est :",o:["(100 + x)e<sup>x</sup>","(99 + x)e<sup>x</sup>","100xe<sup>x</sup>","xe<sup>x</sup>"],r:0,e:"Par récurrence, f<sup>(n)</sup>(x) = (n + x)e<sup>x</sup>. Pour n = 100 : (100 + x)e<sup>x</sup>."},
{id:"M030",ch:"Dérivation",d:2,q:"Quelle est l'aire rectangulaire maximale que l'on peut délimiter avec une clôture de 1000 m ?",o:["62 500 m²","6 250 m²","625 m²","250 000 m²"],r:0,e:"Périmètre 2(x+y)=1000 ⇒ y = 500−x. A(x)=x(500−x) maximale en x=250 : A = 250×250 = 62 500 m² (un carré)."},
{id:"M031",ch:"Dérivation",d:2,q:"f est continue sur [a;b], dérivable sur ]a;b[ et f(a) = f(b). Le théorème de Rolle affirme qu'il existe c ∈ ]a;b[ tel que :",o:["f′(c) = 0","f(c) = 0","f′(c) = (f(b)−f(a))/(b−a) ≠ 0","f″(c) = 0"],r:0,e:"C'est le théorème de Rolle. Sa généralisation (accroissements finis) donne f′(c) = (f(b)−f(a))/(b−a)."},

/* ---------- Primitives ---------- */
{id:"M040",ch:"Primitives",d:1,q:"Une primitive de f(x) = 1/x sur ]0 ; +∞[ est :",o:["ln x","−1/x²","1/x²","x·ln x"],r:0,e:"Par définition, ln est la primitive de 1/x sur ]0;+∞[ qui s'annule en 1."},
{id:"M041",ch:"Primitives",d:1,q:"Une primitive de f(x) = cos(2x) est :",o:["(1/2)sin(2x)","2sin(2x)","−(1/2)sin(2x)","sin(2x)"],r:0,e:"Une primitive de cos(ax) est (1/a)sin(ax)."},
{id:"M042",ch:"Primitives",d:1,q:"Une primitive de f(x) = 2x/(x² + 1) est :",o:["ln(x² + 1)","2ln(x² + 1)","1/(x² + 1)","arctan x"],r:0,e:"Forme u′/u, dont une primitive est ln|u|. Ici u = x²+1 &gt; 0."},
{id:"M043",ch:"Primitives",d:1,q:"Une primitive de f(x) = e<sup>−x</sup> est :",o:["−e<sup>−x</sup>","e<sup>−x</sup>","e<sup>x</sup>","−e<sup>x</sup>"],r:0,e:"Une primitive de e<sup>ax</sup> est (1/a)e<sup>ax</sup>, ici a = −1."},
{id:"M044",ch:"Primitives",d:1,q:"Une primitive de f(x) = 1/√x sur ]0 ; +∞[ est :",o:["2√x","√x/2","−1/(2x√x)","ln√x"],r:0,e:"1/√x = x<sup>−1/2</sup>, primitive x<sup>1/2</sup>/(1/2) = 2√x."},
{id:"M045",ch:"Primitives",d:1,q:"F est la primitive de f(x) = 3x² telle que F(0) = 1. Alors F(x) =",o:["x³ + 1","x³","3x³ + 1","x³ − 1"],r:0,e:"F(x) = x³ + k et F(0) = k = 1."},
{id:"M046",ch:"Primitives",d:1,q:"Une primitive de f(x) = 1/cos²x est :",o:["tan x","−tan x","(sin x)/(cos x) + 1","cos x"],r:0,e:"(tan x)′ = 1/cos²x."},
{id:"M047",ch:"Primitives",d:2,q:"Une primitive de f(x) = (2x + 3)(x² + 3x + 1)⁴ est :",o:["(x² + 3x + 1)⁵/5","(x² + 3x + 1)⁵","5(x² + 3x + 1)⁵","(2x+3)⁵/5"],r:0,e:"Forme u′·u⁴ avec u = x²+3x+1 et u′ = 2x+3. Primitive : u⁵/5."},

/* ---------- Logarithme népérien ---------- */
{id:"M050",ch:"Logarithme népérien",d:1,q:"L'ensemble de définition de f(x) = ln(x² − 1) est :",o:["]−∞ ; −1[ ∪ ]1 ; +∞[","]1 ; +∞[","]−1 ; 1[","ℝ*"],r:0,e:"Il faut x² − 1 &gt; 0, c'est-à-dire |x| &gt; 1."},
{id:"M051",ch:"Logarithme népérien",d:1,q:"La solution de ln x + ln(x − 3) = ln 4 est :",o:["x = 4","x = −1 et x = 4","x = 7","x = 1"],r:0,e:"Condition x &gt; 3. L'équation donne x(x−3) = 4 ⇔ x²−3x−4 = 0 ⇔ x = 4 ou x = −1. Seul x = 4 convient."},
{id:"M052",ch:"Logarithme népérien",d:1,q:"L'ensemble des solutions de ln(2x − 1) ≤ 0 est :",o:["]1/2 ; 1]","]−∞ ; 1]","[1 ; +∞[","]0 ; 1/2]"],r:0,e:"Condition 2x−1 &gt; 0. ln(2x−1) ≤ 0 ⇔ 0 &lt; 2x−1 ≤ 1 ⇔ 1/2 &lt; x ≤ 1."},
{id:"M053",ch:"Logarithme népérien",d:1,q:"log(1000) =",o:["3","1000","e³","ln 1000"],r:0,e:"log est le logarithme décimal : log(10³) = 3."},
{id:"M054",ch:"Logarithme népérien",d:1,q:"ln(a) − ln(b) est égal à :",o:["ln(a/b)","ln(a − b)","ln(a)/ln(b)","ln(ab)"],r:0,e:"Propriété algébrique du logarithme, valable pour a &gt; 0 et b &gt; 0."},
{id:"M055",ch:"Logarithme népérien",d:2,q:"lim<sub>x→+∞</sub> [ln(x + 1) − ln(x)] =",o:["0","+∞","1","ln 2"],r:0,e:"ln((x+1)/x) = ln(1 + 1/x) → ln 1 = 0."},
{id:"M056",ch:"Logarithme népérien",d:1,q:"lim<sub>x→0<sup>+</sup></sub> ln x =",o:["−∞","0","+∞","1"],r:0,e:"L'axe des ordonnées est asymptote verticale à la courbe de ln."},
{id:"M057",ch:"Logarithme népérien",d:2,q:"lim<sub>x→0</sub> ln(1 + x)/x =",o:["1","0","+∞","e"],r:0,e:"C'est le nombre dérivé de ln(1+x) en 0, égal à 1."},

/* ---------- Exponentielle ---------- */
{id:"M060",ch:"Exponentielle",d:1,q:"Les solutions de e<sup>2x</sup> − 3e<sup>x</sup> + 2 = 0 sont :",o:["x = 0 et x = ln 2","x = 1 et x = 2","x = ln 3","x = ln 2 seulement"],r:0,e:"Poser X = e<sup>x</sup> &gt; 0 : X² − 3X + 2 = 0 ⇒ X = 1 ou X = 2 ⇒ x = 0 ou x = ln 2."},
{id:"M061",ch:"Exponentielle",d:1,q:"lim<sub>x→−∞</sub> x·e<sup>x</sup> =",o:["0","−∞","+∞","1"],r:0,e:"Croissances comparées : l'exponentielle l'emporte. Plus généralement x<sup>n</sup>e<sup>x</sup> → 0 en −∞."},
{id:"M062",ch:"Exponentielle",d:1,q:"lim<sub>x→+∞</sub> e<sup>x</sup>/x² =",o:["+∞","0","1","e"],r:0,e:"L'exponentielle l'emporte sur toute puissance de x."},
{id:"M063",ch:"Exponentielle",d:1,q:"Pour tout réel x, e<sup>x</sup> est :",o:["strictement positif","positif ou nul","de signe variable","négatif si x &lt; 0"],r:0,e:"exp est à valeurs dans ]0 ; +∞[ : e<sup>x</sup> &gt; 0 pour tout x, même si x est négatif."},
{id:"M064",ch:"Exponentielle",d:1,q:"e<sup>ln 3</sup> + ln(e²) =",o:["5","6","3 + e²","ln 5"],r:0,e:"e<sup>ln 3</sup> = 3 et ln(e²) = 2, donc 3 + 2 = 5."},
{id:"M065",ch:"Exponentielle",d:2,q:"lim<sub>x→0</sub> (e<sup>x</sup> − 1)/x =",o:["1","0","e","+∞"],r:0,e:"C'est le nombre dérivé de exp en 0, soit e⁰ = 1."},
{id:"M066",ch:"Exponentielle",d:2,q:"lim<sub>h→0<sup>+</sup></sub> (1 + tan h)<sup>1/sin h</sup> =",o:["e","1","e<sup>ln 2</sup>","2 ln 2"],r:0,e:"On écrit exp[ln(1+tan h)/(sin h)]. Or ln(1+tan h) ~ tan h ~ sin h, donc le quotient → 1 et la limite vaut e."},

/* ---------- Suites numériques ---------- */
{id:"M070",ch:"Suites numériques",d:1,q:"(u<sub>n</sub>) est arithmétique de premier terme u₀ = 1 et de raison 3. Alors u₁₀ =",o:["31","30","33","28"],r:0,e:"u<sub>n</sub> = u₀ + nr = 1 + 10×3 = 31."},
{id:"M071",ch:"Suites numériques",d:1,q:"1 + q + q² + … + q<sup>n</sup> (avec q ≠ 1) est égal à :",o:["(1 − q<sup>n+1</sup>)/(1 − q)","(1 − q<sup>n</sup>)/(1 − q)","n·q<sup>n</sup>","(q<sup>n+1</sup> − 1)/q"],r:0,e:"Somme des n+1 premiers termes d'une suite géométrique de raison q et de premier terme 1."},
{id:"M072",ch:"Suites numériques",d:1,q:"Une suite géométrique de raison q avec |q| &lt; 1 :",o:["converge vers 0","diverge","converge vers q","est constante"],r:0,e:"q<sup>n</sup> → 0 dès que |q| &lt; 1."},
{id:"M073",ch:"Suites numériques",d:1,q:"u<sub>n+1</sub> = u<sub>n</sub>/2 + 3 converge vers L. Alors L =",o:["6","3","2","0"],r:0,e:"Si (u<sub>n</sub>) converge vers L et f est continue en L, alors L = f(L) : L = L/2 + 3 ⇒ L = 6."},
{id:"M074",ch:"Suites numériques",d:1,q:"1 + 2 + 3 + … + n =",o:["n(n + 1)/2","n²/2","n(n − 1)/2","(n + 1)²/2"],r:0,e:"Somme des n premiers entiers naturels non nuls."},
{id:"M075",ch:"Suites numériques",d:1,q:"Toute suite croissante et majorée :",o:["converge","tend vers +∞","est constante à partir d'un certain rang","est bornée mais peut diverger"],r:0,e:"Théorème de convergence monotone (admis en TS2)."},
{id:"M076",ch:"Suites numériques",d:1,q:"u<sub>n</sub> = (2n + 1)/(n + 3). lim u<sub>n</sub> =",o:["2","1/3","+∞","0"],r:0,e:"On factorise par n : (2 + 1/n)/(1 + 3/n) → 2."},
{id:"M077",ch:"Suites numériques",d:2,q:"Si lim u<sub>n</sub> = 0, laquelle de ces affirmations est FAUSSE ?",o:["(u<sub>n</sub>) est positive à partir d'un certain rang","(u<sub>n</sub>) est bornée","(u<sub>n</sub>) est majorée","|u<sub>n</sub>| &lt; 1 à partir d'un certain rang"],r:0,e:"Contre-exemple : u<sub>n</sub> = (−1)<sup>n</sup>/n tend vers 0 en changeant de signe indéfiniment. Les trois autres sont vraies."},
{id:"M078",ch:"Suites numériques",d:2,q:"u<sub>n</sub> = (1 + 1/n)<sup>n</sup>. lim<sub>n→+∞</sub> u<sub>n</sub> =",o:["e","1","+∞","0"],r:0,e:"n·ln(1 + 1/n) = ln(1+1/n)/(1/n) → 1, donc u<sub>n</sub> → e."},

/* ---------- Calcul intégral ---------- */
{id:"M080",ch:"Calcul intégral",d:1,q:"∫₀¹ x dx =",o:["1/2","1","0","2"],r:0,e:"[x²/2]₀¹ = 1/2."},
{id:"M081",ch:"Calcul intégral",d:1,q:"∫₁<sup>e</sup> (1/x) dx =",o:["1","e","e − 1","0"],r:0,e:"[ln x]₁<sup>e</sup> = ln e − ln 1 = 1."},
{id:"M082",ch:"Calcul intégral",d:1,q:"∫₀<sup>π</sup> sin x dx =",o:["2","0","1","π"],r:0,e:"[−cos x]₀<sup>π</sup> = −(−1) − (−1) = 2."},
{id:"M083",ch:"Calcul intégral",d:2,q:"∫₀¹ x·e<sup>x</sup> dx =",o:["1","e","e − 1","e + 1"],r:0,e:"Intégration par parties : [xe<sup>x</sup>]₀¹ − ∫₀¹e<sup>x</sup>dx = e − (e − 1) = 1."},
{id:"M084",ch:"Calcul intégral",d:1,q:"La valeur moyenne de f sur [a ; b] est :",o:["(1/(b − a))∫<sub>a</sub><sup>b</sup> f(x)dx","∫<sub>a</sub><sup>b</sup> f(x)dx","(f(a) + f(b))/2","(b − a)∫<sub>a</sub><sup>b</sup> f(x)dx"],r:0,e:"Définition de la valeur moyenne d'une fonction continue sur un intervalle."},
{id:"M085",ch:"Calcul intégral",d:1,q:"Si f est impaire et continue sur [−a ; a], alors ∫<sub>−a</sub><sup>a</sup> f(x)dx =",o:["0","2∫₀<sup>a</sup>f(x)dx","a·f(a)","on ne peut pas conclure"],r:0,e:"Par symétrie, les aires algébriques de part et d'autre de 0 se compensent."},
{id:"M086",ch:"Calcul intégral",d:1,q:"∫<sub>a</sub><sup>b</sup> f + ∫<sub>b</sub><sup>c</sup> f =",o:["∫<sub>a</sub><sup>c</sup> f","∫<sub>a</sub><sup>b</sup> f","0","∫<sub>c</sub><sup>a</sup> f"],r:0,e:"Relation de Chasles."},
{id:"M087",ch:"Calcul intégral",d:2,q:"I = ∫<sub>−π/2</sub><sup>π/2</sup> [e<sup>−x²</sup>sin x + cos²x] dx vaut :",o:["π/2","−π/2","1","0"],r:0,e:"e<sup>−x²</sup>sin x est impaire ⇒ son intégrale est nulle. cos²x = (1+cos 2x)/2 donne [x/2 + sin(2x)/4] sur [−π/2;π/2] = π/2."},

/* ---------- Équations différentielles ---------- */
{id:"M090",ch:"Équations différentielles",d:1,q:"Les solutions de y′ = ay (a réel) sont :",o:["y = Ce<sup>ax</sup>, C ∈ ℝ","y = ax + C","y = Ce<sup>−ax</sup>","y = C·ln(ax)"],r:0,e:"Solution générale de l'équation différentielle linéaire du premier ordre sans second membre."},
{id:"M091",ch:"Équations différentielles",d:1,q:"La solution de y′ + 2y = 0 vérifiant y(0) = 3 est :",o:["y = 3e<sup>−2x</sup>","y = 3e<sup>2x</sup>","y = e<sup>−2x</sup> + 2","y = −2e<sup>3x</sup>"],r:0,e:"y′ = −2y ⇒ y = Ce<sup>−2x</sup>, et y(0) = C = 3."},
{id:"M092",ch:"Équations différentielles",d:1,q:"Les solutions de y″ + ω²y = 0 sont de la forme :",o:["y = A·cos(ωt) + B·sin(ωt)","y = Ae<sup>ωt</sup> + Be<sup>−ωt</sup>","y = At + B","y = Ae<sup>ω²t</sup>"],r:0,e:"C'est l'équation de l'oscillateur harmonique : solutions sinusoïdales de pulsation ω."},
{id:"M093",ch:"Équations différentielles",d:2,q:"Les solutions de y″ − 4y = 0 sont :",o:["y = Ae<sup>2x</sup> + Be<sup>−2x</sup>","y = A·cos(2x) + B·sin(2x)","y = (Ax + B)e<sup>2x</sup>","y = Ae<sup>4x</sup>"],r:0,e:"Équation caractéristique r² − 4 = 0 ⇒ r = ±2, donc deux exponentielles réelles."},
{id:"M094",ch:"Équations différentielles",d:1,q:"La période des solutions de y″ + 9y = 0 est :",o:["2π/3","3","2π","π/3"],r:0,e:"ω² = 9 donc ω = 3 et T = 2π/ω = 2π/3."},

/* ---------- Nombres complexes ---------- */
{id:"M100",ch:"Nombres complexes",d:1,q:"i<sup>2026</sup> =",o:["−1","1","i","−i"],r:0,e:"2026 = 4×506 + 2, donc i<sup>2026</sup> = i² = −1."},
{id:"M101",ch:"Nombres complexes",d:1,q:"|3 + 4i| =",o:["5","7","√7","25"],r:0,e:"|a + ib| = √(a² + b²) = √(9 + 16) = 5."},
{id:"M102",ch:"Nombres complexes",d:1,q:"(1 + i)² =",o:["2i","2","1 + 2i","−2i"],r:0,e:"(1+i)² = 1 + 2i + i² = 2i."},
{id:"M103",ch:"Nombres complexes",d:1,q:"Un argument de 1 + i est :",o:["π/4","π/2","π/3","−π/4"],r:0,e:"1 + i = √2(cos π/4 + i sin π/4)."},
{id:"M104",ch:"Nombres complexes",d:1,q:"Les solutions dans ℂ de z² − 2z + 2 = 0 sont :",o:["1 + i et 1 − i","i et −i","2i et −2i","1 et −1"],r:0,e:"Δ = 4 − 8 = −4, √Δ = 2i, z = (2 ± 2i)/2 = 1 ± i."},
{id:"M105",ch:"Nombres complexes",d:1,q:"La forme algébrique de 1/(1 + i) est :",o:["(1 − i)/2","(1 + i)/2","1 − i","−i"],r:0,e:"On multiplie par le conjugué : (1−i)/((1+i)(1−i)) = (1−i)/2."},
{id:"M106",ch:"Nombres complexes",d:2,q:"La forme algébrique de (2 + i)/(1 − i) est :",o:["(1 + 3i)/2","(1 − 3i)/2","1 + 3i","(3 + i)/2"],r:0,e:"(2+i)(1+i)/((1−i)(1+i)) = (2 + 2i + i − 1)/2 = (1 + 3i)/2."},
{id:"M107",ch:"Nombres complexes",d:1,q:"La forme trigonométrique de 1 + i√3 est :",o:["2(cos π/3 + i sin π/3)","2(cos π/6 + i sin π/6)","√3(cos π/3 + i sin π/3)","4(cos π/3 + i sin π/3)"],r:0,e:"Module √(1+3) = 2 ; cos θ = 1/2 et sin θ = √3/2 donc θ = π/3."},
{id:"M108",ch:"Nombres complexes",d:2,q:"La formule de Moivre donne (cos θ + i sin θ)<sup>n</sup> =",o:["cos(nθ) + i sin(nθ)","n(cos θ + i sin θ)","cos(θ<sup>n</sup>) + i sin(θ<sup>n</sup>)","cos<sup>n</sup>θ + i sin<sup>n</sup>θ"],r:0,e:"Formule de Moivre, conséquence de e<sup>iθ</sup>·e<sup>iθ′</sup> = e<sup>i(θ+θ′)</sup>."},
{id:"M109",ch:"Nombres complexes",d:2,q:"Les racines cubiques de l'unité sont :",o:["1, j = e<sup>2iπ/3</sup> et j² = e<sup>−2iπ/3</sup>","1, i, −1","1, −1, i","1, −1/2, 1/2"],r:0,e:"Les racines n-ièmes de 1 sont e<sup>2ikπ/n</sup>, k = 0…n−1. Leur somme vaut 0."},
{id:"M110",ch:"Nombres complexes",d:2,q:"A(z<sub>A</sub>), B(z<sub>B</sub>), C(z<sub>C</sub>). Le nombre arg[(z<sub>C</sub> − z<sub>A</sub>)/(z<sub>B</sub> − z<sub>A</sub>)] représente :",o:["une mesure de l'angle (AB⃗ , AC⃗ )","la longueur AC","une mesure de l'angle (AC⃗ , AB⃗ )","le rapport AC/AB"],r:0,e:"Le module donne AC/AB, l'argument donne l'angle orienté (AB⃗ , AC⃗ )."},

/* ---------- Similitudes planes directes ---------- */
{id:"M115",ch:"Similitudes directes",d:1,q:"L'application z′ = az + b (a ≠ 0, a ≠ 1) est une similitude directe de rapport et d'angle :",o:["|a| et arg(a)","a et b","|b| et arg(b)","|a| et arg(b)"],r:0,e:"Le rapport est |a|, l'angle est arg(a), et le centre est le point fixe z₀ = b/(1 − a)."},
{id:"M116",ch:"Similitudes directes",d:2,q:"Le centre de la similitude z′ = 2iz + 1 est le point d'affixe :",o:["(1 + 2i)/5","1/(1 − 2i) + 1","1 + 2i","(1 − 2i)/5"],r:0,e:"z₀ = b/(1−a) = 1/(1 − 2i) = (1 + 2i)/((1)² + 2²) = (1 + 2i)/5."},
{id:"M117",ch:"Similitudes directes",d:1,q:"Si a est un réel strictement positif différent de 1, z′ = az + b est :",o:["une homothétie de rapport a","une rotation d'angle a","une translation","une symétrie centrale"],r:0,e:"arg(a) = 0 donc l'angle est nul : c'est une homothétie. Si |a| = 1 et a ≠ 1, c'est une rotation."},

/* ---------- Probabilités ---------- */
{id:"M120",ch:"Probabilités",d:1,q:"P(A ∪ B) =",o:["P(A) + P(B) − P(A ∩ B)","P(A) + P(B)","P(A)·P(B)","P(A) − P(B)"],r:0,e:"Formule générale ; P(A)+P(B) n'est valable que si A et B sont incompatibles."},
{id:"M121",ch:"Probabilités",d:1,q:"A et B sont indépendants si :",o:["P(A ∩ B) = P(A)·P(B)","P(A ∩ B) = 0","P(A ∪ B) = P(A) + P(B)","A et B sont incompatibles"],r:0,e:"Attention : incompatibles ≠ indépendants. Deux événements incompatibles de probabilités non nulles ne sont jamais indépendants."},
{id:"M122",ch:"Probabilités",d:1,q:"X suit la loi binomiale ℬ(5 ; 1/3). P(X = 2) =",o:["80/243","10/243","40/243","2/5"],r:0,e:"C(5,2)(1/3)²(2/3)³ = 10 × (1/9) × (8/27) = 80/243."},
{id:"M123",ch:"Probabilités",d:1,q:"X suit ℬ(n ; p). Son espérance et sa variance sont :",o:["E(X) = np et V(X) = np(1 − p)","E(X) = np et V(X) = np","E(X) = p et V(X) = np","E(X) = n/p et V(X) = np"],r:0,e:"Résultats à connaître par cœur. L'écart-type vaut √(np(1−p))."},
{id:"M124",ch:"Probabilités",d:1,q:"Une urne contient 3 boules rouges et 5 noires. On tire 2 boules simultanément. La probabilité d'obtenir 2 rouges est :",o:["3/28","9/64","1/4","3/8"],r:0,e:"C(3,2)/C(8,2) = 3/28."},
{id:"M125",ch:"Probabilités",d:1,q:"On lance deux dés équilibrés. La probabilité que la somme soit 7 est :",o:["1/6","1/12","7/36","1/9"],r:0,e:"6 couples favorables sur 36 : (1,6)(2,5)(3,4)(4,3)(5,2)(6,1) ⇒ 6/36 = 1/6."},
{id:"M126",ch:"Probabilités",d:1,q:"P(A|B) (probabilité de A sachant B, avec P(B) ≠ 0) =",o:["P(A ∩ B)/P(B)","P(A ∩ B)/P(A)","P(A)·P(B)","P(A ∪ B)/P(B)"],r:0,e:"Définition de la probabilité conditionnelle."},
{id:"M127",ch:"Probabilités",d:2,q:"X et Y sont deux variables aléatoires indépendantes. Laquelle de ces égalités n'est PAS garantie ?",o:["E(X²) = E(X)·E(X)","E(XY) = E(X)E(Y)","E(X + Y) = E(X) + E(Y)","E(X²Y²) = E(X²)E(Y²)"],r:0,e:"E(X²) = E(X)² équivaudrait à V(X) = 0. Les trois autres découlent de l'indépendance (ou de la linéarité)."},

/* ---------- Dénombrement ---------- */
{id:"M130",ch:"Dénombrement",d:1,q:"Le nombre de mots de 3 lettres distinctes formés avec 5 lettres est :",o:["60","125","10","20"],r:0,e:"Arrangement A(5,3) = 5×4×3 = 60 (l'ordre compte, sans répétition)."},
{id:"M131",ch:"Dénombrement",d:1,q:"C(5,2) =",o:["10","20","25","15"],r:0,e:"C(5,2) = 5!/(2!3!) = 10."},
{id:"M132",ch:"Dénombrement",d:1,q:"Le nombre de parties d'un ensemble à n éléments est :",o:["2<sup>n</sup>","n!","n²","2n"],r:0,e:"Chaque élément est pris ou non : 2 choix pour chacun des n éléments."},
{id:"M133",ch:"Dénombrement",d:1,q:"C(n, p) est égal à :",o:["C(n, n − p)","C(p, n)","A(n, p)","n!/p!"],r:0,e:"Propriété de symétrie des coefficients binomiaux."},
{id:"M134",ch:"Dénombrement",d:2,q:"De combien de façons peut-on asseoir 5 personnes sur 5 chaises alignées ?",o:["120","25","60","5"],r:0,e:"Permutations : 5! = 120."},

/* ---------- Statistiques ---------- */
{id:"M140",ch:"Statistiques",d:1,q:"La droite de régression de y en x passe toujours par :",o:["le point moyen G(x̄ ; ȳ)","l'origine","le point (0 ; ȳ)","le premier point du nuage"],r:0,e:"Propriété fondamentale de la méthode des moindres carrés."},
{id:"M141",ch:"Statistiques",d:1,q:"Le coefficient de corrélation linéaire r vérifie :",o:["−1 ≤ r ≤ 1, et |r| proche de 1 indique un bon ajustement affine","0 ≤ r ≤ 1","r ≥ 1","r est toujours positif"],r:0,e:"Le signe de r donne le sens de la corrélation, |r| sa qualité."},
{id:"M142",ch:"Statistiques",d:1,q:"L'écart-type σ d'une série est :",o:["la racine carrée de la variance","le carré de la variance","la moyenne des écarts à la moyenne","la médiane des écarts"],r:0,e:"σ = √V. La moyenne des écarts à la moyenne est toujours nulle, d'où l'usage des carrés."},

/* ---------- Trigonométrie & polynômes ---------- */
{id:"M150",ch:"Trigonométrie & polynômes",d:1,q:"Les solutions de 2cos x − 1 = 0 sur [0 ; 2π[ sont :",o:["π/3 et 5π/3","π/3 et 2π/3","π/6 et 5π/6","π/3 seulement"],r:0,e:"cos x = 1/2 ⇒ x = ±π/3 [2π], soit π/3 et 5π/3 sur [0;2π[."},
{id:"M151",ch:"Trigonométrie & polynômes",d:1,q:"sin(2a) =",o:["2 sin a cos a","sin a + cos a","2 sin a","cos²a − sin²a"],r:0,e:"Formule de duplication. Par ailleurs cos(2a) = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a."},
{id:"M152",ch:"Trigonométrie & polynômes",d:1,q:"Les racines de x² − 5x + 6 = 0 sont :",o:["2 et 3","−2 et −3","1 et 6","−1 et 6"],r:0,e:"Somme 5 et produit 6 ⇒ 2 et 3. (Δ = 25 − 24 = 1.)"},
{id:"M153",ch:"Trigonométrie & polynômes",d:1,q:"Pour ax² + bx + c = 0 (a ≠ 0), la somme S et le produit P des racines valent :",o:["S = −b/a et P = c/a","S = b/a et P = −c/a","S = −c/a et P = b/a","S = b/a et P = c/a"],r:0,e:"Relations coefficients-racines, très utiles pour factoriser rapidement."},
{id:"M154",ch:"Trigonométrie & polynômes",d:1,q:"cos(a + b) =",o:["cos a cos b − sin a sin b","cos a cos b + sin a sin b","cos a + cos b","sin a cos b + cos a sin b"],r:0,e:"Attention au signe : c'est « − » pour le cosinus d'une somme."},
{id:"M155",ch:"Trigonométrie & polynômes",d:2,q:"P(x) = x³ − 2x² − 5x + 6 admet 1 pour racine. Sa factorisation est :",o:["(x − 1)(x² − x − 6)","(x − 1)(x² + x − 6)","(x + 1)(x² − 3x + 6)","(x − 1)(x² − 2x − 5)"],r:0,e:"Schéma de Hörner avec 1 : coefficients 1, −1, −6, reste 0. Donc (x−1)(x²−x−6) = (x−1)(x−3)(x+2)."},
{id:"M156",ch:"Trigonométrie & polynômes",d:1,q:"cos²x + sin²x =",o:["1","0","2","cos(2x)"],r:0,e:"Identité fondamentale de la trigonométrie."},

/* ---------- Ajout : niveau test d'entrée ---------- */
{id:"M200",ch:"Limites & continuité",d:1,q:"lim<sub>x→+∞</sub> (ln x)/x² =",o:["0","+∞","1","1/2"],r:0,e:"Croissances comparées : toute puissance de x l'emporte sur ln x en +∞."},
{id:"M201",ch:"Limites & continuité",d:1,q:"lim<sub>x→1</sub> (ln x)/(x − 1) =",o:["1","0","+∞","e"],r:0,e:"C'est le nombre dérivé de ln en 1 : (ln x − ln 1)/(x − 1) → ln′(1) = 1/1 = 1."},
{id:"M202",ch:"Dérivation",d:1,q:"La dérivée de f(x) = x·ln x sur ]0 ; +∞[ est :",o:["ln x + 1","1/x","ln x","x + ln x"],r:0,e:"Produit uv : u′v + uv′ = 1·ln x + x × 1/x = ln x + 1."},
{id:"M203",ch:"Dérivation",d:1,q:"La dérivée de f(x) = (2x + 1)/(x − 3) est :",o:["−7/(x − 3)²","7/(x − 3)²","2/(x − 3)²","−5/(x − 3)²"],r:0,e:"(u/v)′ = (u′v − uv′)/v² = (2(x − 3) − (2x + 1))/(x − 3)² = −7/(x − 3)²."},
{id:"M204",ch:"Dérivation",d:1,q:"L'équation de la tangente à la courbe de f(x) = x² − 3x au point d'abscisse 1 est :",o:["y = −x − 1","y = −x + 1","y = −2x","y = x − 3"],r:0,e:"y = f′(1)(x − 1) + f(1) avec f(1) = −2 et f′(1) = 2 − 3 = −1, d'où y = −x + 1 − 2 = −x − 1."},
{id:"M205",ch:"Primitives",d:1,q:"Une primitive de f(x) = 1/(2x + 1) sur ]−1/2 ; +∞[ est :",o:["½·ln(2x + 1)","ln(2x + 1)","2·ln(2x + 1)","−1/(2x + 1)²"],r:0,e:"f = ½·u′/u avec u = 2x + 1, d'où F = ½·ln(2x + 1)."},
{id:"M206",ch:"Primitives",d:1,q:"Une primitive de f(x) = cos(3x) est :",o:["⅓·sin(3x)","3·sin(3x)","−⅓·sin(3x)","−3·sin(3x)"],r:0,e:"La dérivée de sin(3x) est 3cos(3x) : il faut diviser par 3."},
{id:"M207",ch:"Primitives",d:1,q:"Une primitive de f(x) = x·e<sup>x²</sup> est :",o:["½·e<sup>x²</sup>","e<sup>x²</sup>","2x·e<sup>x²</sup>","x²·e<sup>x²</sup>/2"],r:0,e:"f = ½·u′e<sup>u</sup> avec u = x² (u′ = 2x), d'où F = ½·e<sup>x²</sup>."},
{id:"M208",ch:"Logarithme népérien",d:1,q:"ln 8 − ln 2 =",o:["2 ln 2","ln 6","4","ln 2"],r:0,e:"ln 8 − ln 2 = ln(8/2) = ln 4 = 2 ln 2."},
{id:"M209",ch:"Logarithme népérien",d:1,q:"L'équation ln(2x − 1) = 0 a pour solution :",o:["x = 1","x = 1/2","x = 0","pas de solution"],r:0,e:"ln X = 0 ⟺ X = 1, donc 2x − 1 = 1 et x = 1 (qui vérifie bien 2x − 1 > 0)."},
{id:"M210",ch:"Logarithme népérien",d:1,q:"L'ensemble de définition de f(x) = ln(3 − x) est :",o:["]−∞ ; 3[","]3 ; +∞[","]0 ; 3[","ℝ"],r:0,e:"Il faut 3 − x > 0, soit x < 3."},
{id:"M211",ch:"Exponentielle",d:1,q:"e<sup>2 ln 3</sup> =",o:["9","6","3","2e³"],r:0,e:"e<sup>2 ln 3</sup> = e<sup>ln 9</sup> = 9, car 2 ln 3 = ln 3² et e<sup>ln a</sup> = a."},
{id:"M212",ch:"Exponentielle",d:1,q:"L'inéquation e<sup>2x</sup> &gt; e³ a pour ensemble de solutions :",o:["x &gt; 3/2","x &gt; 3","x &lt; 3/2","x &gt; ln 3"],r:0,e:"exp est strictement croissante : e<sup>2x</sup> &gt; e³ ⟺ 2x &gt; 3 ⟺ x &gt; 3/2."},
{id:"M213",ch:"Exponentielle",d:1,q:"La dérivée de f(x) = e<sup>−2x</sup> est :",o:["−2e<sup>−2x</sup>","e<sup>−2x</sup>","2e<sup>−2x</sup>","−2x·e<sup>−2x − 1</sup>"],r:0,e:"(e<sup>u</sup>)′ = u′·e<sup>u</sup> avec u = −2x, u′ = −2."},
{id:"M214",ch:"Suites numériques",d:1,q:"(u<sub>n</sub>) est arithmétique de premier terme u₀ = 5 et de raison 3. u₁₀ =",o:["35","38","32","30"],r:0,e:"u<sub>n</sub> = u₀ + n·r, donc u₁₀ = 5 + 10 × 3 = 35."},
{id:"M215",ch:"Suites numériques",d:1,q:"(u<sub>n</sub>) est géométrique, u₀ = 2 et q = 3. La somme u₀ + u₁ + u₂ + u₃ + u₄ vaut :",o:["242","162","80","728"],r:0,e:"S = u₀(1 − q⁵)/(1 − q) = 2 × (243 − 1)/2 = 242 (5 termes)."},
{id:"M216",ch:"Suites numériques",d:1,q:"La suite u<sub>n</sub> = (2n + 1)/(n + 3) converge vers :",o:["2","1/3","0","+∞"],r:0,e:"Termes de plus haut degré : 2n/n = 2."},
{id:"M217",ch:"Calcul intégral",d:1,q:"∫₀¹ e<sup>x</sup> dx =",o:["e − 1","e","1","e + 1"],r:0,e:"[e<sup>x</sup>]₀¹ = e¹ − e⁰ = e − 1."},
{id:"M218",ch:"Calcul intégral",d:1,q:"∫₁² 1/x dx =",o:["ln 2","1/2","−1/2","ln 3"],r:0,e:"[ln x]₁² = ln 2 − ln 1 = ln 2."},
{id:"M219",ch:"Calcul intégral",d:1,q:"La valeur moyenne de f(x) = 2x sur [0 ; 3] est :",o:["3","9","6","1,5"],r:0,e:"μ = (∫₀³ 2x dx) ÷ (3 − 0) = 9 ÷ 3 = 3."},
{id:"M220",ch:"Équations différentielles",d:1,q:"La solution de y′ = −3y vérifiant y(0) = 2 est :",o:["y = 2e<sup>−3x</sup>","y = −3e<sup>2x</sup>","y = 2e<sup>3x</sup>","y = e<sup>−3x</sup> + 2"],r:0,e:"Les solutions de y′ = ay sont Ce<sup>ax</sup> ; ici a = −3 et C = y(0) = 2."},
{id:"M221",ch:"Équations différentielles",d:1,q:"Les solutions de y″ + 9y = 0 sont :",o:["y = A cos(3x) + B sin(3x)","y = A cos(9x) + B sin(9x)","y = A e<sup>3x</sup> + B e<sup>−3x</sup>","y = A e<sup>−9x</sup>"],r:0,e:"y″ + ω²y = 0 avec ω² = 9, donc ω = 3."},
{id:"M222",ch:"Équations différentielles",d:1,q:"Les solutions de y′ + y = 3 sont :",o:["y = Ce<sup>−x</sup> + 3","y = Ce<sup>x</sup> + 3","y = Ce<sup>−x</sup> − 3","y = 3e<sup>−x</sup>"],r:0,e:"y′ = −y + 3 : solution générale Ce<sup>−x</sup> plus la solution constante 3."},
{id:"M223",ch:"Nombres complexes",d:1,q:"(2 + i)(1 − 3i) =",o:["5 − 5i","−1 − 5i","5 − 7i","2 − 3i"],r:0,e:"2 − 6i + i − 3i² = 2 − 5i + 3 = 5 − 5i (car i² = −1)."},
{id:"M224",ch:"Nombres complexes",d:1,q:"Le module de z = 3 − 4i est :",o:["5","7","1","25"],r:0,e:"|z| = √(3² + 4²) = √25 = 5."},
{id:"M225",ch:"Nombres complexes",d:1,q:"La forme algébrique de 2e<sup>iπ/3</sup> est :",o:["1 + i√3","√3 + i","1 − i√3","2 + i√3"],r:0,e:"2(cos(π/3) + i sin(π/3)) = 2(1/2 + i√3/2) = 1 + i√3."},
{id:"M226",ch:"Similitudes directes",d:1,q:"L'application z′ = 2z + 1 − i est :",o:["l'homothétie de centre d'affixe −1 + i et de rapport 2","la rotation de centre d'affixe 1 − i et d'angle 2","la translation de vecteur d'affixe 1 − i","l'homothétie de centre O et de rapport 2"],r:0,e:"a = 2 est réel ≠ 1 : homothétie de rapport 2. Centre : ω = 2ω + 1 − i, soit ω = −1 + i."},
{id:"M227",ch:"Similitudes directes",d:1,q:"L'application z′ = i·z est :",o:["la rotation de centre O et d'angle π/2","la rotation de centre O et d'angle −π/2","l'homothétie de centre O et de rapport i","la symétrie par rapport à l'axe des abscisses"],r:0,e:"i = e<sup>iπ/2</sup> : |i| = 1 et arg i = π/2. C'est une rotation de centre O."},
{id:"M228",ch:"Similitudes directes",d:1,q:"La similitude directe de centre O, de rapport 3 et d'angle π/2 a pour écriture complexe :",o:["z′ = 3i·z","z′ = 3z + i","z′ = (3 + i)·z","z′ = i·z + 3"],r:0,e:"z′ = a·z avec a = 3e<sup>iπ/2</sup> = 3i."},
{id:"M229",ch:"Probabilités",d:1,q:"A et B sont indépendants, P(A) = 0,5 et P(B) = 0,4. P(A ∪ B) =",o:["0,7","0,9","0,2","0,45"],r:0,e:"P(A ∪ B) = P(A) + P(B) − P(A)P(B) = 0,5 + 0,4 − 0,2 = 0,7."},
{id:"M230",ch:"Probabilités",d:1,q:"On lance deux fois un dé équilibré. La probabilité que la somme vaille 7 est :",o:["1/6","7/36","1/12","1/36"],r:0,e:"Six couples sur 36 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). 6/36 = 1/6."},
{id:"M231",ch:"Dénombrement",d:1,q:"On élit un président, un secrétaire et un trésorier parmi 10 élèves. Nombre de bureaux possibles :",o:["720","120","1 000","30"],r:0,e:"Les postes sont distincts (ordre important) et une personne n'a qu'un poste : A₁₀³ = 10 × 9 × 8 = 720."},
{id:"M232",ch:"Dénombrement",d:1,q:"Combien de codes à 4 chiffres (de 0 à 9, répétitions permises) peut-on former ?",o:["10 000","5 040","210","40"],r:0,e:"Chaque position a 10 choix indépendants : 10⁴ = 10 000."},
{id:"M233",ch:"Statistiques",d:1,q:"Pour la série 1 ; 2 ; 3 ; 4 ; 5, la moyenne x̄ et la variance V(x) valent :",o:["x̄ = 3 et V(x) = 2","x̄ = 3 et V(x) = 11","x̄ = 3 et V(x) = 2,5","x̄ = 2,5 et V(x) = 2"],r:0,e:"x̄ = 15/5 = 3 ; V(x) = (1 + 4 + 9 + 16 + 25)/5 − 3² = 11 − 9 = 2."},
{id:"M234",ch:"Statistiques",d:1,q:"On donne x̄ = 2, ȳ = 5, V(x) = 4 et cov(x, y) = 6. La droite de régression de y en x est :",o:["y = 1,5x + 2","y = 0,67x + 3,67","y = 6x − 7","y = 1,5x + 5"],r:0,e:"a = cov/V(x) = 6/4 = 1,5 et b = ȳ − a·x̄ = 5 − 3 = 2."},
{id:"M235",ch:"Statistiques",d:1,q:"Un coefficient de corrélation linéaire r = 0,98 indique :",o:["une forte corrélation linéaire positive","l'absence de lien entre x et y","une forte corrélation linéaire négative","que y est proportionnel à x"],r:0,e:"|r| proche de 1 : ajustement affine justifié ; r > 0 : y augmente avec x."},
{id:"M236",ch:"Trigonométrie & polynômes",d:1,q:"cos(2π/3) =",o:["−1/2","1/2","−√3/2","√3/2"],r:0,e:"2π/3 = π − π/3 : cos(π − a) = −cos a = −1/2."},
{id:"M237",ch:"Trigonométrie & polynômes",d:1,q:"Les racines de P(x) = x³ − 2x² − x + 2 sont :",o:["{−1 ; 1 ; 2}","{1 ; 2}","{−2 ; −1 ; 1}","{−1 ; 0 ; 1}"],r:0,e:"P(1) = 0, donc P = (x − 1)(x² − x − 2) = (x − 1)(x + 1)(x − 2)."}

];
