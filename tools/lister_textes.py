"""
Liste tous les textes prononcés par l'appli et les écrit dans tools/textes.json.
À lancer après chaque modification de js/contenu.js, avant tools/generer_audio.py.

Usage (depuis la racine du projet) :
    pip install playwright && python3 -m playwright install chromium   # une seule fois
    python3 tools/lister_textes.py
"""
import asyncio, json, os, subprocess, sys, time

RACINE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PORT = 8799


async def main():
    from playwright.async_api import async_playwright
    serveur = subprocess.Popen([sys.executable, "-m", "http.server", str(PORT)], cwd=RACINE,
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    time.sleep(1)
    try:
        async with async_playwright() as p:
            nav = await p.chromium.launch()
            page = await nav.new_page()
            textes = []
            # La version normale et la version bêta : on garde tous les textes des deux
            for chemin in ("/", "/beta/"):
                await page.goto(f"http://localhost:{PORT}{chemin}")
                await page.wait_for_timeout(500)
                for t in await page.evaluate("allSpeechTexts()"):
                    if t not in textes: textes.append(t)
            await nav.close()
    finally:
        serveur.terminate()
    with open(os.path.join(RACINE, "tools", "textes.json"), "w", encoding="utf-8") as f:
        json.dump(textes, f, ensure_ascii=False, indent=0)
    print(f"{len(textes)} textes, {sum(len(t) for t in textes)} caractères par voix")


asyncio.run(main())
