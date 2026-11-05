# Journal — Parlons Français

Une entrée par séance de travail, la plus récente en haut. Pour chaque séance : ce qu'on a fait, ce qu'on a décidé, ce qu'on a appris, ce qui reste à faire.

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
