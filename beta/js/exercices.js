/* Exercices en plus de ceux de js/lecons.js. Généré par tools/construire_exercices.py : ne pas modifier ici,
   modifier tools/exercices/*.json puis relancer le script. */
const EXERCICES_PLUS = {
 "genre-1": [
  {
   "type": "ecouter",
   "phrase": "La voiture est prête.",
   "faux": [
    "Les voitures sont prêtes.",
    "Le camion est prêt."
   ],
   "expl": "On entend **la voiture**."
  },
  {
   "type": "ecouter",
   "phrase": "Les enfants jouent.",
   "faux": [
    "L'enfant joue.",
    "Les parents jouent."
   ],
   "expl": "On entend **les enfants**."
  },
  {
   "type": "ecouter",
   "phrase": "Le garage ferme à 18 heures.",
   "faux": [
    "Le garage ouvre à 18 heures.",
    "La boutique ferme à 18 heures."
   ],
   "expl": "On entend **le garage ferme**."
  },
  {
   "type": "vraifaux",
   "phrase": "L'école est à côté.",
   "vrai": true,
   "expl": "École commence par **é**.\n\nOn dit **l'**."
  },
  {
   "type": "vraifaux",
   "phrase": "La hôpital est grand.",
   "vrai": false,
   "correction": "L'hôpital est grand.",
   "expl": "Le **h** ne s'entend pas.\n\nOn dit **l'**."
  },
  {
   "type": "vraifaux",
   "phrase": "Les clés sont sur la table.",
   "vrai": true,
   "expl": "Plusieurs clés : **les**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le bon petit mot",
   "paires": [
    [
     "voiture",
     "la voiture"
    ],
    [
     "garage",
     "le garage"
    ],
    [
     "école",
     "l'école"
    ],
    [
     "enfants",
     "les enfants"
    ]
   ],
   "expl": "le, la, l', les."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le bon petit mot",
   "paires": [
    [
     "pharmacie",
     "la pharmacie"
    ],
    [
     "médecin",
     "le médecin"
    ],
    [
     "hiver",
     "l'hiver"
    ],
    [
     "papiers",
     "les papiers"
    ]
   ],
   "expl": "Avant une voyelle ou un **h** muet : **l'**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "L'enfant dort.",
   "faux": "Le enfant dort.",
   "expl": "Enfant commence par **e**.\n\nOn dit **l'**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "La porte est fermée.",
   "faux": "Le porte est fermée.",
   "expl": "Porte : féminin.\n\nOn dit **la**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les magasins sont ouverts.",
   "faux": "Le magasins sont ouverts.",
   "expl": "Plusieurs magasins : **les**."
  },
  {
   "type": "completer",
   "phrase": "___ bus arrive.",
   "reponse": "Le",
   "choix": [
    "Le",
    "La",
    "Les"
   ],
   "expl": "Bus : masculin.\n\nOn dit **le**."
  },
  {
   "type": "completer",
   "phrase": "___ ordonnance est sur la table.",
   "reponse": "L'",
   "choix": [
    "L'",
    "La",
    "Le"
   ],
   "expl": "Ordonnance commence par **o**.\n\nOn dit **l'**."
  },
  {
   "type": "ordre",
   "phrase": "Le médecin arrive à dix heures.",
   "expl": "**Le** médecin.\n\n**Quand ?** → à dix heures"
  },
  {
   "type": "ordre",
   "phrase": "Les papiers sont dans le tiroir.",
   "expl": "**Les** papiers.\n\n**Où ?** → dans le tiroir"
  }
 ],
 "genre-2": [
  {
   "type": "ecouter",
   "phrase": "J'ai un fils et une fille.",
   "faux": [
    "J'ai deux fils.",
    "J'ai un fils et deux filles."
   ],
   "expl": "On entend **un fils** et **une fille**."
  },
  {
   "type": "ecouter",
   "phrase": "Je cherche une pharmacie.",
   "faux": [
    "Je cherche la pharmacie.",
    "Je cherche un pharmacien."
   ],
   "expl": "On entend **une pharmacie**."
  },
  {
   "type": "ecouter",
   "phrase": "Je n'ai pas de voiture.",
   "faux": [
    "J'ai une voiture.",
    "Je n'ai pas la voiture."
   ],
   "expl": "On entend **pas de voiture**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il y a des enfants dans la cour.",
   "vrai": true,
   "expl": "Plusieurs enfants : **des**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je n'ai pas un stylo.",
   "vrai": false,
   "correction": "Je n'ai pas de stylo.",
   "expl": "Avec ne… pas : **de**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai une question.",
   "vrai": true,
   "expl": "Question : féminin.\n\n**Une** question."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le bon petit mot",
   "paires": [
    [
     "fils",
     "un fils"
    ],
    [
     "fille",
     "une fille"
    ],
    [
     "enfants",
     "des enfants"
    ],
    [
     "ami",
     "un ami"
    ]
   ],
   "expl": "un, une, des."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase et la phrase avec pas",
   "paires": [
    [
     "J'ai une voiture.",
     "Je n'ai pas de voiture."
    ],
    [
     "Il a des enfants.",
     "Il n'a pas d'enfants."
    ],
    [
     "Elle a un chien.",
     "Elle n'a pas de chien."
    ],
    [
     "J'ai du travail.",
     "Je n'ai pas de travail."
    ]
   ],
   "expl": "Avec ne… pas : **de** ou **d'**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je voudrais un rendez-vous.",
   "faux": "Je voudrais une rendez-vous.",
   "expl": "Rendez-vous : masculin.\n\n**Un** rendez-vous."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il n'y a pas de pain.",
   "faux": "Il n'y a pas des pains.",
   "expl": "Avec ne… pas : **de**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle achète des tomates.",
   "faux": "Elle achète un tomates.",
   "expl": "Plusieurs tomates : **des**."
  },
  {
   "type": "completer",
   "phrase": "J'ai ___ idée.",
   "reponse": "une",
   "choix": [
    "une",
    "un",
    "des"
   ],
   "expl": "Idée : féminin.\n\n**Une** idée."
  },
  {
   "type": "completer",
   "phrase": "Nous n'avons pas ___ enfants.",
   "reponse": "d'",
   "choix": [
    "d'",
    "des",
    "les"
   ],
   "expl": "Avec ne… pas : **de**.\n\nAvant **e** : **d'**."
  },
  {
   "type": "ordre",
   "phrase": "Je cherche un appartement en ville.",
   "expl": "Je cherche **un** appartement.\n\nPas précis."
  },
  {
   "type": "ordre",
   "phrase": "Il n'y a pas de place.",
   "expl": "Avec ne… pas : **de** place."
  }
 ],
 "genre-3": [
  {
   "type": "ecouter",
   "phrase": "Mon voisin et ma voisine sont gentils.",
   "faux": [
    "Mon voisin est gentil.",
    "Mes voisins sont gentils."
   ],
   "expl": "On entend **voisin** et **voisine**."
  },
  {
   "type": "ecouter",
   "phrase": "La directrice de l'école m'a appelée.",
   "faux": [
    "Le directeur de l'école m'a appelée.",
    "La maîtresse de l'école m'a appelée."
   ],
   "expl": "On entend **la directrice**."
  },
  {
   "type": "ecouter",
   "phrase": "Elle est pharmacienne.",
   "faux": [
    "Il est pharmacien.",
    "Elle est infirmière."
   ],
   "expl": "On entend **pharmacienne**."
  },
  {
   "type": "vraifaux",
   "phrase": "La vendeuse est souriante.",
   "vrai": true,
   "expl": "**-eur** devient **-euse**.\n\nVendeuse."
  },
  {
   "type": "vraifaux",
   "phrase": "Ma sœur est une bonne infirmier.",
   "vrai": false,
   "correction": "Ma sœur est une bonne infirmière.",
   "expl": "**-ier** devient **-ière**.\n\nInfirmière."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle est élève dans cette école.",
   "vrai": true,
   "expl": "Élève ne change pas.\n\nUn élève, une élève."
  },
  {
   "type": "associer",
   "consigne": "Reliez le masculin et le féminin",
   "paires": [
    [
     "un vendeur",
     "une vendeuse"
    ],
    [
     "un directeur",
     "une directrice"
    ],
    [
     "un boulanger",
     "une boulangère"
    ],
    [
     "un pharmacien",
     "une pharmacienne"
    ]
   ],
   "expl": "Les fins changent au féminin."
  },
  {
   "type": "associer",
   "consigne": "Reliez le masculin et le féminin",
   "paires": [
    [
     "un homme",
     "une femme"
    ],
    [
     "un père",
     "une mère"
    ],
    [
     "un garçon",
     "une fille"
    ],
    [
     "un frère",
     "une sœur"
    ]
   ],
   "expl": "Ces mots changent complètement."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ma cousine habite à Paris.",
   "faux": "Ma cousin habite à Paris.",
   "expl": "Une femme : cousin**e**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "C'est une bonne coiffeuse.",
   "faux": "C'est une bonne coiffeure.",
   "expl": "**-eur** devient **-euse**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle est infirmière.",
   "faux": "Elle est infirmier.",
   "expl": "Une femme : infirm**ière**."
  },
  {
   "type": "completer",
   "phrase": "un chanteur → une ___",
   "reponse": "chanteuse",
   "choix": [
    "chanteuse",
    "chantrice",
    "chanteure"
   ],
   "expl": "**-eur** devient **-euse**."
  },
  {
   "type": "completer",
   "phrase": "un acteur → une ___",
   "reponse": "actrice",
   "choix": [
    "actrice",
    "acteuse",
    "acteure"
   ],
   "expl": "**-teur** devient **-trice**."
  },
  {
   "type": "ordre",
   "phrase": "La boulangère ouvre à sept heures.",
   "expl": "**La** boulangère : féminin."
  },
  {
   "type": "ordre",
   "phrase": "Ma voisine est infirmière.",
   "expl": "**Ma** voisine.\n\nInfirm**ière**."
  }
 ],
 "genre-4": [
  {
   "type": "ecouter",
   "phrase": "Les prix ont augmenté.",
   "faux": [
    "Le prix a augmenté.",
    "Les prix ont baissé."
   ],
   "expl": "On entend **les prix ont**."
  },
  {
   "type": "ecouter",
   "phrase": "Il y a deux hôpitaux en ville.",
   "faux": [
    "Il y a un hôpital en ville.",
    "Il y a deux écoles en ville."
   ],
   "expl": "On entend **deux hôpitaux**."
  },
  {
   "type": "ecouter",
   "phrase": "Les enfants jouent avec leurs jouets.",
   "faux": [
    "L'enfant joue avec son jouet.",
    "Les enfants jouent avec le chien."
   ],
   "expl": "On entend **les enfants**, **leurs jouets**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai acheté des gâteaux.",
   "vrai": true,
   "expl": "**-eau** prend un **x**.\n\nDes gâteaux."
  },
  {
   "type": "vraifaux",
   "phrase": "Je lis des journals.",
   "vrai": false,
   "correction": "Je lis des journaux.",
   "expl": "**-al** devient **-aux**."
  },
  {
   "type": "vraifaux",
   "phrase": "Mes bras sont fatigués.",
   "vrai": true,
   "expl": "Bras finit par **s**.\n\nIl ne change pas."
  },
  {
   "type": "associer",
   "consigne": "Reliez un et plusieurs",
   "paires": [
    [
     "un gâteau",
     "des gâteaux"
    ],
    [
     "un journal",
     "des journaux"
    ],
    [
     "un bras",
     "des bras"
    ],
    [
     "une maison",
     "des maisons"
    ]
   ],
   "expl": "Le pluriel : **-s**, **-x** ou **-aux**."
  },
  {
   "type": "associer",
   "consigne": "Reliez un et plusieurs",
   "paires": [
    [
     "un animal",
     "des animaux"
    ],
    [
     "un jeu",
     "des jeux"
    ],
    [
     "un prix",
     "des prix"
    ],
    [
     "un chou",
     "des choux"
    ]
   ],
   "expl": "**-al** → **-aux**.\n\n**-eu** → **-x**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les bureaux sont fermés.",
   "faux": "Les bureaus sont fermés.",
   "expl": "**-eau** prend un **x**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai deux enfants.",
   "faux": "J'ai deux enfant.",
   "expl": "Plusieurs : on ajoute **-s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les animaux sont dans le jardin.",
   "faux": "Les animals sont dans le jardin.",
   "expl": "**-al** devient **-aux**."
  },
  {
   "type": "completer",
   "phrase": "un cadeau → des ___",
   "reponse": "cadeaux",
   "choix": [
    "cadeaux",
    "cadeaus",
    "cadeau"
   ],
   "expl": "**-eau** prend un **x**."
  },
  {
   "type": "completer",
   "phrase": "un nez → des ___",
   "reponse": "nez",
   "choix": [
    "nez",
    "nezs",
    "nezx"
   ],
   "expl": "Nez finit par **z**.\n\nIl ne change pas."
  },
  {
   "type": "ordre",
   "phrase": "Les journaux sont sur la table.",
   "expl": "Les journ**aux**.\n\n**Où ?** → sur la table"
  },
  {
   "type": "ordre",
   "phrase": "Mes enfants aiment les jeux.",
   "expl": "Les je**ux** : avec un **x**."
  }
 ],
 "genre-5": [
  {
   "type": "ecouter",
   "phrase": "Un petit garçon et une petite fille.",
   "faux": [
    "Deux petits garçons.",
    "Une petite fille et un grand garçon."
   ],
   "expl": "On entend **petit** et **petite**."
  },
  {
   "type": "ecouter",
   "phrase": "Elle est contente.",
   "faux": [
    "Il est content.",
    "Elle est fatiguée."
   ],
   "expl": "On entend **contente**."
  },
  {
   "type": "ecouter",
   "phrase": "C'est une belle maison.",
   "faux": [
    "C'est un beau jardin.",
    "C'est une grande maison."
   ],
   "expl": "On entend **belle maison**."
  },
  {
   "type": "vraifaux",
   "phrase": "Les enfants sont fatigués.",
   "vrai": true,
   "expl": "Plusieurs enfants : fatigué**s**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ma fille est malade.",
   "vrai": true,
   "expl": "Malade finit par **e**.\n\nIl ne change pas."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle a une robe blanc.",
   "vrai": false,
   "correction": "Elle a une robe blanche.",
   "expl": "Blanc au féminin : **blanche**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le masculin et le féminin",
   "paires": [
    [
     "beau",
     "belle"
    ],
    [
     "nouveau",
     "nouvelle"
    ],
    [
     "vieux",
     "vieille"
    ],
    [
     "blanc",
     "blanche"
    ]
   ],
   "expl": "Ces mots changent beaucoup."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "un garçon",
     "content"
    ],
    [
     "une fille",
     "contente"
    ],
    [
     "des garçons",
     "contents"
    ],
    [
     "des filles",
     "contentes"
    ]
   ],
   "expl": "Féminin : **-e**.\n\nPlusieurs : **-s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "La soupe est chaude.",
   "faux": "La soupe est chaud.",
   "expl": "Soupe : féminin.\n\nChaud**e**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai un vieux vélo.",
   "faux": "J'ai un vieille vélo.",
   "expl": "Vélo : masculin.\n\n**Vieux**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mes filles sont grandes.",
   "faux": "Mes filles sont grands.",
   "expl": "Filles : féminin, plusieurs.\n\nGrand**es**."
  },
  {
   "type": "completer",
   "phrase": "La maîtresse est très ___.",
   "reponse": "gentille",
   "choix": [
    "gentille",
    "gentil",
    "gentils"
   ],
   "expl": "Féminin : gentil**le**."
  },
  {
   "type": "completer",
   "phrase": "Les chemises sont ___.",
   "reponse": "propres",
   "choix": [
    "propres",
    "propre",
    "propresse"
   ],
   "expl": "Propre finit par **e**.\n\nPlusieurs : **-s**."
  },
  {
   "type": "ordre",
   "phrase": "Nous avons une nouvelle voiture.",
   "expl": "Voiture : féminin.\n\n**Nouvelle**."
  },
  {
   "type": "ordre",
   "phrase": "Les rues sont très propres.",
   "expl": "Plusieurs rues : propre**s**."
  }
 ],
 "genre-6": [
  {
   "type": "ecouter",
   "phrase": "Je bois de l'eau.",
   "faux": [
    "Je bois du lait.",
    "Je bois de la soupe."
   ],
   "expl": "On entend **de l'eau**."
  },
  {
   "type": "ecouter",
   "phrase": "Je viens du travail.",
   "faux": [
    "Je vais au travail.",
    "Je viens de l'école."
   ],
   "expl": "On entend **du travail**."
  },
  {
   "type": "ecouter",
   "phrase": "Il parle aux enfants.",
   "faux": [
    "Il parle à l'enfant.",
    "Il parle des enfants."
   ],
   "expl": "On entend **aux enfants**."
  },
  {
   "type": "vraifaux",
   "phrase": "Tu veux du café ?",
   "vrai": true,
   "expl": "Café : masculin.\n\n**Du** café."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais à le marché.",
   "vrai": false,
   "correction": "Je vais au marché.",
   "expl": "À le devient **au**."
  },
  {
   "type": "vraifaux",
   "phrase": "Un kilo de tomates, s'il vous plaît.",
   "vrai": true,
   "expl": "Un kilo : une quantité.\n\n**De** tomates."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le bon petit mot",
   "paires": [
    [
     "pain",
     "du pain"
    ],
    [
     "soupe",
     "de la soupe"
    ],
    [
     "eau",
     "de l'eau"
    ],
    [
     "frites",
     "des frites"
    ]
   ],
   "expl": "du, de la, de l', des."
  },
  {
   "type": "associer",
   "consigne": "Reliez les deux mots et le mot qui les remplace",
   "paires": [
    [
     "à + le",
     "au"
    ],
    [
     "à + les",
     "aux"
    ],
    [
     "de + le",
     "du"
    ],
    [
     "de + les",
     "des"
    ]
   ],
   "expl": "À le, de le n'existent pas."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je mets du sel dans la soupe.",
   "faux": "Je mets de le sel dans la soupe.",
   "expl": "De le devient **du**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je téléphone au médecin.",
   "faux": "Je téléphone à le médecin.",
   "expl": "À le devient **au**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Une bouteille de lait.",
   "faux": "Une bouteille du lait.",
   "expl": "Une quantité : **de** lait."
  },
  {
   "type": "completer",
   "phrase": "Je voudrais ___ confiture.",
   "reponse": "de la",
   "choix": [
    "de la",
    "du",
    "des"
   ],
   "expl": "Confiture : féminin.\n\n**De la** confiture."
  },
  {
   "type": "completer",
   "phrase": "Les enfants vont ___ toilettes.",
   "reponse": "aux",
   "choix": [
    "aux",
    "au",
    "à la"
   ],
   "expl": "Les toilettes : plusieurs.\n\n**Aux** toilettes."
  },
  {
   "type": "ordre",
   "phrase": "Je rentre du marché avec des légumes.",
   "expl": "**Du** marché.\n\n**Des** légumes."
  },
  {
   "type": "ordre",
   "phrase": "Il n'y a plus de sucre.",
   "expl": "Avec ne… plus : **de** sucre."
  }
 ],
 "homophones-1": [
  {
   "type": "ecouter",
   "phrase": "Il a faim.",
   "faux": [
    "Il à faim.",
    "Il est faim."
   ],
   "expl": "Il **avait** faim.\n\nDonc : **a**."
  },
  {
   "type": "ecouter",
   "phrase": "Elle est malade.",
   "faux": [
    "Elle et malade.",
    "Elle ait malade."
   ],
   "expl": "Elle **était** malade.\n\nDonc : **est**."
  },
  {
   "type": "ecouter",
   "phrase": "Je vais à l'école.",
   "faux": [
    "Je vais a l'école.",
    "Je vais as l'école."
   ],
   "expl": "L'école est un lieu.\n\nDonc : **à**."
  },
  {
   "type": "vraifaux",
   "phrase": "Du pain et du lait.",
   "vrai": true,
   "expl": "On relie deux choses : **et**."
  },
  {
   "type": "vraifaux",
   "phrase": "Mon fils à dix ans.",
   "vrai": false,
   "correction": "Mon fils a dix ans.",
   "expl": "Mon fils **avait** dix ans.\n\nDonc : **a**."
  },
  {
   "type": "vraifaux",
   "phrase": "La voiture et prête.",
   "vrai": false,
   "correction": "La voiture est prête.",
   "expl": "La voiture **était** prête.\n\nDonc : **est**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase et le bon mot",
   "paires": [
    [
     "Il … froid.",
     "a"
    ],
    [
     "Je vais … Paris.",
     "à"
    ],
    [
     "Elle … là.",
     "est"
    ],
    [
     "Toi … moi.",
     "et"
    ]
   ],
   "expl": "Avait : **a**.\n\nLieu : **à**.\n\nÉtait : **est**.\n\nRelier : **et**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son rôle",
   "paires": [
    [
     "a",
     "le verbe avoir"
    ],
    [
     "à",
     "un lieu, un moment"
    ],
    [
     "est",
     "le verbe être"
    ],
    [
     "et",
     "pour relier"
    ]
   ],
   "expl": "4 mots qui se disent presque pareil."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le rendez-vous est à neuf heures.",
   "faux": "Le rendez-vous et a neuf heures.",
   "expl": "**Est** : était.\n\n**À** : un moment."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle a une voiture et un vélo.",
   "faux": "Elle à une voiture est un vélo.",
   "expl": "**A** : avait.\n\n**Et** : on relie."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il est à la maison.",
   "faux": "Il et a la maison.",
   "expl": "**Est** : était.\n\n**À** : un lieu."
  },
  {
   "type": "completer",
   "phrase": "Ma fille ___ six ans.",
   "reponse": "a",
   "choix": [
    "a",
    "à",
    "est"
   ],
   "expl": "Ma fille **avait** six ans.\n\nDonc : **a**."
  },
  {
   "type": "completer",
   "phrase": "Le garage ___ fermé.",
   "reponse": "est",
   "choix": [
    "est",
    "et",
    "a"
   ],
   "expl": "Le garage **était** fermé.\n\nDonc : **est**."
  },
  {
   "type": "ordre",
   "phrase": "Mon mari est au travail à huit heures.",
   "expl": "**Est** : était.\n\n**À** : un moment."
  },
  {
   "type": "ordre",
   "phrase": "Elle a mal à la tête.",
   "expl": "**A** : avait.\n\n**À** la tête."
  }
 ],
 "homophones-2": [
  {
   "type": "ecouter",
   "phrase": "Ils sont partis.",
   "faux": [
    "Ils son partis.",
    "Ils ont partis."
   ],
   "expl": "Ils **étaient** partis.\n\nDonc : **sont**."
  },
  {
   "type": "ecouter",
   "phrase": "On mange à midi.",
   "faux": [
    "Ont mange à midi.",
    "Om mange à midi."
   ],
   "expl": "**Il** mange à midi.\n\nDonc : **on**."
  },
  {
   "type": "ecouter",
   "phrase": "Son fils est là.",
   "faux": [
    "Sont fils est là.",
    "Sons fils est là."
   ],
   "expl": "**Mon** fils est là.\n\nDonc : **son**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ils ont fini.",
   "vrai": true,
   "expl": "Ils **avaient** fini.\n\nDonc : **ont**."
  },
  {
   "type": "vraifaux",
   "phrase": "Les magasins son fermés.",
   "vrai": false,
   "correction": "Les magasins sont fermés.",
   "expl": "Les magasins **étaient** fermés.\n\nDonc : **sont**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ont va au parc ?",
   "vrai": false,
   "correction": "On va au parc ?",
   "expl": "**Il** va au parc.\n\nDonc : **on**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase et le bon mot",
   "paires": [
    [
     "Ils … là.",
     "sont"
    ],
    [
     "Ils … faim.",
     "ont"
    ],
    [
     "… sac est rouge.",
     "Son"
    ],
    [
     "… part demain.",
     "On"
    ]
   ],
   "expl": "Étaient : **sont**.\n\nAvaient : **ont**.\n\nMon : **son**.\n\nIl : **on**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le mot qui le remplace",
   "paires": [
    [
     "sont",
     "étaient"
    ],
    [
     "ont",
     "avaient"
    ],
    [
     "son",
     "mon"
    ],
    [
     "on",
     "il"
    ]
   ],
   "expl": "On remplace pour trouver le bon mot."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ils ont rendez-vous chez le médecin.",
   "faux": "Ils sont rendez-vous chez le médecin.",
   "expl": "Ils **avaient** rendez-vous.\n\nDonc : **ont**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle parle avec son voisin.",
   "faux": "Elle parle avec sont voisin.",
   "expl": "Avec **mon** voisin.\n\nDonc : **son**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "On attend le bus.",
   "faux": "Ont attend le bus.",
   "expl": "**Il** attend le bus.\n\nDonc : **on**."
  },
  {
   "type": "completer",
   "phrase": "Mes enfants ___ à l'école.",
   "reponse": "sont",
   "choix": [
    "sont",
    "son",
    "ont"
   ],
   "expl": "Mes enfants **étaient** à l'école.\n\nDonc : **sont**."
  },
  {
   "type": "completer",
   "phrase": "Les clients ___ payé.",
   "reponse": "ont",
   "choix": [
    "ont",
    "on",
    "sont"
   ],
   "expl": "Les clients **avaient** payé.\n\nDonc : **ont**."
  },
  {
   "type": "ordre",
   "phrase": "Ils sont avec leur mère.",
   "expl": "Ils **sont** : ils étaient."
  },
  {
   "type": "ordre",
   "phrase": "On a oublié son cartable.",
   "expl": "**On** : il.\n\n**Son** : mon."
  }
 ],
 "homophones-3": [
  {
   "type": "ecouter",
   "phrase": "Où est la gare ?",
   "faux": [
    "Ou est la gare ?",
    "Où est là gare ?"
   ],
   "expl": "Un lieu : **où**.\n\nAvant gare : **la**."
  },
  {
   "type": "ecouter",
   "phrase": "Thé ou café ?",
   "faux": [
    "Thé où café ?",
    "Thé au café ?"
   ],
   "expl": "Ou bien : **ou** sans accent."
  },
  {
   "type": "ecouter",
   "phrase": "La voiture est là.",
   "faux": [
    "Là voiture est la.",
    "La voiture est la."
   ],
   "expl": "**La** voiture : un nom.\n\n**Là** : un endroit."
  },
  {
   "type": "vraifaux",
   "phrase": "Il l'a réparée hier.",
   "vrai": true,
   "expl": "Il **l'avait** réparée.\n\nDonc : **l'a**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ou habites-tu ?",
   "vrai": false,
   "correction": "Où habites-tu ?",
   "expl": "On demande un lieu.\n\n**Où** avec un accent."
  },
  {
   "type": "vraifaux",
   "phrase": "Je suis là depuis une heure.",
   "vrai": true,
   "expl": "Un endroit : **là**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son sens",
   "paires": [
    [
     "où",
     "un lieu"
    ],
    [
     "ou",
     "ou bien"
    ],
    [
     "là",
     "un endroit"
    ],
    [
     "l'a",
     "l'avait"
    ]
   ],
   "expl": "Ces mots se disent pareil."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase et le bon mot",
   "paires": [
    [
     "… vas-tu ?",
     "Où"
    ],
    [
     "Lundi … mardi ?",
     "ou"
    ],
    [
     "Il est … !",
     "là"
    ],
    [
     "Elle … vue.",
     "l'a"
    ]
   ],
   "expl": "Lieu : **où**.\n\nOu bien : **ou**.\n\nEndroit : **là**.\n\nL'avait : **l'a**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Tu viens à pied ou en bus ?",
   "faux": "Tu viens à pied où en bus ?",
   "expl": "Ou bien : **ou**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "La lettre ? Je l'ai lue.",
   "faux": "La lettre ? Je là lue.",
   "expl": "Je **l'**ai lue : la lettre."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mets ton manteau là.",
   "faux": "Mets ton manteau la.",
   "expl": "Un endroit : **là**."
  },
  {
   "type": "completer",
   "phrase": "Le colis ? Le facteur ___ apporté.",
   "reponse": "l'a",
   "choix": [
    "l'a",
    "la",
    "là"
   ],
   "expl": "Il **l'avait** apporté.\n\nDonc : **l'a**."
  },
  {
   "type": "completer",
   "phrase": "Tu veux rester ___ partir ?",
   "reponse": "ou",
   "choix": [
    "ou",
    "où",
    "au"
   ],
   "expl": "Ou bien : **ou**."
  },
  {
   "type": "ordre",
   "phrase": "Où est la clé de la voiture ?",
   "expl": "**Où** : un lieu.\n\n**La** clé."
  },
  {
   "type": "ordre",
   "phrase": "Le médecin est là ce matin.",
   "expl": "**Là** : un endroit."
  }
 ],
 "homophones-4": [
  {
   "type": "ecouter",
   "phrase": "Ce matin, il pleut.",
   "faux": [
    "Se matin, il pleut.",
    "Ces matin, il pleut."
   ],
   "expl": "Avant le nom matin : **ce**."
  },
  {
   "type": "ecouter",
   "phrase": "Il se lave.",
   "faux": [
    "Il ce lave.",
    "Il ces lave."
   ],
   "expl": "Avant le verbe laver : **se**."
  },
  {
   "type": "ecouter",
   "phrase": "C'est prêt.",
   "faux": [
    "S'est prêt.",
    "Ces prêt."
   ],
   "expl": "**Cela est** prêt.\n\nDonc : **c'est**."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle range ses affaires.",
   "vrai": true,
   "expl": "Elle range **mes** affaires.\n\nDonc : **ses**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il c'est trompé.",
   "vrai": false,
   "correction": "Il s'est trompé.",
   "expl": "Se tromper, au passé.\n\nDonc : **s'est**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ces pneus sont usés.",
   "vrai": true,
   "expl": "On montre les pneus : **ces**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son rôle",
   "paires": [
    [
     "se",
     "avant un verbe"
    ],
    [
     "ce",
     "avant un nom"
    ],
    [
     "ses",
     "à lui, à elle"
    ],
    [
     "c'est",
     "cela est"
    ]
   ],
   "expl": "Ces mots se disent presque pareil."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Il se",
     "lève tôt."
    ],
    [
     "Ce",
     "soir, je sors."
    ],
    [
     "Elle s'est",
     "levée."
    ],
    [
     "C'est",
     "mon fils."
    ]
   ],
   "expl": "**Se** + verbe.\n\n**Ce** + nom.\n\n**S'est** + verbe au passé.\n\n**C'est** : cela est."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ce garage est ouvert le samedi.",
   "faux": "Se garage est ouvert le samedi.",
   "expl": "Avant le nom garage : **ce**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il a oublié ses lunettes.",
   "faux": "Il a oublié ces lunettes à lui.",
   "expl": "À lui : **ses**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "C'est trop cher.",
   "faux": "S'est trop cher.",
   "expl": "**Cela est** trop cher.\n\nDonc : **c'est**."
  },
  {
   "type": "completer",
   "phrase": "Mon fils ___ couche à neuf heures.",
   "reponse": "se",
   "choix": [
    "se",
    "ce",
    "ses"
   ],
   "expl": "Avant le verbe coucher : **se**."
  },
  {
   "type": "completer",
   "phrase": "Elle ___ trompée de bus.",
   "reponse": "s'est",
   "choix": [
    "s'est",
    "c'est",
    "ses"
   ],
   "expl": "Se tromper, au passé.\n\nDonc : **s'est**."
  },
  {
   "type": "ordre",
   "phrase": "Ce soir, il se repose.",
   "expl": "**Ce** soir : un nom.\n\n**Se** repose : un verbe."
  },
  {
   "type": "ordre",
   "phrase": "C'est l'école de ses enfants.",
   "expl": "**C'est** : cela est.\n\n**Ses** enfants : à lui."
  }
 ],
 "homophones-5": [
  {
   "type": "ecouter",
   "phrase": "Je cherche mes lunettes.",
   "faux": [
    "Je cherche mais lunettes.",
    "Je cherche mets lunettes."
   ],
   "expl": "Les lunettes à moi : **mes**."
  },
  {
   "type": "ecouter",
   "phrase": "Il peut attendre.",
   "faux": [
    "Il peu attendre.",
    "Il peux attendre."
   ],
   "expl": "Il **pouvait**.\n\nAvec il : **peut**."
  },
  {
   "type": "ecouter",
   "phrase": "Un peu de sel.",
   "faux": [
    "Un peut de sel.",
    "Un peux de sel."
   ],
   "expl": "Pas beaucoup : **peu**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il est gentil, mais il parle vite.",
   "vrai": true,
   "expl": "Le contraire : **mais**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je peut venir demain.",
   "vrai": false,
   "correction": "Je peux venir demain.",
   "expl": "Avec **je** : **peux**."
  },
  {
   "type": "vraifaux",
   "phrase": "Mes enfants dorment.",
   "vrai": true,
   "expl": "Les enfants à moi : **mes**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son sens",
   "paires": [
    [
     "mes",
     "à moi"
    ],
    [
     "mais",
     "le contraire"
    ],
    [
     "peu",
     "pas beaucoup"
    ],
    [
     "peut",
     "il pouvait"
    ]
   ],
   "expl": "Ces mots se disent pareil."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et le verbe pouvoir",
   "paires": [
    [
     "je",
     "peux"
    ],
    [
     "il",
     "peut"
    ],
    [
     "nous",
     "pouvons"
    ],
    [
     "vous",
     "pouvez"
    ]
   ],
   "expl": "Je, tu : **peux**.\n\nIl : **peut**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai peu de temps.",
   "faux": "J'ai peut de temps.",
   "expl": "Pas beaucoup : **peu**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Tu peux fermer la porte ?",
   "faux": "Tu peut fermer la porte ?",
   "expl": "Avec **tu** : **peux**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mes parents viennent ce soir.",
   "faux": "Mais parents viennent ce soir.",
   "expl": "Les parents à moi : **mes**."
  },
  {
   "type": "completer",
   "phrase": "Elle ___ venir à dix heures.",
   "reponse": "peut",
   "choix": [
    "peut",
    "peu",
    "peux"
   ],
   "expl": "Elle **pouvait**.\n\nAvec elle : **peut**."
  },
  {
   "type": "completer",
   "phrase": "C'est loin, ___ on y va.",
   "reponse": "mais",
   "choix": [
    "mais",
    "mes",
    "met"
   ],
   "expl": "Le contraire : **mais**."
  },
  {
   "type": "ordre",
   "phrase": "Je peux parler un peu plus fort.",
   "expl": "Je **peux** : pouvoir.\n\nUn **peu** : pas beaucoup."
  },
  {
   "type": "ordre",
   "phrase": "Mes clés sont là, mais pas mon sac.",
   "expl": "**Mes** : à moi.\n\n**Mais** : le contraire."
  }
 ],
 "homophones-6": [
  {
   "type": "ecouter",
   "phrase": "Je vais manger.",
   "faux": [
    "Je vais mangé.",
    "Je vais mangez."
   ],
   "expl": "Je vais **vendre**.\n\nDonc : **-er**."
  },
  {
   "type": "ecouter",
   "phrase": "J'ai mangé.",
   "faux": [
    "J'ai manger.",
    "J'ai mangez."
   ],
   "expl": "J'ai **vendu**.\n\nDonc : **-é**."
  },
  {
   "type": "ecouter",
   "phrase": "Vous mangez à midi ?",
   "faux": [
    "Vous manger à midi ?",
    "Vous mangé à midi ?"
   ],
   "expl": "Avec **vous** : **-ez**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il faut appeler le client.",
   "vrai": true,
   "expl": "Il faut **vendre**.\n\nDonc : **-er**."
  },
  {
   "type": "vraifaux",
   "phrase": "Le client a appeler.",
   "vrai": false,
   "correction": "Le client a appelé.",
   "expl": "Il a **vendu**.\n\nDonc : **-é**."
  },
  {
   "type": "vraifaux",
   "phrase": "Vous travaillez demain ?",
   "vrai": true,
   "expl": "Avec **vous** : **-ez**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Je vais",
     "parler."
    ],
    [
     "J'ai",
     "parlé."
    ],
    [
     "Vous",
     "parlez."
    ],
    [
     "Elle est",
     "arrivée."
    ]
   ],
   "expl": "**-er** : vendre.\n\n**-é** : vendu.\n\n**-ez** : vous."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et la fin",
   "paires": [
    [
     "je vais…",
     "-er"
    ],
    [
     "j'ai…",
     "-é"
    ],
    [
     "vous…",
     "-ez"
    ],
    [
     "elle est…",
     "-ée"
    ]
   ],
   "expl": "Avec **être** et une femme : **-ée**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je dois signer le contrat.",
   "faux": "Je dois signé le contrat.",
   "expl": "Je dois **vendre**.\n\nDonc : **-er**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous avons fermé le garage.",
   "faux": "Nous avons fermer le garage.",
   "expl": "Nous avons **vendu**.\n\nDonc : **-é**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Vous cherchez la mairie ?",
   "faux": "Vous chercher la mairie ?",
   "expl": "Avec **vous** : **-ez**."
  },
  {
   "type": "completer",
   "phrase": "Je vais ___ le médecin.",
   "reponse": "appeler",
   "choix": [
    "appeler",
    "appelé",
    "appelez"
   ],
   "expl": "Je vais **vendre**.\n\nDonc : **-er**."
  },
  {
   "type": "completer",
   "phrase": "Elle a ___ la porte.",
   "reponse": "fermé",
   "choix": [
    "fermé",
    "fermer",
    "fermez"
   ],
   "expl": "Elle a **vendu**.\n\nDonc : **-é**."
  },
  {
   "type": "ordre",
   "phrase": "Vous pouvez entrer.",
   "expl": "Vous pouvez **vendre**.\n\nDonc : entr**er**."
  },
  {
   "type": "ordre",
   "phrase": "Ma fille est rentrée tard.",
   "expl": "Elle est **vendue**.\n\nUne femme : rentr**ée**."
  }
 ],
 "mots-1": [
  {
   "type": "ecouter",
   "phrase": "Les enfants dorment dans la chambre.",
   "faux": [
    "Les enfants dorment dans la cuisine.",
    "Les enfants mangent dans la chambre."
   ],
   "expl": "On dort dans la **chambre**."
  },
  {
   "type": "ecouter",
   "phrase": "Le chauffage ne marche pas.",
   "faux": [
    "Le chauffage marche bien.",
    "La fenêtre ne ferme pas."
   ],
   "expl": "On entend : **ne marche pas**."
  },
  {
   "type": "ecouter",
   "phrase": "Je paie le loyer le 5 du mois.",
   "faux": [
    "Je paie le loyer le 15 du mois.",
    "Je paie la facture le 5 du mois."
   ],
   "expl": "Le **loyer** : l'argent pour la maison.\n\nLe 5 du mois."
  },
  {
   "type": "vraifaux",
   "phrase": "Je prends une douche dans la salle de bain.",
   "vrai": true,
   "expl": "La douche est dans la **salle de bain**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je dors dans la cuisine.",
   "vrai": false,
   "correction": "Je dors dans la chambre.",
   "expl": "On dort dans la **chambre**."
  },
  {
   "type": "vraifaux",
   "phrase": "Les toilettes sont au fond du couloir.",
   "vrai": true,
   "expl": "On dit toujours **les** toilettes."
  },
  {
   "type": "associer",
   "consigne": "Reliez la pièce et ce qu'on y fait",
   "paires": [
    [
     "la cuisine",
     "préparer le repas"
    ],
    [
     "la chambre",
     "dormir"
    ],
    [
     "la salle de bain",
     "se laver"
    ],
    [
     "le salon",
     "regarder la télé"
    ]
   ],
   "expl": "Chaque pièce a son usage."
  },
  {
   "type": "associer",
   "consigne": "Reliez la chose et ce qu'elle fait",
   "paires": [
    [
     "la clé",
     "ouvrir la porte"
    ],
    [
     "le chauffage",
     "chauffer la maison"
    ],
    [
     "la lampe",
     "éclairer"
    ],
    [
     "la fenêtre",
     "faire entrer l'air"
    ]
   ],
   "expl": "Chaque chose de la maison a un rôle."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ouvre la porte avec la clé.",
   "faux": "J'ouvre la porte avec la lampe.",
   "expl": "La **clé** ouvre la porte."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il fait noir, j'allume la lumière.",
   "faux": "Il fait noir, j'éteins la lumière.",
   "expl": "Il fait noir.\n\nOn **allume** la lumière."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le propriétaire répare la fuite d'eau.",
   "faux": "Le propriétaire répare le loyer.",
   "expl": "On répare une **fuite**.\n\nLe loyer, on le paie."
  },
  {
   "type": "completer",
   "phrase": "Nous regardons la télé dans ___.",
   "reponse": "le salon",
   "choix": [
    "le salon",
    "la douche",
    "le frigo"
   ],
   "expl": "La télé est dans **le salon**."
  },
  {
   "type": "completer",
   "phrase": "Il y a une fuite d'eau sous ___.",
   "reponse": "l'évier",
   "choix": [
    "l'évier",
    "le lit",
    "la porte"
   ],
   "expl": "L'eau coule sous **l'évier**.\n\nDans la cuisine."
  },
  {
   "type": "ordre",
   "phrase": "La fenêtre de la chambre est cassée.",
   "expl": "**Quoi ?** → La fenêtre de la chambre\n\n**Comment ?** → est cassée"
  },
  {
   "type": "ordre",
   "phrase": "Je ferme la porte à clé le soir.",
   "expl": "Je ferme la porte.\n\n**Comment ?** → à clé\n\n**Quand ?** → le soir"
  }
 ],
 "mots-2": [
  {
   "type": "ecouter",
   "phrase": "On déjeune à midi et demi.",
   "faux": [
    "On dîne à midi et demi.",
    "On déjeune à minuit et demi."
   ],
   "expl": "À midi, on **déjeune**."
  },
  {
   "type": "ecouter",
   "phrase": "Mets le lait dans le frigo.",
   "faux": [
    "Mets le lait dans le four.",
    "Mets le pain dans le frigo."
   ],
   "expl": "Le lait va dans le **frigo**."
  },
  {
   "type": "ecouter",
   "phrase": "Le gâteau cuit dans le four.",
   "faux": [
    "Le gâteau cuit dans le frigo.",
    "Le poulet cuit dans le four."
   ],
   "expl": "On cuit le gâteau dans le **four**."
  },
  {
   "type": "vraifaux",
   "phrase": "Le soir, nous dînons en famille.",
   "vrai": true,
   "expl": "Le soir, on **dîne**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je bois mon café avec une fourchette.",
   "vrai": false,
   "correction": "Je bois mon café dans une tasse.",
   "expl": "Le café se boit dans une **tasse**."
  },
  {
   "type": "vraifaux",
   "phrase": "Les enfants prennent le goûter à quatre heures.",
   "vrai": true,
   "expl": "L'après-midi, les enfants prennent le **goûter**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le moment et le repas",
   "paires": [
    [
     "le matin",
     "le petit-déjeuner"
    ],
    [
     "à midi",
     "le déjeuner"
    ],
    [
     "à quatre heures",
     "le goûter"
    ],
    [
     "le soir",
     "le dîner"
    ]
   ],
   "expl": "Il y a 4 repas dans la journée."
  },
  {
   "type": "associer",
   "consigne": "Reliez l'objet et ce qu'il fait",
   "paires": [
    [
     "le couteau",
     "couper"
    ],
    [
     "la cuillère",
     "manger la soupe"
    ],
    [
     "le verre",
     "boire"
    ],
    [
     "la poêle",
     "cuire les œufs"
    ]
   ],
   "expl": "Chaque objet de la cuisine a un rôle."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je mets la table avant le repas.",
   "faux": "Je mets la table après le repas.",
   "expl": "On met la table **avant** de manger."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je lave la vaisselle après le dîner.",
   "faux": "Je lave le dîner après la vaisselle.",
   "expl": "On lave **la vaisselle**.\n\nLes assiettes, les verres."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous déjeunons à la cantine.",
   "faux": "Nous déjeuner à la cantine.",
   "expl": "Avec **nous** : nous **déjeunons**."
  },
  {
   "type": "completer",
   "phrase": "Je verse l'eau dans ___.",
   "reponse": "un verre",
   "choix": [
    "un verre",
    "un couteau",
    "une poêle"
   ],
   "expl": "L'eau va dans **un verre**."
  },
  {
   "type": "completer",
   "phrase": "Le matin, je ___ un café.",
   "reponse": "bois",
   "choix": [
    "bois",
    "coupe",
    "dors"
   ],
   "expl": "Le café, on le **boit**."
  },
  {
   "type": "ordre",
   "phrase": "Je prépare le petit-déjeuner pour les enfants.",
   "expl": "Je prépare **quoi ?** → le petit-déjeuner\n\n**Pour qui ?** → pour les enfants"
  },
  {
   "type": "ordre",
   "phrase": "Nous dînons à huit heures du soir.",
   "expl": "**Qui ?** → Nous\n\n**L'action** → dînons\n\n**Quand ?** → à huit heures du soir"
  }
 ],
 "mots-3": [
  {
   "type": "ecouter",
   "phrase": "J'ai mal à la tête depuis ce matin.",
   "faux": [
    "J'ai mal au ventre depuis ce matin.",
    "J'ai mal à la tête depuis hier."
   ],
   "expl": "On entend : **à la tête**.\n\nDepuis **ce matin**."
  },
  {
   "type": "ecouter",
   "phrase": "Mon fils a de la fièvre.",
   "faux": [
    "Mon fils a de la chance.",
    "Ma fille a de la fièvre."
   ],
   "expl": "On entend : **mon fils**, **fièvre**."
  },
  {
   "type": "ecouter",
   "phrase": "Il a mal aux dents.",
   "faux": [
    "Il a mal au dos.",
    "Il a mal aux pieds."
   ],
   "expl": "On entend : **aux dents**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai mal au genou.",
   "vrai": true,
   "expl": "**Le** genou : on dit **au** genou."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai mal à le bras.",
   "vrai": false,
   "correction": "J'ai mal au bras.",
   "expl": "À + le devient **au**.\n\nAu bras."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle est de la fièvre.",
   "vrai": false,
   "correction": "Elle a de la fièvre.",
   "expl": "La fièvre, on l'**a**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la partie du corps et le bon petit mot",
   "paires": [
    [
     "la tête",
     "à la tête"
    ],
    [
     "le ventre",
     "au ventre"
    ],
    [
     "les yeux",
     "aux yeux"
    ],
    [
     "l'oreille",
     "à l'oreille"
    ]
   ],
   "expl": "**la** → à la\n\n**le** → au\n\n**les** → aux\n\n**l'** → à l'"
  },
  {
   "type": "associer",
   "consigne": "Reliez le problème et la solution",
   "paires": [
    [
     "J'ai de la fièvre.",
     "Je prends un médicament."
    ],
    [
     "J'ai mal aux dents.",
     "Je vais chez le dentiste."
    ],
    [
     "Je suis malade.",
     "J'appelle le médecin."
    ],
    [
     "J'ai l'ordonnance.",
     "Je vais à la pharmacie."
    ]
   ],
   "expl": "Chaque problème a une solution."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai mal aux pieds.",
   "faux": "J'ai mal à les pieds.",
   "expl": "À + les devient **aux**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je prends rendez-vous chez le médecin.",
   "faux": "Je prends rendez-vous chez la pharmacie.",
   "expl": "**Chez** + une personne : chez le médecin."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le pharmacien me donne les médicaments.",
   "faux": "Le pharmacien me donne la fièvre.",
   "expl": "À la pharmacie, on reçoit les **médicaments**."
  },
  {
   "type": "completer",
   "phrase": "Il tousse, il a mal à ___.",
   "reponse": "la gorge",
   "choix": [
    "la gorge",
    "le pied",
    "les cheveux"
   ],
   "expl": "Quand on tousse : mal à **la gorge**."
  },
  {
   "type": "completer",
   "phrase": "J'ai mal ___ ventre.",
   "reponse": "au",
   "choix": [
    "au",
    "à la",
    "aux"
   ],
   "expl": "**Le** ventre.\n\nOn dit **au** ventre."
  },
  {
   "type": "ordre",
   "phrase": "Ma fille a mal à l'oreille.",
   "expl": "**Qui ?** → Ma fille\n\n**Quoi ?** → a mal\n\n**Où ?** → à l'oreille"
  },
  {
   "type": "ordre",
   "phrase": "Je dois prendre ce médicament le soir.",
   "expl": "Je dois prendre **quoi ?** → ce médicament\n\n**Quand ?** → le soir"
  }
 ],
 "mots-4": [
  {
   "type": "ecouter",
   "phrase": "Mets ton manteau, il fait froid.",
   "faux": [
    "Enlève ton manteau, il fait chaud.",
    "Mets ton bonnet, il fait froid."
   ],
   "expl": "On entend : **mets**, **manteau**."
  },
  {
   "type": "ecouter",
   "phrase": "Je cherche ce pantalon en taille 40.",
   "faux": [
    "Je cherche ce pantalon en taille 42.",
    "Je cherche cette robe en taille 40."
   ],
   "expl": "On entend : **pantalon**, **taille 40**."
  },
  {
   "type": "ecouter",
   "phrase": "Elle porte une robe bleue.",
   "faux": [
    "Elle porte une robe rouge.",
    "Elle met une jupe bleue."
   ],
   "expl": "On entend : **robe bleue**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je mets mes gants sur les mains.",
   "vrai": true,
   "expl": "Les gants vont sur les **mains**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je mets mes chaussures sur la tête.",
   "vrai": false,
   "correction": "Je mets mon bonnet sur la tête.",
   "expl": "Sur la tête : un **bonnet**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je chausse du 42.",
   "vrai": true,
   "expl": "Pour les chaussures : la **pointure**.\n\nJe chausse du 42."
  },
  {
   "type": "associer",
   "consigne": "Reliez le vêtement et la partie du corps",
   "paires": [
    [
     "le bonnet",
     "la tête"
    ],
    [
     "l'écharpe",
     "le cou"
    ],
    [
     "les gants",
     "les mains"
    ],
    [
     "les chaussettes",
     "les pieds"
    ]
   ],
   "expl": "Chaque vêtement a sa place."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et son sens",
   "paires": [
    [
     "mettre",
     "je le mets sur moi"
    ],
    [
     "porter",
     "je l'ai sur moi"
    ],
    [
     "enlever",
     "je le retire"
    ],
    [
     "essayer",
     "je le teste au magasin"
    ]
   ],
   "expl": "4 verbes pour les vêtements."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il fait chaud, j'enlève ma veste.",
   "faux": "Il fait chaud, je mets ma veste.",
   "expl": "Il fait chaud.\n\nOn **enlève** la veste."
  },
  {
   "type": "choisir",
   "consigne": "au magasin",
   "juste": "Est-ce que je peux essayer ce pull ?",
   "faux": "Est-ce que je peux porter ce pull au magasin ?",
   "expl": "Au magasin, on **essaie** avant d'acheter."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ce pantalon est trop petit pour moi.",
   "faux": "Ce pantalon est trop pointure pour moi.",
   "expl": "Trop **petit** ou trop **grand**."
  },
  {
   "type": "completer",
   "phrase": "Il pleut, je prends ___.",
   "reponse": "mon parapluie",
   "choix": [
    "mon parapluie",
    "mes lunettes",
    "mon pyjama"
   ],
   "expl": "Il pleut.\n\nOn prend **le parapluie**."
  },
  {
   "type": "completer",
   "phrase": "Pour dormir, je mets ___.",
   "reponse": "mon pyjama",
   "choix": [
    "mon pyjama",
    "mon manteau",
    "mes gants"
   ],
   "expl": "Pour dormir : **le pyjama**."
  },
  {
   "type": "ordre",
   "phrase": "Mon fils a besoin de nouvelles chaussures.",
   "expl": "**Qui ?** → Mon fils\n\n**Quoi ?** → a besoin de nouvelles chaussures"
  },
  {
   "type": "ordre",
   "phrase": "Je porte un pull parce qu'il fait froid.",
   "expl": "Je porte un pull.\n\n**Pourquoi ?** → parce qu'il fait froid"
  }
 ],
 "mots-5": [
  {
   "type": "ecouter",
   "phrase": "Je prends le bus devant la pharmacie.",
   "faux": [
    "Je prends le métro devant la pharmacie.",
    "Je prends le bus devant la poste."
   ],
   "expl": "On entend : **bus**, **pharmacie**."
  },
  {
   "type": "ecouter",
   "phrase": "La gare est à dix minutes à pied.",
   "faux": [
    "La gare est à deux minutes à pied.",
    "La poste est à dix minutes à pied."
   ],
   "expl": "On entend : **gare**, **dix minutes**."
  },
  {
   "type": "ecouter",
   "phrase": "Il faut valider le ticket.",
   "faux": [
    "Il faut acheter le ticket.",
    "Il faut valider la carte."
   ],
   "expl": "**Valider** : passer le ticket dans la machine."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais à la poste en voiture.",
   "vrai": true,
   "expl": "Dans la voiture : **en** voiture."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais au travail en vélo.",
   "vrai": false,
   "correction": "Je vais au travail à vélo.",
   "expl": "On est dessus.\n\nOn dit : **à** vélo."
  },
  {
   "type": "vraifaux",
   "phrase": "On traverse quand le feu piéton est rouge.",
   "vrai": false,
   "correction": "On traverse quand le feu piéton est vert.",
   "expl": "Vert : on passe.\n\nRouge : on attend."
  },
  {
   "type": "associer",
   "consigne": "Reliez le transport et le bon petit mot",
   "paires": [
    [
     "le bus",
     "en bus"
    ],
    [
     "le pied",
     "à pied"
    ],
    [
     "le vélo",
     "à vélo"
    ],
    [
     "le train",
     "en train"
    ]
   ],
   "expl": "Dedans : **en**.\n\nDessus : **à**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le lieu et ce qu'on y fait",
   "paires": [
    [
     "la boulangerie",
     "acheter du pain"
    ],
    [
     "la poste",
     "envoyer une lettre"
    ],
    [
     "la gare",
     "prendre le train"
    ],
    [
     "la pharmacie",
     "acheter des médicaments"
    ]
   ],
   "expl": "Chaque lieu de la ville a un rôle."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je descends du bus à l'arrêt suivant.",
   "faux": "Je descends du bus à la gare suivante.",
   "expl": "Le bus s'arrête à l'**arrêt**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Excusez-moi, où est l'arrêt du tram ?",
   "faux": "Excusez-moi, où est le tram de l'arrêt ?",
   "expl": "On cherche **l'arrêt** du tram."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je prends le train pour aller à Paris.",
   "faux": "Je prends à pied pour aller à Paris.",
   "expl": "On **prend** un transport.\n\nJe prends le train."
  },
  {
   "type": "completer",
   "phrase": "Pour aller à l'école, mon fils ___ le bus.",
   "reponse": "prend",
   "choix": [
    "prend",
    "prends",
    "prendre"
   ],
   "expl": "Mon fils, c'est **il**.\n\nIl **prend** le bus."
  },
  {
   "type": "completer",
   "phrase": "J'envoie un colis à ___.",
   "reponse": "la poste",
   "choix": [
    "la poste",
    "la gare",
    "la boulangerie"
   ],
   "expl": "Les colis : à **la poste**."
  },
  {
   "type": "ordre",
   "phrase": "Le tram passe toutes les dix minutes.",
   "expl": "**Qui ?** → Le tram\n\n**L'action** → passe\n\n**Quand ?** → toutes les dix minutes"
  },
  {
   "type": "ordre",
   "phrase": "Je descends au prochain arrêt.",
   "expl": "Je descends.\n\n**Où ?** → au prochain arrêt"
  }
 ],
 "mots-6": [
  {
   "type": "ecouter",
   "phrase": "Il faut remplir ce formulaire.",
   "faux": [
    "Il faut signer ce formulaire.",
    "Il faut remplir ce cahier."
   ],
   "expl": "On entend : **remplir**, **formulaire**."
  },
  {
   "type": "ecouter",
   "phrase": "Mon fils mange à la cantine.",
   "faux": [
    "Mon fils joue à la cantine.",
    "Ma fille mange à la cantine."
   ],
   "expl": "On entend : **mon fils mange**."
  },
  {
   "type": "ecouter",
   "phrase": "Apportez une pièce d'identité.",
   "faux": [
    "Apportez une photo d'identité.",
    "Apportez une facture."
   ],
   "expl": "On entend : **pièce d'identité**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je signe le cahier de liaison chaque soir.",
   "vrai": true,
   "expl": "Le soir, on **signe** le cahier de liaison."
  },
  {
   "type": "vraifaux",
   "phrase": "Le passeport est un justificatif de domicile.",
   "vrai": false,
   "correction": "Le passeport est une pièce d'identité.",
   "expl": "Le passeport montre **qui vous êtes**.\n\nC'est une pièce d'identité."
  },
  {
   "type": "vraifaux",
   "phrase": "Les enfants jouent dans la cour à la récréation.",
   "vrai": true,
   "expl": "À la **récréation**, on joue dans la cour."
  },
  {
   "type": "associer",
   "consigne": "Reliez le papier et ce qu'il prouve",
   "paires": [
    [
     "la carte d'identité",
     "qui vous êtes"
    ],
    [
     "la facture d'électricité",
     "où vous habitez"
    ],
    [
     "le bulletin de salaire",
     "ce que vous gagnez"
    ],
    [
     "le livret de famille",
     "qui sont vos enfants"
    ]
   ],
   "expl": "Chaque papier prouve quelque chose."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot de l'école et son sens",
   "paires": [
    [
     "la cantine",
     "manger à midi"
    ],
    [
     "la récréation",
     "jouer dans la cour"
    ],
    [
     "les devoirs",
     "travailler à la maison"
    ],
    [
     "la sortie",
     "la fin de la journée"
    ]
   ],
   "expl": "Les mots de l'école."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai rendez-vous avec la maîtresse jeudi.",
   "faux": "J'ai rendez-vous avec la cantine jeudi.",
   "expl": "On a rendez-vous avec **une personne**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je remplis le formulaire au stylo.",
   "faux": "Je remplis le formulaire à la cantine.",
   "expl": "On remplit **au stylo**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il faut une photo d'identité récente.",
   "faux": "Il faut une photo d'identité de domicile.",
   "expl": "Une photo **récente** : prise il y a peu de temps."
  },
  {
   "type": "completer",
   "phrase": "Écrivez votre nom et ___ en bas.",
   "reponse": "signez",
   "choix": [
    "signez",
    "signature",
    "signer"
   ],
   "expl": "L'action avec **vous** : vous **signez**."
  },
  {
   "type": "completer",
   "phrase": "La facture d'électricité est un justificatif de ___.",
   "reponse": "domicile",
   "choix": [
    "domicile",
    "identité",
    "cantine"
   ],
   "expl": "La facture montre l'adresse.\n\nJustificatif de **domicile**."
  },
  {
   "type": "ordre",
   "phrase": "Je dois apporter mon livret de famille.",
   "expl": "Je dois apporter **quoi ?** → mon livret de famille"
  },
  {
   "type": "ordre",
   "phrase": "La sortie de l'école est à seize heures.",
   "expl": "**Quoi ?** → La sortie de l'école\n\n**Quand ?** → à seize heures"
  }
 ],
 "mots-7": [
  {
   "type": "ecouter",
   "phrase": "Les freins font du bruit.",
   "faux": [
    "Les phares font du bruit.",
    "Les freins ne marchent pas."
   ],
   "expl": "On entend : **freins**, **bruit**."
  },
  {
   "type": "ecouter",
   "phrase": "Je vous fais un devis gratuit.",
   "faux": [
    "Je vous fais une facture gratuite.",
    "Je vous fais un devis demain."
   ],
   "expl": "On entend : **devis gratuit**."
  },
  {
   "type": "ecouter",
   "phrase": "Le garage ouvre à huit heures.",
   "faux": [
    "Le garage ferme à huit heures.",
    "Le garage ouvre à neuf heures."
   ],
   "expl": "On entend : **ouvre**, **huit heures**."
  },
  {
   "type": "vraifaux",
   "phrase": "Le client paie la facture après la réparation.",
   "vrai": true,
   "expl": "La **facture** vient à la fin.\n\nLe client paie."
  },
  {
   "type": "vraifaux",
   "phrase": "Je fais le plein d'eau.",
   "vrai": false,
   "correction": "Je fais le plein d'essence.",
   "expl": "On fait le plein d'**essence** ou de **gazole**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il faut changer les pneus avant l'hiver.",
   "vrai": true,
   "expl": "Les **pneus** : on peut les changer avant l'hiver."
  },
  {
   "type": "associer",
   "consigne": "Reliez la pièce et ce qu'elle fait",
   "paires": [
    [
     "les freins",
     "arrêter la voiture"
    ],
    [
     "les phares",
     "éclairer la route"
    ],
    [
     "le volant",
     "tourner"
    ],
    [
     "la batterie",
     "démarrer"
    ]
   ],
   "expl": "Chaque pièce de la voiture a un rôle."
  },
  {
   "type": "associer",
   "consigne": "Reliez le papier et le moment",
   "paires": [
    [
     "le devis",
     "avant la réparation"
    ],
    [
     "la facture",
     "après la réparation"
    ],
    [
     "le rendez-vous",
     "avant de venir"
    ],
    [
     "le reçu",
     "après avoir payé"
    ]
   ],
   "expl": "Devis : avant.\n\nFacture : après."
  },
  {
   "type": "choisir",
   "consigne": "à un client",
   "juste": "Votre voiture sera prête demain matin.",
   "faux": "Ta voiture sera prête demain matin.",
   "expl": "À un client, on dit **votre**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le moteur chauffe, il faut vérifier l'huile.",
   "faux": "Le moteur chauffe, il faut vérifier les phares.",
   "expl": "Le moteur chauffe.\n\nOn vérifie **l'huile**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le pneu est crevé, je le change.",
   "faux": "Le pneu est crevé, je le démarre.",
   "expl": "Un pneu crevé : on le **change**."
  },
  {
   "type": "completer",
   "phrase": "La voiture ne démarre pas, ___ est vide.",
   "reponse": "la batterie",
   "choix": [
    "la batterie",
    "le volant",
    "le pneu"
   ],
   "expl": "Sans **batterie**, la voiture ne démarre pas."
  },
  {
   "type": "completer",
   "phrase": "Avant la réparation, je vous donne ___.",
   "reponse": "le devis",
   "choix": [
    "le devis",
    "la facture",
    "le reçu"
   ],
   "expl": "Avant : **le devis**."
  },
  {
   "type": "ordre",
   "phrase": "Il faut changer les plaquettes de frein.",
   "expl": "Il faut changer **quoi ?** → les plaquettes de frein"
  },
  {
   "type": "ordre",
   "phrase": "Je vous appelle quand la voiture est prête.",
   "expl": "Je vous appelle.\n\n**Quand ?** → quand la voiture est prête"
  }
 ],
 "mots-8": [
  {
   "type": "ecouter",
   "phrase": "Ça fait soixante-quinze euros.",
   "faux": [
    "Ça fait soixante-cinq euros.",
    "Ça fait quatre-vingt-quinze euros."
   ],
   "expl": "On entend : **soixante-quinze**.\n\n75."
  },
  {
   "type": "ecouter",
   "phrase": "Le rendez-vous est à neuf heures et quart.",
   "faux": [
    "Le rendez-vous est à neuf heures et demie.",
    "Le rendez-vous est à dix heures et quart."
   ],
   "expl": "On entend : **neuf heures et quart**.\n\n9 h 15."
  },
  {
   "type": "ecouter",
   "phrase": "Vous payez par carte ?",
   "faux": [
    "Vous payez en espèces ?",
    "Vous payez demain ?"
   ],
   "expl": "On entend : **par carte**."
  },
  {
   "type": "vraifaux",
   "phrase": "Quatre-vingts, c'est 80.",
   "vrai": true,
   "expl": "4 fois 20 = **80**."
  },
  {
   "type": "vraifaux",
   "phrase": "Midi, c'est le milieu de la nuit.",
   "vrai": false,
   "correction": "Minuit, c'est le milieu de la nuit.",
   "expl": "**Midi** : 12 heures, le jour.\n\n**Minuit** : la nuit."
  },
  {
   "type": "vraifaux",
   "phrase": "Je paie en espèces avec des billets.",
   "vrai": true,
   "expl": "Billets et pièces : **en espèces**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le nombre et son nom",
   "paires": [
    [
     "70",
     "soixante-dix"
    ],
    [
     "80",
     "quatre-vingts"
    ],
    [
     "90",
     "quatre-vingt-dix"
    ],
    [
     "75",
     "soixante-quinze"
    ]
   ],
   "expl": "Après 69, on compte avec 60 et 20."
  },
  {
   "type": "associer",
   "consigne": "Reliez l'heure et la façon de la dire",
   "paires": [
    [
     "9 h 15",
     "neuf heures et quart"
    ],
    [
     "9 h 30",
     "neuf heures et demie"
    ],
    [
     "8 h 45",
     "neuf heures moins le quart"
    ],
    [
     "12 h",
     "midi"
    ]
   ],
   "expl": "15 minutes : **un quart**.\n\n30 minutes : **et demie**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je vous rends la monnaie.",
   "faux": "Je vous rends la carte bleue de monnaie.",
   "expl": "On rend **la monnaie** : l'argent en trop."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ça coûte quatre-vingt-dix euros.",
   "faux": "Ça coûte quatre-vingts-dix euros.",
   "expl": "90 : **quatre-vingt-dix**.\n\nPas de s, car dix suit."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le magasin ferme à dix-neuf heures.",
   "faux": "Le magasin ferme à dix-neuf heure.",
   "expl": "Après 2 : **heures** avec un s."
  },
  {
   "type": "completer",
   "phrase": "Vous payez ___ carte ou en espèces ?",
   "reponse": "par",
   "choix": [
    "par",
    "en",
    "à"
   ],
   "expl": "Avec la carte : **par** carte."
  },
  {
   "type": "completer",
   "phrase": "14 h 30, c'est deux heures et ___.",
   "reponse": "demie",
   "choix": [
    "demie",
    "quart",
    "midi"
   ],
   "expl": "30 minutes : **et demie**."
  },
  {
   "type": "ordre",
   "phrase": "Le bus part à huit heures moins le quart.",
   "expl": "**Qui ?** → Le bus\n\n**L'action** → part\n\n**Quand ?** → à huit heures moins le quart"
  },
  {
   "type": "ordre",
   "phrase": "Je voudrais payer en trois fois.",
   "expl": "Je voudrais payer.\n\n**Comment ?** → en trois fois"
  }
 ],
 "orthographe-1": [
  {
   "type": "ecouter",
   "phrase": "Mon père et ma mère.",
   "faux": [
    "Mon pére et ma mére.",
    "Mon pêre et ma mêre."
   ],
   "expl": "Avant **-re** : **è**."
  },
  {
   "type": "ecouter",
   "phrase": "C'est la fête.",
   "faux": [
    "C'est la fète.",
    "C'est la féte."
   ],
   "expl": "Fête : avec **ê**."
  },
  {
   "type": "ecouter",
   "phrase": "J'ai réservé une table.",
   "faux": [
    "J'ai rèservè une table.",
    "J'ai reserve une table."
   ],
   "expl": "Réservé : deux **é**."
  },
  {
   "type": "vraifaux",
   "phrase": "Mon frère est à l'école.",
   "vrai": true,
   "expl": "Frère : **è**.\n\nÉcole : **é**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai mal à la téte.",
   "vrai": false,
   "correction": "J'ai mal à la tête.",
   "expl": "Tête : avec **ê**."
  },
  {
   "type": "vraifaux",
   "phrase": "Le café est très chaud.",
   "vrai": true,
   "expl": "Café : **é**.\n\nTrès : **è**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son accent",
   "paires": [
    [
     "école",
     "é, accent aigu"
    ],
    [
     "mère",
     "è, accent grave"
    ],
    [
     "fête",
     "ê, accent circonflexe"
    ],
    [
     "hôpital",
     "ô, accent circonflexe"
    ]
   ],
   "expl": "Chaque mot a son accent."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le mot de la même famille",
   "paires": [
    [
     "père",
     "mère"
    ],
    [
     "fête",
     "tête"
    ],
    [
     "café",
     "thé"
    ],
    [
     "frère",
     "sœur"
    ]
   ],
   "expl": "Ces mots vont ensemble."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "une fenêtre",
   "faux": "une fenètre",
   "expl": "Fenêtre : avec **ê**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "après",
   "faux": "aprés",
   "expl": "Après : avec **è**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "l'été",
   "faux": "l'èté",
   "expl": "Été : deux **é**."
  },
  {
   "type": "completer",
   "phrase": "Ma m___re est là.",
   "reponse": "è",
   "choix": [
    "è",
    "é",
    "ê"
   ],
   "expl": "Avant **-re** : **è**.\n\nMère."
  },
  {
   "type": "completer",
   "phrase": "Le b___bé dort.",
   "reponse": "é",
   "choix": [
    "é",
    "è",
    "ê"
   ],
   "expl": "Bébé : **é**."
  },
  {
   "type": "ordre",
   "phrase": "Ma mère prépare la fête.",
   "expl": "Mère : **è**.\n\nFête : **ê**."
  },
  {
   "type": "ordre",
   "phrase": "Mon frère est très gentil.",
   "expl": "Frère : **è**.\n\nTrès : **è**."
  }
 ],
 "orthographe-2": [
  {
   "type": "ecouter",
   "phrase": "Le garçon a fait sa leçon.",
   "faux": [
    "Le garcon a fait sa lecon.",
    "Le garsson a fait sa lesson."
   ],
   "expl": "Garçon, leçon : **ç**."
  },
  {
   "type": "ecouter",
   "phrase": "Merci beaucoup.",
   "faux": [
    "Merçi beaucoup.",
    "Mersi beaucoup."
   ],
   "expl": "Avant **i** : **c**.\n\nMerci."
  },
  {
   "type": "ecouter",
   "phrase": "La maison est grande.",
   "faux": [
    "La maisson est grande.",
    "La maizon est grande."
   ],
   "expl": "Un **s** entre deux voyelles fait « z ».\n\nMaison."
  },
  {
   "type": "vraifaux",
   "phrase": "Je bois une tasse de thé.",
   "vrai": true,
   "expl": "Tasse : **ss**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai recu votre lettre.",
   "vrai": false,
   "correction": "J'ai reçu votre lettre.",
   "expl": "Avant **u** : **ç**.\n\nReçu."
  },
  {
   "type": "vraifaux",
   "phrase": "Ça va bien ?",
   "vrai": true,
   "expl": "Avant **a** : **ç**.\n\nÇa."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et la bonne lettre",
   "paires": [
    [
     "garçon",
     "avec c cédille"
    ],
    [
     "poisson",
     "avec deux s"
    ],
    [
     "maison",
     "avec un seul s"
    ],
    [
     "merci",
     "avec un c"
    ]
   ],
   "expl": "ç, ss, s, c."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son sens",
   "paires": [
    [
     "poisson",
     "on le mange"
    ],
    [
     "poison",
     "c'est dangereux"
    ],
    [
     "dessert",
     "à la fin du repas"
    ],
    [
     "désert",
     "il y a du sable"
    ]
   ],
   "expl": "**ss** ou **s** : le sens change."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "une boisson",
   "faux": "une boison",
   "expl": "Entre deux voyelles : **ss**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "le français",
   "faux": "le francais",
   "expl": "Avant **a** : **ç**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "la piscine",
   "faux": "la pisçine",
   "expl": "Avant **i** : **c** suffit."
  },
  {
   "type": "completer",
   "phrase": "Nous commen___ons demain.",
   "reponse": "ç",
   "choix": [
    "ç",
    "c",
    "ss"
   ],
   "expl": "Avant **o** : **ç**."
  },
  {
   "type": "completer",
   "phrase": "Une cha___ure",
   "reponse": "uss",
   "choix": [
    "uss",
    "us",
    "uç"
   ],
   "expl": "Chaussure : **ss**."
  },
  {
   "type": "ordre",
   "phrase": "Le garçon mange du poisson.",
   "expl": "Garçon : **ç**.\n\nPoisson : **ss**."
  },
  {
   "type": "ordre",
   "phrase": "Nous commençons la leçon.",
   "expl": "Commençons, leçon : **ç**."
  }
 ],
 "orthographe-3": [
  {
   "type": "ecouter",
   "phrase": "Nous mangeons.",
   "faux": [
    "Nous mangons.",
    "Nous mangions."
   ],
   "expl": "Avant **o** : **ge**."
  },
  {
   "type": "ecouter",
   "phrase": "Une guitare.",
   "faux": [
    "Une gitare.",
    "Une ghitare."
   ],
   "expl": "Avant **i** : **gu**."
  },
  {
   "type": "ecouter",
   "phrase": "Une langue étrangère.",
   "faux": [
    "Une lange étrangère.",
    "Une langue étranguère."
   ],
   "expl": "Langue : **gu**.\n\nÉtrangère : **g**."
  },
  {
   "type": "vraifaux",
   "phrase": "Le garage est grand.",
   "vrai": true,
   "expl": "Avant **a** : **g** suffit."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous nagons à la piscine.",
   "vrai": false,
   "correction": "Nous nageons à la piscine.",
   "expl": "Avant **o** : **ge**."
  },
  {
   "type": "vraifaux",
   "phrase": "La voiture rouge est là.",
   "vrai": true,
   "expl": "Rouge : **g** fait « j » avant e."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le son du g",
   "paires": [
    [
     "garage",
     "g dur"
    ],
    [
     "rouge",
     "j"
    ],
    [
     "guitare",
     "g dur avec u"
    ],
    [
     "mangeons",
     "j avec e"
    ]
   ],
   "expl": "Le **g** change de son."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et nous",
   "paires": [
    [
     "manger",
     "nous mangeons"
    ],
    [
     "nager",
     "nous nageons"
    ],
    [
     "changer",
     "nous changeons"
    ],
    [
     "ranger",
     "nous rangeons"
    ]
   ],
   "expl": "Les verbes en **-ger** gardent le **e**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "un gâteau",
   "faux": "un guâteau",
   "expl": "Avant **â** : **g** suffit."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous rangeons la chambre.",
   "faux": "Nous rangons la chambre.",
   "expl": "Avant **o** : **ge**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "la guerre",
   "faux": "la gerre",
   "expl": "Avant **e**, pour « g » dur : **gu**."
  },
  {
   "type": "completer",
   "phrase": "Nous chan___ons les pneus.",
   "reponse": "ge",
   "choix": [
    "ge",
    "g",
    "gu"
   ],
   "expl": "Avant **o** : **ge**."
  },
  {
   "type": "completer",
   "phrase": "Une ba___e en or.",
   "reponse": "gu",
   "choix": [
    "gu",
    "g",
    "ge"
   ],
   "expl": "Avant **e**, pour « g » dur : **gu**.\n\nBague."
  },
  {
   "type": "ordre",
   "phrase": "Nous mangeons des légumes.",
   "expl": "Mangeons : **ge**.\n\nLégumes : **g** avant u."
  },
  {
   "type": "ordre",
   "phrase": "Mon fils joue de la guitare.",
   "expl": "Guitare : **gu**."
  }
 ],
 "orthographe-4": [
  {
   "type": "ecouter",
   "phrase": "C'est important.",
   "faux": [
    "C'est inportant.",
    "C'est imporrtant."
   ],
   "expl": "Avant **p** : **m**."
  },
  {
   "type": "ecouter",
   "phrase": "Nous partons ensemble.",
   "faux": [
    "Nous partons ensenble.",
    "Nous partons emsemble."
   ],
   "expl": "Avant **b** : **m**.\n\nEnsemble."
  },
  {
   "type": "ecouter",
   "phrase": "Attention, ne tombe pas.",
   "faux": [
    "Attention, ne tonbe pas.",
    "Atention, ne tombe pas."
   ],
   "expl": "Avant **b** : **m**.\n\nTombe."
  },
  {
   "type": "vraifaux",
   "phrase": "La chambre est propre.",
   "vrai": true,
   "expl": "Avant **b** : **m**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il fait le conpte.",
   "vrai": false,
   "correction": "Il fait le compte.",
   "expl": "Avant **p** : **m**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je suis content.",
   "vrai": true,
   "expl": "Avant **t** : on garde **n**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin du mot",
   "paires": [
    [
     "cham",
     "bre"
    ],
    [
     "im",
     "portant"
    ],
    [
     "en",
     "semble"
    ],
    [
     "tom",
     "ber"
    ]
   ],
   "expl": "Avant **b** ou **p** : **m**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et la bonne lettre",
   "paires": [
    [
     "important",
     "m avant p"
    ],
    [
     "content",
     "n avant t"
    ],
    [
     "jambe",
     "m avant b"
    ],
    [
     "manger",
     "n avant g"
    ]
   ],
   "expl": "**m** seulement avant m, b, p."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "la jambe",
   "faux": "la janbe",
   "expl": "Avant **b** : **m**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "un timbre",
   "faux": "un tinbre",
   "expl": "Avant **b** : **m**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "emmener",
   "faux": "enmener",
   "expl": "Avant **m** : **m**."
  },
  {
   "type": "completer",
   "phrase": "J'ai mal à la ja___be.",
   "reponse": "m",
   "choix": [
    "m",
    "n",
    "mm"
   ],
   "expl": "Avant **b** : **m**."
  },
  {
   "type": "completer",
   "phrase": "Je suis co___tent.",
   "reponse": "n",
   "choix": [
    "n",
    "m",
    "nn"
   ],
   "expl": "Avant **t** : on garde **n**."
  },
  {
   "type": "ordre",
   "phrase": "Mon fils est tombé à l'école.",
   "expl": "Tombé : **m** avant b."
  },
  {
   "type": "ordre",
   "phrase": "C'est un rendez-vous important.",
   "expl": "Important : **m** avant p."
  }
 ],
 "orthographe-5": [
  {
   "type": "ecouter",
   "phrase": "Un petit garçon.",
   "faux": [
    "Un peti garçon.",
    "Un petis garçon."
   ],
   "expl": "Petit : un **t** muet."
  },
  {
   "type": "ecouter",
   "phrase": "Du lait chaud.",
   "faux": [
    "Du lai chaud.",
    "Du laie chaud."
   ],
   "expl": "Lait : un **t** muet."
  },
  {
   "type": "ecouter",
   "phrase": "Un grand bruit.",
   "faux": [
    "Un gran bruit.",
    "Un grand brui."
   ],
   "expl": "Grand : **d**.\n\nBruit : **t**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai mal aux dents.",
   "vrai": true,
   "expl": "Dent : pensez à dentiste.\n\n**t**, et **s** au pluriel."
  },
  {
   "type": "vraifaux",
   "phrase": "Mon enfan dort.",
   "vrai": false,
   "correction": "Mon enfant dort.",
   "expl": "Enfant : pensez à **enfance**.\n\n**t**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il est à l'hôpital.",
   "vrai": true,
   "expl": "Le **h** ne s'entend pas."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le mot qui aide",
   "paires": [
    [
     "petit",
     "petite"
    ],
    [
     "grand",
     "grande"
    ],
    [
     "lait",
     "laitier"
    ],
    [
     "sport",
     "sportif"
    ]
   ],
   "expl": "Un mot de la famille montre la lettre muette."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et sa lettre muette",
   "paires": [
    [
     "dent",
     "un t muet"
    ],
    [
     "gros",
     "un s muet"
    ],
    [
     "froid",
     "un d muet"
    ],
    [
     "tabac",
     "un c muet"
    ]
   ],
   "expl": "On ne les entend pas, mais on les écrit."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il fait froid.",
   "faux": "Il fait froi.",
   "expl": "Froid : pensez à **froide**.\n\n**d**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "un gros chien",
   "faux": "un gro chien",
   "expl": "Au féminin : gro**sse**.\n\n**s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "un homme",
   "faux": "un omme",
   "expl": "Homme : avec un **h** muet."
  },
  {
   "type": "completer",
   "phrase": "Un lon___ voyage.",
   "reponse": "g",
   "choix": [
    "g",
    "d",
    "t"
   ],
   "expl": "Au féminin : lon**gue**.\n\n**g**."
  },
  {
   "type": "completer",
   "phrase": "Un ri___ de lait.",
   "reponse": "z",
   "choix": [
    "z",
    "s",
    "t"
   ],
   "expl": "Riz : avec un **z** muet."
  },
  {
   "type": "ordre",
   "phrase": "Mon petit frère a froid.",
   "expl": "Peti**t**, froi**d** : lettres muettes."
  },
  {
   "type": "ordre",
   "phrase": "Le chat boit du lait.",
   "expl": "Cha**t**, lai**t** : lettres muettes."
  }
 ],
 "orthographe-6": [
  {
   "type": "ecouter",
   "phrase": "Aujourd'hui, il fait beau.",
   "faux": [
    "Aujourdhui, il fait beau.",
    "Aujourd'hui, il fait bau."
   ],
   "expl": "Aujourd'hui : avec une **apostrophe**."
  },
  {
   "type": "ecouter",
   "phrase": "D'accord, à demain.",
   "faux": [
    "Dacord, à demain.",
    "D'acord, à demain."
   ],
   "expl": "D'accord : apostrophe et deux **c**."
  },
  {
   "type": "ecouter",
   "phrase": "Peut-être demain.",
   "faux": [
    "Peut être demain.",
    "Peu-être demain."
   ],
   "expl": "Possible : **peut-être**, avec un tiret."
  },
  {
   "type": "vraifaux",
   "phrase": "Merci beaucoup.",
   "vrai": true,
   "expl": "Beaucoup : un **p** à la fin."
  },
  {
   "type": "vraifaux",
   "phrase": "Il est toujour en retard.",
   "vrai": false,
   "correction": "Il est toujours en retard.",
   "expl": "Toujours : un **s** à la fin."
  },
  {
   "type": "vraifaux",
   "phrase": "Quelqu'un a appelé.",
   "vrai": true,
   "expl": "Quelqu'un : avec une **apostrophe**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et ce qu'il a de spécial",
   "paires": [
    [
     "aujourd'hui",
     "une apostrophe"
    ],
    [
     "rendez-vous",
     "un tiret"
    ],
    [
     "beaucoup",
     "un p muet"
    ],
    [
     "toujours",
     "un s muet"
    ]
   ],
   "expl": "Ces mots sont à apprendre par cœur."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et son sens",
   "paires": [
    [
     "maintenant",
     "en ce moment"
    ],
    [
     "longtemps",
     "pendant une longue durée"
    ],
    [
     "toujours",
     "tout le temps"
    ],
    [
     "peut-être",
     "c'est possible"
    ]
   ],
   "expl": "Des mots très utiles."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai rendez-vous lundi.",
   "faux": "J'ai rendez vous lundi.",
   "expl": "Rendez-vous : avec un **tiret**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il attend depuis longtemps.",
   "faux": "Il attend depuis lontemps.",
   "expl": "Longtemps : un **g** muet."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je pars maintenant.",
   "faux": "Je pars maintenent.",
   "expl": "Maintenant : **-ant** à la fin."
  },
  {
   "type": "completer",
   "phrase": "Il y a ___ à la porte.",
   "reponse": "quelqu'un",
   "choix": [
    "quelqu'un",
    "quelquun",
    "quelque un"
   ],
   "expl": "Quelqu'un : avec une **apostrophe**."
  },
  {
   "type": "completer",
   "phrase": "Je suis ___ avec vous.",
   "reponse": "d'accord",
   "choix": [
    "d'accord",
    "dacord",
    "d'acord"
   ],
   "expl": "D'accord : apostrophe et deux **c**."
  },
  {
   "type": "ordre",
   "phrase": "Aujourd'hui, je travaille beaucoup.",
   "expl": "Aujourd'hui, beaucoup : à apprendre par cœur."
  },
  {
   "type": "ordre",
   "phrase": "Il est peut-être malade.",
   "expl": "Possible : **peut-être**, avec un tiret."
  }
 ],
 "passe-1": [
  {
   "type": "ecouter",
   "phrase": "J'ai commencé à travailler.",
   "faux": [
    "J'ai commencer à travaillé.",
    "J'ai commencé à travaillé."
   ],
   "expl": "Après **ai** : **-é**.\n\nAprès **à** : **-er**."
  },
  {
   "type": "ecouter",
   "phrase": "C'est facile à préparer.",
   "faux": [
    "C'est facile à préparé.",
    "C'est facile à préparez."
   ],
   "expl": "Après **à** : **-er**."
  },
  {
   "type": "ecouter",
   "phrase": "Il est allé chercher le pain.",
   "faux": [
    "Il est aller chercher le pain.",
    "Il est allé cherché le pain."
   ],
   "expl": "Après **est** : **-é**.\n\nAprès allé : **-er**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai oublié de fermer la porte.",
   "vrai": true,
   "expl": "Oubli**é** : après ai.\n\nFerm**er** : après de."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais téléphoné au garage.",
   "vrai": false,
   "correction": "Je vais téléphoner au garage.",
   "expl": "Après **vais** : **-er**."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous avons parlé avec la maîtresse.",
   "vrai": true,
   "expl": "Après **avons** : **-é**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "J'ai",
     "mangé."
    ],
    [
     "Je vais",
     "manger."
    ],
    [
     "Il faut",
     "payer."
    ],
    [
     "Il a",
     "payé."
    ]
   ],
   "expl": "Après avoir : **-é**.\n\nAprès un verbe : **-er**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le petit mot et le bon verbe",
   "paires": [
    [
     "j'ai",
     "mangé"
    ],
    [
     "pour",
     "manger"
    ],
    [
     "il est",
     "allé"
    ],
    [
     "sans",
     "payer"
    ]
   ],
   "expl": "Avoir, être : **-é**.\n\nÀ, de, pour, sans : **-er**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je suis venu pour aider.",
   "faux": "Je suis venu pour aidé.",
   "expl": "Après **pour** : **-er**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle a acheté du pain.",
   "faux": "Elle a acheter du pain.",
   "expl": "Après **a** : **-é**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il est parti sans payer.",
   "faux": "Il est parti sans payé.",
   "expl": "Après **sans** : **-er**."
  },
  {
   "type": "completer",
   "phrase": "J'ai envie de mang___.",
   "reponse": "er",
   "choix": [
    "er",
    "é",
    "ez"
   ],
   "expl": "Après **de** : **-er**."
  },
  {
   "type": "completer",
   "phrase": "Le client a pay___ la facture.",
   "reponse": "é",
   "choix": [
    "é",
    "er",
    "ez"
   ],
   "expl": "Après **a** : **-é**."
  },
  {
   "type": "ordre",
   "phrase": "Nous avons décidé de rester.",
   "expl": "Décid**é** : après avons.\n\nRest**er** : après de."
  },
  {
   "type": "ordre",
   "phrase": "Il faut changer les pneus.",
   "expl": "Après **faut** : chang**er**."
  }
 ],
 "passe-2": [
  {
   "type": "ecouter",
   "phrase": "J'ai pris le bus.",
   "faux": [
    "Je prends le bus.",
    "J'ai perdu le bus."
   ],
   "expl": "On entend **j'ai pris**."
  },
  {
   "type": "ecouter",
   "phrase": "Elle a écrit une lettre.",
   "faux": [
    "Elle écrit une lettre.",
    "Elle a lu une lettre."
   ],
   "expl": "On entend **a écrit**."
  },
  {
   "type": "ecouter",
   "phrase": "Ils ont bu de l'eau.",
   "faux": [
    "Ils boivent de l'eau.",
    "Ils ont vu de l'eau."
   ],
   "expl": "On entend **ont bu**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il a mis son manteau.",
   "vrai": true,
   "expl": "Mettre au passé : **mis**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai comprendu la leçon.",
   "vrai": false,
   "correction": "J'ai compris la leçon.",
   "expl": "Comprendre au passé : **compris**."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous avons reçu une lettre.",
   "vrai": true,
   "expl": "Recevoir au passé : **reçu**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et sa forme au passé",
   "paires": [
    [
     "prendre",
     "pris"
    ],
    [
     "mettre",
     "mis"
    ],
    [
     "dire",
     "dit"
    ],
    [
     "écrire",
     "écrit"
    ]
   ],
   "expl": "Les fins **-is** et **-it**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et sa forme au passé",
   "paires": [
    [
     "lire",
     "lu"
    ],
    [
     "venir",
     "venu"
    ],
    [
     "finir",
     "fini"
    ],
    [
     "dormir",
     "dormi"
    ]
   ],
   "expl": "Les fins **-u** et **-i**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai dormi huit heures.",
   "faux": "J'ai dormu huit heures.",
   "expl": "Dormir au passé : **dormi**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il a vu le médecin.",
   "faux": "Il a voyé le médecin.",
   "expl": "Voir au passé : **vu**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Vous avez fait vos courses ?",
   "faux": "Vous avez faisé vos courses ?",
   "expl": "Faire au passé : **fait**."
  },
  {
   "type": "completer",
   "phrase": "J'ai ___ ton message.",
   "reponse": "lu",
   "choix": [
    "lu",
    "lis",
    "lire"
   ],
   "expl": "Lire au passé : **lu**."
  },
  {
   "type": "completer",
   "phrase": "Nous avons ___ la réponse.",
   "reponse": "attendu",
   "choix": [
    "attendu",
    "attendi",
    "attendé"
   ],
   "expl": "Attendre au passé : **attendu**."
  },
  {
   "type": "ordre",
   "phrase": "Elle a dit merci au médecin.",
   "expl": "Dire au passé : **dit**."
  },
  {
   "type": "ordre",
   "phrase": "Mon fils a fini ses devoirs.",
   "expl": "Finir au passé : **fini**."
  }
 ],
 "passe-3": [
  {
   "type": "ecouter",
   "phrase": "Ma fille est née en 2015.",
   "faux": [
    "Ma fille est né en 2015.",
    "Ma fille a né en 2015."
   ],
   "expl": "Une femme : né**e**."
  },
  {
   "type": "ecouter",
   "phrase": "Les enfants sont rentrés.",
   "faux": [
    "Les enfants sont rentré.",
    "Les enfants ont rentrés."
   ],
   "expl": "Plusieurs : rentré**s**."
  },
  {
   "type": "ecouter",
   "phrase": "Ma femme et ma fille sont arrivées.",
   "faux": [
    "Ma femme et ma fille sont arrivés.",
    "Ma femme et ma fille sont arrivée."
   ],
   "expl": "Plusieurs femmes : arrivé**es**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il est tombé.",
   "vrai": true,
   "expl": "Un homme : tombé.\n\nPas de **e**."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle est parti hier.",
   "vrai": false,
   "correction": "Elle est partie hier.",
   "expl": "Une femme : parti**e**."
  },
  {
   "type": "vraifaux",
   "phrase": "Mes parents sont venus.",
   "vrai": true,
   "expl": "Plusieurs : venu**s**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et la bonne fin",
   "paires": [
    [
     "Il est",
     "sorti."
    ],
    [
     "Elle est",
     "sortie."
    ],
    [
     "Ils sont",
     "sortis."
    ],
    [
     "Elles sont",
     "sorties."
    ]
   ],
   "expl": "Avec **être**, on accorde."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et la bonne fin",
   "paires": [
    [
     "ma mère",
     "arrivée"
    ],
    [
     "mon père",
     "arrivé"
    ],
    [
     "mes fils",
     "arrivés"
    ],
    [
     "mes filles",
     "arrivées"
    ]
   ],
   "expl": "Femme : **-e**.\n\nPlusieurs : **-s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ma sœur est restée chez elle.",
   "faux": "Ma sœur est resté chez elle.",
   "expl": "Une femme : resté**e**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous sommes allés au parc.",
   "faux": "Nous sommes allé au parc.",
   "expl": "Plusieurs : allé**s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mes filles sont montées.",
   "faux": "Mes filles sont montés.",
   "expl": "Plusieurs femmes : monté**es**."
  },
  {
   "type": "completer",
   "phrase": "La maîtresse est ___ à huit heures.",
   "reponse": "arrivée",
   "choix": [
    "arrivée",
    "arrivé",
    "arrivés"
   ],
   "expl": "Une femme : arrivé**e**."
  },
  {
   "type": "completer",
   "phrase": "Les garçons sont ___ dehors.",
   "reponse": "sortis",
   "choix": [
    "sortis",
    "sorti",
    "sorties"
   ],
   "expl": "Plusieurs garçons : sorti**s**."
  },
  {
   "type": "ordre",
   "phrase": "Ma voisine est partie en vacances.",
   "expl": "Une femme : parti**e**."
  },
  {
   "type": "ordre",
   "phrase": "Nos amis sont venus dîner.",
   "expl": "Plusieurs : venu**s**."
  }
 ],
 "passe-4": [
  {
   "type": "ecouter",
   "phrase": "Elle a mangé.",
   "faux": [
    "Elle est mangée.",
    "Elle mange."
   ],
   "expl": "On entend **a mangé**."
  },
  {
   "type": "ecouter",
   "phrase": "Les enfants ont joué.",
   "faux": [
    "Les enfants jouent.",
    "Les enfants sont joués."
   ],
   "expl": "On entend **ont joué**."
  },
  {
   "type": "ecouter",
   "phrase": "Ma femme a acheté du pain.",
   "faux": [
    "Ma femme achète du pain.",
    "Ma femme va acheter du pain."
   ],
   "expl": "On entend **a acheté**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ils ont fini.",
   "vrai": true,
   "expl": "Avec **avoir** : pas d'accord."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle a parlée avec le médecin.",
   "vrai": false,
   "correction": "Elle a parlé avec le médecin.",
   "expl": "Avec **avoir** : pas de **-e**."
  },
  {
   "type": "vraifaux",
   "phrase": "Les clients ont payés.",
   "vrai": false,
   "correction": "Les clients ont payé.",
   "expl": "Avec **avoir** : pas de **-s**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Elle a",
     "mangé."
    ],
    [
     "Elle est",
     "partie."
    ],
    [
     "Ils ont",
     "mangé du pain."
    ],
    [
     "Ils sont",
     "partis."
    ]
   ],
   "expl": "Avec **avoir** : pas d'accord.\n\nAvec **être** : on accorde."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et la règle",
   "paires": [
    [
     "avec avoir",
     "pas d'accord"
    ],
    [
     "avec être",
     "on accorde"
    ],
    [
     "elle a",
     "dansé"
    ],
    [
     "elle est",
     "tombée"
    ]
   ],
   "expl": "Avoir : pas d'accord.\n\nÊtre : accord."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ma mère a téléphoné.",
   "faux": "Ma mère a téléphonée.",
   "expl": "Avec **avoir** : pas de **-e**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous avons regardé un film.",
   "faux": "Nous avons regardés un film.",
   "expl": "Avec **avoir** : pas de **-s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les filles ont chanté.",
   "faux": "Les filles ont chantées.",
   "expl": "Avec **avoir** : pas d'accord."
  },
  {
   "type": "completer",
   "phrase": "Mes sœurs ont ___ le repas.",
   "reponse": "préparé",
   "choix": [
    "préparé",
    "préparées",
    "préparés"
   ],
   "expl": "Avec **avoir** : pas d'accord."
  },
  {
   "type": "completer",
   "phrase": "Elle a ___ la porte.",
   "reponse": "ouvert",
   "choix": [
    "ouvert",
    "ouverte",
    "ouverts"
   ],
   "expl": "Avec **avoir** : pas d'accord."
  },
  {
   "type": "ordre",
   "phrase": "Ma fille a dessiné un chat.",
   "expl": "Avec **avoir** : dessiné."
  },
  {
   "type": "ordre",
   "phrase": "Les voisins ont fait du bruit.",
   "expl": "Avec **avoir** : fait."
  }
 ],
 "passe-5": [
  {
   "type": "ecouter",
   "phrase": "Je me lève à sept heures.",
   "faux": [
    "Je se lève à sept heures.",
    "Je me lave à sept heures."
   ],
   "expl": "Avec **je** : **me**.\n\nOn entend **lève**."
  },
  {
   "type": "ecouter",
   "phrase": "Elle s'est habillée vite.",
   "faux": [
    "Elle s'habille vite.",
    "Elle c'est habillée vite."
   ],
   "expl": "Au passé : **s'est**."
  },
  {
   "type": "ecouter",
   "phrase": "Les enfants se sont couchés tôt.",
   "faux": [
    "Les enfants se couchent tôt.",
    "Les enfants ont couché tôt."
   ],
   "expl": "On entend **se sont couchés**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je me suis trompé.",
   "vrai": true,
   "expl": "Avec **je** : **me**.\n\nAu passé : avec **être**."
  },
  {
   "type": "vraifaux",
   "phrase": "Tu se réveilles à quelle heure ?",
   "vrai": false,
   "correction": "Tu te réveilles à quelle heure ?",
   "expl": "Avec **tu** : **te**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ma fille s'a lavée.",
   "vrai": false,
   "correction": "Ma fille s'est lavée.",
   "expl": "Au passé : avec **être**.\n\nS'est."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et le bon petit mot",
   "paires": [
    [
     "je",
     "me lève"
    ],
    [
     "tu",
     "te lèves"
    ],
    [
     "il",
     "se lève"
    ],
    [
     "vous",
     "vous levez"
    ]
   ],
   "expl": "Le petit mot change avec la personne."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et son sens",
   "paires": [
    [
     "se lever",
     "sortir du lit"
    ],
    [
     "se coucher",
     "aller au lit"
    ],
    [
     "s'habiller",
     "mettre ses vêtements"
    ],
    [
     "se laver",
     "prendre une douche"
    ]
   ],
   "expl": "Les verbes avec **se**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous nous promenons au parc.",
   "faux": "Nous se promenons au parc.",
   "expl": "Avec **nous** : **nous**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il s'est réveillé tard.",
   "faux": "Il c'est réveillé tard.",
   "expl": "Se réveiller, au passé : **s'est**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je m'habille vite.",
   "faux": "Je me habille vite.",
   "expl": "Avant **h** muet : **m'**."
  },
  {
   "type": "completer",
   "phrase": "Vous ___ couchez tard ?",
   "reponse": "vous",
   "choix": [
    "vous",
    "se",
    "nous"
   ],
   "expl": "Avec **vous** : **vous**."
  },
  {
   "type": "completer",
   "phrase": "Elle s'est ___ à six heures.",
   "reponse": "levée",
   "choix": [
    "levée",
    "levé",
    "levés"
   ],
   "expl": "Une femme : levé**e**."
  },
  {
   "type": "ordre",
   "phrase": "Mon mari se rase le matin.",
   "expl": "Mon mari : **se** rase."
  },
  {
   "type": "ordre",
   "phrase": "Nous nous sommes trompés de rue.",
   "expl": "Nous : **nous**.\n\nAu passé : **sommes**, avec un **s**."
  }
 ],
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
   "expl": "le\n\nla\n\nles : une chose ou une personne. lui : à une personne. y : un lieu. en : une quantité."
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
 ],
 "ponctuation-1": [
  {
   "type": "ecouter",
   "phrase": "Le rendez-vous est lundi.",
   "faux": [
    "Le rendez-vous est mardi.",
    "Le rendez-vous est jeudi."
   ],
   "expl": "On entend **lundi**.\n\nPas de majuscule."
  },
  {
   "type": "ecouter",
   "phrase": "Il parle français.",
   "faux": [
    "Il parle anglais.",
    "Il parle arabe."
   ],
   "expl": "On entend **français**.\n\nPas de majuscule."
  },
  {
   "type": "ecouter",
   "phrase": "J'habite à Lyon.",
   "faux": [
    "J'habite à Lille.",
    "J'habite à Nice."
   ],
   "expl": "On entend **Lyon**.\n\nUne ville : majuscule."
  },
  {
   "type": "vraifaux",
   "phrase": "Mon fils s'appelle Adam.",
   "vrai": true,
   "expl": "Majuscule au début et au prénom."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous partons en Juillet.",
   "vrai": false,
   "correction": "Nous partons en juillet.",
   "expl": "Les mois : pas de majuscule."
  },
  {
   "type": "vraifaux",
   "phrase": "ma fille est à l'école.",
   "vrai": false,
   "correction": "Ma fille est à l'école.",
   "expl": "Début de la phrase : **majuscule**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et la règle",
   "paires": [
    [
     "Lyon",
     "majuscule : une ville"
    ],
    [
     "lundi",
     "pas de majuscule : un jour"
    ],
    [
     "Adam",
     "majuscule : un prénom"
    ],
    [
     "janvier",
     "pas de majuscule : un mois"
    ]
   ],
   "expl": "Majuscule : prénoms, villes, pays."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et ce qu'il est",
   "paires": [
    [
     "la France",
     "un pays"
    ],
    [
     "le français",
     "une langue"
    ],
    [
     "les Français",
     "les personnes"
    ],
    [
     "Paris",
     "une ville"
    ]
   ],
   "expl": "La langue : pas de majuscule."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ma sœur habite en Algérie.",
   "faux": "ma sœur habite en algérie.",
   "expl": "Majuscule au début et au pays."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Le marché est ouvert le dimanche.",
   "faux": "Le marché est ouvert le Dimanche.",
   "expl": "Les jours : pas de majuscule."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'apprends le français.",
   "faux": "J'apprends le Français.",
   "expl": "La langue : pas de majuscule."
  },
  {
   "type": "completer",
   "phrase": "Mon anniversaire est en ___.",
   "reponse": "mars",
   "choix": [
    "mars",
    "Mars",
    "MARS"
   ],
   "expl": "Les mois : pas de majuscule."
  },
  {
   "type": "completer",
   "phrase": "Nous allons à ___ samedi.",
   "reponse": "Marseille",
   "choix": [
    "Marseille",
    "marseille",
    "MARSEILLE"
   ],
   "expl": "Une ville : majuscule."
  },
  {
   "type": "ordre",
   "phrase": "Mon mari travaille à Lyon.",
   "expl": "Majuscule au début et à **Lyon**."
  },
  {
   "type": "ordre",
   "phrase": "La réunion est jeudi.",
   "expl": "**jeudi** : pas de majuscule.\n\nUn point à la fin."
  }
 ],
 "ponctuation-2": [
  {
   "type": "ecouter",
   "phrase": "Hier, il a plu.",
   "faux": [
    "Hier, il a neigé.",
    "Demain, il va pleuvoir."
   ],
   "expl": "On entend **hier** puis une petite pause."
  },
  {
   "type": "ecouter",
   "phrase": "C'est cher, mais c'est bon.",
   "faux": [
    "C'est cher, donc c'est bon.",
    "C'est cher et c'est bon."
   ],
   "expl": "On entend **mais**.\n\nUne virgule avant mais."
  },
  {
   "type": "ecouter",
   "phrase": "J'achète du pain, du lait et des œufs.",
   "faux": [
    "J'achète du pain et du lait.",
    "J'achète du pain, du riz et des œufs."
   ],
   "expl": "Une liste : des virgules.\n\nPas avant **et**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ce soir, je travaille.",
   "vrai": true,
   "expl": "Une virgule après **Ce soir**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il pleut mais, je sors.",
   "vrai": false,
   "correction": "Il pleut, mais je sors.",
   "expl": "La virgule va **avant** mais."
  },
  {
   "type": "vraifaux",
   "phrase": "Je prends des pommes, des poires et des bananes.",
   "vrai": true,
   "expl": "Des virgules dans la liste.\n\nPas avant le dernier **et**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Demain,",
     "je travaille."
    ],
    [
     "Bonjour Madame,",
     "je vous écris."
    ],
    [
     "C'est loin,",
     "mais j'y vais."
    ],
    [
     "Du pain,",
     "du lait et du sucre."
    ]
   ],
   "expl": "La virgule : une petite pause."
  },
  {
   "type": "associer",
   "consigne": "Reliez où va la virgule",
   "paires": [
    [
     "dans une liste",
     "entre les choses"
    ],
    [
     "Hier",
     "après le mot"
    ],
    [
     "mais",
     "avant le mot"
    ],
    [
     "et",
     "jamais avant le dernier"
    ]
   ],
   "expl": "Les règles de la virgule."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Ce matin, j'ai vu le médecin.",
   "faux": "Ce matin j'ai, vu le médecin.",
   "expl": "La pause après **Ce matin**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Bonjour Monsieur, votre voiture est prête.",
   "faux": "Bonjour, Monsieur votre voiture est prête.",
   "expl": "Une virgule après **Bonjour Monsieur**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il est malade, donc il reste au lit.",
   "faux": "Il est malade donc, il reste au lit.",
   "expl": "La virgule va **avant** donc."
  },
  {
   "type": "completer",
   "phrase": "Lundi___ je vais à la mairie.",
   "reponse": ",",
   "choix": [
    ",",
    ".",
    "?"
   ],
   "expl": "Après **Lundi** : une virgule."
  },
  {
   "type": "completer",
   "phrase": "J'ai acheté des tomates, des oignons ___ des carottes.",
   "reponse": "et",
   "choix": [
    "et",
    ", et",
    ","
   ],
   "expl": "Avant le dernier : **et**, sans virgule."
  },
  {
   "type": "ordre",
   "phrase": "Hier, nous sommes allés au parc.",
   "expl": "**Hier** + une virgule."
  },
  {
   "type": "ordre",
   "phrase": "Je suis fatigué, mais content.",
   "expl": "Une virgule **avant** mais."
  }
 ],
 "ponctuation-3": [
  {
   "type": "ecouter",
   "phrase": "Vous venez demain ?",
   "faux": [
    "Vous venez demain.",
    "Vous venez lundi ?"
   ],
   "expl": "La voix monte : c'est une question.\n\n**?**"
  },
  {
   "type": "ecouter",
   "phrase": "Attention !",
   "faux": [
    "Attention.",
    "À demain !"
   ],
   "expl": "La voix est forte : **!**"
  },
  {
   "type": "ecouter",
   "phrase": "Combien ça coûte ?",
   "faux": [
    "Ça coûte combien.",
    "Combien ça coûte."
   ],
   "expl": "La voix monte : **?**"
  },
  {
   "type": "vraifaux",
   "phrase": "Quelle belle journée !",
   "vrai": true,
   "expl": "On est content : **!**"
  },
  {
   "type": "vraifaux",
   "phrase": "Où est la gare.",
   "vrai": false,
   "correction": "Où est la gare ?",
   "expl": "Une question : **?**"
  },
  {
   "type": "vraifaux",
   "phrase": "Le magasin ouvre à neuf heures.",
   "vrai": true,
   "expl": "Une information : **un point**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la phrase et le bon signe",
   "paires": [
    [
     "Tu as faim",
     "? point d'interrogation"
    ],
    [
     "Bravo",
     "! point d'exclamation"
    ],
    [
     "Il fait beau",
     ". un point"
    ],
    [
     "Bonjour Madame",
     ", une virgule"
    ]
   ],
   "expl": "Question : **?**\n\nÉmotion : **!**\n\nInformation : **.**"
  },
  {
   "type": "associer",
   "consigne": "Reliez le signe et son rôle",
   "paires": [
    [
     "? point d'interrogation",
     "une question"
    ],
    [
     "! point d'exclamation",
     "une émotion"
    ],
    [
     ". un point",
     "une information"
    ],
    [
     ", une virgule",
     "une petite pause"
    ]
   ],
   "expl": "Chaque signe a un rôle."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Tu viens avec moi ?",
   "faux": "Tu viens avec moi !",
   "expl": "On demande : **?**"
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Merci beaucoup !",
   "faux": "Merci beaucoup ?",
   "expl": "On remercie avec joie : **!**"
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Est-ce que le médecin est là ?",
   "faux": "Est-ce que le médecin est là.",
   "expl": "Est-ce que : une question.\n\n**?**"
  },
  {
   "type": "completer",
   "phrase": "Comment tu t'appelles ___",
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
   "phrase": "Joyeux anniversaire ___",
   "reponse": "!",
   "choix": [
    "!",
    "?",
    "."
   ],
   "expl": "Une émotion : **!**"
  },
  {
   "type": "ordre",
   "phrase": "Pourquoi tu pleures ?",
   "expl": "Une question : **?** à la fin."
  },
  {
   "type": "ordre",
   "phrase": "Fais attention à la route !",
   "expl": "Un ordre : **!** à la fin."
  }
 ],
 "ponctuation-4": [
  {
   "type": "ecouter",
   "phrase": "J'ai faim.",
   "faux": [
    "Je ai faim.",
    "J'ai froid."
   ],
   "expl": "Avant **a** : je devient **j'**."
  },
  {
   "type": "ecouter",
   "phrase": "Il n'a pas le temps.",
   "faux": [
    "Il ne a pas le temps.",
    "Il a le temps."
   ],
   "expl": "Avant **a** : ne devient **n'**."
  },
  {
   "type": "ecouter",
   "phrase": "Qu'est-ce que c'est ?",
   "faux": [
    "Que est-ce que c'est ?",
    "Qu'est-ce que tu dis ?"
   ],
   "expl": "Avant **e** : que devient **qu'**."
  },
  {
   "type": "vraifaux",
   "phrase": "L'hôpital est loin.",
   "vrai": true,
   "expl": "Le **h** ne s'entend pas : **l'**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je aime le thé.",
   "vrai": false,
   "correction": "J'aime le thé.",
   "expl": "Avant **a** : je devient **j'**."
  },
  {
   "type": "vraifaux",
   "phrase": "D'accord, je viens.",
   "vrai": true,
   "expl": "D'accord : avec **d'**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et sa forme avec apostrophe",
   "paires": [
    [
     "je",
     "j'ai"
    ],
    [
     "le",
     "l'école"
    ],
    [
     "ne",
     "il n'a pas"
    ],
    [
     "que",
     "qu'est-ce que"
    ]
   ],
   "expl": "Avant une voyelle, on met une apostrophe."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "J'",
     "habite ici."
    ],
    [
     "L'",
     "école est fermée."
    ],
    [
     "Il n'",
     "aime pas ça."
    ],
    [
     "Je",
     "mange."
    ]
   ],
   "expl": "Avant une consonne : on garde **je**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle s'appelle Nora.",
   "faux": "Elle se appelle Nora.",
   "expl": "Avant **a** : se devient **s'**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je n'ai pas de voiture.",
   "faux": "Je ne ai pas de voiture.",
   "expl": "Avant **a** : ne devient **n'**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je mange à midi.",
   "faux": "J'mange à midi.",
   "expl": "Avant **m** : on garde **je**."
  },
  {
   "type": "completer",
   "phrase": "___ enfant joue dehors.",
   "reponse": "L'",
   "choix": [
    "L'",
    "Le",
    "La"
   ],
   "expl": "Avant **e** : **l'**."
  },
  {
   "type": "completer",
   "phrase": "Je ___ en ai pas.",
   "reponse": "n'",
   "choix": [
    "n'",
    "ne",
    "pas"
   ],
   "expl": "Avant **e** : ne devient **n'**."
  },
  {
   "type": "ordre",
   "phrase": "J'attends l'autobus avec mon fils.",
   "expl": "**J'**attends.\n\n**L'**autobus."
  },
  {
   "type": "ordre",
   "phrase": "Qu'est-ce qu'il veut ?",
   "expl": "**Qu'**est-ce.\n\n**Qu'**il."
  }
 ],
 "ponctuation-5": [
  {
   "type": "ecouter",
   "phrase": "Bonjour Madame, mon fils est malade aujourd'hui.",
   "faux": [
    "Bonjour Madame, mon fils est absent demain.",
    "Salut, mon fils est malade."
   ],
   "expl": "On entend **Bonjour Madame** et **malade aujourd'hui**."
  },
  {
   "type": "ecouter",
   "phrase": "Votre voiture est prête. Bonne journée.",
   "faux": [
    "Votre voiture n'est pas prête.",
    "Votre voiture est prête demain."
   ],
   "expl": "On entend **est prête**."
  },
  {
   "type": "ecouter",
   "phrase": "Je voudrais prendre rendez-vous.",
   "faux": [
    "Je voudrais annuler le rendez-vous.",
    "Je veux un rendez-vous."
   ],
   "expl": "On entend **prendre rendez-vous**."
  },
  {
   "type": "vraifaux",
   "phrase": "Bonjour Madame, ma fille ne viendra pas demain. Merci.",
   "vrai": true,
   "expl": "Bonjour, le message, Merci.\n\nC'est un bon message."
  },
  {
   "type": "vraifaux",
   "phrase": "Slt, mon fils vient pas.",
   "vrai": false,
   "correction": "Bonjour, mon fils ne viendra pas.",
   "expl": "Pas d'abréviation.\n\nÀ l'écrit : **ne… pas**."
  },
  {
   "type": "vraifaux",
   "phrase": "Cordialement, Ali Benali.",
   "vrai": true,
   "expl": "Une fin polie et la signature."
  },
  {
   "type": "associer",
   "consigne": "Reliez la partie et l'exemple",
   "paires": [
    [
     "le début",
     "Bonjour Madame,"
    ],
    [
     "le message",
     "Mon fils est malade."
    ],
    [
     "la fin",
     "Cordialement,"
    ],
    [
     "la signature",
     "Prénom Nom"
    ]
   ],
   "expl": "Un message sérieux a 4 parties."
  },
  {
   "type": "associer",
   "consigne": "Reliez l'abréviation et le mot entier",
   "paires": [
    [
     "svp",
     "s'il vous plaît"
    ],
    [
     "stp",
     "s'il te plaît"
    ],
    [
     "rdv",
     "rendez-vous"
    ],
    [
     "slt",
     "salut"
    ]
   ],
   "expl": "Dans un message sérieux, on écrit le mot entier."
  },
  {
   "type": "choisir",
   "consigne": "à la maîtresse",
   "juste": "Bonjour Madame, pouvez-vous me rappeler ?",
   "faux": "Salut, tu peux me rappeler ?",
   "expl": "À la maîtresse : **Bonjour Madame**, **vous**."
  },
  {
   "type": "choisir",
   "consigne": "à un client",
   "juste": "Bonjour, votre devis est prêt. Cordialement.",
   "faux": "Coucou, ton devis est prêt. Bisous.",
   "expl": "À un client : **Bonjour**, **votre**, **Cordialement**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Merci de votre réponse.",
   "faux": "Merci de votre réponse svp.",
   "expl": "Pas d'abréviation."
  },
  {
   "type": "completer",
   "phrase": "___ Madame, je vous écris pour mon fils.",
   "reponse": "Bonjour",
   "choix": [
    "Bonjour",
    "Salut",
    "Coucou"
   ],
   "expl": "Un message sérieux : **Bonjour**."
  },
  {
   "type": "completer",
   "phrase": "Merci beaucoup. ___ journée !",
   "reponse": "Bonne",
   "choix": [
    "Bonne",
    "Bon",
    "Bonnes"
   ],
   "expl": "Une journée : **bonne**."
  },
  {
   "type": "ordre",
   "phrase": "Bonjour Monsieur, je voudrais un rendez-vous.",
   "expl": "D'abord **Bonjour Monsieur**.\n\nPuis le message."
  },
  {
   "type": "ordre",
   "phrase": "Merci et bonne journée.",
   "expl": "La fin du message : **Merci**."
  }
 ],
 "verbes-1": [
  {
   "type": "ecouter",
   "phrase": "Nous mangeons à midi.",
   "faux": [
    "Nous mangions à midi.",
    "Vous mangez à midi."
   ],
   "expl": "On entend **nous** et **-ons**."
  },
  {
   "type": "ecouter",
   "phrase": "Tu parles français ?",
   "faux": [
    "Vous parlez français ?",
    "Il parle français ?"
   ],
   "expl": "On entend **tu**."
  },
  {
   "type": "ecouter",
   "phrase": "Vous habitez à Lyon ?",
   "faux": [
    "Vous habitiez à Lyon ?",
    "Nous habitons à Lyon ?"
   ],
   "expl": "On entend **vous** et **-ez**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je travaille au garage.",
   "vrai": true,
   "expl": "Avec **je** : **-e**.\n\nJe travaille."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous regardez la télé.",
   "vrai": false,
   "correction": "Nous regardons la télé.",
   "expl": "Avec **nous** : **-ons**."
  },
  {
   "type": "vraifaux",
   "phrase": "Elles cherchent leurs clés.",
   "vrai": true,
   "expl": "Avec **elles** : **-ent**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et la bonne fin",
   "paires": [
    [
     "je",
     "parle"
    ],
    [
     "tu",
     "parles"
    ],
    [
     "nous",
     "parlons"
    ],
    [
     "vous",
     "parlez"
    ]
   ],
   "expl": "Chaque personne a sa fin."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Ils",
     "jouent dehors."
    ],
    [
     "Nous",
     "jouons dehors."
    ],
    [
     "Tu",
     "joues dehors."
    ],
    [
     "Vous",
     "jouez dehors."
    ]
   ],
   "expl": "ils : **-ent**\n\nnous : **-ons**\n\ntu : **-es**\n\nvous : **-ez**"
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'aime le café.",
   "faux": "Je aime le café.",
   "expl": "Avant **a** : je devient **j'**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Vous cherchez quelque chose ?",
   "faux": "Vous cherchons quelque chose ?",
   "expl": "Avec **vous** : **-ez**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mon fils écoute la radio.",
   "faux": "Mon fils écoutent la radio.",
   "expl": "Mon fils, c'est **il**.\n\nIl écout**e**."
  },
  {
   "type": "completer",
   "phrase": "Nous ___ à huit heures.",
   "reponse": "commençons",
   "choix": [
    "commençons",
    "commencez",
    "commencent"
   ],
   "expl": "Avec **nous** : **-ons**.\n\nNous commen**ç**ons."
  },
  {
   "type": "completer",
   "phrase": "Tu ___ le bus ?",
   "reponse": "attends",
   "choix": [
    "attends",
    "attendez",
    "attendons"
   ],
   "expl": "Avec **tu** : un **s**.\n\nTu attends."
  },
  {
   "type": "ordre",
   "phrase": "Mes parents habitent en Kabylie.",
   "expl": "Mes parents, c'est **ils**.\n\nIls habit**ent**."
  },
  {
   "type": "ordre",
   "phrase": "Vous parlez trop vite pour moi.",
   "expl": "Avec **vous** : **-ez**.\n\nVous parlez."
  }
 ],
 "verbes-2": [
  {
   "type": "ecouter",
   "phrase": "Je suis malade.",
   "faux": [
    "J'ai mal.",
    "Je suis en retard."
   ],
   "expl": "On entend **je suis malade**."
  },
  {
   "type": "ecouter",
   "phrase": "Nous allons à la mairie.",
   "faux": [
    "Nous sommes à la mairie.",
    "Vous allez à la mairie."
   ],
   "expl": "On entend **nous allons**."
  },
  {
   "type": "ecouter",
   "phrase": "Ils sont en retard.",
   "faux": [
    "Ils ont du retard.",
    "Il est en retard."
   ],
   "expl": "On entend **ils sont**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai froid.",
   "vrai": true,
   "expl": "Le froid : avec **avoir**.\n\nJ'**ai** froid."
  },
  {
   "type": "vraifaux",
   "phrase": "Je suis faim.",
   "vrai": false,
   "correction": "J'ai faim.",
   "expl": "La faim : avec **avoir**.\n\nJ'**ai** faim."
  },
  {
   "type": "vraifaux",
   "phrase": "Vous faites les courses ?",
   "vrai": true,
   "expl": "Avec **vous** : vous **faites**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et le verbe être",
   "paires": [
    [
     "je",
     "suis"
    ],
    [
     "tu",
     "es"
    ],
    [
     "nous",
     "sommes"
    ],
    [
     "ils",
     "sont"
    ]
   ],
   "expl": "Le verbe **être**, à apprendre par cœur."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et le verbe avoir",
   "paires": [
    [
     "tu",
     "as"
    ],
    [
     "il",
     "a"
    ],
    [
     "vous",
     "avez"
    ],
    [
     "elles",
     "ont"
    ]
   ],
   "expl": "Le verbe **avoir**, à apprendre par cœur."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Mon fils a dix ans.",
   "faux": "Mon fils est dix ans.",
   "expl": "L'âge : avec **avoir**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous faisons le ménage.",
   "faux": "Nous fesons le ménage.",
   "expl": "Avec **nous** : nous **faisons**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Tu vas bien ?",
   "faux": "Tu va bien ?",
   "expl": "Avec **tu** : tu **vas**, avec un **s**."
  },
  {
   "type": "completer",
   "phrase": "Vous ___ fatigués ?",
   "reponse": "êtes",
   "choix": [
    "êtes",
    "avez",
    "faites"
   ],
   "expl": "Fatigué : avec **être**.\n\nVous **êtes**."
  },
  {
   "type": "completer",
   "phrase": "Ils ___ deux enfants.",
   "reponse": "ont",
   "choix": [
    "ont",
    "sont",
    "font"
   ],
   "expl": "Avec **avoir** : ils **ont**."
  },
  {
   "type": "ordre",
   "phrase": "Je vais à la pharmacie.",
   "expl": "Avec **je** : je **vais**."
  },
  {
   "type": "ordre",
   "phrase": "Elle est contente de son travail.",
   "expl": "Content : avec **être**.\n\nElle **est**."
  }
 ],
 "verbes-3": [
  {
   "type": "ecouter",
   "phrase": "Je peux vous aider ?",
   "faux": [
    "Je veux vous aider.",
    "Vous pouvez m'aider ?"
   ],
   "expl": "On entend **je peux**."
  },
  {
   "type": "ecouter",
   "phrase": "Il doit partir à midi.",
   "faux": [
    "Il veut partir à midi.",
    "Il doit partir à minuit."
   ],
   "expl": "On entend **il doit**."
  },
  {
   "type": "ecouter",
   "phrase": "Ils viennent demain.",
   "faux": [
    "Il vient demain.",
    "Ils venaient demain."
   ],
   "expl": "On entend **ils viennent**."
  },
  {
   "type": "vraifaux",
   "phrase": "Vous voulez un café ?",
   "vrai": true,
   "expl": "Avec **vous** : vous **voulez**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je dois travailler demain.",
   "vrai": true,
   "expl": "**Je dois** + **travailler**.\n\nLe 2e verbe ne change pas."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous pouvons venons ce soir.",
   "vrai": false,
   "correction": "Nous pouvons venir ce soir.",
   "expl": "Après **pouvons**, le verbe ne change pas.\n\n**Venir**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et son sens",
   "paires": [
    [
     "pouvoir",
     "être capable"
    ],
    [
     "vouloir",
     "avoir envie"
    ],
    [
     "devoir",
     "être obligé"
    ],
    [
     "savoir",
     "connaître"
    ]
   ],
   "expl": "4 verbes très utiles."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et le verbe prendre",
   "paires": [
    [
     "je",
     "prends"
    ],
    [
     "il",
     "prend"
    ],
    [
     "nous",
     "prenons"
    ],
    [
     "ils",
     "prennent"
    ]
   ],
   "expl": "**Prendre**, à apprendre par cœur."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Tu sais conduire ?",
   "faux": "Tu sais conduis ?",
   "expl": "Après **sais**, le verbe ne change pas.\n\n**Conduire**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je veux parler à la maîtresse.",
   "faux": "Je veut parler à la maîtresse.",
   "expl": "Avec **je** : je **veux**, avec un **x**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Vous devez signer ici.",
   "faux": "Vous devez signez ici.",
   "expl": "Après **devez**, le verbe ne change pas.\n\n**Signer**."
  },
  {
   "type": "completer",
   "phrase": "Il ___ venir demain ?",
   "reponse": "peut",
   "choix": [
    "peut",
    "peux",
    "pouvez"
   ],
   "expl": "Avec **il** : il **peut**."
  },
  {
   "type": "completer",
   "phrase": "Nous ___ le train à sept heures.",
   "reponse": "prenons",
   "choix": [
    "prenons",
    "prenez",
    "prennent"
   ],
   "expl": "Avec **nous** : nous **prenons**."
  },
  {
   "type": "ordre",
   "phrase": "Je ne peux pas venir lundi.",
   "expl": "Je **ne** peux **pas** + **venir**."
  },
  {
   "type": "ordre",
   "phrase": "Vous savez où est la gare ?",
   "expl": "Vous **savez** + où est la gare ?"
  }
 ],
 "verbes-4": [
  {
   "type": "ecouter",
   "phrase": "J'ai mangé à midi.",
   "faux": [
    "Je mange à midi.",
    "Je vais manger à midi."
   ],
   "expl": "On entend **j'ai mangé** : c'est fini."
  },
  {
   "type": "ecouter",
   "phrase": "Il a réparé la voiture.",
   "faux": [
    "Il répare la voiture.",
    "Il va réparer la voiture."
   ],
   "expl": "On entend **il a réparé** : c'est fini."
  },
  {
   "type": "ecouter",
   "phrase": "Vous avez pris vos papiers ?",
   "faux": [
    "Vous prenez vos papiers ?",
    "Vous avez perdu vos papiers ?"
   ],
   "expl": "On entend **avez pris**."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous avons fini le travail.",
   "vrai": true,
   "expl": "**Avons** + **fini**."
  },
  {
   "type": "vraifaux",
   "phrase": "J'ai prendu le bus.",
   "vrai": false,
   "correction": "J'ai pris le bus.",
   "expl": "Prendre au passé : **pris**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ils ont vu le médecin.",
   "vrai": true,
   "expl": "Voir au passé : **vu**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et sa forme au passé",
   "paires": [
    [
     "manger",
     "mangé"
    ],
    [
     "finir",
     "fini"
    ],
    [
     "prendre",
     "pris"
    ],
    [
     "faire",
     "fait"
    ]
   ],
   "expl": "Le verbe au passé, après **avoir**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et sa forme au passé",
   "paires": [
    [
     "voir",
     "vu"
    ],
    [
     "avoir",
     "eu"
    ],
    [
     "être",
     "été"
    ],
    [
     "boire",
     "bu"
    ]
   ],
   "expl": "Ces formes sont à apprendre."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "J'ai acheté du pain.",
   "faux": "J'ai acheter du pain.",
   "expl": "Après **ai** : **acheté**, avec **é**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Il a fait les courses.",
   "faux": "Il a faisé les courses.",
   "expl": "Faire au passé : **fait**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je n'ai pas compris.",
   "faux": "Je ai pas compris.",
   "expl": "**n'** avant ai, **pas** après."
  },
  {
   "type": "completer",
   "phrase": "Nous ___ appelé le garage.",
   "reponse": "avons",
   "choix": [
    "avons",
    "sommes",
    "allons"
   ],
   "expl": "Appeler : avec **avoir**.\n\nNous **avons**."
  },
  {
   "type": "completer",
   "phrase": "Tu as ___ ton café ?",
   "reponse": "bu",
   "choix": [
    "bu",
    "boire",
    "bois"
   ],
   "expl": "Boire au passé : **bu**."
  },
  {
   "type": "ordre",
   "phrase": "Ils ont fini leurs devoirs.",
   "expl": "Ils **ont fini**.\n\n**Quoi ?** → leurs devoirs"
  },
  {
   "type": "ordre",
   "phrase": "Je n'ai pas vu ton message.",
   "expl": "Je **n'**ai **pas** vu.\n\n**Quoi ?** → ton message"
  }
 ],
 "verbes-5": [
  {
   "type": "ecouter",
   "phrase": "Je suis allée à la mairie.",
   "faux": [
    "Je vais à la mairie.",
    "J'ai été à la mairie."
   ],
   "expl": "On entend **je suis allée**."
  },
  {
   "type": "ecouter",
   "phrase": "Ils sont partis tôt.",
   "faux": [
    "Ils partent tôt.",
    "Il est parti tôt."
   ],
   "expl": "On entend **ils sont partis**."
  },
  {
   "type": "ecouter",
   "phrase": "Il est tombé dans l'escalier.",
   "faux": [
    "Il tombe dans l'escalier.",
    "Il a tombé dans l'escalier."
   ],
   "expl": "Tomber : avec **être**.\n\nIl **est** tombé."
  },
  {
   "type": "vraifaux",
   "phrase": "Elle est arrivée en retard.",
   "vrai": true,
   "expl": "Arriver : avec **être**.\n\nUne femme : arrivé**e**."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous avons allés au parc.",
   "vrai": false,
   "correction": "Nous sommes allés au parc.",
   "expl": "Aller : avec **être**."
  },
  {
   "type": "vraifaux",
   "phrase": "Mes filles sont restées à la maison.",
   "vrai": true,
   "expl": "Plusieurs filles : rest**ées**."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Il est",
     "parti."
    ],
    [
     "Elle est",
     "partie."
    ],
    [
     "Ils sont",
     "partis."
    ],
    [
     "Elles sont",
     "parties."
    ]
   ],
   "expl": "Avec **être**, on accorde."
  },
  {
   "type": "associer",
   "consigne": "Reliez le verbe et son contraire",
   "paires": [
    [
     "arriver",
     "partir"
    ],
    [
     "entrer",
     "sortir"
    ],
    [
     "monter",
     "descendre"
    ],
    [
     "naître",
     "mourir"
    ]
   ],
   "expl": "Ces verbes utilisent **être** au passé."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je suis né en 1980.",
   "faux": "J'ai né en 1980.",
   "expl": "Naître : avec **être**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Les enfants sont sortis de l'école.",
   "faux": "Les enfants sont sorti de l'école.",
   "expl": "Plusieurs enfants : sorti**s**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Elle est venue avec sa sœur.",
   "faux": "Elle a venue avec sa sœur.",
   "expl": "Venir : avec **être**."
  },
  {
   "type": "completer",
   "phrase": "Nous ___ arrivés en France en 2010.",
   "reponse": "sommes",
   "choix": [
    "sommes",
    "avons",
    "allons"
   ],
   "expl": "Arriver : avec **être**.\n\nNous **sommes**."
  },
  {
   "type": "completer",
   "phrase": "Ma femme est ___ au marché.",
   "reponse": "allée",
   "choix": [
    "allée",
    "allé",
    "allés"
   ],
   "expl": "Une femme : allé**e**."
  },
  {
   "type": "ordre",
   "phrase": "Mon fils est rentré à six heures.",
   "expl": "Rentrer : avec **être**.\n\nIl **est rentré**."
  },
  {
   "type": "ordre",
   "phrase": "Nous sommes montés au troisième étage.",
   "expl": "Monter : avec **être**.\n\nNous **sommes montés**."
  }
 ],
 "verbes-6": [
  {
   "type": "ecouter",
   "phrase": "Je vais appeler le médecin.",
   "faux": [
    "J'ai appelé le médecin.",
    "J'appelle le médecin."
   ],
   "expl": "On entend **je vais appeler** : c'est demain."
  },
  {
   "type": "ecouter",
   "phrase": "Il va pleuvoir.",
   "faux": [
    "Il pleut.",
    "Il a plu."
   ],
   "expl": "On entend **il va pleuvoir** : c'est bientôt."
  },
  {
   "type": "ecouter",
   "phrase": "Vous allez recevoir un SMS.",
   "faux": [
    "Vous avez reçu un SMS.",
    "Vous recevez un SMS."
   ],
   "expl": "On entend **vous allez recevoir**."
  },
  {
   "type": "vraifaux",
   "phrase": "Nous allons partir en vacances.",
   "vrai": true,
   "expl": "**Allons** + **partir**."
  },
  {
   "type": "vraifaux",
   "phrase": "Je vais mange au restaurant.",
   "vrai": false,
   "correction": "Je vais manger au restaurant.",
   "expl": "Après **vais** : **manger**."
  },
  {
   "type": "vraifaux",
   "phrase": "Ils vont venir ce soir.",
   "vrai": true,
   "expl": "**Vont** + **venir**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et le verbe aller",
   "paires": [
    [
     "je",
     "vais"
    ],
    [
     "tu",
     "vas"
    ],
    [
     "nous",
     "allons"
    ],
    [
     "ils",
     "vont"
    ]
   ],
   "expl": "Le verbe **aller**, pour parler de demain."
  },
  {
   "type": "associer",
   "consigne": "Reliez le début et la fin",
   "paires": [
    [
     "Je vais",
     "prendre le bus."
    ],
    [
     "Nous allons",
     "partir."
    ],
    [
     "Il va",
     "pleuvoir."
    ],
    [
     "Vous allez",
     "signer ici."
    ]
   ],
   "expl": "**Aller** + un verbe qui ne change pas."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Demain, je vais travailler.",
   "faux": "Demain, j'ai travaillé.",
   "expl": "**Demain** : je **vais travailler**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Tu vas venir à la fête ?",
   "faux": "Tu va venir à la fête ?",
   "expl": "Avec **tu** : tu **vas**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "La réparation va coûter cent euros.",
   "faux": "La réparation va coûte cent euros.",
   "expl": "Après **va** : **coûter**."
  },
  {
   "type": "completer",
   "phrase": "Vous ___ recevoir une lettre.",
   "reponse": "allez",
   "choix": [
    "allez",
    "allons",
    "vont"
   ],
   "expl": "Avec **vous** : vous **allez**."
  },
  {
   "type": "completer",
   "phrase": "Je vais ___ mon fils à l'école.",
   "reponse": "emmener",
   "choix": [
    "emmener",
    "emmène",
    "emmené"
   ],
   "expl": "Après **vais**, le verbe ne change pas.\n\n**Emmener**."
  },
  {
   "type": "ordre",
   "phrase": "Nous allons acheter une voiture.",
   "expl": "Nous **allons acheter**.\n\n**Quoi ?** → une voiture"
  },
  {
   "type": "ordre",
   "phrase": "Le médecin va vous recevoir.",
   "expl": "Le médecin **va** + **recevoir**."
  }
 ],
 "verbes-7": [
  {
   "type": "ecouter",
   "phrase": "Avant, je travaillais le samedi.",
   "faux": [
    "Avant, j'ai travaillé le samedi.",
    "Maintenant, je travaille le samedi."
   ],
   "expl": "On entend **avant** et **travaillais**."
  },
  {
   "type": "ecouter",
   "phrase": "Il faisait froid.",
   "faux": [
    "Il fait froid.",
    "Il va faire froid."
   ],
   "expl": "On entend **faisait** : c'est le passé."
  },
  {
   "type": "ecouter",
   "phrase": "Les enfants dormaient.",
   "faux": [
    "Les enfants dorment.",
    "Les enfants ont dormi."
   ],
   "expl": "On entend **dormaient**."
  },
  {
   "type": "vraifaux",
   "phrase": "Quand j'étais petit, j'habitais à la campagne.",
   "vrai": true,
   "expl": "J'**étais**, j'**habitais** : le décor et l'habitude."
  },
  {
   "type": "vraifaux",
   "phrase": "Avant, nous habitaient en Algérie.",
   "vrai": false,
   "correction": "Avant, nous habitions en Algérie.",
   "expl": "Avec **nous** : **-ions**."
  },
  {
   "type": "vraifaux",
   "phrase": "Il pleuvait tous les jours.",
   "vrai": true,
   "expl": "**Tous les jours** : une habitude.\n\nIl pleuv**ait**."
  },
  {
   "type": "associer",
   "consigne": "Reliez la personne et la bonne fin",
   "paires": [
    [
     "je",
     "travaillais"
    ],
    [
     "il",
     "travaillait"
    ],
    [
     "nous",
     "travaillions"
    ],
    [
     "ils",
     "travaillaient"
    ]
   ],
   "expl": "Les fins de l'imparfait."
  },
  {
   "type": "associer",
   "consigne": "Reliez maintenant et avant",
   "paires": [
    [
     "je suis",
     "j'étais"
    ],
    [
     "j'ai",
     "j'avais"
    ],
    [
     "je fais",
     "je faisais"
    ],
    [
     "je vais",
     "j'allais"
    ]
   ],
   "expl": "Le présent et l'imparfait."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Avant, je fumais beaucoup.",
   "faux": "Avant, je fumé beaucoup.",
   "expl": "**Avant** : une habitude.\n\nJe fum**ais**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Nous avions une petite maison.",
   "faux": "Nous avons eu une petite maison avant.",
   "expl": "On décrit le passé.\n\nNous **avions**."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Vous étiez fatigués hier soir ?",
   "faux": "Vous étaient fatigués hier soir ?",
   "expl": "Avec **vous** : **-iez**.\n\nVous **étiez**."
  },
  {
   "type": "completer",
   "phrase": "Quand il était jeune, il ___ au football.",
   "reponse": "jouait",
   "choix": [
    "jouait",
    "joue",
    "jouer"
   ],
   "expl": "Une habitude d'avant.\n\nIl jou**ait**."
  },
  {
   "type": "completer",
   "phrase": "Avant, nous ___ à Paris.",
   "reponse": "habitions",
   "choix": [
    "habitions",
    "habitons",
    "habitaient"
   ],
   "expl": "Avec **nous** : **-ions**."
  },
  {
   "type": "ordre",
   "phrase": "Avant, mon mari travaillait la nuit.",
   "expl": "**Avant** : une habitude.\n\nIl travaill**ait**."
  },
  {
   "type": "ordre",
   "phrase": "Il faisait très chaud cet été.",
   "expl": "On décrit le temps.\n\nIl fais**ait** chaud."
  }
 ],
 "verbes-8": [
  {
   "type": "ecouter",
   "phrase": "Hier, j'ai appelé le garage.",
   "faux": [
    "Demain, je vais appeler le garage.",
    "Avant, j'appelais le garage."
   ],
   "expl": "On entend **hier** et **j'ai appelé**."
  },
  {
   "type": "ecouter",
   "phrase": "Demain, je vais signer le contrat.",
   "faux": [
    "Hier, j'ai signé le contrat.",
    "Je signe le contrat."
   ],
   "expl": "On entend **demain** et **je vais signer**."
  },
  {
   "type": "ecouter",
   "phrase": "Il pleuvait quand je suis sorti.",
   "faux": [
    "Il pleut quand je sors.",
    "Il a plu quand je suis sorti."
   ],
   "expl": "On entend **pleuvait** et **suis sorti**."
  },
  {
   "type": "vraifaux",
   "phrase": "Maintenant, j'habite à Lyon.",
   "vrai": true,
   "expl": "**Maintenant** : le présent."
  },
  {
   "type": "vraifaux",
   "phrase": "Hier, je vais voir ma mère.",
   "vrai": false,
   "correction": "Hier, je suis allé voir ma mère.",
   "expl": "**Hier** : le passé composé."
  },
  {
   "type": "vraifaux",
   "phrase": "Demain, nous allons faire les courses.",
   "vrai": true,
   "expl": "**Demain** : le futur proche."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot du temps et la phrase",
   "paires": [
    [
     "Hier,",
     "j'ai travaillé."
    ],
    [
     "Avant,",
     "je travaillais."
    ],
    [
     "Maintenant,",
     "je travaille."
    ],
    [
     "Demain,",
     "je vais travailler."
    ]
   ],
   "expl": "Le mot du temps aide à choisir."
  },
  {
   "type": "associer",
   "consigne": "Reliez le mot et le temps",
   "paires": [
    [
     "hier",
     "passé composé"
    ],
    [
     "avant",
     "imparfait"
    ],
    [
     "maintenant",
     "présent"
    ],
    [
     "demain",
     "futur proche"
    ]
   ],
   "expl": "Chaque moment a son temps."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "La semaine dernière, j'ai vu le dentiste.",
   "faux": "La semaine dernière, je vais voir le dentiste.",
   "expl": "**La semaine dernière** : le passé composé."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Bientôt, nous allons déménager.",
   "faux": "Bientôt, nous avons déménagé.",
   "expl": "**Bientôt** : le futur proche."
  },
  {
   "type": "choisir",
   "consigne": "",
   "juste": "Je regardais la télé quand tu as appelé.",
   "faux": "J'ai regardé la télé quand tu appelais.",
   "expl": "Je **regardais** : le décor.\n\nTu **as appelé** : l'action."
  },
  {
   "type": "completer",
   "phrase": "Tous les jours, il ___ le bus.",
   "reponse": "prenait",
   "choix": [
    "prenait",
    "a pris",
    "va prendre"
   ],
   "expl": "**Tous les jours**, avant : l'imparfait.\n\nIl pren**ait**."
  },
  {
   "type": "completer",
   "phrase": "La semaine prochaine, nous ___ partir.",
   "reponse": "allons",
   "choix": [
    "allons",
    "sommes",
    "avons"
   ],
   "expl": "**La semaine prochaine** : nous **allons** partir."
  },
  {
   "type": "ordre",
   "phrase": "Hier, ma fille a perdu son manteau.",
   "expl": "**Hier** : le passé composé.\n\nElle **a perdu**."
  },
  {
   "type": "ordre",
   "phrase": "Avant, nous allions au marché le dimanche.",
   "expl": "**Avant** : une habitude.\n\nNous **allions**."
  }
 ]
};
