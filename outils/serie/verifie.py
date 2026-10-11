"""Vérification indépendante de chaque résultat de la série corrigée.
Chaque assertion recalcule, avec sympy ou en flottants, une valeur imprimée
dans le corrigé. Usage : python verifie.py   (aucune sortie d'erreur = tout est juste)"""
from math import comb, isclose, pi, sqrt, exp, log, cos, sin, tan, radians, atan, degrees
import sympy as sp

x, t, n = sp.symbols("x t n", real=True)
ok = 0
def egal(a, b, tol=1e-9, msg=""):
    global ok
    a = float(a); b = float(b)
    assert isclose(a, b, rel_tol=tol, abs_tol=tol), f"{msg}: {a} != {b}"
    ok += 1
def vrai(c, msg=""):
    global ok
    assert c, msg
    ok += 1

# ============================ MATHS ============================
# M1 nombres complexes : z² − 2√3 z + 4 = 0
z = sp.symbols("z")
sol = sp.solve(z**2 - 2*sp.sqrt(3)*z + 4, z)
vrai(set(sp.simplify(s) for s in sol) == {sp.sqrt(3) + sp.I, sp.sqrt(3) - sp.I}, "M1 racines")
z1 = sp.sqrt(3) + sp.I; z2 = sp.sqrt(3) - sp.I
egal(sp.Abs(z1), 2, msg="M1 module"); egal(sp.arg(z1), sp.pi/6, msg="M1 arg")
vrai(sp.simplify(sp.expand(z1**6) + 64) == 0, "M1 z1^6 = -64")
q = sp.simplify(z1/z2)
vrai(abs(complex(sp.N(q - sp.exp(sp.I*sp.pi/3)))) < 1e-12, "M1 z1/z2")
egal(sp.Abs(z1 - z2), 2, msg="M1 AB = 2 -> équilatéral")
# z1^n réel <=> n multiple de 6
vrai(all((sp.im(sp.expand(z1**k)) == 0) == (k % 6 == 0) for k in range(1, 25)), "M1 z1^n réel")

# M2 similitude z' = (1+i)z + 2 − i
w = sp.symbols("w")
om = sp.solve(sp.Eq(w, (1+sp.I)*w + 2 - sp.I), w)[0]
vrai(sp.simplify(om - (1 + 2*sp.I)) == 0, "M2 centre")
egal(sp.Abs(1+sp.I), sqrt(2), msg="M2 rapport"); egal(sp.arg(1+sp.I), pi/4, msg="M2 angle")
A = 3 + sp.I
vrai(sp.simplify((1+sp.I)*A + 2 - sp.I - (4 + 3*sp.I)) == 0, "M2 image de A")
# image du cercle C(0 ; 1) : cercle de centre 2 − i, rayon √2
vrai(sp.simplify((1+sp.I)*0 + 2 - sp.I - (2 - sp.I)) == 0, "M2 image du centre")
# réciproque : z = (z' − 2 + i)/(1+i) = ((1−i)/2) z' + ...
zp = sp.symbols("zp")
rec = sp.expand(sp.simplify((zp - 2 + sp.I)/(1 + sp.I)))
vrai(sp.simplify(rec - ((1 - sp.I)/2*zp + (-1 + 3*sp.I)/2)) == 0, "M2 réciproque")

# M3 suite u_{n+1} = u_n/2 + 3, u0 = 10
u = [sp.Integer(10)]
for k in range(30): u.append(u[-1]/2 + 3)
vrai(all(u[k] == 6 + 4*sp.Rational(1, 2)**k for k in range(30)), "M3 forme explicite")
vrai(all(u[k+1] < u[k] for k in range(29)), "M3 décroissante")
vrai(all(sum(u[:k+1]) == 6*(k+1) + 8*(1 - sp.Rational(1, 2)**(k+1)) for k in range(29)), "M3 somme")
egal(u[3], 6.5, msg="M3 u3")
# plus petit n tel que u_n − 6 < 10^-3 : 4/2^n < 1e-3 -> 2^n > 4000 -> n = 12
vrai(min(k for k in range(31) if u[k] - 6 < sp.Rational(1, 1000)) == 12, "M3 seuil")

