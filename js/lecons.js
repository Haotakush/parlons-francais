/* Les 8 thèmes et leurs 52 leçons. Généré depuis le document de programme (tools/ ne contient pas ce script : modifier directement ici). */
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
    "regle": "En français, on dit d'abord **qui**, puis **ce qu'il fait**, puis le reste (quoi, où, quand).",
    "astuce": "Qui ? → Fait quoi ? → Quoi, où, quand ?",
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
      "expl": "« Je » fait l'action (qui ?), « répare » est l'action (fait quoi ?), « la voiture » dit ce qu'on répare (quoi ?). Le verbe ne passe jamais devant « je » dans une phrase normale."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils va à l'école.",
      "faux": "Va mon fils à l'école.",
      "expl": "Qui va à l'école ? « Mon fils ». Il vient donc en premier, puis le verbe « va », puis le lieu « à l'école »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La pharmacie ferme à 19 heures.",
      "faux": "Ferme la pharmacie à 19 heures.",
      "expl": "« La pharmacie » (qui ?) + « ferme » (fait quoi ?) + « à 19 heures » (quand ?). Le moment se place à la fin."
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
      "expl": "Après une personne (mon mari = il), le verbe se conjugue : il travaille. « Travailler » est la forme du dictionnaire, « travaillé » sert au passé."
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
      "expl": "« Nous » est la personne qui fait l'action (nous allons). « Notre » et « nos » vont devant un nom : notre maison, nos enfants."
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
      "expl": "« Les enfants » = ils, donc « sont ». « Est » va avec il ou elle, « es » avec tu."
     },
     {
      "type": "ordre",
      "phrase": "Le bus arrive à huit heures.",
      "expl": "Qui ? le bus. Fait quoi ? arrive. Quand ? à huit heures."
     },
     {
      "type": "ordre",
      "phrase": "Ma fille aime la musique.",
      "expl": "Qui ? ma fille. Fait quoi ? aime. Quoi ? la musique."
     }
    ]
   },
   {
    "id": "phrases-2",
    "titre": "Dire non",
    "mots": [],
    "tableau": null,
    "regle": "Pour dire non, on met **ne** avant le verbe et **pas** après. Devant une voyelle, ne devient **n'**. D'autres façons de dire non : ne… **plus** (plus maintenant), ne… **jamais** (à aucun moment), ne… **rien** (aucune chose), ne… **personne** (aucune personne).",
    "astuce": "À l'oral, on entend souvent seulement « pas » (« je sais pas »). À l'écrit, il faut toujours ne… pas.",
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
      "expl": "Le sandwich : ne + comprends + pas. « Pas » vient toujours après le verbe, jamais avant."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ce n'est pas loin.",
      "faux": "Ce ne est pas loin.",
      "expl": "« Est » commence par une voyelle (e), donc ne devient n' : ce n'est pas."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il n'a rien mangé.",
      "faux": "Il a ne rien mangé.",
      "expl": "Au passé composé, le sandwich entoure le petit verbe « a » : il n'a rien, puis mangé."
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
      "expl": "« Suis » commence par une consonne (s), donc on garde ne : je ne suis pas."
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
      "expl": "Elle habitait ici avant, mais plus maintenant : on utilise ne… plus."
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
      "expl": "On parle de gens : aucune personne, donc ne… personne."
     },
     {
      "type": "ordre",
      "phrase": "Je ne parle pas bien français.",
      "expl": "Ne + parle + pas : le sandwich, puis le reste de la phrase."
     },
     {
      "type": "ordre",
      "phrase": "Il n'y a plus de pain.",
      "expl": "« Il y a » devient « il n'y a » : ne devient n' devant « y ». Avant il y avait du pain, maintenant non : ne… plus."
     }
    ]
   },
   {
    "id": "phrases-3",
    "titre": "Poser une question",
    "mots": [],
    "tableau": null,
    "regle": "Il y a trois façons de poser une question.\n\n- La voix qui monte : Tu viens demain ?\n- « Est-ce que » au début : Est-ce que tu viens demain ?\n- Un mot question : **où** (un lieu), **quand** (un moment), **comment** (la manière), **combien** (une quantité, un prix), **pourquoi** (une raison), **qui** (une personne), **quel / quelle** (un choix).",
    "astuce": "Pour répondre à « pourquoi ? », on commence par « parce que ».",
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
      "expl": "« Est-ce que » s'écrit toujours en entier, avec deux tirets. Ensuite la phrase reste normale : vous avez une place."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Pourquoi il est absent ?",
      "faux": "Parce que il est absent ?",
      "expl": "« Pourquoi » pose la question, « parce que » donne la réponse. On ne commence pas une question par « parce que »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Où est l'arrêt de bus ?",
      "faux": "Où l'arrêt de bus ?",
      "expl": "Il faut un verbe dans la question : où **est** l'arrêt de bus ?"
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
      "expl": "On demande un prix, donc « combien » (le porte-monnaie)."
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
      "expl": "On demande un moment, donc « quand » (la montre)."
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
      "expl": "On demande le prénom, la façon de l'appeler, donc « comment »."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que vous parlez français ?",
      "expl": "Est-ce que + la phrase normale (vous parlez français) + le point d'interrogation."
     },
     {
      "type": "ordre",
      "phrase": "Où est la salle d'attente ?",
      "expl": "Où (le lieu) + est (le verbe) + la salle d'attente (la chose qu'on cherche)."
     }
    ]
   },
   {
    "id": "phrases-4",
    "titre": "Demander poliment",
    "mots": [],
    "tableau": null,
    "regle": "Pour être poli, on dit **je voudrais**, **pourriez-vous**, **est-ce que je peux**, et on finit par **s'il vous plaît**. On dit **vous** aux inconnus, au médecin, au professeur et aux clients. On dit **tu** à la famille, aux amis et aux enfants.",
    "astuce": "« Je veux » est trop direct avec un inconnu. Dites « je voudrais ».",
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
      "expl": "Les deux phrases sont correctes, mais « je voudrais » est plus doux que « je veux », et « s'il vous plaît » montre le respect."
     },
     {
      "type": "choisir",
      "consigne": "chez le médecin",
      "juste": "Bonjour docteur, vous allez bien ?",
      "faux": "Salut docteur, tu vas bien ?",
      "expl": "Le médecin n'est pas un ami ou un membre de la famille : on dit « vous » et « bonjour », pas « tu » et « salut »."
     },
     {
      "type": "choisir",
      "consigne": "la plus polie",
      "juste": "Pourriez-vous parler plus lentement ?",
      "faux": "Parle plus lentement !",
      "expl": "« Pourriez-vous » pose une question polie. « Parle ! » est un ordre, qui peut paraître impoli."
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
      "expl": "Je voudrais + un verbe à l'infinitif, la forme du dictionnaire (prendre, parler, payer) : c'est la forme polie de « je veux »."
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
      "expl": "Avec « je », on écrit « peux » (avec x). « Peut » va avec il ou elle."
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
      "expl": "« Journée » est un mot féminin (une journée), donc « bonne » avec -ne. On dit « bon » pour un mot masculin : bon week-end."
     },
     {
      "type": "ordre",
      "phrase": "Je voudrais parler au directeur, s'il vous plaît.",
      "expl": "Je voudrais + parler + au directeur, puis la formule de politesse à la fin, après une virgule."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que je peux vous poser une question ?",
      "expl": "Est-ce que + je peux + vous poser une question : « vous » se place avant « poser »."
     }
    ]
   },
   {
    "id": "phrases-5",
    "titre": "Relier deux idées",
    "mots": [],
    "tableau": null,
    "regle": "De petits mots relient deux phrases pour n'en faire qu'une.\n\n- **et** : ajouter\n- **mais** : dire le contraire\n- **ou** : choisir\n- **donc, alors** : la conséquence\n- **parce que** : la raison\n- **quand** : le moment\n- **si** : la condition",
    "astuce": "Devant une voyelle, « parce que » devient « parce qu' » : parce qu'il, parce qu'elle.",
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
      "expl": "« Il » commence par une voyelle, donc « parce que » perd son e : parce qu'il."
     },
     {
      "type": "choisir",
      "consigne": "la phrase logique",
      "juste": "J'ai faim, donc je mange.",
      "faux": "J'ai faim, mais je mange.",
      "expl": "Avoir faim est la raison, manger est la conséquence : on utilise « donc ». « Mais » sert pour deux idées qui s'opposent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Tu veux du thé ou du café ?",
      "faux": "Tu veux du thé où du café ?",
      "expl": "Ici on choisit entre deux boissons : « ou » sans accent. « Où » avec un accent parle d'un lieu."
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
      "expl": "La pluie est la raison, le parapluie est la conséquence : « donc »."
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
      "expl": "Vieille, et pourtant elle roule bien : deux idées contraires, donc « mais »."
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
      "expl": "« Si » pose une condition : peut-être que tu auras besoin d'aide. Si oui, appelle-moi."
     },
     {
      "type": "ordre",
      "phrase": "Je reste à la maison parce que je suis fatiguée.",
      "expl": "Première idée (je reste à la maison) + parce que + la raison (je suis fatiguée)."
     },
     {
      "type": "ordre",
      "phrase": "Il travaille le matin et il étudie le soir.",
      "expl": "Deux actions de la même personne, reliées par « et »."
     }
    ]
   },
   {
    "id": "phrases-6",
    "titre": "Dire quand et où",
    "mots": [],
    "tableau": null,
    "regle": "**Pour le moment**\n\n- **hier, aujourd'hui, demain**\n- **il y a** + durée : dans le passé (il y a deux jours)\n- **dans** + durée : dans le futur (dans deux jours)\n- **depuis** : ça a commencé et ça continue (depuis trois ans)\n- **pendant** : une durée (pendant une heure)\n\n**Pour le lieu**\n\n- **à** + ville : à Lyon\n- **en** + pays féminin : en France, en Algérie. **au** + pays masculin : au Maroc\n- **à la, au, aux** + lieu : à la mairie, au garage, aux urgences\n- **chez** + personne : chez le médecin, chez moi",
    "astuce": "« Chez », c'est pour une personne. « à », c'est pour un lieu. On dit « chez le médecin », mais « à l'hôpital ».",
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
      "expl": "Le médecin est une personne, donc « chez ». « Au médecin » s'entend à l'oral, mais c'est du langage familier."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'habite en France.",
      "faux": "J'habite à France.",
      "expl": "La France est un pays féminin (la France), donc « en ». « À » sert pour une ville : à Lyon."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je suis arrivé il y a deux jours.",
      "faux": "Je suis arrivé dans deux jours.",
      "expl": "C'est déjà arrivé (je suis arrivé), donc on regarde derrière : « il y a »."
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
      "expl": "J'habite ici et j'y habite encore : ce n'est pas fini, donc « depuis »."
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
      "expl": "Le bus n'est pas encore là, il arrivera plus tard : « dans »."
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
      "expl": "On dit « la mairie », donc « à la mairie ». « Au » remplace « à le » pour un mot masculin : au garage."
     },
     {
      "type": "ordre",
      "phrase": "Nous partons en vacances dans une semaine.",
      "expl": "Qui ? nous. Fait quoi ? partons. Où ? en vacances. Quand ? dans une semaine."
     },
     {
      "type": "ordre",
      "phrase": "Je travaille au garage depuis deux ans.",
      "expl": "Je travaille + où (au garage) + depuis quand (depuis deux ans, et je continue)."
     }
    ]
   },
   {
    "id": "phrases-7",
    "titre": "Des phrases plus longues (qui, que, où)",
    "mots": [],
    "tableau": null,
    "regle": "Qui, que et où permettent d'ajouter une précision sans répéter le mot.\n\n- **qui** : ce mot fait l'action. Le garçon **qui** joue est mon fils.\n- **que** : quelqu'un d'autre fait l'action. La voiture **que** je répare est rouge.\n- **où** : un lieu ou un moment. La ville **où** j'habite.",
    "astuce": "Après « qui », il y a souvent un verbe. Après « que », il y a souvent je, tu, il, nous…",
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
      "expl": "Après le mot, il y a « je » : c'est moi qui lis le livre, donc « que »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "L'homme qui parle est mon voisin.",
      "faux": "L'homme que parle est mon voisin.",
      "expl": "Après le mot, il y a directement le verbe « parle » : c'est l'homme qui fait l'action, donc « qui »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La maison où j'habite est grande.",
      "faux": "La maison que j'habite dedans est grande.",
      "expl": "On parle d'un lieu, la maison : « où ». On n'ajoute pas « dedans » : « où » le dit déjà."
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
      "expl": "Le garage est un lieu, donc « où »."
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
      "expl": "Juste après, il y a le verbe « arrive » : c'est la dame qui arrive, donc « qui »."
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
      "expl": "Juste après, il y a « tu » : c'est toi qui prépares le plat, donc « que »."
     },
     {
      "type": "ordre",
      "phrase": "J'ai une voisine qui parle kabyle.",
      "expl": "J'ai une voisine + qui (elle fait l'action) + parle kabyle."
     },
     {
      "type": "ordre",
      "phrase": "C'est la pharmacie où j'achète mes médicaments.",
      "expl": "C'est la pharmacie + où (le lieu) + j'achète mes médicaments."
     }
    ]
   },
   {
    "id": "phrases-8",
    "titre": "Remplacer un mot (le, la, lui, y, en)",
    "mots": [],
    "tableau": null,
    "regle": "Pour ne pas répéter, on remplace un mot par un petit mot placé **avant le verbe**.\n\n- **le, la, l', les** : une chose ou une personne. Je répare la voiture → Je **la** répare.\n- **lui, leur** : à une personne. Je parle au client → Je **lui** parle.\n- **y** : un lieu. Je vais à la mairie → J'**y** vais.\n- **en** : une quantité, après du, de la, des. Je veux du pain → J'**en** veux.",
    "astuce": "Le petit mot va toujours avant le verbe. On dit « je la répare », pas « je répare la ».",
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
      "expl": "« La » remplace « la voiture » et se place devant le verbe « répare »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'y vais demain.",
      "faux": "Je y vais demain.",
      "expl": "« Y » commence par une voyelle, donc je devient j' : j'y vais."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je lui téléphone.",
      "faux": "Je le téléphone.",
      "expl": "On téléphone **à** quelqu'un : avec « à », on utilise « lui » et pas « le »."
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
      "expl": "On achète le pain : « le » devient l' devant « achète », qui commence par une voyelle."
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
      "expl": "On écrit **à** sa sœur, donc « lui ». « Lui » sert pour un homme ou pour une femme."
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
      "expl": "On parle d'une quantité (des tomates, deux kilos), donc « en »."
     },
     {
      "type": "ordre",
      "phrase": "Je les cherche depuis ce matin.",
      "expl": "« Les » remplace une chose au pluriel (les clés, par exemple) et se place devant « cherche »."
     },
     {
      "type": "ordre",
      "phrase": "Nous y allons ensemble.",
      "expl": "« Y » remplace un lieu déjà cité et se place devant « allons »."
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
    "regle": "Pour dire où on fait quelque chose, on dit **dans** + la pièce : dans la cuisine, dans la chambre.",
    "astuce": "On dit toujours **les** toilettes, au pluriel, même s'il n'y en a qu'une.",
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
      "expl": "Les repas se préparent dans la cuisine. On dort dans la chambre."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il fait froid, j'allume le chauffage.",
      "faux": "Il fait froid, j'ouvre la fenêtre.",
      "expl": "Quand il fait froid, on chauffe : on allume le chauffage. Ouvrir la fenêtre ferait entrer le froid."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je paie le loyer au propriétaire.",
      "faux": "Je paie le propriétaire au loyer.",
      "expl": "On paie quelque chose (le loyer) à quelqu'un (au propriétaire). Au = à + le."
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
      "expl": "On ferme la porte à clé : la clé sert à la porte."
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
      "expl": "La douche est dans la salle de bain, la pièce où on se lave."
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
      "expl": "Toilettes se dit toujours au pluriel : les toilettes, des toilettes."
     },
     {
      "type": "ordre",
      "phrase": "Le chauffage ne marche pas depuis hier.",
      "expl": "Qui ? le chauffage. Fait quoi ? ne marche pas. Depuis quand ? depuis hier."
     },
     {
      "type": "ordre",
      "phrase": "J'ai perdu la clé de la maison.",
      "expl": "J'ai perdu + quoi ? la clé + de quoi ? de la maison."
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
    "regle": "En France, on prend le petit-déjeuner le matin, on **déjeune** à midi et on **dîne** le soir. Le nom du repas donne le verbe : le déjeuner → déjeuner, le dîner → dîner.",
    "astuce": "On dit « mettre la table » pour poser les assiettes, les verres et les couverts avant le repas.",
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
      "expl": "Le matin, c'est le petit-déjeuner. Le dîner, c'est le soir."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je coupe le pain avec un couteau.",
      "faux": "Je coupe le pain avec un verre.",
      "expl": "Le couteau sert à couper. Le verre sert à boire."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je mange la soupe avec une cuillère.",
      "faux": "Je mange la soupe avec une fourchette.",
      "expl": "La soupe est liquide : avec une fourchette, elle tomberait. On prend une cuillère."
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
      "expl": "Les yaourts doivent rester au froid, donc dans le frigo. Le four, lui, chauffe."
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
      "expl": "Les œufs cuisent dans la poêle. L'assiette et le verre servent à manger et à boire."
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
      "expl": "Le repas du soir s'appelle le dîner, et le verbe est dîner : nous dînons."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants prennent le goûter après l'école.",
      "expl": "Qui ? les enfants. Fait quoi ? prennent le goûter. Quand ? après l'école."
     },
     {
      "type": "ordre",
      "phrase": "Je mets la table pour le dîner.",
      "expl": "Mettre la table + pour quel repas ? pour le dîner."
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
    "regle": "Pour dire où on a mal, on dit **j'ai mal à la** (mot féminin), **au** (mot masculin) ou **aux** (pluriel).",
    "astuce": "On dit « **avoir** de la fièvre », pas « être » : il a de la fièvre.",
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
      "expl": "On ne dit jamais « à le » : à + le devient « au ». Le ventre → au ventre."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle a mal aux dents.",
      "faux": "Elle a mal à les dents.",
      "expl": "On ne dit jamais « à les » : à + les devient « aux ». Les dents → aux dents."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils a de la fièvre.",
      "faux": "Mon fils est de la fièvre.",
      "expl": "La fièvre est quelque chose qu'on a, comme on a faim ou froid : il a de la fièvre."
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
      "expl": "Tête est féminin (la tête), donc on garde « à la »."
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
      "expl": "L'ordonnance est la feuille écrite par le médecin : on la donne à la pharmacie pour avoir les médicaments."
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
      "expl": "Quand on tousse, c'est souvent la gorge qui fait mal. La gorge est féminin, donc « à la gorge »."
     },
     {
      "type": "ordre",
      "phrase": "J'ai mal au dos depuis trois jours.",
      "expl": "J'ai mal + au dos (où ?) + depuis trois jours (depuis quand ?)."
     },
     {
      "type": "ordre",
      "phrase": "Le médecin m'a donné une ordonnance.",
      "expl": "Qui ? le médecin. Fait quoi ? m'a donné. Quoi ? une ordonnance."
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
    "regle": "Trois verbes à bien distinguer. **Mettre** : je l'enfile. **Porter** : je l'ai sur moi. **Enlever** : je le retire.",
    "astuce": "Pour un vêtement, on demande la **taille**. Pour une chaussure, on demande la **pointure**.",
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
      "expl": "Quand il fait froid, on met un vêtement chaud. Enlever, c'est le retirer."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Vous avez ces chaussures en pointure 42 ?",
      "faux": "Vous avez ces chaussures en taille 42 ?",
      "expl": "Pour les chaussures, on dit la pointure. La taille, c'est pour les vêtements."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je porte des chaussettes dans mes chaussures.",
      "faux": "Je porte des chaussures dans mes chaussettes.",
      "expl": "Les chaussettes vont sur les pieds, puis les chaussures par-dessus."
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
      "expl": "L'écharpe se met autour du cou. Écharpe est féminin : une écharpe, et l'écharpe (la devient l' devant une voyelle)."
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
      "expl": "On retire ses chaussures en rentrant : j'enlève. « J' » remplace « je » devant la voyelle e."
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
      "expl": "Le bonnet se porte sur la tête. La chemise couvre le haut du corps, les chaussettes les pieds."
     },
     {
      "type": "ordre",
      "phrase": "Je cherche une veste pour l'hiver.",
      "expl": "Je cherche + quoi ? une veste + pour quand ? pour l'hiver."
     },
     {
      "type": "ordre",
      "phrase": "Mets ton bonnet, il fait froid.",
      "expl": "Mets ton bonnet (l'ordre) + la raison après la virgule (il fait froid)."
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
    "regle": "On **prend** un transport (je prends le bus, le métro, le train). Pour dire comment on se déplace : **à** pied, **à** vélo, **en** bus, **en** voiture.",
    "astuce": "Dans le bus et le tram, il faut **valider** son ticket : le passer dans la machine.",
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
      "expl": "On est dedans le bus, donc « en bus »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils va à l'école à pied.",
      "faux": "Mon fils va à l'école en pied.",
      "expl": "On marche sur ses pieds, on est dessus, donc « à pied »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je traverse au passage piéton.",
      "faux": "Je traverse au trottoir.",
      "expl": "On traverse la rue sur le passage piéton, les bandes blanches. Le trottoir est le bord de la rue."
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
      "expl": "Le pain s'achète à la boulangerie. La poste sert pour le courrier."
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
      "expl": "Vert, on peut passer. Rouge, on attend."
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
      "expl": "Pour un transport, le verbe est « prendre » : je prends le métro. On peut dire aussi « je monte dans le métro », avec « dans »."
     },
     {
      "type": "ordre",
      "phrase": "Le bus s'arrête devant la pharmacie.",
      "expl": "Qui ? le bus. Fait quoi ? s'arrête. Où ? devant la pharmacie."
     },
     {
      "type": "ordre",
      "phrase": "Je vais à la gare à vélo.",
      "expl": "Je vais + où ? à la gare + comment ? à vélo (on est dessus)."
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
    "regle": "On **remplit** un formulaire, on **signe** un papier (la signature est le nom, signer est le verbe), on **apporte** un justificatif.",
    "astuce": "Avant un rendez-vous à la mairie, on demande toujours « Quels papiers je dois apporter ? ».",
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
      "expl": "La récréation est la pause pour jouer dans la cour. La cantine, c'est pour manger."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je signe en bas de la page.",
      "faux": "Je signature en bas de la page.",
      "expl": "« Signature » est un nom (la signature). Pour l'action, on utilise le verbe : je signe."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Une facture d'électricité est un justificatif de domicile.",
      "faux": "Une facture d'électricité est une pièce d'identité.",
      "expl": "Une facture porte votre adresse : elle prouve où vous habitez. La pièce d'identité prouve qui vous êtes."
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
      "expl": "Le travail à faire à la maison s'appelle les devoirs. Le mot est au pluriel : ses devoirs."
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
      "expl": "Le cahier de liaison sert aux messages entre l'école et les parents."
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
      "expl": "Les papiers d'identité se demandent à la mairie (souvent sur rendez-vous)."
     },
     {
      "type": "ordre",
      "phrase": "Il faut remplir ce formulaire avant lundi.",
      "expl": "Il faut + remplir (le verbe à l'infinitif) + ce formulaire + avant lundi (quand ?)."
     },
     {
      "type": "ordre",
      "phrase": "La réunion des parents est jeudi soir.",
      "expl": "Quoi ? la réunion des parents. Quand ? jeudi soir."
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
    "regle": "Le **devis** vient avant la réparation (le client accepte le prix), la **facture** vient après (le client paie).",
    "astuce": "On dit « faire le plein » pour remplir le réservoir, et « la voiture ne démarre pas » quand le moteur ne se lance pas.",
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
      "expl": "Devis = d'abord : on donne le prix avant de travailler. La facture vient à la fin."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La voiture ne démarre pas, la batterie est vide.",
      "faux": "La voiture ne démarre pas, le rétroviseur est vide.",
      "expl": "Sans batterie, il n'y a pas d'électricité pour démarrer. Le rétroviseur est le petit miroir."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "La nuit, j'allume les phares.",
      "faux": "La nuit, j'allume les freins.",
      "expl": "Les phares éclairent la route la nuit. Les freins servent à s'arrêter."
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
      "expl": "Le volant dirige la voiture. Le moteur la fait avancer."
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
      "expl": "Facture = fin : on la donne quand le travail est fini."
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
      "expl": "On fait le plein de carburant : d'essence ou de gazole. « De » devient « d' » devant une voyelle."
     },
     {
      "type": "ordre",
      "phrase": "Les freins font du bruit depuis hier.",
      "expl": "Qui ? les freins. Fait quoi ? font du bruit. Depuis quand ? depuis hier."
     },
     {
      "type": "ordre",
      "phrase": "Je vous envoie le devis par SMS.",
      "expl": "Je vous envoie (à qui ? vous) + quoi ? le devis + comment ? par SMS."
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
    "regle": "En France, après 69, on compte avec 60 et avec des paquets de 20 : 70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix. Pour l'heure, on peut dire 14 h 30 (« quatorze heures trente ») ou « deux heures et demie ».",
    "astuce": "On paie **par** carte, mais **en** espèces.",
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
      "expl": "72 = 60 + 12, donc soixante-douze. Soixante-deux, c'est 62."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "9 h 15 = neuf heures et quart",
      "faux": "9 h 15 = neuf heures et demie",
      "expl": "15 minutes = un quart d'heure, donc « et quart ». « Et demie », c'est 30 minutes."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je paie par carte.",
      "faux": "Je paie en carte.",
      "expl": "Avec la carte, on dit « par carte ». Avec les billets et les pièces, on dit « en espèces »."
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
      "expl": "80 = 4 × 20 : quatre-vingts, avec un s car aucun nombre ne suit."
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
      "expl": "12 heures dans la journée = midi. Minuit, c'est le milieu de la nuit."
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
      "expl": "10 h 45, c'est 15 minutes avant 11 heures : onze heures moins le quart."
     },
     {
      "type": "ordre",
      "phrase": "Le rendez-vous est à dix heures et demie.",
      "expl": "Le rendez-vous + est + à quelle heure ? à dix heures et demie."
     },
     {
      "type": "ordre",
      "phrase": "Ça fait quatre-vingt-dix euros.",
      "expl": "90 = 4 × 20 + 10 : quatre-vingt-dix, sans s car « dix » suit."
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
    "regle": "La plupart des verbes finissent par **-er** (parler, manger, travailler). Au présent, on enlève -er et on ajoute : je parl**e**, tu parl**es**, il parl**e**, nous parl**ons**, vous parl**ez**, ils parl**ent**.",
    "astuce": "Avec nous, les verbes en -ger gardent un e : nous mang**e**ons. Et devant une voyelle, je devient j' : j'habite, j'aime.",
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
      "expl": "Avec nous, la terminaison est toujours -ons : nous parlons. -ez va avec vous."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils travaillent le samedi.",
      "faux": "Ils travaillont le samedi.",
      "expl": "Avec ils ou elles, on ajoute -ent (qu'on n'entend pas) : ils travaillent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Tu habites ici ?",
      "faux": "Tu habite ici ?",
      "expl": "Avec tu, on ajoute toujours un -s : tu habites. Il ne s'entend pas, mais il s'écrit."
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
      "expl": "Avec vous, la terminaison est -ez : vous commencez."
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
      "expl": "Elle = il : la terminaison est -e, comme avec je. Elle prépare."
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
      "expl": "Les enfants = ils : jouer devient ils jouent."
     },
     {
      "type": "ordre",
      "phrase": "Nous habitons à Lyon depuis trois ans.",
      "expl": "Nous + habitons (-ons) + à Lyon (où ?) + depuis trois ans (depuis quand ?)."
     },
     {
      "type": "ordre",
      "phrase": "Ils travaillent tous les jours.",
      "expl": "Ils + travaillent (-ent) + tous les jours (quand ?)."
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
    "regle": "Ce sont les 4 verbes les plus utilisés. Ils ne suivent pas la règle des -er : il faut les apprendre par cœur.",
    "astuce": "En français, on **a** son âge, on **a** faim, on **a** froid : j'ai trente ans, j'ai faim. Et on **est** malade, fatigué, en retard.",
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
      "expl": "L'âge se dit avec avoir : j'ai trente ans."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Vous faites quoi ce soir ?",
      "faux": "Vous faisez quoi ce soir ?",
      "expl": "Faire est irrégulier : vous faites (comme vous êtes, vous dites). Faisez n'existe pas."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils vont au marché.",
      "faux": "Ils allent au marché.",
      "expl": "Aller est irrégulier : ils vont. Ils s-ont, ils ont, ils v-ont, ils f-ont."
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
      "expl": "Être avec nous : nous sommes."
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
      "expl": "La faim se dit avec avoir : elle a faim. « A » sans accent, car c'est le verbe avoir (elle avait faim)."
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
      "expl": "Aller avec je : je vais."
     },
     {
      "type": "ordre",
      "phrase": "Nous avons rendez-vous à dix heures.",
      "expl": "Avoir rendez-vous : nous avons + rendez-vous + à dix heures."
     },
     {
      "type": "ordre",
      "phrase": "Ils font les courses le samedi.",
      "expl": "Faire les courses : ils font + les courses + le samedi."
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
    "regle": "**Pouvoir** = être capable ou avoir le droit, **vouloir** = avoir envie, **devoir** = être obligé, **savoir** = connaître. Après ces 4 verbes, le deuxième verbe reste à la forme du dictionnaire (l'infinitif) : je dois **partir**.",
    "astuce": "Avec tu, c'est comme avec je : tu peux, tu veux, tu dois, tu sais.",
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
      "expl": "Après « dois », le verbe reste à l'infinitif : partir."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il peut venir demain.",
      "faux": "Il peux venir demain.",
      "expl": "Avec il, c'est « peut » avec un t. Le x est pour je et tu."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils prennent le métro.",
      "faux": "Ils prendent le métro.",
      "expl": "Prendre est irrégulier : ils prennent, avec deux n."
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
      "expl": "Avec vous : vous voulez (-ez)."
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
      "expl": "Avec je : je sais (avec un s). Savoir + infinitif = être capable : je ne sais pas nager."
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
      "expl": "Avec nous : nous venons (-ons)."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que je peux payer par carte ?",
      "expl": "Est-ce que + je peux + payer (infinitif) + par carte."
     },
     {
      "type": "ordre",
      "phrase": "Ils doivent apporter leurs papiers.",
      "expl": "Ils doivent (obligation) + apporter (infinitif) + leurs papiers."
     }
    ]
   },
   {
    "id": "verbes-4",
    "titre": "Le passé composé avec avoir",
    "mots": [],
    "tableau": null,
    "regle": "Pour une action terminée, on utilise **avoir au présent + le participe passé**. Les verbes en -er font **-é** : manger → j'ai mangé. Les autres sont à apprendre : finir → fini, prendre → pris, faire → fait, voir → vu, avoir → eu, être → été.",
    "astuce": "Pour dire non, le sandwich entoure le petit verbe : je **n'**ai **pas** mangé.",
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
      "expl": "Après « ai », il faut le participe passé (fini), pas l'infinitif (finir)."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle a pris le bus.",
      "faux": "Elle a prendu le bus.",
      "expl": "Le participe de prendre est « pris ». Prendu n'existe pas."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous avons mangé.",
      "faux": "Nous avons manger.",
      "expl": "Après « avons », on met le participe : mangé, avec un é. Astuce : on peut dire « nous avons vendu », donc c'est -é."
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
      "expl": "Téléphoner se conjugue avec avoir : il a téléphoné."
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
      "expl": "Après « avez », le participe : fermé."
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
      "expl": "Le participe de faire est « fait »."
     },
     {
      "type": "ordre",
      "phrase": "J'ai réparé la voiture ce matin.",
      "expl": "J'ai réparé (les deux morceaux) + la voiture + ce matin."
     },
     {
      "type": "ordre",
      "phrase": "Nous avons vu le médecin hier.",
      "expl": "Nous avons vu (avoir + participe de voir) + le médecin + hier."
     }
    ]
   },
   {
    "id": "verbes-5",
    "titre": "Le passé composé avec être",
    "mots": [],
    "tableau": null,
    "regle": "Une quinzaine de verbes de **mouvement** utilisent **être** au lieu d'avoir : aller, venir, arriver, partir, entrer, sortir, monter, descendre, naître, mourir, rester, tomber, retourner, revenir, devenir. Les verbes en « se » aussi : il s'est levé.",
    "astuce": "Avec être, le participe s'accorde comme un adjectif : il est parti, elle est parti**e**, ils sont parti**s**, elles sont parti**es**.",
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
      "expl": "Partir est un verbe de mouvement : avec être. Elle est partie, avec un -e car c'est une femme."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous sommes arrivés hier.",
      "faux": "Nous avons arrivés hier.",
      "expl": "Arriver se conjugue avec être : nous sommes arrivés, avec un -s car nous sommes plusieurs."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils sont restés à la maison.",
      "faux": "Ils sont resté à la maison.",
      "expl": "Avec être, on accorde : ils sont plusieurs, donc resté**s**."
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
      "expl": "Tomber se conjugue avec être : il est tombé."
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
      "expl": "Aller avec être, et elle est une femme : allée, avec -e."
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
      "expl": "Naître se conjugue avec être : je suis né (je suis née pour une femme)."
     },
     {
      "type": "ordre",
      "phrase": "Elle est arrivée en France en 2015.",
      "expl": "Elle est arrivée (être + participe accordé) + où ? en France + quand ? en 2015."
     },
     {
      "type": "ordre",
      "phrase": "Nous sommes allés au marché.",
      "expl": "Nous sommes allés (être + -s) + où ? au marché."
     }
    ]
   },
   {
    "id": "verbes-6",
    "titre": "Le futur proche",
    "mots": [],
    "tableau": null,
    "regle": "Pour ce qui va arriver, on utilise **aller au présent + l'infinitif** : je vais manger, nous allons partir.",
    "astuce": "Il existe un autre futur (je mangerai), mais à l'oral, le futur proche suffit presque toujours.",
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
      "expl": "Après « vais », le deuxième verbe reste à l'infinitif : téléphoner."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils vont arriver demain.",
      "faux": "Ils allent arriver demain.",
      "expl": "Aller avec ils : ils vont. Allent n'existe pas."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle va être en retard.",
      "faux": "Elle va est en retard.",
      "expl": "Après « va », on garde l'infinitif : être."
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
      "expl": "Aller avec nous : nous allons."
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
      "expl": "Après « vas », l'infinitif : prendre."
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
      "expl": "La réunion = elle : elle va."
     },
     {
      "type": "ordre",
      "phrase": "Je vais préparer le dîner.",
      "expl": "Je vais (aller) + préparer (infinitif) + le dîner."
     },
     {
      "type": "ordre",
      "phrase": "Votre voiture va être prête demain.",
      "expl": "Votre voiture + va être (futur proche) + prête + demain."
     }
    ]
   },
   {
    "id": "verbes-7",
    "titre": "L'imparfait",
    "mots": [],
    "tableau": null,
    "regle": "L'imparfait sert à **décrire le passé** ou à parler d'une **habitude** d'avant. On prend le verbe avec nous (nous parl-ons), on enlève -ons et on ajoute : -ais, -ais, -ait, -ions, -iez, -aient. Seule exception : être → j'étais.",
    "astuce": "Les terminaisons sont les mêmes pour **tous** les verbes : je parlais, je faisais, j'avais, j'allais.",
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
      "expl": "« Avant » indique une habitude : imparfait, je travaillais (-ais)."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il faisait beau.",
      "faux": "Il faisé beau.",
      "expl": "On décrit le temps qu'il faisait : imparfait de faire, il faisait."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous habitions à Paris.",
      "faux": "Nous habitaient à Paris.",
      "expl": "Avec nous, la terminaison est -ions : nous habitions. -aient va avec ils."
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
      "expl": "Être à l'imparfait avec je : j'étais."
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
      "expl": "Les enfants = ils : -aient. Ils dormaient."
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
      "expl": "Une habitude d'avant, avec il : -ait. Il fumait."
     },
     {
      "type": "ordre",
      "phrase": "Quand il était jeune, il jouait au football.",
      "expl": "Quand il était jeune (le décor) + il jouait au football (l'habitude)."
     },
     {
      "type": "ordre",
      "phrase": "Il faisait froid ce matin.",
      "expl": "Il faisait froid (description) + ce matin (quand ?)."
     }
    ]
   },
   {
    "id": "verbes-8",
    "titre": "Choisir le bon temps",
    "mots": [],
    "tableau": null,
    "regle": "Chaque moment a son temps.\n\n- **Maintenant** : le présent. Je travaille.\n- **Hier, une action finie** : le passé composé. J'ai appelé.\n- **Avant, une habitude ou un décor** : l'imparfait. J'habitais, il pleuvait.\n- **Demain** : le futur proche. Je vais signer.\n\nDans une même phrase, on mélange souvent les deux passés : **Il pleuvait** (le décor) **quand je suis sorti** (l'action).",
    "astuce": "Les mots du temps aident à choisir. Hier, la semaine dernière → passé composé. Avant, autrefois, tous les jours → imparfait. Demain, bientôt → futur proche.",
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
      "expl": "« Hier » + une action finie : passé composé, j'ai vu."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Demain, nous allons partir.",
      "faux": "Demain, nous sommes partis.",
      "expl": "« Demain » : futur proche, nous allons partir."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il dormait quand le téléphone a sonné.",
      "faux": "Il a dormi quand le téléphone sonnait.",
      "expl": "Dormir est le décor (imparfait), la sonnerie est l'action qui arrive (passé composé)."
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
      "expl": "« Hier » + une action finie : passé composé. Aller se conjugue avec être : je suis allé."
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
      "expl": "« Avant » + une habitude qui a duré : imparfait, nous habitions."
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
      "expl": "« Demain » : futur proche, je vais + téléphoner."
     },
     {
      "type": "ordre",
      "phrase": "Hier soir, nous avons regardé un film.",
      "expl": "Hier soir (quand ?) + nous avons regardé (passé composé) + un film."
     },
     {
      "type": "ordre",
      "phrase": "Demain, je vais aller à la mairie.",
      "expl": "Demain (quand ?) + je vais aller (futur proche) + à la mairie."
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
    "regle": "Devant un nom précis, on met **le** (masculin), **la** (féminin), **les** (pluriel). Devant une voyelle ou un h muet, le et la deviennent **l'** : l'école, l'hôpital.",
    "astuce": "Avec l', on n'entend plus si le mot est masculin ou féminin. Apprenez-le avec un ou une : **une** école, **un** hôpital.",
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
      "expl": "École commence par une voyelle : la devient l'."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "les clés",
      "faux": "le clés",
      "expl": "Clés est au pluriel (avec un s) : les."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "l'hôpital",
      "faux": "le hôpital",
      "expl": "Le h d'hôpital ne se prononce pas : le devient l'."
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
      "expl": "Pharmacie est féminin et commence par une consonne : la."
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
      "expl": "Hiver commence par un h muet : l'hiver."
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
      "expl": "Plusieurs enfants : les."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants sont à l'école.",
      "expl": "Les enfants (pluriel) + sont + à l'école (où ?)."
     },
     {
      "type": "ordre",
      "phrase": "La voiture est au garage.",
      "expl": "La voiture (féminin) + est + au garage (à + le = au)."
     }
    ]
   },
   {
    "id": "genre-2",
    "titre": "Un, une, des",
    "mots": [],
    "tableau": null,
    "regle": "Pour une chose dont on parle pour la première fois, ou qui n'est pas précise, on met **un** (masculin), **une** (féminin), **des** (pluriel). Avec ne… pas, ils deviennent **de** : je n'ai pas **de** voiture.",
    "astuce": "J'ai **une** voiture (je la présente). **La** voiture est rouge (on sait laquelle).",
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
      "expl": "On présente la voiture avec une, puis on en reparle avec la."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je n'ai pas de voiture.",
      "faux": "Je n'ai pas une voiture.",
      "expl": "Après ne… pas, un et une deviennent de : pas de voiture."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il y a des pommes.",
      "faux": "Il y a un pommes.",
      "expl": "Pommes est au pluriel : des pommes."
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
      "expl": "Boulangerie est féminin, et on ne sait pas laquelle : une boulangerie."
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
      "expl": "Plusieurs enfants, pas précis : des enfants."
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
      "expl": "Garçon est masculin : un garçon."
     },
     {
      "type": "ordre",
      "phrase": "J'ai un rendez-vous demain.",
      "expl": "J'ai + un rendez-vous (première fois qu'on en parle) + demain."
     },
     {
      "type": "ordre",
      "phrase": "Il y a des enfants dans le parc.",
      "expl": "Il y a + des enfants (plusieurs) + dans le parc (où ?)."
     }
    ]
   },
   {
    "id": "genre-3",
    "titre": "Le féminin des noms",
    "mots": [],
    "tableau": null,
    "regle": "Souvent, on ajoute **-e** : un ami → une ami**e**, un voisin → une voisin**e**. D'autres changent la fin : -eur → **-euse** (vendeur, vendeuse), -teur → **-trice** (directeur, directrice), -ien → **-ienne** (pharmacien, pharmacienne), -er → **-ère** (boulanger, boulangère).",
    "astuce": "Certains mots changent complètement : un homme / une femme, un père / une mère, un garçon / une fille. D'autres ne changent pas : un ou une élève, un ou une secrétaire.",
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
      "expl": "On ajoute -e : une amie. Le son ne change pas, mais l'écriture oui."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une vendeuse",
      "faux": "une vendeure",
      "expl": "-eur devient -euse : vendeur, vendeuse."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "la directrice",
      "faux": "la directeuse",
      "expl": "-teur devient -trice : directeur, directrice."
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
      "expl": "-er devient -ère : boulanger, boulangère. La boulangerie est le magasin."
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
      "expl": "-ien devient -ienne, avec deux n : Algérienne."
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
      "expl": "-ier devient -ière : cuisinier, cuisinière."
     },
     {
      "type": "ordre",
      "phrase": "Ma voisine travaille à la pharmacie.",
      "expl": "Ma voisine (féminin) + travaille + à la pharmacie."
     },
     {
      "type": "ordre",
      "phrase": "La directrice veut nous voir.",
      "expl": "La directrice + veut + nous voir."
     }
    ]
   },
   {
    "id": "genre-4",
    "titre": "Le pluriel des noms",
    "mots": [],
    "tableau": null,
    "regle": "En général, on ajoute **-s** : une maison → des maison**s**. Les mots en -eau et -eu prennent **-x** : un gâteau → des gâteau**x**. Les mots en -al deviennent **-aux** : un journal → des journ**aux**. Les mots qui finissent déjà par -s, -x ou -z ne changent pas : un bras → des bras.",
    "astuce": "Le s du pluriel ne s'entend pas. C'est le petit mot devant (les, des) qui dit à l'oreille que c'est pluriel.",
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
      "expl": "Les mots en -eau prennent un x : des gâteaux."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "des journaux",
      "faux": "des journals",
      "expl": "Les mots en -al deviennent -aux : des journaux."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "les prix",
      "faux": "les prixs",
      "expl": "Prix finit déjà par x : il ne change pas."
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
      "expl": "Cheval finit par -al : des chevaux."
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
      "expl": "Genou fait partie des 7 mots en -ou qui prennent un x."
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
      "expl": "Cas général : on ajoute un s."
     },
     {
      "type": "ordre",
      "phrase": "Les gâteaux sont dans le four.",
      "expl": "Les gâteaux (pluriel en x) + sont + dans le four."
     },
     {
      "type": "ordre",
      "phrase": "J'ai mal aux genoux.",
      "expl": "J'ai mal + aux (à + les) + genoux (x)."
     }
    ]
   },
   {
    "id": "genre-5",
    "titre": "Accorder les adjectifs",
    "mots": [],
    "tableau": null,
    "regle": "L'adjectif (le mot qui décrit) prend la même forme que le nom : **-e** au féminin, **-s** au pluriel. Un petit garçon, une petit**e** fille, des petit**s** garçons, des petit**es** filles.",
    "astuce": "Les adjectifs qui finissent déjà par -e ne changent pas au féminin (rouge, facile, malade). Quelques-uns changent beaucoup : beau / belle, nouveau / nouvelle, vieux / vieille, blanc / blanche, gentil / gentille.",
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
      "expl": "Elle = féminin, donc fatigué + e."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une grande maison",
      "faux": "une maison grande",
      "expl": "Grand fait partie des petits adjectifs qui se mettent devant le nom."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "des chaussures noires",
      "faux": "des chaussures noir",
      "expl": "Chaussures est féminin pluriel : noir + e + s = noires."
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
      "expl": "Gentil au féminin double le l : gentille."
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
      "expl": "Pommes est féminin pluriel : vert + e + s = vertes."
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
      "expl": "Voiture est féminin : nouveau devient nouvelle."
     },
     {
      "type": "ordre",
      "phrase": "Mon fils a une petite chambre.",
      "expl": "Une petite (féminin, devant le nom) + chambre."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants sont très contents.",
      "expl": "Les enfants (pluriel) + sont + contents (avec s)."
     }
    ]
   },
   {
    "id": "genre-6",
    "titre": "Du, de la, au, aux",
    "mots": [],
    "tableau": null,
    "regle": "Pour une partie ou une quantité qu'on ne compte pas, on dit **du** (masculin), **de la** (féminin), **de l'** (devant une voyelle), **des** (pluriel) : du pain, de la soupe, de l'eau. Après une quantité ou ne… pas, on dit seulement **de** : un kilo de pommes, pas de lait.",
    "astuce": "« À le » et « de le » n'existent pas. À + le = **au**, à + les = **aux**, de + le = **du**, de + les = **des**. Je vais au marché, je viens du marché.",
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
      "expl": "De + le devient du : du pain."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je n'ai pas de lait.",
      "faux": "Je n'ai pas du lait.",
      "expl": "Après ne… pas, on dit seulement de : pas de lait."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je viens du marché.",
      "faux": "Je viens de le marché.",
      "expl": "De + le devient du : je viens du marché."
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
      "expl": "Eau commence par une voyelle : de l'eau."
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
      "expl": "Après une quantité (un kilo), on dit seulement de."
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
      "expl": "À + les devient aux : je parle aux voisins."
     },
     {
      "type": "ordre",
      "phrase": "Je prends du café avec du lait.",
      "expl": "Je prends + du café (une partie) + avec du lait."
     },
     {
      "type": "ordre",
      "phrase": "Nous allons au parc avec les enfants.",
      "expl": "Nous allons + au parc (à + le) + avec les enfants."
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
    "regle": "**A** est le verbe avoir (il a faim). **à** indique un lieu ou un moment (à Lyon, à midi). **est** est le verbe être (il est malade). **et** relie deux choses (du pain et du lait).",
    "astuce": "Remplacez par le passé. Si on peut dire « avait », on écrit **a**. Si on peut dire « était », on écrit **est**.",
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
      "expl": "On peut dire « il avait un chien » : c'est le verbe avoir, a sans accent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle est contente.",
      "faux": "Elle et contente.",
      "expl": "On peut dire « elle était contente » : c'est le verbe être, est."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je vais à Lyon.",
      "faux": "Je vais a Lyon.",
      "expl": "Lyon est un lieu : à avec accent. On ne peut pas dire « je vais avait Lyon »."
     },
     {
      "type": "completer",
      "phrase": "Mon fils ___ huit ans.",
      "reponse": "a",
      "choix": [
       "a",
       "à"
      ],
      "expl": "Mon fils avait huit ans : c'est avoir, a."
     },
     {
      "type": "completer",
      "phrase": "Il ___ en retard.",
      "reponse": "est",
      "choix": [
       "est",
       "et"
      ],
      "expl": "Il était en retard : c'est être, est."
     },
     {
      "type": "completer",
      "phrase": "Du thé ___ du café.",
      "reponse": "et",
      "choix": [
       "et",
       "est"
      ],
      "expl": "Du thé et puis du café : on relie deux choses, et."
     },
     {
      "type": "ordre",
      "phrase": "Il a rendez-vous à midi.",
      "expl": "Il a (avait) rendez-vous + à (moment) midi."
     },
     {
      "type": "ordre",
      "phrase": "Elle est malade et fatiguée.",
      "expl": "Elle est (était) malade + et (et puis) fatiguée."
     }
    ]
   },
   {
    "id": "homophones-2",
    "titre": "son / sont, on / ont",
    "mots": [],
    "tableau": null,
    "regle": "**Sont** est le verbe être avec ils (ils sont partis). **son** dit à qui est la chose (son fils = le fils de lui ou d'elle). **ont** est le verbe avoir avec ils (ils ont fini). **on** veut dire « nous » ou « quelqu'un » (on mange à midi).",
    "astuce": "Si on peut dire « étaient », c'est **sont**. Si on peut dire « avaient », c'est **ont**. Si on peut dire « mon », c'est **son**. Si on peut dire « il », c'est **on**.",
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
      "expl": "Ils étaient fatigués : c'est être, sont."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "On va au marché.",
      "faux": "Ont va au marché.",
      "expl": "Il va au marché : on peut remplacer par il, donc on."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle cherche son sac.",
      "faux": "Elle cherche sont sac.",
      "expl": "Elle cherche mon sac : on peut dire mon, donc son."
     },
     {
      "type": "completer",
      "phrase": "Les enfants ___ à l'école.",
      "reponse": "sont",
      "choix": [
       "sont",
       "son"
      ],
      "expl": "Les enfants étaient à l'école : sont."
     },
     {
      "type": "completer",
      "phrase": "Ils ___ un rendez-vous.",
      "reponse": "ont",
      "choix": [
       "ont",
       "on"
      ],
      "expl": "Ils avaient un rendez-vous : ont."
     },
     {
      "type": "completer",
      "phrase": "___ frère habite à Paris.",
      "reponse": "Son",
      "choix": [
       "Son",
       "Sont"
      ],
      "expl": "Mon frère habite à Paris : son."
     },
     {
      "type": "ordre",
      "phrase": "Ils ont perdu leurs clés.",
      "expl": "Ils ont (avaient) + perdu + leurs clés."
     },
     {
      "type": "ordre",
      "phrase": "On mange avec son frère.",
      "expl": "On (il) mange + avec son (mon) frère."
     }
    ]
   },
   {
    "id": "homophones-3",
    "titre": "ou / où, la / là / l'a",
    "mots": [],
    "tableau": null,
    "regle": "**Où** parle d'un lieu (où est la gare ?). **ou** veut dire « ou bien », pour choisir. **là** parle d'un lieu (il est là). **la** se met devant un nom féminin (la voiture). **l'a** veut dire « l'avait » (il l'a réparée).",
    "astuce": "Si on peut dire « ou bien », c'est **ou** sans accent. Si on peut dire « l'avait », c'est **l'a**.",
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
      "expl": "On demande un lieu : où avec accent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Tu veux du thé ou du café ?",
      "faux": "Tu veux du thé où du café ?",
      "expl": "On choisit, on peut dire « ou bien » : ou sans accent."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Le bus est là.",
      "faux": "Le bus est la.",
      "expl": "On parle de l'endroit : là avec accent."
     },
     {
      "type": "completer",
      "phrase": "La clé ? Il ___ perdue.",
      "reponse": "l'a",
      "choix": [
       "l'a",
       "là"
      ],
      "expl": "Il l'avait perdue : l'a."
     },
     {
      "type": "completer",
      "phrase": "___ est la pharmacie ?",
      "reponse": "Où",
      "choix": [
       "Où",
       "Ou"
      ],
      "expl": "On demande un lieu : où."
     },
     {
      "type": "completer",
      "phrase": "Pose ___ boîte sur la table.",
      "reponse": "la",
      "choix": [
       "la",
       "là"
      ],
      "expl": "Boîte est un nom féminin : la boîte."
     },
     {
      "type": "ordre",
      "phrase": "Où est la boulangerie ?",
      "expl": "Où (lieu) + est + la boulangerie."
     },
     {
      "type": "ordre",
      "phrase": "Je prends le bus ou le tram.",
      "expl": "Le bus ou bien le tram : ou."
     }
    ]
   },
   {
    "id": "homophones-4",
    "titre": "ce / se, ces / ses, c'est / s'est",
    "mots": [],
    "tableau": null,
    "regle": "**Se** va devant un verbe (il se lève). **ce** va devant un nom (ce matin). **ces** montre (ces chaussures-là). **ses** dit à qui sont les choses (ses enfants = les enfants de lui ou d'elle). **c'est** veut dire « cela est ». **s'est** est un verbe en se au passé (il s'est trompé).",
    "astuce": "Si on peut dire « cela est », c'est **c'est**. Si on peut dire « mes », c'est **ses**.",
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
      "expl": "Devant le verbe réveiller : se."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "C'est mon fils.",
      "faux": "S'est mon fils.",
      "expl": "Cela est mon fils : c'est."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle s'est levée tôt.",
      "faux": "Elle c'est levée tôt.",
      "expl": "C'est le verbe se lever au passé : elle s'est levée."
     },
     {
      "type": "completer",
      "phrase": "___ soir, je travaille.",
      "reponse": "Ce",
      "choix": [
       "Ce",
       "Se"
      ],
      "expl": "Devant le nom soir : ce."
     },
     {
      "type": "completer",
      "phrase": "Il range ___ affaires.",
      "reponse": "ses",
      "choix": [
       "ses",
       "ces"
      ],
      "expl": "Il range mes affaires (on peut dire mes) : ses."
     },
     {
      "type": "completer",
      "phrase": "___ combien ?",
      "reponse": "C'est",
      "choix": [
       "C'est",
       "S'est"
      ],
      "expl": "Cela est combien ? : c'est."
     },
     {
      "type": "ordre",
      "phrase": "Ce matin, il s'est levé tôt.",
      "expl": "Ce (devant matin) + il s'est levé (verbe se lever au passé)."
     },
     {
      "type": "ordre",
      "phrase": "C'est la voiture de ses parents.",
      "expl": "C'est (cela est) + la voiture + de ses parents (à lui)."
     }
    ]
   },
   {
    "id": "homophones-5",
    "titre": "mais / mes, peu / peut / peux",
    "mots": [],
    "tableau": null,
    "regle": "**Mes** dit que les choses sont à moi (mes clés). **mais** oppose deux idées. **peux** et **peut** sont le verbe pouvoir (je peux, il peut). **peu** veut dire « pas beaucoup ».",
    "astuce": "Si on peut dire « pouvait », c'est **peut** ou **peux** : peux avec je et tu, peut avec il et elle.",
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
      "expl": "Ce sont les clés à moi : mes."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il peut venir demain.",
      "faux": "Il peu venir demain.",
      "expl": "Il pouvait venir : c'est le verbe pouvoir, avec il, peut."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Je mange un peu.",
      "faux": "Je mange un peut.",
      "expl": "Pas beaucoup : peu."
     },
     {
      "type": "completer",
      "phrase": "C'est cher, ___ c'est bon.",
      "reponse": "mais",
      "choix": [
       "mais",
       "mes"
      ],
      "expl": "Deux idées opposées (cher et bon) : mais."
     },
     {
      "type": "completer",
      "phrase": "Tu ___ m'aider ?",
      "reponse": "peux",
      "choix": [
       "peux",
       "peu"
      ],
      "expl": "Tu pouvais m'aider : verbe pouvoir avec tu, peux."
     },
     {
      "type": "completer",
      "phrase": "___ enfants sont à l'école.",
      "reponse": "Mes",
      "choix": [
       "Mes",
       "Mais"
      ],
      "expl": "Les enfants à moi : mes."
     },
     {
      "type": "ordre",
      "phrase": "Je peux venir, mais un peu en retard.",
      "expl": "Je peux (pouvoir) + venir + mais (opposition) + un peu (pas beaucoup) en retard."
     },
     {
      "type": "ordre",
      "phrase": "Mes parents habitent en Algérie.",
      "expl": "Mes (à moi) parents + habitent + en Algérie."
     }
    ]
   },
   {
    "id": "homophones-6",
    "titre": "-er, -é, -ez",
    "mots": [],
    "tableau": null,
    "regle": "Ces trois fins se disent pareil. **-er** : le verbe à l'infinitif (je vais manger). **-é** : le participe passé, après avoir ou être (j'ai mangé). **-ez** : avec vous (vous mangez).",
    "astuce": "Avec être, le participe s'accorde : elle est arrivé**e**.",
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
      "expl": "Je vais vendre : on peut dire vendre, donc -er."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai réparé la voiture.",
      "faux": "J'ai réparer la voiture.",
      "expl": "J'ai vendu la voiture : on peut dire vendu, donc -é."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Vous parlez français ?",
      "faux": "Vous parlé français ?",
      "expl": "Avec vous : -ez."
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
      "expl": "Il doit vendre : -er."
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
      "expl": "Elle est vendue : -é, plus un -e car c'est une femme avec être."
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
      "expl": "Avec vous : -ez."
     },
     {
      "type": "ordre",
      "phrase": "Je dois réparer la voiture.",
      "expl": "Je dois + réparer (je dois vendre : -er)."
     },
     {
      "type": "ordre",
      "phrase": "Vous avez terminé ?",
      "expl": "Vous avez + terminé (vous avez vendu : -é)."
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
    "regle": "Après **avoir** ou **être**, on écrit le participe en **-é** (j'ai commencé, il est allé). Après **un autre verbe**, ou après **à, de, pour, sans**, on écrit l'infinitif en **-er** (je dois partir, c'est facile à préparer).",
    "astuce": "Dans une même phrase, on peut avoir les deux : j'ai **commencé** à **travailler**.",
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
      "expl": "Après « ai » : commencé (-é). Après « à » : travailler (-er)."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il est allé chercher le pain.",
      "faux": "Il est aller chercher le pain.",
      "expl": "Après « est » : allé (-é). Après le verbe allé : chercher (-er)."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "J'ai oublié de fermer la porte.",
      "faux": "J'ai oublier de fermé la porte.",
      "expl": "Après « ai » : oublié. Après « de » : fermer."
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
      "expl": "Après « à » : l'infinitif, préparer."
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
      "expl": "Après « avons » : le participe, mangé."
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
      "expl": "Après le verbe « faut » : l'infinitif, passer."
     },
     {
      "type": "ordre",
      "phrase": "J'ai essayé de vous appeler.",
      "expl": "J'ai essayé (-é après ai) + de vous appeler (-er après de)."
     },
     {
      "type": "ordre",
      "phrase": "Il est venu pour réparer la voiture.",
      "expl": "Il est venu (participe) + pour réparer (-er après pour) + la voiture."
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
    "regle": "Les verbes en -er font tous -é. Les autres participes sont à apprendre, mais ils se rangent en quelques familles : -i, -u, -is, -it.",
    "astuce": "La dernière lettre muette s'entend au féminin : pris → pris**e**, fait → fait**e**, écrit → écrit**e**.",
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
      "expl": "Le participe de prendre est pris (au féminin : prise)."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il a écrit un SMS.",
      "faux": "Il a écri un SMS.",
      "expl": "Écrit avec un t : on entend le t au féminin, écrite."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous avons attendu.",
      "faux": "Nous avons attendi.",
      "expl": "Attendre fait attendu, avec -u."
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
      "expl": "Mettre fait mis (au féminin : mise)."
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
      "expl": "Lire fait lu, avec -u."
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
      "expl": "Dire fait dit (au féminin : dite)."
     },
     {
      "type": "ordre",
      "phrase": "J'ai mis la lettre dans la boîte.",
      "expl": "J'ai mis (participe de mettre) + la lettre + dans la boîte."
     },
     {
      "type": "ordre",
      "phrase": "Nous avons attendu le bus longtemps.",
      "expl": "Nous avons attendu (participe en -u) + le bus + longtemps."
     }
    ]
   },
   {
    "id": "passe-3",
    "titre": "Avec être, on accorde",
    "mots": [],
    "tableau": null,
    "regle": "Quand le passé composé se fait avec **être**, le participe s'accorde avec la personne, comme un adjectif : **-e** pour une femme, **-s** pour plusieurs, **-es** pour plusieurs femmes.",
    "astuce": "Posez la question « qui ? ». Qui est parti ? Ma fille → partie.",
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
      "expl": "Elle = une femme : rentré + e."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Les enfants sont partis.",
      "faux": "Les enfants sont parti.",
      "expl": "Les enfants = plusieurs : parti + s."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mes sœurs sont venues.",
      "faux": "Mes sœurs sont venus.",
      "expl": "Mes sœurs = plusieurs femmes : venu + es."
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
      "expl": "Ma mère = une femme : arrivée."
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
      "expl": "Deux hommes = plusieurs, masculin : restés."
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
      "expl": "Elles = plusieurs femmes : allées."
     },
     {
      "type": "ordre",
      "phrase": "Ma fille est née au mois de mai.",
      "expl": "Ma fille + est née (accord au féminin) + au mois de mai."
     },
     {
      "type": "ordre",
      "phrase": "Les invités sont arrivés à midi.",
      "expl": "Les invités + sont arrivés (accord au pluriel) + à midi."
     }
    ]
   },
   {
    "id": "passe-4",
    "titre": "Avec avoir, on n'accorde pas",
    "mots": [],
    "tableau": null,
    "regle": "Quand le passé composé se fait avec **avoir**, le participe **ne change pas** selon la personne : elle a mangé, ils ont mangé.",
    "astuce": "Il existe un cas plus difficile, quand la chose est dite avant (la voiture que j'ai réparée). On le verra plus tard, ce n'est pas utile tout de suite.",
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
      "expl": "Avec avoir, pas d'accord, même pour une femme : mangé."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ils ont fini.",
      "faux": "Ils ont finis.",
      "expl": "Avec avoir, pas d'accord, même au pluriel : fini."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Ma fille a dessiné une maison.",
      "faux": "Ma fille a dessinée une maison.",
      "expl": "Avec avoir : dessiné, sans e."
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
      "expl": "Avec avoir : joué, sans s."
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
      "expl": "Avec avoir : préparé, sans e."
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
      "expl": "Avec avoir : pris, qui garde toujours son s."
     },
     {
      "type": "ordre",
      "phrase": "Ma femme a acheté des fruits.",
      "expl": "Ma femme + a acheté (pas d'accord) + des fruits."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants ont fait leurs devoirs.",
      "expl": "Les enfants + ont fait (pas d'accord) + leurs devoirs."
     }
    ]
   },
   {
    "id": "passe-5",
    "titre": "Elle s'est levée (les verbes en se)",
    "mots": [],
    "tableau": null,
    "regle": "Certains verbes ont un « se » devant : se lever, se laver, se réveiller, s'habiller, se coucher, se promener, se tromper. Au présent : je **me** lève, tu **te** lèves, il **se** lève, nous **nous** levons, vous **vous** levez, ils **se** lèvent. Au passé composé, ils prennent **être** et s'accordent : elle s'est levé**e**.",
    "astuce": "Devant une voyelle, me, te, se deviennent m', t', s' : je m'habille, il s'est trompé.",
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
      "expl": "Avec je, se devient me : je me lève."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Elle s'est levée à six heures.",
      "faux": "Elle s'a levée à six heures.",
      "expl": "Les verbes en se prennent être au passé : elle s'est levée, jamais s'a."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous nous sommes promenés.",
      "faux": "Nous se sommes promenés.",
      "expl": "Avec nous, se devient nous : nous nous sommes promenés."
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
      "expl": "Avec tu, se devient te : tu te couches."
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
      "expl": "Avec être, on accorde : les enfants sont plusieurs, lavés."
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
      "expl": "Avec je : je me suis trompé."
     },
     {
      "type": "ordre",
      "phrase": "Les enfants se sont couchés tôt.",
      "expl": "Les enfants + se sont couchés (être + accord) + tôt."
     },
     {
      "type": "ordre",
      "phrase": "Je me réveille à sept heures.",
      "expl": "Je + me réveille (me avec je) + à sept heures."
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
    "regle": "**É** se prononce bouche peu ouverte (école, café). **è** se prononce bouche plus ouverte, souvent devant une consonne suivie d'un e muet (mère, père, après). **ê** se prononce comme è (fête, forêt).",
    "astuce": "À, où et là portent un accent pour les distinguer de a, ou et la (voir le thème 5).",
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
      "expl": "Au début du mot, le son est fermé : école avec é."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "ma mère",
      "faux": "ma mére",
      "expl": "Devant une consonne suivie d'un e muet (-re), on écrit è : mère."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "la fenêtre",
      "faux": "la fenètre",
      "expl": "Fenêtre s'écrit avec ê, comme tête et fête."
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
      "expl": "Devant -re, on écrit è : frère, comme père et mère."
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
      "expl": "Tête s'écrit avec ê (on retrouve le s disparu dans « testa », en latin)."
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
      "expl": "À la fin du mot, le son est fermé : café."
     },
     {
      "type": "ordre",
      "phrase": "Mon père travaille à l'hôpital.",
      "expl": "Mon père (è) + travaille + à l'hôpital (ô)."
     },
     {
      "type": "ordre",
      "phrase": "Nous allons à la fête de l'école.",
      "expl": "Nous allons + à la fête (ê) + de l'école (é)."
     }
    ]
   },
   {
    "id": "orthographe-2",
    "titre": "s, ss, c, ç",
    "mots": [],
    "tableau": null,
    "regle": "Entre deux voyelles, un seul **s** se prononce « z » (maison, rose). Pour entendre « s » entre deux voyelles, on écrit **ss** (poisson, tasse). Le **c** se prononce « s » devant e, i (merci, ceci), mais « k » devant a, o, u. Pour entendre « s » devant a, o, u, on écrit **ç** (garçon, leçon, ça).",
    "astuce": "Poisson (le poisson qu'on mange) et poison (le produit dangereux) ne veulent pas dire la même chose.",
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
      "expl": "Devant o, il faut la cédille pour entendre « s » : garçon."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une tasse de café",
      "faux": "une tase de café",
      "expl": "Entre deux voyelles, il faut ss pour entendre « s ». Avec un seul s, on lirait « taze »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "merci",
      "faux": "merçi",
      "expl": "Devant i, le c fait déjà « s » : pas besoin de cédille."
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
      "expl": "Devant u, il faut ç pour entendre « s » : reçu."
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
      "expl": "Entre deux voyelles, ss pour entendre « s » : boisson."
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
      "expl": "Devant i, le c fait « s » tout seul : cinéma."
     },
     {
      "type": "ordre",
      "phrase": "Le garçon apprend sa leçon.",
      "expl": "Le garçon (ç) + apprend + sa leçon (ç)."
     },
     {
      "type": "ordre",
      "phrase": "Je voudrais une tasse de café.",
      "expl": "Je voudrais + une tasse (ss) + de café."
     }
    ]
   },
   {
    "id": "orthographe-3",
    "titre": "g, ge, gu",
    "mots": [],
    "tableau": null,
    "regle": "Le **g** se prononce « j » devant e, i (rouge, girafe) et « g » dur devant a, o, u (garage, gomme). Pour entendre « g » dur devant e ou i, on écrit **gu** (guitare, langue). Pour entendre « j » devant a ou o, on écrit **ge** (nous mangeons).",
    "astuce": "C'est pour ça que les verbes en -ger gardent un e avec nous : nous mange**o**ns, nous nage**o**ns.",
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
      "expl": "Devant o, il faut ge pour garder le son « j » : mangeons."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une guitare",
      "faux": "une gitare",
      "expl": "Devant i, il faut gu pour entendre « g » dur. Avec gi, on lirait « jitare »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "le garage",
      "faux": "le guarage",
      "expl": "Devant a, le g est déjà dur : pas besoin de u."
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
      "expl": "Devant o, ge pour entendre « j » : nageons."
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
      "expl": "Devant e, gu pour entendre « g » : langues."
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
      "expl": "Devant â, le g est déjà dur : gâteau."
     },
     {
      "type": "ordre",
      "phrase": "Nous mangeons au restaurant.",
      "expl": "Nous mangeons (ge devant o) + au restaurant."
     },
     {
      "type": "ordre",
      "phrase": "Il joue de la guitare.",
      "expl": "Il joue + de la guitare (gu devant i)."
     }
    ]
   },
   {
    "id": "orthographe-4",
    "titre": "m devant b et p",
    "mots": [],
    "tableau": null,
    "regle": "Devant **m**, **b** et **p**, on écrit **m** au lieu de n : important, ensemble, tomber, emmener.",
    "astuce": "Il y a très peu d'exceptions à connaître au quotidien (bonbon, bonbonne).",
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
      "expl": "Devant b : m. Ensemble."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "important",
      "faux": "inportant",
      "expl": "Devant p : m. Important."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "une chambre",
      "faux": "une chanbre",
      "expl": "Devant b : m. Chambre."
     },
     {
      "type": "completer",
      "phrase": "Il est to___bé.",
      "reponse": "m",
      "choix": [
       "m",
       "n"
      ],
      "expl": "Devant b : m. Tombé."
     },
     {
      "type": "completer",
      "phrase": "Une co___versation.",
      "reponse": "n",
      "choix": [
       "n",
       "m"
      ],
      "expl": "Devant v, on garde n : conversation. La règle ne marche que devant m, b, p."
     },
     {
      "type": "completer",
      "phrase": "Il fait le co___pte.",
      "reponse": "m",
      "choix": [
       "m",
       "n"
      ],
      "expl": "Devant p : m. Compte."
     },
     {
      "type": "ordre",
      "phrase": "Nous mangeons ensemble ce soir.",
      "expl": "Nous mangeons + ensemble (m devant b) + ce soir."
     },
     {
      "type": "ordre",
      "phrase": "Il est tombé dans la chambre.",
      "expl": "Il est tombé (m devant b) + dans la chambre (m devant b)."
     }
    ]
   },
   {
    "id": "orthographe-5",
    "titre": "Les lettres qu'on n'entend pas",
    "mots": [],
    "tableau": null,
    "regle": "Beaucoup de mots finissent par une lettre muette : peti**t**, gran**d**, lai**t**, den**t**. Le **h** du début est aussi souvent muet : l'homme, l'hôpital.",
    "astuce": "Au féminin, la lettre muette s'entend : petit → petite, grand → grande.",
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
      "expl": "On trouve le t dans la même famille : enfance, enfantin."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "le lait",
      "faux": "le lai",
      "expl": "On trouve le t dans le laitier, la laiterie."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "un gros chat",
      "faux": "un gro chat",
      "expl": "Au féminin, on entend le s : grosse."
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
      "expl": "La dent → le dentiste : t. Et au pluriel, on ajoute s : dents."
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
      "expl": "Au féminin, on entend le d : grande."
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
      "expl": "On entend le t dans sportif."
     },
     {
      "type": "ordre",
      "phrase": "Le petit garçon boit du lait.",
      "expl": "Le petit (t muet) garçon + boit + du lait (t muet)."
     },
     {
      "type": "ordre",
      "phrase": "Il fait un grand bruit.",
      "expl": "Il fait + un grand (d muet) + bruit (t muet, comme dans bruiter)."
     }
    ]
   },
   {
    "id": "orthographe-6",
    "titre": "Les mots difficiles du quotidien",
    "mots": [],
    "tableau": null,
    "regle": "Certains mots très fréquents ne suivent pas de règle simple : on les apprend par cœur. Aujourd'hui, beaucoup, toujours, longtemps, quelqu'un, peut-être, rendez-vous, s'il vous plaît, d'accord, maintenant.",
    "astuce": "« Peut-être » avec un tiret veut dire « possiblement ». Sans tiret, « peut être » est le verbe pouvoir + être (il peut être en retard).",
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
      "expl": "Aujourd'hui s'écrit avec une apostrophe : au jour d'hui."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "beaucoup",
      "faux": "beaucou",
      "expl": "Beaucoup = beau + coup, avec un p muet."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "d'accord",
      "faux": "dacord",
      "expl": "D'accord s'écrit avec une apostrophe et deux c."
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
      "expl": "Toujours vient de « tous les jours » : il garde le s."
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
      "expl": "Rendez-vous s'écrit avec un tiret."
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
      "expl": "Beaucoup ne prend jamais de s."
     },
     {
      "type": "ordre",
      "phrase": "Je suis d'accord avec vous.",
      "expl": "Je suis + d'accord (apostrophe) + avec vous."
     },
     {
      "type": "ordre",
      "phrase": "Aujourd'hui, il fait beau.",
      "expl": "Aujourd'hui (apostrophe) + il fait beau."
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
    "regle": "Une phrase commence par une **majuscule** et finit par un **point**. On met aussi une majuscule aux prénoms, aux villes et aux pays (Lyon, la France). On n'en met **pas** aux jours, aux mois et aux langues (lundi, janvier, le français).",
    "astuce": "On écrit « il parle français » (la langue, sans majuscule) mais « les Français » (les personnes, avec majuscule).",
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
      "expl": "Majuscule au début de la phrase et à Lyon (une ville), mais pas à lundi (un jour)."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Nous sommes en janvier.",
      "faux": "Nous sommes en Janvier.",
      "expl": "Les mois s'écrivent sans majuscule : janvier."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il parle français.",
      "faux": "Il parle Français.",
      "expl": "La langue s'écrit sans majuscule : français."
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
      "expl": "Un pays prend une majuscule : France."
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
      "expl": "Un jour s'écrit sans majuscule : mardi."
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
      "expl": "C'est le début de la phrase : Mon, avec une majuscule."
     },
     {
      "type": "ordre",
      "phrase": "Ma fille habite à Paris.",
      "expl": "Ma (majuscule au début) fille habite à Paris (majuscule à la ville) + le point final."
     },
     {
      "type": "ordre",
      "phrase": "Le marché ouvre le samedi.",
      "expl": "Le (majuscule au début) marché ouvre le samedi (sans majuscule) + le point final."
     }
    ]
   },
   {
    "id": "ponctuation-2",
    "titre": "La virgule",
    "mots": [],
    "tableau": null,
    "regle": "La virgule marque une petite pause. On la met entre les éléments d'une liste (du pain, du lait et des œufs), après un mot de début de phrase (Hier, il a plu), après le nom de la personne à qui on écrit (Bonjour Madame,), et avant mais ou donc.",
    "astuce": "Dans une liste, on ne met **pas** de virgule avant le dernier « et ».",
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
      "expl": "Une virgule entre les éléments, pas de virgule avant le dernier « et »."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Hier, je suis allé au marché.",
      "faux": "Hier je, suis allé au marché.",
      "expl": "La pause se fait après « Hier », le mot du début."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "C'est loin, mais j'y vais.",
      "faux": "C'est loin mais, j'y vais.",
      "expl": "La virgule se met avant « mais », pas après."
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
      "expl": "Après le nom de la personne à qui on écrit : une virgule."
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
      "expl": "Après le mot du début de phrase : une virgule."
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
      "expl": "Entre les éléments d'une liste : une virgule."
     },
     {
      "type": "ordre",
      "phrase": "Ce matin, il fait froid.",
      "expl": "Ce matin (le début) + virgule + il fait froid."
     },
     {
      "type": "ordre",
      "phrase": "Il est fatigué, mais il travaille.",
      "expl": "Il est fatigué + virgule avant mais + il travaille."
     }
    ]
   },
   {
    "id": "ponctuation-3",
    "titre": "Les signes ? et !",
    "mots": [],
    "tableau": null,
    "regle": "Le **point d'interrogation (?)** termine une question. Le **point d'exclamation (!)** montre une émotion, une surprise ou un ordre. En français, on met **un espace avant** ? ! : et ;.",
    "astuce": "Sur le téléphone, le correcteur ajoute souvent cet espace tout seul. Sinon, tapez espace puis le signe.",
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
      "expl": "C'est une question : point d'interrogation."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Attention, c'est chaud !",
      "faux": "Attention, c'est chaud ?",
      "expl": "C'est un avertissement, une émotion : point d'exclamation."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Combien ça coûte ?",
      "faux": "Combien ça coûte !",
      "expl": "On demande un prix, c'est une question : point d'interrogation."
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
      "expl": "On montre sa joie : point d'exclamation."
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
      "expl": "On pose une question : point d'interrogation."
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
      "expl": "C'est une information simple : un point."
     },
     {
      "type": "ordre",
      "phrase": "Est-ce que vous parlez anglais ?",
      "expl": "Est-ce que (la question) + vous parlez anglais + espace + ?"
     },
     {
      "type": "ordre",
      "phrase": "Bravo, c'est parfait !",
      "expl": "Bravo (une émotion) + virgule + c'est parfait + espace + !"
     }
    ]
   },
   {
    "id": "ponctuation-4",
    "titre": "L'apostrophe (l', j', n')",
    "mots": [],
    "tableau": null,
    "regle": "Devant une voyelle ou un h muet, les petits mots **le, la, je, me, te, se, de, ne, que** perdent leur voyelle et prennent une apostrophe : l', j', m', t', s', d', n', qu'.",
    "astuce": "Devant une consonne, on garde le mot entier : je mange, mais j'habite.",
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
      "expl": "Habite commence par un h muet : je devient j'."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Il n'aime pas le café.",
      "faux": "Il ne aime pas le café.",
      "expl": "Aime commence par une voyelle : ne devient n'."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "l'hôpital",
      "faux": "le hôpital",
      "expl": "Le h d'hôpital est muet : le devient l'."
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
      "expl": "Habille commence par un h muet : se devient s'."
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
      "expl": "Omar commence par une voyelle : de devient d'."
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
      "expl": "Est commence par une voyelle : que devient qu'."
     },
     {
      "type": "ordre",
      "phrase": "J'ai rendez-vous à l'hôpital.",
      "expl": "J'ai (je + ai) + rendez-vous + à l'hôpital (le + hôpital)."
     },
     {
      "type": "ordre",
      "phrase": "Il n'est pas encore arrivé.",
      "expl": "Il n'est (ne + est) + pas encore arrivé."
     }
    ]
   },
   {
    "id": "ponctuation-5",
    "titre": "Écrire un message propre",
    "mots": [],
    "tableau": null,
    "regle": "Un message à l'école, à un client ou à l'administration suit toujours le même plan. 1. **Bonjour** + la personne (Bonjour Madame,). 2. **Le message**, en phrases courtes et complètes. 3. **La formule de fin** (Merci, Bonne journée, Cordialement). 4. **La signature** (prénom et nom, ou le nom du garage).",
    "astuce": "Pas d'abréviations dans un message sérieux (écrivez « s'il vous plaît », pas « stp » ou « svp »).",
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
      "expl": "À la maîtresse, on dit bonjour et vous. Salut, c'est pour les amis."
     },
     {
      "type": "choisir",
      "consigne": "la meilleure fin pour un client",
      "juste": "Bonne journée, le garage Martin.",
      "faux": "Bye.",
      "expl": "Un message à un client finit par une formule polie et le nom du garage."
     },
     {
      "type": "choisir",
      "consigne": "",
      "juste": "Mon fils est malade, il ne viendra pas aujourd'hui.",
      "faux": "mon fils malade il vient pas",
      "expl": "Une phrase complète : majuscule, verbes conjugués, ne… pas à l'écrit, et un point."
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
      "expl": "Un message sérieux commence par bonjour."
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
      "expl": "Pour un message sérieux, on finit par cordialement. Bisous, c'est pour la famille."
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
      "expl": "Fils est masculin, et il est à moi : mon fils."
     },
     {
      "type": "ordre",
      "phrase": "Bonjour Madame, mon fils est malade aujourd'hui.",
      "expl": "Bonjour Madame (le B) + virgule + le message (le M)."
     },
     {
      "type": "ordre",
      "phrase": "Votre voiture est prête, bonne journée.",
      "expl": "Le message + virgule + la formule de fin."
     }
    ]
   }
  ]
 }
];
