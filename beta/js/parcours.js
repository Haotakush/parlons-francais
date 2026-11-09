/* Le parcours : une seule suite d'unités, de la plus facile à la plus difficile.
   Chaque unité mélange des leçons des 8 thèmes (js/lecons.js), une ou deux situations de la vie
   (CATEGORIES de js/contenu.js) et se termine par une révision.
   « but » : 2 phrases courtes (FALC) qui disent à quoi sert l'unité.
   « ville » : la ville du voyage de Plume (image beta/img/villes/<ville>.webp). Toulouse et Paris servent 2 fois. */
const VILLES = {paris:"Paris", lyon:"Lyon", marseille:"Marseille", nice:"Nice", annecy:"Annecy", toulouse:"Toulouse", bordeaux:"Bordeaux", strasbourg:"Strasbourg"};
const UNITES = [
  {ville:"paris", titre:"Les bases", but:["Faire une phrase simple.", "Dire bonjour poliment."],
   lecons:["phrases-1", "genre-1", "genre-2", "verbes-2", "mots-1", "ponctuation-1"], situations:["politesse"]},
  {ville:"lyon", titre:"Parler au présent", but:["Dire ce que vous faites.", "Dire non."],
   lecons:["verbes-1", "phrases-2", "homophones-1", "mots-2", "orthographe-1"], situations:["comprendre", "telephone"]},
  {ville:"marseille", titre:"Poser des questions", but:["Demander quelque chose.", "Parler des prix et de l'heure."],
   lecons:["phrases-3", "ponctuation-3", "verbes-3", "phrases-4", "mots-8"], situations:["argent"]},
  {ville:"nice", titre:"Décrire", but:["Parler du corps et des vêtements.", "Accorder les mots."],
   lecons:["genre-3", "genre-4", "mots-3", "genre-5", "mots-4", "homophones-2"], situations:["medecin"]},
  {ville:"annecy", titre:"Dire où et quand", but:["Dire où vous allez.", "Parler de demain."],
   lecons:["phrases-6", "genre-6", "verbes-6", "mots-5", "orthographe-2"], situations:["courses"]},
  {ville:"toulouse", titre:"Raconter hier (1)", but:["Dire ce que vous avez fait.", "Bien écrire la fin des verbes."],
   lecons:["verbes-4", "passe-1", "passe-2", "homophones-6", "ponctuation-2"], situations:["ecole"]},
  {ville:"toulouse", titre:"Raconter hier (2)", but:["Dire où vous êtes allé.", "Accorder avec être."],
   lecons:["verbes-5", "passe-3", "passe-4", "homophones-3", "orthographe-3"], situations:["rendezvous"]},
  {ville:"bordeaux", titre:"Relier ses idées", but:["Faire des phrases plus longues.", "Remplir des papiers."],
   lecons:["phrases-5", "phrases-7", "homophones-4", "mots-6", "orthographe-4", "ponctuation-4"], situations:["mairie"]},
  {ville:"strasbourg", titre:"Le travail et le passé", but:["Parler de votre travail.", "Dire comment c'était avant."],
   lecons:["verbes-7", "passe-5", "mots-7", "homophones-5", "orthographe-5"], situations:["garage"]},
  {ville:"paris", titre:"Écrire sans fautes", but:["Choisir le bon temps.", "Écrire un message propre."],
   lecons:["phrases-8", "verbes-8", "orthographe-6", "ponctuation-5"], situations:["avis"]}
];
