"""
Construit le contenu de la bêta :
1. js/lecons.js (version normale) + tools/falc/*.json (règles, astuces et explications en FALC) → beta/js/lecons.js
2. tools/exercices/*.json → beta/js/exercices.js (via construire_exercices.py)
À lancer après chaque modification :  python3 tools/construire_beta.py

Format FALC : dans les textes, « / » sépare les lignes (une idée par ligne). Une ligne qui commence par « - » fait une liste.
"""
import glob, json, os, subprocess, sys
RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def md(t):
    parts = [p.strip() for p in t.split(" / ")]
    out, liste = [], []
    for p in parts:
        if p.startswith("- "): liste.append(p); continue
        if liste: out.append("\n".join(liste)); liste = []
        out.append(p)
    if liste: out.append("\n".join(liste))
    return "\n\n".join(out)

themes = json.loads(subprocess.check_output(["node", "-e", """
global.window = {}; eval(require("fs").readFileSync(process.argv[1], "utf8").replace("const THEMES", "global.THEMES"));
console.log(JSON.stringify(THEMES));""", os.path.join(RACINE, "js", "lecons.js")]))
falc = {}
for f in sorted(glob.glob(os.path.join(RACINE, "tools", "falc", "*.json"))):
    falc.update(json.load(open(f, encoding="utf-8")))
erreurs, n = [], 0
for t in themes:
    for l in t["lecons"]:
        x = falc.get(l["id"])
        if not x: continue
        n += 1
        l["regle"] = md(x["regle"])
        if x.get("astuce"): l["astuce"] = md(x["astuce"])
        if len(x["expl"]) != len(l["exercices"]): erreurs.append(f"{l['id']} : {len(x['expl'])} explications pour {len(l['exercices'])} exercices")
        for e, ex in zip(l["exercices"], x["expl"]): e["expl"] = md(ex)
if erreurs: print("Erreurs :\n- " + "\n- ".join(erreurs)); sys.exit(1)
with open(os.path.join(RACINE, "beta", "js", "lecons.js"), "w", encoding="utf-8") as f:
    f.write("/* Leçons de la bêta : js/lecons.js + textes FALC de tools/falc/. Généré par tools/construire_beta.py, ne pas modifier ici. */\n")
    f.write("const THEMES = " + json.dumps(themes, ensure_ascii=False, indent=1) + ";\n")
print(f"{n} leçons en FALC.")
sys.exit(subprocess.call([sys.executable, os.path.join(RACINE, "tools", "construire_exercices.py")]))
