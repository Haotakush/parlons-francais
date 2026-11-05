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

## Après une modification

1. Ouvrir l'appli en local et vérifier le résultat (voir `README.md`).
2. Générer l'audio des nouveaux textes (voir `docs/AUDIO.md`). En attendant, l'appli lit ces textes avec la voix du téléphone.
3. Augmenter la version `CACHE` dans `sw.js`.
4. Commit, et noter la modification dans `JOURNAL.md`.
