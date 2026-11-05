"""
Découpe un enregistrement de plusieurs sons (séparés par des silences d'environ 2-3 s)
en un fichier par son, nettoyé et mis au même volume, dans audio/sons/.

Usage :
    python3 tools/decouper_enregistrement.py enregistrement.m4a 01-a 02-i 03-ou ...
Les noms sont donnés dans l'ordre où les sons ont été dits.
"""
import os, re, subprocess, sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    source, noms = sys.argv[1], sys.argv[2:]
    wav = "/tmp/_enregistrement.wav"
    subprocess.run(["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", source, "-ac", "1", "-ar", "44100", wav], check=True)
    r = subprocess.run(["ffmpeg", "-hide_banner", "-i", wav, "-af", "silencedetect=n=-35dB:d=0.25", "-f", "null", "-"], capture_output=True, text=True).stderr
    fins = [float(x) for x in re.findall(r"silence_end: ([\d.]+)", r)]
    debuts = [float(x) for x in re.findall(r"silence_start: ([\d.]+)", r)]
    if debuts and debuts[0] > 0.05:
        fins.insert(0, 0.0)
    morceaux = [(a, b) for a, b in zip(fins, debuts[1:] + [None]) if b is None or b - a > 0.15]
    print(f"{len(morceaux)} sons trouvés, {len(noms)} noms donnés")
    if len(morceaux) != len(noms):
        sys.exit("Le nombre ne correspond pas : vérifiez les pauses ou la liste des noms.")
    os.makedirs(os.path.join(RACINE, "audio", "sons"), exist_ok=True)
    filtre = "highpass=f=80,afade=t=in:d=0.02,areverse,afade=t=in:d=0.06,areverse,loudnorm=I=-16:TP=-1.5:LRA=7"
    for nom, (a, b) in zip(noms, morceaux):
        args = ["ffmpeg", "-hide_banner", "-loglevel", "error", "-y", "-i", wav, "-ss", f"{max(0, a - 0.06):.3f}"]
        if b is not None:
            args += ["-to", f"{b + 0.12:.3f}"]
        args += ["-af", filtre, "-ar", "44100", "-ac", "1", "-b:a", "96k", os.path.join(RACINE, "audio", "sons", nom + ".mp3")]
        subprocess.run(args, check=True)
        print("  ", nom)


if __name__ == "__main__":
    main()
