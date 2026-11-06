# Ajouter ou modifier du contenu

Tout le texte de l'appli est dans **`js/contenu.js`**. On peut le modifier sans toucher au code.

## Les petits codes à connaître

| Écriture | Résultat dans l'appli |
| --- | --- |
| `[mot]` | Un mot mis en valeur (en vert) |
| `[mot1 / mot2 / mot3]` | Un mot **orange** qu'on change en le touchant. Les choix s'affichent dessous |
| `**mot**` | Un mot en gras (homophones, règles de grammaire) |

Exemple :
```js
"Le problème vient [de la batterie / de l'embrayage / des freins].",
```
L'appli affiche « Le problème vient **de la batterie** », avec les deux autres choix en dessous.

## Ajouter une phrase à une situation

Dans `CATEGORIES`, trouver la situation (par exemple `id:"garage"`), puis la bonne section, et ajouter une ligne dans `phrases: [ ... ]` :
```js
"Je vous rappelle dès que j'ai le prix.",
```
N'oubliez pas la **virgule** à la fin de la ligne et les **guillemets droits** `"` autour de la phrase.

## Ajouter une situation

Copier un bloc complet de `CATEGORIES` et changer :
- `id` : un nom court sans espace ni accent (`"pharmacie"`) ;
- `titre` : le nom affiché ;
- `groupe` : `"tous"` (tous les jours), `"maison"` (maison et ville) ou `"travail"` ;
- `sections` : une ou plusieurs listes de phrases. Une section peut avoir un `titre` (il devient un filtre), `sms:true` (bouton copier), `vocab:[...]` (mots à connaître) ou `urgence:"..."` (encadré rouge).

Pour une icône, ajouter l'`id` dans `ICON_CAT` (`js/app.js`).

## Autres contenus

| Constante | Contenu |
| --- | --- |
| `SONS` | Voyelles, nasales, autres sons et paires. Chaque son : `son`, `ecrit`, `mots`, `astuce` |
| `HOMOPHONES` | `titre`, `astuce`, exemples `ex` |
| `CONSTRUIRE`, `CONNECTEURS` | Les leçons « Construire une phrase » |
| `VERBES`, `TEMPS` | La conjugaison (présent, participe passé, auxiliaire, radical de l'imparfait) |
| `QUIZ` | Phrases à trous `___` avec deux choix et la bonne réponse |
| `ORDRE` | Phrases à remettre dans l'ordre |

## Les leçons des 8 thèmes (`js/lecons.js`)

Chaque thème contient une liste de `lecons`. Une leçon ressemble à ceci :
```js
{
 "id": "phrases-2", "titre": "Dire non",
 "mots": [["la cuisine", "la pièce où on prépare les repas"]],   // seulement pour le vocabulaire
 "tableau": null,                                                 // ou un tableau [[en-têtes], [ligne], ...]
 "regle": "Pour dire non, on met **ne** avant le verbe...",
 "astuce": "...", "retenir": "...",
 "exemples": ["Je **ne** sais **pas**.", "..."],
 "exercices": [
  {"type": "choisir", "consigne": "", "juste": "Je ne comprends pas.", "faux": "Je ne pas comprends.", "expl": "..."},
  {"type": "completer", "phrase": "Je ___ suis pas d'accord.", "reponse": "ne", "choix": ["ne", "n'", "pas"], "expl": "..."},
  {"type": "ordre", "phrase": "Je ne parle pas bien français.", "expl": "..."}
 ]
}
```
Le premier élément de `choix` est la bonne réponse : l'appli mélange les choix toute seule.

## Les exercices en plus (`tools/exercices/*.json`)

Chaque leçon a ses 8 exercices de départ (dans `js/lecons.js`) et une réserve d'exercices en plus, un fichier par thème.
L'appli tire **8 exercices au hasard** à chaque leçon, en variant les types. Le bouton « S'entraîner » d'un thème en tire 10.

```json
{"phrases-1": [
  {"type": "ecouter", "phrase": "Je répare le moteur.", "faux": ["Le moteur je répare."], "expl": "..."},
  {"type": "vraifaux", "phrase": "Arrive le bus à huit heures.", "vrai": false, "correction": "Le bus arrive à huit heures.", "expl": "..."},
  {"type": "associer", "consigne": "Reliez qui et ce qu'il fait", "paires": [["Le médecin", "soigne les malades."], ["...", "..."]], "expl": "..."}
]}
```
- `ecouter` : l'appli lit `phrase`, la personne choisit la bonne écriture parmi `phrase` et `faux`.
- `vraifaux` : la phrase est-elle juste ? Si `vrai` vaut `false`, il faut la `correction`.
- `associer` : 3 à 5 paires, chaque mot une seule fois.
- `choisir`, `completer`, `ordre` : comme dans les leçons.

Après une modification : `python3 tools/construire_exercices.py` (il vérifie tout et refuse les erreurs),
puis générer l'audio. Un exercice raté va dans « Mes erreurs » ; il en sort après 2 réussites de suite.

## Après une modification

1. Ouvrir l'appli en local et vérifier le résultat (voir `README.md`).
2. Générer l'audio des nouveaux textes (voir `docs/AUDIO.md`). En attendant, l'appli lit ces textes avec la voix du téléphone.
3. Augmenter la version `CACHE` dans `sw.js`.
4. Commit, et noter la modification dans `JOURNAL.md`.