# M4 f(x) = (2x² − x + 1)/(x − 1)
f = (2*x**2 - x + 1)/(x - 1)
vrai(sp.simplify(f - (2*x + 1 + 2/(x - 1))) == 0, "M4 division")
fp = sp.simplify(sp.diff(f, x))
vrai(sp.simplify(fp - 2*x*(x - 2)/(x - 1)**2) == 0, "M4 dérivée factorisée")
vrai(set(sp.solve(fp, x)) == {0, 2}, "M4 extremums")
egal(f.subs(x, 0), -1, msg="M4 f(0)"); egal(f.subs(x, 2), 7, msg="M4 f(2)")
vrai(sp.simplify(f.subs(x, 2 - x) + f - 6) == 0, "M4 centre de symétrie (1 ; 3)")
vrai(sp.limit(f - (2*x + 1), x, sp.oo) == 0, "M4 asymptote oblique")
# tangente en x = 3 : f(3) = 8, f'(3) = 2·3·1/4 = 3/2
egal(f.subs(x, 3), 8, msg="M4 f(3)"); egal(fp.subs(x, 3), 1.5, msg="M4 f'(3)")

# M5 f(x) = ln x / x
g = sp.log(x)/x
vrai(sp.simplify(sp.diff(g, x) - (1 - sp.log(x))/x**2) == 0, "M5 dérivée")
egal(g.subs(x, sp.E), 1/sp.E, msg="M5 max")
vrai(sp.limit(g, x, 0, "+") == -sp.oo and sp.limit(g, x, sp.oo) == 0, "M5 limites")
vrai(sp.simplify(sp.diff(g, x).subs(x, 1) - 1) == 0, "M5 pente en 1")
egal(sp.integrate(g, (x, 1, sp.E)), 0.5, msg="M5 intégrale")
# ln x / x = 1/4 : deux solutions (car 1/4 < 1/e)
vrai(0.25 < 1/exp(1), "M5 nb solutions")
d2 = sp.simplify(sp.diff(g, x, 2))
vrai(sp.simplify(d2 - (2*sp.log(x) - 3)/x**3) == 0, "M5 dérivée seconde")
egal(sp.solve(d2, x)[0], exp(1.5), msg="M5 inflexion e^(3/2)")

# M6 f(x) = (x+1) e^{-x}
h = (x + 1)*sp.exp(-x)
vrai(sp.simplify(sp.diff(h, x) + x*sp.exp(-x)) == 0, "M6 dérivée")
vrai(sp.limit(h, x, sp.oo) == 0 and sp.limit(h, x, -sp.oo) == -sp.oo, "M6 limites")
F = -(x + 2)*sp.exp(-x)
vrai(sp.simplify(sp.diff(F, x) - h) == 0, "M6 primitive")
I6 = sp.integrate(h, (x, 0, 1))
vrai(sp.simplify(I6 - (2 - 3/sp.E)) == 0, "M6 intégrale"); egal(I6, 0.8963616, tol=1e-6, msg="M6 approx")
vrai(sp.simplify(sp.diff(h, x, 2) - (x - 1)*sp.exp(-x)) == 0, "M6 f''")
egal(h.subs(x, 1), 2/exp(1), msg="M6 inflexion (1 ; 2/e)")
# tangente en 0 : y = 1 (f'(0) = 0) ; f(-1) = 0
egal(h.subs(x, -1), 0, msg="M6 racine")

