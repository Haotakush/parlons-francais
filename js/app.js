/* =========================================================
   OUTILS
   ========================================================= */
const store = {
  get(k, d){ try{ const v = localStorage.getItem(k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(k, JSON.stringify(v)); }catch(e){} }
};
let slow = store.get("slow", false);
let favs = new Set(store.get("favs", []));

function el(tag, props, ...kids){
  const e = document.createElement(tag);
  if(props) for(const [k, v] of Object.entries(props)){
    if(v == null || v === false) continue;
    if(k === "class") e.className = v;
    else if(k === "html") e.innerHTML = v;
    else if(k.startsWith("on")) e.addEventListener(k.slice(2), v);
    else e.setAttribute(k, v);
  }
  for(const k of kids.flat()){
    if(k == null || k === false) continue;
    e.append(k.nodeType ? k : document.createTextNode(String(k)));
  }
  return e;
}
function esc(s){ return String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])); }
function fmt(s){ return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>"); }
function shuffle(a){ a = a.slice(); for(let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
function toast(msg){
  const t = el("div", {class:"toast"}, msg);
  document.body.append(t);
  setTimeout(() => t.remove(), 2400);
}

/* ---------- Voix ---------- */
let frVoice = null;
function loadVoices(){
  if(!("speechSynthesis" in window)) return;
  const vs = speechSynthesis.getVoices();
  frVoice = vs.find(v => /^fr[-_]FR/i.test(v.lang) && /google/i.test(v.name))
         || vs.find(v => /^fr[-_]FR/i.test(v.lang))
         || vs.find(v => /^fr/i.test(v.lang)) || null;
}
if("speechSynthesis" in window){ loadVoices(); speechSynthesis.onvoiceschanged = loadVoices; }

function cleanForSpeech(t){
  return t.replace(/\*/g, "").replace(/[\[\]]/g, "")
          .replace(/\((?:e|s)\)/g, "")
          .replace(/\b(ils?) \/ elles?\b/g, "$1")
          .replace(/___/g, "")
          .replace(/(\d+) h (\d+)/g, "$1 heures $2")
          .replace(/\s+/g, " ").trim();
}

/* ---------- Fichiers audio (voix Google) ----------
   AUDIO_INDEX (fichier audio/index.js) associe chaque texte à un numéro de fichier.
   Si un texte n'a pas de fichier (phrase ajoutée plus tard), on utilise la voix du téléphone. */
const VOIX = {femme:{id:"kore", label:"👩 Femme"}, homme:{id:"charon", label:"👨 Homme"}};
let voix = store.get("voix", "femme");
if(!VOIX[voix]) voix = "femme";
let player = null, playToken = 0;

function stopAll(){
  playToken++;
  if(player){ player.pause(); player = null; }
  if("speechSynthesis" in window) speechSynthesis.cancel();
}
function speakDevice(clean, done){
  if(!("speechSynthesis" in window)){ toast("La voix n'est pas disponible sur ce téléphone."); done && done(); return; }
  const u = new SpeechSynthesisUtterance(clean);
  u.lang = "fr-FR";
  if(frVoice) u.voice = frVoice;
  u.rate = slow ? 0.6 : 0.95;
  if(done) u.onend = done;
  speechSynthesis.speak(u);
}
/* Lecture rapide : on garde en mémoire les sons de la page affichée */
const audioCache = new Map();
let pageTexts = new Set();
function audioUrl(text){
  if(text.startsWith("rec:")) return "audio/sons/" + text.slice(4) + ".mp3";
  const idx = window.AUDIO_INDEX && window.AUDIO_INDEX[cleanForSpeech(text)];
  return idx == null ? null : "audio/" + VOIX[voix].id + "/" + idx + ".mp3";
}
function getAudio(url){
  let a = audioCache.get(url);
  if(!a){
    a = new Audio(url); a.preload = "auto";
    audioCache.set(url, a);
    if(audioCache.size > 150) audioCache.delete(audioCache.keys().next().value);
  }
  return a;
}
function preloadPage(){
  [...pageTexts].slice(0, 80).forEach(t => { const u = audioUrl(t); if(u) getAudio(u).load(); });
}
function playOne(text, done, token){
  const url = audioUrl(text);
  const clean = cleanForSpeech(text);
  if(!url){ speakDevice(clean, done); return; }
  const a = getAudio(url);
  a.onended = () => { if(token === playToken && done) done(); };
  a.onerror = () => { audioCache.delete(url); if(token === playToken) speakDevice(clean, done); };
  try{ a.currentTime = 0; }catch(e){}
  a.playbackRate = slow ? 0.75 : 1;
  a.preservesPitch = true;
  player = a;
  a.play().catch(() => { if(token === playToken && !text.startsWith("rec:")) speakDevice(clean, done); });
}
function speak(text){ stopAll(); playOne(text, null, playToken); }
function speakSeq(texts){
  stopAll();
  const token = playToken;
  let i = 0;
  const next = () => {
    if(token !== playToken || i >= texts.length) return;
    const t = texts[i++];
    playOne(t, () => setTimeout(next, 350), token);
  };
  next();
}
function copyText(t){
  const done = () => toast("Copié ! Vous pouvez le coller dans un SMS.");
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(t).then(done).catch(() => toast("Impossible de copier."));
  } else toast("Impossible de copier.");
}

/* ---------- Carte phrase (avec mots à changer) ---------- */
function parseTpl(t){
  const parts = [], re = /\[([^\]]+)\]/g;
  let last = 0, m;
  while((m = re.exec(t))){
    if(m.index > last) parts.push(t.slice(last, m.index));
    parts.push({opts: m[1].split("/").map(s => s.trim())});
    last = re.lastIndex;
  }
  if(last < t.length) parts.push(t.slice(last));
  return parts;
}
function hasChoice(t){ return parseTpl(t).some(p => typeof p !== "string" && p.opts.length > 1); }

function conj(v, t){
  const PRON = ["je","tu","il / elle","nous","vous","ils / elles"];
  const AVOIR = VERBES["avoir"].p, ETRE = VERBES["être"].p, ALLER = VERBES["aller"].p;
  const withPron = (i, f) => (i === 0 && /^[aeiouéèêh]/i.test(f)) ? "j'" + f : PRON[i] + " " + f;
  const d = VERBES[v];
  if(t === "present") return d.p.map((f, i) => withPron(i, f));
  if(t === "pc") return (d.aux === "être" ? ETRE : AVOIR).map((a, i) => {
    let pp = d.pp;
    if(d.aux === "être") pp += i < 3 ? "(e)" : (i === 4 ? "(e)(s)" : "(e)s");
    return withPron(i, a + " " + pp);
  });
  if(t === "fp") return ALLER.map((a, i) => withPron(i, a + " " + v));
  return ["ais","ais","ait","ions","iez","aient"].map((e, i) => withPron(i, d.imp + e));
}

const ALL_PHRASES = CATEGORIES.flatMap(c => c.sections.flatMap(s => s.phrases || []));

/* Liste de tous les textes prononcés (sert à générer les fichiers audio) */
function allSpeechTexts(){
  const out = new Set(), add = t => out.add(cleanForSpeech(t));
  const expand = tpl => {
    let res = [""];
    for(const p of parseTpl(tpl)){
      if(typeof p === "string") res = res.map(r => r + p);
      else res = res.flatMap(r => p.opts.map(o => r + o));
    }
    return res;
  };
  CATEGORIES.forEach(c => c.sections.forEach(s => {
    (s.phrases || []).forEach(p => expand(p).forEach(add));
    (s.vocab || []).forEach(add);
  }));
  [...SONS.voyelles, ...SONS.nasales, ...SONS.autres].forEach(s => { add(s.dire || s.mots[0]); s.mots.forEach(add); });
  SONS.paires.forEach(p => p.mots.flat().forEach(add));
  HOMOPHONES.forEach(h => h.ex.forEach(add));
  CONSTRUIRE.forEach(r => r.ex.forEach(add));
  CONNECTEURS.forEach(c => add(c.ex));
  QUIZ.forEach(q => add(q.s.replace("___", q.r)));
  ORDRE.forEach(add);
  Object.keys(VERBES).forEach(v => TEMPS.forEach(t => conj(v, t.id).forEach(add)));
  add("Bonjour, je vais vous aider à parler français.");
  if(typeof ALL_LECONS !== "undefined") ALL_LECONS.forEach(l => {
    l.mots.forEach(([m]) => add(m));
    l.exemples.forEach(x => add(x));
    l.exercices.forEach(e => add(speakable(exoTexte(e))));
  });
  return [...out].filter(Boolean);
}

/* =========================================================
   ICÔNES (dessinées, style trait)
   ========================================================= */
const P = (d, extra = "") => `<svg ${/width=/.test(extra) ? "" : 'width="22" height="22"'} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const ICON = {
  home: P('<path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>'),
  sound: P('<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"/>'),
  soundSm: P('<path d="M11 5L6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/>', 'width="16" height="16"'),
  chat: P('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z"/>'),
  book: P('<path d="M4 19V6a2 2 0 0 1 2-2h13v15H6a2 2 0 0 0-2 2"/><path d="M8 8h7M8 12h5"/>'),
  play: '<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  x: P('<path d="M6 6l12 12M18 6L6 18"/>'),
  back: P('<path d="M15 18l-6-6 6-6"/>'),
  chev: P('<path d="M9 6l6 6-6 6"/>', 'width="18" height="18"'),
  next: P('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  star: P('<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>'),
  starOn: '<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/></svg>',
  copy: P('<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>'),
  replay: P('<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/>'),
  clock: P('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  check: P('<path d="M5 12l5 5L20 7"/>', 'width="44" height="44" stroke-width="2.6"'),
  info: P('<circle cx="12" cy="12" r="9"/><path d="M12 8v4M12 16h.01"/>', 'width="20" height="20"'),
  alert: P('<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17h.01"/>', 'width="20" height="20"'),
  school: P('<path d="M3 10l9-6 9 6v10H3z"/><path d="M9 20v-6h6v6"/>'),
  medical: P('<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M12 8v8M8 12h8"/>'),
  mairie: P('<path d="M4 21h16M5 10h14M12 3l8 5H4z"/><path d="M7 10v8M12 10v8M17 10v8"/>'),
  cart: P('<circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 12h12L22 7H6"/>'),
  wrench: P('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.4-.6-.6-2.4z"/>'),
  help: P('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01"/>'),
  heart: P('<path d="M12 20s-7-4.4-9-9a4.5 4.5 0 0 1 9-3 4.5 4.5 0 0 1 9 3c-2 4.6-9 9-9 9z"/>'),
  phone: P('<path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z"/>'),
  calendar: P('<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>'),
  thought: P('<path d="M7 18a4 4 0 0 1-.8-7.9A6 6 0 0 1 17.7 8 4.5 4.5 0 0 1 17 17H7z"/>'),
  euro: P('<path d="M18 7a6 6 0 1 0 0 10M4 10h9M4 14h9"/>'),
  blocks: P('<rect x="3" y="13" width="8" height="8" rx="1"/><rect x="13" y="13" width="8" height="8" rx="1"/><rect x="8" y="3" width="8" height="8" rx="1"/>'),
  pencil: P('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>'),
  letters: P('<path d="M4 18l4-12 4 12M5.5 14h5"/><path d="M15 10h5l-5 8h5"/>'),
  target: P('<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>'),
  puzzle: P('<path d="M10 3h4v3a2 2 0 1 0 4 0V3h3v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3V3z"/>'),
  flame: P('<path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/>'),
  download: P('<path d="M12 3v12M7 10l5 5 5-5M4 21h16"/>')
};
const ic = (name, cls) => el("span", {class: cls || null, style:"display:inline-flex", html: ICON[name]});
const ICON_CAT = {comprendre:"help", politesse:"heart", telephone:"phone", rendezvous:"calendar", avis:"thought", argent:"euro",
  ecole:"school", medecin:"medical", mairie:"mairie", courses:"cart", garage:"wrench"};

/* =========================================================
   PROFILS, PROGRESSION, TEMPS
   ========================================================= */
/* Les prénoms sont tapés par les utilisateurs et restent sur le téléphone (localStorage).
   Chaque profil a ses propres favoris, réglages, progression et temps. */
const MAX_PROFILS = 2;
let profils = store.get("profils", []).filter(x => x && x.id && x.nom);
let profil = store.get("profil", profils[0] && profils[0].id);
if(!profils.some(x => x.id === profil)) profil = profils[0] && profils[0].id;
const nomProfil = () => (profils.find(x => x.id === profil) || {nom: ""}).nom;
const pkey = k => "p_" + profil + "_" + k;
const pget = (k, d) => store.get(pkey(k), d);
const pset = (k, v) => store.set(pkey(k), v);
function loadProfil(){
  slow = pget("slow", false);
  voix = pget("voix", "femme"); if(!VOIX[voix]) voix = "femme";
  favs = new Set(pget("favs", []));
}
function saveProfils(list){
  profils = list.map((x, i) => ({id: x.id || ("p" + Date.now().toString(36) + i), nom: x.nom.trim()})).filter(x => x.nom);
  store.set("profils", profils);
  if(!profils.some(x => x.id === profil)) profil = profils[0] && profils[0].id;
  store.set("profil", profil);
  loadProfil();
}
function switchProfil(id){ profil = id; store.set("profil", id); loadProfil(); }
loadProfil();
const today = () => Math.floor((Date.now() - new Date().getTimezoneOffset() * 60000) / 86400000);
const prog = () => pget("prog", {day: -1, idx: 0, done: []});
const saveProg = p => pset("prog", p);
function streak(){
  const done = new Set(prog().done);
  let d = today(); if(!done.has(d)) d--;
  let n = 0; while(done.has(d)){ n++; d--; }
  return n;
}
function minutesToday(){ return Math.round(pget("temps_" + today(), 0) / 60); }
setInterval(() => {
  if(document.visibilityState !== "visible" || !profil) return;
  pset("temps_" + today(), pget("temps_" + today(), 0) + 15);
}, 15000);
const DATE_FMT = (() => { try{ return new Intl.DateTimeFormat("fr-FR", {weekday:"long", day:"numeric", month:"long"}); }catch(e){ return null; } })();
const dateText = () => { const s = DATE_FMT ? DATE_FMT.format(new Date()) : ""; return s.charAt(0).toUpperCase() + s.slice(1); };

/* =========================================================
   LEÇON DU JOUR
   ========================================================= */
const ALL_SONS = [...SONS.voyelles, ...SONS.nasales, ...SONS.autres];
const LESSON_CATS = CATEGORIES.filter(c => c.groupe !== "tous").concat(CATEGORIES.filter(c => c.groupe === "tous"));
function lessonPlan(day){
  const off = Math.max(0, profils.findIndex(x => x.id === profil)) * 3;
  const son = ALL_SONS[(day + off) % ALL_SONS.length];
  const homo = HOMOPHONES[(day + off) % HOMOPHONES.length];
  const cat = LESSON_CATS[(day + off) % LESSON_CATS.length];
  const pool = cat.sections.flatMap(s => s.phrases || []);
  const start = (Math.floor(day / LESSON_CATS.length) * 5) % Math.max(1, pool.length);
  const phrases = Array.from({length: Math.min(5, pool.length)}, (_, i) => pool[(start + i) % pool.length]);
  const words = homo.titre.split("/").map(w => w.trim().replace(/^-/, ""));
  let quiz = QUIZ.filter(q => q.c.some(c => words.includes(c.toLowerCase())));
  const seed = day % QUIZ.length;
  quiz = quiz.concat(QUIZ.slice(seed), QUIZ.slice(0, seed)).filter((q, i, a) => a.indexOf(q) === i).slice(0, 3);
  const steps = [{t:"son"}, {t:"homo"}, ...phrases.map((p, i) => ({t:"phrase", p, i, n: phrases.length})), ...quiz.map((q, i) => ({t:"quiz", q, i, n: quiz.length})), {t:"fin"}];
  return {son, homo, cat, phrases, steps};
}
const STEP_GROUP = s => ({son:0, homo:1, phrase:2, quiz:3, fin:4})[s.t];
function lessonState(){
  const p = prog();
  if(p.day !== today()){ p.day = today(); p.idx = 0; saveProg(p); }
  return p;
}

/* =========================================================
   COMPOSANTS
   ========================================================= */
function speakCb(text, cb){ stopAll(); playOne(text, cb, playToken); }

const nbsp = s => s.replace(/ ([?!:;»])/g, "\u00a0$1").replace(/« /g, "«\u00a0");

/* Texte de phrase avec mots à changer. Renvoie le nœud et le texte courant. */
function phraseText(tpl, onChange){
  const parts = parseTpl(tpl), sel = parts.map(() => 0);
  const current = () => parts.map((p, i) => typeof p === "string" ? p : p.opts[sel[i]]).join("");
  const slots = [], chipRows = [];
  const p = el("p");
  parts.forEach((part, i) => {
    if(typeof part === "string"){ p.append(nbsp(part)); return; }
    const multi = part.opts.length > 1;
    const s = el("span", {class:"slot" + (multi ? "" : " fixed")}, part.opts[0]);
    slots[i] = s;
    if(multi){
      s.addEventListener("click", e => { e.stopPropagation(); choose(i, (sel[i] + 1) % part.opts.length); });
      const row = el("div", {class:"chips", style:"gap:6px"}, part.opts.map((o, k) =>
        el("button", {class:"mini" + (k === 0 ? " on" : ""), type:"button", onclick:() => choose(i, k)}, o)));
      chipRows.push(row); slots[i].row = row;
    }
    p.append(s);
  });
  function choose(i, k){
    sel[i] = k; slots[i].textContent = parts[i].opts[k];
    [...slots[i].row.children].forEach((c, j) => c.classList.toggle("on", j === k));
    onChange && onChange(current());
  }
  return {p, chipRows, current, multi: chipRows.length > 0};
}

function phraseCard(tpl, opts = {}){
  const card = el("div", {class:"phrase"});
  const play = () => {
    document.querySelectorAll(".phrase.playing").forEach(c => c.classList.remove("playing"));
    card.classList.add("playing");
    speakCb(t.current(), () => card.classList.remove("playing"));
  };
  const t = phraseText(tpl, play);
  pageTexts.add(t.current());
  t.p.addEventListener("click", play);
  const isFav = () => favs.has(tpl);
  const fav = el("button", {class:"ghost" + (isFav() ? " on" : ""), type:"button", "aria-label": isFav() ? "Retirer des favoris" : "Ajouter aux favoris", html: isFav() ? ICON.starOn : ICON.star});
  fav.addEventListener("click", () => {
    if(isFav()) favs.delete(tpl); else favs.add(tpl);
    pset("favs", [...favs]);
    fav.classList.toggle("on", isFav()); fav.innerHTML = isFav() ? ICON.starOn : ICON.star;
    fav.setAttribute("aria-label", isFav() ? "Retirer des favoris" : "Ajouter aux favoris");
    toast(isFav() ? "Ajouté aux favoris" : "Retiré des favoris");
  });
  const actions = el("div", {class:"actions"}, fav,
    opts.copy ? el("button", {class:"ghost", type:"button", "aria-label":"Copier le message", html: ICON.copy, onclick:() => copyText(t.current())}) : null);
  card.append(
    el("button", {class:"play", type:"button", "aria-label":"Écouter", html: ICON.play, onclick: play}),
    el("div", {class:"ptext"}, t.p, t.chipRows),
    actions);
  return card;
}

function exLine(s){
  pageTexts.add(s);
  return el("button", {class:"ex", type:"button", onclick:() => speak(s)}, ic("soundSm"), el("span", {html: nbsp(fmt(s))}));
}
function wordChip(w){
  pageTexts.add(w);
  return el("button", {class:"chip", type:"button", onclick:() => speak(w)}, ic("soundSm"), w);
}
function seg(options, value, onPick, label){
  return el("div", {class:"seg", role:"tablist", "aria-label": label || null}, options.map(([k, txt]) =>
    el("button", {type:"button", role:"tab", "aria-selected": String(k === value), class: k === value ? "on" : null, onclick:() => onPick(k)}, txt)));
}
function listRow(href, iconName, label, sub){
  return el("a", {href}, ic(iconName, "lic"),
    el("span", {class:"grow"}, label, sub ? el("div", {class:"soft", style:"font-weight:400"}, sub) : null),
    ic("chev", "chev"));
}
function pageHead(title){
  return el("div", {class:"pagehead"},
    el("button", {class:"iconbtn", type:"button", "aria-label":"Retour", html: ICON.back, onclick: goBack}),
    el("h1", null, title));
}
function goBack(){ if(history.length > 1) history.back(); else location.hash = "#/"; }

/* =========================================================
   PAGES
   ========================================================= */
/* =========================================================
   APPRENDRE : les 8 thèmes (contenu dans js/lecons.js)
   ========================================================= */
Object.assign(ICON, {
  scale: P('<path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 0 0 6 0zM18 7l-3 7a3 3 0 0 0 6 0z"/>'),
  spell: P('<path d="M3 16l3.5-9L10 16M4.3 13h4.4"/><path d="M13 13l3 3 5-6"/>'),
  quote: P('<path d="M7 7h4v4c0 3-2 5-4 6M15 7h4v4c0 3-2 5-4 6"/>'),
  checkSm: P('<path d="M5 12l5 5L20 7"/>', 'width="18" height="18" stroke-width="2.6"'),
  lock: P('<circle cx="12" cy="12" r="9"/>', 'width="18" height="18"')
});
const ALL_LECONS = THEMES.flatMap(t => t.lecons.map(l => Object.assign(l, {theme: t})));
const leconsFaites = () => pget("lecons", {});
const leconFaite = id => !!leconsFaites()[id];
function marquerLecon(id){ const f = leconsFaites(); f[id] = today(); pset("lecons", f); }
const nbFaites = t => t.lecons.filter(l => leconFaite(l.id)).length;
const prochaineLecon = () => ALL_LECONS.find(l => !leconFaite(l.id)) || null;

/* Texte complet d'un exercice (ce qui est lu à voix haute) */
function exoTexte(e){
  if(e.type === "choisir") return e.juste;
  if(e.type === "completer") return e.phrase.replace("___", e.reponse).replace(/(['’]) /g, "$1");
  return e.phrase;
}
const speakable = t => t.replace(/\s*→\s*/g, ", ");

/* Petit rendu markdown : paragraphes, listes « - », gras ** */
function mdBlock(md){
  const out = el("div", {class:"md"});
  md.split(/\n\s*\n/).forEach(par => {
    const lines = par.split("\n").filter(l => l.trim());
    if(!lines.length) return;
    if(lines.every(l => /^\s*-\s/.test(l))){
      out.append(el("ul", null, lines.map(l => el("li", {html: nbsp(fmt(l.replace(/^\s*-\s/, "")))}))));
    } else {
      out.append(el("p", {html: nbsp(fmt(lines.join(" ")))}));
    }
  });
  return out;
}
function tableBlock(rows){
  return el("div", {class:"tablewrap"}, el("table", {class:"tbl"},
    el("thead", null, el("tr", null, rows[0].map(c => el("th", {html: fmt(c)})))),
    el("tbody", null, rows.slice(1).map(r => el("tr", null, r.map((c, i) => el(i ? "td" : "th", {html: fmt(c)})))))));
}

/* Un exercice : choisir / compléter / remettre dans l'ordre.
   onAnswer(juste) est appelé une fois, après la réponse. */
function exercice(e, onAnswer){
  const full = exoTexte(e);
  pageTexts.add(speakable(full));
  const fb = el("div", {class:"stack", style:"gap:10px"});
  const feedback = good => {
    fb.replaceChildren(
      el("div", {class: "note" + (good ? "" : " ko")}, ic(good ? "info" : "alert"),
        el("span", {html: good ? "Bravo, c'est juste !" : "La bonne réponse : « " + esc(full) + " »"})),
      el("div", {class:"card expl"}, el("b", null, "Pourquoi ?"), el("p", {html: nbsp(fmt(e.expl))})));
    speak(speakable(full));
    onAnswer(good);
  };
  if(e.type === "choisir" || e.type === "completer"){
    let answered = false, choices;
    const opts = e.type === "choisir" ? shuffle([e.juste, e.faux]) : shuffle(e.choix);
    const right = e.type === "choisir" ? e.juste : e.reponse;
    choices = opts.map(c => {
      const b = el("button", {class:"choice" + (e.type === "choisir" ? " long" : ""), type:"button"}, c);
      b.addEventListener("click", () => {
        if(answered) return; answered = true;
        const good = c === right;
        b.classList.add(good ? "ok" : "ko");
        if(!good) choices.find(x => x.textContent === right).classList.add("ok");
        feedback(good);
      });
      return b;
    });
    const parts = e.type === "completer" ? e.phrase.split("___") : null;
    return el("div", {class:"stack"},
      el("h1", {style:"font-size:24px"}, e.type === "choisir" ? (!e.consigne ? "Quelle phrase est juste ?" : /^(la|le|les)\b/.test(e.consigne) ? "Choisissez " + e.consigne : "Quelle phrase est juste, " + e.consigne + " ?") : "Complétez la phrase"),
      parts ? el("div", {class:"card"}, el("div", {class:"qsentence"}, parts[0], el("span", {class:"blank"}, "?"), parts[1] || "")) : null,
      el("div", {class: e.type === "choisir" ? "stack" : "choices", style: e.type === "choisir" ? "gap:10px" : null}, choices),
      fb);
  }
  // remettre dans l'ordre
  const tokenize = s => s.split(" ").reduce((acc, w) => {
    if(/^[?!:;,.]$/.test(w) && acc.length) acc[acc.length - 1] += " " + w; else acc.push(w);
    return acc;
  }, []);
  const words = tokenize(e.phrase);
  let bank = shuffle(words.map((w, k) => ({w, k})));
  if(words.length > 1 && bank.every((b, k) => b.k === k)) bank.reverse();
  let answer = [], done = false;
  const ansBox = el("div", {class:"answer"}), bankBox = el("div", {class:"bank"}), row = el("div", {class:"stats"});
  function draw(){
    ansBox.replaceChildren(...answer.map((b, idx) => el("button", {class:"word", type:"button", onclick:() => { if(done) return; answer.splice(idx, 1); bank.push(b); draw(); }}, b.w)));
    bankBox.replaceChildren(...bank.map((b, idx) => el("button", {class:"word", type:"button", onclick:() => { if(done) return; bank.splice(idx, 1); answer.push(b); draw(); }}, b.w)));
  }
  let essais = 0;
  function check(){
    if(bank.length){ fb.replaceChildren(el("div", {class:"note warm"}, ic("info"), "Placez tous les mots.")); return; }
    const good = answer.map(b => b.w).join(" ") === words.join(" ");
    essais++;
    if(good || essais >= 2){
      done = true;
      if(!good){ answer = words.map((w, k) => ({w, k})); bank = []; draw(); }
      ansBox.className = "answer " + (good ? "ok" : "ko");
      row.replaceChildren();
      feedback(good);
    } else {
      ansBox.className = "answer"; void ansBox.offsetWidth; ansBox.className = "answer ko";
      fb.replaceChildren(el("div", {class:"note ko"}, ic("alert"), "Pas tout à fait. Écoutez la phrase et réessayez."));
    }
  }
  row.append(
    el("button", {class:"btn outline", type:"button", onclick:() => speak(e.phrase)}, el("span", {html: ICON.sound}), "Écouter"),
    el("button", {class:"btn", type:"button", onclick: check}, "Vérifier"));
  draw();
  return el("div", {class:"stack"},
    el("h1", {style:"font-size:24px"}, "Remettez les mots dans l'ordre"),
    ansBox, bankBox, row, fb);
}

const app = document.getElementById("app");
let deferredInstall = null;

function profilForm(intro, bouton){
  const vals = [0, 1].map(i => (profils[i] && profils[i].nom) || "");
  const inputs = vals.map((v, i) => el("input", {type:"text", id:"nom" + i, value: v, maxlength:"30", autocomplete:"off", autocapitalize:"words",
    placeholder: i === 0 ? "Votre prénom" : "Facultatif", class:"field"}));
  const err = el("div");
  const submit = () => {
    const noms = inputs.map(x => x.value.trim());
    if(!noms[0] && !noms[1]){ err.replaceChildren(el("div", {class:"note ko"}, ic("alert"), "Écrivez au moins un prénom.")); inputs[0].focus(); return; }
    saveProfils(noms.map((nom, i) => ({id: profils[i] && profils[i].id, nom})).filter(x => x.nom));
    location.hash = "#/"; render();
  };
  return el("form", {class:"stack", onsubmit: e => { e.preventDefault(); submit(); }},
    intro,
    el("div", {class:"card stack", style:"gap:14px"},
      el("div", {class:"setting"}, el("label", {for:"nom0"}, "Premier prénom"), inputs[0]),
      el("div", {class:"setting"}, el("label", {for:"nom1"}, "Deuxième prénom"), inputs[1]),
      el("p", {class:"soft", style:"margin:0"}, "Les prénoms restent sur ce téléphone. Ils ne sont envoyés nulle part.")),
    err,
    el("button", {class:"btn", type:"submit"}, bouton));
}

const PAGES = {
  bienvenue(){
    return {kids:[profilForm(el("div", {class:"stack", style:"gap:10px;margin-top:20px"},
      el("div", {class:"done", html: ICON.chat.replace('width="22" height="22"', 'width="44" height="44"')}),
      el("h1", {style:"text-align:center"}, "Bienvenue"),
      el("p", {class:"muted", style:"text-align:center;margin:0"}, "Qui va apprendre avec l'application ? Écrivez un ou deux prénoms.")), "Commencer")]};
  },

  profils(){
    return {kids:[pageHead("Les prénoms"), profilForm(el("p", {class:"muted", style:"margin:0"},
      "Modifiez les prénoms. Si vous effacez un prénom, sa progression et ses favoris restent enregistrés sur le téléphone."), "Enregistrer")]};
  },

  accueil(){
    const plan = lessonPlan(today()), st = lessonState();
    const total = plan.steps.length - 1, idx = Math.min(st.idx, total);
    const finished = st.idx >= total;
    const groupNow = finished ? 4 : STEP_GROUP(plan.steps[idx]);
    const desc = "Le son « " + plan.son.son + " », l'homophone " + plan.homo.titre + " et " + plan.phrases.length + " phrases utiles.";
    const kids = [
      el("div", {class:"row", style:"justify-content:space-between;flex-wrap:wrap"},
        el("span", {class:"muted", style:"font-size:15px;font-weight:600"}, dateText()),
        profils.length > 1 ? seg(profils.map(x => [x.id, x.nom]), profil, k => { switchProfil(k); render(); }, "Qui apprend ?") : null),
      el("h1", {style:"font-size:34px;letter-spacing:-.8px"}, "Bonjour " + nomProfil()),
      el("div", {class:"card lesson stack", style:"gap:14px"},
        el("div", {class:"row", style:"justify-content:space-between"},
          el("span", {class:"badge"}, "Leçon du jour"),
          el("span", {class:"muted", style:"font-size:14px;font-weight:600"}, finished ? "Terminée" : "Étape " + (groupNow + 1) + " sur 4")),
        el("div", {class:"stack", style:"gap:6px"}, el("h3", null, plan.cat.titre), el("span", {class:"muted"}, desc)),
        el("div", {class:"bar", role:"progressbar", "aria-label":"Progression de la leçon", "aria-valuenow": String(Math.round(idx / total * 100)), "aria-valuemin":"0", "aria-valuemax":"100"},
          el("div", {style:"width:" + Math.round(idx / total * 100) + "%"})),
        el("a", {href:"#/lecon", class:"btn"}, el("span", {html: ICON.play}),
          finished ? "Refaire la leçon" : idx === 0 ? "Commencer la leçon" : "Continuer la leçon")),
      el("div", {class:"stats"},
        el("div", {class:"stat"}, el("span", null, "Série"), el("b", null, streak() + (streak() > 1 ? " jours" : " jour"))),
        el("div", {class:"stat"}, el("span", null, "Aujourd'hui"), el("b", null, minutesToday() + " min"))),
      (() => { const nx = prochaineLecon(); return el("a", {href: nx ? "#/lecont/" + nx.id : "#/apprendre", class:"card row", style:"color:var(--fg)"},
        el("span", {class:"lic", style:"display:inline-flex;color:var(--primary)", html: ICON.book}),
        el("span", {class:"grow stack", style:"gap:2px"}, el("b", null, nx ? "Apprendre : " + nx.titre : "Apprendre"),
          el("span", {class:"soft"}, nx ? nx.theme.titre + " · " + ALL_LECONS.filter(l => leconFaite(l.id)).length + " leçons sur " + ALL_LECONS.length : "Toutes les leçons sont faites")),
        ic("chev", "chev")); })(),
      el("h2", null, "Situations"),
      el("div", {class:"list"}, CATEGORIES.filter(c => c.groupe !== "tous").map(c => listRow("#/cat/" + c.id, ICON_CAT[c.id] || "chat", c.titre)),
        listRow("#/phrases", "chat", "Tous les jours", "Politesse, téléphone, rendez-vous…")),
      el("h2", null, "Réglages"),
      el("div", {class:"card stack", style:"gap:14px"},
        el("div", {class:"setting"}, el("label", null, "Voix"),
          seg([["femme","Femme"],["homme","Homme"]], voix, k => { voix = k; pset("voix", k); render(); speak("Bonjour, je vais vous aider à parler français."); }, "Voix")),
        el("div", {class:"setting"}, el("label", null, "Vitesse"),
          seg([[false,"Normale"],[true,"Lente"]], slow, k => { slow = k; pset("slow", k); render(); }, "Vitesse")),
        el("p", {class:"soft", style:"margin:0"}, "Ces réglages sont propres à " + nomProfil() + "."),
        el("a", {href:"#/profils", class:"btn outline"}, "Modifier les prénoms"))
    ];
    if(deferredInstall) kids.push(el("button", {class:"btn outline", type:"button", onclick: async () => {
      deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall = null; render();
    }}, el("span", {html: ICON.download}), "Installer l'appli sur le téléphone"));
    if(!("speechSynthesis" in window) && !window.AUDIO_INDEX) kids.unshift(el("div", {class:"note ko"}, "La voix n'est pas disponible. Ouvrez l'appli avec Chrome."));
    return {kids};
  },

  lecon(){
    document.body.classList.add("immersive");
    const plan = lessonPlan(today()), st = lessonState();
    if(st.idx >= plan.steps.length - 1) { st.idx = 0; saveProg(st); }
    const wrap = el("div", {class:"stack", style:"min-height:calc(100vh - 44px);min-height:calc(100dvh - 44px)"});
    function go(i){
      const p = prog(); p.idx = i;
      if(plan.steps[i].t === "fin" && !p.done.includes(today())) p.done.push(today());
      p.done = p.done.slice(-60); saveProg(p);
      draw();
    }
    function draw(){
      stopAll();
      const i = prog().idx, s = plan.steps[i], g = STEP_GROUP(s);
      const top = el("div", {class:"row", style:"gap:14px"},
        el("a", {href:"#/", class:"iconbtn", "aria-label":"Fermer la leçon", html: ICON.x}),
        el("div", {class:"lessonbar", "aria-label":"Étape " + Math.min(g + 1, 4) + " sur 4"}, [0,1,2,3].map(k => el("div", {class: k < g || (k === g && s.t !== "fin") ? "on" : null}))));
      const next = (label, enabled = true) => el("div", {class:"footer"},
        el("button", {class:"btn", type:"button", disabled: !enabled, onclick:() => go(i + 1)}, label, el("span", {html: ICON.next})));
      let body = [], foot;
      const head = (k, title) => el("div", {class:"stack", style:"gap:6px;margin-top:8px"}, el("span", {class:"muted", style:"font-size:14px;font-weight:600"}, k), el("h1", {style:"font-size:27px"}, title));

      if(s.t === "son"){
        const so = plan.son, rec = "rec:" + so.rec;
        const big = el("button", {class:"bigplay", type:"button", "aria-label":"Écouter le son " + so.son, style:"font-size:40px;font-weight:700"}, so.son);
        big.addEventListener("click", () => { big.classList.add("pulse"); speakCb(rec, () => big.classList.remove("pulse")); });
        body = [head("Étape 1 · Le son du jour", "Écoutez le son, puis répétez-le"),
          el("div", {class:"card stack center", style:"gap:18px;padding:26px 20px"}, big,
            el("span", {class:"muted"}, "S'écrit : ", el("b", {style:"color:var(--fg)"}, so.ecrit)),
            so.astuce ? el("div", {class:"note", style:"text-align:left;width:100%"}, ic("info"), so.astuce) : null),
          el("h2", null, "Dans des mots"), el("div", {class:"chips"}, so.mots.map(wordChip))];
        foot = next("J'ai répété, suivant");
        setTimeout(() => big.click(), 350);
      }
      if(s.t === "homo"){
        const h = plan.homo;
        body = [head("Étape 2 · L'homophone du jour", h.titre),
          el("div", {class:"note warm"}, ic("info"), el("span", {html: fmt(h.astuce)})),
          el("div", {class:"card"}, h.ex.map(exLine)),
          el("p", {class:"soft", style:"margin:0"}, "Touchez une phrase pour l'écouter.")];
        foot = next("Suivant");
      }
      if(s.t === "phrase"){
        const big = el("button", {class:"bigplay", type:"button", "aria-label":"Écouter la phrase", html: ICON.sound.replace('width="22" height="22"', 'width="46" height="46"')});
        const play = (rate) => { big.classList.add("pulse"); const old = slow; if(rate) slow = true; speakCb(t.current(), () => big.classList.remove("pulse")); slow = old; };
        const t = phraseText(s.p, () => play());
        big.addEventListener("click", () => play());
        t.p.classList.add("lp"); t.p.addEventListener("click", () => play());
        body = [head("Étape 3 · " + plan.cat.titre, "Écoutez, puis répétez à voix haute"),
          el("div", {class:"card stack center", style:"gap:20px;padding:26px 20px"}, big, t.p,
            t.multi ? el("div", {class:"stack", style:"gap:8px;align-items:center"}, el("span", {class:"soft"}, "Touchez le mot orange pour le changer"), t.chipRows) : null),
          el("div", {class:"stats"},
            el("button", {class:"btn outline", type:"button", onclick:() => play()}, el("span", {html: ICON.replay}), "Réécouter"),
            el("button", {class:"btn outline", type:"button", onclick:() => play(true)}, el("span", {html: ICON.clock}), "Plus lent")),
          el("div", {class:"note"}, ic("info"), "Phrase " + (s.i + 1) + " sur " + s.n + ". Répétez-la deux fois avant de continuer.")];
        foot = next("J'ai répété, suivant");
        setTimeout(() => play(), 350);
      }
      if(s.t === "quiz"){
        const q = s.q, full = q.s.replace("___", q.r), parts = q.s.split("___");
        let answered = false;
        const fb = el("div");
        const foot2 = next("Suivant", false);
        const choices = shuffle(q.c).map(c => {
          const b = el("button", {class:"choice", type:"button"}, c);
          b.addEventListener("click", () => {
            if(answered) return; answered = true;
            const good = c === q.r;
            b.classList.add(good ? "ok" : "ko");
            if(!good) choices.find(x => x.textContent === q.r).classList.add("ok");
            fb.replaceChildren(el("div", {class: "note" + (good ? "" : " ko")}, ic(good ? "info" : "alert"), good ? "Bravo, c'est juste !" : "La bonne réponse : « " + full + " »"));
            speak(full);
            foot2.querySelector("button").disabled = false;
          });
          return b;
        });
        body = [head("Étape 4 · Petit quiz (" + (s.i + 1) + " sur " + s.n + ")", "Choisissez le bon mot"),
          el("div", {class:"card"}, el("div", {class:"qsentence"}, parts[0], el("span", {class:"blank"}, "?"), parts[1])),
          el("div", {class:"choices"}, choices), fb];
        foot = foot2;
      }
      if(s.t === "fin"){
        body = [el("div", {class:"done", html: ICON.check}),
          el("h1", {style:"text-align:center"}, "Bravo " + nomProfil() + " !"),
          el("p", {class:"muted", style:"text-align:center;margin:0"}, "La leçon du jour est terminée. Revenez demain pour une nouvelle leçon."),
          el("div", {class:"stats"},
            el("div", {class:"stat"}, el("span", null, "Série"), el("b", null, streak() + (streak() > 1 ? " jours" : " jour"))),
            el("div", {class:"stat"}, el("span", null, "Aujourd'hui"), el("b", null, minutesToday() + " min")))];
        const nx = prochaineLecon();
        foot = el("div", {class:"footer"},
          nx ? el("a", {href:"#/lecont/" + nx.id, class:"btn"}, "Continuer avec : " + nx.titre) : null,
          el("a", {href:"#/", class: nx ? "btn outline" : "btn", style: nx ? "margin-top:10px" : null}, "Retour à l'accueil"));
      }
      wrap.replaceChildren(top, ...body, el("div", {class:"grow"}), foot);
      window.scrollTo(0, 0);
    }
    draw();
    return {kids:[wrap]};
  },

  sons(){
    let tab = pget("sonTab", "voyelles"), pick = pget("sonPick", 0);
    const wrap = el("div", {class:"stack"});
    function draw(){
      pset("sonTab", tab); pset("sonPick", pick);
      const tabs = seg([["voyelles","Voyelles"],["nasales","Nasales"],["autres","Autres"],["paires","Paires"]], tab, k => { tab = k; pick = 0; stopAll(); draw(); }, "Famille de sons");
      if(tab === "paires"){
        wrap.replaceChildren(el("h1", null, "Les sons"), tabs,
          el("p", {class:"muted", style:"margin:0"}, "Écoutez les deux mots, puis répétez-les."),
          ...SONS.paires.map(p => el("div", {class:"card"},
            el("h2", {style:"margin-bottom:6px"}, p.titre),
            ...p.mots.map(([a, b]) => el("div", {class:"paire"}, wordChip(a), el("span", {class:"vs"}, "ou"), wordChip(b),
              el("button", {class:"mini on", type:"button", onclick:() => speakSeq([a, b])}, "Les deux"))))));
        return;
      }
      const list = SONS[tab]; if(pick >= list.length) pick = 0;
      const s = list[pick];
      list.forEach(x => x.rec && pageTexts.add("rec:" + x.rec));
      const pair = SONS.paires.find(p => p.titre.split("/").map(w => w.trim()).includes(s.son));
      const detail = el("div", {class:"card hl stack", style:"gap:14px"},
        el("div", {class:"sonhead"},
          el("button", {class:"sonbig", type:"button", "aria-label":"Écouter le son " + s.son, onclick:() => speak(s.rec ? "rec:" + s.rec : s.mots[0])}, s.son),
          el("div", {class:"stack", style:"gap:4px"},
            el("span", {class:"muted", style:"font-size:15px"}, "S'écrit : ", el("b", {style:"color:var(--fg)"}, s.ecrit)),
            s.astuce ? el("span", {class:"muted", style:"font-size:15px"}, s.astuce) : null)),
        el("div", {class:"chips"}, s.mots.map(wordChip)),
        pair ? el("div", {class:"row sep"}, el("span", {class:"soft grow"}, "Ne pas confondre"),
          el("button", {class:"mini on", type:"button", onclick:() => speakSeq(pair.mots[0])}, pair.mots[0].join(" / "))) : null);
      const grid = el("div", {class:"songrid"}, list.map((x, k) =>
        el("button", {type:"button", class: k === pick ? "on" : null, "aria-pressed": String(k === pick), onclick:() => { pick = k; draw(); speak(x.rec ? "rec:" + x.rec : x.mots[0]); }},
          el("b", null, x.son), el("span", null, x.mots[0]))));
      wrap.replaceChildren(el("h1", null, "Les sons"), tabs, detail, grid);
      preloadPage();
    }
    draw();
    return {kids:[wrap]};
  },

  phrases(){
    const grp = (titre, g) => [el("h2", null, titre), el("div", {class:"list"},
      CATEGORIES.filter(c => c.groupe === g).map(c => listRow("#/cat/" + c.id, ICON_CAT[c.id] || "chat", c.titre)))];
    return {kids:[el("h1", null, "Phrases"),
      el("p", {class:"muted", style:"margin:0"}, "Des phrases prêtes à écouter et à répéter."),
      ...grp("Tous les jours", "tous"), ...grp("À la maison et en ville", "maison"), ...grp("Au travail", "travail"),
      el("div", {class:"list"}, listRow("#/favoris", "star", "Mes favoris"))]};
  },

  cat(id){
    const c = CATEGORIES.find(x => x.id === id);
    if(!c) return PAGES.phrases();
    const titled = c.sections.filter(s => s.titre && s.phrases);
    let pick = titled.length > 1 ? titled[0].titre : null;
    const wrap = el("div", {class:"stack"});
    function draw(){
      const kids = [pageHead(c.titre)];
      if(pick) kids.push(el("div", {class:"chips scroll"}, titled.map(s =>
        el("button", {class:"pill" + (s.titre === pick ? " on" : ""), type:"button", "aria-pressed": String(s.titre === pick), onclick:() => { pick = s.titre; stopAll(); draw(); }}, s.titre))));
      const shown = c.sections.filter(s => !pick || !s.phrases || s.titre === pick);
      let texts = [];
      shown.forEach(s => {
        if(s.urgence) kids.push(el("div", {class:"note ko"}, ic("alert"), s.urgence));
        if(s.titre && !s.phrases) kids.push(el("h2", null, s.titre));
        if(s.sms) kids.push(el("div", {class:"note"}, ic("info"), "Touchez l'icône copier pour mettre le message dans un SMS."));
        (s.phrases || []).forEach(p => { kids.push(phraseCard(p, {copy: !!s.sms})); texts.push(parseTpl(p).map(x => typeof x === "string" ? x : x.opts[0]).join("")); });
        if(s.vocab) kids.push(el("div", {class:"chips vocab"}, s.vocab.map(wordChip)));
      });
      kids.push(el("div", {class:"stats"},
        el("button", {class:"btn outline", type:"button", onclick:() => speakSeq(texts)}, el("span", {html: ICON.play}), "Tout écouter"),
        el("a", {class:"btn", href:"#/ordre"}, el("span", {html: ICON.puzzle}), "S'entraîner")));
      wrap.replaceChildren(...kids);
      preloadPage();
    }
    draw();
    return {kids:[wrap]};
  },

  favoris(){
    const list = [...favs];
    return {kids:[pageHead("Mes favoris"), ...(list.length
      ? list.map(p => phraseCard(p, {copy:true}))
      : [el("div", {class:"empty"}, "Pas encore de favoris. Touchez l'étoile à côté d'une phrase pour la garder ici.")])]};
  },

  apprendre(){
    const next = prochaineLecon();
    return {kids:[el("h1", null, "Apprendre"),
      el("p", {class:"muted", style:"margin:0"}, "8 thèmes pour tout apprendre, une petite leçon à la fois."),
      next ? el("a", {href:"#/lecont/" + next.id, class:"card stack", style:"gap:10px;color:var(--fg)"},
        el("span", {class:"badge"}, "Prochaine leçon"),
        el("b", {style:"font-size:20px"}, next.titre),
        el("span", {class:"muted"}, next.theme.titre),
        el("span", {class:"btn"}, el("span", {html: ICON.play}), "Commencer")) : el("div", {class:"note"}, ic("info"), "Bravo, toutes les leçons sont faites ! Vous pouvez les refaire quand vous voulez."),
      el("h2", null, "Les thèmes"),
      el("div", {class:"list"}, THEMES.map((t, i) => {
        const n = nbFaites(t), tot = t.lecons.length;
        return el("a", {href:"#/theme/" + t.id}, el("span", {class:"lic", style:"display:inline-flex", html: ICON[t.icone] || ICON.book}),
          el("span", {class:"grow stack", style:"gap:6px"},
            el("span", null, (i + 1) + ". " + t.titre),
            el("span", {class:"row", style:"gap:8px"},
              el("span", {class:"bar grow"}, el("div", {style:"width:" + Math.round(n / tot * 100) + "%"})),
              el("span", {class:"soft", style:"font-size:13px;white-space:nowrap"}, n + " / " + tot))),
          ic("chev", "chev"));
      })),
      el("h2", null, "Révisions"),
      el("div", {class:"list"},
        listRow("#/conjugaison", "pencil", "Tableau de conjugaison", "16 verbes, 4 temps"),
        listRow("#/quiz", "target", "Quiz homophones", "10 questions"),
        listRow("#/ordre", "puzzle", "Remettre dans l'ordre", "5 phrases"),
        listRow("#/favoris", "star", "Mes favoris"))]};
  },

  theme(id){
    const t = THEMES.find(x => x.id === id);
    if(!t) return PAGES.apprendre();
    const n = nbFaites(t);
    return {kids:[pageHead(t.titre),
      el("p", {class:"soft", style:"margin:0"}, t.officiel),
      el("div", {class:"row"}, el("div", {class:"bar grow"}, el("div", {style:"width:" + Math.round(n / t.lecons.length * 100) + "%"})),
        el("span", {class:"soft"}, n + " leçon" + (n > 1 ? "s" : "") + " sur " + t.lecons.length)),
      el("div", {class:"list"}, t.lecons.map((l, i) => {
        const fait = leconFaite(l.id);
        return el("a", {href:"#/lecont/" + l.id},
          el("span", {class:"num" + (fait ? " ok" : ""), html: fait ? ICON.checkSm : String(i + 1)}),
          el("span", {class:"grow"}, l.titre, el("div", {class:"soft", style:"font-weight:400"}, fait ? "Faite · à refaire quand vous voulez" : "8 exercices")),
          ic("chev", "chev"));
      }))]};
  },

  lecont(id){
    const l = ALL_LECONS.find(x => x.id === id);
    if(!l) return PAGES.apprendre();
    document.body.classList.add("immersive");
    const steps = [{t:"regle"}, {t:"exemples"}, ...l.exercices.map((e, i) => ({t:"exo", e, i})), {t:"fin"}];
    let idx = 0, score = 0;
    const wrap = el("div", {class:"stack", style:"min-height:calc(100vh - 44px);min-height:calc(100dvh - 44px)"});
    function draw(){
      stopAll();
      const s = steps[idx];
      const top = el("div", {class:"row", style:"gap:14px"},
        el("a", {href:"#/theme/" + l.theme.id, class:"iconbtn", "aria-label":"Fermer la leçon", html: ICON.x}),
        el("div", {class:"bar grow", role:"progressbar", "aria-label":"Progression", "aria-valuenow": String(Math.round(idx / (steps.length - 1) * 100)), "aria-valuemin":"0", "aria-valuemax":"100"},
          el("div", {style:"width:" + Math.round(idx / (steps.length - 1) * 100) + "%"})));
      const nextBtn = (label, enabled = true) => el("button", {class:"btn", type:"button", disabled: !enabled, onclick:() => { idx++; draw(); }}, label, el("span", {html: ICON.next}));
      let body = [], footBtn;
      const kicker = txt => el("span", {class:"muted", style:"font-size:14px;font-weight:600"}, txt);
      if(s.t === "regle"){
        body = [kicker(l.theme.titre), el("h1", {style:"font-size:27px"}, l.titre)];
        if(l.mots.length) body.push(el("div", {class:"list"}, l.mots.map(([m, d]) => {
          pageTexts.add(m);
          return el("button", {type:"button", onclick:() => speak(m)}, ic("soundSm", "lic"),
            el("span", {class:"grow"}, el("b", null, m), el("div", {class:"soft", style:"font-weight:400"}, d)));
        })));
        if(l.tableau) body.push(tableBlock(l.tableau));
        body.push(el("div", {class:"card stack", style:"gap:8px"}, el("h2", null, "La règle"), mdBlock(l.regle)));
        if(l.astuce) body.push(el("div", {class:"note warm"}, ic("info"), el("div", null, el("b", null, "Astuce : "), mdBlock(l.astuce))));
        if(l.retenir) body.push(el("div", {class:"note"}, ic("info"), el("div", null, el("b", null, "Pour retenir : "), mdBlock(l.retenir))));
        footBtn = nextBtn("Voir les exemples");
      }
      if(s.t === "exemples"){
        body = [kicker("Les exemples"), el("h1", {style:"font-size:27px"}, "Écoutez, puis répétez"),
          el("div", {class:"card"}, l.exemples.map(x => exLine(x))),
          el("p", {class:"soft", style:"margin:0"}, "Touchez une phrase pour l'écouter.")];
        footBtn = nextBtn("Commencer les exercices");
        setTimeout(() => speakSeq(l.exemples.map(x => x.replace(/\*\*/g, ""))), 400);
      }
      if(s.t === "exo"){
        const fbtn = nextBtn(s.i === l.exercices.length - 1 ? "Terminer" : "Suivant", false);
        body = [kicker("Exercice " + (s.i + 1) + " sur " + l.exercices.length),
          exercice(s.e, good => { if(good) score++; fbtn.disabled = false; })];
        footBtn = fbtn;
      }
      if(s.t === "fin"){
        marquerLecon(l.id);
        const t = l.theme, pos = t.lecons.indexOf(l), suivante = t.lecons[pos + 1] || prochaineLecon();
        body = [el("div", {class:"done", html: ICON.check}),
          el("h1", {style:"text-align:center"}, "Bravo " + nomProfil() + " !"),
          el("p", {class:"muted", style:"text-align:center;margin:0"}, "Leçon « " + l.titre + " » terminée."),
          el("div", {class:"score"}, score + " / " + l.exercices.length),
          el("p", {class:"soft", style:"text-align:center;margin:0"}, score >= 6 ? "Très bien, vous avez compris la règle." : "Relisez la règle et refaites la leçon demain, ça va venir.")];
        footBtn = suivante && suivante.id !== l.id
          ? el("a", {href:"#/lecont/" + suivante.id, class:"btn"}, "Leçon suivante : " + suivante.titre)
          : el("a", {href:"#/apprendre", class:"btn"}, "Retour aux thèmes");
      }
      const foot = el("div", {class:"footer"}, footBtn,
        s.t === "fin" ? el("a", {href:"#/theme/" + l.theme.id, class:"btn outline", style:"margin-top:10px"}, "Retour au thème") : null);
      wrap.replaceChildren(top, ...body, el("div", {class:"grow"}), foot);
      window.scrollTo(0, 0);
      setTimeout(preloadPage, 50);
    }
    draw();
    return {kids:[wrap]};
  },

  grammaire(){ return PAGES.apprendre(); },

  homophones(){
    return {kids:[pageHead("Les homophones"),
      el("p", {class:"muted", style:"margin:0"}, "Ces mots se disent pareil mais s'écrivent différemment."),
      ...HOMOPHONES.map(h => el("div", {class:"card stack", style:"gap:10px"},
        el("h2", {style:"font-size:20px"}, h.titre),
        el("div", {class:"note warm"}, ic("info"), el("span", {html: fmt(h.astuce)})),
        el("div", null, h.ex.map(exLine)))),
      el("a", {href:"#/quiz", class:"btn"}, el("span", {html: ICON.target}), "Faire le quiz")]};
  },

  construire(){
    const block = r => el("div", {class:"card stack", style:"gap:10px"},
      el("h2", {style:"font-size:20px"}, r.titre), el("p", {class:"rule", html: fmt(r.regle)}), el("div", null, r.ex.map(exLine)));
    const blocks = CONSTRUIRE.map(block);
    blocks.splice(3, 0, el("div", {class:"card stack", style:"gap:10px"},
      el("h2", {style:"font-size:20px"}, "4. Relier deux idées"),
      el("p", {class:"rule"}, "Ces petits mots relient deux parties d'une phrase."),
      el("div", null, CONNECTEURS.map(c => el("div", null,
        el("div", {style:"margin-top:10px;font-weight:700"}, c.mot, el("span", {class:"soft", style:"font-weight:400"}, "  ·  " + c.sens)),
        exLine(c.ex))))));
    return {kids:[pageHead("Construire une phrase"),
      el("p", {class:"muted", style:"margin:0"}, "Une phrase suit presque toujours le même ordre : qui + fait quoi + complément."),
      ...blocks, el("a", {href:"#/ordre", class:"btn"}, el("span", {html: ICON.puzzle}), "S'entraîner")]};
  },

  conjugaison(){
    let verbe = pget("verbe", "être"), temps = pget("temps", "present");
    if(!VERBES[verbe]) verbe = "être";
    const wrap = el("div", {class:"stack"});
    function draw(){
      pset("verbe", verbe); pset("temps", temps);
      const rows = conj(verbe, temps), t = TEMPS.find(x => x.id === temps);
      rows.forEach(r => pageTexts.add(r));
      wrap.replaceChildren(pageHead("Conjugaison"),
        el("h2", null, "Le verbe"),
        el("div", {class:"chips scroll"}, Object.keys(VERBES).map(v =>
          el("button", {class:"pill" + (v === verbe ? " on" : ""), type:"button", "aria-pressed": String(v === verbe), onclick:() => { verbe = v; draw(); }}, v))),
        el("h2", null, "Le temps"),
        el("div", {class:"chips"}, TEMPS.map(x =>
          el("button", {class:"pill" + (x.id === temps ? " on" : ""), type:"button", "aria-pressed": String(x.id === temps), onclick:() => { temps = x.id; draw(); }}, x.nom))),
        el("p", {class:"soft", style:"margin:0"}, t.aide),
        el("div", {class:"card", style:"padding:6px 16px"}, rows.map(r =>
          el("button", {class:"conjrow", type:"button", onclick:() => speak(r)}, ic("soundSm"), el("span", null, r)))),
        el("button", {class:"btn", type:"button", onclick:() => speakSeq(rows)}, el("span", {html: ICON.play}), "Tout écouter"),
        temps === "pc" && VERBES[verbe].aux === "être"
          ? el("div", {class:"note"}, ic("info"), "Avec « être », on ajoute -e pour une femme et -s au pluriel.") : null);
      preloadPage();
    }
    draw();
    return {kids:[wrap]};
  },

  quiz(){
    const items = shuffle(QUIZ).slice(0, 10);
    let i = 0, score = 0;
    const wrap = el("div", {class:"stack"});
    function step(){
      if(i >= items.length){
        wrap.replaceChildren(pageHead("Quiz homophones"), el("div", {class:"card stack center"},
          el("span", {class:"muted"}, "Terminé !"), el("div", {class:"score"}, score + " / " + items.length),
          el("p", {style:"margin:0"}, score >= 8 ? "Bravo !" : score >= 5 ? "C'est bien, continuez !" : "Relisez les astuces et réessayez."),
          el("button", {class:"btn", type:"button", onclick:() => render()}, "Recommencer"),
          el("a", {class:"btn outline", href:"#/homophones"}, "Revoir les astuces")));
        return;
      }
      const q = items[i], full = q.s.replace("___", q.r), parts = q.s.split("___");
      let answered = false;
      const fb = el("div");
      const nextBtn = el("button", {class:"btn", type:"button", disabled: true, onclick:() => { i++; step(); }}, "Suivant", el("span", {html: ICON.next}));
      const choices = q.c.map(c => {
        const b = el("button", {class:"choice", type:"button"}, c);
        b.addEventListener("click", () => {
          if(answered) return; answered = true;
          const good = c === q.r; if(good) score++;
          b.classList.add(good ? "ok" : "ko");
          if(!good) choices.find(x => x.textContent === q.r).classList.add("ok");
          fb.replaceChildren(el("div", {class: "note" + (good ? "" : " ko")}, ic(good ? "info" : "alert"), good ? "Bravo, c'est juste !" : "La bonne réponse : « " + full + " »"));
          speak(full); nextBtn.disabled = false;
        });
        return b;
      });
      wrap.replaceChildren(pageHead("Quiz homophones"),
        el("div", {class:"bar"}, el("div", {style:"width:" + (i / items.length * 100) + "%"})),
        el("span", {class:"muted", style:"font-size:14px;font-weight:600"}, "Question " + (i + 1) + " sur " + items.length),
        el("div", {class:"card"}, el("div", {class:"qsentence"}, parts[0], el("span", {class:"blank"}, "?"), parts[1])),
        el("div", {class:"choices"}, choices), fb, nextBtn);
    }
    step();
    return {kids:[wrap]};
  },

  ordre(){
    const items = shuffle(ORDRE).slice(0, 5);
    let i = 0;
    const wrap = el("div", {class:"stack"});
    const tokenize = s => s.split(" ").reduce((acc, w) => {
      if(/^[?!:;,.]$/.test(w) && acc.length) acc[acc.length - 1] += " " + w; else acc.push(w);
      return acc;
    }, []);
    function step(){
      if(i >= items.length){
        wrap.replaceChildren(pageHead("Remettre dans l'ordre"), el("div", {class:"card stack center"},
          el("div", {class:"done", html: ICON.check}), el("p", {style:"margin:0"}, "Bravo, vous avez fini les 5 phrases !"),
          el("button", {class:"btn", type:"button", onclick:() => render()}, "Encore 5 phrases")));
        return;
      }
      const target = items[i], words = tokenize(target);
      pageTexts.add(target); preloadPage();
      let bank = shuffle(words.map((w, k) => ({w, k})));
      if(words.length > 1 && bank.every((b, k) => b.k === k)) bank.reverse();
      let answer = [];
      const ansBox = el("div", {class:"answer"}), bankBox = el("div", {class:"bank"}), fb = el("div"), row = el("div", {class:"stats"});
      function draw(){
        ansBox.className = "answer";
        ansBox.replaceChildren(...answer.map((b, idx) => el("button", {class:"word", type:"button", onclick:() => { answer.splice(idx, 1); bank.push(b); fb.replaceChildren(); draw(); }}, b.w)));
        bankBox.replaceChildren(...bank.map((b, idx) => el("button", {class:"word", type:"button", onclick:() => { bank.splice(idx, 1); answer.push(b); fb.replaceChildren(); draw(); }}, b.w)));
        row.replaceChildren(
          el("button", {class:"btn outline", type:"button", onclick:() => speak(target)}, el("span", {html: ICON.sound}), "Écouter"),
          el("button", {class:"btn", type:"button", onclick: check}, "Vérifier"));
      }
      function check(){
        if(bank.length){ fb.replaceChildren(el("div", {class:"note warm"}, ic("info"), "Placez tous les mots.")); return; }
        if(answer.map(b => b.w).join(" ") === words.join(" ")){
          ansBox.className = "answer ok";
          fb.replaceChildren(el("div", {class:"note"}, ic("info"), "Bravo, c'est juste !"));
          speak(target);
          row.replaceChildren(el("button", {class:"btn", type:"button", style:"grid-column:1/-1", onclick:() => { i++; step(); }}, "Suivant", el("span", {html: ICON.next})));
        } else {
          ansBox.className = "answer"; void ansBox.offsetWidth; ansBox.className = "answer ko";
          fb.replaceChildren(el("div", {class:"note ko"}, ic("alert"), "Pas tout à fait. Écoutez la phrase et réessayez."));
        }
      }
      draw();
      wrap.replaceChildren(pageHead("Remettre dans l'ordre"),
        el("div", {class:"bar"}, el("div", {style:"width:" + (i / items.length * 100) + "%"})),
        el("span", {class:"muted", style:"font-size:14px;font-weight:600"}, "Phrase " + (i + 1) + " sur " + items.length + " · touchez les mots dans le bon ordre"),
        ansBox, bankBox, fb, row);
    }
    step();
    return {kids:[wrap]};
  }
};

/* =========================================================
   NAVIGATION
   ========================================================= */
const TABS = [["accueil","#/","home","Accueil"],["sons","#/sons","sound","Sons"],["phrases","#/phrases","chat","Phrases"],["apprendre","#/apprendre","book","Apprendre"]];
const TAB_OF = {bienvenue:"", profils:"accueil", accueil:"accueil", lecon:"accueil", sons:"sons", phrases:"phrases", cat:"phrases", favoris:"phrases",
  grammaire:"apprendre", apprendre:"apprendre", theme:"apprendre", lecont:"apprendre",
  homophones:"apprendre", construire:"apprendre", conjugaison:"apprendre", quiz:"apprendre", ordre:"apprendre"};
const tabsEl = document.getElementById("tabs");
tabsEl.replaceChildren(...TABS.map(([k, href, icon, label]) =>
  el("a", {class:"tab", href, "data-tab": k}, el("span", {html: ICON[icon]}), label)));

function render(){
  stopAll();
  pageTexts = new Set();
  document.body.classList.remove("immersive");
  const [name, arg] = location.hash.replace(/^#\/?/, "").split("/");
  let key = PAGES[name] ? name : "accueil";
  if(!profils.length) key = "bienvenue";
  if(key === "bienvenue") document.body.classList.add("immersive");
  const page = PAGES[key](arg);
  app.replaceChildren(el("div", {class:"stack"}, ...page.kids));
  setTimeout(preloadPage, 50);
  const tab = TAB_OF[key];
  tabsEl.querySelectorAll(".tab").forEach(t => {
    const on = t.dataset.tab === tab;
    t.classList.toggle("on", on);
    if(on) t.setAttribute("aria-current", "page"); else t.removeAttribute("aria-current");
  });
  window.scrollTo(0, 0);
}

window.addEventListener("hashchange", render);
window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault(); deferredInstall = e;
  if(!location.hash || location.hash === "#/") render();
});
render();

if("serviceWorker" in navigator && location.protocol.startsWith("http")){
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js").catch(() => {}));
}
