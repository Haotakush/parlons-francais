/* =========================================================
   OUTILS
   ========================================================= */
/* La version bêta (dossier beta/) garde ses données à part : ses clés commencent par « beta_ ». */
const NS = window.BETA ? "beta_" : "";
const AUDIO_BASE = window.BETA ? "../audio/" : "audio/";
const store = {
  get(k, d){ try{ const v = localStorage.getItem(NS + k); return v ? JSON.parse(v) : d; }catch(e){ return d; } },
  set(k, v){ try{ localStorage.setItem(NS + k, JSON.stringify(v)); }catch(e){} }
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
  if(text.startsWith("rec:")) return AUDIO_BASE + "sons/" + text.slice(4) + ".mp3";
  const idx = window.AUDIO_INDEX && window.AUDIO_INDEX[cleanForSpeech(text)];
  return idx == null ? null : AUDIO_BASE + VOIX[voix].id + "/" + idx + ".mp3";
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
    l.pool.forEach(e => { exoAudio(e).forEach(t => add(speakable(t))); add(lu(e.expl)); });
    add(lu(l.regle)); if(l.astuce) add(lu(l.astuce));
  });
  if(typeof TEXTES_FIXES !== "undefined") TEXTES_FIXES.forEach(add);
  if(typeof UNITES !== "undefined") UNITES.forEach(u => u.but.forEach(add));
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
  profils = list.map((x, i) => ({id: x.id || ("p" + Date.now().toString(36) + i), nom: x.nom.trim(), genre: x.genre || null})).filter(x => x.nom);
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

/* ---------- Réserve d'exercices (lecons.js + exercices.js), tirage au hasard, erreurs ----------
   Chaque exercice reçoit un identifiant tiré de son contenu : il reste le même si on en ajoute d'autres. */
const hash = t => { let h = 5381; for(let i = 0; i < t.length; i++) h = (h * 33 + t.charCodeAt(i)) >>> 0; return h.toString(36); };
const EXOS = {};
ALL_LECONS.forEach(l => {
  const plus = (typeof EXERCICES_PLUS !== "undefined" && EXERCICES_PLUS[l.id]) || [];
  l.pool = l.exercices.concat(plus).map(e => {
    e.id = l.id + ":" + hash(e.type + JSON.stringify(e.paires || e.phrase || e.juste));
    e.lecon = l; EXOS[e.id] = e; return e;
  });
});
/* Tire n exercices au hasard en variant les types (pas plus de max par type tant que possible). */
function tirer(pool, n){
  const sh = shuffle(pool), out = [], par = {};
  const types = new Set(pool.map(e => e.type)).size || 1, max = Math.ceil(n / types) + 1;
  for(const e of sh){ if(out.length >= n) break; if((par[e.type] || 0) < max){ out.push(e); par[e.type] = (par[e.type] || 0) + 1; } }
  for(const e of sh){ if(out.length >= n) break; if(!out.includes(e)) out.push(e); }
  return out;
}
/* Mes erreurs : un exercice raté est gardé ; il disparaît après 2 réussites de suite. */
const erreurs = () => pget("erreurs", {});
const listeErreurs = () => Object.keys(erreurs()).filter(id => EXOS[id]);
function noterReponse(e, good){
  if(!e.id) return;
  const er = erreurs();
  if(!good) er[e.id] = 0;
  else if(e.id in er){
    if(er[e.id] >= 1){ delete er[e.id]; pset("corrigees", pget("corrigees", 0) + 1); }
    else er[e.id] = 1;
  } else return;
  pset("erreurs", er);
}
const pluriel = (n, mot) => n + " " + mot + (n > 1 ? "s" : "");

