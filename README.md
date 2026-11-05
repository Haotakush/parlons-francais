# Parlons Français

Une application web gratuite (PWA) pour aider des adultes qui parlent déjà un peu français à **mieux prononcer**, **construire des phrases** et **conjuguer**, avec l'audio de chaque mot et de chaque phrase.

**Application en ligne** : https://haotakush.github.io/parlons-francais/

## Ce qu'il y a dedans

- **Leçon du jour** guidée d'environ 20 minutes : un son, un homophone, 5 phrases d'une situation, un petit quiz.
- **Sons** : voyelles, sons nasaux, consonnes et paires à ne pas confondre (rue / roue…).
- **Phrases** par situation : la politesse, le téléphone, les rendez-vous, l'école, le médecin, la mairie, les courses, le garage. Les mots en orange se changent d'un toucher.
- **Apprendre** : 8 thèmes et 52 leçons de niveau A2–B1 (faire des phrases, les mots du quotidien, les verbes, masculin/féminin/pluriel, les mots qui se ressemblent, le passé, l'orthographe, la ponctuation). Chaque leçon contient une règle, une astuce, un moyen mnémotechnique, des exemples et 8 exercices expliqués. Plus les révisions : tableau de conjugaison, quiz, phrases à remettre dans l'ordre.
- Voix naturelles au choix (femme ou homme), vitesse lente, favoris.
- 1 ou 2 personnes : au premier lancement, on tape son prénom et on dit si on est une femme ou un homme. Chacun a sa progression.
- Fonctionne **hors ligne** et s'installe sur l'écran d'accueil.

## Installer sur un téléphone

- **Android (Chrome)** : ouvrir le lien, puis ⋮ → **Installer l'application** (ou « Installer l'appli » dans l'onglet Profil).
- **iPhone (Safari)** : ouvrir le lien, puis le bouton **Partager** → **Sur l'écran d'accueil**.

## Mettre en ligne (GitHub Pages)

Dans le dépôt GitHub : **Settings** → **Pages** → *Build and deployment* : **Deploy from a branch**, branche **main**, dossier **/ (root)** → **Save**.
Chaque nouveau commit sur `main` met l'appli à jour en 1 à 2 minutes.

## Tester sur son ordinateur

```bash
python3 -m http.server 8000
```
Puis ouvrir http://localhost:8000 dans le navigateur.

## Documentation

| Fichier | Contenu |
| --- | --- |
| [VISION.md](VISION.md) | Pourquoi l'appli existe, pour qui, ses principes |
| [ROADMAP.md](ROADMAP.md) | Ce qui est fait et les prochaines idées |
| [JOURNAL.md](JOURNAL.md) | L'historique des séances de travail |
| [CLAUDE.md](CLAUDE.md) | Les règles de travail (le cycle en 5 étapes, l'architecture) |
| [docs/CONTENU.md](docs/CONTENU.md) | Comment ajouter des phrases, des sons, des leçons |
| [docs/AUDIO.md](docs/AUDIO.md) | Comment les voix sont générées |

## Licence

[MIT](LICENSE) : libre de réutiliser et d'adapter, par exemple pour d'autres familles ou associations.
