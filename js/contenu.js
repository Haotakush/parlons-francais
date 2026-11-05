/* =========================================================
   CONTENU — tout le texte de l'appli est ici.
   Pour ajouter une phrase : copier une ligne et changer le texte.
   [mot]            = mot en couleur (exemple)
   [mot1 / mot2]    = mot qu'on peut changer en le touchant
   **mot**          = mot en gras (homophones, grammaire)
   ========================================================= */

const SONS = {
  voyelles: [
    {son:"a",  dire:"a",  ecrit:"a, à",           mots:["papa","table","malade"],   astuce:"Bouche bien ouverte."},
    {son:"i",  dire:"i",  ecrit:"i, y",           mots:["lit","midi","stylo"],      astuce:"Grand sourire."},
    {son:"ou", dire:"où", ecrit:"ou",             mots:["roue","bouche","jour"],    astuce:"Lèvres en avant, comme un bisou."},
    {son:"u",  dire:"u",  ecrit:"u",              mots:["rue","bus","voiture"],     astuce:"Dire « i » avec les lèvres en bisou."},
    {son:"o",  dire:"oh", ecrit:"o, au, eau",     mots:["moto","auto","gâteau"],    astuce:"Bouche ronde."},
    {son:"é",  dire:"é",  ecrit:"é, er, ez, et",  mots:["école","manger","nez"],    astuce:"Sourire, bouche peu ouverte."},
    {son:"è",  dire:"è",  ecrit:"è, ê, ai, ei",   mots:["mère","fête","lait"],      astuce:"Bouche plus ouverte que pour « é »."},
    {son:"e",  dire:"le", ecrit:"e",              mots:["le","petit","demain"],     astuce:"Son court et léger."},
    {son:"eu", dire:"eux",ecrit:"eu, œu",         mots:["feu","deux","sœur"],       astuce:"Dire « é » avec les lèvres en bisou."}
  ],
  nasales: [
    {son:"an", dire:"an",   ecrit:"an, en, am, em",       mots:["maman","enfant","temps"],     astuce:"Le son passe par le nez."},
    {son:"on", dire:"on",   ecrit:"on, om",               mots:["maison","bonjour","nom"],     astuce:"Bouche ronde, le son passe par le nez."},
    {son:"in", dire:"hein", ecrit:"in, ain, ein, un, im", mots:["lapin","pain","lundi"],       astuce:"Sourire, le son passe par le nez."}
  ],
  autres: [
    {son:"oi",  ecrit:"oi",                         mots:["voiture","moi","trois"]},
    {son:"ill", ecrit:"ill, y, i",                  mots:["fille","travail","crayon"]},
    {son:"gn",  ecrit:"gn",                         mots:["montagne","signer","Espagne"]},
    {son:"ch",  ecrit:"ch",                         mots:["chat","chaud","marcher"]},
    {son:"j",   ecrit:"j, g (devant e, i)",         mots:["jour","rouge","garage"]},
    {son:"s",   ecrit:"s, ss, c (devant e, i), ç",  mots:["soupe","poisson","garçon"]},
    {son:"z",   ecrit:"z, s entre deux voyelles",   mots:["zéro","maison","chose"]},
    {son:"r",   ecrit:"r",                          mots:["rouge","garage","frein"]}
  ],
  paires: [
    {titre:"u / ou",  mots:[["rue","roue"],["dessus","dessous"],["tu","tout"]]},
    {titre:"é / è",   mots:[["été","était"],["marché","marchait"]]},
    {titre:"an / on", mots:[["blanc","blond"],["lent","long"],["vent","vont"]]},
    {titre:"an / in", mots:[["cent","cinq"],["vent","vin"]]},
    {titre:"e / é",   mots:[["le","les"],["de","des"],["je","j'ai"]]},
    {titre:"s / z",   mots:[["poisson","poison"],["dessert","désert"]]}
  ]
};

/* Gros boutons des sons : enregistrements faits à la main (dossier audio/sons) */
["01-a","02-i","03-ou","04-u","05-o","06-e-aigu","07-e-grave","08-e","09-eu","10-an","11-on","12-in","13-oi","14-ill","15-gn","16-ch","17-j","18-s","19-z","20-r"].forEach((n, i) => { [...SONS.voyelles, ...SONS.nasales, ...SONS.autres][i].rec = n; });