# M7 intégrales
egal(sp.integrate(sp.cos(x)*sp.sin(x)**2, (x, 0, sp.pi/2)), 1/3, msg="M7 a")
egal(sp.integrate(x/(x**2 + 1), (x, 0, 1)), log(2)/2, msg="M7 b")
egal(sp.integrate(x*sp.log(x), (x, 1, sp.E)), (exp(2) + 1)/4, msg="M7 c")
egal(sp.integrate(sp.exp(2*x), (x, 0, sp.log(2))), 1.5, msg="M7 d")
# aire entre y = x² et y = x sur [0 ; 1] : 1/6 u.a.
egal(sp.integrate(x - x**2, (x, 0, 1)), 1/6, msg="M7 aire")
# valeur moyenne de sin sur [0 ; π] = 2/π
egal(sp.integrate(sp.sin(x), (x, 0, sp.pi))/sp.pi, 2/pi, msg="M7 moyenne")

# M8 équations différentielles
y = sp.Function("y")
s1 = sp.dsolve(sp.Eq(y(x).diff(x) + 2*y(x), 4), y(x), ics={y(0): 0}).rhs
vrai(sp.simplify(s1 - (2 - 2*sp.exp(-2*x))) == 0, "M8 a")
s2 = sp.dsolve(sp.Eq(y(x).diff(x, 2) + 4*y(x), 0), y(x), ics={y(0): 1, y(x).diff(x).subs(x, 0): 2}).rhs
vrai(sp.simplify(s2 - (sp.cos(2*x) + sp.sin(2*x))) == 0, "M8 b")
vrai(sp.simplify(sp.sqrt(2)*sp.cos(2*x - sp.pi/4) - (sp.cos(2*x) + sp.sin(2*x))) == 0, "M8 b forme amplitude-phase")
s3 = sp.dsolve(sp.Eq(y(x).diff(x, 2) - 3*y(x).diff(x) + 2*y(x), 0), y(x), ics={y(0): 0, y(x).diff(x).subs(x, 0): 1}).rhs
vrai(sp.simplify(s3 - (sp.exp(2*x) - sp.exp(x))) == 0, "M8 c")
s4 = sp.dsolve(sp.Eq(y(x).diff(x, 2) - 2*y(x).diff(x) + y(x), 0), y(x), ics={y(0): 1, y(x).diff(x).subs(x, 0): 0}).rhs
vrai(sp.simplify(s4 - (1 - x)*sp.exp(x)) == 0, "M8 d racine double")

# M9 urne 5 R, 3 N, tirage simultané de 3
tot = comb(8, 3); egal(tot, 56)
egal(comb(5, 2)*comb(3, 1)/tot, 15/28, msg="M9 a")
egal(1 - comb(5, 3)/tot, 23/28, msg="M9 b")
loi = {k: comb(5, k)*comb(3, 3 - k)/tot for k in range(4)}
egal(loi[0], 1/56); egal(loi[1], 15/56); egal(loi[2], 30/56); egal(loi[3], 10/56)
E = sum(k*p for k, p in loi.items()); egal(E, 15/8, msg="M9 espérance")
V = sum(k*k*p for k, p in loi.items()) - E**2; egal(V, 225/448, msg="M9 variance")
# tirage successif avec remise : P(RRN dans cet ordre) = (5/8)²(3/8)
egal((5/8)**2*(3/8), 75/512, msg="M9 avec remise")

# M10 loi binomiale B(10 ; 1/4) — QCM au hasard
p = 0.25
egal((3/4)**10, 0.0563135, tol=1e-6, msg="M10 X=0")
egal(1 - (3/4)**10, 0.9436865, tol=1e-6, msg="M10 X>=1")
egal(comb(10, 3)*p**3*(1 - p)**7, 0.2502823, tol=1e-6, msg="M10 X=3")
egal(10*p, 2.5); egal(10*p*(1 - p), 1.875, msg="M10 variance")
# score : +1 juste, −0,25 faux -> E = 2,5 − 0,25 × 7,5 = 0,625
egal(10*p*1 - 10*(1 - p)*0.25, 0.625, msg="M10 score moyen")
# malus qui rend le hasard neutre : 1/4 − 3/4 m = 0 -> m = 1/3
egal(sp.solve(sp.Rational(1, 4) - sp.Rational(3, 4)*sp.Symbol("m"))[0], 1/3, msg="M10 malus neutre")
# entre 2 options restantes : gain moyen 1/2 − 1/2 × 0,25 = 0,375 > 0
egal(0.5 - 0.5*0.25, 0.375, msg="M10 deux options")
egal(sum(comb(10, k)*p**k*(1 - p)**(10 - k) for k in range(5, 11)), 0.0781269, tol=1e-6, msg="M10 X>=5")

