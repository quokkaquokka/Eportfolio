export class Personnal{
    constructor(){
        this.data = {
			title: 'Mes projets personnels',
            subtitle:'',
            experiences: [
                {
                    time: '2020',
                    title: 'TrackingRealEstate',
                    subtitle: 'Application web de centralisation des informations dans la recherche de biens pour les investisseurs.',
                    img: '',
                    id: 'trs',
                    text: 'Développement en cours de réalisation d\'une application utilisant du Javascript coté front (Vuejs) et back (Node.js, Hapi).<br>'+
                    '<b>Ma Problématique :</b> Comment faire le suivi de biens immobiliers avec une interface de visualisation ? <br>'+
                    'Cette idée m\'est venue lorsque je faisais mes recherches de biens pour de l\'investissement immobilier. Je faisais le suivis sur une feuille Excel, ce qui n\'était pas pratique. <br>' +
                    '<b> Le besoin auquel nous répondons:<br></b>' +
                    'L\'application s\'adresse à des investisseurs immobiliers.<br>' +
                    'Avant d\'investir dans une ville chaque investisseur doit faire une étude de la ville. Afin de faciliter ces études, l\'application propose à l\'utilisateur d\'entrer des informations complémentaires sur ces villes et ainsi visualiser plus vite les villes sélectionnées, les biens sélectionnés et leurs atouts. En effet aujourd\'hui la recherche s\'effectue sur plusieurs plateformes mais pour se souvenir des biens envisagés à l\'achat en fonction des critères fixés, il faut utiliser un tableau Excel et celui-ci fonctionne en lignes ce qui ne favorise pas le suivi ni la visualisation des données.<br>' +
                    '<b>L\'objectif de notre application:<br></b>' +
                    'Les objectifs de notre application sont d’aider à la recherche de biens immobiliers en permettant de répertorier les villes de France avec leur description orientée investisseur, répertorier sur un même site tous les biens immobiliers à vendre et de pouvoir mettre des renseignements complémentaires sur ceux-ci.' +
                    '<br>',
                    id2: 'trs2',
                    text2: '<br><b>Réalisations détaillées :</b><br>' +
                    '<ul>' +
                    '<li>Front</li>' +
                    '<ul>' +
                    '<li>Vuex</li>' +
                    '<li>protection des pages (utilisateurs, administrateurs)</li>' +
                    '<li>Session manager (authentification, authorisation, requête pour renouvellement du token automatique) </li>' +
                    '<li>Header dynamique (axios)</li>' +
                    '</ul>' +
                    '<li>Back</li>' +
                    '<ul>' +
                    '<li>Authentification et autorisation gérée via un token JWT​</li>' +
                    '<li>Envoie de mail via mailgun ​</li>' + 
                    '<li>Protection des routes avec Joi et Hoek​</li>' + 
                    '</ul>' +
                    '<li>Déploiement</li>' +
                    '<ul>' +
                    '<li>Digital océan​</li>' +
                    '<li>ngix (https)​</li>' +
                    '<li>configuration DNS​</li>' +
                    '</ul>' +
                    '</ul>' +
                    '' +
                    '<div class="col-2 mt-3" style="display: inline-block"><i class="fab fa-github"></i> Github</div><a class="mt-3" href="https://github.com/quokkaquokka/efrei_front-project">vers le repository de TrackingRealEstate</a><br>' +
                    '<div class="col-2" style="display: inline-block"><i class="fas fa-tv"></i> Site</div><a class="mt-3" href="https://tracking.camille-moutte.fr/#/signin">https://tracking.camille-moutte.fr/</a>',
                    pills: [
                        {
                            id: 'langage',
                            text: 'HTML/CSS',
                        },
                        {
                            id: 'langage',
                            text: 'JavaScript',
                        },
                        {
                            id: 'bdd',
                            text: 'MongoDB',
                        },
                        {
                            id: 'framework',
                            text: 'Vuejs (Front)',
                        },
                        {
                            id: 'framework',
                            text: 'HapiJs (Back)',
                        },
                        
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ]
                },
                {
                    time: '2019',
                    title: 'ChooseYourself',
                    subtitle: 'Application web de développement personnel.',
                    img: '',
                    id: 'cy',
                    text: 'Développement en cours de réalisation d\'une application en collaboration avec Jonathan Saget.<br>'+
                    '<b>Ma Problématique :</b> Comment accentuer (favoriser) l\'atteinte de ses objectifs et rester motivé dans la durée ? <br>'+
                    'Cette idée m\'est venue lors de conférences de développement personnel.' +
                    '<br>',
                    id2: 'cy2',
                    text2: '<br><strong>Réalisations détaillées :</strong><br>' +
                    '<ul>' +
                    '<li>rédaction d’un business modèle</li>' +
                    '<li>réutilisation du boilerplate</li>' +
                    '</ul>',
                    pills: [
                        {
                            id: 'langage',
                            text: 'pug/stylus',
                        },
                        {
                            id: 'langage',
                            text: 'JavaScript',
                        },
                        {
                            id: 'bdd',
                            text: 'MongoDB',
                        },
                        {
                            id: 'framework',
                            text: 'Aurelia (Front)',
                        },
                        {
                            id: 'framework',
                            text: 'HapiJs (Back)',
                        },
                        
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ]
                },
                {
                    time: '2019',
                    title: 'BoilerPlate Aurelia/Node (2019)',
                    subtitle: 'Base applicative pour faire des applications web facilement.',
                    img: '',
                    id: 'bp',
                    text: 'Développement en cours d’un boiler plate utilisant du JavaScript côté front et back afin d’avoir une base applicative pour commencer mes projets personnels <br>et de ne pas commencer d’un projet vide lorsque je souhaite réutiliser les mêmes technologies.'
                    + '<br>',
                    id2: 'bp2',
                    text2: '<br><strong>Réalisations détaillées :</strong><br>' +
                    '<ul>' +
                    '<li>Back</li>' +
                    '<ul>' +
                    '<li>utilisation de Mailgun pour envoyer des mails (exemple : la confirmation d’inscription)</li>' +
                    '<li>certification Https, avec nginx</li>' +
                    '<li>gestion des sessions en back</li>'+
                    '<li>promissification de la bibliothèque de MongoDB afin que les fonctions puissent être asynchrones.</li>' +
                    '</ul>' +
                    '<li>Front</li>' +
                    '<ul>' +
                    '<li>mise en place d’une test suite avec Jest</li>' +
                    '<li>modification de webpack pour utiliser du pug au lieu du HTML</li>' +
                    '<li>intégration de material design</li>' +
                    '</ul>' +
                    '</ul> <br>' + 
                    'De ma curiosité est né ce projet mais il la développe également ainsi que ma motivation <br> car j’ai envie d\'implémenter les fonctionnalités globales d\'une application web avec de nombreuses fonctionnalités nouvelles que je n\'ai jamais réalisées.',
                    pills: [
                        {
                            id: 'langage',
                            text: 'pug/stylus',
                        },
                        {
                            id: 'langage',
                            text: 'JavaScript',
                        },
                        {
                            id: 'bdd',
                            text: 'MongoDB',
                        },
                        {
                            id: 'framework',
                            text: 'Aurelia (Front)',
                        },
                        {
                            id: 'framework',
                            text: 'HapiJs (Back)',
                        },
                        
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ],
                    softs:[
                        {
                            id: 'soft',
                            text: 'curiosité',
                        },
                        {
                            id: 'soft',
                            text: 'motivation',
                        }
                    ]
                },
                {
                    time: '2018',
                    title: 'GestionUrl.',
                    subtitle: 'Une application des gestions d\'URL',
                    img: '',
                    id: 'gu',
                    text: '<b>Ma problématique </b>: Comment faciliter mon accès aux sites que j\'ai enregistrés lorsque je suis connectée à un autre ordinateur que le mien (école, téléphone ...)  ? <br>' +
                    'Pour répondre à ma problématique je me suis créée une application de gestion des URL avec la fonctionnalité suivante : ' +
                    '<ul>' +
                    '<li>catégoriser mes URL de sites internet,</li>' +
                    '<li>supprimer une catégorie en supprimant toutes les adresses dans cette catégorie,</li>' +
                    '<li>supprimer un lien URL,</li>' +
                    '<li>mettre des commentaires sur les URL,</li>' +
                    '</ul>' +
                    'Cette première réalisation en JavaScript avait également pour objectif de me permettre d\'apprendre ce langage pour être opérationnelle pour mon stage.',
                    id2: 'gu2',
                    text2: 
                    '<br><strong>Réalisations détaillées :</strong><br>' +
                    '<ul>' +
                    '<li>gestions des CORS</li>' +
                    '<li>modification de webpack afin qu’il identifie les fichiers avec les extensions pug et stylus</li>' +
                    '<li>découverte d’une base de donnée NoSQL (Algolia)</li>' +
                    '<li>devOPs :</li>' +
                    '<ul>' +
                    '<li>création d’un docker node </li>' +
                    '<li>déploiement sur Digital Ocean</li>' +
                    '</ul>' +
                    '</ul>' +
                    'Le bilan de cette expérience est un renforcement de ma confiance en moi sur le plan professionnel grâce à la mise en place réussie d\'un petit outil, mais également de ma proactivité par mon travail et investissement personnel avant ce stage sur un langage qui m\'était inconnu.<br>' +
                    '<div class="col-2 mt-3" style="display: inline-block"><i class="fab fa-github"></i> Github</div><a class="mt-3" href="https://github.com/quokkaquokka/GestionURL">vers le repository de GestionURL</a>',
                    pills: [
                        {
                            id: 'langage',
                            text: 'pug/stylus',
                        },
                        {
                            id: 'langage',
                            text: 'JavaScript',
                        },
                        {
                            id: 'bdd',
                            text: 'Algolia',
                        },
                        {
                            id: 'framework',
                            text: 'Aurelia (Front)',
                        },
                        {
                            id: 'framework',
                            text: 'HapiJs (Back)',
                        },
                        
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ],
                    softs:[
                        {
                            id: 'soft',
                            text: 'confiance en moi',
                        },
                        {
                            id: 'soft',
                            text: 'proactivité',
                        },
                        {
                            id: 'soft',
                            text: 'curiosité',
                        }
                    ]
                },
                {
                    time: '2017',
                    title: 'Psychotechnique-et-Entretien',
                    subtitle: 'Une application mobile de tests psychotechniques.',
                    img: '',
                    id: 'pe',
                    text: 'Une application mobile de tests psychotechniques (2 collaborateurs)<br>' +
                    '<strong>Ma problématique :</strong> Aider les élèves à s\'entraîner sur des tests psychotechniques afin de passer des concours.<br>' +
                    'Avant de nous lancer nous avons réfléchi sur le potentiel du marché et vu avec des professeurs de lycées ce qui était possible comme partenariat <br>afin que leur élèves puissent accéder à notre application et en entende parler.<br>'+
                    'Nous avions également réfléchi sur le moyen de nous rémunérer. <br>' + 
                    '<div class="col-2 mt-3" style="display: inline-block"><i class="fab fa-github"></i> Github</div> <a class="mt-3" href="https://github.com/quokkaquokka/Psychotechnique-et-Entretien">vers le repository de Psychotechnique-et-Entretien</a>'
                    ,
                    pills: [
                        {
                            id: 'langage',
                            text: 'Java Android',
                        }
                    ],
                    softs:[
                        {
                            id: 'soft',
                            text: 'force de proposition',
                        },
                        {
                            id: 'soft',
                            text: 'force motrice',
                        }
                    ]
                },
                {
                    time: '2016',
                    title: 'PassWorld',
                    subtitle: 'Une application de gestion des mots de passe.',
                    img: '',
                    id: 'pw',
                    text: 'Utiliser un seul mot de passe pour tous ses comptes n’est absolument pas sécurisé mais ne voulant pas retenir tous mes mots de passe, <br>je souhaitais avoir une application qui sauvegarde les mots de passe, ainsi que L\'URL, un titre et une description sauvegardée.' +
                    '<br> Voulant allier sécurité informatique et développement, cette application était un entraînement parfait.' +
                    '<br> Je voulais faire mon propre algorithme de cryptologie, mais je me suis rendu compte, qu’il était plus sécurisé de prendre un algorithme déjà fait.' +
                    '<br> Le choix du langage, c’est porté sur le C++, car je voulais prendre de l’avance, sur le prochain semestre où nous allions voir le C. <br>Le C++ étant plus simple, ce fut un bon début pour tenter de programmer une application de moi-même. <br>' +
                    '<div class="col-2 mt-3" style="display: inline-block"><i class="fab fa-github"></i> Github</div> <a class="mt-3" href="https://github.com/quokkaquokka/passWorld/">vers le repository de Passworld</a>'
                    ,
                    pills: [
                        {
                            id: 'langage',
                            text: 'c++',
                        }
                    ],
                    softs: [
                        {
                            id: 'soft',
                            text: 'persévérance',
                        },
                        {
                            id: 'soft',
                            text: 'proactivité',
                        },
                        {
                            id: 'soft',
                            text: 'adaptabilité',
                        }

                    ]
                }
            ]
        }
    }

    scrollTop = 0;
	scrollLeft = 0;
    scrollEvents = [];

    attached(){
        this.displayContent();
        this.displayContent2();
        this.displayContent3();
    }
    
    displayContent(){
        let i = 0;
        for(; i < this.data.experiences.length; i++)
        {
            var div = document.getElementById(this.data.experiences[i].id);
            if(div)
                div.innerHTML = this.data.experiences[i].text;
        }
        
    }

    displayContent2(){
        let i = 0;
        for(; i < this.data.experiences.length; i++)
        {
            var div = document.getElementById(this.data.experiences[i].id2);
            if(div)
                div.innerHTML = this.data.experiences[i].text2;
        }
        
    }

    displayContent3(){
        let i = 0;
        for(; i < this.data.experiences.length; i++)
        {
            var div = document.getElementById(this.data.experiences[i].id3);
            if(div)
                div.innerHTML = this.data.experiences[i].text3;
        }
        
    }
	
	handleScrollEvent(e) {
	  let info = { 
		left: e.target.scrollLeft,
		top: e.target.scrollTop
		};
	  
	  this.scrollEvents.splice(0, 0, info);
	}
}