/* Exercices en plus de ceux de js/lecons.js. Généré par tools/construire_exercices.py : ne pas modifier ici,
   modifier tools/exercices/*.json puis relancer le script. */
const EXERCICES_PLUS = {
 "phrases-1": [
  {
   "type": "ecouter",
   "phrase": "Je répare le moteur.",
   "faux": [
    "Le moteur je répare.",
    "Répare je le moteur."
   ],
   "expl": "On dit d'abord qui (je), puis l'action (répare), puis quoi (le moteur)."
  },
  {
   "type": "ecouter",
   "phrase": "Ma fille va à la piscine.",
   "faux": [
    "Va ma fille à la piscine.",
    "À la piscine ma fille va."
   ],
   "expl": "Qui ? ma fille. Fait quoi ? va. Où ? à la piscine."
  },
  {
   "type": "ecouter",
   "phrase": "Le client attend devant le garage.",
   "faux": [
    "Attend le client devant le garage.",
    "Devant le garage attend le client."
   ],
   "expl": "Le client (qui ?) attend (fait quoi ?) devant le garage (où ?)."
  },
  {
   "type": "ecouter",
   "phrase": "Nous mangeons à midi.",
   "faux": [
    "Mangeons nous à midi.",
    "À midi mangeons nous."
   ],
   "expl": "« Nous » fait l'action, il vient en premier. Le moment (à midi) vient à la fin."
  },
  {
   "type": "vraifaux",
   "phrase": "Mon mari travaille au garage.",
   "vrai": true,
   "expl": "Qui ? mon mari. Fait quoi ? travaille. Où ? au garage. L'ordre est bon."
  },
  {
   "type": "vraifaux",
   "phrase": "Arrive le bus à huit heures.",
   "vrai": false,
   "correction": "Le bus arrive à huit heures.",
   "expl": "Le bus fait l'action : il vient avant le verbe « arrive »."
  },
  {
   "type": "vraifaux",
   "phrase": "Les enfants jouent dans le jardin.",
   "vrai": true,
   "expl": "Les enfants (qui ?) jouent (fait quoi ?) dans le jardin (où ?)."
  },
  {
   "type": "vraifaux",
   "phrase": "La voiture je lave le samedi.",
   "vrai": false,
   "correction": "Je lave la voiture le samedi.",
   "expl": "On commence par qui fait l'action (je), puis le verbe (lave), puis quoi (la voiture)."
  },
  {
   "type": "associer",
   "consigne": "Reliez qui et ce qu'il fait",
   "paires": [
    [
     "Le médecin",
     "soigne les malades."
    ],
    [
     "Le mécanicien",
     "répare les voitures."
    ],
    [
     "La maîtresse",
     "fait la classe."
    ],
    [
     "Le boulanger",
     "fait le pain."
    ]
   ],
   "expl": "Chaque phrase commence par la personne (qui ?), puis vient l'action (fait quoi ?)."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin de la phrase",
   "paires": [
    [
     "Je bois",
     "un café."
    ],
    [
     "Nous allons",
     "au marché."
    ],
    [
     "Elle prend",
     "le bus."
    ],
    [
     "Tu finis",
     "à 18 heures."
    ]
   ],
   "expl": "Après qui + l'action, on ajoute le reste : quoi, où ou quand."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mon fils fait ses devoirs.",
   "faux": "Fait mon fils ses devoirs.",
   "expl": "« Mon fils » fait l'action : il vient avant le verbe « fait »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le garage ouvre à 8 heures.",
   "faux": "Ouvre le garage à 8 heures.",
   "expl": "Le garage (qui ?) + ouvre (fait quoi ?) + à 8 heures (quand ?)."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je cherche mes clés.",
   "faux": "Mes clés je cherche.",
   "expl": "Dans une phrase normale : je + cherche + mes clés."
  },
  {
   "type": "completer",
   "phrase": "Ma femme ___ au marché le samedi.",
   "reponse": "va",
   "choix": [
    "va",
    "aller",
    "allé"
   ],
   "expl": "Après « ma femme » (= elle), le verbe se conjugue : elle va. « Aller » est la forme du dictionnaire."
  },
  {
   "type": "completer",
   "phrase": "___ réparez la voiture aujourd'hui ?",
   "reponse": "Vous",
   "choix": [
    "Vous",
    "Votre",
    "Vos"
   ],
   "expl": "« Vous » fait l'action (vous réparez). « Votre » et « vos » vont devant un nom : votre voiture."
  },
  {
   "type": "ordre",
   "phrase": "Le mécanicien change les pneus.",
   "expl": "Qui ? le mécanicien. Fait quoi ? change. Quoi ? les pneus."
  },
  {
   "type": "ordre",
   "phrase": "Mon fils prend le bus le matin.",
   "expl": "Qui ? mon fils. Fait quoi ? prend. Quoi ? le bus. Quand ? le matin."
  }
 ],
 "phrases-2": [
  {
   "type": "ecouter",
   "phrase": "Je ne travaille pas le dimanche.",
   "faux": [
    "Je travaille le dimanche.",
    "Je ne travaille plus le dimanche."
   ],
   "expl": "On entend « ne… pas » autour du verbe : je ne travaille pas."
  },
  {
   "type": "ecouter",
   "phrase": "Il n'y a plus de pain.",
   "faux": [
    "Il y a du pain.",
    "Il n'y a pas de pain."
   ],
   "expl": "« Ne… plus » veut dire : avant il y en avait, maintenant non."
  },
  {
   "type": "ecouter",
   "phrase": "Elle ne boit jamais de café.",
   "faux": [
    "Elle boit souvent du café.",
    "Elle ne boit pas de café."
   ],
   "expl": "« Ne… jamais » veut dire : à aucun moment."
  },
  {
   "type": "ecouter",
   "phrase": "Je n'ai rien compris.",
   "faux": [
    "J'ai tout compris.",
    "Je n'ai pas compris."
   ],
   "expl": "« Ne… rien » veut dire : aucune chose. À l'oral, on entend bien « rien »."
  },
  {
   "type": "vraifaux",
   "phrase": "Je ne suis pas malade.",
   "vrai": true,
   "expl": "« Ne » avant le verbe « suis », « pas » après. C'est juste."
  },
  {
   "type": "vraifaux",
   "phrase": "Je ne comprends.",
   "vrai": false,
   "correction": "Je ne comprends pas.",
   "expl": "À l'écrit, il faut les deux morceaux : « ne » avant le verbe et « pas » après."
  },
  {
   "type": "vraifaux",
   "phrase": "Il ne habite pas ici.",
   "vrai": false,
   "correction": "Il n'habite pas ici.",
   "expl": "Devant une voyelle (habite commence par un h muet), « ne » devient « n' »."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous n'avons rien acheté.",
   "vrai": true,
   "expl": "« N' » avant « avons », « rien » après. C'est juste."
  },
  {
   "type": "associer",
   "consigne": "Reliez chaque négation à son sens",
   "paires": [
    [
     "ne… pas",
     "non"
    ],
    [
     "ne… plus",
     "plus maintenant"
    ],
    [
     "ne… jamais",
     "à aucun moment"
    ],
    [
     "ne… personne",
     "aucune personne"
    ]
   ],
   "expl": "Chaque petit mot après le verbe donne un sens différent à la négation."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase et son contraire",
   "paires": [
    [
     "Je fume encore.",
     "Je ne fume plus."
    ],
    [
     "Il y a quelqu'un.",
     "Il n'y a personne."
    ],
    [
     "J'ai tout vu.",
     "Je n'ai rien vu."
    ],
    [
     "Je viens toujours.",
     "Je ne viens jamais."
    ]
   ],
   "expl": "encore → ne… plus, quelqu'un → ne… personne, tout → ne… rien, toujours → ne… jamais."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ce n'est pas cher.",
   "faux": "Ce n'est cher pas.",
   "expl": "« Pas » se place juste après le verbe « est »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je ne connais personne ici.",
   "faux": "Je connais ne personne ici.",
   "expl": "« Ne » va avant le verbe, « personne » après."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "La voiture ne démarre plus.",
   "faux": "La voiture démarre ne plus.",
   "expl": "« Ne » avant le verbe « démarre », « plus » après."
  },
  {
   "type": "completer",
   "phrase": "Je ___ ai pas le temps.",
   "reponse": "n'",
   "choix": [
    "n'",
    "ne",
    "pas"
   ],
   "expl": "Devant « ai » (une voyelle), « ne » devient « n' » : je n'ai pas."
  },
  {
   "type": "completer",
   "phrase": "Il ne mange ___ de viande, il est végétarien.",
   "reponse": "jamais",
   "choix": [
    "jamais",
    "personne",
    "rien"
   ],
   "expl": "Il ne mange de viande à aucun moment : « ne… jamais »."
  },
  {
   "type": "ordre",
   "phrase": "Je ne trouve pas mes clés.",
   "expl": "Je + ne + trouve + pas + mes clés."
  },
  {
   "type": "ordre",
   "phrase": "Il n'y a personne au garage.",
   "expl": "Il + n' + y a + personne + au garage."
  }
 ],
 "phrases-3": [
  {
   "type": "ecouter",
   "phrase": "Où est la pharmacie ?",
   "faux": [
    "Quand est la pharmacie ?",
    "Combien est la pharmacie ?"
   ],
   "expl": "« Où » demande un lieu."
  },
  {
   "type": "ecouter",
   "phrase": "Est-ce que vous êtes ouvert le samedi ?",
   "faux": [
    "Vous êtes ouvert le samedi.",
    "Est-ce que vous êtes fermé le samedi ?"
   ],
   "expl": "« Est-ce que » au début transforme la phrase en question."
  },
  {
   "type": "ecouter",
   "phrase": "Combien coûte la réparation ?",
   "faux": [
    "Quand coûte la réparation ?",
    "Comment coûte la réparation ?"
   ],
   "expl": "« Combien » demande un prix ou une quantité."
  },
  {
   "type": "ecouter",
   "phrase": "À quelle heure finit l'école ?",
   "faux": [
    "À quelle heure commence l'école ?",
    "Pourquoi finit l'école ?"
   ],
   "expl": "« À quelle heure » demande un moment précis. Ici on entend « finit »."
  },
  {
   "type": "vraifaux",
   "phrase": "Pourquoi tu pleures ?",
   "vrai": true,
   "expl": "« Pourquoi » demande une raison. C'est une question correcte."
  },
  {
   "type": "vraifaux",
   "phrase": "Est-ce que tu as faim ?",
   "vrai": true,
   "expl": "« Est-ce que » + la phrase + un point d'interrogation."
  },
  {
   "type": "vraifaux",
   "phrase": "Quel heure est-il ?",
   "vrai": false,
   "correction": "Quelle heure est-il ?",
   "expl": "« Heure » est un mot féminin (une heure), donc on écrit « quelle »."
  },
  {
   "type": "vraifaux",
   "phrase": "Combien d'enfants vous avez ?",
   "vrai": true,
   "expl": "« Combien de » demande une quantité. À l'oral, cette question est correcte."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot question à ce qu'il demande",
   "paires": [
    [
     "Où ?",
     "un lieu"
    ],
    [
     "Quand ?",
     "un moment"
    ],
    [
     "Combien ?",
     "un prix ou une quantité"
    ],
    [
     "Pourquoi ?",
     "une raison"
    ]
   ],
   "expl": "Chaque mot question demande une information différente."
  },
  {
   "type": "associer",
   "consigne": "Reliez la question et la réponse",
   "paires": [
    [
     "Où habitez-vous ?",
     "À Lyon."
    ],
    [
     "Quand revient-il ?",
     "Demain."
    ],
    [
     "Combien ça coûte ?",
     "Vingt euros."
    ],
    [
     "Qui est là ?",
     "Le facteur."
    ]
   ],
   "expl": "Où → un lieu, quand → un moment, combien → un prix, qui → une personne."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Comment allez-vous ?",
   "faux": "Combien allez-vous ?",
   "expl": "« Comment » demande la manière, ici l'état de la personne."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Est-ce que la voiture est prête ?",
   "faux": "Est-ce la voiture est prête ?",
   "expl": "Il faut bien les trois petits mots : est-ce que."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Qui est votre médecin ?",
   "faux": "Où est votre médecin qui ?",
   "expl": "« Qui » demande une personne et se place au début de la question."
  },
  {
   "type": "completer",
   "phrase": "___ vous appelez-vous ?",
   "reponse": "Comment",
   "choix": [
    "Comment",
    "Combien",
    "Où"
   ],
   "expl": "Pour demander le nom : comment vous appelez-vous ?"
  },
  {
   "type": "completer",
   "phrase": "___ est le rendez-vous ? À 10 heures.",
   "reponse": "Quand",
   "choix": [
    "Quand",
    "Où",
    "Qui"
   ],
   "expl": "La réponse est un moment (à 10 heures), donc la question commence par « quand »."
  },
  {
   "type": "ordre",
   "phrase": "Combien coûtent les pneus ?",
   "expl": "Le mot question (combien) vient en premier."
  },
  {
   "type": "ordre",
   "phrase": "Est-ce que mon fils est malade ?",
   "expl": "Est-ce que + la phrase normale : mon fils est malade."
  }
 ],
 "phrases-4": [
  {
   "type": "ecouter",
   "phrase": "Je voudrais un rendez-vous, s'il vous plaît.",
   "faux": [
    "Je veux un rendez-vous.",
    "Donnez un rendez-vous."
   ],
   "expl": "« Je voudrais » et « s'il vous plaît » rendent la demande polie."
  },
  {
   "type": "ecouter",
   "phrase": "Pourriez-vous répéter, s'il vous plaît ?",
   "faux": [
    "Répétez !",
    "Vous répétez ?"
   ],
   "expl": "« Pourriez-vous » est la façon la plus polie de demander quelque chose."
  },
  {
   "type": "ecouter",
   "phrase": "Excusez-moi, je cherche la mairie.",
   "faux": [
    "Hé, la mairie ?",
    "Où la mairie ?"
   ],
   "expl": "On commence par « Excusez-moi » pour parler poliment à un inconnu."
  },
  {
   "type": "ecouter",
   "phrase": "Est-ce que je peux payer par carte ?",
   "faux": [
    "Je paie par carte.",
    "Carte, c'est possible ?"
   ],
   "expl": "« Est-ce que je peux » demande poliment la permission."
  },
  {
   "type": "vraifaux",
   "phrase": "Bonjour madame, vous pouvez m'aider ?",
   "vrai": true,
   "expl": "On dit « bonjour madame » et on vouvoie une personne qu'on ne connaît pas."
  },
  {
   "type": "vraifaux",
   "phrase": "Bonjour docteur, tu vas bien ?",
   "vrai": false,
   "correction": "Bonjour docteur, vous allez bien ?",
   "expl": "On dit « vous » au médecin, pas « tu »."
  },
  {
   "type": "vraifaux",
   "phrase": "Je voudrais deux baguettes, s'il vous plaît.",
   "vrai": true,
   "expl": "« Je voudrais » + la chose + « s'il vous plaît » : c'est poli."
  },
  {
   "type": "vraifaux",
   "phrase": "Monsieur, tu peux attendre ici ?",
   "vrai": false,
   "correction": "Monsieur, vous pouvez attendre ici ?",
   "expl": "À un client ou à un inconnu, on dit « vous »."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase à la bonne situation",
   "paires": [
    [
     "Je vous en prie.",
     "Après un merci"
    ],
    [
     "Excusez-moi.",
     "Pour déranger quelqu'un"
    ],
    [
     "Bonne journée !",
     "Pour partir dans la journée"
    ],
    [
     "Bonne soirée !",
     "Pour partir le soir"
    ]
   ],
   "expl": "Ce sont des formules de politesse à connaître par cœur."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase directe et la phrase polie",
   "paires": [
    [
     "Je veux un café.",
     "Je voudrais un café."
    ],
    [
     "Répétez.",
     "Pouvez-vous répéter ?"
    ],
    [
     "Je paie par carte.",
     "Est-ce que je peux payer par carte ?"
    ],
    [
     "Aidez-moi.",
     "Vous pouvez m'aider ?"
    ]
   ],
   "expl": "Pour être poli : je voudrais, pouvez-vous, est-ce que je peux."
  },
  {
   "type": "choisir",
   "consigne": "à un client",
   "juste": "Votre voiture sera prête demain, monsieur.",
   "faux": "Ta voiture sera prête demain, monsieur.",
   "expl": "À un client, on dit « vous » et « votre »."
  },
  {
   "type": "choisir",
   "consigne": "à la maîtresse",
   "juste": "Est-ce que je peux vous parler deux minutes ?",
   "faux": "Je peux te parler deux minutes ?",
   "expl": "On dit « vous » à la maîtresse."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Merci beaucoup, au revoir.",
   "faux": "Merci beaucoup, salut.",
   "expl": "« Salut » se dit aux amis. Dans un magasin ou au bureau, on dit « au revoir »."
  },
  {
   "type": "completer",
   "phrase": "___-vous m'aider, s'il vous plaît ?",
   "reponse": "Pourriez",
   "choix": [
    "Pourriez",
    "Pouvoir",
    "Peux"
   ],
   "expl": "« Pourriez-vous » est la forme très polie avec « vous »."
  },
  {
   "type": "completer",
   "phrase": "Merci ! – Je vous en ___.",
   "reponse": "prie",
   "choix": [
    "prie",
    "plaît",
    "merci"
   ],
   "expl": "On répond à « merci » par « je vous en prie » ou « de rien »."
  },
  {
   "type": "ordre",
   "phrase": "Je voudrais un rendez-vous avec le docteur.",
   "expl": "Je + voudrais + un rendez-vous + avec le docteur."
  },
  {
   "type": "ordre",
   "phrase": "Pourriez-vous parler plus lentement ?",
   "expl": "Pourriez-vous + parler + plus lentement."
  }
 ],
 "phrases-5": [
  {
   "type": "ecouter",
   "phrase": "Il est absent parce qu'il est malade.",
   "faux": [
    "Il est absent donc il est malade.",
    "Il est absent mais il est malade."
   ],
   "expl": "« Parce que » donne la raison : pourquoi il est absent ? Il est malade."
  },
  {
   "type": "ecouter",
   "phrase": "La batterie est vide, donc la voiture ne démarre pas.",
   "faux": [
    "La batterie est vide, mais la voiture ne démarre pas.",
    "La batterie est vide ou la voiture ne démarre pas."
   ],
   "expl": "« Donc » annonce la conséquence."
  },
  {
   "type": "ecouter",
   "phrase": "Tu veux du thé ou du café ?",
   "faux": [
    "Tu veux du thé et du café ?",
    "Tu veux du thé mais du café ?"
   ],
   "expl": "« Ou » propose de choisir entre deux choses."
  },
  {
   "type": "ecouter",
   "phrase": "Si tu as besoin, appelle-moi.",
   "faux": [
    "Quand tu as besoin, appelle-moi.",
    "Mais tu as besoin, appelle-moi."
   ],
   "expl": "« Si » pose une condition."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai froid, donc je mets mon manteau.",
   "vrai": true,
   "expl": "J'ai froid → conséquence : je mets mon manteau. « Donc » est juste."
  },
  {
   "type": "vraifaux",
   "phrase": "Il pleut, mais je prends mon parapluie.",
   "vrai": false,
   "correction": "Il pleut, donc je prends mon parapluie.",
   "expl": "Prendre le parapluie est la conséquence de la pluie : on dit « donc »."
  },
  {
   "type": "vraifaux",
   "phrase": "La voiture est vieille, mais elle roule bien.",
   "vrai": true,
   "expl": "« Mais » dit le contraire de ce qu'on attend : vieille… et pourtant elle roule bien."
  },
  {
   "type": "vraifaux",
   "phrase": "Je suis fatigué parce que je vais au lit.",
   "vrai": false,
   "correction": "Je vais au lit parce que je suis fatigué.",
   "expl": "La raison (je suis fatigué) vient après « parce que »."
  },
  {
   "type": "associer",
   "consigne": "Reliez le petit mot à son rôle",
   "paires": [
    [
     "et",
     "ajouter"
    ],
    [
     "mais",
     "dire le contraire"
    ],
    [
     "parce que",
     "donner la raison"
    ],
    [
     "donc",
     "dire la conséquence"
    ]
   ],
   "expl": "Ces petits mots relient deux idées dans une phrase."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "J'ai faim,",
     "donc je mange."
    ],
    [
     "Il est en retard",
     "parce que le bus est en panne."
    ],
    [
     "J'aime le thé",
     "mais je préfère le café."
    ],
    [
     "Quand il fait beau,",
     "on va au parc."
    ]
   ],
   "expl": "donc = conséquence, parce que = raison, mais = contraire, quand = moment."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je reste à la maison parce que mon fils est malade.",
   "faux": "Je reste à la maison donc mon fils est malade.",
   "expl": "La maladie du fils est la raison : on dit « parce que »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Quand j'arrive, je t'appelle.",
   "faux": "Mais j'arrive, je t'appelle.",
   "expl": "« Quand » indique le moment : au moment où j'arrive."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le moteur chauffe, alors je m'arrête.",
   "faux": "Le moteur chauffe, ou je m'arrête.",
   "expl": "« Alors » (comme « donc ») annonce la conséquence."
  },
  {
   "type": "completer",
   "phrase": "Je n'ai pas de voiture, ___ je prends le bus.",
   "reponse": "alors",
   "choix": [
    "alors",
    "mais",
    "ou"
   ],
   "expl": "Prendre le bus est la conséquence : « alors »."
  },
  {
   "type": "completer",
   "phrase": "Il travaille le matin ___ il étudie le soir.",
   "reponse": "et",
   "choix": [
    "et",
    "ou",
    "si"
   ],
   "expl": "On ajoute une deuxième information : « et »."
  },
  {
   "type": "ordre",
   "phrase": "Je suis en retard parce que le bus est en panne.",
   "expl": "Je suis en retard + parce que + la raison."
  },
  {
   "type": "ordre",
   "phrase": "Si la voiture fait du bruit, venez au garage.",
   "expl": "Si + la condition, puis ce qu'il faut faire."
  }
 ],
 "phrases-6": [
  {
   "type": "ecouter",
   "phrase": "J'habite à Lyon depuis trois ans.",
   "faux": [
    "J'habite à Lyon dans trois ans.",
    "J'habite à Lyon il y a trois ans."
   ],
   "expl": "« Depuis » : ça a commencé il y a trois ans et ça continue."
  },
  {
   "type": "ecouter",
   "phrase": "La voiture sera prête dans deux jours.",
   "faux": [
    "La voiture sera prête il y a deux jours.",
    "La voiture sera prête depuis deux jours."
   ],
   "expl": "« Dans » + une durée parle du futur."
  },
  {
   "type": "ecouter",
   "phrase": "Je suis allée chez le médecin.",
   "faux": [
    "Je suis allée au médecin.",
    "Je suis allée à le médecin."
   ],
   "expl": "Devant une personne, on dit « chez » : chez le médecin."
  },
  {
   "type": "ecouter",
   "phrase": "Mon frère habite en Algérie.",
   "faux": [
    "Mon frère habite au Algérie.",
    "Mon frère habite à Algérie."
   ],
   "expl": "L'Algérie est un pays féminin : on dit « en Algérie »."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais à la mairie demain.",
   "vrai": true,
   "expl": "La mairie est féminine : « à la mairie »."
  },
  {
   "type": "vraifaux",
   "phrase": "Il est arrivé en France dans dix ans.",
   "vrai": false,
   "correction": "Il est arrivé en France il y a dix ans.",
   "expl": "Pour le passé, on dit « il y a » + la durée."
  },
  {
   "type": "vraifaux",
   "phrase": "Mon cousin habite au Maroc.",
   "vrai": true,
   "expl": "Le Maroc est un pays masculin : « au Maroc »."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais à le garage.",
   "vrai": false,
   "correction": "Je vais au garage.",
   "expl": "À + le devient « au » : au garage."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le moment",
   "paires": [
    [
     "il y a deux jours",
     "dans le passé"
    ],
    [
     "dans deux jours",
     "dans le futur"
    ],
    [
     "depuis deux jours",
     "ça continue encore"
    ],
    [
     "pendant deux jours",
     "une durée"
    ]
   ],
   "expl": "Ces petits mots changent tout le sens de la phrase."
  },
  {
   "type": "associer",
   "consigne": "Reliez le lieu et le bon petit mot",
   "paires": [
    [
     "Lyon",
     "à Lyon"
    ],
    [
     "la France",
     "en France"
    ],
    [
     "le garage",
     "au garage"
    ],
    [
     "le dentiste",
     "chez le dentiste"
    ]
   ],
   "expl": "à + ville, en + pays féminin, au + nom masculin, chez + personne."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai attendu pendant une heure.",
   "faux": "J'ai attendu dans une heure.",
   "expl": "« Pendant » donne la durée de l'attente."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les enfants sont à l'école.",
   "faux": "Les enfants sont chez l'école.",
   "expl": "« Chez » est pour une personne. Pour un lieu, on dit « à l'école »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ma mère vit en Kabylie.",
   "faux": "Ma mère vit au Kabylie.",
   "expl": "La Kabylie est féminine : « en Kabylie »."
  },
  {
   "type": "completer",
   "phrase": "Je suis arrivé ___ deux semaines.",
   "reponse": "il y a",
   "choix": [
    "il y a",
    "dans",
    "depuis"
   ],
   "expl": "C'est fini, dans le passé : « il y a deux semaines »."
  },
  {
   "type": "completer",
   "phrase": "Mon fils va ___ urgences.",
   "reponse": "aux",
   "choix": [
    "aux",
    "au",
    "à la"
   ],
   "expl": "« Les urgences » est au pluriel : à + les = aux."
  },
  {
   "type": "ordre",
   "phrase": "Je travaille dans ce garage depuis dix ans.",
   "expl": "Le lieu, puis la durée avec « depuis »."
  },
  {
   "type": "ordre",
   "phrase": "Nous allons chez ma sœur samedi.",
   "expl": "Nous allons + chez ma sœur (où ?) + samedi (quand ?)."
  }
 ],
 "phrases-7": [
  {
   "type": "ecouter",
   "phrase": "Le garçon qui joue est mon fils.",
   "faux": [
    "Le garçon que joue est mon fils.",
    "Le garçon où joue est mon fils."
   ],
   "expl": "Le garçon fait l'action (il joue) : on dit « qui »."
  },
  {
   "type": "ecouter",
   "phrase": "La voiture que je répare est rouge.",
   "faux": [
    "La voiture qui je répare est rouge.",
    "La voiture où je répare est rouge."
   ],
   "expl": "C'est moi qui fais l'action, pas la voiture : on dit « que »."
  },
  {
   "type": "ecouter",
   "phrase": "C'est la ville où je suis né.",
   "faux": [
    "C'est la ville que je suis né.",
    "C'est la ville qui je suis né."
   ],
   "expl": "Pour un lieu, on dit « où »."
  },
  {
   "type": "ecouter",
   "phrase": "J'ai un voisin qui parle kabyle.",
   "faux": [
    "J'ai un voisin que parle kabyle.",
    "J'ai un voisin où parle kabyle."
   ],
   "expl": "Le voisin fait l'action (il parle) : « qui »."
  },
  {
   "type": "vraifaux",
   "phrase": "Le pain que j'achète est très bon.",
   "vrai": true,
   "expl": "C'est moi qui achète : « que »."
  },
  {
   "type": "vraifaux",
   "phrase": "La dame que parle est ma voisine.",
   "vrai": false,
   "correction": "La dame qui parle est ma voisine.",
   "expl": "La dame fait l'action (elle parle) : « qui »."
  },
  {
   "type": "vraifaux",
   "phrase": "Le jour où il est arrivé, il pleuvait.",
   "vrai": true,
   "expl": "« Où » peut aussi parler d'un moment : le jour où…"
  },
  {
   "type": "vraifaux",
   "phrase": "Le client qui j'attends est en retard.",
   "vrai": false,
   "correction": "Le client que j'attends est en retard.",
   "expl": "C'est moi qui attends : « que »."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Le médecin qui",
     "m'a soigné est gentil."
    ],
    [
     "Le plat que",
     "tu prépares sent bon."
    ],
    [
     "Le garage où",
     "je travaille est grand."
    ],
    [
     "L'enfant qui",
     "pleure a faim."
    ]
   ],
   "expl": "qui + un verbe, que + une personne + un verbe, où + un lieu."
  },
  {
   "type": "associer",
   "consigne": "Reliez le petit mot à son rôle",
   "paires": [
    [
     "qui",
     "ce mot fait l'action"
    ],
    [
     "que",
     "quelqu'un d'autre fait l'action"
    ],
    [
     "où",
     "un lieu ou un moment"
    ]
   ],
   "expl": "Ces petits mots évitent de répéter un nom."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "C'est la maîtresse qui m'a appelée.",
   "faux": "C'est la maîtresse que m'a appelée.",
   "expl": "La maîtresse a fait l'action (elle a appelé) : « qui »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les clés que tu cherches sont sur la table.",
   "faux": "Les clés qui tu cherches sont sur la table.",
   "expl": "C'est toi qui cherches : « que »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Voici l'école où va mon fils.",
   "faux": "Voici l'école que va mon fils.",
   "expl": "L'école est un lieu : « où »."
  },
  {
   "type": "completer",
   "phrase": "Le bus ___ passe ici va à la gare.",
   "reponse": "qui",
   "choix": [
    "qui",
    "que",
    "où"
   ],
   "expl": "Le bus fait l'action (il passe) : « qui »."
  },
  {
   "type": "completer",
   "phrase": "La pièce ___ vous avez commandée est arrivée.",
   "reponse": "que",
   "choix": [
    "que",
    "qui",
    "où"
   ],
   "expl": "C'est vous qui avez commandé : « que »."
  },
  {
   "type": "ordre",
   "phrase": "Voici la voiture que je dois réparer.",
   "expl": "Voici la voiture + que + je dois réparer."
  },
  {
   "type": "ordre",
   "phrase": "C'est la maison où habitent mes parents.",
   "expl": "La maison (un lieu) + où + habitent mes parents."
  }
 ],
 "phrases-8": [
  {
   "type": "ecouter",
   "phrase": "Votre voiture ? Je la répare demain.",
   "faux": [
    "Votre voiture ? Je le répare demain.",
    "Votre voiture ? Je lui répare demain."
   ],
   "expl": "La voiture est féminine : on la remplace par « la »."
  },
  {
   "type": "ecouter",
   "phrase": "Le client ? Je lui téléphone ce soir.",
   "faux": [
    "Le client ? Je le téléphone ce soir.",
    "Le client ? J'y téléphone ce soir."
   ],
   "expl": "On téléphone à quelqu'un : « à + une personne » devient « lui »."
  },
  {
   "type": "ecouter",
   "phrase": "La mairie ? J'y vais lundi.",
   "faux": [
    "La mairie ? Je la vais lundi.",
    "La mairie ? J'en vais lundi."
   ],
   "expl": "Pour remplacer un lieu, on dit « y »."
  },
  {
   "type": "ecouter",
   "phrase": "Du pain ? Oui, j'en veux.",
   "faux": [
    "Du pain ? Oui, je le veux.",
    "Du pain ? Oui, j'y veux."
   ],
   "expl": "Après « du, de la, des », on remplace par « en »."
  },
  {
   "type": "vraifaux",
   "phrase": "Les clés ? Je les ai dans ma poche.",
   "vrai": true,
   "expl": "« Les clés » (pluriel) est remplacé par « les »."
  },
  {
   "type": "vraifaux",
   "phrase": "Ma fille ? Je la parle tous les jours.",
   "vrai": false,
   "correction": "Ma fille ? Je lui parle tous les jours.",
   "expl": "On parle à quelqu'un : on dit « lui », pas « la »."
  },
  {
   "type": "vraifaux",
   "phrase": "Des pommes ? J'en achète un kilo.",
   "vrai": true,
   "expl": "Une quantité (un kilo de pommes) : on remplace par « en »."
  },
  {
   "type": "vraifaux",
   "phrase": "Le garage ? Je vais y demain.",
   "vrai": false,
   "correction": "Le garage ? J'y vais demain.",
   "expl": "Le petit mot se place avant le verbe : j'y vais."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et ce qui le remplace",
   "paires": [
    [
     "la voiture",
     "je la répare"
    ],
    [
     "au client",
     "je lui parle"
    ],
    [
     "à la poste",
     "j'y vais"
    ],
    [
     "du café",
     "j'en veux"
    ]
   ],
   "expl": "le / la / les : une chose ou une personne. lui : à une personne. y : un lieu. en : une quantité."
  },
  {
   "type": "associer",
   "consigne": "Reliez la question et la réponse",
   "paires": [
    [
     "Tu vois ton frère ?",
     "Oui, je le vois."
    ],
    [
     "Tu parles à tes enfants ?",
     "Oui, je leur parle."
    ],
    [
     "Tu vas au marché ?",
     "Oui, j'y vais."
    ],
    [
     "Tu veux de l'eau ?",
     "Oui, j'en veux."
    ]
   ],
   "expl": "le = ton frère, leur = à tes enfants, y = au marché, en = de l'eau."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les pneus ? Je les change demain.",
   "faux": "Les pneus ? Je leur change demain.",
   "expl": "On change les pneus (pas « à » les pneus) : « les »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mes parents ? Je leur écris une lettre.",
   "faux": "Mes parents ? Je les écris une lettre.",
   "expl": "On écrit à quelqu'un : « à mes parents » devient « leur »."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "L'école ? Il y va à pied.",
   "faux": "L'école ? Il la va à pied.",
   "expl": "Un lieu où l'on va est remplacé par « y »."
  },
  {
   "type": "completer",
   "phrase": "Le médecin ? Je ___ vois demain matin.",
   "reponse": "le",
   "choix": [
    "le",
    "lui",
    "y"
   ],
   "expl": "On voit quelqu'un (sans « à ») : « le »."
  },
  {
   "type": "completer",
   "phrase": "Du lait ? Il n'y ___ a plus.",
   "reponse": "en",
   "choix": [
    "en",
    "y",
    "le"
   ],
   "expl": "Une quantité de lait : on dit « en ». Il n'y en a plus."
  },
  {
   "type": "ordre",
   "phrase": "Je lui donne les clés de la voiture.",
   "expl": "Le petit mot « lui » se place juste avant le verbe « donne »."
  },
  {
   "type": "ordre",
   "phrase": "Nous en avons besoin pour demain.",
   "expl": "« En » se place avant le verbe « avons »."
  }
 ]
};
