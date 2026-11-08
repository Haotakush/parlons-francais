"""
La voix de Plume (ElevenLabs, voix « Manon », modèle eleven_v4).
- tools/plume/repliques.json : chaque réplique {id, groupe, texte (affiché), prompt (avec les intonations [warmly]…)}.
- audio/plume/<id>.mp3 : le fichier généré pour chaque réplique.
Ce script écrit beta/js/plume.js : les groupes de répliques (juste, faux, fin, finmoy)
et PLUME_AUDIO (texte → id) pour les fichiers présents. Sans fichier, l'appli utilise la voix Google.
    python3 tools/construire_plume.py
"""
import json, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
rep = json.load(open(os.path.join(R, "tools", "plume", "repliques.json"), encoding="utf-8"))
groupes, audio, manque = {}, {}, []
for x in rep:
    if x["groupe"]: groupes.setdefault(x["groupe"], []).append(x["texte"])
    if os.path.exists(os.path.join(R, "audio", "plume", x["id"] + ".mp3")): audio[x["texte"]] = x["id"]
    else: manque.append(x["id"])
with open(os.path.join(R, "beta", "js", "plume.js"), "w", encoding="utf-8") as f:
    f.write("/* Répliques de Plume. Généré par tools/construire_plume.py, ne pas modifier ici. */\n")
    f.write("const PLUME = " + json.dumps(groupes, ensure_ascii=False, indent=1) + ";\n")
    f.write("const PLUME_TEXTES = " + json.dumps([x["texte"] for x in rep], ensure_ascii=False) + ";\n")
    f.write("window.PLUME_AUDIO = " + json.dumps(audio, ensure_ascii=False) + ";\n")
print(f"{len(audio)} répliques avec la voix de Plume, {len(manque)} sans : {', '.join(manque) or '-'}")
