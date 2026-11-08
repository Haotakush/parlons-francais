# Roadmap — Parlons Français

Les priorités sont décidées par Eric. Rien n'est commencé sans un plan validé (voir `CLAUDE.md`, le cycle de travail).

## Fait

| Version | Date | Contenu |
| --- | --- | --- |
| v1 | 2026-11-02 | Première PWA : sons, homophones, phrases par situation, conjugaison, quiz, phrases à remettre dans l'ordre (voix du téléphone) |
| v2 | 2026-11-03 | Voix naturelles Google Chirp 3 HD : Kore (femme) et Charon (homme), 1 522 fichiers audio |
| v3 | 2026-11-05 | 20 sons enregistrés à la main par Eric, silences coupés, préchargement (latence réduite) |
| v4 | 2026-11-05 | Nouveau design inspiré de shadcn/ui, leçon du jour guidée, icônes dessinées, 4 onglets |
| v5 | 2026-11-05 | Projet sur GitHub, code découpé en fichiers, documentation, prénoms tapés par les utilisateurs, profils séparés |
| v6 | 2026-11-05 | Onglet **Apprendre** : 8 thèmes, 52 leçons (règle, astuce, moyen mnémotechnique, exemples, 8 exercices expliqués), niveau A2–B1, audio de toutes les phrases |
| v7 | 2026-11-05 | Premier lancement (prénom, femme/homme, voix), onglets Aujourd'hui · Apprendre · Pratiquer · Profil, thèmes en cartes et chemin de leçons. **Première version testée par les parents** |
| v8 (bêta) | 2026-11-06 | Version bêta, 3 nouveaux types d'exercices, réserve d'exercices tirés au hasard, S'entraîner, Mes erreurs. Thème 1 complet (25 exercices par leçon) |
| v9 (bêta) | 2026-11-07 | Un seul parcours de 10 unités, 3 onglets, exercices un écran à la fois avec « Vérifier », consignes et énoncés lus à voix haute, tuto |
| v10 (bêta) | 2026-11-08 | Tout s'écoute (consignes, pourquoi, règles), 52 leçons en FALC, 1 212 exercices |

## Maintenant

- [ ] Eric teste la bêta (nouveaux exercices du thème 1, S'entraîner, Mes erreurs)
- [x] Exercices en plus pour tous les thèmes (23 par leçon, v10 bêta)
- [x] Écouter les consignes et les énoncés des exercices (v9 bêta)
- [x] Réécrire en FALC les règles, astuces et explications, puis les rendre écoutables (v10 bêta)
- [ ] Plume, la mascotte : maquettes, charte graphique plus chaleureuse, voix dédiée
- [x] Petit tuto au premier lancement (v9 bêta) ; « À quoi ça sert ? » = le but de chaque unité
- [x] Refonte de l'ergonomie : un seul parcours qui s'ouvre petit à petit (v9 bêta)
- [ ] Passer la bêta validée en version normale pour les parents

## Prochaines idées (sans ordre de priorité pour l'instant)

### Autour des 8 thèmes
- [ ] Lien « Pour aller plus loin » à la fin de chaque thème vers Podcast Français Facile (sans copier leur contenu)
- [ ] Lire aussi les explications à voix haute
- [ ] Des images ou icônes pour les mots du thème « Les mots du quotidien »
- [ ] Faire enregistrer la conjugaison par des humains (Lingua Libre, licence libre) si la voix de synthèse reste insuffisante

Les anciennes idées « Construire une phrase », « Vocabulaire par thème », « Les nombres », « Règles de grammaire » et « Conjugaison » sont couvertes par les 8 thèmes de la v6.

## Améliorations techniques
- [ ] Bouton « Tout télécharger pour utiliser hors ligne » (aujourd'hui, les sons sont gardés au fur et à mesure qu'on les écoute)
- [ ] Choisir le nom définitif de l'appli (« Parlons Français » est provisoire)
- [ ] Faire évoluer la leçon du jour selon ce que la personne a déjà vu

## Plus tard
- [ ] Ouvrir l'appli à d'autres familles et à l'association d'aide scolaire (guide d'installation simple, choix des situations)
- [ ] **Projet séparé** : application pour l'enfant en CM2 (conjugaison, orthographe, grammaire, maths, géométrie). On commencera par une recherche complète sur le programme officiel, puis on simplifiera les cours.

## Écarté (et pourquoi)
- Traduction kabyle : les outils automatiques ne sont pas fiables.
- Vérification automatique de la prononciation : peu fiable, surtout sur iPhone. Les parents répètent eux-mêmes.
