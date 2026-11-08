/* Leçons de la bêta : js/lecons.js + textes FALC de tools/falc/. Généré par tools/construire_beta.py, ne pas modifier ici. */
const THEMES = [
 {
  "id": "phrases",
  "titre": "Faire des phrases",
  "officiel": "Syntaxe et construction des phrases",
  "icone": "blocks",
  "lecons": [
   {
    "id": "phrases-1",
    "titre": "L'ordre des mots",
    "mots": [],
    "tableau": null,
    "regle": "D'abord : **qui ?**\n\nPuis : **l'action**.\n\nPuis : le reste. Quoi ? Où ? Quand ?\n\n**Je** répare la voiture.",
    "astuce": "Qui ? → Action ? → Quoi, où, quand ?",
    "retenir": "« **Qui fait quoi** », comme au cinéma : d'abord l'acteur, puis l'action, puis le décor.",
    "exemples": [
     "**Je** répare la voiture.",
     "**Mon fils** va à l'école.",
     "**Nous** mangeons à midi.",
     "**La pharmacie** ferme à 19 heures.",
     "**Le médecin** arrive demain."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je répare la voiture.",
      "faux": "Répare je la voiture.",
      "expl": "**Qui ?** → Je\n\n**L'action** → répare\n\n**Quoi ?** → la voiture"
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils va à l'école.",
      "faux": "Va mon fils à l'école.",
      "expl": "**Qui ?** → Mon fils\n\n**L'action** → va\n\n**Où ?** → à l'école"
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La pharmacie ferme à 19 heures.",
      "faux": "Ferme la pharmacie à 19 heures.",
      "expl": "**Qui ?** → La pharmacie\n\n**L'action** → ferme\n\n**Quand ?** → à 19 heures"
     },
     {
      "type": "completer",
      "phrase": "Mon mari ___ au garage.",
      "reponse": "travaille",
      "choix": [
       "travaille",
       "travailler",
       "travaillé"
      ],
      "expl": "Mon mari, c'est **il**.\n\nOn dit : il **travaille**."
     },
     {
      "type": "completer",
      "phrase": "___ allons au marché.",
      "reponse": "Nous",
      "choix": [
       "Nous",
       "Notre",
       "Nos"
      ],
      "expl": "**Nous** fait l'action.\n\nNous allons."
     },
     {
      "type": "completer",
      "phrase": "Les enfants ___ à la maison.",
      "reponse": "sont",
      "choix": [
       "sont",
       "est",
       "es"
      ],
      "expl": "Les enfants, c'est **ils**.\n\nOn dit : ils **sont**."
     },
     {
      "type": "ordre",
      "phrase": "Le bus arrive à huit heures.",
      "expl": "**Qui ?** → Le bus\n\n**L'action** → arrive\n\n**Quand ?** → à huit heures"
     },
     {
      "type": "ordre",
      "phrase": "Ma fille aime la musique.",
      "expl": "**Qui ?** → Ma fille\n\n**L'action** → aime\n\n**Quoi ?** → la musique"
     }
    ]
   },
   {
    "id": "phrases-2",
    "titre": "Dire non",
    "mots": [],
    "tableau": null,
    "regle": "Pour dire non :\n\n**ne** avant le verbe.\n\n**pas** après le verbe.\n\nJe **ne** sais **pas**.\n\nAvant a, e, i, o, u : ne devient **n'**.\n\nCe **n'**est **pas** grave.\n\nAutres façons de dire non :\n\n- ne… **plus** : plus maintenant\n- ne… **jamais** : à aucun moment\n- ne… **rien** : aucune chose\n- ne… **personne** : aucune personne",
    "astuce": "À l'oral, on dit souvent juste « pas ».\n\nÀ l'écrit, il faut **ne** et **pas**.",
    "retenir": "Le verbe est « pris en sandwich » : **ne** + verbe + **pas**. Le pain du dessus, le pain du dessous, le verbe au milieu.",
    "exemples": [
     "Je **ne** sais **pas**.",
     "Ce **n'**est **pas** grave.",
     "Il **ne** travaille **plus** ici.",
     "Je **ne** bois **jamais** de café.",
     "Je **n'**ai **rien** compris.",
     "Il **n'**y a **personne**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je ne comprends pas.",
      "faux": "Je ne pas comprends.",
      "expl": "**ne** avant le verbe.\n\n**pas** après le verbe.\n\nJe **ne** comprends **pas**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ce n'est pas loin.",
      "faux": "Ce ne est pas loin.",
      "expl": "« est » commence par **e**.\n\nDonc ne devient **n'**.\n\nCe **n'**est pas loin."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il n'a rien mangé.",
      "faux": "Il a ne rien mangé.",
      "expl": "Au passé : ne… rien autour de **a**.\n\nIl **n'**a **rien** mangé."
     },
     {
      "type": "completer",
      "phrase": "Je ___ suis pas d'accord.",
      "reponse": "ne",
      "choix": [
       "ne",
       "n'",
       "pas"
      ],
      "expl": "« suis » commence par **s**.\n\nOn garde **ne**.\n\nJe **ne** suis pas d'accord."
     },
     {
      "type": "completer",
      "phrase": "Elle n'habite ___ ici, elle a déménagé.",
      "reponse": "plus",
      "choix": [
       "plus",
       "rien",
       "personne"
      ],
      "expl": "Avant, elle habitait ici.\n\nPlus maintenant.\n\nOn dit : ne… **plus**."
     },
     {
      "type": "completer",
      "phrase": "Je ne vois ___ dans la rue.",
      "reponse": "personne",
      "choix": [
       "personne",
       "jamais",
       "plus"
      ],
      "expl": "On parle des gens.\n\nAucune personne : ne… **personne**."
     },
     {
      "type": "ordre",
      "phrase": "Je ne parle pas bien français.",
      "expl": "Je **ne** parle **pas** bien français."
     },
     {
      "type": "ordre",
      "phrase": "Il n'y a plus de pain.",
      "expl": "Il y a devient il **n'**y a.\n\nIl n'y a **plus** de pain : avant oui, maintenant non."
     }
    ]
   },
   {
    "id": "phrases-3",
    "titre": "Poser une question",
    "mots": [],
    "tableau": null,
    "regle": "3 façons de poser une question :\n\n- La voix monte : Tu viens demain ?\n- **Est-ce que** au début : Est-ce que tu viens ?\n- Un mot question au début.\n\nLes mots question :\n\n- **où** : un lieu\n- **quand** : un moment\n- **comment** : la manière\n- **combien** : un prix, une quantité\n- **pourquoi** : une raison\n- **qui** : une personne",
    "astuce": "Pourquoi ? On répond : **parce que**.",
    "retenir": "Les mots question répondent à un besoin. **Où** = la carte, **quand** = la montre, **combien** = le porte-monnaie, **comment** = le mode d'emploi, **pourquoi** = la raison (« parce que »).",
    "exemples": [
     "Tu viens demain ?",
     "**Est-ce que** vous êtes ouvert le samedi ?",
     "**Où** est la mairie ?",
     "**Combien** ça coûte ?",
     "**À quelle heure** commence l'école ?",
     "**Pourquoi** il est absent ?"
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Est-ce que vous avez une place demain ?",
      "faux": "Est-ce vous avez une place demain ?",
      "expl": "On écrit **est-ce que** en entier.\n\nEst-ce que vous avez une place ?"
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Pourquoi il est absent ?",
      "faux": "Parce que il est absent ?",
      "expl": "**Pourquoi** pose la question.\n\n**Parce que** donne la réponse."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Où est l'arrêt de bus ?",
      "faux": "Où l'arrêt de bus ?",
      "expl": "Il faut un verbe.\n\nOù **est** l'arrêt de bus ?"
     },
     {
      "type": "completer",
      "phrase": "___ ça coûte ?",
      "reponse": "Combien",
      "choix": [
       "Combien",
       "Comment",
       "Quand"
      ],
      "expl": "On demande un prix.\n\nOn dit : **combien**."
     },
     {
      "type": "completer",
      "phrase": "___ commence le rendez-vous ?",
      "reponse": "Quand",
      "choix": [
       "Quand",
       "Où",
       "Qui"
      ],
      "expl": "On demande un moment.\n\nOn dit : **quand**."
     },
     {
      "type": "completer",
      "phrase": "___ s'appelle votre fils ?",
      "reponse": "Comment",
      "choix": [
       "Comment",
       "Combien",
       "Pourquoi"
      ],
      "expl": "On demande le prénom.\n\nOn dit : **comment**."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que vous parlez français ?",
      "expl": "**Est-ce que** + la phrase normale.\n\nEst-ce que vous parlez français ?"
     },
     {
      "type": "ordre",
      "phrase": "Où est la salle d'attente ?",
      "expl": "**Où** + est + la chose.\n\nOù est la salle d'attente ?"
     }
    ]
   },
   {
    "id": "phrases-4",
    "titre": "Demander poliment",
    "mots": [],
    "tableau": null,
    "regle": "Pour être poli :\n\n- **je voudrais**\n- **pourriez-vous**\n- **est-ce que je peux**\n- et à la fin : **s'il vous plaît**\n\nOn dit **vous** : au médecin, à la maîtresse, aux clients, aux inconnus.\n\nOn dit **tu** : à la famille, aux amis, aux enfants.",
    "astuce": "« Je veux » est trop direct.\n\nDites : **je voudrais**.",
    "retenir": "Les mots magiques « **je voudrais** » et « **s'il vous plaît** » ouvrent toutes les portes. Et pour choisir entre tu et vous : **vous pour le bureau, tu pour la maison**.",
    "exemples": [
     "**Je voudrais** un rendez-vous, s'il vous plaît.",
     "**Pourriez-vous** répéter, s'il vous plaît ?",
     "**Est-ce que je peux** payer par carte ?",
     "**Vous pouvez** m'aider ?",
     "**Excusez-moi**, je cherche la gare.",
     "**Merci beaucoup**, bonne journée."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "la plus polie",
      "juste": "Je voudrais un kilo de pommes, s'il vous plaît.",
      "faux": "Je veux un kilo de pommes.",
      "expl": "**Je voudrais** est plus doux que je veux.\n\n**S'il vous plaît** montre le respect."
     },
     {
      "type": "choisir",
      "consigne": "chez le médecin",
      "juste": "Bonjour docteur, vous allez bien ?",
      "faux": "Salut docteur, tu vas bien ?",
      "expl": "Le médecin n'est pas un ami.\n\nOn dit **bonjour** et **vous**."
     },
     {
      "type": "choisir",
      "consigne": "la plus polie",
      "juste": "Pourriez-vous parler plus lentement ?",
      "faux": "Parle plus lentement !",
      "expl": "**Pourriez-vous** est une question polie.\n\n« Parle ! » est un ordre."
     },
     {
      "type": "completer",
      "phrase": "Je ___ prendre rendez-vous.",
      "reponse": "voudrais",
      "choix": [
       "voudrais",
       "veux",
       "vouloir"
      ],
      "expl": "**Je voudrais** + un verbe.\n\nJe voudrais prendre rendez-vous."
     },
     {
      "type": "completer",
      "phrase": "Est-ce que je ___ entrer ?",
      "reponse": "peux",
      "choix": [
       "peux",
       "peut",
       "pouvoir"
      ],
      "expl": "Avec **je**, on écrit **peux**.\n\nAvec il ou elle : **peut**."
     },
     {
      "type": "completer",
      "phrase": "Merci, ___ journée !",
      "reponse": "bonne",
      "choix": [
       "bonne",
       "bon",
       "bien"
      ],
      "expl": "**Une** journée : c'est féminin.\n\nOn dit : **bonne** journée."
     },
     {
      "type": "ordre",
      "phrase": "Je voudrais parler au directeur, s'il vous plaît.",
      "expl": "Je voudrais parler au directeur.\n\nÀ la fin : **s'il vous plaît**."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que je peux vous poser une question ?",
      "expl": "Est-ce que je peux…\n\n**vous** va avant poser."
     }
    ]
   },
   {
    "id": "phrases-5",
    "titre": "Relier deux idées",
    "mots": [],
    "tableau": null,
    "regle": "Des petits mots relient deux idées :\n\n- **et** : ajouter\n- **mais** : le contraire\n- **ou** : choisir\n- **donc**, **alors** : la conséquence\n- **parce que** : la raison\n- **quand** : le moment\n- **si** : la condition",
    "astuce": "Avant a, e, i, o, u :\n\nparce que devient **parce qu'**.\n\nParce qu'il est malade.",
    "retenir": "« **Mais où est donc Ornicar ?** », la phrase célèbre des écoliers français, rassemble les petits mots qui relient : mais, ou, et, donc, or, ni, car.",
    "exemples": [
     "Il a mal à la tête **et** il tousse.",
     "La voiture roule, **mais** elle fait du bruit.",
     "Tu veux du thé **ou** du café ?",
     "La batterie est vide, **donc** la voiture ne démarre pas.",
     "Il est absent **parce qu'**il est malade.",
     "**Si** c'est urgent, je peux venir ce soir."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il est absent parce qu'il est malade.",
      "faux": "Il est absent parce que il est malade.",
      "expl": "« il » commence par **i**.\n\nDonc : parce **qu'**il."
     },
     {
      "type": "choisir",
      "consigne": "la phrase logique",
      "juste": "J'ai faim, donc je mange.",
      "faux": "J'ai faim, mais je mange.",
      "expl": "J'ai faim. Alors je mange.\n\nC'est la conséquence : **donc**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Tu veux du thé ou du café ?",
      "faux": "Tu veux du thé où du café ?",
      "expl": "On choisit entre deux boissons.\n\n**ou** sans accent."
     },
     {
      "type": "completer",
      "phrase": "Il pleut, ___ je prends mon parapluie.",
      "reponse": "donc",
      "choix": [
       "donc",
       "mais",
       "ou"
      ],
      "expl": "Il pleut. Alors je prends le parapluie.\n\nLa conséquence : **donc**."
     },
     {
      "type": "completer",
      "phrase": "La voiture est vieille, ___ elle roule bien.",
      "reponse": "mais",
      "choix": [
       "mais",
       "donc",
       "parce que"
      ],
      "expl": "Vieille, et elle roule bien.\n\nDeux idées contraires : **mais**."
     },
     {
      "type": "completer",
      "phrase": "___ tu as besoin d'aide, appelle-moi.",
      "reponse": "Si",
      "choix": [
       "Si",
       "Et",
       "Mais"
      ],
      "expl": "Peut-être que tu as besoin d'aide.\n\nLa condition : **si**."
     },
     {
      "type": "ordre",
      "phrase": "Je reste à la maison parce que je suis fatiguée.",
      "expl": "Je reste à la maison.\n\n**Parce que** donne la raison."
     },
     {
      "type": "ordre",
      "phrase": "Il travaille le matin et il étudie le soir.",
      "expl": "Deux actions.\n\nOn les relie avec **et**."
     }
    ]
   },
   {
    "id": "phrases-6",
    "titre": "Dire quand et où",
    "mots": [],
    "tableau": null,
    "regle": "**Quand ?**\n\n- **il y a** deux jours : dans le passé\n- **dans** deux jours : dans le futur\n- **depuis** trois ans : ça continue encore\n- **pendant** une heure : une durée\n\n**Où ?**\n\n- **à** + une ville : à Lyon\n- **en** + un pays féminin : en France\n- **au** + un pays masculin : au Maroc\n- **chez** + une personne : chez le médecin",
    "astuce": "**Chez** : pour une personne.\n\n**À** : pour un lieu.\n\nChez le médecin, à l'hôpital.",
    "retenir": "**Il y a** regarde derrière (le passé), **dans** regarde devant (le futur), **depuis** n'est pas fini. Et « **chez** », c'est toujours chez **quelqu'un**.",
    "exemples": [
     "J'habite **à** Lyon **depuis** trois ans.",
     "Il est arrivé **en** France **il y a** dix ans.",
     "La voiture sera prête **dans** deux jours.",
     "J'ai attendu **pendant** une heure.",
     "Je vais **chez** le médecin.",
     "Ma sœur habite **en** Algérie."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais chez le médecin.",
      "faux": "Je vais au médecin.",
      "expl": "Le médecin est une personne.\n\nOn dit : **chez** le médecin."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'habite en France.",
      "faux": "J'habite à France.",
      "expl": "La France est un pays féminin.\n\nOn dit : **en** France."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je suis arrivé il y a deux jours.",
      "faux": "Je suis arrivé dans deux jours.",
      "expl": "C'est déjà passé.\n\nOn dit : **il y a** deux jours."
     },
     {
      "type": "completer",
      "phrase": "J'habite ici ___ cinq ans.",
      "reponse": "depuis",
      "choix": [
       "depuis",
       "dans",
       "pendant"
      ],
      "expl": "J'habite ici et ça continue.\n\nOn dit : **depuis**."
     },
     {
      "type": "completer",
      "phrase": "Le bus arrive ___ dix minutes.",
      "reponse": "dans",
      "choix": [
       "dans",
       "il y a",
       "depuis"
      ],
      "expl": "Le bus n'est pas encore là.\n\nOn dit : **dans** dix minutes."
     },
     {
      "type": "completer",
      "phrase": "Je vais ___ mairie.",
      "reponse": "à la",
      "choix": [
       "à la",
       "au",
       "en"
      ],
      "expl": "**La** mairie.\n\nOn dit : **à la** mairie."
     },
     {
      "type": "ordre",
      "phrase": "Nous partons en vacances dans une semaine.",
      "expl": "**Qui ?** → Nous\n\n**L'action** → partons\n\n**Quand ?** → dans une semaine"
     },
     {
      "type": "ordre",
      "phrase": "Je travaille au garage depuis deux ans.",
      "expl": "Je travaille au garage.\n\nÇa continue : **depuis** deux ans."
     }
    ]
   },
   {
    "id": "phrases-7",
    "titre": "Des phrases plus longues (qui, que, où)",
    "mots": [],
    "tableau": null,
    "regle": "Ces petits mots évitent de répéter un nom.\n\n- **qui** : ce mot fait l'action. Le garçon **qui** joue.\n- **que** : quelqu'un d'autre fait l'action. La voiture **que** je répare.\n- **où** : un lieu ou un moment. La ville **où** j'habite.",
    "astuce": "Après **qui**, il y a souvent un verbe.\n\nAprès **que**, il y a souvent je, tu, il, nous.",
    "retenir": "**Qui** est suivi d'un **verbe** (qui joue, qui parle), **que** est suivi d'une **personne** (que je, que tu, que vous). Et « **où** » a un accent comme une petite flèche qui montre le lieu.",
    "exemples": [
     "J'ai un fils **qui** va à l'école.",
     "C'est le médecin **qui** m'a soigné.",
     "Le pain **que** j'achète est bon.",
     "La voiture **que** vous m'avez laissée est prête.",
     "C'est la ville **où** je suis né.",
     "Le jour **où** il est arrivé, il pleuvait."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Le livre que je lis est intéressant.",
      "faux": "Le livre qui je lis est intéressant.",
      "expl": "Après, il y a **je**.\n\nDonc : **que**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "L'homme qui parle est mon voisin.",
      "faux": "L'homme que parle est mon voisin.",
      "expl": "Après, il y a le verbe **parle**.\n\nDonc : **qui**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La maison où j'habite est grande.",
      "faux": "La maison que j'habite dedans est grande.",
      "expl": "La maison est un lieu.\n\nDonc : **où**."
     },
     {
      "type": "completer",
      "phrase": "C'est le garage ___ je travaille.",
      "reponse": "où",
      "choix": [
       "où",
       "qui",
       "que"
      ],
      "expl": "Le garage est un lieu.\n\nDonc : **où**."
     },
     {
      "type": "completer",
      "phrase": "La dame ___ arrive est la maîtresse.",
      "reponse": "qui",
      "choix": [
       "qui",
       "que",
       "où"
      ],
      "expl": "Après, il y a le verbe **arrive**.\n\nDonc : **qui**."
     },
     {
      "type": "completer",
      "phrase": "Le plat ___ tu prépares sent bon.",
      "reponse": "que",
      "choix": [
       "que",
       "qui",
       "où"
      ],
      "expl": "Après, il y a **tu**.\n\nDonc : **que**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai une voisine qui parle kabyle.",
      "expl": "La voisine parle.\n\nElle fait l'action : **qui**."
     },
     {
      "type": "ordre",
      "phrase": "C'est la pharmacie où j'achète mes médicaments.",
      "expl": "La pharmacie est un lieu.\n\nDonc : **où**."
     }
    ]
   },
   {
    "id": "phrases-8",
    "titre": "Remplacer un mot (le, la, lui, y, en)",
    "mots": [],
    "tableau": null,
    "regle": "Pour ne pas répéter, on met un petit mot **avant le verbe**.\n\n- **le, la, les** : une chose ou une personne. Je **la** répare.\n- **lui, leur** : à une personne. Je **lui** parle.\n- **y** : un lieu. J'**y** vais.\n- **en** : une quantité. J'**en** veux.",
    "astuce": "Le petit mot va **avant** le verbe.\n\nJe **la** répare.",
    "retenir": "Le petit mot est **timide**, il se cache **devant le verbe**. Et pour choisir : **y = là-bas** (un lieu), **en = un peu de** (une quantité), **lui = à lui ou à elle**.",
    "exemples": [
     "Votre voiture ? Je **la** répare demain.",
     "Les clés ? Je **les** ai sur moi.",
     "Le client ? Je **lui** téléphone ce soir.",
     "La mairie ? J'**y** vais lundi.",
     "Du café ? Oui, j'**en** veux bien.",
     "Mes enfants ? Je **leur** parle français."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je la répare demain.",
      "faux": "Je répare la demain.",
      "expl": "**La** remplace la voiture.\n\nIl va avant le verbe."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'y vais demain.",
      "faux": "Je y vais demain.",
      "expl": "**y** commence par une voyelle.\n\nJe devient **j'** : j'y vais."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je lui téléphone.",
      "faux": "Je le téléphone.",
      "expl": "On téléphone **à** quelqu'un.\n\nAvec **à**, on dit **lui**."
     },
     {
      "type": "completer",
      "phrase": "Le pain ? Je ___ achète à la boulangerie.",
      "reponse": "l'",
      "choix": [
       "l'",
       "lui",
       "y"
      ],
      "expl": "Le pain : **le**.\n\nAvant une voyelle : **l'**."
     },
     {
      "type": "completer",
      "phrase": "Ta sœur ? Je ___ écris une lettre.",
      "reponse": "lui",
      "choix": [
       "lui",
       "la",
       "en"
      ],
      "expl": "On écrit **à** sa sœur.\n\nAvec **à**, on dit **lui**."
     },
     {
      "type": "completer",
      "phrase": "Des tomates ? J'___ prends deux kilos.",
      "reponse": "en",
      "choix": [
       "en",
       "y",
       "les"
      ],
      "expl": "Une quantité de tomates.\n\nOn dit : **en**."
     },
     {
      "type": "ordre",
      "phrase": "Je les cherche depuis ce matin.",
      "expl": "**Les** remplace les clés.\n\nIl va avant le verbe."
     },
     {
      "type": "ordre",
      "phrase": "Nous y allons ensemble.",
      "expl": "**Y** remplace un lieu.\n\nIl va avant le verbe."
     }
    ]
   }
  ]
 },
 {
  "id": "mots",
  "titre": "Les mots du quotidien",
  "officiel": "Vocabulaire et lexicologie",
  "icone": "book",
  "lecons": [
   {
    "id": "mots-1",
    "titre": "La maison",
    "mots": [
     [
      "la cuisine",
      "la pièce où on prépare les repas"
     ],
     [
      "la chambre",
      "la pièce où on dort"
     ],
     [
      "la salle de bain",
      "la pièce où on se lave"
     ],
     [
      "les toilettes",
      "la pièce des WC (toujours au pluriel)"
     ],
     [
      "le salon",
      "la pièce où on s'assoit, où on reçoit"
     ],
     [
      "le lit",
      "le meuble pour dormir"
     ],
     [
      "la fenêtre",
      "l'ouverture vitrée dans le mur"
     ],
     [
      "la porte",
      "elle s'ouvre pour entrer et sortir"
     ],
     [
      "la clé",
      "elle sert à ouvrir et fermer la porte"
     ],
     [
      "le chauffage",
      "ce qui chauffe la maison en hiver"
     ],
     [
      "le loyer",
      "l'argent payé chaque mois pour le logement"
     ],
     [
      "le propriétaire",
      "la personne à qui appartient le logement"
     ]
    ],
    "tableau": null,
    "regle": "Pour dire où : **dans** + la pièce.\n\nDans la cuisine.\n\nDans la chambre.",
    "astuce": "On dit toujours **les** toilettes.\n\nMême s'il y en a une seule.",
    "retenir": "Chaque pièce a son verbe. **Cuisiner** dans la cuisine, **se laver** dans la salle de bain, **dormir** dans la chambre, **se reposer** dans le salon.",
    "exemples": [
     "Le **chauffage** ne marche pas.",
     "Je paie le **loyer** le 5 du mois.",
     "J'ai perdu la **clé** de la porte.",
     "Les enfants dorment dans la **chambre**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je prépare le repas dans la cuisine.",
      "faux": "Je prépare le repas dans la chambre.",
      "expl": "On prépare le repas dans la **cuisine**.\n\nOn dort dans la **chambre**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il fait froid, j'allume le chauffage.",
      "faux": "Il fait froid, j'ouvre la fenêtre.",
      "expl": "Il fait froid.\n\nOn allume le **chauffage**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je paie le loyer au propriétaire.",
      "faux": "Je paie le propriétaire au loyer.",
      "expl": "On paie **le loyer**.\n\nOn le paie **au propriétaire**."
     },
     {
      "type": "completer",
      "phrase": "Je ferme ___ à clé.",
      "reponse": "la porte",
      "choix": [
       "la porte",
       "le lit",
       "le salon"
      ],
      "expl": "La clé sert pour **la porte**."
     },
     {
      "type": "completer",
      "phrase": "Je prends une douche dans ___.",
      "reponse": "la salle de bain",
      "choix": [
       "la salle de bain",
       "la cuisine",
       "le salon"
      ],
      "expl": "La douche est dans **la salle de bain**."
     },
     {
      "type": "completer",
      "phrase": "Où sont ___ ? Au fond du couloir.",
      "reponse": "les toilettes",
      "choix": [
       "les toilettes",
       "la toilette",
       "le toilette"
      ],
      "expl": "On dit toujours **les toilettes**."
     },
     {
      "type": "ordre",
      "phrase": "Le chauffage ne marche pas depuis hier.",
      "expl": "**Qui ?** → Le chauffage\n\n**Quoi ?** → ne marche pas\n\n**Depuis quand ?** → depuis hier"
     },
     {
      "type": "ordre",
      "phrase": "J'ai perdu la clé de la maison.",
      "expl": "J'ai perdu la clé.\n\nLa clé **de la maison**."
     }
    ]
   },
   {
    "id": "mots-2",
    "titre": "La cuisine et les repas",
    "mots": [
     [
      "le petit-déjeuner",
      "le repas du matin"
     ],
     [
      "le déjeuner",
      "le repas de midi"
     ],
     [
      "le goûter",
      "le petit repas de l'après-midi, pour les enfants"
     ],
     [
      "le dîner",
      "le repas du soir"
     ],
     [
      "le frigo",
      "l'appareil qui garde les aliments au froid"
     ],
     [
      "le four",
      "l'appareil pour cuire un gâteau, un poulet"
     ],
     [
      "la casserole",
      "pour faire chauffer l'eau, la soupe"
     ],
     [
      "la poêle",
      "pour faire cuire les œufs, la viande"
     ],
     [
      "l'assiette",
      "on mange dedans"
     ],
     [
      "le verre",
      "on boit dedans"
     ],
     [
      "la fourchette",
      "pour piquer les aliments"
     ],
     [
      "la cuillère",
      "pour manger la soupe"
     ],
     [
      "le couteau",
      "pour couper"
     ]
    ],
    "tableau": null,
    "regle": "Le matin : le **petit-déjeuner**.\n\nÀ midi : on **déjeune**.\n\nLe soir : on **dîne**.",
    "astuce": "**Mettre la table** :\n\nposer les assiettes, les verres et les couverts.",
    "retenir": "Fourchette, assiette, serviette… les mots en **-ette** sont presque toujours féminins : **la** fourchette, **l'**assiette, **la** serviette.",
    "exemples": [
     "On **déjeune** à midi et demi.",
     "Mets le lait dans le **frigo**.",
     "Le gâteau cuit dans le **four**.",
     "Les enfants prennent un **goûter** à quatre heures."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Le matin, je prends le petit-déjeuner.",
      "faux": "Le matin, je prends le dîner.",
      "expl": "Le matin, c'est le **petit-déjeuner**.\n\nLe dîner, c'est le soir."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je coupe le pain avec un couteau.",
      "faux": "Je coupe le pain avec un verre.",
      "expl": "On coupe avec un **couteau**.\n\nLe verre sert à boire."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je mange la soupe avec une cuillère.",
      "faux": "Je mange la soupe avec une fourchette.",
      "expl": "La soupe est liquide.\n\nOn prend une **cuillère**."
     },
     {
      "type": "completer",
      "phrase": "Je mets les yaourts dans ___.",
      "reponse": "le frigo",
      "choix": [
       "le frigo",
       "le four",
       "la poêle"
      ],
      "expl": "Les yaourts restent au froid.\n\nDans le **frigo**."
     },
     {
      "type": "completer",
      "phrase": "Je fais cuire les œufs dans ___.",
      "reponse": "la poêle",
      "choix": [
       "la poêle",
       "le verre",
       "l'assiette"
      ],
      "expl": "Les œufs cuisent dans **la poêle**."
     },
     {
      "type": "completer",
      "phrase": "Le soir, nous ___ à vingt heures.",
      "reponse": "dînons",
      "choix": [
       "dînons",
       "déjeunons",
       "goûtons"
      ],
      "expl": "Le repas du soir : le dîner.\n\nNous **dînons**."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants prennent le goûter après l'école.",
      "expl": "**Qui ?** → Les enfants\n\n**Quoi ?** → prennent le goûter\n\n**Quand ?** → après l'école"
     },
     {
      "type": "ordre",
      "phrase": "Je mets la table pour le dîner.",
      "expl": "On met la table **pour le dîner**."
     }
    ]
   },
   {
    "id": "mots-3",
    "titre": "Le corps et la santé",
    "mots": [
     [
      "la tête",
      "le haut du corps, avec le visage"
     ],
     [
      "la gorge",
      "l'intérieur du cou, on avale par là"
     ],
     [
      "le ventre",
      "le milieu du corps, devant"
     ],
     [
      "le dos",
      "l'arrière du corps"
     ],
     [
      "le bras / la main",
      "pour porter, pour prendre"
     ],
     [
      "la jambe / le pied",
      "pour marcher"
     ],
     [
      "les dents",
      "dans la bouche, pour mâcher"
     ],
     [
      "l'oreille",
      "pour entendre"
     ],
     [
      "la fièvre",
      "le corps est trop chaud (plus de 38 degrés)"
     ],
     [
      "le rhume",
      "le nez coule, on éternue"
     ],
     [
      "le médicament",
      "ce qu'on prend pour guérir"
     ],
     [
      "l'ordonnance",
      "la feuille du médecin pour la pharmacie"
     ]
    ],
    "tableau": null,
    "regle": "Pour dire où on a mal :\n\n- **à la** : à la tête\n- **au** : au ventre\n- **aux** : aux dents",
    "astuce": "On dit **avoir** de la fièvre.\n\nIl **a** de la fièvre.",
    "retenir": "**Au** = à + le, **aux** = à + les. Le dos → j'ai mal **au** dos. La tête → j'ai mal **à la** tête. Les dents → j'ai mal **aux** dents.",
    "exemples": [
     "J'ai mal **à la tête** depuis ce matin.",
     "Mon fils a de la **fièvre**.",
     "Il a mal **aux dents**.",
     "Voici l'**ordonnance** du médecin."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai mal au ventre.",
      "faux": "J'ai mal à le ventre.",
      "expl": "On ne dit pas « à le ».\n\nOn dit **au** ventre."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle a mal aux dents.",
      "faux": "Elle a mal à les dents.",
      "expl": "On ne dit pas « à les ».\n\nOn dit **aux** dents."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils a de la fièvre.",
      "faux": "Mon fils est de la fièvre.",
      "expl": "La fièvre, on l'**a**.\n\nIl **a** de la fièvre."
     },
     {
      "type": "completer",
      "phrase": "J'ai mal ___ tête.",
      "reponse": "à la",
      "choix": [
       "à la",
       "au",
       "aux"
      ],
      "expl": "**La** tête.\n\nOn dit **à la** tête."
     },
     {
      "type": "completer",
      "phrase": "Le pharmacien me donne les médicaments avec ___.",
      "reponse": "l'ordonnance",
      "choix": [
       "l'ordonnance",
       "le rhume",
       "la gorge"
      ],
      "expl": "Le médecin écrit **l'ordonnance**.\n\nOn la donne à la pharmacie."
     },
     {
      "type": "completer",
      "phrase": "Il tousse et il a mal à ___.",
      "reponse": "la gorge",
      "choix": [
       "la gorge",
       "le pied",
       "la jambe"
      ],
      "expl": "Il tousse.\n\nIl a mal à **la gorge**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai mal au dos depuis trois jours.",
      "expl": "J'ai mal **au dos**.\n\nDepuis trois jours."
     },
     {
      "type": "ordre",
      "phrase": "Le médecin m'a donné une ordonnance.",
      "expl": "**Qui ?** → Le médecin\n\n**Quoi ?** → m'a donné une ordonnance"
     }
    ]
   },
   {
    "id": "mots-4",
    "titre": "Les vêtements",
    "mots": [
     [
      "le pantalon",
      "pour couvrir les jambes"
     ],
     [
      "la chemise",
      "un haut avec des boutons"
     ],
     [
      "le pull",
      "un haut chaud, en laine"
     ],
     [
      "la veste",
      "un haut qu'on met par-dessus, pas très épais"
     ],
     [
      "le manteau",
      "une veste longue et chaude pour l'hiver"
     ],
     [
      "la robe / la jupe",
      "vêtements souvent portés par les femmes"
     ],
     [
      "les chaussures",
      "pour les pieds, pour marcher dehors"
     ],
     [
      "les chaussettes",
      "dans les chaussures, sur les pieds"
     ],
     [
      "le bonnet",
      "pour couvrir la tête quand il fait froid"
     ],
     [
      "l'écharpe",
      "autour du cou, quand il fait froid"
     ],
     [
      "la taille",
      "la grandeur d'un vêtement (S, M, L ou 38, 40…)"
     ],
     [
      "la pointure",
      "la grandeur d'une chaussure (39, 42…)"
     ]
    ],
    "tableau": null,
    "regle": "3 verbes :\n\n- **mettre** : je le mets sur moi\n- **porter** : je l'ai sur moi\n- **enlever** : je le retire",
    "astuce": "Vêtement : la **taille**.\n\nChaussure : la **pointure**.",
    "retenir": "Je **mets** mon manteau en sortant, je le **porte** dans la rue, je l'**enlève** en rentrant. Le matin on met, le soir on enlève.",
    "exemples": [
     "**Mets** ton manteau, il fait froid.",
     "Je cherche ce pantalon en **taille** 40.",
     "**Enlève** tes chaussures, s'il te plaît.",
     "Elle **porte** une robe bleue."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il fait froid, je mets mon manteau.",
      "faux": "Il fait froid, j'enlève mon manteau.",
      "expl": "Il fait froid.\n\nJe **mets** mon manteau."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Vous avez ces chaussures en pointure 42 ?",
      "faux": "Vous avez ces chaussures en taille 42 ?",
      "expl": "Pour les chaussures : la **pointure**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je porte des chaussettes dans mes chaussures.",
      "faux": "Je porte des chaussures dans mes chaussettes.",
      "expl": "D'abord les **chaussettes**.\n\nPuis les chaussures."
     },
     {
      "type": "completer",
      "phrase": "Autour du cou, je mets ___.",
      "reponse": "une écharpe",
      "choix": [
       "une écharpe",
       "un pantalon",
       "une jupe"
      ],
      "expl": "Autour du cou : **une écharpe**."
     },
     {
      "type": "completer",
      "phrase": "À la maison, j'___ mes chaussures.",
      "reponse": "enlève",
      "choix": [
       "enlève",
       "mets",
       "porte"
      ],
      "expl": "Je retire mes chaussures.\n\nJ'**enlève**."
     },
     {
      "type": "completer",
      "phrase": "Sur la tête, il porte ___.",
      "reponse": "un bonnet",
      "choix": [
       "un bonnet",
       "une chemise",
       "des chaussettes"
      ],
      "expl": "Sur la tête : **un bonnet**."
     },
     {
      "type": "ordre",
      "phrase": "Je cherche une veste pour l'hiver.",
      "expl": "Je cherche une veste.\n\n**Pour quand ?** → pour l'hiver"
     },
     {
      "type": "ordre",
      "phrase": "Mets ton bonnet, il fait froid.",
      "expl": "Mets ton bonnet.\n\n**Pourquoi ?** → il fait froid"
     }
    ]
   },
   {
    "id": "mots-5",
    "titre": "La ville et les transports",
    "mots": [
     [
      "la rue",
      "le chemin entre les maisons, en ville"
     ],
     [
      "le trottoir",
      "le bord de la rue, pour les piétons"
     ],
     [
      "le passage piéton",
      "les bandes blanches pour traverser"
     ],
     [
      "le feu",
      "la lumière rouge, orange ou verte au carrefour"
     ],
     [
      "l'arrêt de bus",
      "l'endroit où le bus s'arrête"
     ],
     [
      "la station",
      "l'arrêt du métro ou du tram"
     ],
     [
      "le ticket",
      "le petit papier pour voyager"
     ],
     [
      "l'abonnement",
      "la carte payée chaque mois pour les transports"
     ],
     [
      "la gare",
      "l'endroit où on prend le train"
     ],
     [
      "la boulangerie",
      "le magasin du pain"
     ],
     [
      "la pharmacie",
      "le magasin des médicaments"
     ],
     [
      "la poste",
      "l'endroit pour envoyer lettres et colis"
     ]
    ],
    "tableau": null,
    "regle": "On **prend** le bus, le métro, le train.\n\nOn est dedans : **en** bus, **en** voiture.\n\nOn est dessus : **à** pied, **à** vélo.",
    "astuce": "Dans le bus, il faut **valider** le ticket.\n\nOn le passe dans la machine.",
    "retenir": "**À** quand on est **dessus** (à pied, à vélo, à moto), **en** quand on est **dedans** (en bus, en voiture, en train).",
    "exemples": [
     "Je **prends le bus** à l'arrêt devant la pharmacie.",
     "Il faut **valider** le ticket.",
     "Attendez que le **feu** soit vert.",
     "La **gare** est à dix minutes **à pied**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais au travail en bus.",
      "faux": "Je vais au travail à bus.",
      "expl": "On est dedans.\n\nOn dit : **en** bus."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils va à l'école à pied.",
      "faux": "Mon fils va à l'école en pied.",
      "expl": "On est dessus.\n\nOn dit : **à** pied."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je traverse au passage piéton.",
      "faux": "Je traverse au trottoir.",
      "expl": "On traverse sur le **passage piéton**.\n\nLes bandes blanches."
     },
     {
      "type": "completer",
      "phrase": "J'achète le pain à ___.",
      "reponse": "la boulangerie",
      "choix": [
       "la boulangerie",
       "la poste",
       "la gare"
      ],
      "expl": "Le pain : à **la boulangerie**."
     },
     {
      "type": "completer",
      "phrase": "On traverse quand le feu piéton est ___.",
      "reponse": "vert",
      "choix": [
       "vert",
       "rouge",
       "orange"
      ],
      "expl": "Vert : on passe.\n\nRouge : on attend."
     },
     {
      "type": "completer",
      "phrase": "Je ___ le métro tous les jours.",
      "reponse": "prends",
      "choix": [
       "prends",
       "monte",
       "vais"
      ],
      "expl": "Un transport : on le **prend**.\n\nJe prends le métro."
     },
     {
      "type": "ordre",
      "phrase": "Le bus s'arrête devant la pharmacie.",
      "expl": "**Qui ?** → Le bus\n\n**Quoi ?** → s'arrête\n\n**Où ?** → devant la pharmacie"
     },
     {
      "type": "ordre",
      "phrase": "Je vais à la gare à vélo.",
      "expl": "On est dessus.\n\nOn dit : **à** vélo."
     }
    ]
   },
   {
    "id": "mots-6",
    "titre": "L'école et les papiers",
    "mots": [
     [
      "la maîtresse / le maître",
      "le professeur de l'école primaire"
     ],
     [
      "la classe",
      "la salle et le groupe d'élèves"
     ],
     [
      "la récréation",
      "la pause où les enfants jouent dans la cour"
     ],
     [
      "la cantine",
      "l'endroit où les élèves mangent à midi"
     ],
     [
      "les devoirs",
      "le travail à faire à la maison"
     ],
     [
      "le cahier de liaison",
      "le cahier pour les messages entre l'école et les parents"
     ],
     [
      "la réunion",
      "un rendez-vous avec plusieurs personnes"
     ],
     [
      "la mairie",
      "le bâtiment de la ville pour les papiers"
     ],
     [
      "le formulaire",
      "une feuille à remplir"
     ],
     [
      "la pièce d'identité",
      "la carte d'identité, le passeport ou le titre de séjour"
     ],
     [
      "le justificatif de domicile",
      "un papier qui prouve où on habite (une facture, une quittance de loyer)"
     ],
     [
      "la signature",
      "son nom écrit à la main, en bas d'un papier"
     ]
    ],
    "tableau": null,
    "regle": "On **remplit** un formulaire.\n\nOn **signe** un papier.\n\nOn **apporte** un justificatif.",
    "astuce": "Avant la mairie, demandez :\n\n« Quels papiers je dois apporter ? »",
    "retenir": "Un **justificatif** **justifie**, c'est-à-dire qu'il **prouve**. Le justificatif de domicile prouve où j'habite.",
    "exemples": [
     "Je **signe** le cahier de liaison chaque soir.",
     "Mon fils mange à la **cantine** le midi.",
     "Il faut **remplir** ce formulaire.",
     "Apportez une **pièce d'identité** et un **justificatif de domicile**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Les enfants jouent dans la cour à la récréation.",
      "faux": "Les enfants jouent dans la cour à la cantine.",
      "expl": "La **récréation** : on joue dans la cour.\n\nLa cantine : on mange."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je signe en bas de la page.",
      "faux": "Je signature en bas de la page.",
      "expl": "Signature est un nom.\n\nL'action : je **signe**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Une facture d'électricité est un justificatif de domicile.",
      "faux": "Une facture d'électricité est une pièce d'identité.",
      "expl": "La facture montre votre adresse.\n\nC'est un **justificatif de domicile**."
     },
     {
      "type": "completer",
      "phrase": "Mon fils fait ses ___ après l'école.",
      "reponse": "devoirs",
      "choix": [
       "devoirs",
       "cantines",
       "signatures"
      ],
      "expl": "Le travail à la maison : les **devoirs**."
     },
     {
      "type": "completer",
      "phrase": "La maîtresse écrit un mot dans le ___.",
      "reponse": "cahier de liaison",
      "choix": [
       "cahier de liaison",
       "formulaire",
       "justificatif"
      ],
      "expl": "Les messages de l'école :\n\nle **cahier de liaison**."
     },
     {
      "type": "completer",
      "phrase": "Pour la carte d'identité, je vais à ___.",
      "reponse": "la mairie",
      "choix": [
       "la mairie",
       "la cantine",
       "la classe"
      ],
      "expl": "Les papiers d'identité :\n\nà **la mairie**."
     },
     {
      "type": "ordre",
      "phrase": "Il faut remplir ce formulaire avant lundi.",
      "expl": "Il faut **remplir** le formulaire.\n\n**Quand ?** → avant lundi"
     },
     {
      "type": "ordre",
      "phrase": "La réunion des parents est jeudi soir.",
      "expl": "**Quoi ?** → La réunion des parents\n\n**Quand ?** → jeudi soir"
     }
    ]
   },
   {
    "id": "mots-7",
    "titre": "La voiture et le travail",
    "mots": [
     [
      "le moteur",
      "la partie qui fait avancer la voiture"
     ],
     [
      "les freins",
      "pour ralentir et s'arrêter"
     ],
     [
      "les pneus",
      "le caoutchouc autour des roues"
     ],
     [
      "la batterie",
      "elle donne l'électricité pour démarrer"
     ],
     [
      "le volant",
      "on le tourne pour diriger la voiture"
     ],
     [
      "les phares",
      "les lumières à l'avant"
     ],
     [
      "l'essence / le gazole",
      "le carburant (on fait le plein)"
     ],
     [
      "le devis",
      "le prix prévu, donné avant le travail"
     ],
     [
      "la facture",
      "le papier à payer, donné après le travail"
     ],
     [
      "le client",
      "la personne qui achète ou fait réparer"
     ],
     [
      "les horaires",
      "les heures d'ouverture ou de travail"
     ],
     [
      "le rendez-vous",
      "une heure fixée pour se voir"
     ]
    ],
    "tableau": null,
    "regle": "Le **devis** : avant la réparation.\n\nLe client accepte le prix.\n\nLa **facture** : après la réparation.\n\nLe client paie.",
    "astuce": "**Faire le plein** : remplir le réservoir.\n\n**Ne démarre pas** : le moteur ne se lance pas.",
    "retenir": "**D**evis = **D**'abord. **F**acture = **F**in.",
    "exemples": [
     "Les **freins** font du bruit.",
     "Je vous fais un **devis** gratuit.",
     "Voici la **facture**, vous pouvez payer par carte.",
     "Nos **horaires** : de 8 heures à 18 heures."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je fais le devis avant la réparation.",
      "faux": "Je fais la facture avant la réparation.",
      "expl": "Le **devis** vient d'abord.\n\nLa facture vient à la fin."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La voiture ne démarre pas, la batterie est vide.",
      "faux": "La voiture ne démarre pas, le rétroviseur est vide.",
      "expl": "Sans **batterie**, la voiture ne démarre pas."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La nuit, j'allume les phares.",
      "faux": "La nuit, j'allume les freins.",
      "expl": "La nuit, on allume les **phares**.\n\nLes freins servent à s'arrêter."
     },
     {
      "type": "completer",
      "phrase": "Pour tourner, on utilise ___.",
      "reponse": "le volant",
      "choix": [
       "le volant",
       "le moteur",
       "la batterie"
      ],
      "expl": "Pour tourner : **le volant**."
     },
     {
      "type": "completer",
      "phrase": "Après la réparation, le client reçoit ___.",
      "reponse": "la facture",
      "choix": [
       "la facture",
       "le devis",
       "le rendez-vous"
      ],
      "expl": "À la fin du travail : **la facture**."
     },
     {
      "type": "completer",
      "phrase": "Je fais le plein d'___.",
      "reponse": "essence",
      "choix": [
       "essence",
       "pneus",
       "freins"
      ],
      "expl": "On fait le plein d'**essence**."
     },
     {
      "type": "ordre",
      "phrase": "Les freins font du bruit depuis hier.",
      "expl": "**Qui ?** → Les freins\n\n**Quoi ?** → font du bruit\n\n**Depuis quand ?** → depuis hier"
     },
     {
      "type": "ordre",
      "phrase": "Je vous envoie le devis par SMS.",
      "expl": "Je vous envoie **le devis**.\n\n**Comment ?** → par SMS"
     }
    ]
   },
   {
    "id": "mots-8",
    "titre": "Les nombres, l'heure et l'argent",
    "mots": [
     [
      "soixante-dix (70)",
      "60 + 10"
     ],
     [
      "soixante-quinze (75)",
      "60 + 15"
     ],
     [
      "quatre-vingts (80)",
      "4 × 20"
     ],
     [
      "quatre-vingt-dix (90)",
      "4 × 20 + 10"
     ],
     [
      "cent (100) / mille (1 000)",
      "cent, mille"
     ],
     [
      "midi / minuit",
      "12 heures / 0 heure"
     ],
     [
      "et quart",
      "+ 15 minutes"
     ],
     [
      "et demie",
      "+ 30 minutes"
     ],
     [
      "moins le quart",
      "– 15 minutes (10 h 45 = onze heures moins le quart)"
     ],
     [
      "les espèces",
      "les billets et les pièces"
     ],
     [
      "la carte bancaire",
      "la carte pour payer"
     ],
     [
      "la monnaie",
      "l'argent qu'on vous rend"
     ]
    ],
    "tableau": null,
    "regle": "Après 69, on compte avec 60 et 20 :\n\n- 70 : **soixante-dix**\n- 80 : **quatre-vingts**\n- 90 : **quatre-vingt-dix**\n\nL'heure : 14 h 30 = deux heures **et demie**.",
    "astuce": "On paie **par** carte.\n\nOn paie **en** espèces.",
    "retenir": "Quatre-vingt**s** prend un **s** quand il est seul (80 euros), mais pas quand un nombre le suit (quatre-vingt-deux). Et pour l'heure : le **quart** est un quart de tour du cadran (15 minutes), la **demie** un demi-tour (30 minutes).",
    "exemples": [
     "Ça fait **soixante-quinze** euros.",
     "Le rendez-vous est à neuf heures **et quart**.",
     "Vous payez **en espèces** ou **par carte** ?",
     "Je vous rends la **monnaie**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "72 = soixante-douze",
      "faux": "72 = soixante-deux",
      "expl": "72, c'est 60 + 12.\n\n**Soixante-douze**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "9 h 15 = neuf heures et quart",
      "faux": "9 h 15 = neuf heures et demie",
      "expl": "15 minutes : un quart.\n\nNeuf heures **et quart**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je paie par carte.",
      "faux": "Je paie en carte.",
      "expl": "Avec la carte : **par** carte."
     },
     {
      "type": "completer",
      "phrase": "80 € = ___ euros.",
      "reponse": "quatre-vingts",
      "choix": [
       "quatre-vingts",
       "huit-dix",
       "soixante-vingt"
      ],
      "expl": "80, c'est 4 fois 20.\n\n**Quatre-vingts**."
     },
     {
      "type": "completer",
      "phrase": "12 h, c'est ___.",
      "reponse": "midi",
      "choix": [
       "midi",
       "minuit",
       "la demie"
      ],
      "expl": "12 heures dans la journée : **midi**."
     },
     {
      "type": "completer",
      "phrase": "10 h 45 = onze heures moins ___.",
      "reponse": "le quart",
      "choix": [
       "le quart",
       "la demie",
       "quinze"
      ],
      "expl": "10 h 45 : 15 minutes avant 11 heures.\n\nOnze heures **moins le quart**."
     },
     {
      "type": "ordre",
      "phrase": "Le rendez-vous est à dix heures et demie.",
      "expl": "Le rendez-vous est **à dix heures et demie**."
     },
     {
      "type": "ordre",
      "phrase": "Ça fait quatre-vingt-dix euros.",
      "expl": "90, c'est 4 fois 20 + 10.\n\n**Quatre-vingt-dix**."
     }
    ]
   }
  ]
 },
 {
  "id": "verbes",
  "titre": "Les verbes",
  "officiel": "Conjugaison et concordance des temps",
  "icone": "pencil",
  "lecons": [
   {
    "id": "verbes-1",
    "titre": "Le présent des verbes en -er",
    "mots": [],
    "tableau": null,
    "regle": "Beaucoup de verbes finissent par **-er**.\n\nParler, manger, travailler.\n\nOn enlève -er. On ajoute :\n\n- je parl**e**\n- tu parl**es**\n- il, elle parl**e**\n- nous parl**ons**\n- vous parl**ez**\n- ils, elles parl**ent**",
    "astuce": "Avant a, e, i, o, u : je devient **j'**.\n\nJ'habite. J'aime.",
    "retenir": "Je parle, tu parles, il parle, ils parlent **se disent tous pareil**. Seuls **nous** (-ons) et **vous** (-ez) s'entendent différemment. Et le -ent à la fin d'un verbe ne se prononce **jamais**.",
    "exemples": [
     "Je **travaille** au garage.",
     "Tu **parles** français ?",
     "Nous **mangeons** à midi.",
     "Vous **habitez** à Lyon ?",
     "Ils **regardent** la télé."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous parlons français.",
      "faux": "Nous parlez français.",
      "expl": "Avec **nous** : **-ons**.\n\nNous parlons."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils travaillent le samedi.",
      "faux": "Ils travaillont le samedi.",
      "expl": "Avec **ils** : **-ent**.\n\nOn ne l'entend pas.\n\nIls travaillent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Tu habites ici ?",
      "faux": "Tu habite ici ?",
      "expl": "Avec **tu** : un **s** à la fin.\n\nTu habites."
     },
     {
      "type": "completer",
      "phrase": "Vous ___ à quelle heure ?",
      "reponse": "commencez",
      "choix": [
       "commencez",
       "commençons",
       "commencent"
      ],
      "expl": "Avec **vous** : **-ez**.\n\nVous commencez."
     },
     {
      "type": "completer",
      "phrase": "Elle ___ le repas.",
      "reponse": "prépare",
      "choix": [
       "prépare",
       "prépares",
       "préparent"
      ],
      "expl": "Avec **elle** : **-e**.\n\nElle prépare."
     },
     {
      "type": "completer",
      "phrase": "Les enfants ___ dans la cour.",
      "reponse": "jouent",
      "choix": [
       "jouent",
       "joue",
       "jouez"
      ],
      "expl": "Les enfants, c'est **ils**.\n\nIls **jouent**."
     },
     {
      "type": "ordre",
      "phrase": "Nous habitons à Lyon depuis trois ans.",
      "expl": "Nous **habitons**.\n\n**Depuis quand ?** → depuis trois ans"
     },
     {
      "type": "ordre",
      "phrase": "Ils travaillent tous les jours.",
      "expl": "Ils **travaillent**.\n\n**Quand ?** → tous les jours"
     }
    ]
   },
   {
    "id": "verbes-2",
    "titre": "Être, avoir, aller, faire",
    "mots": [],
    "tableau": [
     [
      "",
      "être",
      "avoir",
      "aller",
      "faire"
     ],
     [
      "je / j'",
      "suis",
      "ai",
      "vais",
      "fais"
     ],
     [
      "tu",
      "es",
      "as",
      "vas",
      "fais"
     ],
     [
      "il / elle",
      "est",
      "a",
      "va",
      "fait"
     ],
     [
      "nous",
      "sommes",
      "avons",
      "allons",
      "faisons"
     ],
     [
      "vous",
      "êtes",
      "avez",
      "allez",
      "faites"
     ],
     [
      "ils / elles",
      "sont",
      "ont",
      "vont",
      "font"
     ]
    ],
    "regle": "4 verbes très utiles :\n\n**être**, **avoir**, **aller**, **faire**.\n\nIls sont différents.\n\nIl faut les apprendre par cœur.",
    "astuce": "On **a** faim. On **a** trente ans.\n\nOn **est** malade. On **est** en retard.",
    "retenir": "Ils s**ont**, ils **ont**, ils v**ont**, ils f**ont** : avec ils, les 4 verbes finissent par **-ont**, comme une chanson.",
    "exemples": [
     "Je **suis** malade.",
     "J'**ai** trente ans.",
     "Nous **allons** à la mairie.",
     "Vous **faites** les courses ?",
     "Ils **sont** en retard."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai trente ans.",
      "faux": "Je suis trente ans.",
      "expl": "L'âge : avec **avoir**.\n\nJ'**ai** trente ans."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Vous faites quoi ce soir ?",
      "faux": "Vous faisez quoi ce soir ?",
      "expl": "Avec **vous** : vous **faites**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils vont au marché.",
      "faux": "Ils allent au marché.",
      "expl": "Avec **ils** : ils **vont**."
     },
     {
      "type": "completer",
      "phrase": "Nous ___ contents.",
      "reponse": "sommes",
      "choix": [
       "sommes",
       "sont",
       "êtes"
      ],
      "expl": "Avec **nous** : nous **sommes**."
     },
     {
      "type": "completer",
      "phrase": "Elle ___ faim.",
      "reponse": "a",
      "choix": [
       "a",
       "est",
       "as"
      ],
      "expl": "La faim : avec **avoir**.\n\nElle **a** faim."
     },
     {
      "type": "completer",
      "phrase": "Je ___ chez le médecin.",
      "reponse": "vais",
      "choix": [
       "vais",
       "va",
       "allons"
      ],
      "expl": "Avec **je** : je **vais**."
     },
     {
      "type": "ordre",
      "phrase": "Nous avons rendez-vous à dix heures.",
      "expl": "Nous **avons** rendez-vous.\n\n**Quand ?** → à dix heures"
     },
     {
      "type": "ordre",
      "phrase": "Ils font les courses le samedi.",
      "expl": "Ils **font** les courses.\n\n**Quand ?** → le samedi"
     }
    ]
   },
   {
    "id": "verbes-3",
    "titre": "Pouvoir, vouloir, devoir, savoir, venir, prendre",
    "mots": [],
    "tableau": [
     [
      "",
      "pouvoir",
      "vouloir",
      "devoir",
      "savoir",
      "venir",
      "prendre"
     ],
     [
      "je",
      "peux",
      "veux",
      "dois",
      "sais",
      "viens",
      "prends"
     ],
     [
      "il / elle",
      "peut",
      "veut",
      "doit",
      "sait",
      "vient",
      "prend"
     ],
     [
      "nous",
      "pouvons",
      "voulons",
      "devons",
      "savons",
      "venons",
      "prenons"
     ],
     [
      "vous",
      "pouvez",
      "voulez",
      "devez",
      "savez",
      "venez",
      "prenez"
     ],
     [
      "ils / elles",
      "peuvent",
      "veulent",
      "doivent",
      "savent",
      "viennent",
      "prennent"
     ]
    ],
    "regle": "- **pouvoir** : être capable, avoir le droit\n- **vouloir** : avoir envie\n- **devoir** : être obligé\n- **savoir** : connaître\n\nAprès ces verbes, le 2e verbe ne change pas.\n\nJe dois **partir**.",
    "astuce": "Avec **tu**, c'est comme avec **je**.\n\nJe peux, tu peux.",
    "retenir": "Je peu**x**, je veu**x** prennent un **x**. Il peu**t**, il veu**t** prennent un **t**. Le x pour moi, le t pour lui.",
    "exemples": [
     "Je **peux** vous aider ?",
     "Il **doit** partir à midi.",
     "Vous **voulez** un café ?",
     "Je ne **sais** pas.",
     "Ils **viennent** demain.",
     "Je **prends** le bus."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je dois partir.",
      "faux": "Je dois pars.",
      "expl": "Après **dois**, le verbe ne change pas.\n\nJe dois **partir**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il peut venir demain.",
      "faux": "Il peux venir demain.",
      "expl": "Avec **il** : il **peut**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils prennent le métro.",
      "faux": "Ils prendent le métro.",
      "expl": "Avec **ils** : ils **prennent**.\n\nDeux **n**."
     },
     {
      "type": "completer",
      "phrase": "Vous ___ un rendez-vous ?",
      "reponse": "voulez",
      "choix": [
       "voulez",
       "voulons",
       "veulent"
      ],
      "expl": "Avec **vous** : vous **voulez**."
     },
     {
      "type": "completer",
      "phrase": "Je ne ___ pas nager.",
      "reponse": "sais",
      "choix": [
       "sais",
       "sait",
       "savons"
      ],
      "expl": "Avec **je** : je **sais**."
     },
     {
      "type": "completer",
      "phrase": "Nous ___ de Lyon.",
      "reponse": "venons",
      "choix": [
       "venons",
       "venez",
       "viennent"
      ],
      "expl": "Avec **nous** : nous **venons**."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que je peux payer par carte ?",
      "expl": "Je **peux** + **payer**.\n\nLe 2e verbe ne change pas."
     },
     {
      "type": "ordre",
      "phrase": "Ils doivent apporter leurs papiers.",
      "expl": "Ils **doivent** + **apporter**.\n\nLe 2e verbe ne change pas."
     }
    ]
   },
   {
    "id": "verbes-4",
    "titre": "Le passé composé avec avoir",
    "mots": [],
    "tableau": null,
    "regle": "Pour une action finie :\n\n**avoir** + le verbe au passé.\n\nManger → j'**ai mangé**.\n\nFinir → j'ai **fini**.\n\nPrendre → j'ai **pris**.\n\nFaire → j'ai **fait**.\n\nVoir → j'ai **vu**.",
    "astuce": "Pour dire non :\n\nje **n'**ai **pas** mangé.",
    "retenir": "Le passé composé est « composé » de **deux morceaux** : le petit verbe (ai, as, a, avons, avez, ont) + le participe (mangé, fini, pris).",
    "exemples": [
     "J'**ai mangé** à midi.",
     "Il **a réparé** la voiture.",
     "Nous **avons fini**.",
     "Vous **avez pris** vos papiers ?",
     "Ils **ont vu** le médecin."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai fini mon travail.",
      "faux": "J'ai finir mon travail.",
      "expl": "Après **ai** : **fini**.\n\nPas finir."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle a pris le bus.",
      "faux": "Elle a prendu le bus.",
      "expl": "Prendre au passé : **pris**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous avons mangé.",
      "faux": "Nous avons manger.",
      "expl": "Après **avons** : **mangé**.\n\nAvec **é**."
     },
     {
      "type": "completer",
      "phrase": "Il ___ téléphoné hier.",
      "reponse": "a",
      "choix": [
       "a",
       "est",
       "as"
      ],
      "expl": "Il **a** téléphoné."
     },
     {
      "type": "completer",
      "phrase": "Vous avez ___ la porte ?",
      "reponse": "fermé",
      "choix": [
       "fermé",
       "fermer",
       "fermez"
      ],
      "expl": "Après **avez** : **fermé**."
     },
     {
      "type": "completer",
      "phrase": "Ils ont ___ leurs devoirs.",
      "reponse": "fait",
      "choix": [
       "fait",
       "faire",
       "faisé"
      ],
      "expl": "Faire au passé : **fait**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai réparé la voiture ce matin.",
      "expl": "J'**ai réparé**.\n\n**Quand ?** → ce matin"
     },
     {
      "type": "ordre",
      "phrase": "Nous avons vu le médecin hier.",
      "expl": "Nous **avons vu**.\n\n**Quand ?** → hier"
     }
    ]
   },
   {
    "id": "verbes-5",
    "titre": "Le passé composé avec être",
    "mots": [],
    "tableau": null,
    "regle": "Certains verbes utilisent **être** au passé.\n\nCe sont des verbes de mouvement :\n\naller, venir, arriver, partir,\n\nentrer, sortir, monter, descendre,\n\nrester, tomber, naître.\n\nJe **suis allé** à la mairie.",
    "astuce": "Avec être, on accorde :\n\nil est parti.\n\nelle est parti**e**.\n\nils sont parti**s**.",
    "retenir": "Imagine **la maison d'être**. On y **naît**, on **arrive**, on **entre**, on **monte** l'escalier, on **descend**, on **tombe**, on **reste**, on **sort**, on **part**, on **revient**… Tout ce qu'on fait en bougeant dans la maison se dit avec être.",
    "exemples": [
     "Je **suis allé** à la mairie.",
     "Elle **est arrivée** en retard.",
     "Nous **sommes restés** à la maison.",
     "Ils **sont partis** tôt.",
     "Il **est tombé** dans l'escalier."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle est partie à huit heures.",
      "faux": "Elle a partie à huit heures.",
      "expl": "Partir : avec **être**.\n\nUne femme : parti**e**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous sommes arrivés hier.",
      "faux": "Nous avons arrivés hier.",
      "expl": "Arriver : avec **être**.\n\nNous : arrivé**s**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils sont restés à la maison.",
      "faux": "Ils sont resté à la maison.",
      "expl": "Plusieurs personnes : resté**s**."
     },
     {
      "type": "completer",
      "phrase": "Mon fils ___ tombé.",
      "reponse": "est",
      "choix": [
       "est",
       "a",
       "ai"
      ],
      "expl": "Tomber : avec **être**.\n\nIl **est** tombé."
     },
     {
      "type": "completer",
      "phrase": "Elle est ___ chez le médecin.",
      "reponse": "allée",
      "choix": [
       "allée",
       "allé",
       "aller"
      ],
      "expl": "Une femme : allé**e**."
     },
     {
      "type": "completer",
      "phrase": "Je ___ né en Algérie.",
      "reponse": "suis",
      "choix": [
       "suis",
       "ai",
       "es"
      ],
      "expl": "Naître : avec **être**.\n\nJe **suis** né."
     },
     {
      "type": "ordre",
      "phrase": "Elle est arrivée en France en 2015.",
      "expl": "Elle **est arrivée**.\n\n**Où ?** → en France\n\n**Quand ?** → en 2015"
     },
     {
      "type": "ordre",
      "phrase": "Nous sommes allés au marché.",
      "expl": "Nous **sommes allés**.\n\n**Où ?** → au marché"
     }
    ]
   },
   {
    "id": "verbes-6",
    "titre": "Le futur proche",
    "mots": [],
    "tableau": null,
    "regle": "Pour demain :\n\n**aller** + un verbe.\n\nJe **vais manger**.\n\nNous **allons partir**.",
    "astuce": "C'est le futur le plus simple.\n\nOn l'utilise beaucoup à l'oral.",
    "retenir": "« Je **vais** », c'est comme si je marchais vers l'action. Je vais … manger, je vais … appeler.",
    "exemples": [
     "Je **vais appeler** le médecin.",
     "La voiture **va être** prête demain.",
     "Nous **allons partir**.",
     "Vous **allez recevoir** un SMS.",
     "Il **va pleuvoir**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais téléphoner ce soir.",
      "faux": "Je vais téléphone ce soir.",
      "expl": "Après **vais**, le verbe ne change pas.\n\nJe vais **téléphoner**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils vont arriver demain.",
      "faux": "Ils allent arriver demain.",
      "expl": "Avec **ils** : ils **vont**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle va être en retard.",
      "faux": "Elle va est en retard.",
      "expl": "Après **va** : **être**."
     },
     {
      "type": "completer",
      "phrase": "Nous ___ manger au restaurant.",
      "reponse": "allons",
      "choix": [
       "allons",
       "allez",
       "vont"
      ],
      "expl": "Avec **nous** : nous **allons**."
     },
     {
      "type": "completer",
      "phrase": "Tu vas ___ le bus ?",
      "reponse": "prendre",
      "choix": [
       "prendre",
       "prends",
       "pris"
      ],
      "expl": "Après **vas** : **prendre**."
     },
     {
      "type": "completer",
      "phrase": "La réunion ___ commencer.",
      "reponse": "va",
      "choix": [
       "va",
       "vais",
       "vont"
      ],
      "expl": "La réunion, c'est **elle**.\n\nElle **va**."
     },
     {
      "type": "ordre",
      "phrase": "Je vais préparer le dîner.",
      "expl": "Je **vais préparer** le dîner."
     },
     {
      "type": "ordre",
      "phrase": "Votre voiture va être prête demain.",
      "expl": "Votre voiture **va être** prête demain."
     }
    ]
   },
   {
    "id": "verbes-7",
    "titre": "L'imparfait",
    "mots": [],
    "tableau": null,
    "regle": "L'imparfait :\n\npour décrire le passé,\n\nou pour une habitude d'avant.\n\nLes fins :\n\n- je, tu : **-ais**\n- il, elle : **-ait**\n- nous : **-ions**\n- vous : **-iez**\n- ils, elles : **-aient**\n\nÊtre : j'**étais**.",
    "astuce": "Les fins sont les mêmes pour tous les verbes.\n\nJe parlais. Je faisais. J'avais.",
    "retenir": "L'imparfait, c'est **le vieil album photo** : « Avant… », « Quand j'étais petit… », « Tous les jours, on… ».",
    "exemples": [
     "Quand j'**étais** petit, j'**habitais** à la campagne.",
     "Il **faisait** froid.",
     "Avant, je **travaillais** le samedi.",
     "Les enfants **dormaient**.",
     "Nous **avions** une petite maison."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Avant, je travaillais en usine.",
      "faux": "Avant, je travaillé en usine.",
      "expl": "**Avant** : une habitude.\n\nJe travaill**ais**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il faisait beau.",
      "faux": "Il faisé beau.",
      "expl": "On décrit le temps.\n\nIl fais**ait** beau."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous habitions à Paris.",
      "faux": "Nous habitaient à Paris.",
      "expl": "Avec **nous** : **-ions**.\n\nNous habit**ions**."
     },
     {
      "type": "completer",
      "phrase": "Quand j'___ petit, je jouais dehors.",
      "reponse": "étais",
      "choix": [
       "étais",
       "étions",
       "était"
      ],
      "expl": "Être avec **je** : j'**étais**."
     },
     {
      "type": "completer",
      "phrase": "Les enfants ___ quand je suis rentré.",
      "reponse": "dormaient",
      "choix": [
       "dormaient",
       "dormait",
       "dormons"
      ],
      "expl": "Les enfants, c'est **ils**.\n\nIls dorm**aient**."
     },
     {
      "type": "completer",
      "phrase": "Avant, il ___ beaucoup.",
      "reponse": "fumait",
      "choix": [
       "fumait",
       "fumais",
       "fument"
      ],
      "expl": "Une habitude d'avant.\n\nIl fum**ait**."
     },
     {
      "type": "ordre",
      "phrase": "Quand il était jeune, il jouait au football.",
      "expl": "Il **était** jeune : le décor.\n\nIl **jouait** : l'habitude."
     },
     {
      "type": "ordre",
      "phrase": "Il faisait froid ce matin.",
      "expl": "Il **faisait** froid : on décrit."
     }
    ]
   },
   {
    "id": "verbes-8",
    "titre": "Choisir le bon temps",
    "mots": [],
    "tableau": null,
    "regle": "Chaque moment a son temps :\n\n- **maintenant** : je travaille\n- **hier**, action finie : j'**ai appelé**\n- **avant**, habitude : j'**habitais**\n- **demain** : je **vais signer**",
    "astuce": "Hier → **passé composé**.\n\nAvant, tous les jours → **imparfait**.\n\nDemain → **futur proche**.",
    "retenir": "L'imparfait est **le décor du film**, le passé composé est **l'action qui arrive**.",
    "exemples": [
     "Hier, j'**ai appelé** le garage.",
     "Avant, j'**habitais** à Marseille.",
     "Maintenant, j'**habite** à Lyon.",
     "Demain, je **vais signer** le contrat.",
     "Il **pleuvait** quand je **suis sorti**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Hier, j'ai vu le médecin.",
      "faux": "Hier, je vais voir le médecin.",
      "expl": "**Hier**, action finie.\n\nJ'**ai vu**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Demain, nous allons partir.",
      "faux": "Demain, nous sommes partis.",
      "expl": "**Demain**.\n\nNous **allons partir**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il dormait quand le téléphone a sonné.",
      "faux": "Il a dormi quand le téléphone sonnait.",
      "expl": "Il **dormait** : le décor.\n\nLe téléphone **a sonné** : l'action."
     },
     {
      "type": "completer",
      "phrase": "Hier, je ___ au cinéma.",
      "reponse": "suis allé",
      "choix": [
       "suis allé",
       "vais aller",
       "vais"
      ],
      "expl": "**Hier**, action finie.\n\nJe **suis allé**."
     },
     {
      "type": "completer",
      "phrase": "Avant, nous ___ en Algérie.",
      "reponse": "habitions",
      "choix": [
       "habitions",
       "allons habiter",
       "habitons"
      ],
      "expl": "**Avant**, une habitude.\n\nNous **habitions**."
     },
     {
      "type": "completer",
      "phrase": "Demain, je ___ te téléphoner.",
      "reponse": "vais",
      "choix": [
       "vais",
       "suis",
       "ai"
      ],
      "expl": "**Demain**.\n\nJe **vais** te téléphoner."
     },
     {
      "type": "ordre",
      "phrase": "Hier soir, nous avons regardé un film.",
      "expl": "**Hier soir**.\n\nNous **avons regardé**."
     },
     {
      "type": "ordre",
      "phrase": "Demain, je vais aller à la mairie.",
      "expl": "**Demain**.\n\nJe **vais aller**."
     }
    ]
   }
  ]
 },
 {
  "id": "genre",
  "titre": "Masculin, féminin, pluriel",
  "officiel": "Genre et nombre (les accords)",
  "icone": "scale",
  "lecons": [
   {
    "id": "genre-1",
    "titre": "Le, la, l', les",
    "mots": [],
    "tableau": null,
    "regle": "Pour une chose précise :\n\n- **le** : masculin. Le garage.\n- **la** : féminin. La voiture.\n- **les** : plusieurs. Les enfants.\n\nAvant a, e, i, o, u, h : **l'**. L'école.",
    "astuce": "Avec **l'**, on n'entend pas masculin ou féminin.\n\nApprenez avec **un** ou **une**.\n\n**Une** école. **Un** hôpital.",
    "retenir": "L' **avale sa voyelle** pour que deux voyelles ne se cognent pas : la + école → l'école.",
    "exemples": [
     "**Le** garage ferme à 18 heures.",
     "**La** voiture est prête.",
     "**L'**école est à côté.",
     "**Les** enfants jouent."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "l'école",
      "faux": "la école",
      "expl": "École commence par **é**.\n\nLa devient **l'**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "les clés",
      "faux": "le clés",
      "expl": "Clés : plusieurs.\n\nOn dit **les**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "l'hôpital",
      "faux": "le hôpital",
      "expl": "Le **h** ne s'entend pas.\n\nLe devient **l'**."
     },
     {
      "type": "completer",
      "phrase": "___ pharmacie est ouverte.",
      "reponse": "La",
      "choix": [
       "La",
       "Le",
       "L'"
      ],
      "expl": "Pharmacie : féminin.\n\nOn dit **la**."
     },
     {
      "type": "completer",
      "phrase": "___ hiver est froid.",
      "reponse": "L'",
      "choix": [
       "L'",
       "Le",
       "La"
      ],
      "expl": "Hiver commence par un **h** muet.\n\nOn dit **l'**."
     },
     {
      "type": "completer",
      "phrase": "___ enfants dorment.",
      "reponse": "Les",
      "choix": [
       "Les",
       "Le",
       "La"
      ],
      "expl": "Plusieurs enfants.\n\nOn dit **les**."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants sont à l'école.",
      "expl": "**Les** enfants.\n\n**Où ?** → à l'école"
     },
     {
      "type": "ordre",
      "phrase": "La voiture est au garage.",
      "expl": "**La** voiture.\n\n**Où ?** → au garage"
     }
    ]
   },
   {
    "id": "genre-2",
    "titre": "Un, une, des",
    "mots": [],
    "tableau": null,
    "regle": "Pour une chose pas précise :\n\n- **un** : masculin. Un fils.\n- **une** : féminin. Une fille.\n- **des** : plusieurs. Des enfants.\n\nAvec ne… pas : **de**.\n\nJe n'ai pas **de** voiture.",
    "astuce": "J'ai **une** voiture : je la présente.\n\n**La** voiture est rouge : on sait laquelle.",
    "retenir": "**Un / une** la première fois, **le / la** quand on en a déjà parlé.",
    "exemples": [
     "J'ai **un** fils et **une** fille.",
     "Il y a **des** enfants dans la cour.",
     "Je cherche **une** pharmacie.",
     "Je n'ai pas **de** voiture."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai une voiture. La voiture est rouge.",
      "faux": "J'ai la voiture. Une voiture est rouge.",
      "expl": "D'abord **une** voiture.\n\nPuis **la** voiture."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je n'ai pas de voiture.",
      "faux": "Je n'ai pas une voiture.",
      "expl": "Avec ne… pas : **de**.\n\nPas **de** voiture."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il y a des pommes.",
      "faux": "Il y a un pommes.",
      "expl": "Plusieurs pommes.\n\nOn dit **des**."
     },
     {
      "type": "completer",
      "phrase": "Je cherche ___ boulangerie.",
      "reponse": "une",
      "choix": [
       "une",
       "un",
       "des"
      ],
      "expl": "Boulangerie : féminin.\n\nOn dit **une**."
     },
     {
      "type": "completer",
      "phrase": "Elle a ___ enfants.",
      "reponse": "des",
      "choix": [
       "des",
       "un",
       "une"
      ],
      "expl": "Plusieurs enfants.\n\nOn dit **des**."
     },
     {
      "type": "completer",
      "phrase": "C'est ___ garçon très gentil.",
      "reponse": "un",
      "choix": [
       "un",
       "une",
       "des"
      ],
      "expl": "Garçon : masculin.\n\nOn dit **un**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai un rendez-vous demain.",
      "expl": "J'ai **un** rendez-vous.\n\n**Quand ?** → demain"
     },
     {
      "type": "ordre",
      "phrase": "Il y a des enfants dans le parc.",
      "expl": "Il y a **des** enfants.\n\n**Où ?** → dans le parc"
     }
    ]
   },
   {
    "id": "genre-3",
    "titre": "Le féminin des noms",
    "mots": [],
    "tableau": null,
    "regle": "Pour le féminin, souvent : **-e**.\n\nUn ami, une ami**e**.\n\nD'autres fins changent :\n\n- **-eur** devient **-euse** : vendeuse\n- **-teur** devient **-trice** : directrice\n- **-ien** devient **-ienne** : pharmacienne\n- **-er** devient **-ère** : boulangère",
    "astuce": "Certains mots changent tout :\n\nun homme, une femme.\n\nun père, une mère.",
    "retenir": "Le -e du féminin **fait entendre la dernière lettre** : voisin (on n'entend pas le n) → voisine (on entend n).",
    "exemples": [
     "Mon **voisin** et ma **voisine** sont gentils.",
     "La **vendeuse** est souriante.",
     "La **directrice** de l'école m'a appelé.",
     "Il est **pharmacien**, elle est **pharmacienne**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une amie",
      "faux": "une ami",
      "expl": "On ajoute **-e**.\n\nUne ami**e**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une vendeuse",
      "faux": "une vendeure",
      "expl": "**-eur** devient **-euse**.\n\nVendeuse."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "la directrice",
      "faux": "la directeuse",
      "expl": "**-teur** devient **-trice**.\n\nDirectrice."
     },
     {
      "type": "completer",
      "phrase": "un boulanger → une ___",
      "reponse": "boulangère",
      "choix": [
       "boulangère",
       "boulangeuse",
       "boulangerie"
      ],
      "expl": "**-er** devient **-ère**.\n\nBoulangère."
     },
     {
      "type": "completer",
      "phrase": "un Algérien → une ___",
      "reponse": "Algérienne",
      "choix": [
       "Algérienne",
       "Algérine",
       "Algériene"
      ],
      "expl": "**-ien** devient **-ienne**.\n\nAlgérienne."
     },
     {
      "type": "completer",
      "phrase": "un cuisinier → une ___",
      "reponse": "cuisinière",
      "choix": [
       "cuisinière",
       "cuisinieuse",
       "cuisinère"
      ],
      "expl": "**-ier** devient **-ière**.\n\nCuisinière."
     },
     {
      "type": "ordre",
      "phrase": "Ma voisine travaille à la pharmacie.",
      "expl": "**Ma** voisine : féminin."
     },
     {
      "type": "ordre",
      "phrase": "La directrice veut nous voir.",
      "expl": "**La** directrice : féminin."
     }
    ]
   },
   {
    "id": "genre-4",
    "titre": "Le pluriel des noms",
    "mots": [],
    "tableau": null,
    "regle": "Pour le pluriel, souvent : **-s**.\n\nUne maison, des maison**s**.\n\n- **-eau** prend **-x** : des gâteau**x**\n- **-al** devient **-aux** : des journ**aux**\n- **-s, -x, -z** ne changent pas : des bras",
    "astuce": "Le **s** ne s'entend pas.\n\nOn entend **les** ou **des**.",
    "retenir": "Les mots en -ou prennent un s, **sauf 7 mots** qui prennent un x : **bijou, caillou, chou, genou, hibou, joujou, pou**. Les enfants français l'apprennent comme une comptine.",
    "exemples": [
     "Les **enfants** jouent avec leurs **jouets**.",
     "J'ai mal aux **genoux**.",
     "Les **prix** ont augmenté.",
     "Il y a deux **hôpitaux** en ville."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "des gâteaux",
      "faux": "des gâteaus",
      "expl": "**-eau** prend un **x**.\n\nDes gâteaux."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "des journaux",
      "faux": "des journals",
      "expl": "**-al** devient **-aux**.\n\nDes journaux."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "les prix",
      "faux": "les prixs",
      "expl": "Prix finit déjà par **x**.\n\nIl ne change pas."
     },
     {
      "type": "completer",
      "phrase": "un cheval → des ___",
      "reponse": "chevaux",
      "choix": [
       "chevaux",
       "chevals",
       "chevaus"
      ],
      "expl": "**-al** devient **-aux**.\n\nDes chevaux."
     },
     {
      "type": "completer",
      "phrase": "un genou → des ___",
      "reponse": "genoux",
      "choix": [
       "genoux",
       "genous",
       "genou"
      ],
      "expl": "Genou prend un **x**.\n\nDes genoux."
     },
     {
      "type": "completer",
      "phrase": "une fenêtre → des ___",
      "reponse": "fenêtres",
      "choix": [
       "fenêtres",
       "fenêtre",
       "fenêtrex"
      ],
      "expl": "On ajoute un **s**.\n\nDes fenêtres."
     },
     {
      "type": "ordre",
      "phrase": "Les gâteaux sont dans le four.",
      "expl": "**Les** gâteau**x**.\n\nAvec un **x**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai mal aux genoux.",
      "expl": "**Aux** genou**x**.\n\nAvec un **x**."
     }
    ]
   },
   {
    "id": "genre-5",
    "titre": "Accorder les adjectifs",
    "mots": [],
    "tableau": null,
    "regle": "Le mot qui décrit suit le nom.\n\n- Féminin : **-e**. Une petit**e** fille.\n- Pluriel : **-s**. Des petit**s** garçons.\n- Féminin pluriel : **-es**. Des petit**es** filles.",
    "astuce": "Déjà un **e** à la fin ? Pas de changement.\n\nRouge, facile, malade.\n\nCertains changent beaucoup :\n\nbeau, belle.\n\ngentil, gentille.",
    "retenir": "La plupart des adjectifs se mettent **après** le nom (une voiture rouge). Les petits adjectifs du quotidien se mettent **devant** : **beau, bon, grand, petit, jeune, vieux, nouveau** (une belle maison, un bon repas).",
    "exemples": [
     "Une voiture **rouge**.",
     "Un **petit** garçon et une **petite** fille.",
     "Les enfants sont **fatigués**.",
     "Elle est **contente**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle est fatiguée.",
      "faux": "Elle est fatigué.",
      "expl": "**Elle** : féminin.\n\nFatigué**e**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une grande maison",
      "faux": "une maison grande",
      "expl": "**Grand** va avant le nom.\n\nUne grande maison."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "des chaussures noires",
      "faux": "des chaussures noir",
      "expl": "Chaussures : féminin, plusieurs.\n\nNoir**es**."
     },
     {
      "type": "completer",
      "phrase": "Ma fille est très ___.",
      "reponse": "gentille",
      "choix": [
       "gentille",
       "gentil",
       "gentils"
      ],
      "expl": "Gentil au féminin : gentil**le**."
     },
     {
      "type": "completer",
      "phrase": "Les pommes sont ___.",
      "reponse": "vertes",
      "choix": [
       "vertes",
       "vert",
       "verte"
      ],
      "expl": "Pommes : féminin, plusieurs.\n\nVert**es**."
     },
     {
      "type": "completer",
      "phrase": "C'est une ___ voiture.",
      "reponse": "nouvelle",
      "choix": [
       "nouvelle",
       "nouveau",
       "nouveaux"
      ],
      "expl": "Voiture : féminin.\n\n**Nouvelle**."
     },
     {
      "type": "ordre",
      "phrase": "Mon fils a une petite chambre.",
      "expl": "**Une petite** chambre."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants sont très contents.",
      "expl": "Les enfants : plusieurs.\n\nContent**s**."
     }
    ]
   },
   {
    "id": "genre-6",
    "titre": "Du, de la, au, aux",
    "mots": [],
    "tableau": null,
    "regle": "Pour une partie :\n\n- **du** : du pain\n- **de la** : de la soupe\n- **de l'** : de l'eau\n\nAprès une quantité ou ne… pas : **de**.\n\nUn kilo **de** pommes.\n\nPas **de** lait.",
    "astuce": "À le n'existe pas : **au**.\n\nÀ les : **aux**.\n\nDe le : **du**.",
    "retenir": "**Du** pain, **de la** confiture, **de l'**eau : je n'en prends qu'**un morceau**, pas tout le pain du monde.",
    "exemples": [
     "Je bois **de l'**eau.",
     "Tu veux **du** café ?",
     "Je viens **du** travail.",
     "Je vais **au** marché.",
     "Il parle **aux** enfants.",
     "Un kilo **de** tomates."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je mange du pain.",
      "faux": "Je mange de le pain.",
      "expl": "De le devient **du**.\n\nDu pain."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je n'ai pas de lait.",
      "faux": "Je n'ai pas du lait.",
      "expl": "Avec ne… pas : **de**.\n\nPas de lait."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je viens du marché.",
      "faux": "Je viens de le marché.",
      "expl": "De le devient **du**.\n\nDu marché."
     },
     {
      "type": "completer",
      "phrase": "Tu veux ___ eau ?",
      "reponse": "de l'",
      "choix": [
       "de l'",
       "du",
       "de la"
      ],
      "expl": "Eau commence par **e**.\n\n**De l'**eau."
     },
     {
      "type": "completer",
      "phrase": "Un kilo ___ pommes.",
      "reponse": "de",
      "choix": [
       "de",
       "des",
       "du"
      ],
      "expl": "Un kilo : une quantité.\n\nOn dit **de**."
     },
     {
      "type": "completer",
      "phrase": "Je parle ___ voisins.",
      "reponse": "aux",
      "choix": [
       "aux",
       "au",
       "à les"
      ],
      "expl": "À les devient **aux**."
     },
     {
      "type": "ordre",
      "phrase": "Je prends du café avec du lait.",
      "expl": "**Du** café.\n\n**Du** lait."
     },
     {
      "type": "ordre",
      "phrase": "Nous allons au parc avec les enfants.",
      "expl": "À le devient **au**.\n\nAu parc."
     }
    ]
   }
  ]
 },
 {
  "id": "homophones",
  "titre": "Les mots qui se ressemblent",
  "officiel": "Homophones grammaticaux",
  "icone": "letters",
  "lecons": [
   {
    "id": "homophones-1",
    "titre": "a / à, et / est",
    "mots": [],
    "tableau": null,
    "regle": "- **a** : le verbe avoir. Il **a** faim.\n- **à** : un lieu ou un moment. **À** Lyon. **À** midi.\n- **est** : le verbe être. Il **est** malade.\n- **et** : pour relier. Du pain **et** du lait.",
    "astuce": "Dites la phrase au passé.\n\nAvait ? On écrit **a**.\n\nÉtait ? On écrit **est**.",
    "retenir": "**A = avait**, **est = était**, **et = et puis**. Le à avec accent, lui, ne change jamais.",
    "exemples": [
     "Il **a** faim.",
     "Je vais **à** l'école.",
     "Elle **est** malade.",
     "Du pain **et** du lait.",
     "Il **a** rendez-vous **à** dix heures."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il a un chien.",
      "faux": "Il à un chien.",
      "expl": "Il **avait** un chien.\n\nDonc : **a**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle est contente.",
      "faux": "Elle et contente.",
      "expl": "Elle **était** contente.\n\nDonc : **est**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais à Lyon.",
      "faux": "Je vais a Lyon.",
      "expl": "Lyon est un lieu.\n\nDonc : **à**."
     },
     {
      "type": "completer",
      "phrase": "Mon fils ___ huit ans.",
      "reponse": "a",
      "choix": [
       "a",
       "à"
      ],
      "expl": "Mon fils **avait** huit ans.\n\nDonc : **a**."
     },
     {
      "type": "completer",
      "phrase": "Il ___ en retard.",
      "reponse": "est",
      "choix": [
       "est",
       "et"
      ],
      "expl": "Il **était** en retard.\n\nDonc : **est**."
     },
     {
      "type": "completer",
      "phrase": "Du thé ___ du café.",
      "reponse": "et",
      "choix": [
       "et",
       "est"
      ],
      "expl": "On relie deux choses.\n\nDonc : **et**."
     },
     {
      "type": "ordre",
      "phrase": "Il a rendez-vous à midi.",
      "expl": "Il **a** : il avait.\n\n**À** midi : un moment."
     },
     {
      "type": "ordre",
      "phrase": "Elle est malade et fatiguée.",
      "expl": "Elle **est** : elle était.\n\n**Et** : on relie."
     }
    ]
   },
   {
    "id": "homophones-2",
    "titre": "son / sont, on / ont",
    "mots": [],
    "tableau": null,
    "regle": "- **sont** : le verbe être. Ils **sont** partis.\n- **son** : à lui, à elle. **Son** fils.\n- **ont** : le verbe avoir. Ils **ont** fini.\n- **on** : nous, quelqu'un. **On** mange.",
    "astuce": "Étaient ? **sont**.\n\nAvaient ? **ont**.\n\nMon ? **son**.\n\nIl ? **on**.",
    "retenir": "**Sont** et **ont** finissent par un **t**, comme les verbes au pluriel : ils sont, ils ont, ils vont, ils font.",
    "exemples": [
     "**Son** fils est là.",
     "Ils **sont** partis.",
     "**On** mange à midi.",
     "Ils **ont** fini."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils sont fatigués.",
      "faux": "Ils son fatigués.",
      "expl": "Ils **étaient** fatigués.\n\nDonc : **sont**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "On va au marché.",
      "faux": "Ont va au marché.",
      "expl": "**Il** va au marché.\n\nDonc : **on**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle cherche son sac.",
      "faux": "Elle cherche sont sac.",
      "expl": "Elle cherche **mon** sac.\n\nDonc : **son**."
     },
     {
      "type": "completer",
      "phrase": "Les enfants ___ à l'école.",
      "reponse": "sont",
      "choix": [
       "sont",
       "son"
      ],
      "expl": "Les enfants **étaient** à l'école.\n\nDonc : **sont**."
     },
     {
      "type": "completer",
      "phrase": "Ils ___ un rendez-vous.",
      "reponse": "ont",
      "choix": [
       "ont",
       "on"
      ],
      "expl": "Ils **avaient** un rendez-vous.\n\nDonc : **ont**."
     },
     {
      "type": "completer",
      "phrase": "___ frère habite à Paris.",
      "reponse": "Son",
      "choix": [
       "Son",
       "Sont"
      ],
      "expl": "**Mon** frère habite à Paris.\n\nDonc : **son**."
     },
     {
      "type": "ordre",
      "phrase": "Ils ont perdu leurs clés.",
      "expl": "Ils **ont** : ils avaient."
     },
     {
      "type": "ordre",
      "phrase": "On mange avec son frère.",
      "expl": "**On** : il.\n\n**Son** : mon."
     }
    ]
   },
   {
    "id": "homophones-3",
    "titre": "ou / où, la / là / l'a",
    "mots": [],
    "tableau": null,
    "regle": "- **où** : un lieu. **Où** est la gare ?\n- **ou** : ou bien. Thé **ou** café ?\n- **là** : un lieu. Il est **là**.\n- **la** : devant un nom. **La** voiture.\n- **l'a** : l'avait. Il **l'a** réparée.",
    "astuce": "Ou bien ? **ou** sans accent.\n\nL'avait ? **l'a**.",
    "retenir": "L'accent de **où** et de **là** est une **petite flèche** qui montre l'endroit.",
    "exemples": [
     "**Où** est la gare ?",
     "Thé **ou** café ?",
     "La voiture est **là**.",
     "Il **l'a** réparée."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Où habitez-vous ?",
      "faux": "Ou habitez-vous ?",
      "expl": "On demande un lieu.\n\n**Où** avec un accent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Tu veux du thé ou du café ?",
      "faux": "Tu veux du thé où du café ?",
      "expl": "On choisit : ou bien.\n\n**Ou** sans accent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Le bus est là.",
      "faux": "Le bus est la.",
      "expl": "Un endroit.\n\n**Là** avec un accent."
     },
     {
      "type": "completer",
      "phrase": "La clé ? Il ___ perdue.",
      "reponse": "l'a",
      "choix": [
       "l'a",
       "là"
      ],
      "expl": "Il **l'avait** perdue.\n\nDonc : **l'a**."
     },
     {
      "type": "completer",
      "phrase": "___ est la pharmacie ?",
      "reponse": "Où",
      "choix": [
       "Où",
       "Ou"
      ],
      "expl": "On demande un lieu.\n\nDonc : **où**."
     },
     {
      "type": "completer",
      "phrase": "Pose ___ boîte sur la table.",
      "reponse": "la",
      "choix": [
       "la",
       "là"
      ],
      "expl": "La boîte : un nom.\n\nDonc : **la**."
     },
     {
      "type": "ordre",
      "phrase": "Où est la boulangerie ?",
      "expl": "**Où** : un lieu."
     },
     {
      "type": "ordre",
      "phrase": "Je prends le bus ou le tram.",
      "expl": "Ou bien : **ou**."
     }
    ]
   },
   {
    "id": "homophones-4",
    "titre": "ce / se, ces / ses, c'est / s'est",
    "mots": [],
    "tableau": null,
    "regle": "- **se** : avant un verbe. Il **se** lave.\n- **ce** : avant un nom. **Ce** matin.\n- **ces** : pour montrer. **Ces** chaussures.\n- **ses** : à lui, à elle. **Ses** enfants.\n- **c'est** : cela est. **C'est** prêt.\n- **s'est** : un verbe avec se, au passé. Il **s'est** trompé.",
    "astuce": "Cela est ? **c'est**.\n\nMes ? **ses**.",
    "retenir": "Avec un **s** (se, ses, s'est), on parle de **soi** : sa personne, ses affaires. Avec un **c** (ce, ces, c'est), on **montre** : **c**ela.",
    "exemples": [
     "**Ce** matin, il pleut.",
     "Il **se** lave.",
     "**Ces** pneus sont usés.",
     "Elle range **ses** affaires.",
     "**C'est** prêt.",
     "Il **s'est** trompé."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il se réveille tôt.",
      "faux": "Il ce réveille tôt.",
      "expl": "Avant le verbe réveiller.\n\nDonc : **se**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "C'est mon fils.",
      "faux": "S'est mon fils.",
      "expl": "**Cela est** mon fils.\n\nDonc : **c'est**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle s'est levée tôt.",
      "faux": "Elle c'est levée tôt.",
      "expl": "Se lever, au passé.\n\nDonc : **s'est**."
     },
     {
      "type": "completer",
      "phrase": "___ soir, je travaille.",
      "reponse": "Ce",
      "choix": [
       "Ce",
       "Se"
      ],
      "expl": "Avant le nom soir.\n\nDonc : **ce**."
     },
     {
      "type": "completer",
      "phrase": "Il range ___ affaires.",
      "reponse": "ses",
      "choix": [
       "ses",
       "ces"
      ],
      "expl": "Il range **mes** affaires.\n\nDonc : **ses**."
     },
     {
      "type": "completer",
      "phrase": "___ combien ?",
      "reponse": "C'est",
      "choix": [
       "C'est",
       "S'est"
      ],
      "expl": "**Cela est** combien ?\n\nDonc : **c'est**."
     },
     {
      "type": "ordre",
      "phrase": "Ce matin, il s'est levé tôt.",
      "expl": "**Ce** matin : un nom.\n\n**S'est** levé : un verbe."
     },
     {
      "type": "ordre",
      "phrase": "C'est la voiture de ses parents.",
      "expl": "**C'est** : cela est.\n\n**Ses** parents : à lui."
     }
    ]
   },
   {
    "id": "homophones-5",
    "titre": "mais / mes, peu / peut / peux",
    "mots": [],
    "tableau": null,
    "regle": "- **mes** : à moi. **Mes** clés.\n- **mais** : le contraire. Gentil, **mais** rapide.\n- **peux** : je peux, tu peux.\n- **peut** : il peut, elle peut.\n- **peu** : pas beaucoup. Un **peu** de sel.",
    "astuce": "Pouvait ? C'est le verbe pouvoir.\n\nJe, tu : **peux**.\n\nIl, elle : **peut**.",
    "retenir": "**Mes = mon au pluriel** (ma clé → mes clés). **Peu = pas beaucoup**.",
    "exemples": [
     "Je cherche **mes** lunettes.",
     "Il est gentil, **mais** il parle vite.",
     "Je **peux** venir.",
     "Il **peut** attendre.",
     "Un **peu** de sel."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai perdu mes clés.",
      "faux": "J'ai perdu mais clés.",
      "expl": "Les clés à moi.\n\nDonc : **mes**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il peut venir demain.",
      "faux": "Il peu venir demain.",
      "expl": "Il **pouvait** venir.\n\nAvec il : **peut**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je mange un peu.",
      "faux": "Je mange un peut.",
      "expl": "Pas beaucoup.\n\nDonc : **peu**."
     },
     {
      "type": "completer",
      "phrase": "C'est cher, ___ c'est bon.",
      "reponse": "mais",
      "choix": [
       "mais",
       "mes"
      ],
      "expl": "Cher, et pourtant bon.\n\nLe contraire : **mais**."
     },
     {
      "type": "completer",
      "phrase": "Tu ___ m'aider ?",
      "reponse": "peux",
      "choix": [
       "peux",
       "peu"
      ],
      "expl": "Tu **pouvais**.\n\nAvec tu : **peux**."
     },
     {
      "type": "completer",
      "phrase": "___ enfants sont à l'école.",
      "reponse": "Mes",
      "choix": [
       "Mes",
       "Mais"
      ],
      "expl": "Les enfants à moi.\n\nDonc : **mes**."
     },
     {
      "type": "ordre",
      "phrase": "Je peux venir, mais un peu en retard.",
      "expl": "Je **peux** : pouvoir.\n\n**Mais** : le contraire.\n\nUn **peu** : pas beaucoup."
     },
     {
      "type": "ordre",
      "phrase": "Mes parents habitent en Algérie.",
      "expl": "Les parents à moi.\n\nDonc : **mes**."
     }
    ]
   },
   {
    "id": "homophones-6",
    "titre": "-er, -é, -ez",
    "mots": [],
    "tableau": null,
    "regle": "Ces 3 fins se disent pareil :\n\n- **-er** : je vais mang**er**\n- **-é** : j'ai mang**é**\n- **-ez** : vous mang**ez**",
    "astuce": "Remplacez par **vendre** ou **vendu**.\n\nVendre ? **-er**.\n\nVendu ? **-é**.",
    "retenir": "Remplacez par **vendre**. Si on peut dire « vendre » → **-er**. Si on peut dire « vendu » → **-é**. Avec **vous** → **-ez**.",
    "exemples": [
     "Je vais **manger**.",
     "J'ai **mangé**.",
     "Vous **mangez** à midi ?",
     "Il faut **appeler** le client.",
     "Le client a **appelé**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais téléphoner.",
      "faux": "Je vais téléphoné.",
      "expl": "Je vais **vendre**.\n\nDonc : **-er**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai réparé la voiture.",
      "faux": "J'ai réparer la voiture.",
      "expl": "J'ai **vendu**.\n\nDonc : **-é**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Vous parlez français ?",
      "faux": "Vous parlé français ?",
      "expl": "Avec **vous** : **-ez**."
     },
     {
      "type": "completer",
      "phrase": "Il doit appel___ le client.",
      "reponse": "er",
      "choix": [
       "er",
       "é",
       "ez"
      ],
      "expl": "Il doit **vendre**.\n\nDonc : **-er**."
     },
     {
      "type": "completer",
      "phrase": "Elle est arriv___ hier.",
      "reponse": "ée",
      "choix": [
       "ée",
       "er",
       "ez"
      ],
      "expl": "Elle est **vendue**.\n\nDonc : **-ée**."
     },
     {
      "type": "completer",
      "phrase": "Vous mang___ à quelle heure ?",
      "reponse": "ez",
      "choix": [
       "ez",
       "er",
       "é"
      ],
      "expl": "Avec **vous** : **-ez**."
     },
     {
      "type": "ordre",
      "phrase": "Je dois réparer la voiture.",
      "expl": "Je dois **vendre**.\n\nDonc : réparer, **-er**."
     },
     {
      "type": "ordre",
      "phrase": "Vous avez terminé ?",
      "expl": "Vous avez **vendu**.\n\nDonc : terminé, **-é**."
     }
    ]
   }
  ]
 },
 {
  "id": "passe",
  "titre": "Le passé : bien écrire",
  "officiel": "Participe passé et ses règles d'accord",
  "icone": "clock",
  "lecons": [
   {
    "id": "passe-1",
    "titre": "-é ou -er ?",
    "mots": [],
    "tableau": null,
    "regle": "Après **avoir** ou **être** : **-é**.\n\nJ'ai commenc**é**. Il est all**é**.\n\nAprès un autre verbe : **-er**.\n\nJe dois part**ir**. Je vais mang**er**.\n\nAprès **à, de, pour, sans** : **-er**.\n\nFacile à prépar**er**.",
    "astuce": "Remplacez par **vendre** ou **vendu**.\n\nVendu ? **-é**.\n\nVendre ? **-er**.",
    "retenir": "**Avoir / être → -é**. **Un verbe, à, de, pour → -er**. Et si on hésite : vendu → -é, vendre → -er.",
    "exemples": [
     "J'ai **commencé** à **travailler**.",
     "Il est **allé** **chercher** le pain.",
     "C'est facile à **préparer**.",
     "J'ai **oublié** de **fermer** la porte."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai commencé à travailler.",
      "faux": "J'ai commencer à travaillé.",
      "expl": "Après **ai** : commenc**é**.\n\nAprès **à** : travaill**er**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il est allé chercher le pain.",
      "faux": "Il est aller chercher le pain.",
      "expl": "Après **est** : all**é**.\n\nAprès allé : cherch**er**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai oublié de fermer la porte.",
      "faux": "J'ai oublier de fermé la porte.",
      "expl": "Après **ai** : oubli**é**.\n\nAprès **de** : ferm**er**."
     },
     {
      "type": "completer",
      "phrase": "C'est facile à prépar___.",
      "reponse": "er",
      "choix": [
       "er",
       "é",
       "ez"
      ],
      "expl": "Après **à** : prépar**er**."
     },
     {
      "type": "completer",
      "phrase": "Nous avons mang___ ensemble.",
      "reponse": "é",
      "choix": [
       "é",
       "er",
       "ez"
      ],
      "expl": "Après **avons** : mang**é**."
     },
     {
      "type": "completer",
      "phrase": "Il faut pass___ à la mairie.",
      "reponse": "er",
      "choix": [
       "er",
       "é",
       "ez"
      ],
      "expl": "Après **faut** : pass**er**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai essayé de vous appeler.",
      "expl": "J'ai essay**é**.\n\nDe vous appel**er**."
     },
     {
      "type": "ordre",
      "phrase": "Il est venu pour réparer la voiture.",
      "expl": "Il est venu.\n\nPour répar**er**."
     }
    ]
   },
   {
    "id": "passe-2",
    "titre": "Les participes à connaître",
    "mots": [],
    "tableau": [
     [
      "Fin",
      "Verbes"
     ],
     [
      "-é",
      "tous les verbes en -er : mangé, parlé, allé"
     ],
     [
      "-i",
      "fini, parti, dormi, sorti"
     ],
     [
      "-u",
      "vu, venu, lu, bu, attendu, pu, voulu, su, eu, reçu"
     ],
     [
      "-is",
      "pris, mis, appris, compris"
     ],
     [
      "-it",
      "fait, dit, écrit"
     ],
     [
      "été",
      "être"
     ]
    ],
    "regle": "Les verbes en -er : **-é**. Mangé, parlé.\n\nLes autres sont à apprendre :\n\n- **-i** : fini, parti, dormi\n- **-u** : vu, lu, bu, attendu\n- **-is** : pris, mis, compris\n- **-it** : fait, dit, écrit",
    "astuce": "Au féminin, on entend la dernière lettre.\n\nPris, pri**se**.\n\nFait, fai**te**.",
    "retenir": "Mettez le participe **au féminin** : si on entend une lettre de plus (prise, faite), c'est elle qui se cache au masculin (pris, fait).",
    "exemples": [
     "J'ai **pris** le bus.",
     "Il a **mis** son manteau.",
     "Nous avons **attendu** une heure.",
     "Elle a **écrit** une lettre.",
     "Ils ont **bu** de l'eau."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai pris mes médicaments.",
      "faux": "J'ai prendu mes médicaments.",
      "expl": "Prendre au passé : **pris**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il a écrit un SMS.",
      "faux": "Il a écri un SMS.",
      "expl": "Écrire au passé : **écrit**, avec un **t**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous avons attendu.",
      "faux": "Nous avons attendi.",
      "expl": "Attendre au passé : **attendu**."
     },
     {
      "type": "completer",
      "phrase": "Il a ___ son manteau.",
      "reponse": "mis",
      "choix": [
       "mis",
       "mit",
       "mettu"
      ],
      "expl": "Mettre au passé : **mis**."
     },
     {
      "type": "completer",
      "phrase": "Tu as ___ la lettre ?",
      "reponse": "lu",
      "choix": [
       "lu",
       "lit",
       "lis"
      ],
      "expl": "Lire au passé : **lu**."
     },
     {
      "type": "completer",
      "phrase": "Elle a ___ oui.",
      "reponse": "dit",
      "choix": [
       "dit",
       "dis",
       "disé"
      ],
      "expl": "Dire au passé : **dit**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai mis la lettre dans la boîte.",
      "expl": "J'ai **mis** la lettre.\n\n**Où ?** → dans la boîte"
     },
     {
      "type": "ordre",
      "phrase": "Nous avons attendu le bus longtemps.",
      "expl": "Nous avons **attendu** le bus."
     }
    ]
   },
   {
    "id": "passe-3",
    "titre": "Avec être, on accorde",
    "mots": [],
    "tableau": null,
    "regle": "Avec **être**, on accorde :\n\n- une femme : **-e**. Elle est parti**e**.\n- plusieurs : **-s**. Ils sont parti**s**.\n- plusieurs femmes : **-es**. Elles sont parti**es**.",
    "astuce": "Posez la question : qui ?\n\nQui est parti ? Ma fille.\n\nDonc : parti**e**.",
    "retenir": "**Être est un miroir** : le participe prend la forme de la personne qui est devant.",
    "exemples": [
     "Ma fille est **née** en 2015.",
     "Les enfants sont **rentrés**.",
     "Ma femme et ma fille sont **arrivées**.",
     "Il est **tombé**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle est rentrée tard.",
      "faux": "Elle est rentré tard.",
      "expl": "Elle : une femme.\n\nRentré**e**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Les enfants sont partis.",
      "faux": "Les enfants sont parti.",
      "expl": "Les enfants : plusieurs.\n\nParti**s**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mes sœurs sont venues.",
      "faux": "Mes sœurs sont venus.",
      "expl": "Mes sœurs : plusieurs femmes.\n\nVenu**es**."
     },
     {
      "type": "completer",
      "phrase": "Ma mère est ___ hier.",
      "reponse": "arrivée",
      "choix": [
       "arrivée",
       "arrivé",
       "arrivés"
      ],
      "expl": "Ma mère : une femme.\n\nArrivé**e**."
     },
     {
      "type": "completer",
      "phrase": "Nous (deux hommes) sommes ___.",
      "reponse": "restés",
      "choix": [
       "restés",
       "resté",
       "restées"
      ],
      "expl": "Deux hommes : plusieurs.\n\nResté**s**."
     },
     {
      "type": "completer",
      "phrase": "Elles sont ___ à la mairie.",
      "reponse": "allées",
      "choix": [
       "allées",
       "allés",
       "allée"
      ],
      "expl": "Elles : plusieurs femmes.\n\nAllé**es**."
     },
     {
      "type": "ordre",
      "phrase": "Ma fille est née au mois de mai.",
      "expl": "Ma fille : une femme.\n\nNé**e**."
     },
     {
      "type": "ordre",
      "phrase": "Les invités sont arrivés à midi.",
      "expl": "Les invités : plusieurs.\n\nArrivé**s**."
     }
    ]
   },
   {
    "id": "passe-4",
    "titre": "Avec avoir, on n'accorde pas",
    "mots": [],
    "tableau": null,
    "regle": "Avec **avoir**, on n'accorde pas.\n\nElle a mang**é**.\n\nIls ont mang**é**.",
    "astuce": "Avec avoir : jamais de **-e** ou de **-s** en plus.",
    "retenir": "**Avoir ne regarde pas qui fait l'action**. Elle a mangé, nous avons mangé, ils ont mangé : toujours pareil.",
    "exemples": [
     "Elle a **mangé**.",
     "Ils ont **fini**.",
     "Ma femme a **acheté** du pain.",
     "Les enfants ont **joué**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle a mangé.",
      "faux": "Elle a mangée.",
      "expl": "Avec **avoir** : pas d'accord.\n\nMangé."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils ont fini.",
      "faux": "Ils ont finis.",
      "expl": "Avec **avoir** : pas d'accord.\n\nFini."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ma fille a dessiné une maison.",
      "faux": "Ma fille a dessinée une maison.",
      "expl": "Avec **avoir** : pas d'accord.\n\nDessiné."
     },
     {
      "type": "completer",
      "phrase": "Les enfants ont ___ dans le parc.",
      "reponse": "joué",
      "choix": [
       "joué",
       "joués",
       "jouées"
      ],
      "expl": "Avec **avoir** : pas d'accord.\n\nJoué."
     },
     {
      "type": "completer",
      "phrase": "Ma femme a ___ le dîner.",
      "reponse": "préparé",
      "choix": [
       "préparé",
       "préparée",
       "préparés"
      ],
      "expl": "Avec **avoir** : pas d'accord.\n\nPréparé."
     },
     {
      "type": "completer",
      "phrase": "Nous avons ___ le bus.",
      "reponse": "pris",
      "choix": [
       "pris",
       "prises",
       "pri"
      ],
      "expl": "Pris garde toujours son **s**."
     },
     {
      "type": "ordre",
      "phrase": "Ma femme a acheté des fruits.",
      "expl": "Avec **avoir** : acheté."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants ont fait leurs devoirs.",
      "expl": "Avec **avoir** : fait."
     }
    ]
   },
   {
    "id": "passe-5",
    "titre": "Elle s'est levée (les verbes en se)",
    "mots": [],
    "tableau": null,
    "regle": "Certains verbes ont **se** devant :\n\nse lever, se laver, s'habiller, se coucher.\n\n- je **me** lève\n- tu **te** lèves\n- il **se** lève\n- nous **nous** levons\n- vous **vous** levez\n\nAu passé, avec **être** :\n\nelle s'est lev**ée**.",
    "astuce": "Avant a, e, i, o, u :\n\nme devient **m'**. Se devient **s'**.\n\nJe m'habille.",
    "retenir": "Le verbe en se fait l'action **sur soi-même** : je **me** lave = je lave **moi**. Au passé, il va dans la maison d'être.",
    "exemples": [
     "Je **me lève** à sept heures.",
     "Elle **s'est habillée** vite.",
     "Les enfants **se sont couchés** tôt.",
     "Je **me suis trompé**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je me lève tôt.",
      "faux": "Je se lève tôt.",
      "expl": "Avec **je** : **me**.\n\nJe me lève."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle s'est levée à six heures.",
      "faux": "Elle s'a levée à six heures.",
      "expl": "Au passé : avec **être**.\n\nElle **s'est** levée."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous nous sommes promenés.",
      "faux": "Nous se sommes promenés.",
      "expl": "Avec **nous** : **nous**.\n\nNous nous sommes promenés."
     },
     {
      "type": "completer",
      "phrase": "Tu ___ couches à quelle heure ?",
      "reponse": "te",
      "choix": [
       "te",
       "se",
       "me"
      ],
      "expl": "Avec **tu** : **te**.\n\nTu te couches."
     },
     {
      "type": "completer",
      "phrase": "Les enfants se sont ___.",
      "reponse": "lavés",
      "choix": [
       "lavés",
       "lavé",
       "laver"
      ],
      "expl": "Les enfants : plusieurs.\n\nLavé**s**."
     },
     {
      "type": "completer",
      "phrase": "Je ___ suis trompé.",
      "reponse": "me",
      "choix": [
       "me",
       "se",
       "te"
      ],
      "expl": "Avec **je** : **me**.\n\nJe me suis trompé."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants se sont couchés tôt.",
      "expl": "Les enfants se sont couché**s**."
     },
     {
      "type": "ordre",
      "phrase": "Je me réveille à sept heures.",
      "expl": "Avec **je** : je **me** réveille."
     }
    ]
   }
  ]
 },
 {
  "id": "orthographe",
  "titre": "Bien écrire les mots",
  "officiel": "Orthographe d'usage et grammaticale",
  "icone": "spell",
  "lecons": [
   {
    "id": "orthographe-1",
    "titre": "Les accents é, è, ê",
    "mots": [],
    "tableau": null,
    "regle": "- **é** : bouche peu ouverte. École, café.\n- **è** : bouche plus ouverte. Mère, père.\n- **ê** : comme è. Fête, tête.",
    "astuce": "Avant **-re** à la fin, souvent **è**.\n\nPère, mère, frère.",
    "retenir": "Le **ê** cache souvent un **s** disparu. On le retrouve dans un mot de la même famille : forêt → fore**s**tier, fête → fe**s**tival, hôpital → ho**s**pitalier.",
    "exemples": [
     "J'ai réservé une table.",
     "Mon père et ma mère.",
     "C'est la fête.",
     "Il est à l'hôpital."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "l'école",
      "faux": "l'ècole",
      "expl": "Au début du mot : **é**.\n\nÉcole."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "ma mère",
      "faux": "ma mére",
      "expl": "Avant **-re** : **è**.\n\nMère."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "la fenêtre",
      "faux": "la fenètre",
      "expl": "Fenêtre s'écrit avec **ê**."
     },
     {
      "type": "completer",
      "phrase": "Mon fr___re",
      "reponse": "è",
      "choix": [
       "è",
       "é",
       "ê"
      ],
      "expl": "Avant **-re** : **è**.\n\nFrère."
     },
     {
      "type": "completer",
      "phrase": "La t___te",
      "reponse": "ê",
      "choix": [
       "ê",
       "é",
       "è"
      ],
      "expl": "Tête s'écrit avec **ê**."
     },
     {
      "type": "completer",
      "phrase": "Il a fini son caf___.",
      "reponse": "é",
      "choix": [
       "é",
       "è",
       "ê"
      ],
      "expl": "À la fin du mot : **é**.\n\nCafé."
     },
     {
      "type": "ordre",
      "phrase": "Mon père travaille à l'hôpital.",
      "expl": "Père : **è**.\n\nHôpital : **ô**."
     },
     {
      "type": "ordre",
      "phrase": "Nous allons à la fête de l'école.",
      "expl": "Fête : **ê**.\n\nÉcole : **é**."
     }
    ]
   },
   {
    "id": "orthographe-2",
    "titre": "s, ss, c, ç",
    "mots": [],
    "tableau": null,
    "regle": "Entre deux voyelles :\n\n- un **s** fait « z » : maison\n- **ss** fait « s » : poisson\n\nLe **c** fait « s » avant e, i : merci.\n\nAvant a, o, u, on écrit **ç** : garçon, leçon.",
    "astuce": "Poisson : on le mange.\n\nPoison : c'est dangereux.",
    "retenir": "La **cédille** du ç est une **petite queue** qui dit « je fais s » devant a, o, u.",
    "exemples": [
     "Un **poisson**, du **poison**.",
     "**Merci** beaucoup.",
     "Le **garçon** a fait sa **leçon**.",
     "La **maison** est grande."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "un garçon",
      "faux": "un garcon",
      "expl": "Avant **o** : **ç**.\n\nGarçon."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une tasse de café",
      "faux": "une tase de café",
      "expl": "Entre deux voyelles : **ss**.\n\nTasse."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "merci",
      "faux": "merçi",
      "expl": "Avant **i** : **c** suffit.\n\nMerci."
     },
     {
      "type": "completer",
      "phrase": "J'ai re___u votre lettre.",
      "reponse": "ç",
      "choix": [
       "ç",
       "c",
       "ss"
      ],
      "expl": "Avant **u** : **ç**.\n\nReçu."
     },
     {
      "type": "completer",
      "phrase": "Il boit une boi___on.",
      "reponse": "ss",
      "choix": [
       "ss",
       "s",
       "ç"
      ],
      "expl": "Entre deux voyelles : **ss**.\n\nBoisson."
     },
     {
      "type": "completer",
      "phrase": "Le ___inéma est fermé.",
      "reponse": "c",
      "choix": [
       "c",
       "ç",
       "ss"
      ],
      "expl": "Avant **i** : **c**.\n\nCinéma."
     },
     {
      "type": "ordre",
      "phrase": "Le garçon apprend sa leçon.",
      "expl": "Garçon et leçon : **ç**."
     },
     {
      "type": "ordre",
      "phrase": "Je voudrais une tasse de café.",
      "expl": "Tasse : **ss**."
     }
    ]
   },
   {
    "id": "orthographe-3",
    "titre": "g, ge, gu",
    "mots": [],
    "tableau": null,
    "regle": "Le **g** fait « j » avant e, i : rouge.\n\nLe **g** fait « g » avant a, o, u : garage.\n\nPour « g » avant e, i : **gu**. Guitare.\n\nPour « j » avant a, o : **ge**. Nous mangeons.",
    "astuce": "Les verbes en **-ger** gardent le **e** avec nous.\n\nNous mange**o**ns.",
    "retenir": "**Gu** = le g qui reste **dur**. **ge** = le g qui devient **doux**, comme un j.",
    "exemples": [
     "Nous **mangeons**.",
     "Une **guitare**.",
     "Le **garage**.",
     "Une **langue** étrangère."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "nous mangeons",
      "faux": "nous mangons",
      "expl": "Avant **o** : **ge**.\n\nMangeons."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une guitare",
      "faux": "une gitare",
      "expl": "Avant **i** : **gu**.\n\nGuitare."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "le garage",
      "faux": "le guarage",
      "expl": "Avant **a** : **g** suffit.\n\nGarage."
     },
     {
      "type": "completer",
      "phrase": "Nous na___ons à la piscine.",
      "reponse": "ge",
      "choix": [
       "ge",
       "g",
       "gu"
      ],
      "expl": "Avant **o** : **ge**.\n\nNageons."
     },
     {
      "type": "completer",
      "phrase": "Je parle deux lan___es.",
      "reponse": "gu",
      "choix": [
       "gu",
       "g",
       "ge"
      ],
      "expl": "Avant **e** : **gu**.\n\nLangues."
     },
     {
      "type": "completer",
      "phrase": "Le ___âteau est bon.",
      "reponse": "g",
      "choix": [
       "g",
       "gu",
       "ge"
      ],
      "expl": "Avant **â** : **g** suffit.\n\nGâteau."
     },
     {
      "type": "ordre",
      "phrase": "Nous mangeons au restaurant.",
      "expl": "Mangeons : **ge** avant o."
     },
     {
      "type": "ordre",
      "phrase": "Il joue de la guitare.",
      "expl": "Guitare : **gu** avant i."
     }
    ]
   },
   {
    "id": "orthographe-4",
    "titre": "m devant b et p",
    "mots": [],
    "tableau": null,
    "regle": "Avant **m**, **b** et **p**, on écrit **m**.\n\nPas **n**.\n\nImportant. Ensemble. Tomber.",
    "astuce": "M, B, P : ils vont ensemble.",
    "retenir": "**M, b, p** sont trois lettres qui se disent **les lèvres fermées**. Devant elles, n devient m, parce que la bouche est déjà fermée.",
    "exemples": [
     "C'est **important**.",
     "Nous partons **ensemble**.",
     "Attention, ne **tombe** pas.",
     "Il fait le **compte**."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "ensemble",
      "faux": "ensenble",
      "expl": "Avant **b** : **m**.\n\nEnsemble."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "important",
      "faux": "inportant",
      "expl": "Avant **p** : **m**.\n\nImportant."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une chambre",
      "faux": "une chanbre",
      "expl": "Avant **b** : **m**.\n\nChambre."
     },
     {
      "type": "completer",
      "phrase": "Il est to___bé.",
      "reponse": "m",
      "choix": [
       "m",
       "n"
      ],
      "expl": "Avant **b** : **m**.\n\nTombé."
     },
     {
      "type": "completer",
      "phrase": "Une co___versation.",
      "reponse": "n",
      "choix": [
       "n",
       "m"
      ],
      "expl": "Avant **v** : on garde **n**.\n\nConversation."
     },
     {
      "type": "completer",
      "phrase": "Il fait le co___pte.",
      "reponse": "m",
      "choix": [
       "m",
       "n"
      ],
      "expl": "Avant **p** : **m**.\n\nCompte."
     },
     {
      "type": "ordre",
      "phrase": "Nous mangeons ensemble ce soir.",
      "expl": "Ensemble : **m** avant b."
     },
     {
      "type": "ordre",
      "phrase": "Il est tombé dans la chambre.",
      "expl": "Tombé, chambre : **m** avant b."
     }
    ]
   },
   {
    "id": "orthographe-5",
    "titre": "Les lettres qu'on n'entend pas",
    "mots": [],
    "tableau": null,
    "regle": "Beaucoup de mots ont une lettre muette à la fin.\n\nOn ne l'entend pas.\n\nPeti**t**, gran**d**, lai**t**.\n\nLe **h** du début ne s'entend pas souvent.\n\nL'homme, l'hôpital.",
    "astuce": "Pour trouver la lettre : pensez au féminin.\n\nPetit, peti**te**. Grand, gran**de**.",
    "retenir": "Pour trouver la lettre cachée à la fin, cherchez **un mot de la même famille** : le lai**t** → le lai**t**ier, la den**t** → le den**t**iste, le spor**t** → spor**t**if.",
    "exemples": [
     "Un **petit** garçon.",
     "Du **lait** chaud.",
     "J'ai mal aux **dents**.",
     "Un **grand** bruit."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "un enfant",
      "faux": "un enfan",
      "expl": "Enfant : pensez à **enfance**.\n\nDonc : **t**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "le lait",
      "faux": "le lai",
      "expl": "Lait : pensez à **laitier**.\n\nDonc : **t**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "un gros chat",
      "faux": "un gro chat",
      "expl": "Au féminin : gro**sse**.\n\nDonc : **s**."
     },
     {
      "type": "completer",
      "phrase": "J'ai mal aux den___.",
      "reponse": "ts",
      "choix": [
       "ts",
       "s",
       "x"
      ],
      "expl": "Dent : pensez à **dentiste**.\n\nPlusieurs : **ts**."
     },
     {
      "type": "completer",
      "phrase": "Un gran___ magasin.",
      "reponse": "d",
      "choix": [
       "d",
       "t",
       "s"
      ],
      "expl": "Au féminin : gran**de**.\n\nDonc : **d**."
     },
     {
      "type": "completer",
      "phrase": "Le spor___",
      "reponse": "t",
      "choix": [
       "t",
       "s",
       "d"
      ],
      "expl": "Sport : pensez à **sportif**.\n\nDonc : **t**."
     },
     {
      "type": "ordre",
      "phrase": "Le petit garçon boit du lait.",
      "expl": "Peti**t** et lai**t** : lettres muettes."
     },
     {
      "type": "ordre",
      "phrase": "Il fait un grand bruit.",
      "expl": "Gran**d** et brui**t** : lettres muettes."
     }
    ]
   },
   {
    "id": "orthographe-6",
    "titre": "Les mots difficiles du quotidien",
    "mots": [],
    "tableau": null,
    "regle": "Certains mots sont à apprendre par cœur :\n\n- aujourd'hui\n- beaucoup\n- toujours\n- quelqu'un\n- peut-être\n- rendez-vous\n- d'accord\n- maintenant",
    "astuce": "**Peut-être**, avec un tiret : possible.\n\nIl **peut être** en retard : le verbe pouvoir.",
    "retenir": "**Aujourd'hui** = « au jour d'hui », des morceaux collés, d'où l'apostrophe. **beaucoup** = **beau + coup**. **toujours** = **tous les jours**, avec un s.",
    "exemples": [
     "**Aujourd'hui**, il fait beau.",
     "Merci **beaucoup**.",
     "**D'accord**, à demain.",
     "**Peut-être** demain."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "aujourd'hui",
      "faux": "aujourdhui",
      "expl": "Aujourd'hui : avec une **apostrophe**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "beaucoup",
      "faux": "beaucou",
      "expl": "Beaucoup : un **p** à la fin."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "d'accord",
      "faux": "dacord",
      "expl": "D'accord : une **apostrophe**, deux **c**."
     },
     {
      "type": "completer",
      "phrase": "Il est ___ en retard.",
      "reponse": "toujours",
      "choix": [
       "toujours",
       "toujour",
       "toujous"
      ],
      "expl": "Toujours : un **s** à la fin."
     },
     {
      "type": "completer",
      "phrase": "J'ai un ___ chez le médecin.",
      "reponse": "rendez-vous",
      "choix": [
       "rendez-vous",
       "rendevous",
       "rendez vous"
      ],
      "expl": "Rendez-vous : avec un **tiret**."
     },
     {
      "type": "completer",
      "phrase": "Merci ___ !",
      "reponse": "beaucoup",
      "choix": [
       "beaucoup",
       "beaucoups",
       "boucoup"
      ],
      "expl": "Beaucoup : jamais de **s**."
     },
     {
      "type": "ordre",
      "phrase": "Je suis d'accord avec vous.",
      "expl": "D'accord : avec une **apostrophe**."
     },
     {
      "type": "ordre",
      "phrase": "Aujourd'hui, il fait beau.",
      "expl": "Aujourd'hui : avec une **apostrophe**."
     }
    ]
   }
  ]
 },
 {
  "id": "ponctuation",
  "titre": "Les signes et les majuscules",
  "officiel": "Ponctuation et typographie",
  "icone": "quote",
  "lecons": [
   {
    "id": "ponctuation-1",
    "titre": "Le point et la majuscule",
    "mots": [],
    "tableau": null,
    "regle": "Une phrase commence par une **majuscule**.\n\nElle finit par un **point**.\n\nMajuscule aussi pour :\n\n- les prénoms : Adam\n- les villes : Lyon\n- les pays : la France\n\nPas de majuscule pour :\n\n- les jours : lundi\n- les mois : janvier\n- les langues : le français",
    "astuce": "Il parle **f**rançais : la langue.\n\nLes **F**rançais : les personnes.",
    "retenir": "Une phrase est une **maison**. La majuscule est la **porte d'entrée**, le point est la **porte de sortie**.",
    "exemples": [
     "J'habite à **L**yon.",
     "Le rendez-vous est **l**undi.",
     "Il parle **f**rançais.",
     "Mon fils s'appelle **A**dam."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais à Lyon lundi.",
      "faux": "je vais à lyon Lundi.",
      "expl": "Majuscule au début et à **Lyon**.\n\nPas à lundi."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous sommes en janvier.",
      "faux": "Nous sommes en Janvier.",
      "expl": "Les mois : pas de majuscule.\n\n**j**anvier."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il parle français.",
      "faux": "Il parle Français.",
      "expl": "La langue : pas de majuscule.\n\n**f**rançais."
     },
     {
      "type": "completer",
      "phrase": "J'habite en ___.",
      "reponse": "France",
      "choix": [
       "France",
       "france",
       "FRANCE"
      ],
      "expl": "Un pays : une majuscule.\n\n**F**rance."
     },
     {
      "type": "completer",
      "phrase": "Le rendez-vous est ___.",
      "reponse": "mardi",
      "choix": [
       "mardi",
       "Mardi",
       "MARDI"
      ],
      "expl": "Un jour : pas de majuscule.\n\n**m**ardi."
     },
     {
      "type": "completer",
      "phrase": "___ fils va à l'école.",
      "reponse": "Mon",
      "choix": [
       "Mon",
       "mon",
       "MON"
      ],
      "expl": "Début de la phrase : **M**on."
     },
     {
      "type": "ordre",
      "phrase": "Ma fille habite à Paris.",
      "expl": "Majuscule au début et à **P**aris.\n\nUn point à la fin."
     },
     {
      "type": "ordre",
      "phrase": "Le marché ouvre le samedi.",
      "expl": "Majuscule au début.\n\n**s**amedi : pas de majuscule."
     }
    ]
   },
   {
    "id": "ponctuation-2",
    "titre": "La virgule",
    "mots": [],
    "tableau": null,
    "regle": "La virgule : une petite pause.\n\nOn la met :\n\n- dans une liste : du pain, du lait\n- après un mot du début : Hier, il a plu.\n- après Bonjour Madame\n- avant **mais**",
    "astuce": "Pas de virgule avant le dernier **et**.\n\nDu pain, du lait **et** des œufs.",
    "retenir": "La virgule est une **petite respiration**. Là où la voix fait une petite pause, on peut mettre une virgule.",
    "exemples": [
     "J'achète du pain, du lait et des œufs.",
     "Hier, il a plu.",
     "Bonjour Madame, je vous écris au sujet de mon fils.",
     "C'est cher, mais c'est bon."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'achète du pain, du lait et du beurre.",
      "faux": "J'achète du pain, du lait, et, du beurre.",
      "expl": "Une virgule entre les choses.\n\nPas avant le dernier **et**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Hier, je suis allé au marché.",
      "faux": "Hier je, suis allé au marché.",
      "expl": "La pause après **Hier**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "C'est loin, mais j'y vais.",
      "faux": "C'est loin mais, j'y vais.",
      "expl": "La virgule va **avant** mais."
     },
     {
      "type": "completer",
      "phrase": "Bonjour Madame___ je vous écris pour un rendez-vous.",
      "reponse": ",",
      "choix": [
       ",",
       ".",
       "?"
      ],
      "expl": "Après Bonjour Madame : **une virgule**."
     },
     {
      "type": "completer",
      "phrase": "Demain___ je travaille.",
      "reponse": ",",
      "choix": [
       ",",
       ".",
       "?"
      ],
      "expl": "Après **Demain** : une virgule."
     },
     {
      "type": "completer",
      "phrase": "Je prends des pommes___ des poires et des bananes.",
      "reponse": ",",
      "choix": [
       ",",
       ".",
       "?"
      ],
      "expl": "Dans une liste : **une virgule**."
     },
     {
      "type": "ordre",
      "phrase": "Ce matin, il fait froid.",
      "expl": "Ce matin**,** il fait froid."
     },
     {
      "type": "ordre",
      "phrase": "Il est fatigué, mais il travaille.",
      "expl": "Une virgule **avant** mais."
     }
    ]
   },
   {
    "id": "ponctuation-3",
    "titre": "Les signes ? et !",
    "mots": [],
    "tableau": null,
    "regle": "- **?** : une question. Vous venez ?\n- **!** : une émotion ou un ordre. Attention !\n\nEn français, on met **un espace** avant ? et !",
    "astuce": "Le téléphone ajoute souvent l'espace tout seul.",
    "retenir": "Les signes **hauts** (? ! : ;) ont besoin d'**un espace avant**, comme pour prendre leur respiration.",
    "exemples": [
     "Vous venez demain ?",
     "Attention !",
     "Quelle belle journée !",
     "Combien ça coûte ?"
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Où habitez-vous ?",
      "faux": "Où habitez-vous.",
      "expl": "Une question : **?**"
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Attention, c'est chaud !",
      "faux": "Attention, c'est chaud ?",
      "expl": "Un avertissement : **!**"
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Combien ça coûte ?",
      "faux": "Combien ça coûte !",
      "expl": "On demande un prix : **?**"
     },
     {
      "type": "completer",
      "phrase": "Quelle bonne nouvelle ___",
      "reponse": "!",
      "choix": [
       "!",
       "?",
       "."
      ],
      "expl": "On est content : **!**"
     },
     {
      "type": "completer",
      "phrase": "À quelle heure ferme la pharmacie ___",
      "reponse": "?",
      "choix": [
       "?",
       "!",
       "."
      ],
      "expl": "Une question : **?**"
     },
     {
      "type": "completer",
      "phrase": "Le bus arrive à midi___",
      "reponse": ".",
      "choix": [
       ".",
       "?",
       "!"
      ],
      "expl": "Une information simple : **un point**."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que vous parlez anglais ?",
      "expl": "Une question : **?** à la fin."
     },
     {
      "type": "ordre",
      "phrase": "Bravo, c'est parfait !",
      "expl": "Une émotion : **!** à la fin."
     }
    ]
   },
   {
    "id": "ponctuation-4",
    "titre": "L'apostrophe (l', j', n')",
    "mots": [],
    "tableau": null,
    "regle": "Avant a, e, i, o, u, h :\n\nles petits mots perdent leur voyelle.\n\n- je devient **j'** : j'ai\n- le, la deviennent **l'** : l'école\n- ne devient **n'** : il n'a pas\n- de devient **d'** : d'accord\n- que devient **qu'** : qu'est-ce que",
    "astuce": "Avant une consonne, on garde le mot entier.\n\nJe mange. J'habite.",
    "retenir": "L'apostrophe **empêche deux voyelles de se cogner** : je ai → j'ai, la école → l'école.",
    "exemples": [
     "**J'**ai faim.",
     "**L'**hôpital est loin.",
     "Il **n'**a pas le temps.",
     "**Qu'**est-ce que c'est ?",
     "**D'**accord."
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'habite à Lyon.",
      "faux": "Je habite à Lyon.",
      "expl": "Habite commence par **h**.\n\nJe devient **j'**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il n'aime pas le café.",
      "faux": "Il ne aime pas le café.",
      "expl": "Aime commence par **a**.\n\nNe devient **n'**."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "l'hôpital",
      "faux": "le hôpital",
      "expl": "Le **h** ne s'entend pas.\n\nLe devient **l'**."
     },
     {
      "type": "completer",
      "phrase": "Elle ___habille vite.",
      "reponse": "s'",
      "choix": [
       "s'",
       "se",
       "sa"
      ],
      "expl": "Habille commence par **h**.\n\nSe devient **s'**."
     },
     {
      "type": "completer",
      "phrase": "Le livre ___Omar est sur la table.",
      "reponse": "d'",
      "choix": [
       "d'",
       "de",
       "du"
      ],
      "expl": "Omar commence par **O**.\n\nDe devient **d'**."
     },
     {
      "type": "completer",
      "phrase": "___est-ce que vous voulez ?",
      "reponse": "Qu'",
      "choix": [
       "Qu'",
       "Que",
       "Quoi"
      ],
      "expl": "Est commence par **e**.\n\nQue devient **qu'**."
     },
     {
      "type": "ordre",
      "phrase": "J'ai rendez-vous à l'hôpital.",
      "expl": "**J'**ai.\n\n**L'**hôpital."
     },
     {
      "type": "ordre",
      "phrase": "Il n'est pas encore arrivé.",
      "expl": "Il **n'**est pas."
     }
    ]
   },
   {
    "id": "ponctuation-5",
    "titre": "Écrire un message propre",
    "mots": [],
    "tableau": null,
    "regle": "Un message sérieux a 4 parties :\n\n- **Bonjour** Madame,\n- le message, en phrases courtes\n- la fin : Merci, Bonne journée, Cordialement\n- la signature : prénom et nom",
    "astuce": "Pas d'abréviations.\n\nÉcrivez « s'il vous plaît », pas « svp ».",
    "retenir": "Un bon message, c'est **B-M-S** : **B**onjour, **M**essage, **S**ignature.",
    "exemples": [
     "Bonjour Madame, mon fils est malade aujourd'hui. Il ne viendra pas à l'école. Merci. [Prénom Nom]",
     "Bonjour, votre voiture est prête. Vous pouvez venir la chercher. Bonne journée, le garage [nom].",
     "Bonjour Monsieur, je voudrais prendre rendez-vous. Cordialement, [Prénom Nom]"
    ],
    "exercices": [
     {
      "type": "choisir",
      "consigne": "le meilleur début pour la maîtresse",
      "juste": "Bonjour Madame,",
      "faux": "Salut !",
      "expl": "À la maîtresse : **Bonjour Madame**.\n\nSalut, c'est pour les amis."
     },
     {
      "type": "choisir",
      "consigne": "la meilleure fin pour un client",
      "juste": "Bonne journée, le garage Martin.",
      "faux": "Bye.",
      "expl": "À un client : une fin polie.\n\nEt le nom du garage."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils est malade, il ne viendra pas aujourd'hui.",
      "faux": "mon fils malade il vient pas",
      "expl": "Une phrase complète :\n\nmajuscule, ne… pas, et un point."
     },
     {
      "type": "completer",
      "phrase": "___ Monsieur, votre voiture est prête.",
      "reponse": "Bonjour",
      "choix": [
       "Bonjour",
       "Coucou",
       "Salut"
      ],
      "expl": "Un message commence par **Bonjour**."
     },
     {
      "type": "completer",
      "phrase": "Je vous remercie. ___, Prénom Nom.",
      "reponse": "Cordialement",
      "choix": [
       "Cordialement",
       "Bisous",
       "À plus"
      ],
      "expl": "Message sérieux : **Cordialement**."
     },
     {
      "type": "completer",
      "phrase": "Bonjour Madame, ___ fils est absent aujourd'hui.",
      "reponse": "mon",
      "choix": [
       "mon",
       "ma",
       "mes"
      ],
      "expl": "Mon fils : **mon**."
     },
     {
      "type": "ordre",
      "phrase": "Bonjour Madame, mon fils est malade aujourd'hui.",
      "expl": "D'abord **Bonjour Madame**.\n\nPuis le message."
     },
     {
      "type": "ordre",
      "phrase": "Votre voiture est prête, bonne journée.",
      "expl": "Le message.\n\nPuis **bonne journée**."
     }
    ]
   }
  ]
 }
];
