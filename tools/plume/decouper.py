"""
Découpe une prise ElevenLabs qui contient plusieurs répliques de Plume séparées par [long pause].
    python3 tools/plume/decouper.py prise.mp3 juste-5 faux-4 faux-5 ...
On cherche les silences, on garde les (N-1) plus longs comme points de coupe,
puis chaque morceau est enregistré dans audio/plume/<id>.mp3 (silences du début et de la fin enlevés).
"""
import os, re, subprocess, sys
R = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
src, ids = sys.argv[1], sys.argv[2:]
out = subprocess.run(["ffmpeg", "-hide_banner", "-i", src, "-af", "silencedetect=noise=-38dB:d=0.35", "-f", "null", "-"],
                     capture_output=True, text=True).stderr
starts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", out)]
ends = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", out)]
sil = [(e - s, (s + e) / 2) for s, e in zip(starts, ends) if s > 0.05]
if len(sil) < len(ids) - 1: sys.exit(f"Pas assez de silences : {len(sil)} pour {len(ids)} répliques")
coupes = sorted(m for _, m in sorted(sil, reverse=True)[:len(ids) - 1])
dur = float(re.search(r"Duration: (\d+):(\d+):([\d.]+)", out).group(3)) + 60 * int(re.search(r"Duration: (\d+):(\d+)", out).group(2))
bornes = [0.0] + coupes + [dur]
trim = "silenceremove=start_periods=1:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_threshold=-45dB,areverse,apad=pad_dur=0.1"
for i, n in enumerate(ids):
    dst = os.path.join(R, "audio", "plume", n + ".mp3")
    subprocess.run(["ffmpeg", "-y", "-hide_banner", "-loglevel", "error", "-i", src, "-ss", f"{bornes[i]:.3f}", "-to", f"{bornes[i+1]:.3f}",
                    "-af", trim, "-c:a", "libmp3lame", "-b:a", "96k", dst], check=True)
    print(f"{n} : {bornes[i]:.2f} → {bornes[i+1]:.2f} s")
