/* Contenu de la série corrigée. Les mathématiques s'écrivent en LaTeX entre $…$
   (en ligne) ou $$…$$ (centré) ; elles sont rendues par KaTeX à la construction.
   Toutes les valeurs numériques sont recalculées dans verifie.py. */
const R = String.raw;

const MATHS = [
{
  id: "M1", chap: "Nombres complexes", titre: "Racines, forme exponentielle et triangle", duree: 20, niv: 1,
  enonce: R`
<p>Dans le plan complexe muni d'un repère orthonormé direct $(O ; \vec u, \vec v)$, on considère l'équation
$$(E) : \quad z^2 - 2\sqrt3\, z + 4 = 0.$$</p>
<ol class="q">
<li>Résoudre $(E)$ dans $\mathbb C$. On note $z_1$ la solution de partie imaginaire positive et $z_2$ l'autre.</li>
<li>Écrire $z_1$ et $z_2$ sous forme exponentielle.</li>
<li>Calculer $z_1^{\,6}$. Pour quelles valeurs de l'entier naturel $n$ le nombre $z_1^{\,n}$ est-il réel ?</li>
<li>On note A et B les points d'affixes $z_1$ et $z_2$. Calculer $\dfrac{z_1}{z_2}$ puis déterminer la nature du triangle OAB.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>$\Delta = (2\sqrt3)^2 - 16 = -4 = (2i)^2$, d'où $z = \dfrac{2\sqrt3 \pm 2i}{2}$ : <span class="res">$z_1 = \sqrt3 + i$ et $z_2 = \sqrt3 - i$</span>. Les deux racines sont conjuguées, comme toujours pour une équation à coefficients réels avec $\Delta < 0$.</li>
<li>$|z_1| = \sqrt{3+1} = 2$ ; $\cos\theta = \frac{\sqrt3}{2}$ et $\sin\theta = \frac12$ donnent $\theta = \frac{\pi}{6}$. <span class="res">$z_1 = 2e^{i\pi/6}$ et $z_2 = \overline{z_1} = 2e^{-i\pi/6}$</span>.</li>
<li>Moivre : $z_1^{\,6} = 2^6 e^{i\pi} = $ <span class="res">$-64$</span>. Plus généralement $z_1^{\,n} = 2^n e^{in\pi/6}$ est réel si et seulement si $\frac{n\pi}{6} \equiv 0 \ [\pi]$, c'est-à-dire <span class="res">$n$ multiple de 6</span>.</li>
<li>$\dfrac{z_1}{z_2} = \dfrac{2e^{i\pi/6}}{2e^{-i\pi/6}} = e^{i\pi/3}$. Donc $OA = OB = 2$ et $(\overrightarrow{OB}, \overrightarrow{OA}) = \frac{\pi}{3}$ : un triangle isocèle avec un angle de $60°$ est <span class="res">équilatéral</span> (on vérifie : $AB = |z_1 - z_2| = |2i| = 2$).</li>
</ol>`,
  schemaC: "m1",
  reflexe: R`Dans un QCM, un module et un argument se lisent sur le dessin : $\sqrt3 + i$ est « à 30° et de longueur 2 ». Pour une puissance, passez toujours par la forme exponentielle.`
},
{
  id: "M2", chap: "Similitudes directes", titre: "Éléments caractéristiques d'une similitude", duree: 15, niv: 1,
  enonce: R`
<p>On considère l'application $s$ du plan qui, au point M d'affixe $z$, associe le point M′ d'affixe
$$z' = (1+i)\,z + 2 - i.$$</p>
<ol class="q">
<li>Justifier que $s$ est une similitude directe ; donner son rapport $k$ et son angle $\theta$.</li>
<li>Déterminer l'affixe $\omega$ de son centre Ω.</li>
<li>Calculer l'affixe de l'image A′ du point A d'affixe $3 + i$.</li>
<li>Déterminer l'image par $s$ du cercle $\mathcal C$ de centre O et de rayon 1.</li>
<li>Donner l'écriture complexe de la réciproque $s^{-1}$.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>L'écriture est de la forme $z' = az + b$ avec $a = 1 + i \neq 0$ : c'est une similitude directe. <span class="res">$k = |a| = \sqrt2$ et $\theta = \arg a = \frac{\pi}{4}$</span>.</li>
<li>Le centre est le point fixe : $\omega = (1+i)\omega + 2 - i \iff -i\,\omega = 2 - i \iff \omega = \dfrac{2-i}{-i} = (2-i)\,i$, soit <span class="res">$\omega = 1 + 2i$</span>.</li>
<li>$z_{A'} = (1+i)(3+i) + 2 - i = 3 + i + 3i - 1 + 2 - i =$ <span class="res">$4 + 3i$</span>.</li>
<li>Une similitude transforme un cercle en cercle : le centre O a pour image le point d'affixe $s(0) = 2 - i$, et le rayon est multiplié par $k$. <span class="res">Image : cercle de centre $2 - i$ et de rayon $\sqrt2$</span>.</li>
<li>$z = \dfrac{z' - 2 + i}{1 + i} = \dfrac{1-i}{2}(z' - 2 + i)$, soit <span class="res">$z = \dfrac{1-i}{2}\,z' + \dfrac{-1+3i}{2}$</span> : rapport $\frac{1}{\sqrt2}$, angle $-\frac{\pi}{4}$, même centre Ω.</li>
</ol>`,
  reflexe: R`Rapport $= |a|$, angle $= \arg a$, centre $= \dfrac{b}{1-a}$. Si $|a| = 1$, c'est une rotation ; si $a$ est réel, une homothétie.`
},
{
  id: "M3", chap: "Suites numériques", titre: "Suite arithmético-géométrique", duree: 25, niv: 1,
  enonce: R`
<p>On définit la suite $(u_n)$ par $u_0 = 10$ et, pour tout entier naturel $n$, $u_{n+1} = \frac12 u_n + 3$.</p>
<ol class="q">
<li>Calculer $u_1$, $u_2$ et $u_3$.</li>
<li>On pose $v_n = u_n - 6$. Montrer que $(v_n)$ est géométrique ; préciser sa raison et son premier terme.</li>
<li>En déduire $u_n$ en fonction de $n$, puis la limite de $(u_n)$.</li>
<li>Étudier le sens de variation de $(u_n)$.</li>
<li>Calculer $S_n = u_0 + u_1 + \dots + u_n$ en fonction de $n$.</li>
<li>Déterminer le plus petit entier $n$ tel que $u_n - 6 < 10^{-3}$.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>$u_1 = 5 + 3 = 8$, $u_2 = 4 + 3 = 7$, <span class="res">$u_3 = 6{,}5$</span>.</li>
<li>$v_{n+1} = u_{n+1} - 6 = \frac12 u_n - 3 = \frac12 (u_n - 6) = \frac12 v_n$. <span class="res">$(v_n)$ est géométrique de raison $q = \frac12$ et de premier terme $v_0 = 4$</span>.</li>
<li>$v_n = 4\left(\frac12\right)^n$, donc <span class="res">$u_n = 6 + 4\left(\tfrac12\right)^n$</span>. Comme $-1 < \frac12 < 1$, $\left(\frac12\right)^n \to 0$ : <span class="res">$\lim u_n = 6$</span>.</li>
<li>$u_{n+1} - u_n = 4\left(\frac12\right)^{n+1} - 4\left(\frac12\right)^n = -2\left(\frac12\right)^n < 0$ : <span class="res">$(u_n)$ est strictement décroissante</span>.</li>
<li>$S_n = \sum (6 + v_k) = 6(n+1) + 4\cdot\dfrac{1 - (1/2)^{n+1}}{1 - 1/2}$, soit <span class="res">$S_n = 6(n+1) + 8\left(1 - \left(\tfrac12\right)^{n+1}\right)$</span>. Attention : il y a $n + 1$ termes de $u_0$ à $u_n$.</li>
<li>$4\left(\frac12\right)^n < 10^{-3} \iff 2^n > 4000$. Or $2^{11} = 2048$ et $2^{12} = 4096$ : <span class="res">$n = 12$</span>.</li>
</ol>`,
  reflexe: R`Pour $u_{n+1} = au_n + b$, la limite (si $|a| < 1$) est le point fixe $\ell = \dfrac{b}{1-a}$ : ici $\ell = \dfrac{3}{1/2} = 6$, sans aucun calcul de suite.`
},
{
  id: "M4", chap: "Limites, asymptotes, dérivées", titre: "Fonction rationnelle et asymptote oblique", duree: 30, niv: 1,
  enonce: R`
<p>Soit $f$ la fonction définie sur $\mathbb R \setminus \{1\}$ par $f(x) = \dfrac{2x^2 - x + 1}{x - 1}$ et $\mathcal C$ sa courbe.</p>
<ol class="q">
<li>Déterminer les réels $a$, $b$, $c$ tels que $f(x) = ax + b + \dfrac{c}{x-1}$.</li>
<li>Calculer les limites de $f$ aux bornes de son ensemble de définition. En déduire les asymptotes de $\mathcal C$.</li>
<li>Calculer $f'(x)$ et dresser le tableau de variations de $f$.</li>
<li>Montrer que le point $\Omega(1 ; 3)$ est centre de symétrie de $\mathcal C$.</li>
<li>Donner une équation de la tangente à $\mathcal C$ au point d'abscisse 3.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>La division euclidienne donne $2x^2 - x + 1 = (x-1)(2x+1) + 2$, d'où <span class="res">$f(x) = 2x + 1 + \dfrac{2}{x-1}$</span>.</li>
<li>$\lim_{\pm\infty} f = \pm\infty$ ; en 1 : $\lim_{x\to1^-} f = -\infty$ et $\lim_{x\to1^+} f = +\infty$. Comme $f(x) - (2x+1) = \frac{2}{x-1} \to 0$ en $\pm\infty$ : <span class="res">asymptote verticale $x = 1$ et asymptote oblique $y = 2x + 1$</span>. $\mathcal C$ est au-dessus de l'oblique pour $x > 1$, en dessous pour $x < 1$.</li>
<li>$f'(x) = 2 - \dfrac{2}{(x-1)^2} = \dfrac{2\big((x-1)^2 - 1\big)}{(x-1)^2} = \dfrac{2x(x-2)}{(x-1)^2}$. <span class="res">$f$ croît sur $]-\infty ; 0]$, décroît sur $[0 ; 1[$ et sur $]1 ; 2]$, croît sur $[2 ; +\infty[$</span> ; maximum local $f(0) = -1$, minimum local $f(2) = 7$.</li>
<li>On vérifie $f(2 - x) + f(x) = 2 \times 3$ : $f(2-x) = 2(2-x) + 1 + \frac{2}{1-x} = 5 - 2x - \frac{2}{x-1}$, et $f(x) + f(2-x) = 6$. <span class="res">Ω(1 ; 3) est centre de symétrie</span> (c'est l'intersection des deux asymptotes).</li>
<li>$f(3) = 8$ et $f'(3) = \frac{2\cdot3\cdot1}{4} = \frac32$ : <span class="res">$T : y = \frac32 x + \frac72$</span>.</li>
</ol>`,
  schemaC: "m4",
  reflexe: R`Asymptote oblique d'une fraction : faites la division euclidienne, le quotient EST l'asymptote. Le centre de symétrie d'une telle courbe est l'intersection des deux asymptotes.`
},
{
  id: "M5", chap: "Fonction logarithme", titre: R`Étude de $x \mapsto \frac{\ln x}{x}$`, duree: 30, niv: 1,
  enonce: R`
<p>Soit $f$ définie sur $]0 ; +\infty[$ par $f(x) = \dfrac{\ln x}{x}$, de courbe $\mathcal C$.</p>
<ol class="q">
<li>Déterminer les limites de $f$ en $0$ et en $+\infty$. Interpréter.</li>
<li>Calculer $f'(x)$ et dresser le tableau de variations de $f$.</li>
<li>Donner une équation de la tangente T à $\mathcal C$ au point d'abscisse 1.</li>
<li>Combien l'équation $f(x) = \frac14$ a-t-elle de solutions ?</li>
<li>Montrer que $f''(x) = \dfrac{2\ln x - 3}{x^3}$ ; en déduire le point d'inflexion de $\mathcal C$.</li>
<li>Calculer l'aire $\mathcal A$ du domaine limité par $\mathcal C$, l'axe des abscisses et les droites $x = 1$ et $x = e$.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>En $0^+$ : $\ln x \to -\infty$ et $\frac1x \to +\infty$, donc <span class="res">$\lim_0 f = -\infty$</span> (asymptote verticale $x = 0$). En $+\infty$, croissances comparées : <span class="res">$\lim_{+\infty} f = 0$</span> (asymptote horizontale $y = 0$).</li>
<li>$f'(x) = \dfrac{\frac1x \cdot x - \ln x}{x^2} = \dfrac{1 - \ln x}{x^2}$, du signe de $1 - \ln x$. <span class="res">$f$ croît sur $]0 ; e]$, décroît sur $[e ; +\infty[$, maximum $f(e) = \frac1e$</span>.</li>
<li>$f(1) = 0$ et $f'(1) = 1$ : <span class="res">$T : y = x - 1$</span>.</li>
<li>$0 < \frac14 < \frac1e \approx 0{,}37$ : par le théorème des valeurs intermédiaires sur chacun des deux intervalles de monotonie, <span class="res">deux solutions</span>, l'une dans $]1 ; e[$, l'autre dans $]e ; +\infty[$.</li>
<li>En dérivant $f'(x) = (1 - \ln x)\,x^{-2}$ : $f''(x) = -\frac1x \cdot x^{-2} - 2(1 - \ln x)\,x^{-3} = \dfrac{-1 - 2 + 2\ln x}{x^3} = \dfrac{2\ln x - 3}{x^3}$. Elle s'annule <b>en changeant de signe</b> pour $\ln x = \frac32$ : <span class="res">inflexion en $x = e^{3/2}$</span>.</li>
<li>$\frac{\ln x}{x} = u'u$ avec $u = \ln x$, une primitive est $\frac12 (\ln x)^2$. Comme $f \geq 0$ sur $[1 ; e]$ : <span class="res">$\mathcal A = \frac12(\ln e)^2 - \frac12(\ln 1)^2 = \frac12$ u.a.</span></li>
</ol>`,
  schemaC: "m5",
  reflexe: R`Reconnaître $u'u$, $\frac{u'}{u}$, $u'e^u$ fait gagner des minutes : $\frac{\ln x}{x} = u'u$, $\frac{2x}{x^2+1} = \frac{u'}{u}$, $2xe^{x^2} = u'e^u$.`
},
{
  id: "M6", chap: "Fonction exponentielle", titre: R`Étude de $(x+1)e^{-x}$ et calcul d'aire`, duree: 30, niv: 1,
  enonce: R`
<p>Soit $f$ définie sur $\mathbb R$ par $f(x) = (x + 1)\,e^{-x}$, de courbe $\mathcal C$.</p>
<ol class="q">
<li>Calculer les limites de $f$ en $-\infty$ et en $+\infty$.</li>
<li>Montrer que $f'(x) = -x\,e^{-x}$ et dresser le tableau de variations.</li>
<li>Résoudre $f(x) = 0$ et étudier le signe de $f$.</li>
<li>Calculer $f''(x)$ et montrer que $\mathcal C$ admet un point d'inflexion I dont on donnera les coordonnées.</li>
<li>Vérifier que $F(x) = -(x + 2)\,e^{-x}$ est une primitive de $f$, puis calculer $\displaystyle \mathcal A = \int_0^1 f(x)\,dx$. Donner une valeur approchée à $10^{-3}$.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>En $-\infty$ : $x + 1 \to -\infty$ et $e^{-x} \to +\infty$, donc <span class="res">$\lim_{-\infty} f = -\infty$</span>. En $+\infty$ : $f(x) = \frac{x}{e^x} + \frac{1}{e^x} \to 0$ (croissances comparées) : <span class="res">$\lim_{+\infty} f = 0$</span>.</li>
<li>$f'(x) = 1\cdot e^{-x} + (x+1)(-e^{-x}) = -x\,e^{-x}$, du signe de $-x$. <span class="res">$f$ croît sur $]-\infty ; 0]$, décroît sur $[0 ; +\infty[$, maximum $f(0) = 1$</span>.</li>
<li>$e^{-x} > 0$, donc <span class="res">$f(x) = 0 \iff x = -1$</span> ; $f < 0$ sur $]-\infty ; -1[$ et $f > 0$ sur $]-1 ; +\infty[$.</li>
<li>$f''(x) = -e^{-x} + x\,e^{-x} = (x - 1)\,e^{-x}$, qui s'annule en changeant de signe en 1. <span class="res">I$(1 ; \frac2e)$</span>.</li>
<li>$F'(x) = -e^{-x} + (x+2)\,e^{-x} = (x+1)\,e^{-x} = f(x)$. Donc $\mathcal A = F(1) - F(0) = -\frac3e + 2$ : <span class="res">$\mathcal A = 2 - \frac3e \approx 0{,}896$ u.a.</span></li>
</ol>`,
  schemaC: "m6",
  reflexe: R`Sans calcul : sur $[0 ; 1]$, $f$ varie de 1 à $\frac2e \approx 0{,}74$, donc l'aire est entre 0,74 et 1. Ce simple encadrement élimine souvent deux propositions sur quatre.`
},
{
  id: "M7", chap: "Primitives et intégrales", titre: "Quatre intégrales et une aire", duree: 25, niv: 1,
  enonce: R`
<p>Calculer les intégrales suivantes (valeurs exactes).</p>
<ol class="q">
<li>$\displaystyle I_1 = \int_0^{\pi/2} \cos x \,\sin^2 x \,dx$ $\qquad$ $\displaystyle I_2 = \int_0^1 \frac{x}{x^2 + 1}\,dx$</li>
<li>$\displaystyle I_3 = \int_1^e x \ln x \,dx$ (intégration par parties) $\qquad$ $\displaystyle I_4 = \int_0^{\ln 2} e^{2x}\,dx$</li>
<li>Calculer l'aire du domaine compris entre les courbes $y = x$ et $y = x^2$ pour $x \in [0 ; 1]$.</li>
<li>Calculer la valeur moyenne de la fonction sinus sur $[0 ; \pi]$.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>$\cos x \sin^2 x = u'u^2$ avec $u = \sin x$ : $I_1 = \left[\frac{\sin^3 x}{3}\right]_0^{\pi/2} =$ <span class="res">$\frac13$</span>. $\;\frac{x}{x^2+1} = \frac12 \cdot \frac{u'}{u}$ : $I_2 = \left[\frac12 \ln(x^2+1)\right]_0^1 =$ <span class="res">$\frac{\ln 2}{2}$</span>.</li>
<li>On pose $u = \ln x$, $v' = x$, donc $u' = \frac1x$, $v = \frac{x^2}{2}$ : $I_3 = \left[\frac{x^2}{2}\ln x\right]_1^e - \int_1^e \frac x2\,dx = \frac{e^2}{2} - \frac{e^2 - 1}{4} =$ <span class="res">$\frac{e^2 + 1}{4}$</span>. $\;I_4 = \left[\frac12 e^{2x}\right]_0^{\ln 2} = \frac12(4 - 1) =$ <span class="res">$\frac32$</span>.</li>
<li>Sur $[0 ; 1]$, $x \geq x^2$ : $\mathcal A = \int_0^1 (x - x^2)\,dx = \frac12 - \frac13 =$ <span class="res">$\frac16$ u.a.</span></li>
<li>$\mu = \frac{1}{\pi - 0}\int_0^\pi \sin x\,dx = \frac1\pi\big[-\cos x\big]_0^\pi = $ <span class="res">$\frac2\pi \approx 0{,}64$</span>.</li>
</ol>`,
  schemaC: "m7",
  reflexe: R`Aire entre deux courbes : intégrale de « celle du haut moins celle du bas ». Une aire n'est jamais négative : un résultat négatif signale une inversion.`
},
{
  id: "M8", chap: "Équations différentielles", titre: "Premier et second ordre", duree: 25, niv: 1,
  enonce: R`
<p>Résoudre les équations différentielles suivantes avec les conditions données.</p>
<ol class="q">
<li>$y' + 2y = 4$, avec $y(0) = 0$.</li>
<li>$y'' + 4y = 0$, avec $y(0) = 1$ et $y'(0) = 2$. Écrire la solution sous la forme $A\cos(2x - \varphi)$.</li>
<li>$y'' - 3y' + 2y = 0$, avec $y(0) = 0$ et $y'(0) = 1$.</li>
<li>$y'' - 2y' + y = 0$, avec $y(0) = 1$ et $y'(0) = 0$.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>Solutions de $y' = -2y + 4$ : $y = Ce^{-2x} + 2$ (2 est la solution constante). $y(0) = 0$ donne $C = -2$ : <span class="res">$y = 2 - 2e^{-2x}$</span>.</li>
<li>$y = a\cos 2x + b\sin 2x$ ; $y(0) = a = 1$ et $y'(0) = 2b = 2$, donc $b = 1$ : <span class="res">$y = \cos 2x + \sin 2x = \sqrt2 \cos\!\left(2x - \frac\pi4\right)$</span> (amplitude $\sqrt{a^2 + b^2}$, $\tan\varphi = \frac ba$).</li>
<li>Équation caractéristique $r^2 - 3r + 2 = 0$ : $r = 1$ ou $r = 2$, donc $y = Ae^x + Be^{2x}$. $A + B = 0$ et $A + 2B = 1$ donnent $B = 1$, $A = -1$ : <span class="res">$y = e^{2x} - e^x$</span>.</li>
<li>$r^2 - 2r + 1 = (r - 1)^2$ : racine double $r = 1$, donc $y = (Ax + B)e^x$. $y(0) = B = 1$ et $y'(0) = A + B = 0$, donc $A = -1$ : <span class="res">$y = (1 - x)\,e^x$</span>.</li>
</ol>`,
  reflexe: R`Vérifiez une proposition en la remplaçant dans l'équation ET dans les conditions initiales : c'est souvent plus rapide que de résoudre.`
},
{
  id: "M9", chap: "Dénombrement et probabilités", titre: "Tirage simultané et variable aléatoire", duree: 25, niv: 1,
  enonce: R`
<p>Une urne contient 5 boules rouges et 3 boules noires, indiscernables au toucher. On tire <b>simultanément</b> 3 boules.</p>
<ol class="q">
<li>Combien y a-t-il de tirages possibles ?</li>
<li>Calculer la probabilité des événements A : « obtenir exactement 2 boules rouges » et B : « obtenir au moins une boule noire ».</li>
<li>Soit X le nombre de boules rouges obtenues. Donner la loi de X, puis calculer son espérance et sa variance.</li>
<li>On tire maintenant 3 boules <b>successivement avec remise</b>. Quelle est la probabilité d'obtenir, dans cet ordre, rouge, rouge, noire ?</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>Un tirage simultané est une combinaison : <span class="res">$\binom83 = 56$ tirages</span>.</li>
<li>$P(A) = \dfrac{\binom52\binom31}{56} = \dfrac{30}{56} =$ <span class="res">$\frac{15}{28}$</span>. Contraire de B : « 3 rouges », $P(\overline B) = \frac{\binom53}{56} = \frac{10}{56}$, d'où <span class="res">$P(B) = \frac{23}{28}$</span>.</li>
<li>$P(X{=}0) = \frac{1}{56}$, $P(X{=}1) = \frac{15}{56}$, $P(X{=}2) = \frac{30}{56}$, $P(X{=}3) = \frac{10}{56}$ (total 1). $E(X) = \frac{15 + 60 + 30}{56} =$ <span class="res">$\frac{15}{8}$</span> ; $E(X^2) = \frac{15 + 120 + 90}{56} = \frac{225}{56}$, d'où <span class="res">$V(X) = \frac{225}{56} - \frac{225}{64} = \frac{225}{448}$</span>.</li>
<li>Avec remise, les tirages sont indépendants : $\frac58 \times \frac58 \times \frac38 =$ <span class="res">$\frac{75}{512}$</span>.</li>
</ol>`,
  reflexe: R`« Au moins un » : passez par le contraire. Simultané ⇒ combinaisons ; successif sans remise ⇒ arrangements ; avec remise ⇒ puissances.`
},
{
  id: "M10", chap: "Loi binomiale", titre: "Répondre au hasard à un QCM", duree: 20, niv: 2,
  enonce: R`
<p>Un candidat répond <b>au hasard</b> à 10 questions d'un QCM ; chaque question a 4 propositions dont une seule est juste. On note X le nombre de bonnes réponses.</p>
<ol class="q">
<li>Justifier que X suit une loi binomiale dont on précisera les paramètres.</li>
<li>Calculer $P(X = 0)$, $P(X \geq 1)$ et $P(X = 3)$ (à $10^{-3}$ près).</li>
<li>Calculer $E(X)$ et $V(X)$.</li>
<li>Le barème donne +1 par bonne réponse et retire 0,25 par mauvaise. Quelle note moyenne obtient-on en répondant au hasard ? Quel retrait par mauvaise réponse rendrait le hasard sans intérêt ?</li>
<li>Le candidat a éliminé deux propositions et hésite entre les deux restantes. Avec le même barème, a-t-il intérêt à répondre ?</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>10 épreuves identiques et indépendantes, chacune avec deux issues (juste avec la probabilité $\frac14$, fausse sinon) : <span class="res">$X \sim \mathcal B\left(10 ; \frac14\right)$</span>.</li>
<li>$P(X = 0) = \left(\frac34\right)^{10} \approx$ <span class="res">$0{,}056$</span> ; $P(X \geq 1) = 1 - P(X = 0) \approx$ <span class="res">$0{,}944$</span> ; $P(X = 3) = \binom{10}{3}\left(\frac14\right)^3\left(\frac34\right)^7 \approx$ <span class="res">$0{,}250$</span>.</li>
<li><span class="res">$E(X) = np = 2{,}5$ et $V(X) = np(1-p) = 1{,}875$</span>.</li>
<li>Note moyenne $= 2{,}5 \times 1 - 7{,}5 \times 0{,}25 =$ <span class="res">$0{,}625$ point</span>. Avec un retrait $m$ : gain moyen par question $\frac14 - \frac34 m = 0 \iff$ <span class="res">$m = \frac13$</span>.</li>
<li>Gain moyen $= \frac12 \times 1 - \frac12 \times 0{,}25 = 0{,}375 > 0$ : <span class="res">oui, il faut répondre</span>.</li>
</ol>`,
  reflexe: R`Stratégie pour le test : dès que vous avez éliminé au moins une proposition, répondre rapporte en moyenne, même avec un malus de 0,25. Ne laissez blanches que les questions où vous n'avez aucune piste.`
},
{
  id: "M11", chap: "Statistiques à deux variables", titre: "Ajustement linéaire", duree: 25, niv: 1,
  enonce: R`
<p>Le tableau donne, pour six semaines de révision, le nombre $x$ d'heures de travail quotidien et la note $y$ obtenue à une épreuve blanche.</p>
<table class="tab"><tr><th>$x_i$</th><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td></tr>
<tr><th>$y_i$</th><td>3</td><td>5</td><td>6</td><td>9</td><td>10</td><td>12</td></tr></table>
<ol class="q">
<li>Calculer les coordonnées du point moyen G.</li>
<li>Calculer $V(x)$, $V(y)$ et la covariance $\mathrm{cov}(x, y)$.</li>
<li>Calculer le coefficient de corrélation linéaire $r$ (à $10^{-3}$). Un ajustement affine est-il justifié ?</li>
<li>Déterminer la droite de régression de $y$ en $x$ par la méthode des moindres carrés.</li>
<li>Estimer la note obtenue avec 8 heures de travail quotidien.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>$\bar x = \frac{21}{6} = 3{,}5$ et $\bar y = \frac{45}{6} = 7{,}5$ : <span class="res">G(3,5 ; 7,5)</span>.</li>
<li>$V(x) = \frac{91}{6} - 3{,}5^2 = \frac{35}{12}$ ; $V(y) = \frac{395}{6} - 7{,}5^2 = \frac{115}{12}$ ; $\mathrm{cov} = \frac{189}{6} - 3{,}5 \times 7{,}5 = 5{,}25$. <span class="res">$V(x) \approx 2{,}917$ ; $V(y) \approx 9{,}583$ ; cov $= 5{,}25$</span>.</li>
<li>$r = \dfrac{\mathrm{cov}}{\sigma_x \sigma_y} = \dfrac{5{,}25}{\sqrt{35/12}\,\sqrt{115/12}} \approx$ <span class="res">$0{,}993$</span>. $|r|$ est très proche de 1 : l'ajustement affine est justifié.</li>
<li>$a = \dfrac{\mathrm{cov}}{V(x)} = \dfrac{5{,}25}{35/12} = 1{,}8$ et $b = \bar y - a\bar x = 7{,}5 - 6{,}3 = 1{,}2$ : <span class="res">$y = 1{,}8x + 1{,}2$</span>. La droite passe par G.</li>
<li>$y = 1{,}8 \times 8 + 1{,}2 =$ <span class="res">$15{,}6$</span>. C'est une extrapolation, à prendre avec prudence.</li>
</ol>`,
  schemaC: "m11",
  reflexe: R`La droite de régression passe toujours par G : dans un QCM, testez d'abord G dans chaque équation proposée.`
}];

