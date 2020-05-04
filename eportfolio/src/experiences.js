export class Experiences{
    constructor(){
        this.data = {
			title: 'Mes expériences',
            subtitle:'',
            experiences: [
                {
                    time: '2019',
                    title: 'Freelance Academy, Paris 13',
                    subtitle: 'Une entreprise pour les développeurs informatiques les aidants à devenir indépendants.',
                    img: 'images/freelance-academy.svg',
                    id: 'FA',
                    text: 'Problématique de l’entreprise : L’entreprise voulait que ses étudiants puissent faire des factures sur plusieurs pages (pagination, header de la première page différente et le pied de page de la dernière page différente) et qu’ils puissent en modifier l’apparence.<br>' +
                    
                    'J’ai pu <strong>développer</strong> les fonctionnalités d’intranet suivantes :' +
                    '<ul>' +
                    '<li>génération d’une facture multipage et la personnaliser,</li>'+
                    '<li>personnalisation des templates de mails,</li>'+
                    '<li>personnalisation des relances de mails.</li>' +
                    '</ul>',
                    id2: 'FA2',
                    text2: '<strong>Réalisations détaillées :</strong><br>' +
                    '<ul>' +
                    '<li>personnalisation de webpack (modification des fichiers d’entrée pug et stylus), inclure deux programmes d’entrée et le lancer en temps voulu</li>' +
                    '<li>implémentation d\'une interface permettant de modifier/personnaliser les templates HTML utilisés pour l\'apparence d\'une facture</li>' +
                    '<li>implémentation d\'une interface permettant de modifier/personnaliser les templates HTML utilisés pour l\'envoi de mails</li>' +
                    '</ul>',
                    id3: 'FA3',
                    text3: '<strong>Ce stage m’a apporté :</strong>' +
                    '<ul>' +
                    '<li>une ouverture d\'esprit sur l\'existence d\'un autre chemin pour exercer notre métier, que je n\'avais pas forcément envisagé, avec autant d\'avantages et d\'inconvénients qu\'un CDI.</li>' +
                    '<li>de la motivation, par les personnes rencontrées, voulant améliorer leur niveau technique et leur qualité de vie.</li>' +
                    '</ul>',
                    pills: [
                        {
                            id: 'langage',
                            text: 'JavaScript',
                        },
                        {
                            id: 'langage',
                            text: 'pug',
                        },
                        {
                            id: 'langage',
                            text: 'stylus',
                        },
                        {
                            id: 'langage',
                            text: 'markdown',
                        },
                        {
                            id: 'langage',
                            text: 'nunjuncks',
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
                            id: 'bdd',
                            text: 'ElasticSearch',
                        },
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'environnement',
                            text: 'Webpack',
                        },
                        {
                            id: 'versionnement',
                            text: 'mercurial',
                        }
                    ],
                    softs: [
                        {
                            id: 'soft',
                            text: 'Motivation',
                        },
                        {
                            id: 'soft',
                            text: 'Adaptabilité',
                        },
                        {
                            id: 'soft',
                            text: 'Ouverture d\'esprit',
                        }
                    ]
                },

                {
                    time: '2016',
                    title: 'KLEEGROUP, Plessis-Robinson',
                    subtitle: 'Une entreprise en conseil en système d\'information, édition de progiciels ou encore conception et réalisation de systèmes d\'information clés-en-main.',
                    img: 'images/logo-white.png',
                    id: 'KLEE',
                    text: 'Un stage alliant le fonctionnel et l’opérationnel :' +
                    '<br>L\’entreprise m’avait donné un sujet de stage <strong>«Réaliser une application interne des gestions de formation. »</strong>. ' +
                    '<br>La problématique de l\'entreprise était d\'avoir un outil interne de gestion des formations pour leurs collaborateurs, directement disponible dans leur intranet sans le besoin d\'authentification.' +
                    '<br>J\'ai pu <strong>réaliser une étude de besoins et des maquettes </strong>afin d’affiner la vision de cette application, puis <strong>développer</strong> avec l’environnement Java, ainsi j’ai pu utiliser Tomcat, Maven, Strut2 et Java EE.'
                    ,
                    id2: 'KLEE2',
                    text2: '<strong>Réalisations détaillées :</strong>' +
                    '<ul>'+
          
                    '<li>Étude des besoins (affinage du besoin de l’entreprise)</li>' +
                    '<li>Maquette du projet avec le respect de la charte graphique de l’entreprise.</li>' +
                    'Développement du projet' +
                    '<ul>' +
                    '<li> Utilisation de power designer, pour modéliser la base de données </li>' +
                    '<li> Réalisation d’une connexion en SAML.</li>' +
                    '</ul>' +
                    '<li> rédaction d’une documentation pour intégrer facilement une connexion SAML.</li>' +
                    'Ce projet devait servir aussi comme boiler plate ensuite à l’entreprise.' +
                    '</ul>',
                    id3: 'KLEE3',
                    text3: '<strong>Grâce à ce stage j’ai pu:</strong><br>' +
                    '<ul>' +
                    '<li>Affiner mon projet professionnel et enrichir mes connaissances en interviewant les personnes sur leur métier et leur quotidien par une  proximité avec des personnes aux profils variés. Nous avons pu parler de leur métier et de leur parcours. J’ai en particulier découvert le métier de consultant et l\'importance d\'apporter une réelle valeur ajoutée à son client en prenant le temps de comprendre le besoin métier pour développer un outil qui soit adapté le plus possible à son besoin.</li>' +
                    '<li>Découvrir des valeurs de l’entreprise dont les valeurs humaines qui y sont développées. Cette valeur forte, qui est l\'équilibre entre le bien-être au travail et l\'évolution de carrière possible, je l\'ai trouvée dans une vraie volonté de l\'entreprise à m\'accompagner dans ma montée en compétences, pour m\'aider à être autonome et ainsi faire aboutir le projet que l\'on m\'avait confié. Je l\'ai aussi appréciée par mon intégration au sein de l\'entreprise où j\'ai pu participer aux ateliers du Fablab (IOT, imprimante 3D) ainsi qu\'à l\'atelier de photographie.</li>' +
                    '<br></ul>',
                    pills: [
                        {
                            id: 'langage',
                            text: 'Java EE',
                        },
                        {
                            id: 'bdd',
                            text: 'h2',
                        },
                        {
                            id: 'environnement',
                            text: 'Tomcat',
                        },
                        {
                            id: 'environnement',
                            text: 'Maven',
                        },
                        {
                            id: 'environnement',
                            text: 'Strut 2',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ],
                    softs: [
                        {
                            id: 'soft',
                            text: 'Autonomie',
                        },
                        {
                            id: 'soft',
                            text: 'Adaptabilité',
                        },
                        {
                            id: 'soft',
                            text: 'Communication',
                        },
                        {
                            id: 'soft',
                            text: 'Relationnel',
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