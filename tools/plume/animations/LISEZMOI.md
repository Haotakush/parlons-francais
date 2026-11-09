# Plume animée — en réserve (pas encore dans l'appli)

Trois vidéos d'Eric (faites avec Kling), détourées image par image et converties en **WebP animé**.
Ce format garde la transparence et marche sur iPhone comme sur Android.

| Fichier | Contenu | Idée d'usage |
|---|---|---|
| `plume-bonjour.webp` | Coucou de la patte, gros plan | Accueil, écran d'étape |
| `plume-reflechis.webp` | Se gratte le menton, gros plan | Bandeau « mauvaise réponse » |
| `plume-bravo.webp` | Deux pouces levés, en pied | Fin de leçon, arrivée dans une ville |

- Seulement les 3 premières secondes de chaque vidéo, lues en avant puis en arrière (boucle sans à-coup).
- 10 images par seconde, 300 px de haut, environ 600 Ko chacune.
- Fabrication : images extraites avec ffmpeg, fond enlevé avec rembg (modèle isnet-general-use), puis ffmpeg (libwebp_anim).
- Pour les intégrer plus tard : copier dans `beta/img/`, remplacer l'image fixe de Plume à l'endroit voulu, ajouter le fichier à `FILES` dans `beta/sw.js` et augmenter `CACHE`.
