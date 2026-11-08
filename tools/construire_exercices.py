"""
Vérifie les exercices de tools/exercices/*.json et écrit beta/js/exercices.js.
À lancer après chaque ajout ou modification d'exercices :
    python3 tools/construire_exercices.py
Un fichier par thème (phrases.json, mots.json…) : { "id-de-la-lecon": [ exercices… ] }.
Types : choisir, completer, ordre, ecouter, vraifaux, associer (voir docs/CONTENU.md).
"""
import glob, json, os, re, subprocess, sys

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
lecons = json.loads(subprocess.check_output(["node", "-e", """
global.window = {}; eval(require("fs").readFileSync(process.argv[1], "utf8").replace("const THEMES", "global.THEMES"));
const o = {}; THEMES.forEach(t => t.lecons.forEach(l => o[l.id] = l.exercices)); console.log(JSON.stringify(o));
""", os.path.join(RACINE, "beta", "js", "lecons.js")]))

def md(t):
    # « / » sépare les lignes (une idée par ligne), comme dans tools/falc/
    parts = [x.strip() for x in t.split(" / ")]
    out, liste = [], []
    for x in parts:
        if x.startswith("- "): liste.append(x); continue
        if liste: out.append("\n".join(liste)); liste = []
        out.append(x)
    if liste: out.append("\n".join(liste))
    return "\n\n".join(out)

erreurs, tout, par_type = [], {}, {}
def err(lid, i, msg): erreurs.append(f"{lid} n°{i + 1} : {msg}")
def cle(e): return e["type"] + "|" + json.dumps(e.get("paires") or e.get("phrase") or e.get("juste"), ensure_ascii=False)

for f in sorted(glob.glob(os.path.join(RACINE, "tools", "exercices", "*.json"))):
    data = json.load(open(f, encoding="utf-8"))
    for lid, exos in data.items():
        if lid not in lecons: erreurs.append(f"{os.path.basename(f)} : leçon inconnue « {lid} »"); continue
        vus = {cle(e) for e in lecons[lid]}
        for i, e in enumerate(exos):
            t = e.get("type")
            par_type[t] = par_type.get(t, 0) + 1
            if not e.get("expl"): err(lid, i, "explication manquante")
            if t == "choisir":
                if not e.get("juste") or not e.get("faux") or e["juste"] == e["faux"]: err(lid, i, "juste / faux à vérifier")
            elif t == "completer":
                if e.get("phrase", "").count("___") != 1: err(lid, i, "la phrase doit contenir ___ une seule fois")
                if e.get("reponse") not in e.get("choix", []): err(lid, i, "la réponse n'est pas dans les choix")
                if len(set(e.get("choix", []))) != len(e.get("choix", [])): err(lid, i, "choix en double")
            elif t == "ordre":
                if len(e.get("phrase", "").split()) < 3: err(lid, i, "phrase trop courte")
            elif t == "ecouter":
                if not e.get("faux") or e.get("phrase") in e["faux"]: err(lid, i, "faux à vérifier")
            elif t == "vraifaux":
                if not isinstance(e.get("vrai"), bool): err(lid, i, "« vrai » doit valoir true ou false")
                if e.get("vrai") is False and not e.get("correction"): err(lid, i, "correction manquante")
                if e.get("vrai") is False and e.get("correction") == e.get("phrase"): err(lid, i, "la correction est identique")
            elif t == "associer":
                p = e.get("paires", [])
                if not 3 <= len(p) <= 5: err(lid, i, "il faut 3 à 5 paires")
                if len({x[0] for x in p}) != len(p) or len({x[1] for x in p}) != len(p): err(lid, i, "un mot apparaît deux fois")
            else:
                err(lid, i, f"type inconnu « {t} »")
            k = cle(e)
            if k in vus: err(lid, i, "exercice en double")
            vus.add(k)
        for e in exos: e["expl"] = md(e.get("expl", ""))
        tout[lid] = exos

if erreurs:
    print("Erreurs :\n- " + "\n- ".join(erreurs)); sys.exit(1)
n = sum(len(v) for v in tout.values())
with open(os.path.join(RACINE, "beta", "js", "exercices.js"), "w", encoding="utf-8") as f:
    f.write("/* Exercices en plus de ceux de js/lecons.js. Généré par tools/construire_exercices.py : ne pas modifier ici,\n   modifier tools/exercices/*.json puis relancer le script. */\n")
    f.write("const EXERCICES_PLUS = " + json.dumps(tout, ensure_ascii=False, indent=1) + ";\n")
print(f"{n} exercices ajoutés dans {len(tout)} leçons. Par type : {par_type}")
