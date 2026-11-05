"""
Génère les fichiers audio manquants avec Google Cloud Text-to-Speech (voix Chirp 3 HD).

Usage (depuis la racine du projet) :
    export GOOGLE_TTS_KEY="AIza..."        # la clé n'est JAMAIS écrite dans un fichier du projet
    python3 tools/lister_textes.py          # met à jour tools/textes.json
    python3 tools/generer_audio.py          # crée seulement les fichiers qui manquent

Ce que fait le script :
  1. lit tools/textes.json (la liste de tous les textes prononcés par l'appli) ;
  2. garde les numéros déjà attribués dans audio/index.js (les anciens fichiers ne bougent pas) ;
  3. génère les MP3 manquants pour chaque voix, coupe les silences, vérifie qu'ils ne sont pas muets ;
  4. réécrit audio/index.js et affiche le nombre de caractères envoyés (quota gratuit : 1 million / mois).
"""
import base64, json, os, re, shutil, subprocess, sys, time, urllib.request
from concurrent.futures import ThreadPoolExecutor

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOIX = {"kore": "fr-FR-Chirp3-HD-Kore", "charon": "fr-FR-Chirp3-HD-Charon"}
CLE = os.environ.get("GOOGLE_TTS_KEY", "").strip()
API = "https://texttospeech.googleapis.com/v1/text:synthesize"


# Règle de prononciation : la voix lit mal une apostrophe suivie de é, è ou ê
# (« l'école » sonne faux). On envoie le mot collé (« lécole ») et un point pour les mots seuls.
# Le texte affiché dans l'appli ne change pas : seul ce qui est envoyé à la voix est modifié.
ELISION_E = re.compile(r"(\w)['’]([éèêÉÈÊ])")


def texte_pour_la_voix(t):
    if ELISION_E.search(t):
        t = ELISION_E.sub(r"\1\2", t)
        if not re.search(r"[.?!]$", t):
            t += "."
    return t


def synth(texte, voix, sortie):
    corps = {"input": {"text": texte}, "voice": {"languageCode": "fr-FR", "name": voix}, "audioConfig": {"audioEncoding": "MP3"}}
    req = urllib.request.Request(API, data=json.dumps(corps).encode(), headers={"Content-Type": "application/json", "x-goog-api-key": CLE})
    with urllib.request.urlopen(req, timeout=60) as r:
        open(sortie, "wb").write(base64.b64decode(json.load(r)["audioContent"]))
    return len(texte)


def couper_silences(f):
    tmp = f + ".tmp.mp3"
    af = ("silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.05,areverse,"
          "silenceremove=start_periods=1:start_threshold=-45dB:start_silence=0.12,areverse")
    if subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", f, "-af", af, "-ar", "24000", "-ac", "1", "-b:a", "64k", tmp]).returncode == 0:
        os.replace(tmp, f)


def volume_max(f):
    r = subprocess.run(["ffmpeg", "-hide_banner", "-i", f, "-af", "volumedetect", "-f", "null", "-"], capture_output=True, text=True).stderr
    m = re.search(r"max_volume: ([-\d.]+)", r)
    return float(m.group(1)) if m else -99


def main():
    if not CLE:
        sys.exit("Il manque la clé : export GOOGLE_TTS_KEY=\"AIza...\"")
    if not shutil.which("ffmpeg"):
        sys.exit("ffmpeg est nécessaire (sur Mac : brew install ffmpeg).")
    textes = json.load(open(os.path.join(RACINE, "tools", "textes.json"), encoding="utf-8"))
    chemin_index = os.path.join(RACINE, "audio", "index.js")
    index = {}
    if os.path.exists(chemin_index):
        index = json.loads(re.search(r"= (.*);", open(chemin_index, encoding="utf-8").read(), re.S).group(1))
    suivant = max(index.values(), default=-1) + 1
    for t in textes:
        if t not in index:
            index[t] = suivant
            suivant += 1

    travaux = [(n, t, v) for v in VOIX for t, n in index.items()
               if t in textes and not os.path.exists(os.path.join(RACINE, "audio", v, f"{n}.mp3"))]
    print(f"{len(travaux)} fichiers à créer")
    total, echecs = 0, []

    def faire(job):
        n, t, v = job
        f = os.path.join(RACINE, "audio", v, f"{n}.mp3")
        os.makedirs(os.path.dirname(f), exist_ok=True)
        # Les sons très courts sont parfois muets : on essaie avec de la ponctuation.
        v0 = texte_pour_la_voix(t)
        for essai, texte in enumerate([v0, v0 + ".", v0 + " !", "« " + v0 + " »."]):
            for k in range(5):
                try:
                    n_car = synth(texte, VOIX[v], f)
                    break
                except Exception as e:  # trop de requêtes : on attend un peu
                    time.sleep(5 * (k + 1))
            else:
                echecs.append((t, v)); return 0
            couper_silences(f)
            if volume_max(f) > -30:
                return n_car
        echecs.append((t, v)); return n_car

    with ThreadPoolExecutor(int(os.environ.get("TTS_THREADS", "2"))) as ex:
        for n in ex.map(faire, travaux):
            total += n

    with open(chemin_index, "w", encoding="utf-8") as f:
        f.write("window.AUDIO_INDEX = " + json.dumps(index, ensure_ascii=False) + ";\n")
    print(f"Caractères envoyés : {total}")
    if echecs:
        print("À vérifier à l'oreille ou à refaire :", echecs)


if __name__ == "__main__":
    main()