const PHYSIQUE = [
{
  id: "P1", chap: "Cinématique", titre: "Mouvement rectiligne", duree: 15, niv: 1,
  enonce: R`
<p>Un mobile se déplace sur un axe Ox. Son abscisse est $x(t) = 2t^2 - 4t + 1$ ($x$ en m, $t$ en s, $t \geq 0$).</p>
<ol class="q">
<li>Déterminer la vitesse $v(t)$ et l'accélération $a$. Quelle est la nature du mouvement ?</li>
<li>À quel instant le mobile rebrousse-t-il chemin ? Quelle est alors sa position ?</li>
<li>Préciser les phases accélérée et retardée.</li>
<li>Calculer la distance parcourue entre $t = 0$ et $t = 3$ s.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li><span class="res">$v(t) = 4t - 4$ (m/s) et $a = 4$ m/s²</span> constante : mouvement rectiligne uniformément varié.</li>
<li>$v = 0$ pour <span class="res">$t = 1$ s, en $x(1) = -1$ m</span>.</li>
<li>Le mouvement est accéléré quand $a\,v > 0$ : <span class="res">retardé sur $[0 ; 1[$ ($v < 0$), accéléré pour $t > 1$ s</span>.</li>
<li>Il faut découper au rebroussement : $|x(1) - x(0)| + |x(3) - x(1)| = 2 + 8 =$ <span class="res">10 m</span> (le déplacement $x(3) - x(0) = 6$ m n'est pas la distance parcourue).</li>
</ol>`,
  reflexe: R`Accéléré ou retardé ? Regardez le signe du produit $a \cdot v$, pas celui de $a$ seul.`
},
{
  id: "P2", chap: "Dynamique — Newton et énergie", titre: "Plan incliné avec frottement", duree: 25, niv: 1,
  enonce: R`
<p>Un solide de masse $m = 0{,}5$ kg est lâché sans vitesse en A sur un plan incliné d'un angle $\alpha = 30°$ sur l'horizontale, avec $AB = 2$ m. Il poursuit sur une piste horizontale BC. Les frottements équivalent à une force $\vec f$ constante, opposée au mouvement, d'intensité $f = 0{,}5$ N sur tout le trajet.</p>
<ol class="q">
<li>Représenter les forces appliquées au solide sur AB.</li>
<li>En appliquant la deuxième loi de Newton, calculer l'accélération sur AB, sans puis avec frottement.</li>
<li>Calculer la vitesse en B et la durée du trajet AB (avec frottement).</li>
<li>Retrouver $v_B$ par le théorème de l'énergie cinétique.</li>
<li>Calculer la distance parcourue sur BC avant l'arrêt.</li>
</ol>`,
  schemaE: "p2",
  corrige: R`
<ol class="q">
<li>Le poids $\vec P$ (vertical, vers le bas), la réaction normale $\vec R_n$ (perpendiculaire au plan) et la force de frottement $\vec f$ (parallèle au plan, vers le haut, opposée au mouvement).</li>
<li>Projection sur l'axe de la pente orienté vers B : $ma = mg\sin\alpha - f$. Sans frottement : <span class="res">$a_0 = g\sin\alpha = 5$ m/s²</span> ; avec : <span class="res">$a = 5 - \frac{0{,}5}{0{,}5} = 4$ m/s²</span>. Sur la normale : $R_n = mg\cos\alpha \approx 4{,}33$ N.</li>
<li>$v_B^2 = 2a \cdot AB = 16$, donc <span class="res">$v_B = 4$ m/s</span> ; $t = \frac{v_B}{a} =$ <span class="res">1 s</span>.</li>
<li>$\frac12 m v_B^2 - 0 = W(\vec P) + W(\vec f) = mg\,AB\sin\alpha - f \cdot AB = 5 - 1 = 4$ J, d'où $v_B = \sqrt{\frac{2 \times 4}{0{,}5}} = 4$ m/s : même résultat. $\vec R_n$ ne travaille pas (perpendiculaire au déplacement).</li>
<li>Sur BC, seule $\vec f$ travaille : $0 - \frac12 m v_B^2 = -f \cdot d$, donc $d = \frac{4}{0{,}5} =$ <span class="res">8 m</span>.</li>
</ol>`,
  reflexe: R`Ordre de grandeur : sans frottement, l'accélération sur une pente vaut $g\sin\alpha$ quelle que soit la masse. Une proposition qui dépend de $m$ dans ce cas est fausse.`
},
{
  id: "P3", chap: "Champ de pesanteur", titre: "Tir parabolique", duree: 25, niv: 1,
  enonce: R`
<p>Un ballon est lancé depuis le sol au point O avec une vitesse $v_0 = 20$ m/s faisant un angle $\alpha = 30°$ avec l'horizontale. On néglige l'air ; $g = 10$ m/s².</p>
<ol class="q">
<li>Établir les équations horaires $x(t)$, $z(t)$, puis l'équation de la trajectoire.</li>
<li>Calculer la date d'arrivée au sommet S et la hauteur maximale $h$ (flèche).</li>
<li>Calculer la portée $x_P$ et la durée totale du vol.</li>
<li>Un mur de 3 m de haut est situé à 20 m de O. Le ballon passe-t-il au-dessus ?</li>
<li>Quelle est la vitesse au sommet ? Pour quel angle la portée est-elle maximale ?</li>
</ol>`,
  schemaE: "p3",
  corrige: R`
<ol class="q">
<li>$\vec a = \vec g$ : <span class="res">$x = v_0\cos\alpha \; t$, $\; z = -\frac12 g t^2 + v_0 \sin\alpha \; t$</span>. En éliminant $t$ : <span class="res">$z = -\dfrac{g}{2v_0^2\cos^2\alpha}\,x^2 + x\tan\alpha$</span>, soit $z = -\frac{x^2}{60} + \frac{x}{\sqrt3}$.</li>
<li>Au sommet $v_z = 0$ : $t_S = \frac{v_0 \sin\alpha}{g} = 1$ s ; <span class="res">$h = \dfrac{v_0^2 \sin^2\alpha}{2g} = 5$ m</span>.</li>
<li><span class="res">$x_P = \dfrac{v_0^2 \sin 2\alpha}{g} = 20\sqrt3 \approx 34{,}6$ m</span>, atteinte au bout de <span class="res">2 s</span> ($2t_S$, par symétrie).</li>
<li>$z(20) = \frac{20}{\sqrt3} - \frac{400}{60} \approx 11{,}55 - 6{,}67 = 4{,}88$ m $> 3$ m : <span class="res">le ballon passe au-dessus du mur</span>.</li>
<li>Au sommet, il ne reste que la composante horizontale : <span class="res">$v_S = v_0\cos\alpha \approx 17{,}3$ m/s</span>. $\sin 2\alpha$ est maximal pour <span class="res">$\alpha = 45°$</span> (portée $\frac{v_0^2}{g} = 40$ m).</li>
</ol>`,
  reflexe: R`Retenez $h = \frac{v_0^2\sin^2\alpha}{2g}$ et $x_P = \frac{v_0^2\sin 2\alpha}{g}$ : avec $v_0$, $\alpha$ et $g$ donnés, le QCM se résout en une ligne.`
},
{
  id: "P4", chap: "Champ électrique uniforme", titre: "Déviation d'un faisceau d'électrons", duree: 30, niv: 2,
  enonce: R`
<p>Des électrons pénètrent en O, avec la vitesse horizontale $v_0 = 2{,}0 \times 10^7$ m/s, entre deux plaques horizontales P₁ et P₂ de longueur $\ell = 10$ cm, distantes de $d = 5$ cm, entre lesquelles règne une tension $U = 200$ V. Un écran est placé à $D = 40$ cm du milieu des plaques. Le poids est négligeable.</p>
<ol class="q">
<li>Quel doit être le sens de $\vec E$ pour que les électrons soient déviés vers P₁ ? Laquelle des plaques est positive ?</li>
<li>Calculer $E$ puis l'accélération $a$ des électrons.</li>
<li>Établir l'équation de la trajectoire entre les plaques. Calculer l'ordonnée de sortie ; les électrons touchent-ils une plaque ?</li>
<li>Montrer que la déflexion sur l'écran vaut $Y = \dfrac{eU\ell D}{m d v_0^2}$ et la calculer.</li>
<li>Quelle tension maximale peut-on appliquer pour que les électrons sortent des plaques ?</li>
</ol>`,
  schemaE: "p4",
  corrige: R`
<ol class="q">
<li>$\vec F = -e\vec E$ : pour une force vers P₁, <span class="res">$\vec E$ est dirigé de P₁ vers P₂, donc P₁ est la plaque positive</span> ($\vec E$ va du + vers le −).</li>
<li><span class="res">$E = \frac Ud = 4000$ V/m</span> ; $a = \frac{eE}{m} = \frac{1{,}6 \times 10^{-19} \times 4000}{9{,}1 \times 10^{-31}} \approx$ <span class="res">$7{,}03 \times 10^{14}$ m/s²</span>.</li>
<li>$x = v_0 t$ et $y = \frac12 a t^2$, d'où <span class="res">$y = \dfrac{eE}{2mv_0^2}\,x^2$</span> (parabole). En $x = \ell$ : $t = 5 \times 10^{-9}$ s et $y_s = 8{,}8 \times 10^{-3}$ m $=$ <span class="res">8,8 mm $< \frac d2 = 25$ mm</span> : les électrons sortent.</li>
<li>Après les plaques, le mouvement est rectiligne uniforme, et la tangente de sortie passe par le milieu des plaques : $\tan\theta = \frac{v_y}{v_0} = \frac{a\ell}{v_0^2} = \frac{eU\ell}{mdv_0^2}$ et $Y = D\tan\theta$. <span class="res">$Y \approx 0{,}176 \times 0{,}40 \approx 7{,}0$ cm</span>.</li>
<li>$y_s$ est proportionnel à $U$ ; il faut $y_s < \frac d2$ : $U_{max} = 200 \times \frac{25}{8{,}79} \approx$ <span class="res">569 V</span>.</li>
</ol>`,
  reflexe: R`Électron : la force est OPPOSÉE au champ. La déflexion est proportionnelle à $U$ et inversement proportionnelle à $v_0^2$ : doubler $v_0$ divise $Y$ par 4.`
},
{
  id: "P5", chap: "Gravitation", titre: "Satellite géostationnaire et masse de la Terre", duree: 25, niv: 1,
  enonce: R`
<p>Données : $g_0 = 9{,}8$ m/s² au sol, rayon terrestre $R = 6\,400$ km, $G = 6{,}67 \times 10^{-11}$ SI, jour sidéral $T = 86\,164$ s.</p>
<ol class="q">
<li>Montrer que le mouvement circulaire d'un satellite à l'altitude $h$ est uniforme et que $v = R\sqrt{\dfrac{g_0}{R + h}}$.</li>
<li>Exprimer sa période $T$ et en déduire la troisième loi de Kepler.</li>
<li>Un satellite géostationnaire tourne dans le plan équatorial, dans le même sens que la Terre, avec la période $T$. Calculer son rayon d'orbite, son altitude et sa vitesse.</li>
<li>Calculer la vitesse et la période (en minutes) d'un satellite à 400 km d'altitude.</li>
<li>Calculer la masse de la Terre.</li>
</ol>`,
  schemaE: "p5",
  corrige: R`
<ol class="q">
<li>La seule force est $\vec F$, centripète ; sur la tangente $\frac{dv}{dt} = 0$ : le mouvement est uniforme. Sur la normale : $\frac{v^2}{r} = g(r) = g_0\frac{R^2}{r^2}$, d'où <span class="res">$v = R\sqrt{\dfrac{g_0}{r}}$ avec $r = R + h$</span>.</li>
<li>$T = \frac{2\pi r}{v} = 2\pi\sqrt{\dfrac{r^3}{g_0R^2}}$, d'où <span class="res">$\dfrac{T^2}{r^3} = \dfrac{4\pi^2}{g_0R^2} = \dfrac{4\pi^2}{GM}$</span>, la même constante pour tous les satellites de la Terre.</li>
<li>$r = \left(\dfrac{g_0R^2T^2}{4\pi^2}\right)^{1/3} \approx$ <span class="res">$4{,}23 \times 10^7$ m</span>, soit une altitude <span class="res">$h \approx 35\,900$ km</span> et une vitesse <span class="res">$v = \frac{2\pi r}{T} \approx 3{,}08$ km/s</span>.</li>
<li>$r = 6{,}8 \times 10^6$ m : <span class="res">$v \approx 7{,}68$ km/s et $T \approx 92{,}7$ min</span>.</li>
<li>$g_0 = \frac{GM}{R^2}$ donc <span class="res">$M = \dfrac{g_0R^2}{G} \approx 6{,}0 \times 10^{24}$ kg</span>.</li>
</ol>`,
  reflexe: R`Plus un satellite est haut, plus il est LENT et plus sa période est longue. Une proposition « plus haut donc plus rapide » est fausse.`
},
{
  id: "P6", chap: "Champ magnétique", titre: "Spectrographe de masse", duree: 25, niv: 2,
  enonce: R`
<p>Des ions ³⁹K⁺ et ⁴¹K⁺, de vitesse initiale négligeable, sont accélérés entre P₁ et P₂ par une tension $U = 1\,000$ V, puis entrent en O dans un champ magnétique uniforme $B = 0{,}10$ T perpendiculaire à leur vitesse. On prend la masse d'un nucléon $m_u = 1{,}67 \times 10^{-27}$ kg et $e = 1{,}6 \times 10^{-19}$ C.</p>
<ol class="q">
<li>Exprimer la vitesse $v$ en O d'un ion de masse $m$ ; la calculer pour ³⁹K⁺.</li>
<li>Montrer que dans le champ le mouvement est circulaire uniforme, de rayon $R = \dfrac{1}{B}\sqrt{\dfrac{2mU}{e}}$.</li>
<li>Calculer les rayons $R_1$ (³⁹K⁺) et $R_2$ (⁴¹K⁺), puis la distance $I_1I_2$ entre les points d'impact.</li>
<li>Comment déterminer la charge massique $\frac em$ d'un ion à partir de la mesure de $R$ ?</li>
</ol>`,
  schemaE: "p6",
  corrige: R`
<ol class="q">
<li>Théorème de l'énergie cinétique : $\frac12 mv^2 = eU$, donc <span class="res">$v = \sqrt{\dfrac{2eU}{m}}$ ; pour ³⁹K⁺, $v \approx 7{,}0 \times 10^4$ m/s</span>.</li>
<li>La force de Lorentz $\vec F = e\vec v \wedge \vec B$ est perpendiculaire à $\vec v$ : elle ne travaille pas, donc $v$ est constante. Elle est dans le plan perpendiculaire à $\vec B$ et a une norme constante $evB$ : $evB = \frac{mv^2}{R}$, d'où <span class="res">$R = \dfrac{mv}{eB} = \dfrac1B\sqrt{\dfrac{2mU}{e}}$</span>.</li>
<li><span class="res">$R_1 \approx 28{,}5$ cm ; $R_2 \approx 29{,}3$ cm</span> ; les ions font un demi-cercle, donc <span class="res">$I_1I_2 = 2(R_2 - R_1) \approx 1{,}4$ cm</span>.</li>
<li>De $R^2 = \frac{2mU}{eB^2}$ on tire <span class="res">$\dfrac em = \dfrac{2U}{B^2R^2}$</span> : il suffit de mesurer le diamètre de la trajectoire.</li>
</ol>`,
  reflexe: R`$R \propto \sqrt m$ à $U$ fixé : un ion 4 fois plus lourd a un rayon seulement 2 fois plus grand.`
},
{
  id: "P7", chap: "Loi de Laplace et induction", titre: "Rails de Laplace", duree: 25, niv: 1,
  enonce: R`
<p>Une tige MN conductrice glisse sans frottement sur deux rails horizontaux distants de $\ell = 20$ cm, fermés par une résistance $R = 2\ \Omega$ (on néglige les autres résistances). L'ensemble est plongé dans un champ $B = 0{,}5$ T vertical.</p>
<ol class="q">
<li>On fait d'abord passer dans la tige un courant de 5 A imposé par un générateur. Calculer la force de Laplace.</li>
<li>Le générateur est retiré. Un opérateur déplace la tige à vitesse constante $v = 4$ m/s. Exprimer le flux à travers le circuit en fonction de la position $x$ de la tige, puis la f.é.m. induite.</li>
<li>Calculer l'intensité du courant induit et indiquer son sens à l'aide de la loi de Lenz.</li>
<li>Calculer la force de Laplace qui s'exerce alors sur la tige. Quelle force l'opérateur doit-il fournir ? Comparer la puissance mécanique fournie à la puissance électrique.</li>
</ol>`,
  schemaE: "p7",
  corrige: R`
<ol class="q">
<li>$\vec F = I\vec\ell \wedge \vec B$, avec $\vec\ell \perp \vec B$ : <span class="res">$F = IB\ell = 5 \times 0{,}5 \times 0{,}2 = 0{,}5$ N</span>, horizontale et perpendiculaire à la tige.</li>
<li>$\Phi = B\ell x$ (pour $x = 30$ cm, $\Phi = 0{,}03$ Wb). <span class="res">$|e| = \left|\frac{d\Phi}{dt}\right| = B\ell v = 0{,}4$ V</span>.</li>
<li><span class="res">$i = \frac eR = 0{,}2$ A</span>. D'après la loi de Lenz, le courant induit s'oppose à la cause qui lui donne naissance, ici l'augmentation du flux.</li>
<li>$F = iB\ell = 0{,}2 \times 0{,}5 \times 0{,}2 =$ <span class="res">$0{,}02$ N, opposée à $\vec v$</span> (freinage). L'opérateur fournit une force égale et opposée. Puissance mécanique $Fv = 0{,}08$ W $=$ puissance électrique $ei = \frac{e^2}{R} = 0{,}08$ W : <span class="res">conservation de l'énergie</span>.</li>
</ol>`,
  reflexe: R`Loi de Lenz : la force de Laplace due au courant induit FREINE toujours le mouvement. Toute réponse où elle l'accélère est fausse.`
},
{
  id: "P8", chap: "Dipôles RC et RL", titre: "Charge d'un condensateur, établissement du courant", duree: 25, niv: 1,
  enonce: R`
<p><b>A.</b> Un condensateur de capacité $C = 100\ \mu$F, initialement déchargé, est chargé sous $E = 12$ V à travers $R = 1$ kΩ en fermant K à $t = 0$.</p>
<ol class="q">
<li>Établir l'équation différentielle vérifiée par $u_C$ et vérifier que $u_C = E\,(1 - e^{-t/\tau})$ en est solution. Exprimer et calculer $\tau$.</li>
<li>Calculer $u_C(\tau)$, l'intensité à $t = 0$ et l'énergie stockée en fin de charge.</li>
<li>Au bout de combien de temps le condensateur est-il chargé à 99 % ?</li>
</ol>
<p><b>B.</b> Une bobine d'inductance $L = 0{,}5$ H et de résistance négligeable est placée en série avec une résistance de $10\ \Omega$ sous la tension $E = 12$ V.</p>
<ol class="q" start="4">
<li>Donner la constante de temps, l'intensité en régime permanent et l'énergie emmagasinée par la bobine.</li>
</ol>`,
  schemaE: "p8",
  corrige: R`
<ol class="q">
<li>Loi des mailles : $E = Ri + u_C$ avec $i = C\frac{du_C}{dt}$, soit <span class="res">$RC\,\dfrac{du_C}{dt} + u_C = E$</span>. En reportant : $RC \cdot \frac{E}{\tau}e^{-t/\tau} + E - Ee^{-t/\tau} = E$ à condition que <span class="res">$\tau = RC = 0{,}1$ s</span>.</li>
<li><span class="res">$u_C(\tau) = E(1 - e^{-1}) \approx 0{,}63E \approx 7{,}6$ V</span> ; $i(0) = \frac ER =$ <span class="res">12 mA</span> ; <span class="res">$W = \frac12 CE^2 = 7{,}2$ mJ</span>.</li>
<li>$1 - e^{-t/\tau} = 0{,}99 \iff t = \tau\ln 100 \approx 4{,}6\tau \approx$ <span class="res">0,46 s</span> (règle pratique : charge complète au bout de $5\tau$).</li>
<li><span class="res">$\tau = \frac LR = 0{,}05$ s ; $I = \frac ER = 1{,}2$ A ; $W = \frac12 LI^2 = 0{,}36$ J</span>. La bobine retarde l'établissement du courant ; le condensateur, celui de la tension.</li>
</ol>`,
  schemaC: "p8c",
  reflexe: R`$\tau$ se lit sur la courbe : à $t = \tau$, 63 % de la valeur finale ; la tangente à l'origine coupe l'asymptote en $t = \tau$. Unités : $\Omega \times \text F = \text s$ et $\text H / \Omega = \text s$.`
},
{
  id: "P9", chap: "Oscillations mécaniques", titre: "Pendule élastique et pendule simple", duree: 20, niv: 1,
  enonce: R`
<p>Un solide de masse $m = 200$ g, fixé à un ressort horizontal de raideur $k = 20$ N/m, glisse sans frottement. On l'écarte de 2 cm de sa position d'équilibre et on le lâche sans vitesse à $t = 0$.</p>
<ol class="q">
<li>Établir l'équation différentielle du mouvement ; calculer $\omega_0$ et la période propre $T_0$.</li>
<li>Écrire l'équation horaire $x(t)$.</li>
<li>Calculer l'énergie mécanique, la vitesse maximale et l'accélération maximale.</li>
<li>Calculer la vitesse lorsque $x = 1$ cm.</li>
<li>Que devient $T_0$ si la masse est quadruplée ? Calculer la période d'un pendule simple de longueur 1 m ($g = 9{,}8$ m/s²).</li>
</ol>`,
  schemaE: "p9",
  corrige: R`
<ol class="q">
<li>Sur l'axe : $m\ddot x = -kx$, soit <span class="res">$\ddot x + \frac km x = 0$</span>. <span class="res">$\omega_0 = \sqrt{k/m} = 10$ rad/s et $T_0 = \frac{2\pi}{\omega_0} \approx 0{,}63$ s</span>.</li>
<li>$x = X_m\cos(\omega_0 t + \varphi)$ avec $x(0) = X_m = 0{,}02$ m et $v(0) = 0$, donc $\varphi = 0$ : <span class="res">$x(t) = 0{,}02\cos(10t)$</span> (en m).</li>
<li><span class="res">$E_m = \frac12 kX_m^2 = 4 \times 10^{-3}$ J</span> ; <span class="res">$v_{max} = \omega_0 X_m = 0{,}2$ m/s</span> ; <span class="res">$a_{max} = \omega_0^2 X_m = 2$ m/s²</span>.</li>
<li>Conservation de l'énergie : $\frac12 mv^2 + \frac12 kx^2 = \frac12 kX_m^2$, donc $v = \omega_0\sqrt{X_m^2 - x^2} = 10\sqrt{3 \times 10^{-4}} \approx$ <span class="res">0,17 m/s</span>.</li>
<li>$T_0 \propto \sqrt m$ : <span class="res">la période double</span>. Pendule simple : $T = 2\pi\sqrt{\ell/g} \approx$ <span class="res">2,0 s</span> (indépendante de la masse).</li>
</ol>`,
  reflexe: R`L'amplitude n'influe pas sur la période d'un oscillateur harmonique. Une proposition où $T_0$ dépend de $X_m$ est fausse.`
},
{
  id: "P10", chap: "Oscillations électriques", titre: "Circuit LC, puis résonance du RLC", duree: 30, niv: 2,
  enonce: R`
<p><b>A.</b> Un condensateur $C = 10\ \mu$F chargé sous $U_0 = 10$ V est relié à t = 0 à une bobine $L = 0{,}1$ H de résistance négligeable.</p>
<ol class="q">
<li>Établir l'équation différentielle vérifiée par la charge $q$ ; calculer $\omega_0$, $f_0$ et $T_0$.</li>
<li>Calculer $Q_m$, l'intensité maximale $I_m$ et l'énergie totale du circuit.</li>
</ol>
<p><b>B.</b> On place en série $R = 20\ \Omega$, la même bobine et le même condensateur, alimentés par un GBF de tension efficace $U = 10$ V et de pulsation $\omega$ réglable.</p>
<ol class="q" start="3">
<li>Pour quelle pulsation l'intensité est-elle maximale ? Calculer $I_0$ à la résonance, le facteur de qualité $Q$ et la bande passante $\Delta\omega$.</li>
<li>Pour $\omega = 800$ rad/s, calculer l'impédance $Z$, l'intensité efficace $I$ et la phase $\varphi$ de la tension par rapport au courant. Le circuit est-il inductif ou capacitif ?</li>
<li>Calculer la tension efficace aux bornes du condensateur à la résonance. Commenter.</li>
</ol>`,
  schemaE: "p10",
  corrige: R`
<ol class="q">
<li>$L\ddot q + \frac qC = 0$, soit <span class="res">$\ddot q + \frac{1}{LC}q = 0$</span>. <span class="res">$\omega_0 = \frac{1}{\sqrt{LC}} = 1000$ rad/s ; $f_0 \approx 159$ Hz ; $T_0 \approx 6{,}3$ ms</span>.</li>
<li><span class="res">$Q_m = CU_0 = 10^{-4}$ C ; $I_m = \omega_0 Q_m = 0{,}1$ A ; $W = \frac12 CU_0^2 = 5 \times 10^{-4}$ J</span>, qui vaut aussi $\frac12 LI_m^2$ : l'énergie passe du condensateur à la bobine sans perte.</li>
<li>À la résonance, $\omega = \omega_0 = 1000$ rad/s et $Z = R$ : <span class="res">$I_0 = \frac UR = 0{,}5$ A</span> ; <span class="res">$Q = \frac{L\omega_0}{R} = 5$</span> ; <span class="res">$\Delta\omega = \frac RL = 200$ rad/s</span>.</li>
<li>$L\omega = 80\ \Omega$ et $\frac{1}{C\omega} = 125\ \Omega$ : $Z = \sqrt{20^2 + 45^2} \approx$ <span class="res">49,2 Ω</span> ; <span class="res">$I \approx 0{,}20$ A</span> ; $\tan\varphi = \frac{-45}{20}$, <span class="res">$\varphi \approx -66°$ : circuit capacitif</span> (on est sous la résonance).</li>
<li>$U_C = \frac{I_0}{C\omega_0} = QU =$ <span class="res">50 V</span>, cinq fois la tension du générateur : c'est la <b>surtension</b> à la résonance, dangereuse pour le condensateur si $Q$ est grand.</li>
</ol>`,
  schemaC: "p10c",
  reflexe: R`Sous la résonance, le circuit est capacitif ($\varphi < 0$) ; au-dessus, inductif ($\varphi > 0$). À la résonance : $Z = R$, $\varphi = 0$, $I$ maximale.`
},
{
  id: "P11", chap: "Interférences lumineuses", titre: "Fentes de Young", duree: 20, niv: 1,
  enonce: R`
<p>Deux fentes fines S₁ et S₂, distantes de $a = 0{,}5$ mm, sont éclairées par une source monochromatique S de longueur d'onde $\lambda = 600$ nm. L'écran est à $D = 2$ m des fentes.</p>
<ol class="q">
<li>Pourquoi utilise-t-on une source unique S pour éclairer les deux fentes ?</li>
<li>La différence de marche en un point M d'abscisse $x$ est $\delta = \frac{ax}{D}$. Établir l'expression de l'interfrange $i$ et le calculer.</li>
<li>Donner la position de la frange brillante d'ordre 3. Quelle est la nature de la frange en $x = 6$ mm ?</li>
<li>Combien de franges brillantes observe-t-on sur une zone de 2 cm centrée en O ?</li>
<li>Avec une autre radiation, la 5ᵉ frange brillante coïncide avec la 4ᵉ de la première. Calculer sa longueur d'onde.</li>
</ol>`,
  schemaE: "p11",
  corrige: R`
<ol class="q">
<li>Les deux sources secondaires doivent être <b>cohérentes</b> (même fréquence et déphasage constant) : seul un dédoublement d'une même source le garantit.</li>
<li>Frange brillante si $\delta = k\lambda$, donc $x_k = k\frac{\lambda D}{a}$. <span class="res">$i = \dfrac{\lambda D}{a} = \dfrac{600 \times 10^{-9} \times 2}{0{,}5 \times 10^{-3}} = 2{,}4$ mm</span>.</li>
<li>$x_3 = 3i =$ <span class="res">7,2 mm</span>. En $x = 6$ mm : $\delta = \frac{0{,}5 \times 10^{-3} \times 6 \times 10^{-3}}{2} = 1{,}5\ \mu$m $= 2{,}5\lambda$, un nombre demi-entier de $\lambda$ : <span class="res">frange sombre</span>.</li>
<li>Il faut $|k|\,i \leq 1$ cm, soit $|k| \leq 4{,}17$ : $k$ de −4 à 4, <span class="res">9 franges brillantes</span>.</li>
<li>$5i' = 4i$, donc $\lambda' = \frac45\lambda =$ <span class="res">480 nm</span> (bleu).</li>
</ol>`,
  reflexe: R`$i = \frac{\lambda D}{a}$ : $i$ augmente avec $\lambda$ et $D$, diminue quand les fentes s'écartent. Vérifiez les unités (nm, mm, m) : c'est le piège n° 1 de ce chapitre.`
},
{
  id: "P12", chap: "Effet photoélectrique", titre: "Cellule au césium", duree: 20, niv: 1,
  enonce: R`
<p>Le travail d'extraction du césium est $W_0 = 1{,}9$ eV. Données : $h = 6{,}63 \times 10^{-34}$ J·s, $c = 3 \times 10^8$ m/s, $1$ eV $= 1{,}6 \times 10^{-19}$ J, $m_e = 9{,}1 \times 10^{-31}$ kg.</p>
<ol class="q">
<li>Calculer la longueur d'onde seuil $\lambda_0$ du césium.</li>
<li>La cathode est éclairée par une lumière de longueur d'onde 450 nm. Calculer l'énergie d'un photon (en eV) et l'énergie cinétique maximale des électrons émis.</li>
<li>En déduire leur vitesse maximale et le potentiel d'arrêt $U_0$.</li>
<li>Une lumière rouge (700 nm) très intense provoque-t-elle l'effet photoélectrique ? Quel modèle de la lumière ce résultat impose-t-il ?</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>$\lambda_0 = \dfrac{hc}{W_0} = \dfrac{6{,}63 \times 10^{-34} \times 3 \times 10^8}{1{,}9 \times 1{,}6 \times 10^{-19}} \approx$ <span class="res">654 nm</span>.</li>
<li>$E = \frac{hc}{\lambda} \approx$ <span class="res">2,76 eV</span> $> W_0$ ; <span class="res">$E_{c,max} = E - W_0 \approx 0{,}86$ eV</span>.</li>
<li>$v_{max} = \sqrt{\dfrac{2E_{c,max}}{m_e}} \approx$ <span class="res">$5{,}5 \times 10^5$ m/s</span> ; $eU_0 = E_{c,max}$, donc <span class="res">$U_0 \approx 0{,}86$ V</span>.</li>
<li>$\frac{hc}{700 \text{ nm}} \approx 1{,}78$ eV $< W_0$ : <span class="res">aucun électron n'est émis, quelle que soit l'intensité</span>. L'énergie arrive par paquets (photons) : c'est l'aspect <b>corpusculaire</b> de la lumière.</li>
</ol>`,
  reflexe: R`Raccourci : $E\text{(eV)} \approx \dfrac{1240}{\lambda\text{(nm)}}$. Exemple : 450 nm donne $1240/450 \approx 2{,}76$ eV.`
},
{
  id: "P13", chap: "Niveaux d'énergie de l'atome", titre: "Atome d'hydrogène", duree: 20, niv: 1,
  enonce: R`
<p>Les niveaux d'énergie de l'atome d'hydrogène sont $E_n = -\dfrac{13{,}6}{n^2}$ (en eV), $n \geq 1$. On utilise les données de l'exercice P12.</p>
<ol class="q">
<li>Que représentent $n = 1$ et $E = 0$ ? Calculer l'énergie d'ionisation depuis l'état fondamental, puis depuis le niveau $n = 2$.</li>
<li>Calculer l'énergie et la longueur d'onde du photon émis lors de la transition $n = 3 \to n = 2$ (raie H$_\alpha$). Dans quel domaine se situe-t-elle ?</li>
<li>Un atome dans l'état fondamental reçoit un photon de 10,2 eV, puis un photon de 11 eV. Lesquels sont absorbés ?</li>
<li>Un <b>électron</b> de 11 eV heurte un atome dans l'état fondamental. Que peut-il se passer ?</li>
</ol>`,
  schemaE: "p13",
  corrige: R`
<ol class="q">
<li>$n = 1$ est l'état fondamental ; $E = 0$ correspond à l'atome ionisé (électron libre au repos). <span class="res">Énergie d'ionisation : 13,6 eV depuis $n = 1$ ; 3,4 eV depuis $n = 2$</span>.</li>
<li>$\Delta E = 13{,}6\left(\frac14 - \frac19\right) \approx$ <span class="res">1,89 eV</span> ; $\lambda = \frac{hc}{\Delta E} \approx$ <span class="res">658 nm, dans le visible (rouge)</span>.</li>
<li>$E_2 - E_1 = 10{,}2$ eV : <span class="res">le photon de 10,2 eV est absorbé</span>. 11 eV ne correspond à aucune différence $E_n - E_1$ et reste inférieur à 13,6 eV : <span class="res">le photon de 11 eV n'est pas absorbé</span> (un photon est absorbé en totalité ou pas du tout).</li>
<li>Un électron peut céder <b>une partie</b> de son énergie : l'atome passe au niveau 2 (10,2 eV) et l'électron repart avec <span class="res">0,8 eV</span>.</li>
</ol>`,
  reflexe: R`Photon : tout ou rien, il faut l'énergie EXACTE d'une transition (ou au moins l'énergie d'ionisation). Électron incident : il peut céder une partie de son énergie.`
},
{
  id: "P14", chap: "Réactions nucléaires", titre: "Datation au carbone 14 et fusion", duree: 20, niv: 1,
  enonce: R`
<p>Le carbone 14 est radioactif $\beta^-$, de demi-vie $T = 5\,730$ ans. Données : $m(^2_1\text{H}) = 2{,}01355$ u ; $m(^3_1\text{H}) = 3{,}01550$ u ; $m(^4_2\text{He}) = 4{,}00150$ u ; $m_n = 1{,}00866$ u ; $1$ u $= 931{,}5$ MeV/$c^2$.</p>
<ol class="q">
<li>Écrire l'équation de la désintégration du carbone 14 ($^{14}_{6}$C) en énonçant les lois de conservation utilisées.</li>
<li>Calculer la constante radioactive $\lambda$ (en s⁻¹).</li>
<li>Un bois ancien a une activité égale à 25 % de celle d'un bois récent. Quel est son âge ? Même question pour 60 %.</li>
<li>Écrire la réaction de fusion d'un noyau de deutérium et d'un noyau de tritium donnant un noyau d'hélium 4 et une autre particule. Calculer l'énergie libérée en MeV.</li>
</ol>`,
  corrige: R`
<ol class="q">
<li>Conservation du nombre de masse A et du nombre de charge Z : <span class="res">$^{14}_{6}\text{C} \to {}^{14}_{7}\text{N} + {}^{0}_{-1}\text{e}$</span> (plus un antineutrino).</li>
<li>$\lambda = \dfrac{\ln 2}{T} = \dfrac{0{,}693}{5\,730 \times 3{,}156 \times 10^7} \approx$ <span class="res">$3{,}83 \times 10^{-12}$ s⁻¹</span>.</li>
<li>$A = A_0 e^{-\lambda t}$, donc $t = \frac{T}{\ln 2}\ln\frac{A_0}{A}$. 25 % $= \frac14$, soit deux demi-vies : <span class="res">$t = 2T = 11\,460$ ans</span>. Pour 60 % : $t = \frac{5\,730}{0{,}693}\ln\frac{1}{0{,}6} \approx$ <span class="res">4 220 ans</span>.</li>
<li><span class="res">$^2_1\text{H} + {}^3_1\text{H} \to {}^4_2\text{He} + {}^1_0\text{n}$</span>. $\Delta m = (2{,}01355 + 3{,}01550) - (4{,}00150 + 1{,}00866) = 0{,}01889$ u, d'où <span class="res">$E = \Delta m\,c^2 \approx 17{,}6$ MeV</span>.</li>
</ol>`,
  schemaC: "p14",
  reflexe: R`Après $n$ demi-vies, il reste $\frac{1}{2^n}$ : 50 %, 25 %, 12,5 %… Repérez ces valeurs, le calcul de logarithme devient inutile.`
}];