# M11 statistiques
X = [1, 2, 3, 4, 5, 6]; Y = [3, 5, 6, 9, 10, 12]
mx = sum(X)/6; my = sum(Y)/6
egal(mx, 3.5); egal(my, 7.5)
vx = sum(a*a for a in X)/6 - mx**2; vy = sum(b*b for b in Y)/6 - my**2
cov = sum(a*b for a, b in zip(X, Y))/6 - mx*my
egal(vx, 35/12, msg="M11 V(x)"); egal(cov, 21/4, msg="M11 cov")
egal(vy, 115/12, msg="M11 V(y)")
a_ = cov/vx; b_ = my - a_*mx
egal(a_, 1.8, msg="M11 a"); egal(b_, 1.2, msg="M11 b")
r = cov/sqrt(vx*vy); egal(r, 0.99302, tol=1e-4, msg="M11 r")
egal(a_*8 + b_, 15.6, msg="M11 prévision x=8")
# droite de x en y : x = a'y + b', a' = cov/V(y) = 63/115
egal(cov/vy, 63/115, msg="M11 a'")

# ========================== PHYSIQUE ==========================
g0 = 10
# P1 x(t) = 2t² − 4t + 1
egal(4*1 - 4, 0, msg="P1 v(1)"); egal(2 - 4 + 1, -1, msg="P1 x(1)")
egal(2*3**2 - 4*3 + 1, 7, msg="P1 x(3)")
egal(4*3 - 4, 8, msg="P1 v(3)")
# distance parcourue entre 0 et 3 s : |x(1) − x(0)| + |x(3) − x(1)| = 2 + 8 = 10 m
egal(abs(-1 - 1) + abs(7 - (-1)), 10, msg="P1 distance")

# P2 plan incliné
m, al, f_, AB = 0.5, radians(30), 0.5, 2.0
a_sf = g0*sin(al); egal(a_sf, 5)
a_f = g0*sin(al) - f_/m; egal(a_f, 4)
vB = sqrt(2*a_f*AB); egal(vB, 4)
# TEC : ½ m vB² = m g AB sin α − f AB  -> 4 = 5 − 1 (J)
egal(0.5*m*vB**2, m*g0*AB*sin(al) - f_*AB, msg="P2 TEC")
# sur BC horizontal avec même f : décélération f/m = 1 m/s², arrêt après vB²/2 = 8 m
egal(vB**2/(2*f_/m), 8, msg="P2 BC")
egal(m*g0*cos(al), 4.330127, tol=1e-6, msg="P2 réaction normale")
egal(vB/a_f, 1.0, msg="P2 durée AB")

# P3 projectile v0 = 20 m/s, α = 30°
v0, al = 20, radians(30)
egal(v0**2*sin(al)**2/(2*g0), 5, msg="P3 flèche")
egal(v0**2*sin(2*al)/g0, 20*sqrt(3), msg="P3 portée"); egal(20*sqrt(3), 34.641, tol=1e-4)
egal(v0*sin(al)/g0, 1, msg="P3 t sommet"); egal(2*v0*sin(al)/g0, 2, msg="P3 t vol")
egal(sqrt((v0*cos(al))**2 + 0), 17.3205, tol=1e-4, msg="P3 vitesse au sommet")
# mur à x = 20 m : z = x tanα − g x²/(2 v0² cos²α) = 11,547 − 6,667 = 4,880 m
zmur = 20*tan(al) - g0*400/(2*v0**2*cos(al)**2); egal(zmur, 4.8803, tol=1e-4, msg="P3 mur")
# portée max à 45° : v0²/g = 40 m
egal(v0**2/g0, 40)

