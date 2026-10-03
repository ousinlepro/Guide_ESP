# Cap ESP — préparation au test d'entrée en L1 (ESP Dakar, 17 octobre 2026)

Application web autonome (aucune dépendance, fonctionne hors ligne).

## Lancer
Ouvrir `index.html` dans un navigateur — ou, si les fichiers `data/` ne se chargent pas
en `file://` sur ton navigateur :

    python -m http.server 8000

puis http://127.0.0.1:8000

Version en ligne (consultable depuis le téléphone) :
https://claude.ai/artifact/Fju4ELZe6XGChZDiywrJTp

## Contenu
- **334 questions QCM** corrigées et expliquées, réparties en 53 chapitres
  (maths 106 · physique 83 · français 78 · anglais 67)
- Deux niveaux : `d:1` niveau test d'entrée (Terminale S2), `d:2` renforcé
- **Épreuves blanches** chronométrées (80 q / 3 h, 40 q / 1 h 30, 20 q / 45 min)
  avec note pondérée Maths ×3, Physique ×3, Français ×2, Anglais ×1
- **Fiches** de révision (formulaires maths/physique, règles français/anglais, stratégie)
- **Plan de révision** jour par jour du 21 septembre au 17 octobre 2026
- **Correction à deux niveaux** : une explication courte, puis un bouton « Voir plus »
  qui compare ta réponse à la bonne, rappelle les formules, la méthode, les pièges
  du chapitre, et affiche un schéma quand il y en a un
- **1 002 explications** : chaque mauvaise réponse a la sienne, qui nomme l'erreur exacte
- **53 mémos de chapitre** (formules / méthode / erreurs fréquentes) et **8 schémas** SVG
- **Série reprenable** : « Enregistrer et quitter » met la série en pause, chrono compris
- Suivi des erreurs avec répétition espacée simplifiée ; « Mes erreurs » affiche
  la version approfondie, dépliée d'office

## Fiche de révision imprimable

Deux PDF de 5 pages A4, même contenu que la page « Fiches » de l'application,
plus la stratégie du jour J :

- `Cap-ESP-fiche-revision-impression.pdf` — version claire, à imprimer.
  Pensée pour rester lisible en noir et blanc : texte ≥ 8,6 pt, formules
  à 9 pt, filets ≥ 0,5 pt, aplats très légers.
- `Cap-ESP-fiche-revision-ecran.pdf` — version sombre, à lire sur écran.

À régénérer après toute modification du contenu :

    node outils/extrait.js > outils/contenu.json
    python outils/genpdf.py

La conversion passe par Chrome en mode impression ; le chemin de `chrome.exe`
est en dur dans `outils/genpdf.py`. Le contenu est rendu par le formateur de
l'application lui-même : fractions et vecteurs y sont identiques.

### Cinq modèles en noir et blanc

`modeles/` contient cinq habillages différents de la même fiche, pensés pour
l'impression en noir et blanc. Planche comparative : `modeles/modeles-apercu.png`.

| Modèle | Polices | Pages |
|---|---|---|
| 1 · Classique | Garamond, filets doubles, petites capitales | 5 |
| 2 · Ingénieur | Bahnschrift et Consolas, bandeaux inversés | 5 |
| 3 · Carnet | Candara et Corbel, titres soulignés | 5 |
| 4 · Éditorial | Bodoni et Palatino, filets fins, sans cadres | 5 |
| 5 · Bristol compact | Tw Cen condensée et Calibri | **4** |

Chaque modèle a son PDF et un aperçu PNG de ses pages 1 et 2. Pour régénérer :

    node outils/extrait.js > outils/contenu.json
    python outils/modeles.py

## Structure
    index.html        application (UI + moteur de quiz)
    data/maths.js     banque de questions par matière
    data/physique.js
    data/francais.js
    data/anglais.js
    data/fiches.js    fiches de révision
    data/memos.js     mémos par chapitre : formules, méthode, pièges
    data/schemas.js   schémas SVG (Young, RC, plan incliné, Lorentz…)
    data/pourquoi-*.js  pourquoi chaque mauvaise réponse est fausse
    data/plan.js      plan J-26 → J-0

## Ajouter des questions
Ajouter un objet dans le tableau de la matière concernée :

    {id:"M999", ch:"Nom du chapitre", d:1,
     q:"Énoncé (HTML autorisé)",
     o:["bonne réponse","distracteur","distracteur","distracteur"],
     r:0,
     e:"Explication affichée après la réponse."}

Puis, dans `data/pourquoi-<matière>.js`, la raison de chaque mauvaise réponse :

    M999:["pourquoi l'option 1 est fausse",
          "pourquoi l'option 2 est fausse",
          "pourquoi l'option 3 est fausse"]

`r` est l'indice de la bonne réponse dans `o`. Les options sont mélangées
à l'affichage, la bonne réponse peut donc rester en position 0.

Les fractions écrites `a/b` sont empilées automatiquement à l'affichage
(y compris `(x+1)/(x−1)`, `sin(3x)/(5x)`). Les unités (`m/s`, `rad/s`) et les
séparateurs de prose (` / `) sont laissés tels quels. Les vecteurs s'écrivent
avec le caractère combinant U+20D7 (`B⃗`) : la flèche est redessinée en CSS.

## Sources
- Programme de mathématiques Terminale S2/S4 — Office du Baccalauréat (officedubac.sn)
- Programmes de sciences physiques Terminales S1 et S2 (2008)
- esp.sn — admissions, licences, communiqués concours
- Épreuves QCM réelles d'entrée aux écoles d'ingénieurs du Sénégal (2023, 2025),
  utilisées pour calibrer le format et le style des questions
