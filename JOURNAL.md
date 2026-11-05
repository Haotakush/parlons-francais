# Journal — Parlons Français

Une entrée par séance de travail, la plus récente en haut. Pour chaque séance : ce qu'on a fait, ce qu'on a décidé, ce qu'on a appris, ce qui reste à faire.

---

## 2026-11-05 — v7 : nouvelle organisation, première version testée par les parents

**Fait**
- Premier lancement en 2 étapes : le prénom, puis « vous êtes une femme / un homme » (la personne qui apprend) et le choix de la voix. On peut ajouter une deuxième personne tout de suite.
- 4 onglets : **Aujourd'hui** · **Apprendre** · **Pratiquer** · **Profil**.
- Aujourd'hui : bonjour, série de jours, minutes du jour, grande carte « Leçon du jour », puis la prochaine leçon des thèmes. Les réglages ne sont plus sur l'accueil.
- Apprendre : les 8 thèmes en cartes de couleur avec un anneau de progression. Chaque thème montre un chemin de leçons (faite, en cours, à venir).
- Pratiquer : 6 cartes (Sons, Situations, Quiz, Remettre dans l'ordre, Conjugaison, Mes favoris), chacune avec un bouton retour.
- Profil : statistiques (jours de suite, leçons faites, temps total), réglages (prénom, je suis, voix, vitesse), changer ou ajouter une personne, installer l'appli.
- Les anciens profils sans « femme / homme » voient un message sur l'accueil pour le choisir.
- Quelques messages s'accordent maintenant (« vous êtes allée jusqu'au bout », « très forte »).
- Vérifié avec Playwright : premier lancement, 2 personnes, toutes les pages, ancien profil, mode sombre, aucune erreur.

**Décidé**
- « Femme / homme » concerne la personne qui apprend. La voix est un réglage séparé, choisie par défaut selon la réponse.
- C'est la version que Eric fait tester aux parents.

---

## 2026-11-05 (fin d'après-midi) — Correction des apostrophes (v6.1)

**Fait**
- Eric a repéré que les mots avec apostrophe + é/è (l'école, j'étais, l'écharpe) étaient mal lus. Après un test d'écoute en 2 essais, la solution retenue est d'envoyer le mot collé à la voix (« lécole »). 23 textes ont été régénérés.
- Bug corrigé : 3 exercices « Compléter » ajoutaient un espace après l'apostrophe (« L' hiver »).
- La règle est désormais appliquée automatiquement par `tools/generer_audio.py` et documentée dans `docs/AUDIO.md`.

**Appris**
- Les voix Chirp 3 HD lisent bien l'hôpital ou l'ordonnance, mais pas une apostrophe suivie de é, è ou ê.
- L'apostrophe typographique (’) ne change rien.

---

## 2026-11-05 (après-midi) — Les 8 thèmes (v6)

**Fait**
- Programme complet rédigé avec Eric dans un document Claude : 8 thèmes, 52 leçons, 416 exercices, chacun avec son explication et chaque leçon avec un moyen mnémotechnique.
- Contenu converti automatiquement en `js/lecons.js`, puis nouvel onglet **Apprendre** : la liste des thèmes avec leur progression, la liste des leçons, et le lecteur de leçon (règle → exemples → 8 exercices → bravo).
- 3 types d'exercices partagés : choisir la phrase juste, compléter, remettre dans l'ordre. L'explication s'affiche après chaque réponse.
- La leçon du jour propose ensuite la prochaine leçon de thème. La progression est séparée pour chaque profil.
- Audio : 656 nouvelles phrases × 2 voix (32 699 caractères, gratuit).

**Décidé**
- Titres simples dans l'appli (« Faire des phrases »), titres officiels en petit. Niveau A2–B1.
- Podcast Français Facile sert de référence et d'inspiration, mais on ne copie ni leurs textes ni leurs audios (dépôt public sous licence libre).
- Eric vérifie le contenu directement dans l'appli déployée.

**Appris**
- Aucune banque d'audio libre ne couvre la conjugaison complète (Lingua Libre, Shtooka, Tatoeba). La solution libre serait de la faire enregistrer sur Lingua Libre.

**À faire**
- Déployer, relire les 52 leçons dans l'appli, faire tester aux parents.

---

## 2026-11-05 — Sons enregistrés, nouveau design, passage sur GitHub

**Fait**
- 20 sons enregistrés par Eric (un seul fichier découpé automatiquement, le « gn » refait) et placés sur les gros boutons de la page Sons.
- Latence réduite : silences coupés au début et à la fin des 1 522 fichiers de voix, préchargement des sons de la page affichée.
- Recherche UI : galeries uiuxshowcase.com (mobile apps, learning) et shadcn/ui. Maquettes de 4 écrans validées (Accueil, Leçon du jour, Sons, Au garage).
- Nouveau design appliqué (v4) : style shadcn, police Geist, icônes dessinées, leçon du jour guidée (son → homophone → 5 phrases → 3 questions → bravo), 4 onglets, mode sombre.
- v5 : projet mis sur GitHub (`Haotakush/parlons-francais`), code découpé (`index.html`, `css/`, `js/contenu.js`, `js/app.js`), outils audio dans `tools/`, documentation (VISION, CLAUDE, ROADMAP, JOURNAL, docs/).
- Les prénoms ne sont plus écrits dans le code : ils sont tapés au premier lancement (1 ou 2 profils). Chaque profil a sa progression, ses favoris et ses réglages.

**Décidé**
- Hébergement : GitHub Pages remplace Netlify.
- Licence libre MIT. À terme, l'appli pourra être proposée à d'autres familles et à l'association.
- 2 profils maximum (les parents). L'appli pour l'enfant (CM2) sera un projet séparé.
- 100 % gratuit et hors ligne. Commits directement sur `main`.
- Façon de travailler : le cycle Explorer → Planifier → Coder → Vérifier → Sauvegarder (voir `CLAUDE.md`).

**Appris**
- La voix Google lit le nom des lettres pour un son isolé (« é » → « e accent aigu ») : les sons purs doivent être enregistrés par un humain.
- Certains mots très courts donnent un fichier muet. Il faut les regénérer avec de la ponctuation (« a. », « è ! »).

**À faire**
- Activer GitHub Pages, tester sur les Android des parents, noter leurs retours.

---

## 2026-11-03 — Des voix naturelles

**Fait**
- Comparaison de 10 voix Google. Choix d'Eric : Kore (femme) et Charon (homme), en Chirp 3 HD.
- Génération de 761 textes × 2 voix. 18 fichiers presque muets ont été regénérés.
- Coût : environ 30 000 caractères sur le million gratuit du mois, donc 0 €.

**Appris**
- ElevenLabs a de belles voix, mais son offre gratuite est trop petite et n'autorise pas l'usage commercial. Azure et Google sont gratuits pour ce volume.
- Les voix Gemini-TTS de Google n'ont pas de quota gratuit : ne pas les utiliser.

---

## 2026-11-02 — L'idée et la première version

**Fait**
- Besoin exprimé : aider les parents d'un élève suivi en cours du soir. La mère : prononciation et situations du quotidien. Le père, mécanicien : parler aux clients.
- Recherche des applis existantes (Français premiers pas, J'apprends, TV5MONDE) : elles sont généralistes et ne couvrent pas leurs situations.
- Document de contenu : sons, homophones, construire une phrase, conjugaison, phrases par situation.
- v1 de la PWA avec la voix du téléphone.

**Décidé**
- Pas de traduction kabyle, pas de vérification de prononciation.
- Appli presque entièrement audio, avec des icônes. Les parents lisent le français et ont Android.
