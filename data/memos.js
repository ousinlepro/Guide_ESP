/* Mémos par chapitre — servent au niveau « Voir plus » de la correction.
   f : formules / règles à retenir   m : la méthode   p : erreurs fréquentes
   s : clé d'un schéma (voir SCHEMAS dans index.html)
   Notation conforme aux programmes officiels sénégalais (Office du Bac 2006,
   Sciences physiques TS1/S2 2008) : RFD, théorème du centre d'inertie,
   force de Lorentz, différence de marche, dipôle (R,C)… */
window.MEMOS = {

/* ===================== MATHÉMATIQUES ===================== */
"Limites & continuité":{
 f:["lim<sub>x→0</sub> (sin x)/x = 1 ; lim<sub>x→0</sub> (e<sup>x</sup> − 1)/x = 1 ; lim<sub>x→0</sub> ln(1 + x)/x = 1",
    "Croissances comparées : (ln x)/x<sup>a</sup> → 0 et e<sup>x</sup>/x<sup>a</sup> → +∞ en +∞ (a &gt; 0)",
    "TVI : f continue sur [a ; b] et f(a)·f(b) &lt; 0 ⇒ f s'annule au moins une fois sur ]a ; b[",
    "Asymptote oblique y = ax + b ⇔ lim [f(x) − (ax + b)] = 0 en ±∞"],
 m:"Identifier la forme indéterminée avant tout calcul. ∞/∞ sur une fraction rationnelle : garder les termes de plus haut degré. ∞ − ∞ avec une racine : multiplier par le conjugué. 0/0 polynomiale : factoriser par (x − a), ou reconnaître un nombre dérivé. Pour une asymptote oblique : division euclidienne.",
 p:["Le TVI donne l'existence, jamais l'unicité : il faut la stricte monotonie en plus.",
    "Croissances comparées : c'est toujours l'exponentielle qui l'emporte sur les puissances, et les puissances sur le logarithme.",
    "Ne pas confondre limite à gauche et limite à droite quand le dénominateur change de signe."]},

"Dérivation":{
 f:["(u·v)′ = u′v + uv′ et (u/v)′ = (u′v − uv′)/v²",
    "(ln u)′ = u′/u ; (e<sup>u</sup>)′ = u′·e<sup>u</sup> ; (u<sup>n</sup>)′ = n·u′·u<sup>n−1</sup>",
    "(tan x)′ = 1/cos²x = 1 + tan²x ; (√u)′ = u′/(2√u)",
    "Tangente en a : y = f′(a)(x − a) + f(a)"],
 m:"Reconnaître la structure (produit, quotient, composée) avant de dériver. Pour une composée, ne jamais oublier le facteur u′. Pour les variations : étudier le signe de f′. Pour un point d'inflexion : chercher où f″ s'annule EN CHANGEANT DE SIGNE.",
 p:["Oublier u′ dans (ln u)′ ou (e<sup>u</sup>)′ : c'est l'erreur la plus fréquente du chapitre.",
    "Inverser le numérateur du quotient : c'est u′v − uv′, dans cet ordre.",
    "f″(x₀) = 0 ne suffit pas pour une inflexion : f(x) = x⁴ vérifie f″(0) = 0 sans inflexion."]},

"Primitives":{
 f:["u′·u<sup>n</sup> → u<sup>n+1</sup>/(n + 1) (n ≠ −1) ; u′/u → ln|u| ; u′·e<sup>u</sup> → e<sup>u</sup>",
    "u′/√u → 2√u ; u′/u² → −1/u ; 1/cos²x → tan x",
    "cos(ax) → sin(ax)/a et sin(ax) → −cos(ax)/a",
    "Deux primitives d'une même fonction diffèrent d'une constante."],
 m:"Reconnaître la forme dérivée : repérer u, calculer u′, vérifier que u′ apparaît bien en facteur. Si un coefficient manque, le compenser par une constante multiplicative. Pour une primitive imposée (F(x₀) = k), déterminer la constante en dernier.",
 p:["Dériver au lieu de primitiver : vérifie toujours en dérivant ta réponse.",
    "Oublier le coefficient 1/a en primitivant cos(ax) ou e<sup>ax</sup>.",
    "Écrire ln u au lieu de ln|u| quand le signe de u n'est pas garanti."]},

"Logarithme népérien":{
 f:["ln(ab) = ln a + ln b ; ln(a/b) = ln a − ln b ; ln(a<sup>n</sup>) = n·ln a",
    "ln x = a ⇔ x = e<sup>a</sup> ; ln 1 = 0 et ln e = 1",
    "(ln x)′ = 1/x sur ]0 ; +∞[ ; lim<sub>x→0<sup>+</sup></sub> ln x = −∞",
    "log x = ln x / ln 10 (logarithme décimal)"],
 m:"Toujours poser l'ensemble de définition AVANT de résoudre : chaque ln exige son argument strictement positif. Regrouper ensuite les logarithmes en un seul, puis utiliser la stricte croissance de ln pour passer à l'équation ou l'inéquation sur les arguments. Vérifier les solutions contre la condition initiale.",
 p:["Oublier la condition d'existence et garder une solution négative interdite.",
    "ln(a + b) n'est pas ln a + ln b : le logarithme transforme un produit, pas une somme.",
    "Inverser le sens de l'inégalité : ln est croissante, le sens se conserve."]},

"Exponentielle":{
 f:["e<sup>a+b</sup> = e<sup>a</sup>·e<sup>b</sup> ; e<sup>−a</sup> = 1/e<sup>a</sup> ; (e<sup>a</sup>)<sup>n</sup> = e<sup>na</sup>",
    "e<sup>x</sup> &gt; 0 pour tout réel x ; (e<sup>x</sup>)′ = e<sup>x</sup>",
    "e<sup>ln x</sup> = x (x &gt; 0) et ln(e<sup>x</sup>) = x",
    "lim<sub>x→−∞</sub> x<sup>n</sup>e<sup>x</sup> = 0 ; lim<sub>x→+∞</sub> e<sup>x</sup>/x<sup>n</sup> = +∞"],
 m:"Devant une équation du type e<sup>2x</sup> + b·e<sup>x</sup> + c = 0, poser X = e<sup>x</sup> avec la contrainte X &gt; 0, résoudre le trinôme, puis ne garder que les racines strictement positives et revenir par x = ln X.",
 p:["Garder une racine X ≤ 0 : aucune valeur de x ne donne e<sup>x</sup> ≤ 0.",
    "Oublier que e<sup>2x</sup> = (e<sup>x</sup>)², ce qui rend le changement de variable possible.",
    "Croire que e<sup>x</sup> peut être négatif quand x l'est : l'exponentielle est toujours strictement positive."]},

"Suites numériques":{
 f:["Arithmétique : u<sub>n</sub> = u₀ + nr ; somme = (nb de termes) × (premier + dernier)/2",
    "Géométrique : u<sub>n</sub> = u₀·q<sup>n</sup> ; 1 + q + … + q<sup>n</sup> = (1 − q<sup>n+1</sup>)/(1 − q)",
    "|q| &lt; 1 ⇒ q<sup>n</sup> → 0 ; q &gt; 1 ⇒ q<sup>n</sup> → +∞",
    "Toute suite croissante et majorée converge (admis)."],
 m:"Pour u<sub>n+1</sub> = f(u<sub>n</sub>) convergente vers L avec f continue en L, la limite vérifie L = f(L) : résoudre cette équation. Pour une suite définie explicitement, factoriser par le terme dominant. Le raisonnement par récurrence sert à établir une propriété valable pour tout n.",
 p:["Résoudre L = f(L) sans avoir justifié que la suite converge : l'équation ne prouve pas la convergence.",
    "Confondre le nombre de termes et le dernier indice dans une somme.",
    "Une suite qui tend vers 0 n'est pas forcément positive : (−1)<sup>n</sup>/n en est un contre-exemple."]},

"Calcul intégral":{
 f:["Chasles : ∫<sub>a</sub><sup>b</sup>f + ∫<sub>b</sub><sup>c</sup>f = ∫<sub>a</sub><sup>c</sup>f",
    "Parties : ∫<sub>a</sub><sup>b</sup>u′v = [uv]<sub>a</sub><sup>b</sup> − ∫<sub>a</sub><sup>b</sup>uv′",
    "Valeur moyenne sur [a ; b] : (1/(b − a))·∫<sub>a</sub><sup>b</sup>f(x)dx",
    "f impaire sur [−a ; a] ⇒ ∫<sub>−a</sub><sup>a</sup>f = 0 ; f paire ⇒ ∫<sub>−a</sub><sup>a</sup>f = 2∫₀<sup>a</sup>f"],
 m:"Chercher d'abord une primitive par reconnaissance de forme. Si le produit mêle une puissance et une exponentielle, un logarithme ou une fonction trigonométrique, intégrer par parties en dérivant la partie polynomiale. Exploiter la parité pour annuler ou doubler avant tout calcul : cela fait gagner un temps considérable en QCM.",
 p:["Oublier le signe « − » devant la seconde intégrale dans l'intégration par parties.",
    "Mal choisir u′ et v : on dérive le polynôme, on primitive l'exponentielle.",
    "Confondre l'intégrale (aire algébrique, pouvant être négative) et l'aire géométrique."]},

"Équations différentielles":{
 f:["y′ = ay ⇒ y = C·e<sup>ax</sup>",
    "y″ + ω²y = 0 ⇒ y = A·cos(ωt) + B·sin(ωt), de période T = 2π/ω",
    "y″ − a²y = 0 ⇒ y = A·e<sup>ax</sup> + B·e<sup>−ax</sup>",
    "La condition initiale détermine les constantes A, B ou C."],
 m:"Identifier le type avant de résoudre : premier ordre sans second membre, ou second ordre avec un signe. Le signe devant le terme en y décide de tout : « + ω²y » donne des sinusoïdes, « − a²y » des exponentielles réelles. Appliquer les conditions initiales à la toute fin.",
 p:["Confondre y″ + ω²y = 0 (oscillations) et y″ − a²y = 0 (exponentielles) : c'est le signe qui tranche.",
    "Oublier la constante d'intégration, ou l'introduire avant d'avoir fini.",
    "Confondre la pulsation ω et la période T = 2π/ω."]},

"Nombres complexes":{
 f:["i² = −1 ; i<sup>4k</sup> = 1, i<sup>4k+1</sup> = i, i<sup>4k+2</sup> = −1, i<sup>4k+3</sup> = −i",
    "|z| = √(a² + b²) ; |z₁z₂| = |z₁|·|z₂| ; arg(z₁z₂) = arg z₁ + arg z₂ [2π]",
    "Moivre : (cos θ + i sin θ)<sup>n</sup> = cos(nθ) + i sin(nθ) ; Euler : e<sup>iθ</sup> = cos θ + i sin θ",
    "AB = |z<sub>B</sub> − z<sub>A</sub>| et arg[(z<sub>C</sub> − z<sub>A</sub>)/(z<sub>B</sub> − z<sub>A</sub>)] = angle (AB⃗ , AC⃗ )"],
 m:"Pour un quotient, multiplier haut et bas par le conjugué du dénominateur. Pour une puissance élevée, passer en forme trigonométrique ou exponentielle puis appliquer Moivre. Pour i<sup>n</sup>, faire la division euclidienne de n par 4. Pour une équation du second degré à coefficients réels avec Δ &lt; 0 : z = (−b ± i√(−Δ))/(2a).",
 p:["Écrire √Δ quand Δ &lt; 0 : il faut i√(−Δ).",
    "Oublier que le module est toujours positif, alors que l'argument est défini modulo 2π.",
    "Confondre conjugué (b devient −b) et opposé (a et b changent tous deux de signe)."],
 s:"complexe"},

"Similitudes directes":{
 f:["z′ = az + b avec a ≠ 0 : rapport |a|, angle arg(a)",
    "Centre (si a ≠ 1) : z₀ = b/(1 − a), unique point fixe",
    "a réel positif ≠ 1 : homothétie ; |a| = 1 et a ≠ 1 : rotation ; a = 1 : translation de vecteur d'affixe b"],
 m:"Lire directement a et b sur l'écriture z′ = az + b. Le rapport est |a|, l'angle arg(a). Pour le centre, résoudre z₀ = az₀ + b, ce qui donne z₀ = b/(1 − a) : c'est le point invariant.",
 p:["Chercher le centre avec b/(1 + a) : c'est bien 1 − a au dénominateur.",
    "Confondre le rapport |a| et l'affixe a elle-même.",
    "Oublier de rationaliser b/(1 − a) en multipliant par le conjugué."]},

"Probabilités":{
 f:["P(A ∪ B) = P(A) + P(B) − P(A ∩ B)",
    "P(A|B) = P(A ∩ B)/P(B) ; indépendance ⇔ P(A ∩ B) = P(A)·P(B)",
    "Binomiale ℬ(n ; p) : P(X = k) = C(n,k)·p<sup>k</sup>·(1 − p)<sup>n−k</sup>",
    "E(X) = np et V(X) = np(1 − p) ; σ = √V(X)"],
 m:"Identifier le schéma : tirages répétés indépendants avec deux issues ⇒ loi binomiale. Tirage simultané ou sans remise ⇒ combinaisons C(n,p). Repérer l'énoncé conditionnel (« sachant que ») pour appliquer la bonne formule.",
 p:["Confondre incompatibles (P(A ∩ B) = 0) et indépendants (P(A ∩ B) = P(A)P(B)) : deux notions sans rapport.",
    "Oublier le coefficient binomial C(n,k) et ne garder que p<sup>k</sup>q<sup>n−k</sup>.",
    "Écrire V(X) = np au lieu de np(1 − p)."]},

"Dénombrement":{
 f:["Permutations de n éléments : n!",
    "Arrangements (ordre, sans répétition) : A(n,p) = n!/(n − p)!",
    "Combinaisons (sans ordre) : C(n,p) = n!/(p!(n − p)!)",
    "Nombre de parties d'un ensemble à n éléments : 2<sup>n</sup> ; C(n,p) = C(n, n − p)"],
 m:"Une seule question tranche : l'ordre compte-t-il ? Un mot, un classement, un podium ⇒ arrangement. Une poignée de boules tirées ensemble, une délégation, un comité ⇒ combinaison. Avec répétition autorisée et ordre : n<sup>p</sup>.",
 p:["Utiliser A(n,p) là où l'ordre est indifférent : on compte alors chaque tirage p! fois.",
    "Oublier de diviser par p! dans C(n,p).",
    "Confondre n<sup>p</sup> (avec répétition) et A(n,p) (sans répétition)."]},

"Statistiques":{
 f:["Point moyen G(x̄ ; ȳ) : la droite de régression y en x passe toujours par G",
    "Coefficient de corrélation r ∈ [−1 ; 1] ; |r| proche de 1 ⇒ ajustement affine pertinent",
    "σ = √V : l'écart-type est la racine carrée de la variance"],
 m:"Calculer d'abord x̄ et ȳ. Le signe de r donne le sens de la corrélation, sa valeur absolue la qualité. Une prévision s'obtient en remplaçant x par la valeur voulue dans l'équation de la droite.",
 p:["Croire qu'une forte corrélation prouve une causalité.",
    "Confondre variance et écart-type (l'un est le carré de l'autre).",
    "Oublier que la droite passe obligatoirement par le point moyen."]},

"Trigonométrie & polynômes":{
 f:["cos²x + sin²x = 1",
    "cos(a + b) = cos a·cos b − sin a·sin b ; sin(a + b) = sin a·cos b + cos a·sin b",
    "sin 2a = 2 sin a·cos a ; cos 2a = cos²a − sin²a = 2cos²a − 1 = 1 − 2sin²a",
    "ax² + bx + c = 0 : Δ = b² − 4ac, S = −b/a, P = c/a"],
 m:"Pour une équation trigonométrique, se ramener à cos x = k ou sin x = k, puis lire les solutions sur le cercle trigonométrique en respectant l'intervalle demandé. Pour un polynôme dont une racine évidente est connue, utiliser le schéma de Hörner pour factoriser.",
 p:["Ne donner qu'une solution sur [0 ; 2π[ alors que cos x = k en admet deux (x et 2π − x).",
    "Le signe « − » de cos(a + b) : c'est la faute classique de ce chapitre.",
    "Confondre S = −b/a et S = b/a dans les relations coefficients-racines."],
 s:"trigo"},

/* ===================== PHYSIQUE ===================== */
"P1 · Cinématique":{
 f:["MRU : a = 0, v constante, x = vt + x₀",
    "MRUV : v = at + v₀ ; x = ½at² + v₀t + x₀ ; v² − v₀² = 2a(x − x₀)",
    "Circulaire uniforme : a = v²/R dirigée vers le centre ; ω = 2πN = 2π/T ; v = Rω",
    "Sinusoïdal x = A·cos(ωt + φ) ⇒ a = −ω²x"],
 m:"Dériver la loi horaire donne la vitesse, dériver encore donne l'accélération. Inversement, on remonte par intégration en fixant les constantes avec les conditions initiales. La relation v² − v₀² = 2a(x − x₀) évite de passer par le temps.",
 p:["Croire que l'accélération est nulle dans un mouvement circulaire uniforme : la vitesse change de direction, donc a = v²/R ≠ 0.",
    "Confondre vitesse angulaire ω (rad/s) et fréquence N (tours/s) : ω = 2πN.",
    "Oublier v₀ ou x₀ dans la loi horaire."]},

"P2 · Dynamique":{
 f:["RFD / théorème du centre d'inertie : ΣF⃗ = m·a⃗<sub>G</sub> (référentiel galiléen)",
    "Théorème de l'énergie cinétique : ΔE<sub>c</sub> = ΣW(F⃗)",
    "Travail du poids : W = mg(z<sub>A</sub> − z<sub>B</sub>), positif en descente",
    "W = F⃗·AB⃗ = F·AB·cos α : nul si la force est perpendiculaire au déplacement"],
 m:"Toujours dans cet ordre : définir le système, choisir le référentiel (galiléen), faire le bilan des forces extérieures, projeter la RFD sur des axes bien choisis. Si la question ne porte que sur des vitesses et des positions, le théorème de l'énergie cinétique est souvent plus rapide.",
 p:["Oublier une force dans le bilan, la réaction du support en particulier.",
    "Projeter sur un axe mal orienté et se tromper de signe.",
    "Croire qu'une force constante en norme travaille toujours : la force de Lorentz ne travaille jamais."]},

"P3 · Applications":{
 f:["Chute libre : a = g, t = √(2h/g), v = √(2gh) (indépendantes de la masse)",
    "Plan incliné sans frottement : a = g·sin α",
    "Projectile : trajectoire parabolique, portée = v₀²·sin(2α)/g, maximale pour α = 45°",
    "Particule accélérée sous une d.d.p. U : E<sub>c</sub> = |q|·U"],
 m:"Projeter la RFD sur deux axes : le mouvement horizontal est uniforme, le vertical uniformément varié. Éliminer le temps entre les deux équations horaires pour obtenir l'équation de la trajectoire. Sans frottement, la conservation de l'énergie mécanique donne la vitesse en une ligne.",
 p:["Faire dépendre la durée de chute de la masse : elle s'élimine dans ma⃗ = mg⃗.",
    "Utiliser g·cos α au lieu de g·sin α sur un plan incliné.",
    "Oublier que deux particules de charges égales accélérées sous la même U ont la même énergie cinétique, mais pas la même vitesse si leurs masses diffèrent."],
 s:"plan"},

"P4 · Gravitation":{
 f:["F = G·m·m′/r² avec G = 6,67×10⁻¹¹ SI",
    "g₀ = GM/R² à la surface ; g = GM/(R + h)² à l'altitude h",
    "Satellite circulaire : v = √(GM/r), indépendante de sa masse",
    "3ᵉ loi de Kepler : T²/r³ = 4π²/(GM)"],
 m:"Écrire que l'attraction gravitationnelle fournit exactement l'accélération centripète : GMm/r² = mv²/r. La masse du satellite se simplifie, d'où v = √(GM/r), puis T = 2πr/v conduit à la troisième loi de Kepler.",
 p:["Oublier le carré au dénominateur : la force varie en 1/r², pas en 1/r.",
    "Faire dépendre la vitesse du satellite de sa propre masse : elle disparaît du calcul.",
    "Confondre le rayon de l'orbite r = R + h et l'altitude h seule."],
 s:"satellite"},

"P5 · Champ magnétique":{
 f:["Solénoïde : B = μ₀·n·I, avec n le nombre de spires par mètre (n = N/L)",
    "Fil rectiligne infini : B = μ₀·I/(2πr)",
    "μ₀ = 4π×10⁻⁷ SI ; B en teslas (T)"],
 m:"Convertir N en n = N/L avant tout calcul sur un solénoïde. Pour l'orientation, régle du tire-bouchon ou du bonhomme d'Ampère. À l'intérieur d'un solénoïde long, le champ est uniforme et parallèle à l'axe.",
 p:["Utiliser N au lieu de n = N/L dans B = μ₀nI.",
    "Confondre le tesla (champ B) et le weber (flux Φ).",
    "Oublier le 2π au dénominateur pour le fil rectiligne."]},

"P6 · Particule dans un champ B":{
 f:["Force de Lorentz : F⃗ = q·v⃗ ∧ B⃗, toujours perpendiculaire à v⃗",
    "Travail nul ⇒ ‖v⃗‖ reste constante : le mouvement est uniforme",
    "Rayon : R = mv/(|q|·B) ; période T = 2πm/(|q|·B), indépendante de v"],
 m:"La force étant perpendiculaire à la vitesse, elle ne travaille pas : l'énergie cinétique se conserve. Si v⃗ ⊥ B⃗, la trajectoire est un cercle ; on obtient R en écrivant |q|vB = mv²/R. Si v⃗ est colinéaire à B⃗, la force est nulle et le mouvement rectiligne uniforme.",
 p:["Croire que la force magnétique accélère la particule en norme : elle ne change que la direction.",
    "Inverser R = mv/(qB) en qB/(mv) : vérifie par l'homogénéité.",
    "Oublier que la période ne dépend pas de la vitesse — c'est le principe du cyclotron."],
 s:"lorentz"},

"P7 · Loi de Laplace":{
 f:["F = B·I·L·sin α, avec α l'angle entre le conducteur et B⃗",
    "F⃗ perpendiculaire au plan formé par le conducteur et B⃗",
    "Force maximale quand le conducteur est perpendiculaire au champ (α = 90°)"],
 m:"Repérer l'angle α entre le conducteur et le champ, puis appliquer F = BIL·sin α. La direction s'obtient par la règle des trois doigts de la main droite : index le champ, majeur le courant, pouce la force.",
 p:["Écrire cos α au lieu de sin α : la force est maximale à 90°, pas à 0°.",
    "Confondre loi de Laplace (force sur un conducteur) et force de Lorentz (force sur une charge isolée).",
    "Placer la force dans le plan du conducteur et du champ : elle lui est perpendiculaire."]},

"P8 · Induction & dipôle RL":{
 f:["e = −dΦ/dt ; loi de Lenz : l'effet s'oppose à la cause qui lui donne naissance",
    "Bobine : u = r·i + L·di/dt ; flux propre Φ = L·i",
    "Constante de temps : τ = L/R ; énergie magnétique E = ½·L·i²",
    "L'intensité dans une bobine ne peut pas subir de discontinuité."],
 m:"C'est la VARIATION du flux qui crée la f.é.m. induite, pas le champ lui-même. Un champ constant à travers un circuit immobile n'induit rien. Le signe « − » de la loi de Lenz traduit la conservation de l'énergie. Le régime permanent est atteint après environ 5τ.",
 p:["Croire qu'un champ magnétique uniforme et constant produit une induction : il faut que le flux varie.",
    "Écrire τ = RL ou τ = R/L au lieu de τ = L/R : contrôle par l'homogénéité (des secondes).",
    "Confondre l'énergie de la bobine ½Li² et celle du condensateur ½Cu²."]},

"P9 · Dipôle RC":{
 f:["q = C·u ; τ = R·C",
    "Charge : u<sub>C</sub> = E(1 − e<sup>−t/τ</sup>) ; décharge : u<sub>C</sub> = E·e<sup>−t/τ</sup>",
    "À t = τ : 63 % de la charge atteinte ; à la décharge, il reste 1/e ≈ 37 %",
    "Énergie : E = ½·C·u² ; la tension aux bornes d'un condensateur est continue."],
 m:"Écrire la loi des mailles, remplacer i par dq/dt = C·du/dt, résoudre l'équation différentielle du premier ordre. Le régime permanent est atteint après environ 5τ. Contrôler l'homogénéité : R·C est bien un temps.",
 p:["Confondre τ = RC (circuit RC) et τ = L/R (circuit RL).",
    "Intervertir les expressions de charge et de décharge : la charge part de 0 et monte vers E.",
    "Croire que la tension d'un condensateur peut sauter brutalement : elle est toujours continue."],
 s:"rc"},

"P10 · Oscillations électriques":{
 f:["LC idéal : T₀ = 2π√(LC), ω₀ = 1/√(LC)",
    "RLC série : Z = √(R² + (Lω − 1/(Cω))²)",
    "Résonance d'intensité : Lω = 1/(Cω) ⇒ ω₀ = 1/√(LC), Z = R, I maximale, φ = 0",
    "Puissance moyenne : P = U·I·cos φ (cos φ = facteur de puissance)"],
 m:"Calculer séparément la réactance inductive Lω et la réactance capacitive 1/(Cω), en faire la différence, puis appliquer Z = √(R² + (Lω − 1/Cω)²). À la résonance, le terme réactif s'annule : le circuit se comporte comme une simple résistance.",
 p:["Additionner les réactances au lieu de les soustraire : c'est bien (Lω − 1/Cω).",
    "Oublier de convertir la fréquence en pulsation : ω = 2πf.",
    "Croire que l'impédance est maximale à la résonance : elle y est au contraire minimale et vaut R."]},

"P11 · Oscillations mécaniques":{
 f:["Pendule élastique : T = 2π√(m/k)",
    "Pendule simple : T = 2π√(l/g), indépendant de la masse et de l'amplitude",
    "Équation : x″ + ω₀²x = 0 ⇒ x = A·cos(ω₀t + φ), a = −ω₀²x",
    "Énergie mécanique d'un oscillateur élastique : E<sub>m</sub> = ½·k·A², constante sans frottement"],
 m:"Établir l'équation différentielle par la RFD projetée, la mettre sous la forme x″ + ω₀²x = 0 et lire ω₀² directement. La période s'en déduit par T = 2π/ω₀. Attention à ce qui est sous la racine : m/k pour le ressort, l/g pour le pendule simple.",
 p:["Inverser m et k : c'est √(m/k), pas √(k/m). Contrôle : une masse plus lourde oscille plus lentement.",
    "Faire dépendre la période du pendule simple de sa masse : elle n'y figure pas.",
    "Confondre pulsation ω₀, fréquence f = ω₀/2π et période T = 2π/ω₀."]},

"P12 · Interférences & ondes":{
 f:["Interfrange : i = λD/a (a = écart entre les fentes, D = distance fentes-écran)",
    "Différence de marche : δ = a·x/D",
    "Frange brillante : δ = k·λ ; frange sombre : δ = (k + ½)·λ",
    "λ = v/f = v·T"],
 m:"Convertir toutes les longueurs en mètres avant d'appliquer i = λD/a — c'est là que se perdent la plupart des points. La frange centrale correspond à δ = 0 : elle est blanche en lumière blanche, car toutes les radiations y interfèrent constructivement. Les sources doivent être cohérentes.",
 p:["Inverser a et D dans i = λD/a : l'interfrange grandit quand les fentes se rapprochent.",
    "Oublier les conversions : λ en µm ou nm, a en mm, D en m.",
    "Confondre frange brillante (δ = kλ) et frange sombre (δ = (k + ½)λ)."],
 s:"young"},

"P13 · Effet photoélectrique":{
 f:["E = hν = hc/λ ; h = 6,63×10⁻³⁴ J·s ; hc ≈ 1240 eV·nm",
    "Travail d'extraction : W₀ = hν₀ = hc/λ₀",
    "Relation d'Einstein : E<sub>c,max</sub> = hν − W₀",
    "1 eV = 1,6×10⁻¹⁹ J"],
 m:"C'est un effet de SEUIL en fréquence : rien ne se produit tant que ν &lt; ν₀, quelle que soit l'intensité lumineuse. Augmenter l'éclairement augmente le nombre d'électrons arrachés, jamais leur énergie individuelle. Pour une longueur d'onde seuil, utiliser λ₀ = 1240/W₀ avec W₀ en eV et λ₀ en nm.",
 p:["Croire qu'une lumière intense finit par arracher des électrons sous le seuil : la fréquence seule décide.",
    "Additionner au lieu de soustraire : c'est hν − W₀.",
    "Mélanger joules et électron-volts dans un même calcul."]},

"P14 · Niveaux d'énergie":{
 f:["Hydrogène : E<sub>n</sub> = −13,6/n² (eV)",
    "Émission (p → n avec n &lt; p) : hν = E<sub>p</sub> − E<sub>n</sub>",
    "Énergie d'ionisation depuis le fondamental : 13,6 eV",
    "Séries : Lyman (arrivée n = 1, UV), Balmer (n = 2, visible), Paschen (n = 3, IR)"],
 m:"Calculer les deux niveaux, faire la différence en valeur absolue, puis λ = 1240/ΔE avec ΔE en eV et λ en nm. Descendre d'un niveau signifie émettre, monter signifie absorber. La série se lit sur le niveau d'ARRIVÉE, pas sur le niveau de départ.",
 p:["Oublier le signe « − » de E<sub>n</sub> = −13,6/n² : les niveaux sont négatifs, l'énergie du photon est positive.",
    "Identifier la série par le niveau de départ : c'est le niveau d'arrivée qui la nomme.",
    "Diviser par n au lieu de n² dans la formule."]},

"P15 · Réactions nucléaires":{
 f:["Lois de Soddy : conservation du nombre de masse A et du numéro atomique Z",
    "α : (A, Z) → (A − 4, Z − 2) ; β⁻ : (A, Z) → (A, Z + 1) ; β⁺ : (A, Z) → (A, Z − 1)",
    "Décroissance : N = N₀·e<sup>−λt</sup> ; demi-vie T = ln2/λ ; activité A = λN (Bq)",
    "Énergie de liaison : E = Δm·c²"],
 m:"Équilibrer d'abord A puis Z de part et d'autre de la flèche : les lois de Soddy suffisent à identifier la particule émise. Pour la décroissance, raisonner en nombre de demi-vies : après n demi-vies il reste (1/2)<sup>n</sup> des noyaux initiaux.",
 p:["Modifier A lors d'une désintégration β : seul Z change, A reste constant.",
    "Confondre la constante radioactive λ (s⁻¹) et la demi-vie T (s) : T = ln2/λ.",
    "Croire que la fusion concerne les noyaux lourds : c'est l'inverse, elle assemble des noyaux légers."]},

"Circuits électriques":{
 f:["Série : R<sub>eq</sub> = R₁ + R₂ ; parallèle : 1/R<sub>eq</sub> = 1/R₁ + 1/R₂",
    "Condensateurs : parallèle C<sub>eq</sub> = C₁ + C₂ ; série 1/C<sub>eq</sub> = 1/C₁ + 1/C₂",
    "Résistivité : R = ρ·l/S ; puissance : P = U·I = R·I² = U²/R",
    "Loi d'Ohm : U = R·I"],
 m:"Réduire le circuit par blocs successifs, en repérant ce qui est réellement en série (même courant) et en parallèle (même tension). Pour les condensateurs, les règles sont inversées par rapport aux résistances : c'est la source d'erreur la plus fréquente.",
 p:["Appliquer aux condensateurs les règles des résistances : en parallèle les capacités s'ajoutent, en série ce sont les inverses.",
    "Oublier de convertir la section S en m² à partir d'un diamètre en mm.",
    "Croire que la résistance équivalente en parallèle est plus grande que chaque résistance : elle est toujours plus petite."]},

"Optique géométrique":{
 f:["Relation de conjugaison : 1/OA′ − 1/OA = 1/f′ (mesures algébriques)",
    "Grandissement : γ = OA′/OA ; γ &lt; 0 ⇒ image inversée, |γ| &lt; 1 ⇒ image réduite",
    "Vergence : C = 1/f′ en dioptries (f′ en mètres)"],
 m:"Orienter l'axe dans le sens de la lumière et compter l'objet réel en négatif (OA &lt; 0). Appliquer la relation de conjugaison, puis interpréter : OA′ &gt; 0 donne une image réelle, γ négatif une image inversée.",
 p:["Oublier le caractère algébrique des mesures : un objet réel a une abscisse négative.",
    "Confondre distance focale f′ (en m) et vergence C = 1/f′ (en dioptries).",
    "Conclure sur la nature de l'image sans regarder le signe de γ."],
 s:"lentille"},

/* ===================== FRANÇAIS ===================== */
"Participe passé":{
 f:["Avec <b>être</b> : accord avec le sujet.",
    "Avec <b>avoir</b> : accord avec le COD seulement s'il est placé AVANT le verbe.",
    "Participe + infinitif : accord si le COD fait l'action de l'infinitif.",
    "<b>Fait</b> et <b>laissé</b> suivis d'un infinitif : toujours invariables.",
    "Pronominaux : accord si le pronom réfléchi est COD (jamais s'il est COI).",
    "Verbes impersonnels (falloir, pleuvoir, y avoir) : toujours invariables."],
 m:"Poser trois questions dans l'ordre : quel est l'auxiliaire ? y a-t-il un COD ? est-il placé avant le participe ? Pour les pronominaux, remplacer mentalement « se » par « à soi-même » : si la phrase tient, le pronom est COI et le participe reste invariable (elles se sont souri = elles ont souri À elles).",
 p:["Accorder avec le sujet alors que l'auxiliaire est « avoir » : l'accord se fait avec le COD antéposé, jamais avec le sujet.",
    "Accorder « plu », « souri », « succédé », « téléphoné » : ces verbes ont un COI, jamais de COD.",
    "Accorder le participe devant un infinitif dont le COD subit l'action : « les airs que j'ai entendu chanter » reste invariable."]},

"Orthographe & accords":{
 f:["Couleur composée ou tirée d'un nom : <b>invariable</b> (vert clair, bleu foncé, jaune citron).",
    "Adjectif composé dont le 1<sup>er</sup> élément est adverbial : invariable (court-vêtues, nouveau-nés).",
    "<b>Tout</b> adverbe : invariable devant voyelle, accordé devant consonne ou h aspiré.",
    "<b>Demi</b> : invariable et lié avant le nom, accordé en genre seul après.",
    "<b>Vingt</b> et <b>cent</b> : « s » seulement si multipliés ET non suivis d'un autre nombre.",
    "Devant le verbe être : <b>quel que</b> en deux mots, accordé avec le sujet qui suit."],
 m:"Chercher d'abord avec quoi le mot s'accorde, puis vérifier s'il existe une règle d'invariabilité qui prime. Les couleurs composées et les adverbes sont les deux grandes familles d'invariables du programme.",
 p:["Accorder une couleur composée : « des yeux bleu clair » reste invariable.",
    "Écrire « quelque soit » en un mot : devant le verbe être, c'est toujours « quel que » en deux mots accordés.",
    "Ajouter un « s » à quatre-vingt ou cent lorsqu'un autre nombre les suit."]},

"Nature & fonction":{
 f:["Attribut du COD : après juger, croire, trouver, nommer, élire, estimer.",
    "COS : deuxième complément quand le verbe possède déjà un COD.",
    "Subordonnée interrogative indirecte : introduite par « si » ou un mot interrogatif, COD du verbe.",
    "Subordonnée participiale : sujet propre + participe, sans mot subordonnant.",
    "Apposition : détachée par des virgules, désigne la même réalité que le nom."],
 m:"Distinguer la NATURE (ce que le mot est : nom, adjectif, proposition relative) de la FONCTION (le rôle qu'il joue : sujet, COD, épithète). Pour une subordonnée, repérer d'abord le mot qui l'introduit : pronom relatif (relative), conjonction (conjonctive), « si » interrogatif (interrogative indirecte).",
 p:["Prendre le « si » d'une interrogation indirecte pour un « si » de condition : « J'ignore s'il viendra » est un COD, pas une hypothèse.",
    "Confondre épithète (collée au nom) et attribut (reliée par un verbe d'état).",
    "Appeler COI un complément introduit par « à » alors que le verbe a déjà un COD : c'est un COS."]},

"Conjugaison":{
 f:["Jamais de conditionnel après le « si » de condition.",
    "Si + présent → futur ; si + imparfait → conditionnel présent ; si + plus-que-parfait → conditionnel passé.",
    "Subjonctif après : bien que, quoique, avant que, pour que, afin que, jusqu'à ce que.",
    "Indicatif après : après que, parce que, pendant que, depuis que."],
 m:"Repérer la conjonction : c'est elle qui impose le mode. Pour distinguer imparfait et présent aux deux premières personnes du pluriel, chercher le « i » caractéristique : nous conquérions (imparfait) contre nous conquérons (présent).",
 p:["Écrire « si j'aurais su » : le conditionnel est interdit dans la subordonnée en si.",
    "Mettre le subjonctif après « après que », qui demande l'indicatif.",
    "Oublier le « i » de l'imparfait après une racine en -y ou -i : nous riions, vous croyiez."]},

"Homophones":{
 f:["quand (lorsque) / quant à (en ce qui concerne) / qu'en (que… en)",
    "plutôt (de préférence) / plus tôt (contraire de plus tard)",
    "peut être (verbe pouvoir) / peut-être (adverbe, sans doute)",
    "quoique (bien que) / quoi que (quelle que soit la chose que)",
    "leur (pronom devant le verbe, invariable) / leurs (déterminant, accordé)"],
 m:"Remplacer par un équivalent : « peut être » se remplace par « pouvait être », « peut-être » par « sans doute ». Pour leur, essayer « lui » au singulier : si la phrase tient, c'est le pronom invariable.",
 p:["Accorder le pronom « leur » placé devant le verbe : il est toujours invariable.",
    "Écrire « plutôt » pour une comparaison de temps : « il est parti plus tôt que prévu ».",
    "Confondre « quoique » (concession) et « quoi que » (quelle que soit la chose)."]},

"Figures de style":{
 f:["Comparaison : avec outil (comme, tel, semblable à). Métaphore : sans outil.",
    "Métonymie : le contenant pour le contenu. Synecdoque : la partie pour le tout. Périphrase : une expression pour un mot.",
    "Litote : dire moins pour faire entendre plus. Euphémisme : atténuer une réalité pénible. Hyperbole : exagérer.",
    "Oxymore : deux mots contraires accolés. Antithèse : deux idées opposées dans la phrase.",
    "Allitération : consonnes répétées. Assonance : voyelles répétées. Anaphore : répétition en tête. Chiasme : schéma AB / BA."],
 m:"Deux questions suffisent presque toujours : y a-t-il un outil de comparaison ? le procédé porte-t-il sur les sons, sur la construction ou sur le sens ? L'oxymore tient dans un seul groupe de mots, l'antithèse s'étend sur la phrase.",
 p:["Appeler métaphore une comparaison qui contient « comme ».",
    "Confondre litote (négation du contraire) et euphémisme (adoucissement d'un mot pénible).",
    "Confondre allitération (consonnes) et assonance (voyelles)."]},

"Versification":{
 f:["12 syllabes = alexandrin, 10 = décasyllabe, 9 = ennéasyllabe, 8 = octosyllabe.",
    "2 vers = distique, 3 = tercet, 4 = quatrain.",
    "Sonnet : 2 quatrains + 2 tercets, soit 14 vers.",
    "Rimes : AABB plates, ABAB croisées, ABBA embrassées.",
    "Césure de l'alexandrin classique : après la 6ᵉ syllabe, entre deux hémistiches."],
 m:"Compter les syllabes en appliquant la règle du « e » muet : il s'élide devant une voyelle ou en fin de vers, il compte devant une consonne. C'est cette règle qui fait la différence entre un compte juste et un compte faux.",
 p:["Compter le « e » final devant une voyelle : il s'élide (« musiqu(e) avant »).",
    "Confondre distique (2 vers) et hémistiche (moitié d'un alexandrin).",
    "Oublier qu'un sonnet commence par les quatrains, pas par les tercets."]},

"Littérature":{
 f:["XVI<sup>e</sup> humanisme · XVII<sup>e</sup> classicisme · XVIII<sup>e</sup> Lumières",
    "XIX<sup>e</sup> romantisme, réalisme, naturalisme, symbolisme · XX<sup>e</sup> surréalisme, négritude",
    "Négritude : Senghor (Sénégal), Césaire (Martinique), Damas (Guyane), années 1930.",
    "Romans : Oyono <i>Une vie de boy</i> · C. H. Kane <i>L'Aventure ambiguë</i> · Sembène <i>Les Bouts de bois de Dieu</i> · Mariama Bâ <i>Une si longue lettre</i> · Aminata Sow Fall <i>La Grève des bàttu</i>",
    "Poésie : Senghor <i>Chants d'ombre</i> · David Diop <i>Coups de pilon</i> · Birago Diop <i>Les Contes d'Amadou Koumba</i> (contes)"],
 m:"Classer chaque œuvre par genre (roman, poésie, théâtre, conte) et par siècle. Pour les courants, retenir un mot-clé : l'humanisme place l'homme au centre, le classicisme obéit aux règles antiques, le romantisme exprime le moi, le réalisme observe la société, le naturalisme y applique une méthode scientifique.",
 p:["Classer <i>Chants d'ombre</i> ou <i>Coups de pilon</i> parmi les romans : ce sont des recueils de poèmes.",
    "Situer le surréalisme au XIX<sup>e</sup> siècle : il appartient au XX<sup>e</sup>.",
    "Confondre réalisme et naturalisme : le second ajoute l'hérédité et le déterminisme social."]},

"Vocabulaire":{
 f:["éminent (remarquable) / imminent (tout proche)",
    "collusion (entente secrète) / collision (choc)",
    "conjecture (hypothèse) / conjoncture (ensemble des circonstances)",
    "acception (sens d'un mot) / acceptation (fait d'accepter)",
    "effraction (bris de clôture) / infraction (violation d'une règle)"],
 m:"Pour un mot inconnu, chercher le radical ou une famille de mots voisine. Pour les expressions imagées, reconstituer la scène concrète : « avoir l'estomac dans les talons » décrit un corps vidé par la faim.",
 p:["Confondre les paronymes ci-dessus : une lettre change, le sens change entièrement.",
    "Prendre « prodigue » pour un synonyme de prudent : il signifie qui dépense sans compter.",
    "Interpréter une expression au sens littéral au lieu du sens figuré."]},

"Registres & discours":{
 f:["Types de textes : narratif (raconter), descriptif (décrire), argumentatif (convaincre), explicatif (faire comprendre), injonctif (ordonner).",
    "Registres : épique (admiration), comique (rire), tragique (fatalité), pathétique (pitié), lyrique (sentiments), ironique.",
    "Connecteurs : cause (car, parce que) / conséquence (donc, ainsi) / opposition (cependant, en revanche) / addition (de plus)."],
 m:"Identifier l'intention dominante de l'auteur : raconter, décrire, convaincre ou faire agir. Le registre se lit dans l'effet recherché sur le lecteur, le type de texte dans la structure.",
 p:["Confondre type de texte (structure) et registre (effet produit).",
    "Prendre le conditionnel d'information (« il serait arrivé ») pour une condition.",
    "Confondre cause et conséquence dans l'analyse des connecteurs."]},

/* ===================== ANGLAIS ===================== */
"Present perfect":{
 f:["Present perfect = have/has + participe passé : bilan, résultat visible maintenant.",
    "Present perfect continuous = have/has been + V-ing : durée d'une action encore en cours.",
    "<b>since</b> + point de départ ; <b>for</b> + durée.",
    "Un repère passé daté (yesterday, last week, in 1998, ago) impose le PRÉTÉRIT."],
 m:"Se demander si l'action a un lien avec le présent. Si oui, present perfect. Si elle est datée et close, prétérit. Si l'énoncé insiste sur la durée d'une action qui continue, forme en -ing.",
 p:["Employer le present perfect avec « yesterday » ou « ago » : impossible en anglais.",
    "Confondre « has gone to » (parti, encore là-bas) et « has been to » (y est allé et revenu).",
    "Oublier le participe passé irrégulier : read/read, begin/began/begun."]},

"Past perfect":{
 f:["Past perfect = had + participe passé : antériorité par rapport à un autre fait passé.",
    "Past perfect continuous = had been + V-ing : durée antérieure à un moment passé.",
    "Prétérit continu (was/were + V-ing) : arrière-plan en cours au moment de l'action."],
 m:"Repérer les deux événements passés et décider lequel précède l'autre : le plus ancien passe au past perfect. « By the time », « when » et « after » signalent souvent cette antériorité.",
 p:["Mettre les deux verbes au prétérit et perdre l'ordre chronologique.",
    "Écrire « had began » : le participe passé est begun.",
    "Employer le present perfect là où le repère est passé : « When he arrived, the party HAD begun »."]},

"Conditionals":{
 f:["Type 1 (réel) : If + présent, will + base verbale.",
    "Type 2 (irréel du présent) : If + prétérit (were à toutes les personnes), would + BV.",
    "Type 3 (irréel du passé) : If + past perfect, would/could have + participe passé.",
    "<b>unless</b> = if… not ; <b>if only</b> + past perfect = regret sur le passé."],
 m:"Identifier le moment et le degré de réalité : possible dans le futur, imaginaire au présent, ou regret sur le passé. Le temps de la subordonnée en « if » détermine mécaniquement celui de la principale.",
 p:["Mettre « will » après « if » de condition : interdit.",
    "Employer le type 2 pour un regret passé : il faut le type 3 (had + PP, would have + PP).",
    "Traduire « unless » par « sauf si » puis ajouter une seconde négation : unless contient déjà le « not »."]},

"Connectors":{
 f:["<b>because</b> + proposition (sujet + verbe) ; <b>because of / due to / owing to</b> + nom.",
    "<b>although / though / even though</b> + proposition ; <b>despite / in spite of</b> + nom ou V-ing.",
    "But : <b>so as to / in order to / to</b> + base verbale ; <b>so that / in order that</b> + proposition.",
    "<b>however, nevertheless, therefore</b> : adverbes de liaison, suivis d'une virgule."],
 m:"La question est toujours la même : ce qui suit est-il un groupe nominal ou une proposition complète ? C'est cela, et non le sens, qui choisit entre because et because of, entre although et despite.",
 p:["Écrire « because of it was raining » : because of ne peut pas introduire une proposition.",
    "Faire suivre « despite » d'une proposition : il faut un nom ou un gérondif.",
    "Confondre « before » (avant que) et « until » (jusqu'à ce que)."]},

"Modals":{
 f:["<b>mustn't</b> = interdiction ≠ <b>don't have to</b> = absence d'obligation.",
    "<b>must</b> = quasi-certitude déduite ≠ <b>can't</b> = impossibilité.",
    "<b>should have</b> + participe passé = reproche ou regret.",
    "<b>could</b> = capacité passée ; après <b>make</b> et <b>let</b> actifs : base verbale sans « to »."],
 m:"Distinguer l'obligation (must, have to) de la déduction (must, can't). Pour le passé des modaux, ajouter « have + participe passé » : should have done, must have been.",
 p:["Traduire « don't have to » par une interdiction : cela signifie que ce n'est pas nécessaire.",
    "Faire suivre un modal de « to » : must to go est impossible.",
    "Employer « can » pour une capacité passée au lieu de « could »."]},

"Gerund & infinitive":{
 f:["Après une préposition (about, without, before, look forward to) : V-ing.",
    "enjoy, avoid, mind, suggest, finish, practise, admit + V-ing.",
    "want, hope, decide, promise, agree, refuse, manage + to + base verbale.",
    "stop + V-ing = cesser de ≠ stop to + BV = s'arrêter afin de."],
 m:"Repérer le mot qui précède : préposition, ou verbe appartenant à l'une des deux listes. Le « to » de « look forward to » est une préposition, d'où le gérondif qui suit.",
 p:["Écrire « How about to go » : après une préposition, c'est toujours -ing.",
    "Employer l'infinitif après enjoy ou avoid.",
    "Confondre les deux constructions de stop, dont le sens change complètement."]},

"Present & future":{
 f:["Présent simple : habitude, vérité générale, horaire officiel (The train comes at 10).",
    "Présent continu : action en cours, ou projet personnel déjà organisé.",
    "<b>be going to</b> : prévision fondée sur un indice visible.",
    "<b>Future perfect</b> (will have + PP) : action achevée avant un moment futur (« by 2030 »)."],
 m:"Un horaire fixe prend le présent simple, un rendez-vous personnel le présent continu, une prévision appuyée sur un indice « be going to ». « By + date » appelle le future perfect.",
 p:["Employer « will » pour un horaire de train ou un programme officiel.",
    "Oublier le « s » de la 3ᵉ personne du singulier au présent simple.",
    "Confondre « will » (décision sur le moment) et « be going to » (intention déjà formée)."]},

"Passif & discours rapporté":{
 f:["Passif = be (au temps voulu) + participe passé.",
    "Présent continu passif : is/are being + PP ; prétérit passif : was/were + PP.",
    "Discours indirect : le présent devient prétérit, le prétérit devient past perfect.",
    "Interrogation rapportée : ordre sujet + verbe, sans auxiliaire de question."],
 m:"Pour le passif, conserver le temps de la phrase active et le reporter sur « be ». Pour le discours rapporté, reculer chaque temps d'un cran et adapter pronoms et repères de temps.",
 p:["Garder l'ordre interrogatif dans une question rapportée : « she asked me where I lived », pas « where did I live ».",
    "Oublier « being » au passif progressif.",
    "Ne pas reculer le temps après un verbe introducteur au passé."]},

"Relatifs & déterminants":{
 f:["<b>who</b> (personne sujet), <b>which</b> (chose), <b>whose</b> (possession), <b>that</b> (les deux).",
    "<b>much</b> + indénombrable ; <b>many</b> + dénombrable.",
    "<b>less</b> + indénombrable ; <b>fewer</b> + dénombrable.",
    "Indénombrables fréquents : advice, information, news, furniture, luggage, progress."],
 m:"Vérifier d'abord si le nom est dénombrable : peut-on dire « two … » ? Si non, il exige much/less et refuse l'article indéfini et le pluriel. Pour les relatifs, identifier l'antécédent et la fonction du relatif.",
 p:["Écrire « an advice » ou « advices » : advice est indénombrable.",
    "Confondre « whose » (dont) et « who's » (who is).",
    "Employer « neither » pour plus de deux éléments : c'est « none »."]},

"Collocations":{
 f:["<b>sit for</b> an exam = le passer ≠ <b>pass</b> an exam = le réussir.",
    "<b>make</b> a mistake, progress, a decision, an effort — <b>do</b> homework, research, the washing-up.",
    "keep up with = suivre le rythme ; call off = annuler ; put off = reporter.",
    "look up = chercher une information ; look for = chercher un objet ; look after = s'occuper de."],
 m:"Les verbes à particule changent complètement de sens avec la particule : les apprendre par paires verbe + particule, jamais isolément. Pour make/do, retenir que « make » fabrique un résultat et « do » exécute une tâche.",
 p:["Traduire « passer un examen » par « pass an exam » : c'est le réussir.",
    "Écrire « do a mistake » au lieu de « make a mistake ».",
    "Confondre look for, look up et look after."]},

"Vocabulaire & faux amis":{
 f:["Faux amis : actually = en fait ; currently = actuellement.",
    "attend = assister à ; wait for = attendre.",
    "sensible = sensé ; sensitive = sensible (émotif).",
    "library = bibliothèque ; bookshop = librairie.",
    "Préfixes privatifs : unreliable, impossible, irregular, illegal, dishonest."],
 m:"Se méfier de tout mot qui ressemble au français : vérifier le sens par le contexte de la phrase plutôt que par la ressemblance. Pour former un adjectif ou un adverbe, partir du nom : science → scientific → scientifically.",
 p:["Traduire « actually » par « actuellement ».",
    "Employer « sensible » pour parler d'une personne émotive.",
    "Choisir le mauvais préfixe privatif : le préfixe dépend du mot, il n'y a pas de règle unique."]},

"Structures":{
 f:["Adverbe négatif en tête (never, seldom, hardly, not only) ⇒ inversion sujet-auxiliaire.",
    "Comparatif des adjectifs longs : more … than ; superlatif : the most …",
    "Double comparatif : the + comparatif …, the + comparatif … (the more you practise, the better you become).",
    "<b>It's (high) time</b> + prétérit modal ; <b>neither … nor</b> : accord avec le sujet le plus proche."],
 m:"Compter les syllabes de l'adjectif : un ou deux syllabes prennent -er/-est, au-delà c'est more/most. Repérer les déclencheurs d'inversion en tête de phrase.",
 p:["Écrire « Never I have seen » : l'inversion est obligatoire après never en tête.",
    "Former « difficulter » : les adjectifs longs prennent more.",
    "Employer « less » avec un dénombrable : c'est « fewer students »."]}

};