# P4 déflexion électrostatique
e, me = 1.6e-19, 9.1e-31
v0, U, d, L, D = 2e7, 200, 0.05, 0.10, 0.40
Ech = U/d; egal(Ech, 4000)
a = e*Ech/me; egal(a, 7.0330e14, tol=1e-4, msg="P4 a")
tt = L/v0; egal(tt, 5e-9)
ys = 0.5*a*tt**2; egal(ys, 8.791e-3, tol=1e-3, msg="P4 y sortie")
vrai(ys < d/2, "P4 ne touche pas")
tanth = a*tt/v0; egal(tanth, 0.17582, tol=1e-3, msg="P4 tan")
Y = D*tanth; egal(Y, 0.07033, tol=1e-3, msg="P4 Y")
egal(e*U*L*D/(me*d*v0**2), Y, tol=1e-9, msg="P4 formule")
# tension max pour sortir : ys = d/2 -> U = U·(d/2)/ys = 568,7 V
egal(U*(d/2)/ys, 568.75, tol=1e-3, msg="P4 Umax")

# P5 satellite géostationnaire
G0, R, T = 9.8, 6.4e6, 86164
r = (G0*R**2*T**2/(4*pi**2))**(1/3)
egal(r, 4.2263e7, tol=1e-4, msg="P5 r"); egal(r - R, 3.5863e7, tol=1e-4, msg="P5 h")
egal(2*pi*r/T, 3082, tol=1e-3, msg="P5 v")
# satellite à h = 400 km : v = R sqrt(g0/(R+h)), T = 2π(R+h)/v
rr = R + 4e5; vv = R*sqrt(G0/rr); egal(vv, 7682, tol=1e-3, msg="P5 v ISS"); egal(2*pi*rr/vv/60, 92.7, tol=2e-3, msg="P5 T ISS min")
# masse de la Terre : M = g0 R²/G
egal(G0*R**2/6.67e-11, 6.018e24, tol=1e-3, msg="P5 masse Terre")

# P6 spectrographe : ions 39K+ et 41K+, U = 1000 V, B = 0,1 T
mu = 1.67e-27; q = 1.6e-19; U = 1000; B = 0.1
v39 = sqrt(2*q*U/(39*mu)); egal(v39, 7.009e4, tol=1e-3, msg="P6 v39")
R39 = sqrt(2*39*mu*U/q)/B; R41 = sqrt(2*41*mu*U/q)/B
egal(R39, 0.28533, tol=1e-3, msg="P6 R39"); egal(R41, 0.29256, tol=1e-3, msg="P6 R41")
egal(2*(R41 - R39), 0.01446, tol=1e-2, msg="P6 écart")
egal(R41/R39, sqrt(41/39), msg="P6 rapport")
# charge massique trouvée à partir de R : q/m = 2U/(B² R²)
egal(2*U/(B**2*R39**2), q/(39*mu), tol=1e-9, msg="P6 q/m")

# P7 rails de Laplace et induction : B = 0,5 T, ℓ = 0,2 m, R = 2 Ω
B, l, Rr = 0.5, 0.2, 2.0
egal(5*B*l, 0.5, msg="P7 F Laplace I=5A")
v = 4; ee = B*l*v; egal(ee, 0.4, msg="P7 fem"); ii = ee/Rr; egal(ii, 0.2, msg="P7 i")
egal(B*ii*l, 0.02, msg="P7 force de freinage"); egal(ee*ii, 0.08, msg="P7 puissance")
# flux à travers le circuit
egal(B*l*0.3, 0.03, msg="P7 flux x=30cm")

# P8 RC et RL
Rr, C, E0 = 1e3, 100e-6, 12
tau = Rr*C; egal(tau, 0.1)
egal(E0*(1 - exp(-1)), 7.5854, tol=1e-4, msg="P8 uC(τ)")
egal(-tau*log(1 - 0.99), 0.4605, tol=1e-3, msg="P8 99 %")
egal(0.5*C*E0**2, 7.2e-3, msg="P8 énergie")
egal(E0/Rr, 0.012, msg="P8 i0")
Lb, Rl = 0.5, 10
egal(Lb/Rl, 0.05); egal(E0/Rl, 1.2); egal(0.5*Lb*1.2**2, 0.36, msg="P8 énergie bobine")
egal(1.2*(1 - exp(-1)), 0.75854, tol=1e-4, msg="P8 i(τ)")