const HOMOPHONES = [
  {titre:"a / à",   astuce:"Si on peut dire « avait », c'est **a**.", ex:["Il **a** faim.","Je vais **à** l'école."]},
  {titre:"et / est",astuce:"Si on peut dire « était », c'est **est**.", ex:["Il **est** malade.","Du pain **et** du lait."]},
  {titre:"son / sont", astuce:"Si on peut dire « étaient », c'est **sont**.", ex:["**Son** fils est là.","Ils **sont** partis."]},
  {titre:"on / ont",astuce:"Si on peut dire « avaient », c'est **ont**.", ex:["**On** mange à midi.","Ils **ont** fini."]},
  {titre:"ou / où", astuce:"**où** = un lieu. **ou** = ou bien.", ex:["Tu veux du thé **ou** du café ?","**Où** est la mairie ?"]},
  {titre:"ce / se", astuce:"**se** devant un verbe (se laver). **ce** devant un nom.", ex:["**Ce** matin, il pleut.","Il **se** lève tôt."]},
  {titre:"ces / ses", astuce:"**ses** = les siens. **ces** = ceux-là.", ex:["Il cherche **ses** enfants.","**Ces** pneus sont usés."]},
  {titre:"c'est / s'est", astuce:"**s'est** devant un verbe au passé.", ex:["**C'est** prêt.","Il **s'est** trompé."]},
  {titre:"mais / mes", astuce:"**mes** = les miens.", ex:["Je viens, **mais** en retard.","J'ai perdu **mes** clés."]},
  {titre:"la / là / l'a", astuce:"**là** = un lieu. **l'a** = l'avait.", ex:["**La** voiture est **là**.","Il **l'a** réparée."]},
  {titre:"peu / peut / peux", astuce:"**peut / peux** = pouvoir. **peu** = pas beaucoup.", ex:["Je **peux** venir.","Il **peut** attendre.","Un **peu** de sel."]},
  {titre:"verre / vert / vers", astuce:"Le sens de la phrase aide à choisir.", ex:["Un **verre** d'eau.","Le feu est **vert**.","Je viens **vers** 10 heures."]},
  {titre:"cent / sans / sang", astuce:"Le sens de la phrase aide à choisir.", ex:["**Cent** euros.","Un café **sans** sucre.","Une prise de **sang**."]},
  {titre:"-er / -é / -ez", astuce:"Remplacer par « vendre » : vendre → **-er**, vendu → **-é**.", ex:["Je vais **manger**.","J'ai **mangé**.","Vous **mangez** à midi ?"]}
];

const CONSTRUIRE = [
  {titre:"1. La phrase de base", regle:"Qui + fait quoi + complément.",
   ex:["**Je** répare la voiture.","**Mon fils** va à l'école.","**Nous** avons un rendez-vous demain."]},
  {titre:"2. Dire non", regle:"On entoure le verbe : **ne** + verbe + **pas**. Devant une voyelle, ne devient **n'**.",
   ex:["Je **ne** sais **pas**.","Ce **n'**est **pas** grave.","Il **n'**a **pas** mangé.","Il **ne** vient **plus**.","Je **ne** bois **jamais** de café."]},
  {titre:"3. Poser une question", regle:"La voix monte à la fin. On peut ajouter « est-ce que » ou un mot question.",
   ex:["Tu viens demain ?","**Est-ce que** vous êtes disponible ?","**Combien** ça coûte ?","**À quelle heure** commence l'école ?","**Pourquoi** il est absent ?","**Est-ce que vous pourriez** m'aider ?"]},
  {titre:"5. Dire quand", regle:"Passé, présent, futur.",
   ex:["**Hier**, il était malade.","**Il y a deux jours**, j'ai appelé.","**Aujourd'hui**, je travaille.","**Demain**, la voiture sera prête.","**La semaine prochaine**, nous avons rendez-vous.","**Dans deux jours**, la pièce arrive.","Je viens **vers 14 heures**."]},
  {titre:"6. Les petits mots", regle:"le / la / les (connu), un / une / des (pas connu), au / à la / aux, du / de la.",
   ex:["**La** voiture de monsieur Martin.","J'ai **une** voiture.","Je vais **au** garage.","Je vais **à la** mairie.","Il est **aux** urgences.","Je viens **du** médecin.","Je viens **de la** pharmacie.","Voici **vos** papiers."]}
];

