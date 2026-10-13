/* Pourquoi CHAQUE mauvaise réponse est fausse — physique (électricité).
   Tableau des options d'origine 1, 2 puis 3 (l'option 0 est la bonne). */
window.POURQUOI = window.POURQUOI || {};
Object.assign(window.POURQUOI, {

/* ---------- Champ électrique, force et travail électriques (électrostatique) ---------- */
P206:["Tu as divisé par 100 au lieu de multiplier.","100 est l'énergie en eV, pas en joules.","C'est la charge e elle-même, ou l'énergie acquise sous 1 V."],
P300:["Tu as divisé par r au lieu de r² : la force varie comme 1/r².","Tu as oublié la constante k = 9×10⁹ SI.","Erreur de conversion : 3 cm = 0,03 m, pas 0,3 m."],
P301:["La force varie comme 1/r², pas comme 1/r.","La force DIMINUE quand la distance augmente.","La force dépend de la distance : elle varie comme 1/r²."],
P302:["Tu as gardé d en centimètres : il faut 0,04 m.","Tu as multiplié U par d au lieu de diviser.","Tu as multiplié U par d exprimée en cm."],
P303:["C'est l'inverse : le champ va toujours du potentiel le plus haut vers le plus bas.","Entre des plaques planes, le champ est uniforme et PERPENDICULAIRE aux plaques.","C'est précisément entre les plaques que le champ est uniforme et non nul."],
P304:["L'électron a une charge NÉGATIVE : la force est opposée au champ.","La force électrique ne dépend pas de la vitesse (contrairement à la force magnétique) : elle existe même à l'arrêt.","F⃗ = q·E⃗ est colinéaire à E⃗, jamais perpendiculaire."],
P305:["Tu as oublié le préfixe micro : 2 μC = 2×10⁻⁶ C.","Tu as divisé U par q au lieu de les multiplier.","Tu as divisé q par U. Le travail est le produit q·U."],
P306:["C'est v², tu as oublié la racine carrée.","Tu as oublié le facteur 2 : ½mv² = eU donne v = √(2eU/m).","Tu as pris la masse du proton au lieu de celle de l'électron."],
P026:["L'énergie ne dépend pas du carré de la tension : le théorème de l'énergie cinétique donne directement E = |q|U.","Même erreur : la relation est linéaire en U.","Le facteur ½ appartient à l'expression ½mv², pas au travail de la force électrique."],

/* ---------- Circuits en courant continu : lois de Kirchhoff, générateurs, récepteurs ---------- */
P150:["3R est la résistance équivalente en SÉRIE. En parallèle, elle est toujours plus petite que chaque résistance.","Ce serait le cas d'une seule résistance : brancher en parallèle divise la résistance.","Ce résultat correspondrait à deux résistances en parallèle en série avec une autre configuration, pas à trois en parallèle."],
P151:["S et l sont intervertis : un fil plus long résiste DAVANTAGE, un fil plus gros résiste MOINS.","ρ est au numérateur : un matériau plus résistif donne une résistance plus grande.","La section doit diviser, pas multiplier."],
P153:["C'est la formule du PARALLÈLE : pour les condensateurs, les règles sont inversées par rapport aux résistances.","La moyenne ne correspond à aucun montage.","Il manque la division par la somme : c'est le produit sur la somme."],
P154:["Il manque le carré de l'intensité : P = RI², par analogie avec U²/R.","C'est R qui est à la puissance 1 et I au carré, pas l'inverse.","R est au numérateur : une résistance plus grande dissipe plus à intensité donnée."],
P233:["9 Ω est l'association en SÉRIE.","Ce n'est pas la moyenne des deux résistances.","0,5 est 1/R : il faut prendre l'inverse pour obtenir R."],
P234:["Tu as oublié le carré : R·I = 20 (c'est la tension U en volts).","Tu as calculé R/I.","Tu as élevé R au carré au lieu de I."],
P235:["Tu as oublié la résistance interne r.","Tu as divisé par r seul : ce serait le courant de court-circuit.","Tu as inversé le rapport : (R + r)/E."],
P307:["Tu as additionné tous les courants sans distinguer ceux qui entrent et ceux qui sortent.","Tu as oublié le courant de 2 A qui arrive aussi au nœud.","Le signe est déjà fixé par le sens choisi (sortant) : I = +4 A."],
P308:["4 V est la tension aux bornes de R₁.","Les tensions ne se partagent également que si R₁ = R₂.","Tu as calculé E·R₂/R₁ : il faut diviser par la somme R₁ + R₂."],
P309:["Pour un générateur, la chute de tension interne se RETRANCHE : U = E − rI.","U = E seulement si le générateur ne débite pas (I = 0) ou si r = 0.","Tu as calculé E × I : c'est une puissance (en W), pas une tension."],
P310:["Pour un RÉCEPTEUR, la chute interne s'ajoute : U = E′ + r′I.","Tu as oublié la résistance interne du moteur.","E′ × I est la puissance utile (en W), pas une tension."],
P311:["1 500 W = 1,5 kW : tu as mélangé watts et kilowatts.","Tu as divisé P par t. L'énergie est le produit P × t.","En joules, t doit être en secondes : 2 h = 7 200 s, d'où 1,08×10⁷ J."],
P312:["La f.é.m. du générateur fait partie de la somme ; au total, la somme algébrique est nulle.","On n'additionne pas des tensions et des intensités : la loi des nœuds porte sur les intensités.","C'est une somme ALGÉBRIQUE : les tensions se compensent, la somme est nulle."],
P152:["Erreur d'un facteur 10 : S = 5,49×10⁻⁶ m² donne un diamètre de 2,6×10⁻³ m.","Erreur d'un facteur 100 dans la conversion de la section.","Un fil de 2,6 m de diamètre est physiquement absurde : contrôle toujours l'ordre de grandeur."],

/* ---------- P9 Condensateur et dipôle RC ---------- */
P080:["Le quotient R/C n'est pas homogène à un temps : c'est le PRODUIT RC qui l'est.","L'expression est inversée, et n'est pas homogène à un temps.","C'est l'inverse de la constante de temps, soit une fréquence."],
P081:["C'est l'expression de la DÉCHARGE : elle part de E et décroît, alors que la charge part de 0.","La croissance n'est pas linéaire mais exponentielle, avec une pente qui diminue.","Le signe interne est faux : cette expression partirait de 2E et n'atteindrait jamais E."],
P082:["Il manque le facteur ½, comme dans toute énergie quadratique.","Il manque le carré : l'énergie dépend de U².","C est au numérateur : un condensateur de grande capacité stocke plus d'énergie sous la même tension."],
P084:["L'intensité dans une résistance peut sauter instantanément, car rien n'y stocke d'énergie de façon continue.","Cette tension suit l'intensité par u = Ri : elle peut donc sauter aussi.","La puissance dépend de i² : elle peut varier brutalement."],
P219:["Tu as pris μ = 10⁻³ (milli) : 10 μF = 10×10⁻⁶ F.","Tu as oublié le préfixe kilo : 10 kΩ = 10⁴ Ω.","Erreur de puissance de 10 : 10⁴ × 10⁻⁵ = 10⁻¹."],
P220:["Tu as oublié le facteur ½.","Tu as oublié d'élever U au carré : ½·C·U.","C·U est la charge Q (en coulombs), pas l'énergie."],
P321:["6,3 V (63 %) correspond à la CHARGE à t = τ, pas à la décharge.","La moitié est atteinte à t = τ·ln 2 ≈ 0,69τ, pas à t = τ.","La décharge est exponentielle : il faut environ 5τ pour qu'elle soit quasi complète."],
P322:["9 μF est l'association en PARALLÈLE. Pour les condensateurs, les règles sont inversées par rapport aux résistances.","Ce n'est pas la moyenne des deux capacités.","0,5 μF⁻¹ est 1/C : il faut prendre l'inverse."],
P323:["Tu as oublié le préfixe micro : 47 μF = 47×10⁻⁶ F.","Tu as pris μ pour milli (10⁻³). Micro vaut 10⁻⁶.","C'est l'énergie ½·C·U² (en J), pas la charge."],
P083:["Erreur de puissance de dix : RC = 10³ × 10⁻⁴ = 10⁻¹ s, soit 0,1 s.","Tu as pris 1 s au lieu de 0,1 s : vérifie la conversion des microfarads.","Le facteur 10 est perdu : 100 µF vaut 10⁻⁴ F, pas 10⁻⁵ F."],

/* ---------- P5 Champ magnétique ---------- */
P040:["N est le nombre TOTAL de spires : il faut le rapporter à la longueur, soit n = N/L.","C'est l'expression du champ créé par un fil rectiligne, pas par un solénoïde.","La longueur intervient en division, à travers n = N/L, et non en multiplication."],
P041:["Tu as divisé par 100 : 4π×10⁻⁷ × 16 000 × 1 000 = 4π × 1,6 ≈ 20.","Erreur d'un facteur 1 000 dans les puissances de dix.","Tu as probablement oublié le facteur 10³ de l'intensité."],
P042:["Le dénominateur comporte r à la puissance 1, avec 2π et non 4π.","C'est l'expression du solénoïde, qui fait intervenir le nombre de spires par mètre.","r doit être au dénominateur : le champ DÉCROÎT quand on s'éloigne du fil."],
P043:["Le weber mesure le FLUX magnétique Φ, pas le champ B.","Le henry mesure l'inductance d'une bobine.","Le gauss est une unité hors système : 1 T = 10⁴ gauss."],
P209:["Un ampèremètre mesure une intensité électrique, pas un champ magnétique.","Un voltmètre mesure une tension.","Un électroscope détecte des charges électriques."],
P210:["C'est l'inverse : les lignes sortent par le nord.","Les lignes de champ magnétique sont fermées : elles sortent par un pôle et rentrent par l'autre.","Les lignes sortent par les pôles, pas par le milieu."],
P313:["Tu as gardé r en centimètres : 2 cm = 0,02 m.","Tu as oublié de diviser par 2π.","Tu as oublié de diviser par la distance r."],
P314:["B augmente avec I : B = μ₀nI.","B est proportionnel à I, pas à I².","Le champ dépend directement de l'intensité."],

/* ---------- P6 Particule chargée dans un champ magnétique uniforme ---------- */
P050:["Étant perpendiculaire à la vitesse, elle ne travaille pas : elle ne peut donc pas modifier la norme de la vitesse.","Elle est au contraire toujours PERPENDICULAIRE à la vitesse, par définition du produit vectoriel.","C'est l'inverse : elle est MAXIMALE quand v⃗ ⊥ B⃗, et nulle quand ils sont colinéaires."],
P051:["L'expression est entièrement inversée : partir de |q|vB = mv²/R donne R = mv/(|q|B).","Un v de trop : après simplification par v, il n'en reste qu'un au numérateur.","La masse a disparu : or c'est elle qui rend la trajectoire plus ample pour une particule lourde."],
P053:["La trajectoire n'est circulaire que si v⃗ est PERPENDICULAIRE à B⃗.","Le mouvement est hélicoïdal quand v⃗ possède une composante parallèle ET une composante perpendiculaire à B⃗.","Une trajectoire parabolique caractérise un champ électrique uniforme, pas un champ magnétique."],
P212:["La force dépend de la vitesse : F = |q|·v·B·sin α, nulle si v = 0.","La force de Lorentz est toujours perpendiculaire à B⃗, jamais dirigée selon B⃗ ; et ici elle est nulle.","La norme q·B oublie la vitesse : F = |q|·v·B·sin α."],
P213:["La force n'est pas nulle (v⃗ ⊥ B⃗) : la trajectoire est courbée.","Une parabole correspond à une force CONSTANTE (champ électrique uniforme), pas à la force de Lorentz.","La force de Lorentz ne travaille pas : la norme de la vitesse reste constante."],
P315:["La masse figure dans T = 2πm/(|q|B).","La charge figure dans T = 2πm/(|q|B).","B figure dans T : plus le champ est intense, plus la période est courte."],
P316:["Tu as inversé la formule : c'est |q|B/(mv), qui n'est pas une longueur.","Tu as pris la masse du proton au lieu de celle de l'électron.","C'est le diamètre 2R, pas le rayon."],
P052:["T = 2πm/(|q|B) ne contient pas v : la vitesse n'y figure tout simplement pas.","Même erreur : la vitesse n'intervient pas dans la période.","Le rayon dépend de la vitesse, mais leur rapport reste constant : la période, elle, est fixe."],

/* ---------- P7 Loi de Laplace ---------- */
P060:["Avec cos α, la force serait maximale pour un conducteur PARALLÈLE au champ, alors qu'elle y est nulle.","La longueur multiplie la force, elle ne la divise pas : un conducteur plus long subit une force plus grande.","Le champ intervient à la puissance 1, pas au carré."],
P061:["Elle est perpendiculaire au courant : une force parallèle au conducteur ne le ferait pas dévier.","Elle est aussi perpendiculaire au champ, en vertu du produit vectoriel.","Sa direction dépend de l'orientation du conducteur et du champ, pas d'une verticale absolue."],
P214:["Tu as gardé ℓ = 1 m (ou en dm) : 10 cm = 0,10 m.","Erreur de conversion : 10 cm = 0,10 m, pas 0,01 m.","Tu as pris ℓ = 10 m. Il faut convertir les centimètres en mètres."],
P215:["La force est maximale quand le conducteur est PERPENDICULAIRE au champ (sin α = 1).","F⃗ = I·ℓ⃗ ∧ B⃗ est toujours perpendiculaire au conducteur ; ici elle est nulle.","I·ℓ·B est la valeur maximale, atteinte pour α = 90°."],
P216:["La loi de Lenz donne le sens d'un courant INDUIT, pas celui de la force de Laplace.","La loi de Coulomb concerne la force entre charges électriques.","La loi d'Ohm relie tension et intensité dans un conducteur."],
P317:["Tu as pris cos 30° : la formule utilise le sinus de l'angle entre la tige et B⃗.","Tu as oublié le facteur sin 30° = 0,5.","Tu as gardé ℓ en centimètres : 5 cm = 0,05 m."],
P318:["L'alternateur repose sur l'INDUCTION : on produit un courant en faisant tourner un aimant.","Le transformateur repose sur l'induction mutuelle entre deux bobines.","Une pile produit du courant par réaction chimique, sans champ magnétique."],

/* ---------- P8 Induction et auto-induction, dipôle RL ---------- */
P070:["C'est exactement l'inverse : s'il renforçait la cause, l'énergie augmenterait indéfiniment sans apport extérieur.","Il n'est nul que si le flux ne varie pas.","Il est proportionnel à la VARIATION du flux (sa dérivée), pas au flux lui-même."],
P071:["u = L·i ne respecte pas l'homogénéité : la tension dépend de la vitesse de variation du courant.","L est au numérateur : une inductance plus grande produit une tension plus grande.","La charge q concerne le condensateur, pas la bobine."],
P072:["Le produit RL n'est pas homogène à un temps : c'est le quotient L/R qui l'est.","L'expression est inversée : plus R est grand, plus le régime permanent s'établit vite, donc τ diminue.","R doit apparaître à la puissance 1, sinon l'homogénéité est perdue."],
P073:["Il manque le carré : l'énergie dépend de i², comme l'énergie cinétique dépend de v².","Le facteur ½ est indispensable, par analogie avec ½mv².","L est au numérateur : une bobine de forte inductance stocke plus d'énergie."],
P074:["Un champ constant à travers un circuit immobile donne un flux constant : il n'y a aucune induction.","Un champ nul ne crée évidemment aucun flux ni aucune induction.","Si le champ est parallèle au plan du circuit, le flux est nul et ne varie pas."],
P211:["Tu as gardé S en cm² : il faut convertir en m² (50 cm² = 5×10⁻³ m²).","Erreur de conversion : 50 cm² = 0,005 m², pas 0,5 m².","Tu as converti comme des mm² (10⁻⁶). Pour des cm², c'est 10⁻⁴."],
P217:["Tu as multiplié ΔΦ par Δt au lieu de diviser.","Erreur d'un facteur 10 : 0,05/0,1 = 0,5.","Tu as pris la valeur du flux elle-même. La f.é.m. est la VARIATION du flux par unité de temps."],
P218:["Tu as divisé di/dt par L. La formule est u = L·(di/dt).","Tu as divisé L par di/dt.","Tu as oublié L : u = L·(di/dt)."],
P319:["Tu as oublié de diviser par Δt : L·Δi est un flux, pas une tension.","Tu as gardé L en mH : 50 mH = 0,05 H.","Tu as gardé Δt en ms : 10 ms = 0,01 s."],
P320:["Tu as oublié le facteur ½.","Tu as oublié d'élever I au carré.","L·I est le flux propre (en Wb), pas une énergie."],

/* ---------- P10 Oscillations électriques libres et forcées ---------- */
P090:["La racine et la fraction sont mal placées : √(LC) doit être au numérateur, car augmenter L ou C ralentit les oscillations.","Il manque le facteur 2π, présent dans toute période d'oscillateur harmonique.","Il manque la racine carrée : ce serait 2πLC, qui n'est pas homogène à un temps."],
P091:["Les impédances ne s'additionnent pas comme des résistances : il faut la composition quadratique.","Le signe interne est faux : les deux réactances se RETRANCHENT, ce qui rend la résonance possible.","Cette expression n'a aucun sens dimensionnel."],
P092:["C'est l'inverse : à la résonance, le terme réactif s'annule et Z atteint son MINIMUM, égal à R.","Le déphasage est justement NUL à la résonance : tension et intensité sont en phase.","L'intensité y est au contraire MAXIMALE."],
P094:["Il manque le facteur cos φ : sans lui, on surestime la puissance réellement consommée.","C'est cos φ et non sin φ : à la résonance φ = 0 et toute la puissance est consommée.","Cette formule ne vaut que pour une résistance pure, pas pour un dipôle déphasé."],
P221:["Tu as calculé √(LC) sans le facteur 2π.","Tu as oublié la racine carrée : 2π·L·C.","Tu as oublié le facteur 2 : π√(LC)."],
P222:["C'est le cas pour ω < ω₀, quand 1/(Cω) l'emporte sur Lω.","Tension et intensité ne sont en phase qu'à la résonance (ω = ω₀).","La résonance a lieu exactement à ω = ω₀, pas au-dessus."],
P324:["311 V est l'amplitude U<sub>m</sub>, et 100π est ω, pas f.","100π est la pulsation ω (en rad·s⁻¹). La fréquence est f = ω/(2π).","Il faut DIVISER l'amplitude par √2, pas la multiplier."],
P325:["10⁴ est la pulsation ω₀ (en rad·s⁻¹). Il faut diviser par 2π.","Tu as oublié le préfixe micro : C = 10⁻⁶ F.","Tu as gardé L en mH : 10 mH = 10⁻² H."],
P326:["La valeur maximale vaut √2 fois la valeur affichée.","La moyenne d'une grandeur sinusoïdale est nulle : on n'aurait aucune information. Ce n'est pas ce qu'affiche l'appareil.","L'appareil affiche une valeur stable, pas une valeur instantanée."],
P093:["Erreur d'un facteur 1 000 : Z ≈ 33 Ω et 220/33 ≈ 6,6 A, pas des milliampères.","Tu as sans doute divisé par R seul en oubliant la réactance : 220/10 = 22, pas 66.","Facteur 10 perdu dans le calcul de l'impédance."]

});