# P9 oscillateur mécanique
m, k = 0.2, 20; w0 = sqrt(k/m); egal(w0, 10); egal(2*pi/w0, 0.6283, tol=1e-4, msg="P9 T0")
Xm = 0.02; egal(0.5*k*Xm**2, 4e-3); egal(w0*Xm, 0.2)
egal(-w0**2*Xm, -2, msg="P9 a extrême")
# à x = 1 cm : v = w0 sqrt(Xm² − x²) = 10 × sqrt(3e-4) = 0,1732 m/s
egal(w0*sqrt(Xm**2 - 0.01**2), 0.17321, tol=1e-4, msg="P9 v à x=1cm")
# pendule simple ℓ = 1 m, g = 9,8 : T = 2,007 s
egal(2*pi*sqrt(1/9.8), 2.0071, tol=1e-4, msg="P9 pendule")
# masse quadruplée -> période doublée
egal(2*pi*sqrt(4*m/k)/(2*pi*sqrt(m/k)), 2)

# P10 LC puis RLC forcé
Lb, C, U0 = 0.1, 10e-6, 10
w0 = 1/sqrt(Lb*C); egal(w0, 1000); egal(w0/(2*pi), 159.15, tol=1e-4, msg="P10 f0")
egal(2*pi/w0, 6.2832e-3, tol=1e-4)
Qm = C*U0; egal(Qm, 1e-4); egal(w0*Qm, 0.1, msg="P10 Im")
egal(0.5*C*U0**2, 5e-4); egal(0.5*Lb*0.1**2, 5e-4, msg="P10 énergie conservée")
Rr, Ueff = 20, 10
egal(Ueff/Rr, 0.5); egal(Lb*w0/Rr, 5, msg="P10 Q"); egal(Rr/Lb, 200, msg="P10 Δω")
# à ω = 800 rad/s : Z = sqrt(R² + (Lω − 1/Cω)²) = sqrt(400 + (80 − 125)²) = 49,24 Ω
Z = sqrt(Rr**2 + (Lb*800 - 1/(C*800))**2); egal(Z, 49.244, tol=1e-4, msg="P10 Z")
egal(Ueff/Z, 0.20307, tol=1e-4, msg="P10 I")
phi = atan((Lb*800 - 1/(C*800))/Rr); egal(degrees(phi), -66.04, tol=1e-3, msg="P10 phase")
egal(Rr/Z, 0.40614, tol=1e-4, msg="P10 cos phi")
# tension aux bornes de C à la résonance : Q × U = 50 V (surtension)
egal(5*Ueff, 50)

# P11 Young
lam, a_, D = 600e-9, 0.5e-3, 2
i_ = lam*D/a_; egal(i_, 2.4e-3)
egal(a_*6e-3/D, 1.5e-6); egal(1.5e-6/lam, 2.5, msg="P11 frange sombre")
egal(3*i_, 7.2e-3, msg="P11 3e brillante")
# nombre de franges brillantes sur un champ de 2 cm centré : |k| i <= 1 cm -> k de −4 à 4 -> 9
vrai(len([k for k in range(-20, 21) if abs(k*i_) <= 0.01]) == 9, "P11 nombre")
# autre radiation : 5 i' = 4 i  -> λ' = 480 nm (0,8 λ)
egal(4*lam/5, 480e-9, msg="P11 λ'")

# P12 effet photoélectrique (césium, W0 = 1,9 eV)
h, c, eV = 6.63e-34, 3e8, 1.6e-19
lam0 = h*c/(1.9*eV); egal(lam0, 654.3e-9, tol=1e-3, msg="P12 λ0")
Eph = h*c/450e-9/eV; egal(Eph, 2.7625, tol=1e-4, msg="P12 E photon")
Ec = Eph - 1.9; egal(Ec, 0.8625, tol=1e-3, msg="P12 Ec")
vmax = sqrt(2*Ec*eV/me); egal(vmax, 5.506e5, tol=2e-3, msg="P12 vmax")
egal(Ec, 0.8625, tol=1e-3, msg="P12 U0 en V")
vrai(h*c/700e-9/eV < 1.9, "P12 rouge sans effet")

