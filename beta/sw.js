// Service worker de la version BÊTA (adresse /beta/). Il ne touche pas aux copies de la version normale.
// Service worker : garde l'appli en mémoire pour qu'elle marche sans internet.
// Après chaque modification de l'appli, augmenter le numéro de version ci-dessous (v5 -> v6...).
const CACHE = "parlons-beta-v9";
const AUDIO_CACHE = "parlons-audio-v3"; // les fichiers audio ne changent pas : on les garde
const FILES = ["./", "./index.html", "./css/style.css", "./js/contenu.js", "./js/lecons.js", "./js/app.js", "./manifest.webmanifest", "./js/exercices.js", "./js/parcours.js", "./js/plume.js", "./img/plume-coucou.webp", "./img/plume-tete-coucou.webp", "./img/plume-complice.webp", "./img/plume-tete-complice.webp", "./img/plume-reflexion.webp", "./img/plume-tete-reflexion.webp", "./img/plume-bravo.webp", "./img/plume-tete-bravo.webp", "./img/plume-joie.webp", "./img/plume-tete-joie.webp", "../audio/index.js"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(
    keys.filter(k => k.startsWith("parlons-beta-") && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);

  // Fichiers audio : d'abord la copie en mémoire (rapide, hors ligne), sinon internet.
  if (url.pathname.includes("/audio/") && url.pathname.endsWith(".mp3")) {
    e.respondWith(
      caches.open(AUDIO_CACHE).then(c => c.match(e.request).then(r => r || fetch(e.request).then(res => {
        if (res.ok) c.put(e.request, res.clone());
        return res;
      })))
    );
    return;
  }

  // Le reste : internet d'abord (pour avoir la dernière version), sinon la copie en mémoire.
  e.respondWith(
    fetch(e.request)
      .then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
        return res;
      })
      .catch(() => caches.match(e.request).then(r => r || caches.match("./index.html")))
  );
});
