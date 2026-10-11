/* Banque ANGLAIS — calquée sur la structure réelle des épreuves QCM
   (dominante : temps verbaux, puis connecteurs, modaux, collocations, vocabulaire)
   d:1 = fondamentaux   d:2 = pièges classiques */
window.BANQUE = window.BANQUE || {};
window.BANQUE.anglais = [

/* ---------- Present perfect vs past ---------- */
{id:"A001",ch:"Present perfect",d:1,q:"Julie isn't here today. She ……………… to Berlin.",o:["has gone","has been","has went","gone"],r:0,e:"« Has gone to » = elle est partie et elle y est encore. « Has been to » = elle y est allée et elle est revenue."},
{id:"A002",ch:"Present perfect",d:1,q:"I ……………… this book four times.",o:["have read","read","readed","have readed"],r:0,e:"Expérience répétée jusqu'à maintenant → present perfect. Le participe passé de « read » s'écrit read (prononcé /red/)."},
{id:"A003",ch:"Present perfect",d:1,q:"Tom ……………… for Paul for 15 minutes.",o:["has been waiting","is waiting","waited","waits"],r:0,e:"Action commencée dans le passé et toujours en cours, avec une durée → present perfect continuous."},
{id:"A004",ch:"Present perfect",d:1,q:"They ……………… in Australia since 1989.",o:["have been living","had lived","lifed","are living"],r:0,e:"Avec « since » (point de départ) ou « for » (durée), on emploie le present perfect, simple ou continu."},
{id:"A005",ch:"Present perfect",d:1,q:"I ……………… for this company for more than thirty years, and I intend to stay here until I retire.",o:["have been working","has worked","have working","am working"],r:0,e:"La durée se poursuit dans le présent : present perfect continuous."},
{id:"A006",ch:"Present perfect",d:2,q:"He ……………… his keys, so he can't open the door.",o:["has lost","lost","had lost","loses"],r:0,e:"Le résultat est visible maintenant → present perfect. Le prétérit s'emploierait avec un repère passé daté (« yesterday »)."},
{id:"A007",ch:"Present perfect",d:2,q:"Which sentence is correct?",o:["I saw him yesterday.","I have seen him yesterday.","I have saw him yesterday.","I had seen him yesterday morning at 8."],r:0,e:"Un repère temporel passé et achevé (yesterday, last week, in 2020, ago) impose le prétérit simple."},

/* ---------- Past perfect ---------- */
{id:"A010",ch:"Past perfect",d:1,q:"When Modou arrived, the party ……………… .",o:["had already begun","had already began","already began","has already begun"],r:0,e:"L'antériorité par rapport à un autre fait passé → past perfect (had + participe passé : begin / began / begun)."},
{id:"A011",ch:"Past perfect",d:1,q:"Sarah was exhausted. She ……………… the dishes for more than three hours.",o:["had been washing","have washed","has washing","was washed"],r:0,e:"Action longue antérieure à un moment passé → past perfect continuous."},
{id:"A012",ch:"Past perfect",d:2,q:"Yesterday I woke up and the sun ……………… .",o:["was shining","shone","had shone","shine"],r:0,e:"Le prétérit continu décrit l'arrière-plan en cours au moment où l'action ponctuelle se produit."},
{id:"A013",ch:"Past perfect",d:2,q:"By the time we got to the station, the train ……………… .",o:["had left","has left","left","was leaving"],r:0,e:"« By the time » + prétérit dans la principale au past perfect pour marquer l'antériorité."},

/* ---------- Conditionals ---------- */
{id:"A020",ch:"Conditionals",d:1,q:"If we ……………… , we could have given her the money.",o:["had known","have known","knew","would have known"],r:0,e:"Troisième conditionnel (regret sur le passé) : If + past perfect, would/could have + participe passé."},
{id:"A021",ch:"Conditionals",d:1,q:"If only he ……………… before he went on holiday!",o:["had known","knew","know","have known"],r:0,e:"« If only » + past perfect exprime un regret portant sur le passé."},
{id:"A022",ch:"Conditionals",d:1,q:"If it ……………… tomorrow, we will cancel the trip.",o:["rains","will rain","rained","would rain"],r:0,e:"Premier conditionnel : If + présent simple, will + base verbale. Jamais « will » dans la subordonnée en if."},
{id:"A023",ch:"Conditionals",d:2,q:"If I ……………… you, I would accept the offer.",o:["were","am","will be","would be"],r:0,e:"Deuxième conditionnel, hypothèse irréelle du présent : on emploie « were » à toutes les personnes."},
{id:"A024",ch:"Conditionals",d:2,q:"I won't go out ……………… it stops raining.",o:["unless","if","because","despite"],r:0,e:"« Unless » = if… not. La phrase signifie : je ne sortirai pas si la pluie ne s'arrête pas."},

/* ---------- Connectors ---------- */
{id:"A030",ch:"Connectors",d:1,q:"We stayed at home ……………… it was raining.",o:["because","because of","due to","in fact"],r:0,e:"« Because » introduit une proposition (sujet + verbe) ; « because of » et « due to » sont suivis d'un nom."},
{id:"A031",ch:"Connectors",d:1,q:"The match was cancelled ……………… the bad weather.",o:["because of","because","although","so that"],r:0,e:"Suivi d'un groupe nominal, on emploie « because of » / « due to » / « owing to »."},
{id:"A032",ch:"Connectors",d:1,q:"We must finish it ……………… we leave.",o:["before","until","till","instead"],r:0,e:"« Before » = avant que. « Until/till » = jusqu'à ce que."},
{id:"A033",ch:"Connectors",d:2,q:"……………… he was tired, he kept working.",o:["Although","Despite","In spite","Because"],r:0,e:"« Although » + proposition ; « despite / in spite of » + nom ou gérondif : Despite his tiredness / Despite being tired."},
{id:"A034",ch:"Connectors",d:2,q:"She studied hard ……………… pass the entrance test.",o:["so as to","so that","for","in order that"],r:0,e:"But + verbe à l'infinitif : « so as to » / « in order to » / « to ». « So that » est suivi d'une proposition."},
{id:"A035",ch:"Connectors",d:2,q:"……………… , the results were better than expected.",o:["However","Although","Despite","Whereas"],r:0,e:"« However » est un adverbe de liaison, placé en tête et suivi d'une virgule."},

/* ---------- Modals ---------- */
{id:"A040",ch:"Modals",d:1,q:"You ……………… smoke in the laboratory. It's strictly forbidden.",o:["mustn't","don't have to","needn't","shouldn't have to"],r:0,e:"« Mustn't » = interdiction. « Don't have to » = absence d'obligation (ce n'est pas nécessaire)."},
{id:"A041",ch:"Modals",d:1,q:"It's Sunday, so you ……………… get up early.",o:["don't have to","mustn't","can't","shouldn't"],r:0,e:"Absence d'obligation : don't have to / needn't."},
{id:"A042",ch:"Modals",d:2,q:"He ……………… be at home; I can see his car in the driveway.",o:["must","can","should","might not"],r:0,e:"« Must » exprime ici la quasi-certitude déduite d'un indice. Son contraire est « can't » (c'est impossible)."},
{id:"A043",ch:"Modals",d:2,q:"You ……………… told me earlier! I would have helped you.",o:["should have","must have","should","would"],r:0,e:"« Should have + participe passé » exprime le reproche ou le regret sur une action passée."},
{id:"A044",ch:"Modals",d:1,q:"When I was a child, I ……………… swim very well.",o:["could","can","may","must"],r:0,e:"« Could » est le prétérit de « can » pour une capacité passée."},

/* ---------- Gerund & infinitive ---------- */
{id:"A050",ch:"Gerund & infinitive",d:1,q:"How about ……………… to the cinema?",o:["going","we go","to go","go"],r:0,e:"Après une préposition (about, at, of, without, before…), on emploie le gérondif en -ing."},
{id:"A051",ch:"Gerund & infinitive",d:1,q:"I'm looking forward to ……………… from you.",o:["hearing","hear","have heard","be heard"],r:0,e:"Le « to » de « look forward to » est une préposition, donc suivie de -ing."},
{id:"A052",ch:"Gerund & infinitive",d:2,q:"She promised ……………… me as soon as she arrived.",o:["to call","calling","call","called"],r:0,e:"Promise, decide, hope, want, agree, refuse, manage sont suivis de l'infinitif complet."},
{id:"A053",ch:"Gerund & infinitive",d:2,q:"I really enjoy ……………… mathematics problems.",o:["solving","to solve","solve","solved"],r:0,e:"Enjoy, avoid, mind, suggest, finish, practise sont suivis du gérondif."},
{id:"A054",ch:"Gerund & infinitive",d:2,q:"He stopped ……………… because his throat hurt.",o:["talking","to talk","talk","talked"],r:0,e:"« Stop + -ing » = cesser de faire ; « stop to + base verbale » = s'arrêter afin de faire."},
{id:"A055",ch:"Gerund & infinitive",d:1,q:"My parents made me ……………… harder.",o:["work","to work","working","worked"],r:0,e:"Après make et let (à la voix active), on emploie la base verbale sans « to »."},

/* ---------- Present & future ---------- */
{id:"A060",ch:"Present & future",d:1,q:"The train ……………… at 10:00.",o:["comes","is coming","will come","come"],r:0,e:"Horaire officiel, fait programmé → présent simple."},
{id:"A061",ch:"Present & future",d:1,q:"Motivated students rarely ……………… mistakes.",o:["make","do","are making","does"],r:0,e:"On dit « make a mistake ». Habitude → présent simple ; à la 3ᵉ personne du pluriel, pas de -s."},
{id:"A062",ch:"Present & future",d:2,q:"Look at those clouds! It ……………… rain.",o:["is going to","will","would","shall"],r:0,e:"« Be going to » exprime une prévision fondée sur un indice présent."},
{id:"A063",ch:"Present & future",d:2,q:"I ……………… my friend at the airport tomorrow at 6 p.m.",o:["am meeting","meet","will have met","would meet"],r:0,e:"Présent continu pour un projet personnel déjà organisé."},
{id:"A064",ch:"Present & future",d:2,q:"By 2030, she ……………… her engineering degree.",o:["will have completed","will complete","completes","is completing"],r:0,e:"« By + date future » appelle le future perfect : action achevée avant ce moment."},

/* ---------- Passive & reported speech ---------- */
{id:"A070",ch:"Passif & discours rapporté",d:1,q:"The laboratory ……………… in 1998.",o:["was built","was build","has built","built"],r:0,e:"Passif au prétérit : was/were + participe passé (build / built / built)."},
{id:"A071",ch:"Passif & discours rapporté",d:2,q:"Choose the correct passive form of « They are repairing the road. »",o:["The road is being repaired.","The road is repaired.","The road has been repairing.","The road was being repaired."],r:0,e:"Présent continu passif : is/are + being + participe passé."},
{id:"A072",ch:"Passif & discours rapporté",d:1,q:"He said, « I am tired. » → He said that he ……………… tired.",o:["was","is","has been","were"],r:0,e:"Concordance des temps au discours indirect : le présent devient prétérit."},
{id:"A073",ch:"Passif & discours rapporté",d:2,q:"She asked me where ……………… .",o:["I lived","did I live","do I live","I did live"],r:0,e:"Dans une interrogation rapportée, on revient à l'ordre sujet + verbe, sans auxiliaire de question."},

/* ---------- Relatives & determiners ---------- */
{id:"A080",ch:"Relatifs & déterminants",d:1,q:"This is the engineer ……………… designed the bridge.",o:["who","which","whom","whose"],r:0,e:"« Who » pour une personne sujet ; « which » pour une chose ; « whose » pour la possession."},
{id:"A081",ch:"Relatifs & déterminants",d:2,q:"The student ……………… results were excellent has been admitted.",o:["whose","who's","which","that"],r:0,e:"« Whose » marque la possession : les résultats de l'étudiant."},
{id:"A082",ch:"Relatifs & déterminants",d:1,q:"There isn't ……………… time left before the test.",o:["much","many","a lot","few"],r:0,e:"« Time » est indénombrable → much. « Many » s'emploie avec les dénombrables."},
{id:"A083",ch:"Relatifs & déterminants",d:2,q:"He gave me ……………… useful advice.",o:["some","a","an","few"],r:0,e:"« Advice » est indénombrable : pas d'article indéfini ni de pluriel (a piece of advice)."},
{id:"A084",ch:"Relatifs & déterminants",d:2,q:"……………… of the two candidates was selected.",o:["Neither","None","Either of them not","Both"],r:0,e:"« Neither » s'emploie pour deux éléments ; « none » pour trois ou plus."},

/* ---------- Collocations & phrasal verbs ---------- */
{id:"A090",ch:"Collocations",d:1,q:"Before going to Polytechnique, you ……………… for a test.",o:["sit","realise","save","do"],r:0,e:"« To sit for a test / an exam » = passer un examen. Attention au faux ami : « to pass an exam » signifie le réussir."},
{id:"A091",ch:"Collocations",d:1,q:"She ……………… a lot of progress this term.",o:["has made","has done","has taken","has got"],r:0,e:"On dit « make progress », « make a decision », « make an effort », mais « do homework », « do research »."},
{id:"A092",ch:"Collocations",d:2,q:"I can't ……………… with the pace of this course.",o:["keep up","keep on","keep off","keep out"],r:0,e:"« Keep up with » = suivre le rythme de."},
{id:"A093",ch:"Collocations",d:2,q:"The meeting was ……………… because of the strike.",o:["called off","called on","called up","called for"],r:0,e:"« Call off » = annuler. « Put off » = reporter."},
{id:"A094",ch:"Collocations",d:2,q:"You should ……………… this word in a dictionary.",o:["look up","look after","look for","look at"],r:0,e:"« Look up » = chercher une information ; « look for » = chercher un objet ; « look after » = s'occuper de."},
{id:"A095",ch:"Collocations",d:2,q:"He finally ……………… his mistake.",o:["admitted","admitted to do","admit","was admitted"],r:0,e:"« Admit » se construit avec un nom ou un gérondif (admitted making a mistake), jamais avec un infinitif."},

/* ---------- Vocabulary & word formation ---------- */
{id:"A100",ch:"Vocabulaire & faux amis",d:1,q:"The opposite of « reliable » is :",o:["unreliable","irreliable","disreliable","non-reliable"],r:0,e:"Le préfixe privatif dépend du mot : unreliable, impossible, irregular, illegal, dishonest."},
{id:"A101",ch:"Vocabulaire & faux amis",d:2,q:"Choose the correct noun: « The engineer's main ……………… is safety. »",o:["concern","concerned","concerning","concernment"],r:0,e:"Il faut un nom après l'adjectif possessif et « main »."},
{id:"A102",ch:"Vocabulaire & faux amis",d:2,q:"« Actually » means :",o:["in fact","currently","at the moment","finally"],r:0,e:"Faux ami classique : « actually » = en réalité ; « actuellement » se dit « currently » ou « at present »."},
{id:"A103",ch:"Vocabulaire & faux amis",d:2,q:"« To attend a lecture » means :",o:["to be present at a lecture","to wait for a lecture","to pay attention","to organise a lecture"],r:0,e:"Autre faux ami : « attendre » se dit « to wait for »."},
{id:"A104",ch:"Vocabulaire & faux amis",d:1,q:"The adjective formed from « science » is :",o:["scientific","sciencious","sciential","scienceful"],r:0,e:"science → scientific → scientifically ; technology → technological ; industry → industrial."},
{id:"A105",ch:"Vocabulaire & faux amis",d:2,q:"« He is very sensible » means he is :",o:["reasonable and practical","easily moved emotionally","touchy","perceptive to touch"],r:0,e:"Faux ami : « sensible » = sensé ; « sensitive » = sensible (émotif)."},

/* ---------- Structures & word order ---------- */
{id:"A110",ch:"Structures",d:2,q:"Never ……………… such a beautiful sunset.",o:["have I seen","I have seen","I saw","did I saw"],r:0,e:"Après un adverbe négatif en tête de phrase (never, seldom, hardly, not only), on applique l'inversion sujet-auxiliaire."},
{id:"A111",ch:"Structures",d:1,q:"There are ……………… students in the hall than yesterday.",o:["fewer","less","fewest","little"],r:0,e:"« Fewer » avec les dénombrables, « less » avec les indénombrables (less water)."},
{id:"A112",ch:"Structures",d:1,q:"This problem is ……………… than the previous one.",o:["more difficult","difficulter","most difficult","the more difficult"],r:0,e:"Les adjectifs longs forment le comparatif avec « more … than »."},
{id:"A113",ch:"Structures",d:2,q:"The more you practise, ……………… you become.",o:["the better","the best","better","the more good"],r:0,e:"Structure du double comparatif : « the + comparatif …, the + comparatif … »."},
{id:"A114",ch:"Structures",d:2,q:"It's high time we ……………… revising.",o:["started","start","will start","have started"],r:0,e:"« It's (high) time » est suivi du prétérit modal pour exprimer qu'il est urgent d'agir."},
{id:"A115",ch:"Structures",d:2,q:"He speaks English ……………… .",o:["fluently","fluent","with fluent","fluentness"],r:0,e:"Le verbe demande un adverbe de manière : adjectif + -ly."},
{id:"A116",ch:"Structures",d:1,q:"She has lived here ……………… five years.",o:["for","since","during","from"],r:0,e:"« For » + durée ; « since » + point de départ ; « during » + nom d'événement."},
{id:"A117",ch:"Structures",d:2,q:"Neither the teacher nor the students ……………… present.",o:["were","was","is","has been"],r:0,e:"Avec « neither … nor », le verbe s'accorde avec le sujet le plus proche (« the students »)."},

/* ---------- Ajout : niveau test d'entrée ---------- */
{id:"A200",ch:"Present perfect",d:1,q:"I met him three years ……… .",o:["ago","since","before","for"],r:0,e:"« Ago » se place APRÈS une durée et s'emploie avec le prétérit : three years ago = il y a trois ans."},
{id:"A201",ch:"Past perfect",d:1,q:"When I arrived at the station, the train ……… already ……… .",o:["had / left","has / left","was / leaving","had / leave"],r:0,e:"Action antérieure à une autre action passée : past perfect (had + participe passé)."},
{id:"A202",ch:"Conditionals",d:1,q:"If I ……… rich, I would travel around the world.",o:["were","am","will be","would be"],r:0,e:"Hypothèse irréelle au présent : if + prétérit (were pour toutes les personnes), would + base verbale."},
{id:"A203",ch:"Conditionals",d:1,q:"If it rains tomorrow, we ……… at home.",o:["will stay","would stay","stayed","would have stayed"],r:0,e:"Condition réaliste au futur : if + présent, will + base verbale."},
{id:"A204",ch:"Connectors",d:1,q:"……… the rain, they played the match.",o:["Despite","Although","However","Because"],r:0,e:"« Despite » + nom (the rain) exprime l'opposition."},
{id:"A205",ch:"Connectors",d:1,q:"She was very tired; ………, she kept on working.",o:["nevertheless","because","so that","unless"],r:0,e:"« Nevertheless » (= néanmoins) introduit une opposition entre deux phrases."},
{id:"A206",ch:"Modals",d:1,q:"That cough sounds bad. You ……… see a doctor.",o:["should","mustn't","needn't","can't"],r:0,e:"« Should » exprime un conseil."},
{id:"A207",ch:"Modals",d:1,q:"……… I borrow your pen, please?",o:["May","Must","Should","Need"],r:0,e:"« May I…? » est la façon polie de demander une permission."},
{id:"A208",ch:"Gerund & infinitive",d:1,q:"Would you mind ……… the window?",o:["opening","to open","open","opened"],r:0,e:"« Mind » est suivi du gérondif (verbe + -ing)."},
{id:"A209",ch:"Gerund & infinitive",d:1,q:"She decided ……… medicine.",o:["to study","studying","study","studied"],r:0,e:"« Decide » est suivi de l'infinitif avec « to »."},
{id:"A210",ch:"Present & future",d:1,q:"Don't worry, I ……… you tomorrow, I promise!",o:["will call","call","would call","am calling to"],r:0,e:"Promesse ou décision prise au moment où l'on parle : will + base verbale."},
{id:"A211",ch:"Passif & discours rapporté",d:1,q:"English ……… all over the world.",o:["is spoken","speaks","is speaking","has spoke"],r:0,e:"La langue ne parle pas : elle est parlée. Passif au présent : is + participe passé."},
{id:"A212",ch:"Passif & discours rapporté",d:1,q:"Somebody has taken my bike! My bike ……… !",o:["has been stolen","has stolen","is stealing","was steal"],r:0,e:"Passif au present perfect : has been + participe passé (stolen). Le vélo subit l'action."},
{id:"A213",ch:"Relatifs & déterminants",d:1,q:"The book ……… I bought yesterday is very interesting.",o:["which","who","whose","whom"],r:0,e:"Antécédent non humain (the book) : which (ou that)."},
{id:"A214",ch:"Vocabulaire & faux amis",d:1,q:"« Eventually » signifie :",o:["finalement","éventuellement","évidemment","immédiatement"],r:0,e:"Faux ami : eventually = finalement, au bout du compte. « Éventuellement » se dit possibly."},
{id:"A215",ch:"Collocations",d:1,q:"Every evening, the students ……… their homework.",o:["do","make","take","have done"],r:0,e:"On dit « to do homework » (do pour les tâches, make pour fabriquer)."},
{id:"A216",ch:"Structures",d:1,q:"He is used to ……… early.",o:["getting up","get up","got up","be getting up"],r:0,e:"« Be used to » (= être habitué à) : « to » est une préposition, suivie de -ing."}

];