const CONNECTEURS = [
  {mot:"et / aussi", sens:"ajouter",          ex:"Il a mal à la tête **et** il tousse."},
  {mot:"mais",       sens:"opposer",          ex:"La voiture roule, **mais** elle fait du bruit."},
  {mot:"parce que",  sens:"la cause",         ex:"Il est absent **parce qu'**il est malade."},
  {mot:"donc / alors", sens:"la conséquence", ex:"La batterie est vide, **donc** la voiture ne démarre pas."},
  {mot:"quand / avant / après", sens:"le moment", ex:"**Quand** vous arrivez, appelez-moi."},
  {mot:"si",         sens:"la condition",     ex:"**Si** c'est urgent, je peux venir ce soir."},
  {mot:"pour",       sens:"le but",           ex:"J'appelle **pour** prendre rendez-vous."}
];

const VERBES = {
  "être":     {p:["suis","es","est","sommes","êtes","sont"], aux:"avoir", pp:"été", imp:"ét"},
  "avoir":    {p:["ai","as","a","avons","avez","ont"], aux:"avoir", pp:"eu", imp:"av"},
  "aller":    {p:["vais","vas","va","allons","allez","vont"], aux:"être", pp:"allé", imp:"all"},
  "faire":    {p:["fais","fais","fait","faisons","faites","font"], aux:"avoir", pp:"fait", imp:"fais"},
  "pouvoir":  {p:["peux","peux","peut","pouvons","pouvez","peuvent"], aux:"avoir", pp:"pu", imp:"pouv"},
  "vouloir":  {p:["veux","veux","veut","voulons","voulez","veulent"], aux:"avoir", pp:"voulu", imp:"voul"},
  "devoir":   {p:["dois","dois","doit","devons","devez","doivent"], aux:"avoir", pp:"dû", imp:"dev"},
  "venir":    {p:["viens","viens","vient","venons","venez","viennent"], aux:"être", pp:"venu", imp:"ven"},
  "prendre":  {p:["prends","prends","prend","prenons","prenez","prennent"], aux:"avoir", pp:"pris", imp:"pren"},
  "dire":     {p:["dis","dis","dit","disons","dites","disent"], aux:"avoir", pp:"dit", imp:"dis"},
  "savoir":   {p:["sais","sais","sait","savons","savez","savent"], aux:"avoir", pp:"su", imp:"sav"},
  "mettre":   {p:["mets","mets","met","mettons","mettez","mettent"], aux:"avoir", pp:"mis", imp:"mett"},
  "parler":   {p:["parle","parles","parle","parlons","parlez","parlent"], aux:"avoir", pp:"parlé", imp:"parl"},
  "travailler":{p:["travaille","travailles","travaille","travaillons","travaillez","travaillent"], aux:"avoir", pp:"travaillé", imp:"travaill"},
  "réparer":  {p:["répare","répares","répare","réparons","réparez","réparent"], aux:"avoir", pp:"réparé", imp:"répar"},
  "appeler":  {p:["appelle","appelles","appelle","appelons","appelez","appellent"], aux:"avoir", pp:"appelé", imp:"appel"}
};

const TEMPS = [
  {id:"present", nom:"Présent",        aide:"Maintenant, en ce moment."},
  {id:"pc",      nom:"Passé composé",  aide:"C'est fini. avoir ou être + participe."},
  {id:"fp",      nom:"Futur proche",   aide:"Ça va arriver. aller + verbe."},
  {id:"imp",     nom:"Imparfait",      aide:"Raconter, décrire le passé."}
];

