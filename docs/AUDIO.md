# L'audio

## D'où viennent les sons

| Dossier | Quoi | Comment |
| --- | --- | --- |
| `audio/kore/` | Voix de femme | Google Cloud Text-to-Speech, voix `fr-FR-Chirp3-HD-Kore` |
| `audio/charon/` | Voix d'homme | Google Cloud Text-to-Speech, voix `fr-FR-Chirp3-HD-Charon` |
| `audio/sons/` | Les 20 sons purs (a, é, ch, r…) | Enregistrés à la main par Eric, car la voix de synthèse lit le nom de la lettre au lieu du son |
| `audio/index.js` | Correspondance texte → numéro de fichier | Généré par `tools/generer_audio.py` |

Si un texte n'a pas de fichier, l'appli utilise la voix du téléphone (moins naturelle).

## Coût

Les voix Chirp 3 HD sont gratuites jusqu'à **1 million de caractères par mois**. Tout le contenu actuel fait environ 14 000 caractères par voix, donc on reste très loin de la limite.
Ne **jamais** utiliser les voix Gemini-TTS : elles n'ont aucun quota gratuit.

## Générer l'audio des nouveaux textes

Préparer une seule fois :
1. Sur Google Cloud (projet « Parlons francais ») : **API et services** → **Identifiants** → **Créer des identifiants** → **Clé API**, limitée à *Cloud Text-to-Speech API*.
2. Installer `ffmpeg` et Playwright : `pip install playwright && python3 -m playwright install chromium`.

Puis, depuis la racine du projet :
```bash
export GOOGLE_TTS_KEY="AIza..."      # la clé reste dans le terminal, jamais dans un fichier
python3 tools/lister_textes.py        # met à jour tools/textes.json
python3 tools/generer_audio.py        # crée uniquement les fichiers manquants
```
Ensuite : écouter les nouveaux fichiers, augmenter `CACHE` dans `sw.js`, faire un commit, et **supprimer la clé** sur Google Cloud.

Les anciens fichiers gardent leur numéro : on ne renumérote jamais.

## Règles de prononciation (appliquées automatiquement par le script)

- **Apostrophe suivie de é, è ou ê** (l'école, j'étais, l'écharpe) : la voix les lit mal. Le script envoie le mot collé (« lécole », « jétais »), avec un point final pour un mot seul. L'appli affiche toujours la bonne orthographe. Validé à l'oreille par Eric le 2026-11-05.
- **Sons purs** (a, é, ch…) : la voix lit le nom de la lettre, d'où les enregistrements d'Eric dans `audio/sons/`.
- **Mots très courts muets** : le script réessaie avec de la ponctuation (« a. », « è ! »).

Pour refaire un fichier qui sonne mal : supprimer `audio/kore/<n>.mp3` et `audio/charon/<n>.mp3` (le numéro est dans `audio/index.js`), puis relancer le script.

## Réenregistrer un son pur

1. Avec le Dictaphone du téléphone, dire chaque son, en laissant **environ 3 secondes de silence** entre deux sons. Ne rien dire d'autre.
2. Découper :
```bash
python3 tools/decouper_enregistrement.py enregistrement.m4a 15-gn
```
Les noms des fichiers (`01-a` … `20-r`) sont listés à la fin de `SONS` dans `js/contenu.js`.