/* Texte complet d'un exercice (ce qui est lu à voix haute) */
function exoTexte(e){
  if(e.type === "choisir") return e.juste;
  if(e.type === "vraifaux") return e.vrai ? e.phrase : e.correction;
  if(e.type === "associer") return "";
  if(e.type === "completer") return e.phrase.replace("___", e.reponse).replace(/(['’]) /g, "$1");
  return e.phrase;
}
const speakable = t => t.replace(/\s*→\s*/g, ", ");
/* Texte d'une règle ou d'une explication (avec **gras**, listes, lignes) → texte à lire à voix haute */
const lu = md => (md || "").split("\n").map(l => l.replace(/^\s*-\s+/, "").replace(/\*\*/g, "").replace(/\s*→\s*/g, ", ").replace(/\s+=\s+/g, ", ").trim())
  .filter(Boolean).map(l => /[.!?:;…]$/.test(l) ? l : l + ".").join(" ");
/* Tous les textes lus pendant un exercice (pour la liste des fichiers audio) */
function exoTextes(e){
  if(e.type === "associer") return e.paires.flat();
  if(e.type === "vraifaux") return e.vrai ? [e.phrase] : [e.phrase, e.correction];
  return [exoTexte(e)];
}

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

/* =========================================================
   LE PARCOURS (unités de js/parcours.js)
   ========================================================= */
const NOEUDS = [];
UNITES.forEach((u, n) => {
  u.n = n; u.noeuds = [];
  const ls = u.lecons.map(id => ALL_LECONS.find(l => l.id === id)).filter(Boolean);
  const mid = Math.ceil(ls.length / 2);
  ls.forEach((l, i) => {
    u.noeuds.push({k:"lecon", id: l.id, titre: l.titre, href: "#/lecont/" + l.id, l});
    if(i === mid - 1) (u.situations || []).forEach(sid => {
      const c = CATEGORIES.find(x => x.id === sid);
      if(c) u.noeuds.push({k:"situation", id: sid, titre: c.titre, href: "#/situ/" + sid});
    });
  });
  u.noeuds.push({k:"revision", id: "u" + n, titre: "Révision de l'unité", href: "#/revision/" + n});
  u.noeuds.forEach(x => { x.u = u; NOEUDS.push(x); });
});
const CLE_NOEUD = {situation: "situations", revision: "revisions"};
const noeudFait = x => x.k === "lecon" ? leconFaite(x.id) : pget(CLE_NOEUD[x.k], []).includes(x.id);
function marquerNoeud(k, id){ const s = pget(CLE_NOEUD[k], []); if(!s.includes(id)){ s.push(id); pset(CLE_NOEUD[k], s); } }
const noeudCourant = () => NOEUDS.find(x => !noeudFait(x)) || null;
const uniteCourante = () => (noeudCourant() || NOEUDS[NOEUDS.length - 1]).u;
const noeudSuivant = () => noeudCourant();

function cheminUnite(u){
  const cur = noeudCourant(), iCur = cur ? NOEUDS.indexOf(cur) : NOEUDS.length;
  const OFFS = [0, 55, -45, 50, -55, 35, -35, 50, -20, 30];
  return el("div", {class:"ppath"}, u.noeuds.map((x, i) => {
    const fait = noeudFait(x), estCur = x === cur, ouvert = NOEUDS.indexOf(x) <= iCur;
    const icone = fait ? ICON.checkSm : estCur ? ICON.play : !ouvert ? ICON.cadenas : x.k === "revision" ? ICON.star : x.k === "situation" ? ICON.chat : ICON.book;
    return el(ouvert ? "a" : "div", {href: ouvert ? x.href : null,
        class: "pnode k-" + x.k + (fait ? " fait" : estCur ? " cur" : ouvert ? " open" : " lock"),
        style: "transform:translateX(" + OFFS[i % OFFS.length] + "px)",
        "aria-label": x.titre + (fait ? " : faite" : !ouvert ? " : pas encore ouverte" : "")},
      estCur ? el("span", {class:"bulle"}, x.titre) : null,
      el("span", {class:"dot", html: icone}),
      !estCur ? el("span", {class:"lab"}, x.titre) : null);
  }));
}

/* =========================================================
   LES EXERCICES, UN ÉCRAN À LA FOIS (comme Duolingo)
   Consigne lue à voix haute, bouton Vérifier en bas, bandeau vert ou rouge.
   ========================================================= */
const ASTUCE = "Astuce.", HINT_ASSOC = "Touchez un mot à gauche, puis le mot qui va avec à droite.", ECOUTEZ = "Écoutez, puis répétez.";
const TEXTES_FIXES = ["Bravo !", "Pas tout à fait.", ASTUCE, HINT_ASSOC, ECOUTEZ,
  "Touchez la phrase juste.", "Touchez le mot qui manque.", "Écoutez. Remettez les mots dans l'ordre.",
  "Écoutez. Touchez la bonne phrase.", "Écoutez. Cette phrase est-elle juste ?",
  "Chaque jour, appuyez sur Continuer.", "L'appli choisit la leçon pour vous.", "Une leçon dure 10 minutes.",
  "Vous pouvez tout écouter.", "Touchez le haut-parleur.", "Les consignes sont lues à voix haute.",
  "Vos erreurs reviennent.", "Dans Réviser, refaites vos erreurs.", "Réussies 2 fois, elles sont corrigées."];
function consigneDe(e){
  switch(e.type){
    case "choisir": return !e.consigne ? "Touchez la phrase juste." : /^(la|le|les)\b/.test(e.consigne) ? "Touchez " + e.consigne + "." : "Touchez la phrase juste, " + e.consigne + ".";
    case "completer": return "Touchez le mot qui manque.";
    case "ordre": return "Écoutez. Remettez les mots dans l'ordre.";
    case "ecouter": return "Écoutez. Touchez la bonne phrase.";
    case "vraifaux": return "Écoutez. Cette phrase est-elle juste ?";
    case "associer": return (e.consigne || "Reliez les paires") + ".";
  }
  return "";
}
/* Énoncé lu : la phrase avec un blanc. Si le blanc est au milieu d'un mot (fr___re), on lit le mot entier. */
const enonceDe = e => e.type === "completer" ? (/[\p{L}]___|___[\p{L}]/u.test(e.phrase) ? exoTexte(e) : e.phrase.replace("___", "…").replace(/(['’]) /g, "$1"))
  : ["ordre", "ecouter", "vraifaux"].includes(e.type) ? e.phrase : null;
/* Tous les textes qu'on peut entendre pendant un exercice (pour générer l'audio) */
function exoAudio(e){
  const t = [...exoTextes(e), consigneDe(e), enonceDe(e)];
  if(e.type === "choisir") t.push(e.faux);
  return t.filter(Boolean);
}
const spkBtn = (onclick, label, cls) => el("button", {class:"spk" + (cls ? " " + cls : ""), type:"button", "aria-label": label || "Écouter", html: ICON.sound, onclick});

function exo(e, cb){
  const consigne = consigneDe(e), enonce = enonceDe(e);
  exoAudio(e).forEach(t => pageTexts.add(speakable(t)));
  const lire = () => speakSeq([consigne, e.type === "associer" ? HINT_ASSOC : enonce].filter(Boolean));
  const tete = el("div", {class:"row", style:"justify-content:space-between;align-items:flex-start;gap:12px"},
    el("h1", {class:"consigne"}, consigne), spkBtn(lire, "Écouter la consigne"));
  let choix = null, fige = false;
  const boxes = [];
  const options = (list, cls, avecSon, onPick) => list.map(o => {
    const v = typeof o === "string" ? o : o.v, label = typeof o === "string" ? o : o.label;
    const b = el("button", {class:"choice" + (cls ? " " + cls : ""), type:"button"}, label);
    b.dataset.v = v;
    b.addEventListener("click", () => {
      if(fige) return;
      boxes.forEach(z => z.classList.remove("sel")); b.classList.add("sel");
      choix = v; if(onPick) onPick(v); cb.ready(true);
    });
    boxes.push(b);
    return avecSon ? el("div", {class:"optrow"}, spkBtn(() => speak(label), "Écouter cette phrase", "sm"), b) : b;
  });
  const juger = right => {
    fige = true;
    boxes.forEach(b => { b.classList.remove("sel"); if(b.dataset.v === right) b.classList.add("ok"); else if(b.dataset.v === choix) b.classList.add("ko"); });
    return choix === right;
  };
  const res = {consigne, enonce, auto: false, autoEnonce: e.type === "ecouter" || e.type === "vraifaux"};
  if(e.type === "associer"){ res.enonce = HINT_ASSOC; res.autoEnonce = true; }

  if(e.type === "choisir"){
    res.node = el("div", {class:"stack"}, tete, el("div", {class:"stack", style:"gap:10px"}, options(shuffle([e.juste, e.faux]), "long", true)));
    res.verifier = () => ({good: juger(e.juste)});
  } else if(e.type === "completer"){
    const parts = e.phrase.split("___");
    const trou = el("span", {class:"blank"}, "?");
    res.node = el("div", {class:"stack"}, tete,
      el("div", {class:"card row", style:"gap:12px"}, spkBtn(() => speak(enonce), "Écouter la phrase"),
        el("div", {class:"qsentence grow"}, parts[0], trou, parts[1] || "")),
      el("div", {class:"choices"}, options(shuffle(e.choix), "", false, v => { trou.textContent = v; trou.classList.add("on"); })));
    res.verifier = () => ({good: juger(e.reponse)});
  } else if(e.type === "ecouter"){
    res.node = el("div", {class:"stack"}, tete,
      el("button", {class:"listen", type:"button", "aria-label":"Écouter la phrase", onclick:() => speak(e.phrase)}, el("span", {html: ICON.sound}), "Écouter"),
      el("div", {class:"stack", style:"gap:10px"}, options(shuffle([e.phrase, ...e.faux]), "long", false)));
    res.verifier = () => ({good: juger(e.phrase)});
  } else if(e.type === "vraifaux"){
    res.node = el("div", {class:"stack"}, tete,
      el("div", {class:"card row", style:"gap:12px"}, spkBtn(() => speak(e.phrase), "Écouter la phrase"),
        el("div", {class:"qsentence grow", style:"font-size:21px"}, e.phrase)),
      el("div", {class:"choices"}, options([{v:"vrai", label:"Juste"}, {v:"faux", label:"Fausse"}], "", false)));
    res.verifier = () => {
      const good = juger(e.vrai ? "vrai" : "faux");
      return {good, msg: e.vrai ? (good ? null : "Cette phrase est juste.")
        : "La phrase juste : <b>" + esc(e.correction) + "</b>"};
    };
  } else if(e.type === "associer"){
    res.auto = true;
    const gauche = shuffle(e.paires.map((p, k) => ({t: p[0], k}))), droite = shuffle(e.paires.map((p, k) => ({t: p[1], k})));
    let pick = null, faits = 0, fautes = 0;
    const btn = (x, cote) => {
      const b = el("button", {class:"pair", type:"button"}, x.t);
      b.addEventListener("click", () => {
        if(b.classList.contains("ok")) return;
        speak(x.t);
        if(!pick || pick.cote === cote){ if(pick) pick.b.classList.remove("sel"); pick = {x, cote, b}; b.classList.add("sel"); return; }
        if(pick.x.k === x.k){
          b.classList.add("ok"); pick.b.classList.remove("sel"); pick.b.classList.add("ok"); pick = null; faits++;
          if(faits === e.paires.length) cb.fini(fautes === 0, fautes === 0 ? null : "Fini ! Avec " + pluriel(fautes, "erreur") + ".");
        } else {
          fautes++;
          const a = pick.b; a.classList.remove("sel"); pick = null;
          [a, b].forEach(z => { z.classList.add("ko"); setTimeout(() => z.classList.remove("ko"), 600); });
        }
      });
      return b;
    };
    res.node = el("div", {class:"stack"}, tete,
      el("p", {class:"falc", style:"margin:0"}, HINT_ASSOC),
      el("div", {class:"assoc"}, el("div", {class:"stack", style:"gap:10px"}, gauche.map(x => btn(x, "g"))), el("div", {class:"stack", style:"gap:10px"}, droite.map(x => btn(x, "d")))));
  } else { // ordre
    const tokenize = t => t.split(" ").reduce((acc, w) => { if(/^[?!:;,.]$/.test(w) && acc.length) acc[acc.length - 1] += " " + w; else acc.push(w); return acc; }, []);
    const words = tokenize(e.phrase);
    let bank = shuffle(words.map((w, k) => ({w, k})));
    if(words.length > 1 && bank.every((b, k) => b.k === k)) bank.reverse();
    let answer = [];
    const ansBox = el("div", {class:"answer"}), bankBox = el("div", {class:"bank"});
    const draw = () => {
      ansBox.replaceChildren(...answer.map((b, i) => el("button", {class:"word", type:"button", onclick:() => { if(fige) return; answer.splice(i, 1); bank.push(b); draw(); }}, b.w)));
      bankBox.replaceChildren(...bank.map((b, i) => el("button", {class:"word", type:"button", onclick:() => { if(fige) return; bank.splice(i, 1); answer.push(b); draw(); }}, b.w)));
      cb.ready(!bank.length);
    };
    draw();
    res.node = el("div", {class:"stack"}, tete,
      el("button", {class:"btn outline", type:"button", onclick:() => speak(e.phrase)}, el("span", {html: ICON.sound}), "Écouter la phrase"),
      ansBox, bankBox);
    res.verifier = () => {
      fige = true;
      const good = answer.map(b => b.w).join(" ") === words.join(" ");
      if(!good){ answer = words.map((w, k) => ({w, k})); bank = []; draw(); }
      ansBox.className = "answer " + (good ? "ok" : "ko");
      return {good};
    };
  }
  return res;
}

/* Une série d'exercices. o.fermer : où va la croix. o.fin(score, total) → {body:[…], foot:[…]} */
function serie(exos, o){
  document.body.classList.add("immersive");
  let idx = 0, score = 0;
  const wrap = el("div", {class:"stack serie"});
  function top(){
    return el("div", {class:"row", style:"gap:14px"},
      el("a", {href: o.fermer, class:"iconbtn", "aria-label":"Arrêter", html: ICON.x}),
      el("div", {class:"bar grow big", role:"progressbar", "aria-label":"Progression"}, el("div", {style:"width:" + Math.round(idx / exos.length * 100) + "%"})));
  }
  function draw(){
    stopAll();
    if(idx >= exos.length){
      const f = o.fin(score, exos.length);
      wrap.replaceChildren(top(), ...f.body, el("div", {class:"grow"}), el("div", {class:"footer"}, ...f.foot));
      window.scrollTo(0, 0);
      return;
    }
    const e = exos[idx];
    const foot = el("div", {class:"footer exo-foot"});
    const verif = el("button", {class:"btn", type:"button", disabled: true}, "Vérifier");
    const resultat = (good, msg) => {
      if(good) score++;
      noterReponse(e, good);
      const full = exoTexte(e);
      const dire = [good ? "Bravo !" : "Pas tout à fait.", full].filter(Boolean);
      const pourquoi = lu(e.expl);
      foot.className = "footer exo-foot sheet " + (good ? "ok" : "ko");
      foot.replaceChildren(...[
        el("div", {class:"row", style:"justify-content:space-between;gap:12px"},
          el("b", {class:"sheet-t"}, el("span", {class:"sheet-ic", html: good ? ICON.checkSm : ICON.x}), good ? "Bravo !" : "Pas tout à fait"),
          spkBtn(() => speakSeq([...dire, pourquoi]), "Écouter")),
        msg || (!good && full) ? el("div", {class:"sheet-m", html: msg || "La bonne réponse : <b>" + esc(full) + "</b>"}) : null,
        el("div", {class:"sheet-why"},
          el("div", {class:"row", style:"justify-content:space-between;gap:10px"}, el("span", {class:"k"}, "Pourquoi ?"), spkBtn(() => speak(pourquoi), "Écouter le pourquoi", "sm")),
          mdBlock(e.expl)),
        !good ? el("p", {class:"sheet-note"}, "Cet exercice reviendra dans Réviser.") : null,
        el("button", {class:"btn", type:"button", onclick:() => { idx++; draw(); }}, idx === exos.length - 1 ? "Terminer" : "Continuer")].filter(Boolean));
      speakSeq(pget("lireConsignes", true) ? [...dire, pourquoi] : dire);
    };
    const x = exo(e, {ready: r => { verif.disabled = !r; }, fini: resultat});
    verif.addEventListener("click", () => { const r = x.verifier(); if(r) resultat(r.good, r.msg); });
    foot.append(x.auto ? el("p", {class:"soft", style:"text-align:center;margin:0"}, "Reliez toutes les paires.") : verif);
    wrap.replaceChildren(top(), x.node, el("div", {class:"grow"}), foot);
    window.scrollTo(0, 0);
    setTimeout(preloadPage, 50);
    if(pget("lireConsignes", true)) setTimeout(() => speakSeq([x.consigne, ...(x.autoEnonce ? [x.enonce] : [])].filter(Boolean)), 350);
  }
  draw();
  return wrap;
}
const finSerie = (score, total, texte) => [el("div", {class:"done", html: ICON.check}),
  el("h1", {style:"text-align:center"}, score * 2 >= total ? "Bravo " + nomProfil() + " !" : "C'est fini !"),
  el("div", {class:"score"}, score + " / " + total),
  texte ? el("p", {class:"muted", style:"text-align:center;margin:0"}, texte) : null];
const boutonSuite = () => {
  const nx = noeudSuivant();
  return nx ? el("a", {href: nx.href, class:"btn"}, el("span", {html: ICON.play}), "Continuer : " + nx.titre)
    : el("a", {href:"#/", class:"btn"}, "Retour au parcours");
};

const app = document.getElementById("app");
let deferredInstall = null;

/* ---------- Premier lancement et personnes ---------- */
Object.assign(ICON, {
  cadenas: P('<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>'),
  map: P('<path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14M15 6v14"/>'),
  sun: P('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>'),
  bookOpen: P('<path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z"/>'),
  user: P('<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>'),
  userPlus: P('<circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 16 0M20 8v6M23 11h-6"/>'),
  femme: P('<circle cx="12" cy="7" r="4"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/><path d="M9 14l3 4 3-4"/>', 'width="40" height="40" stroke-width="1.8"'),
  homme: P('<circle cx="12" cy="7" r="4"/><path d="M5 21v-1a7 7 0 0 1 14 0v1"/>', 'width="40" height="40" stroke-width="1.8"'),
  plus: P('<path d="M12 5v14M5 12h14"/>', 'width="18" height="18"'),
  flameFill: '<svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2c1 4 5 5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-6 1-9z"/></svg>'
});
function go(h){ if(location.hash === h) render(); else location.hash = h; }
const genreProfil = () => (profils.find(x => x.id === profil) || {}).genre || null;
const accord = (m, f) => genreProfil() === "f" ? f : m;
const initiale = nom => (nom || "?").trim().charAt(0).toUpperCase();
const GENRES = {f: "Une femme", h: "Un homme"};
function majProfil(champs){
  profils = profils.map(x => x.id === profil ? Object.assign({}, x, champs) : x);
  store.set("profils", profils);
}
function ajouterProfil(nom, genre, v){
  const id = "p" + Date.now().toString(36);
  profils = profils.concat([{id, nom: nom.trim(), genre}]);
  store.set("profils", profils);
  switchProfil(id);
  voix = v; pset("voix", v);
  return id;
}
function tempsTotal(){
  let s = 0;
  try{ const pre = NS + "p_" + profil + "_temps_"; for(let i = 0; i < localStorage.length; i++){ const k = localStorage.key(i); if(k.startsWith(pre)) s += Number(localStorage.getItem(k)) || 0; } }catch(e){}
  const m = Math.round(s / 60);
  return m < 60 ? m + " min" : Math.floor(m / 60) + " h " + String(m % 60).padStart(2, "0");
}
function stepsBar(n, tot, back){
  return el("div", {class:"row", style:"gap:12px"},
    back ? el("button", {class:"iconbtn", type:"button", "aria-label":"Retour", html: ICON.back, onclick: back}) : null,
    el("div", {class:"lessonbar", "aria-label":"Étape " + n + " sur " + tot}, Array.from({length: tot}, (_, k) => el("div", {class: k < n ? "on" : null}))),
    el("span", {class:"soft", style:"font-weight:600"}, n + " / " + tot));
}

/* Le parcours d'accueil : prénom → homme ou femme (+ voix). Sert aussi à ajouter une personne. */
function parcoursProfil(onFini, ajout){
  let etape = 1, nom = "", genre = null, v = null;
  const wrap = el("div", {class:"stack", style:"min-height:calc(100dvh - 44px)"});
  function draw(){
    stopAll();
    if(etape === 1){
      const input = el("input", {type:"text", id:"prenom", class:"field big", value: nom, maxlength:"30", autocomplete:"off", autocapitalize:"words", placeholder:"Votre prénom"});
      const err = el("div");
      const suivant = () => {
        nom = input.value.trim();
        if(!nom){ err.replaceChildren(el("div", {class:"note ko"}, ic("alert"), "Écrivez votre prénom.")); input.focus(); return; }
        etape = 2; draw();
      };
      wrap.replaceChildren(...[
        stepsBar(1, 2, ajout ? () => history.back() : null),
        el("div", {class:"stack", style:"gap:10px;margin-top:24px"},
          el("span", {class:"onb-ic", html: ICON.user.replace('width="22" height="22"', 'width="32" height="32"')}),
          el("h1", {style:"font-size:32px;margin-top:8px"}, ajout ? "Qui d'autre apprend ?" : "Comment vous appelez-vous ?"),
          el("p", {class:"muted", style:"margin:0"}, "Le prénom s'affichera dans l'appli. Il reste sur ce téléphone.")),
        el("form", {class:"setting", onsubmit: e => { e.preventDefault(); suivant(); }}, el("label", {for:"prenom"}, "Prénom"), input),
        err, el("div", {class:"grow"}),
        el("button", {class:"btn", type:"button", onclick: suivant}, "Continuer", el("span", {html: ICON.next}))].filter(Boolean));
      setTimeout(() => input.focus(), 50);
    } else {
      const carte = (g) => el("button", {type:"button", class:"genre" + (genre === g ? " on" : ""), "aria-pressed": String(genre === g), onclick:() => {
          genre = g; if(!v) v = g === "f" ? "femme" : "homme"; draw(); }},
        genre === g ? el("span", {class:"tick", html: ICON.checkSm}) : null,
        el("span", {html: ICON[g === "f" ? "femme" : "homme"]}), el("b", null, GENRES[g]));
      const voixBox = genre ? el("div", {class:"card stack", style:"gap:12px"},
        el("div", {class:"row", style:"justify-content:space-between"}, el("b", null, "La voix de l'appli"), el("span", {class:"soft"}, "modifiable plus tard")),
        seg([["femme","Voix de femme"],["homme","Voix d'homme"]], v, k => { v = k; draw(); }, "Voix"),
        el("button", {class:"btn outline", type:"button", onclick:() => { const old = voix; voix = v; speak("Bonjour, je vais vous aider à parler français."); voix = old; }},
          el("span", {html: ICON.play}), "Écouter la voix")) : null;
      const fini = () => {
        if(ajout || profils.length){ ajouterProfil(nom, genre, v); }
        else { profils = [{id: "p" + Date.now().toString(36), nom, genre}]; store.set("profils", profils); switchProfil(profils[0].id); voix = v; pset("voix", v); }
        onFini();
      };
      wrap.replaceChildren(...[
        stepsBar(2, 2, () => { etape = 1; draw(); }),
        el("div", {class:"stack", style:"gap:8px;margin-top:8px"},
          el("h1", {style:"font-size:30px"}, nom + ", vous êtes…"),
          el("p", {class:"muted", style:"margin:0"}, "Pour bien accorder les phrases : « je suis prête » ou « je suis prêt ».")),
        el("div", {class:"stats"}, carte("f"), carte("h")),
        voixBox, el("div", {class:"grow"}),
        el("button", {class:"btn", type:"button", disabled: !genre, onclick: fini}, "Commencer"),
        !ajout && !profils.length && genre ? el("button", {class:"btn outline", type:"button", onclick:() => {
          ajouterProfil(nom, genre, v); go("#/ajouter"); }}, el("span", {html: ICON.plus}), "Ajouter une autre personne") : null].filter(Boolean));
    }
    window.scrollTo(0, 0);
  }
  draw();
  return wrap;
}

const PAGES = {
  bienvenue(){
    document.body.classList.add("immersive");
    return {kids:[parcoursProfil(() => { go("#/"); }, false)]};
  },

  ajouter(){
    document.body.classList.add("immersive");
    if(profils.length >= MAX_PROFILS){ setTimeout(() => go("#/personnes")); return PAGES.personnes(); }
    return {kids:[parcoursProfil(() => { go("#/"); }, true)]};
  },

  profils(){ return PAGES.personnes(); },

  accueil(){
    if(!pget("tuto", false)){ setTimeout(() => go("#/tuto")); return {kids:[]}; }
    const cur = noeudCourant(), u = uniteCourante();
    const faits = u.noeuds.filter(noeudFait).length, total = u.noeuds.length;
    const suivante = UNITES[u.n + 1], nE = listeErreurs().length;
    return {kids:[
      el("div", {class:"row", style:"justify-content:space-between;align-items:center;gap:10px"},
        el("div", {class:"stack", style:"gap:4px"},
          el("h1", {style:"font-size:27px;letter-spacing:-.5px"}, "Bonjour " + nomProfil()),
          window.BETA ? el("span", {class:"badge warm"}, "Version bêta") : null),
        streak() ? el("span", {class:"streak", "aria-label": pluriel(streak(), "jour") + " de suite"}, el("span", {html: ICON.flameFill}), pluriel(streak(), "jour")) : null),
      genreProfil() ? null : el("a", {href:"#/reglage/genre", class:"note warm", style:"color:inherit"}, ic("info"), "Dites-nous si vous êtes une femme ou un homme."),
      el("div", {class:"hero"},
        el("div", {class:"row", style:"justify-content:space-between;gap:10px"},
          el("span", {class:"hero-k"}, "Unité " + (u.n + 1) + " · " + u.titre),
          el("a", {href:"#/guide/" + u.n, class:"hero-guide"}, el("span", {html: ICON.bookOpen}), "Le guide")),
        el("div", {class:"row", style:"gap:10px;align-items:flex-start"},
          el("span", {class:"hero-d grow"}, u.but.flatMap((t, i) => i ? [el("br"), t] : [t])),
          spkBtn(() => speakSeq(u.but), "Écouter", "sm hero-spk")),
        el("div", {class:"hero-bar", "aria-label": faits + " étapes sur " + total}, el("div", {style:"width:" + Math.round(faits / total * 100) + "%"})),
        cur ? el("a", {href: cur.href, class:"hero-btn"}, el("span", {html: ICON.play}), "Continuer")
          : el("span", {class:"hero-btn"}, "Tout est fini, bravo !")),
      nE ? el("a", {href:"#/entrainer/erreurs", class:"card row", style:"color:var(--fg);gap:14px"},
          el("span", {class:"tile-ic err-ic", html: ICON.replay}),
          el("span", {class:"grow stack", style:"gap:3px"}, el("b", {style:"font-size:18px"}, pluriel(nE, "erreur") + " à refaire"),
            el("span", {class:"soft"}, "Dans Réviser.")), ic("chev", "chev")) : null,
      cheminUnite(u),
      suivante ? el("div", {class:"card row locked", style:"gap:12px"},
        el("span", {class:"tile-ic", html: ICON.cadenas}),
        el("span", {class:"stack", style:"gap:2px"}, el("b", null, "Unité " + (u.n + 2) + " · " + suivante.titre),
          el("span", {class:"soft"}, "S'ouvre après l'unité " + (u.n + 1)))) : null
    ]};
  },

  tuto(){
    document.body.classList.add("immersive");
    const ecrans = [
      {t:"Chaque jour, appuyez sur Continuer.", l:["L'appli choisit la leçon pour vous.", "Une leçon dure 10 minutes."], ic: ICON.play},
      {t:"Vous pouvez tout écouter.", l:["Touchez le haut-parleur.", "Les consignes sont lues à voix haute."], ic: ICON.sound},
      {t:"Vos erreurs reviennent.", l:["Dans Réviser, refaites vos erreurs.", "Réussies 2 fois, elles sont corrigées."], ic: ICON.replay}];
    let i = 0;
    const wrap = el("div", {class:"stack", style:"min-height:calc(100dvh - 44px)"});
    const fini = () => { pset("tuto", true); go("#/"); };
    function draw(){
      stopAll();
      const x = ecrans[i];
      [x.t, ...x.l].forEach(t => pageTexts.add(t));
      wrap.replaceChildren(
        el("div", {class:"row", style:"justify-content:space-between"},
          el("div", {class:"dots"}, ecrans.map((_, k) => el("span", {class: k === i ? "on" : null}))),
          el("button", {class:"linkbtn", type:"button", onclick: fini}, "Passer")),
        el("div", {class:"tuto-ill", html: x.ic}),
        el("h1", {style:"font-size:29px"}, x.t),
        el("div", {class:"stack", style:"gap:6px"}, x.l.map(t => el("p", {class:"falc"}, t))),
        el("button", {class:"btn outline", type:"button", style:"align-self:flex-start", onclick:() => speakSeq([x.t, ...x.l])}, el("span", {html: ICON.sound}), "Écouter"),
        el("div", {class:"grow"}),
        el("button", {class:"btn", type:"button", onclick:() => { if(i < ecrans.length - 1){ i++; draw(); } else fini(); }}, i < ecrans.length - 1 ? "Suivant" : "Commencer", el("span", {html: ICON.next})));
      setTimeout(preloadPage, 50);
      setTimeout(() => speakSeq([x.t, ...x.l]), 400);
    }
    draw();
    return {kids:[wrap]};
  },

  unite(n){
    const u = UNITES[Number(n)];
    if(!u) return PAGES.accueil();
    return {kids:[pageHead("Unité " + (u.n + 1) + " · " + u.titre),
      el("p", {class:"falc", style:"margin:0"}, u.but.flatMap((t, i) => i ? [el("br"), t] : [t])),
      el("a", {href:"#/guide/" + u.n, class:"btn outline"}, el("span", {html: ICON.bookOpen}), "Le guide de l'unité"),
      cheminUnite(u)]};
  },

  guide(n){
    const u = UNITES[Number(n)];
    if(!u) return PAGES.accueil();
    const ls = u.noeuds.filter(x => x.k === "lecon").map(x => x.l);
    return {kids:[pageHead("Le guide"), el("h1", null, "Unité " + (u.n + 1) + " · " + u.titre),
      el("p", {class:"muted", style:"margin:0"}, "Les règles de l'unité, à relire quand vous voulez."),
      ...ls.map(l => el("div", {class:"card stack", style:"gap:10px"},
        el("div", {class:"row", style:"justify-content:space-between;gap:10px"}, el("h2", {class:"grow"}, l.titre),
          spkBtn(() => speakSeq([lu(l.regle), ...(l.astuce ? [ASTUCE, lu(l.astuce)] : [])]), "Écouter la règle", "sm")),
        mdBlock(l.regle),
        l.astuce ? el("div", {class:"note warm"}, ic("info"), el("div", null, el("b", null, "Astuce : "), mdBlock(l.astuce))) : null))]};
  },

  situ(id){
    const r = PAGES.cat(id);
    return {kids:[...r.kids, el("div", {class:"footer"},
      el("button", {class:"btn", type:"button", onclick:() => { marquerNoeud("situation", id); go("#/"); }}, el("span", {html: ICON.checkSm}), "J'ai fini"))]};
  },

  revision(n){
    const u = UNITES[Number(n)];
    if(!u) return PAGES.accueil();
    const pool = u.noeuds.filter(x => x.k === "lecon").flatMap(x => x.l.pool);
    return {kids:[serie(tirer(pool, 10), {fermer:"#/", fin:(sc, tot) => {
      marquerNoeud("revision", "u" + u.n);
      return {body: finSerie(sc, tot, "Révision de l'unité " + (u.n + 1) + " terminée."), foot:[boutonSuite()]};
    }})]};
  },

  reviser(){
    const nE = listeErreurs().length, corr = pget("corrigees", 0);
    const commencees = UNITES.filter(u => u.noeuds.some(noeudFait));
    return {kids:[el("h1", null, "Réviser"),
      el(nE ? "a" : "div", {href: nE ? "#/entrainer/erreurs" : null, class:"err-card"},
        el("div", {class:"row", style:"gap:14px"}, el("span", {class:"err-big", html: ICON.replay}),
          el("span", {class:"stack", style:"gap:2px"}, el("b", {style:"font-size:21px"}, "Mes erreurs"),
            el("span", null, nE ? pluriel(nE, "exercice") + " à refaire" : "Aucune erreur à refaire"))),
        nE ? el("span", {class:"err-btn"}, el("span", {html: ICON.play}), "Commencer") : null,
        corr ? el("span", {style:"font-size:14px"}, "Déjà " + pluriel(corr, "erreur") + " " + (corr > 1 ? "corrigées" : "corrigée") + ". Bravo !") : null),
      commencees.length ? el("h2", null, "Refaire une unité") : null,
      commencees.length ? el("div", {class:"list"}, commencees.map(u => el("a", {href:"#/unite/" + u.n},
        el("span", {class:"avatar sm" + (u.noeuds.every(noeudFait) ? "" : " grey")}, String(u.n + 1)),
        el("span", {class:"grow"}, u.titre), ic("chev", "chev")))) : null,
      el("h2", null, "Écouter et répéter"),
      el("div", {class:"tiles"}, [["#/sons", "sound", "Les sons", "mots"], ["#/phrases", "chat", "Les phrases", "phrases"], ["#/favoris", "star", "Mes favoris", "orthographe"], ["#/conjugaison", "pencil", "Conjugaison", "passe"]].map(([href, icon, titre, th]) =>
        el("a", {href, class:"tile small th-" + th}, el("span", {class:"tile-ic", html: ICON[icon]}), el("b", null, titre))))]};
  },

  pratiquer(){
    const tuiles = [
      ["#/sons", "sound", "Sons", "20 sons à répéter", "mots"],
      ["#/phrases", "chat", "Situations", "École, médecin, garage…", "phrases"],
      ["#/quiz", "target", "Quiz", "Les mots qui se ressemblent", "homophones"],
      ["#/ordre", "puzzle", "Remettre dans l'ordre", "5 phrases", "verbes"],
      ["#/conjugaison", "pencil", "Conjugaison", "16 verbes, 4 temps", "passe"],
      ["#/favoris", "star", "Mes favoris", favs.size + " phrase" + (favs.size > 1 ? "s" : "") + " gardée" + (favs.size > 1 ? "s" : ""), "orthographe"]
    ];
    const nE = listeErreurs().length;
    return {kids:[el("h1", null, "Pratiquer"),
      el("p", {class:"muted", style:"margin:0"}, "Écouter, répéter, s'entraîner librement."),
      el("a", {href:"#/entrainer/erreurs", class:"card row", style:"color:var(--fg);gap:14px"},
        el("span", {class:"tile-ic err-ic", html: ICON.replay}),
        el("span", {class:"grow stack", style:"gap:3px"}, el("b", {style:"font-size:18px"}, "Mes erreurs"),
          el("span", {class:"soft"}, nE ? pluriel(nE, "exercice") + " à refaire" : "Aucune erreur à refaire")), ic("chev", "chev")),
      el("div", {class:"tiles"}, tuiles.map(([href, icon, titre, sous, th]) =>
        el("a", {href, class:"tile th-" + th}, el("span", {class:"tile-ic", html: ICON[icon]}),
          el("span", {class:"stack", style:"gap:2px"}, el("b", null, titre), el("span", {class:"tile-s"}, sous)))))]};
  },

  profil(){
    const nbL = ALL_LECONS.filter(l => leconFaite(l.id)).length;
    const ligne = (href, icon, label, val) => el("a", {href}, ic(icon, "lic"), el("span", {class:"grow"}, label),
      val ? el("span", {class:"soft", style:"font-size:15px"}, val) : null, ic("chev", "chev"));
    const autre = profils.find(x => x.id !== profil);
    return {kids:[
      el("div", {class:"row", style:"gap:14px"},
        el("span", {class:"avatar big"}, initiale(nomProfil())),
        el("div", {class:"stack", style:"gap:2px"}, el("h1", {style:"font-size:26px"}, nomProfil()),
          el("span", {class:"soft"}, genreProfil() ? GENRES[genreProfil()] : "Profil"))),
      el("div", {class:"stats"},
        el("div", {class:"stat flame"}, el("b", null, String(streak())), el("span", null, "jours de suite")),
        el("div", {class:"stat"}, el("b", null, String(nbL)), el("span", null, "leçons faites")),
        el("div", {class:"stat"}, el("b", null, tempsTotal()), el("span", null, "au total")),
        el("div", {class:"stat"}, el("b", null, String(pget("corrigees", 0))), el("span", null, "erreurs corrigées"))),
      el("h2", {class:"soft", style:"font-size:15px"}, "Réglages"),
      el("div", {class:"list"},
        ligne("#/reglage/prenom", "pencil", "Prénom", nomProfil()),
        ligne("#/reglage/genre", "user", "Je suis", genreProfil() ? GENRES[genreProfil()] : "À choisir"),
        ligne("#/reglage/voix", "sound", "Voix", voix === "homme" ? "Homme" : "Femme"),
        ligne("#/reglage/vitesse", "clock", "Vitesse", slow ? "Lente" : "Normale"),
        ligne("#/reglage/consignes", "soundSm", "Lire les consignes", pget("lireConsignes", true) ? "Oui" : "Non"),
        ligne("#/tuto", "help", "Revoir le tuto", "")),
      el("h2", {class:"soft", style:"font-size:15px"}, "Sur ce téléphone"),
      el("div", {class:"list"},
        ligne("#/personnes", "userPlus", autre ? "Changer de personne" : "Ajouter une personne", autre ? autre.nom : ""),
        deferredInstall ? el("button", {type:"button", onclick: async () => { deferredInstall.prompt(); await deferredInstall.userChoice; deferredInstall = null; render(); }},
          ic("download", "lic"), el("span", {class:"grow"}, "Installer l'appli"), ic("chev", "chev")) : null)]};
  },

  reglage(quoi){
    const fini = () => { location.hash = "#/profil"; };
    if(quoi === "prenom"){
      const input = el("input", {type:"text", id:"prenom", class:"field big", value: nomProfil(), maxlength:"30", autocomplete:"off", autocapitalize:"words"});
      return {kids:[pageHead("Prénom"), el("form", {class:"setting", onsubmit: e => { e.preventDefault(); if(input.value.trim()){ majProfil({nom: input.value.trim()}); fini(); } }},
        el("label", {for:"prenom"}, "Prénom"), input, el("button", {class:"btn", type:"submit", style:"margin-top:12px"}, "Enregistrer"))]};
    }
    if(quoi === "genre"){
      const carte = g => el("button", {type:"button", class:"genre" + (genreProfil() === g ? " on" : ""), onclick:() => { majProfil({genre: g}); fini(); }},
        genreProfil() === g ? el("span", {class:"tick", html: ICON.checkSm}) : null, el("span", {html: ICON[g === "f" ? "femme" : "homme"]}), el("b", null, GENRES[g]));
      return {kids:[pageHead("Je suis"), el("p", {class:"muted", style:"margin:0"}, "Pour bien accorder les phrases et les messages."), el("div", {class:"stats"}, carte("f"), carte("h"))]};
    }
    if(quoi === "voix"){
      const box = el("div", {class:"stack"});
      const draw = () => box.replaceChildren(
        seg([["femme","Voix de femme"],["homme","Voix d'homme"]], voix, k => { voix = k; pset("voix", k); draw(); speak("Bonjour, je vais vous aider à parler français."); }, "Voix"),
        el("button", {class:"btn outline", type:"button", onclick:() => speak("Bonjour, je vais vous aider à parler français.")}, el("span", {html: ICON.play}), "Écouter la voix"));
      draw();
      return {kids:[pageHead("Voix"), el("p", {class:"muted", style:"margin:0"}, "La voix qui lit les mots et les phrases."), box]};
    }
    if(quoi === "consignes"){
      const box = el("div", {class:"stack"});
      const draw = () => box.replaceChildren(
        seg([[true,"Oui"],[false,"Non"]], pget("lireConsignes", true), k => { pset("lireConsignes", k); draw(); }, "Lire les consignes"));
      draw();
      return {kids:[pageHead("Lire les consignes"), el("p", {class:"falc", style:"margin:0"}, "Oui : la consigne de chaque exercice est lue à voix haute.", el("br"), "Le bouton haut-parleur marche toujours.")]
        .concat([box])};
    }
    if(quoi === "vitesse"){
      const box = el("div", {class:"stack"});
      const draw = () => box.replaceChildren(
        seg([[false,"Normale"],[true,"Lente"]], slow, k => { slow = k; pset("slow", k); draw(); speak("Bonjour, je vais vous aider à parler français."); }, "Vitesse"));
      draw();
      return {kids:[pageHead("Vitesse"), el("p", {class:"muted", style:"margin:0"}, "En vitesse lente, la voix parle plus doucement."), box]};
    }
    return PAGES.profil();
  },

  personnes(){
    return {kids:[pageHead("Qui apprend ?"),
      el("p", {class:"muted", style:"margin:0"}, "Chaque personne a sa progression, ses favoris et ses réglages."),
      el("div", {class:"list"}, profils.map(x => el("button", {type:"button", onclick:() => { switchProfil(x.id); go("#/"); }},
        el("span", {class:"avatar sm"}, initiale(x.nom)),
        el("span", {class:"grow"}, x.nom, el("div", {class:"soft", style:"font-weight:400"}, x.genre ? GENRES[x.genre] : "")),
        x.id === profil ? el("span", {class:"badge"}, "En cours") : ic("chev", "chev")))),
      profils.length < MAX_PROFILS ? el("a", {href:"#/ajouter", class:"btn outline"}, el("span", {html: ICON.plus}), "Ajouter une personne") : null]};
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
          el("p", {class:"muted", style:"text-align:center;margin:0"}, "La leçon du jour est terminée. Vous êtes " + accord("allé", "allée") + " jusqu'au bout ! Revenez demain pour une nouvelle leçon."),
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
        wrap.replaceChildren(pageHead("Les sons"), tabs,
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
      wrap.replaceChildren(pageHead("Les sons"), tabs, detail, grid);
      preloadPage();
    }
    draw();
    return {kids:[wrap]};
  },

  phrases(){
    const grp = (titre, g) => [el("h2", null, titre), el("div", {class:"list"},
      CATEGORIES.filter(c => c.groupe === g).map(c => listRow("#/cat/" + c.id, ICON_CAT[c.id] || "chat", c.titre)))];
    return {kids:[pageHead("Situations"),
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
    const faites = ALL_LECONS.filter(l => leconFaite(l.id)).length;
    return {kids:[el("h1", null, "Apprendre"),
      el("p", {class:"muted", style:"margin:0"}, faites + " leçon" + (faites > 1 ? "s" : "") + " faite" + (faites > 1 ? "s" : "") + " sur " + ALL_LECONS.length),
      el("div", {class:"tiles"}, THEMES.map(t => {
        const n = nbFaites(t), tot = t.lecons.length, c = 100.5;
        return el("a", {href:"#/theme/" + t.id, class:"tile th-" + t.id},
          el("span", {class:"row", style:"justify-content:space-between;align-items:flex-start"},
            el("span", {class:"tile-ic", html: ICON[t.icone] || ICON.book}),
            el("span", {class:"ring", html: '<svg width="40" height="40" viewBox="0 0 40 40" role="img" aria-label="' + n + ' leçons sur ' + tot + '"><circle cx="20" cy="20" r="16" fill="none" stroke="var(--ring-bg)" stroke-width="5"/>' + (n ? '<circle cx="20" cy="20" r="16" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-dasharray="' + (c * n / tot).toFixed(1) + ' 101" transform="rotate(-90 20 20)"/>' : '') + '<text x="20" y="24" text-anchor="middle" font-size="11" font-weight="700" fill="currentColor">' + n + '/' + tot + '</text></svg>'})),
          el("b", null, t.titre));
      }))]};
  },

  theme(id){
    const t = THEMES.find(x => x.id === id);
    if(!t) return PAGES.apprendre();
    const n = nbFaites(t), courante = t.lecons.find(l => !leconFaite(l.id));
    const OFFS = [0, 70, -50, 60, -70, 40, -40, 60];
    return {kids:[
      el("div", {class:"theme-head th-" + t.id},
        el("div", {class:"row", style:"gap:12px"},
          el("button", {class:"iconbtn", type:"button", "aria-label":"Retour", html: ICON.back, onclick: goBack}),
          el("span", {class:"tile-s", style:"font-weight:600"}, "Thème " + (THEMES.indexOf(t) + 1) + " · " + t.officiel)),
        el("h1", {style:"font-size:28px"}, t.titre),
        el("div", {class:"row"}, el("div", {class:"bar grow theme-bar"}, el("div", {style:"width:" + Math.round(n / t.lecons.length * 100) + "%"})),
          el("b", {style:"font-size:13px"}, n + " / " + t.lecons.length))),
      el("a", {href:"#/entrainer/" + t.id, class:"btn outline"}, el("span", {html: ICON.target}), n ? "S'entraîner sur ce thème" : "S'entraîner (leçon 1)"),
      el("div", {class:"path"}, t.lecons.map((l, i) => {
        const fait = leconFaite(l.id), cur = l === courante;
        return el("a", {href:"#/lecont/" + l.id, class:"node th-" + t.id + (fait ? " done" : cur ? " cur" : ""), style:"transform:translateX(" + OFFS[i % OFFS.length] + "px)"},
          el("span", {class:"dot", html: fait ? ICON.check.replace('width="44" height="44"', 'width="28" height="28"') : cur ? ICON.play : String(i + 1)}),
          el("span", {class:"lab"}, cur ? (i + 1) + " · " + l.titre : l.titre));
      }))]};
  },

  lecont(id){
    const l = ALL_LECONS.find(x => x.id === id);
    if(!l) return PAGES.accueil();
    document.body.classList.add("immersive");
    const exos = tirer(l.pool, 8);
    let etape = 0;
    const wrap = el("div", {class:"stack", style:"min-height:calc(100vh - 44px);min-height:calc(100dvh - 44px)"});
    function draw(){
      stopAll();
      const top = el("div", {class:"row", style:"gap:14px"},
        el("a", {href:"#/", class:"iconbtn", "aria-label":"Fermer la leçon", html: ICON.x}),
        el("div", {class:"bar grow big"}, el("div", {style:"width:0%"})));
      const kicker = txt => el("span", {class:"muted", style:"font-size:14px;font-weight:600"}, txt);
      let body = [], label;
      if(etape === 0){
        const regleLue = [lu(l.regle), ...(l.astuce ? [ASTUCE, lu(l.astuce)] : [])];
        body = [kicker("La règle"), el("div", {class:"row", style:"justify-content:space-between;align-items:flex-start;gap:12px"},
          el("h1", {style:"font-size:27px"}, l.titre), spkBtn(() => speakSeq(regleLue), "Écouter la règle"))];
        if(pget("lireConsignes", true)) setTimeout(() => speakSeq(regleLue), 400);
        if(l.mots.length) body.push(el("div", {class:"list"}, l.mots.map(([m, d]) => {
          pageTexts.add(m);
          return el("button", {type:"button", onclick:() => speak(m)}, ic("soundSm", "lic"),
            el("span", {class:"grow"}, el("b", null, m), el("div", {class:"soft", style:"font-weight:400"}, d)));
        })));
        if(l.tableau) body.push(tableBlock(l.tableau));
        body.push(el("div", {class:"card stack", style:"gap:8px"}, mdBlock(l.regle)));
        if(l.astuce) body.push(el("div", {class:"note warm"}, ic("info"), el("div", null, el("b", null, "Astuce : "), mdBlock(l.astuce))));
        label = "Voir les exemples";
      } else {
        body = [kicker("Les exemples"), el("div", {class:"row", style:"justify-content:space-between;align-items:flex-start;gap:12px"},
          el("h1", {style:"font-size:27px"}, "Écoutez, puis répétez"), spkBtn(() => speakSeq([ECOUTEZ, ...l.exemples.map(x => x.replace(/\*\*/g, ""))]), "Écouter les exemples")),
          el("div", {class:"card"}, l.exemples.map(x => exLine(x))),
          el("p", {class:"soft", style:"margin:0"}, "Touchez une phrase pour l'écouter.")];
        label = "Commencer les exercices";
        setTimeout(() => speakSeq(l.exemples.map(x => x.replace(/\*\*/g, ""))), 400);
      }
      const go_ = () => {
        if(etape === 0){ etape = 1; draw(); return; }
        wrap.replaceChildren(serie(exos, {fermer:"#/", fin:(sc, tot) => {
          marquerLecon(l.id);
          return {body: finSerie(sc, tot, "Leçon « " + l.titre + " » terminée."),
            foot:[boutonSuite(), el("a", {href:"#/", class:"btn outline", style:"margin-top:10px"}, "Retour au parcours")]};
        }}));
      };
      wrap.replaceChildren(top, ...body, el("div", {class:"grow"}),
        el("div", {class:"footer"}, el("button", {class:"btn", type:"button", onclick: go_}, label, el("span", {html: ICON.next}))));
      window.scrollTo(0, 0);
      setTimeout(preloadPage, 50);
    }
    draw();
    return {kids:[wrap]};
  },

  /* S'entraîner : 10 exercices d'un thème (leçons déjà faites), ou Mes erreurs */
  entrainer(arg){
    let exos, titre, retour;
    if(arg === "erreurs"){
      exos = shuffle(listeErreurs().map(id => EXOS[id])).slice(0, 10); titre = "Mes erreurs"; retour = "#/reviser";
    } else {
      const t = THEMES.find(x => x.id === arg);
      if(!t) return PAGES.apprendre();
      const faites = t.lecons.filter(l => leconFaite(l.id));
      exos = tirer((faites.length ? faites : t.lecons.slice(0, 1)).flatMap(l => l.pool), 10); titre = t.titre; retour = "#/theme/" + t.id;
    }
    if(!exos.length) return {kids:[pageHead(titre), el("div", {class:"done", html: ICON.check}),
      el("h2", {style:"text-align:center"}, "Aucune erreur à refaire"),
      el("p", {class:"muted", style:"text-align:center;margin:0"}, "Quand vous ratez un exercice, il arrive ici. Réussissez-le 2 fois de suite pour le corriger."),
      el("p", {class:"soft", style:"text-align:center;margin:0"}, pluriel(pget("corrigees", 0), "erreur") + " déjà " + (pget("corrigees", 0) > 1 ? "corrigées" : "corrigée") + ".")]};
    const corrAvant = pget("corrigees", 0);
    return {kids:[serie(exos, {fermer: retour, fin:(sc, tot) => {
      const corr = pget("corrigees", 0) - corrAvant, reste = listeErreurs().length;
      const txt = arg === "erreurs"
        ? (corr ? pluriel(corr, "erreur") + " " + (corr > 1 ? "corrigées" : "corrigée") + ". " : "") + (reste ? "Encore " + reste + " à refaire." : "Toutes vos erreurs sont corrigées !")
        : null;
      return {body: finSerie(sc, tot, txt), foot:[
        el("button", {class:"btn", type:"button", onclick:() => render()}, el("span", {html: ICON.replay}), "Recommencer"),
        el("a", {href: retour, class:"btn outline", style:"margin-top:10px"}, "Retour")]};
    }})]};
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
          el("p", {style:"margin:0"}, score >= 8 ? "Bravo, vous êtes très " + accord("fort", "forte") + " !" : score >= 5 ? "C'est bien, continuez !" : "Relisez les astuces et réessayez."),
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
const TABS = [["accueil","#/","map","Parcours"],["reviser","#/reviser","replay","Réviser"],["profil","#/profil","user","Profil"]];
const TAB_OF = {bienvenue:"", ajouter:"", tuto:"", accueil:"accueil", lecon:"accueil", unite:"accueil", guide:"accueil", situ:"accueil", revision:"accueil", lecont:"accueil",
  grammaire:"reviser", apprendre:"reviser", theme:"reviser", reviser:"reviser",
  pratiquer:"reviser", sons:"reviser", phrases:"reviser", cat:"reviser", favoris:"reviser", entrainer:"reviser",
  homophones:"reviser", construire:"reviser", conjugaison:"reviser", quiz:"reviser", ordre:"reviser",
  profil:"profil", profils:"profil", personnes:"profil", reglage:"profil"};
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