/* Catégories de phrases. groupe : tous / maison / travail */
const CATEGORIES = [
  {id:"comprendre", titre:"Quand je n'ai pas compris", icone:"❓", groupe:"tous", sections:[{phrases:[
    "Pardon, je n'ai pas compris.",
    "Vous pouvez répéter, s'il vous plaît ?",
    "Vous pouvez parler plus lentement ?",
    "Ça veut dire quoi, [ce mot / cette phrase] ?",
    "Vous pouvez l'écrire, s'il vous plaît ?",
    "Je ne parle pas très bien français, mais je comprends un peu."
  ]}]},
  {id:"politesse", titre:"La politesse", icone:"🙏", groupe:"tous", sections:[{phrases:[
    "Bonjour [madame / monsieur].",
    "[Bonne journée / Bonne soirée / Bon week-end] !",
    "Excusez-moi de vous déranger.",
    "Merci beaucoup, c'est gentil.",
    "Je vous en prie.",
    "Désolé, je suis en retard."
  ]}]},
  {id:"telephone", titre:"Au téléphone", icone:"📞", groupe:"tous", sections:[{phrases:[
    "Allô, bonjour, c'est [madame / monsieur] [Martin].",
    "J'appelle pour [prendre rendez-vous / avoir des nouvelles / poser une question].",
    "Je voudrais parler à [madame / monsieur] [Martin], s'il vous plaît.",
    "Je peux laisser un message ?",
    "Vous pouvez me rappeler, s'il vous plaît ?",
    "D'accord, merci, au revoir."
  ]}]},
  {id:"rendezvous", titre:"Les rendez-vous", icone:"📅", groupe:"tous", sections:[{phrases:[
    "Je voudrais prendre rendez-vous, s'il vous plaît.",
    "Est-ce que vous avez une place [cette semaine / demain / lundi] ?",
    "Je ne peux pas [lundi / mardi / le matin]. [Mercredi / Jeudi / L'après-midi], c'est possible ?",
    "Je dois annuler mon rendez-vous de [jeudi / demain].",
    "Je peux déplacer le rendez-vous à la semaine prochaine ?"
  ]}]},
  {id:"avis", titre:"Dire ce que je veux", icone:"💭", groupe:"tous", sections:[{phrases:[
    "Je suis d'accord.",
    "Je ne suis pas d'accord.",
    "Je préfère [le matin / l'après-midi / le soir].",
    "Ça me va.",
    "Ce n'est pas possible pour moi.",
    "J'ai besoin [d'aide / d'un rendez-vous / d'un papier].",
    "Je cherche [la mairie / la pharmacie / l'arrêt de bus]."
  ]}]},
  {id:"argent", titre:"Les nombres et l'argent", icone:"💶", groupe:"tous", sections:[
    {phrases:[
      "Ça fait combien ?",
      "Je peux payer [par carte / en espèces] ?",
      "Je voudrais [un reçu / une facture], s'il vous plaît."
    ]},
    {titre:"Les nombres pièges", vocab:["70 soixante-dix","75 soixante-quinze","80 quatre-vingts","90 quatre-vingt-dix","96 quatre-vingt-seize"]}
  ]},

  {id:"ecole", titre:"À l'école", icone:"🏫", groupe:"maison", sections:[
    {phrases:[
      "Bonjour, je suis la maman de [Yanis], en classe de [CE2].",
      "Mon fils est malade, il ne viendra pas aujourd'hui.",
      "Il a eu de la fièvre cette nuit, il reviendra demain.",
      "Je voudrais rencontrer [la maîtresse / le professeur], s'il vous plaît.",
      "Comment ça se passe pour lui en classe ?",
      "Il a des difficultés en [français / maths]. Comment je peux l'aider à la maison ?",
      "À quelle heure finit l'école [mercredi / vendredi] ?",
      "Je viendrai le chercher à [16 h 30].",
      "C'est son père qui viendra le chercher aujourd'hui.",
      "J'ai signé le cahier de liaison."
    ]},
    {titre:"Mots à connaître", vocab:["la cantine","la garderie","le cahier de liaison","la réunion de parents","la sortie scolaire","le bulletin","les devoirs"]}
  ]},
  {id:"medecin", titre:"Médecin et pharmacie", icone:"🩺", groupe:"maison", sections:[
    {urgence:"Urgence : appeler le 15 (SAMU) ou le 112."},
    {phrases:[
      "J'ai rendez-vous à [10 heures] avec le docteur [Martin].",
      "Mon fils a mal [au ventre / à la tête / à la gorge / à l'oreille] depuis deux jours.",
      "Il a de la fièvre : [38,5].",
      "Il tousse beaucoup la nuit.",
      "J'ai mal ici.",
      "C'est grave ?",
      "Combien de fois par jour il doit prendre le médicament ?",
      "Avant ou après le repas ?",
      "Voici ma carte Vitale et l'ordonnance."
    ]},
    {titre:"Mots à connaître", vocab:["l'ordonnance","la carte Vitale","la mutuelle","le comprimé","le sirop","la prise de sang","les urgences"]}
  ]},
  {id:"mairie", titre:"Mairie et papiers", icone:"🏛️", groupe:"maison", sections:[
    {phrases:[
      "Bonjour, je viens pour [une inscription / un dossier / un renseignement].",
      "Je voudrais inscrire mon fils [à la cantine / à l'école / au centre de loisirs].",
      "Quels papiers je dois apporter ?",
      "J'ai un justificatif de domicile et ma pièce d'identité.",
      "Il me manque un document ?",
      "Je dois remplir ce formulaire ? Vous pouvez m'aider ?",
      "Je dois revenir quand ?"
    ]},
    {titre:"Mots à connaître", vocab:["un justificatif de domicile","une pièce d'identité","un formulaire","un dossier","un rendez-vous","le guichet","signer"]}
  ]},
  {id:"courses", titre:"Courses et quotidien", icone:"🛒", groupe:"maison", sections:[
    {phrases:[
      "Excusez-moi, où est le rayon [des légumes / du pain / des produits ménagers] ?",
      "Je voudrais un kilo de [tomates / pommes de terre / oignons], s'il vous plaît.",
      "C'est combien le kilo ?",
      "Vous avez une taille [plus grande / plus petite] ?",
      "Je peux échanger cet article ? Voici le ticket de caisse.",
      "C'est en promotion ?",
      "Ce bus va à [la gare / l'hôpital / la mairie] ?",
      "Bonjour, excusez-moi, je peux vous demander un service ?"
    ]}
  ]},

  {id:"garage", titre:"Au garage", icone:"🔧", groupe:"travail", sections:[
    {titre:"Accueillir le client", phrases:[
      "Bonjour, qu'est-ce que je peux faire pour vous ?",
      "Quel est le problème avec la voiture ?",
      "Depuis quand vous avez ce problème ?",
      "Le bruit vient d'où ? De l'avant ou de l'arrière ?",
      "Ça arrive [quand vous freinez / quand vous accélérez / quand le moteur est froid] ?",
      "Vous pouvez me laisser les clés ? Je vais regarder."
    ]},
    {titre:"Expliquer une panne", phrases:[
      "Le problème vient [de la batterie / de l'embrayage / des freins / du démarreur / de l'alternateur].",
      "Il faut changer [les plaquettes de frein / les pneus / les disques / la batterie].",
      "J'ai trouvé une fuite [d'huile / de liquide de refroidissement / de carburant].",
      "Ce n'est pas grave, mais il faudra le faire bientôt.",
      "C'est dangereux, je vous conseille de ne pas rouler avec.",
      "La pièce est cassée, je dois la remplacer.",
      "Je ne sais pas encore. Je dois faire un diagnostic.",
      "La batterie est faible, donc la voiture démarre mal. Il faut la changer."
    ]},
    {titre:"Le devis et le prix", phrases:[
      "Je vais vous faire un devis.",
      "La réparation coûtera environ [250 / 400 / 800] euros, pièces et main-d'œuvre.",
      "Le prix comprend la pièce et le montage.",
      "Vous voulez que je fasse la réparation ?",
      "Je ne commence pas sans votre accord.",
      "Vous pouvez payer par carte ou en espèces."
    ]},
    {titre:"Les délais", phrases:[
      "La voiture sera prête [demain / jeudi / en fin de journée].",
      "Je dois commander la pièce, elle arrive dans [deux jours / une semaine].",
      "Il y a un retard, la pièce n'est pas encore arrivée. Je suis désolé.",
      "Je vous appelle dès que c'est fini."
    ]},
    {titre:"Rendre la voiture", phrases:[
      "C'est fait, la voiture est prête.",
      "J'ai changé [les pneus avant / la batterie / les plaquettes] et vérifié les niveaux.",
      "Pensez à faire la vidange dans [10 000] kilomètres.",
      "Si vous avez un problème, revenez me voir."
    ]},
    {titre:"SMS au client", sms:true, phrases:[
      "Bonjour, c'est le garage [nom du garage]. Votre voiture est prête, vous pouvez venir la chercher.",
      "Bonjour, le devis pour votre voiture est de [250 / 400 / 800] euros. Je commence la réparation ?",
      "Bonjour, la pièce arrive [demain / jeudi / lundi]. Votre voiture sera prête [vendredi / la semaine prochaine]."
    ]},
    {titre:"Mots du garage", vocab:["le moteur","la boîte de vitesses","l'embrayage","les plaquettes","les disques","les amortisseurs","la courroie de distribution","la vidange","les pneus","la batterie","le démarreur","l'alternateur","le contrôle technique"]}
  ]}
];