# P13 hydrogène En = −13,6/n²
En = lambda k: -13.6/k**2
dE = En(3) - En(2); egal(dE, 1.8889, tol=1e-4, msg="P13 ΔE 3->2")
egal(h*c/(dE*eV), 658.1e-9, tol=1e-3, msg="P13 λ Hα")
egal(-En(2), 3.4); egal(En(2) - En(1), 10.2, msg="P13 10,2 eV")
vrai(all(abs((En(k) - En(1)) - 11) > 0.05 for k in range(2, 30)) and 11 < 13.6, "P13 11 eV non absorbé")
egal(h*c/(13.6*eV), 91.4e-9, tol=2e-3, msg="P13 λ ionisation")
# un électron de 11 eV peut céder 10,2 eV (choc) : reste 0,8 eV
egal(11 - 10.2, 0.8, tol=1e-9)
# raies de Balmer visibles : 3,4,5,6 -> 2
lb = [h*c/((En(k) - En(2))*eV)*1e9 for k in (3, 4, 5, 6)]
vrai(all(380 < x < 700 for x in lb), "P13 Balmer visibles")
egal(lb[1], 487.4, tol=2e-3, msg="P13 Hβ")

# P14 nucléaire
Tc = 5730
egal(Tc*log(4)/log(2), 11460, msg="P14 datation 1/4")
egal(-Tc/log(2)*log(0.6), 4222.8, tol=1e-3, msg="P14 datation 60 %")
lam_c = log(2)/(Tc*365.25*24*3600); egal(lam_c, 3.833e-12, tol=2e-3, msg="P14 λ en s-1")
dm = 2.01355 + 3.01550 - 4.00150 - 1.00866; egal(dm, 0.01889, tol=1e-6, msg="P14 Δm")
egal(dm*931.5, 17.596, tol=1e-3, msg="P14 énergie MeV")
# activité après 3 demi-vies : A0/8
egal(0.5**3, 0.125)

# ======================= ENTRAÎNEMENT ÉCLAIR =======================
vrai(sp.simplify(sp.log(sp.exp(3)) - sp.exp(sp.log(2)) - 1) == 0, "E1")
vrai(sp.limit(x*sp.exp(-x), x, sp.oo) == 0, "E2")
vrai(sp.simplify(sp.diff(sp.log(x**2 + 1), x) - 2*x/(x**2 + 1)) == 0, "E3")
vrai(sp.simplify(sp.diff(sp.exp(3*x)*sp.cos(x), x) - sp.exp(3*x)*(3*sp.cos(x) - sp.sin(x))) == 0, "E4")
egal(sp.integrate(3*x**2, (x, 0, 1)), 1, msg="E5")
vrai(sp.expand((1 + sp.I)**2) == 2*sp.I and sp.simplify(1/sp.I) == -sp.I, "E7-8")
egal(comb(5, 2), 10); egal(3*2**5, 96); egal(sum(range(101)), 5050)
vrai(sp.limit(sp.sin(x)/x, x, 0) == 1, "E15")
vrai(sp.simplify(sp.diff(sp.sqrt(x), x) - 1/(2*sp.sqrt(x))) == 0, "E16")
egal(10*2, 20); egal(0.5*10*4, 20); egal(0.5*2*9, 9); egal(0.5*10, 5)
egal(1.6e-19*1000, 1.6e-16, msg="Ef7")
egal(6.63e-34*3e8/620e-9/1.6e-19, 2.0, tol=5e-3, msg="Ef10")
egal(2*pi/86400, 7.27e-5, tol=2e-3, msg="Ef16")

print(f"{ok} vérifications : toutes justes.")
