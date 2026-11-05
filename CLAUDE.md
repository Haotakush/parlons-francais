# CLAUDE.md — Règles de travail sur Parlons Français

Ce fichier est lu par Claude au début de chaque séance. Il dit **comment travailler** sur ce projet.
Le **pourquoi** est dans `VISION.md`, le **quoi ensuite** dans `ROADMAP.md`, l'**historique** dans `JOURNAL.md`.

## Avec qui on travaille

- Eric porte le projet. Il se décrit comme amateur en code : il faut tout expliquer **en français, pas à pas**, sans jargon, avec les clics exacts quand il doit agir (GitHub, Google Cloud…).
- Les utilisateurs sont des parents adultes qui parlent un peu français et lisent le français. Ils ont des téléphones Android. Les retours arrivent à l'oral, quand Eric les fait tester.

## Le cycle de travail (obligatoire)

On ne fonce jamais directement dans le code. Chaque demande passe par ces 5 étapes :

1. **Explorer** : lire les fichiers concernés (et `JOURNAL.md` / `ROADMAP.md` si besoin). Ne rien modifier.
2. **Planifier** : proposer un plan court (ce qui change, dans quels fichiers, ce qu'Eric verra) et poser les questions utiles. **Attendre la validation d'Eric.**
3. **Coder** : appliquer le plan validé, rien de plus. Si un imprévu change le plan, revenir à l'étape 2.
4. **Vérifier** : tester (voir « Vérifier » plus bas) et **montrer la preuve** à Eric : captures d'écran, résultats des tests.
5. **Sauvegarder** : commit Git sur `main` avec un message clair en français, puis mise à jour de `JOURNAL.md` (et de `ROADMAP.md` si une case est cochée ou une idée ajoutée).

Exception : une correction minuscule et sans risque (une faute de frappe) peut sauter l'étape 2. Il faut le dire.

## Architecture

Aucune étape de compilation, aucun framework, aucune dépendance à installer : du HTML, du CSS et du JavaScript « à la main ».

```
index.html            La page : charge css/style.css, puis audio/index.js, js/contenu.js, js/lecons.js, js/app.js (dans cet ordre)
css/style.css         Le design. Couleurs en variables CSS (:root), mode sombre automatique
js/contenu.js         Le contenu de base : SONS, HOMOPHONES, CONSTRUIRE, CONNECTEURS, VERBES, TEMPS, CATEGORIES, QUIZ, ORDRE
js/lecons.js          Les 8 thèmes et leurs 52 leçons (THEMES) : règle, astuce, pour retenir, exemples, exercices + explications
js/app.js             Outils, lecture audio, profils, leçon du jour, composants, pages, navigation
audio/index.js        Correspondance texte → numéro de fichier (généré par tools/generer_audio.py)
audio/kore/, charon/  Voix Google (femme / homme), un MP3 par texte
audio/sons/           Les 20 sons enregistrés à la main par Eric (gros boutons de la page Sons)
sw.js                 Service worker : fonctionnement hors ligne
manifest.webmanifest  Installation sur l'écran d'accueil
tools/                Scripts Python : lister les textes, générer l'audio, découper un enregistrement
docs/                 CONTENU.md (ajouter du contenu), AUDIO.md (les voix)
```

Navigation par « hash » (`#/sons`, `#/cat/garage`, `#/lecon`…). Chaque page est une fonction de l'objet `PAGES` dans `js/app.js`.

## Règles à respecter

**Principes produit** (détail dans `VISION.md`)
- 100 % gratuit, hors ligne, sans compte ni serveur, sans publicité.
- Données personnelles (prénoms, progression, favoris) **uniquement dans le localStorage du téléphone**. Jamais de prénom réel dans le code ni dans les documents publics.
- Une action principale par écran. L'audio d'abord.

**Design**
- Style inspiré de shadcn/ui : cartes à bordure fine, gris neutres, onglets segmentés, badges, barres de progression.
- Couleur principale : le vert (`--primary`). Orange (`--warm`) réservé aux mots qu'on peut changer et aux astuces.
- Icônes dessinées en SVG (objet `ICON` dans `js/app.js`), **jamais d'emoji** dans l'interface.
- Zones tactiles d'au moins 44 px, texte d'au moins 15 px, contraste suffisant, vrais `<button>` et `<a>`.
- Toujours utiliser les variables CSS existantes plutôt que des couleurs en dur.

**Contenu**
- Ajouter ou modifier du texte **uniquement dans `js/contenu.js` ou `js/lecons.js`** (format : `docs/CONTENU.md`).
- Chaque leçon de thème suit toujours le même modèle : règle, astuce, pour retenir, exemples, 8 exercices (choisir / compléter / ordre), chacun avec une explication. Ne pas inventer un nouveau type d'exercice sans l'accord d'Eric.
- Après un changement de texte prononcé : régénérer l'audio (`docs/AUDIO.md`). Sinon, l'appli utilise la voix du téléphone, qui est moins bonne.

**Audio**
- Voix : Google Cloud TTS **Chirp 3 HD**, `fr-FR-Chirp3-HD-Kore` et `fr-FR-Chirp3-HD-Charon`. Ne jamais utiliser Gemini-TTS (payant dès le premier caractère).
- La clé API passe par la variable d'environnement `GOOGLE_TTS_KEY`. **Elle n'est jamais écrite dans un fichier du dépôt.** Conseiller à Eric de supprimer la clé après usage.
- Ne jamais renuméroter ni supprimer les fichiers existants de `audio/`, et ne pas toucher à `audio/sons/` sans nouvel enregistrement d'Eric.

**Service worker**
- À chaque modification de `index.html`, `css/`, `js/` : **augmenter `CACHE` dans `sw.js`** (`parlons-v5` → `parlons-v6`…). Sinon, les téléphones gardent l'ancienne version.
- Un nouveau fichier ajouté au projet doit être ajouté à la liste `FILES` de `sw.js`.

## Vérifier (étape 4)

1. `node --check js/app.js && node --check js/contenu.js` : pas d'erreur de syntaxe.
2. Lancer un serveur local depuis la racine : `python3 -m http.server 8000`.
3. Avec Playwright (Chromium), à la taille d'un téléphone (390 × 844) : ouvrir chaque page concernée, vérifier qu'il n'y a **aucune erreur JavaScript**, faire des captures et les montrer à Eric.
4. Pour une modification de la leçon du jour : la parcourir jusqu'à l'écran « Bravo ».
5. Après un changement de contenu : `python3 tools/lister_textes.py`, puis vérifier qu'aucun texte n'est sans audio.

## Sauvegarder (étape 5)

- Commits directement sur `main`, message en français à l'impératif : « Ajoute les leçons sur les nombres ».
- Ajouter une entrée datée en haut de `JOURNAL.md` : Fait / Décidé / Appris / À faire.
- Cocher ou ajouter les lignes concernées dans `ROADMAP.md`.
- Rappeler à Eric que GitHub Pages met 1 à 2 minutes à se mettre à jour, et qu'il faut fermer puis rouvrir l'appli sur le téléphone.