/* Entraînement éclair : questions courtes à faire en temps limité, façon QCM. */
const ECLAIR = {
  maths: [
    [R`$\ln(e^3) - e^{\ln 2} = $ ?`, R`$3 - 2 = 1$`],
    [R`$\lim_{x\to+\infty} x\,e^{-x}$`, R`0 (croissances comparées)`],
    [R`Dérivée de $\ln(x^2+1)$`, R`$\frac{2x}{x^2+1}$`],
    [R`Dérivée de $e^{3x}\cos x$`, R`$e^{3x}(3\cos x - \sin x)$`],
    [R`$\int_0^1 3x^2\,dx$`, R`1`],
    [R`$|1 + i|$ et $\arg(1+i)$`, R`$\sqrt2$ et $\frac\pi4$`],
    [R`$(1 + i)^2$`, R`$2i$`],
    [R`$\frac{1}{i}$`, R`$-i$`],
    [R`$\binom{5}{2}$`, R`10`],
    [R`Nombre d'anagrammes de « ESP »`, R`$3! = 6$`],
    [R`$u_n$ géométrique, $u_0 = 3$, $q = 2$ : $u_5$`, R`$3 \times 2^5 = 96$`],
    [R`$1 + 2 + \dots + 100$`, R`5 050`],
    [R`Solution de $\ln x = 2$`, R`$x = e^2$`],
    [R`Solutions de $y' = 3y$`, R`$y = Ce^{3x}$`],
    [R`$\lim_{x\to0} \frac{\sin x}{x}$`, R`1`],
    [R`Dérivée de $\sqrt{x}$`, R`$\frac{1}{2\sqrt x}$`]
  ],
  physique: [
    [R`Unité de $\frac{1}{\sqrt{LC}}$`, R`rad/s (s⁻¹)`],
    [R`Unité de $RC$`, R`la seconde`],
    [R`Chute libre sans vitesse initiale, 2 s, $g = 10$ : vitesse ?`, R`20 m/s`],
    [R`Même chute : hauteur parcourue ?`, R`$\frac12 g t^2 = 20$ m`],
    [R`$E_c$ d'une masse de 2 kg à 3 m/s`, R`9 J`],
    [R`Poids d'une masse de 500 g ($g = 10$)`, R`5 N`],
    [R`Force sur un électron dans $E = 1000$ V/m`, R`$1{,}6 \times 10^{-16}$ N`],
    [R`Rayon d'une particule chargée si $B$ double`, R`divisé par 2`],
    [R`Période d'un ressort si $k$ est multiplié par 4`, R`divisée par 2`],
    [R`Énergie d'un photon de 620 nm`, R`2 eV`],
    [R`Fraction restante après 3 demi-vies`, R`$\frac18$`],
    [R`$1$ eV en joules`, R`$1{,}6 \times 10^{-19}$ J`],
    [R`Impédance d'un RLC série à la résonance`, R`$Z = R$`],
    [R`Interfrange si $a$ double`, R`divisé par 2`],
    [R`Particule émise en désintégration $\beta^+$`, R`le positon $^{0}_{1}$e`],
    [R`Vitesse angulaire d'une Terre faisant 1 tour en 24 h`, R`$7{,}3 \times 10^{-5}$ rad/s`]
  ]
};

/* Plan des jours restants (sans date : à démarrer le jour où l'on commence). */
const PLAN = [
  ["Jour 1", "M1 · M2", "P1 · P2"],
  ["Jour 2", "M3 · M4", "P3 · P4"],
  ["Jour 3", "M5 · M6", "P5 · P6"],
  ["Jour 4", "M7 · M8", "P7 · P8"],
  ["Jour 5", "M9 · M10", "P9 · P10"],
  ["Jour 6", "M11 · éclair maths", "P11 · P12"],
  ["Jour 7", "Refaire les questions ratées", "P13 · P14 · éclair physique"],
  ["Jour 8", "Relire les « Réflexes test »", "Fiche de révision, puis repos"]
];

module.exports = { MATHS, PHYSIQUE, ECLAIR, PLAN };
