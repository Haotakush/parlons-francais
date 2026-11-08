"""
Découpe une prise ElevenLabs qui contient plusieurs répliques de Plume à la suite.
    pip install faster-whisper      (une seule fois)
    python3 tools/plume/decouper.py prise.mp3 juste-5 faux-4 faux-5 ...
1. Whisper (sur cet ordinateur, gratuit) transcrit la prise avec l'horaire de chaque mot.
2. On retrouve le premier mot de chaque réplique (textes de tools/plume/repliques.json).
3. On coupe dans le silence juste avant, puis chaque morceau va dans audio/plume/<id>.mp3.
Les pauses d'ElevenLabs ne sont pas assez nettes pour couper sur les silences seuls.
"""
import json, os, re, subprocess, sys, unicodedata
import numpy as np
from faster_whisper import WhisperModel
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
src, ids = sys.argv[1], sys.argv[2:]
textes = {x["id"]: x["texte"] for x in json.load(open(os.path.join(R, "tools", "plume", "repliques.json"), encoding="utf-8"))}
norm = lambda t: "".join(c for c in unicodedata.normalize("NFD", t.lower()) if c.isalnum())
raw = subprocess.run(["ffmpeg", "-loglevel", "error", "-i", src, "-ar", "16000", "-ac", "1", "-f", "f32le", "-"], capture_output=True).stdout
segs, _ = WhisperModel("small", device="cpu", compute_type="int8").transcribe(np.frombuffer(raw, dtype=np.float32), language="fr", word_timestamps=True)
mots = [(w.start, w.end, norm(w.word)) for s in segs for w in s.words]
debuts, k = [], 0
for n in ids:
    premier = norm(re.split(r"[\s']", textes[n])[0])
    while k < len(mots) and not mots[k][2].startswith(premier[:3]): k += 1
    if k >= len(mots): sys.exit(f"Début de « {n} » introuvable")
    debuts.append(k); k += 1
out = subprocess.run(["ffmpeg", "-hide_banner", "-i", src, "-af", "silencedetect=noise=-38dB:d=0.15", "-f", "null", "-"], capture_output=True, text=True).stderr
sil = list(zip([float(x) for x in re.findall(r"silence_start: ([\d.]+)", out)], [float(x) for x in re.findall(r"silence_end: ([\d.]+)", out)]))
coupes = []
for i in debuts[1:]:
    fin_prec, d = mots[i - 1][1], mots[i][0]
    cand = [(s, e) for s, e in sil if fin_prec - 0.15 <= s <= d + 0.2]
    coupes.append((cand[-1][0] + cand[-1][1]) / 2 if cand else (fin_prec + d) / 2)
bornes = [0.0] + coupes + [mots[-1][1] + 1.0]
trim = "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,apad=pad_dur=0.1"
for i, n in enumerate(ids):
    subprocess.run(["ffmpeg", "-y", "-loglevel", "error", "-i", src, "-ss", f"{bornes[i]:.3f}", "-to", f"{bornes[i+1]:.3f}",
                    "-af", trim, "-c:a", "libmp3lame", "-b:a", "96k", os.path.join(R, "audio", "plume", n + ".mp3")], check=True)
    print(f"{n} : {bornes[i]:.2f} → {bornes[i+1]:.2f} s")