const QUIZ = [
  {s:"Il ___ faim.", c:["a","à"], r:"a"},
  {s:"Je vais ___ l'école.", c:["a","à"], r:"à"},
  {s:"Il ___ malade.", c:["et","est"], r:"est"},
  {s:"Du pain ___ du lait.", c:["et","est"], r:"et"},
  {s:"Ils ___ partis.", c:["son","sont"], r:"sont"},
  {s:"___ fils est là.", c:["Son","Sont"], r:"Son"},
  {s:"___ mange à midi.", c:["On","Ont"], r:"On"},
  {s:"Ils ___ fini.", c:["on","ont"], r:"ont"},
  {s:"___ est la mairie ?", c:["Ou","Où"], r:"Où"},
  {s:"Du thé ___ du café ?", c:["ou","où"], r:"ou"},
  {s:"Il ___ lève tôt.", c:["ce","se"], r:"se"},
  {s:"___ matin, il pleut.", c:["Ce","Se"], r:"Ce"},
  {s:"___ prêt !", c:["C'est","S'est"], r:"C'est"},
  {s:"Il ___ trompé.", c:["c'est","s'est"], r:"s'est"},
  {s:"Je cherche ___ clés.", c:["mes","mais"], r:"mes"},
  {s:"Je viens, ___ en retard.", c:["mes","mais"], r:"mais"},
  {s:"La voiture est ___.", c:["la","là"], r:"là"},
  {s:"Je ___ venir demain.", c:["peux","peu"], r:"peux"},
  {s:"Un ___ de sel.", c:["peu","peut"], r:"peu"},
  {s:"Je vais mang___.", c:["er","é"], r:"er"},
  {s:"J'ai mang___.", c:["er","é"], r:"é"},
  {s:"Vous mang___ à quelle heure ?", c:["ez","er"], r:"ez"},
  {s:"Il a répar___ la voiture.", c:["é","er"], r:"é"},
  {s:"Je dois appel___ le client.", c:["er","é"], r:"er"},
  {s:"Un ___ d'eau.", c:["verre","vert"], r:"verre"},
  {s:"Un café ___ sucre.", c:["sans","cent"], r:"sans"}
];

const ORDRE = [
  "Votre voiture sera prête demain.",
  "Mon fils est malade aujourd'hui.",
  "Je voudrais prendre rendez-vous.",
  "Il a de la fièvre depuis hier.",
  "Vous pouvez répéter, s'il vous plaît ?",
  "Je ne suis pas d'accord.",
  "Il faut changer les plaquettes de frein.",
  "Je vais appeler le médecin.",
  "Quels papiers je dois apporter ?",
  "La pièce arrive dans deux jours.",
  "Où est la mairie ?",
  "Il est absent parce qu'il est malade.",
  "Je ne commence pas sans votre accord.",
  "Je vous appelle dès que c'est fini.",
  "Est-ce que vous avez une place demain ?",
  "La batterie est faible, donc la voiture démarre mal."
];

