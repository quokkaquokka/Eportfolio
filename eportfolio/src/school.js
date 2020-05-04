export class School{
    constructor(){
        this.data = {
			title: 'Mon éducation',
            subtitle:'',
            experiences: [
                {
                    time: '2020 - 2018',
                    title: 'Efrei Paris, Villejuif',
                    subtitle: 'École Ingénieur Informatique',
                    img: 'images/efrei-paris.png',
                    id: 'efrei',
                    title1: 'Projet d\'innovation',
                    text:
                    '<i><b>2 ème</b> au concours de l\'Innovation day</i><br>Notre projet d\'innovation consiste à faire une simulation d’environnement en direction de deux publics, les particuliers et les professionnels. <br>' +
                    'Pour les particuliers  nous souhaitons les aider à pouvoir créer leur potager ,à faire de l’aquaponie … En effet pour jardiner il faut se renseigner et cela nécessite du temps ! Nous proposons au particulier d’entrer dans le logiciel les plantes qu’il désire cultiver, l’exposition qu’il a dans son jardin … Notre application lui permettra de savoir si les plantes souhaitées sont adaptées à son environnement et donnera des conseils pour une meilleure croissance. Notre application disposera aussi d’un petit wiki pour que les utilisateurs puissent trouver des informations complètes sur le jardinage.<br>' +
                    'Pour les professionnels la simulation a un objectif plus ambitieux, pouvoir simuler tout type d’environnement.  Par exemple: simuler les Pyrénées afin de réintroduire des ours, cela permettrait de savoir si dans 50 ans cela ne va pas poser de problèmes de consanguinité ou s’il y aura assez de nourriture pour eux, sans qu’ils soient obligés de tuer des troupeaux. <br><br>' + 
                    '<strong>Détails des réalisations: </strong><br>' +
                    '<ul>' +
                    '<li>rédaction d’un business plan</li>' +
                    '<li>implémentation d’une solution</li>' +
                    '<li>devOPs : </li>' +
                    '<ul>' +
                    '<li>docker node et python</li>' +
                    '<li>déploiement sur  digital Ocean</li>' +
                    '<li>création d\'un sous-domaine sur un nom de domaine avec les DNS d\'OVH</li>' +
                    '</ul>' +
                    '</ul>'
                    ,
                    pills1: [
                        {
                            id: 'langage',
                            text: 'HTML/CSS',
                        },
                        {
                            id: 'langage',
                            text: 'JavaScript',
                        },
                        {
                            id: 'langage',
                            text: 'Python',
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
                            text: 'MongoDB',
                        },
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'devops',
                            text: 'docker',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ],
                    softs1: [
                        {
                            id: 'soft',
                            text: 'Force de proposition',
                        },
                        {
                            id: 'soft',
                            text: 'Force motrice',
                        }
                    ],
                    /*id2: 'efrei2',.text}
                    text2: '<strong> Projet DevOps </strong>',
                    id3: 'efrei3',
                    text3: 'Détails des réalisations uuu : <br>',
                    */
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
                            id: 'langage',
                            text: 'Java EE',
                        },  
                        {
                            id: 'langage',
                            text: 'PHP',
                        },
                        {
                            id: 'langage',
                            text: 'C#',
                        },
                        {
                            id: 'langage',
                            text: 'Python',
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
                            text: 'My SQL',
                        },
                        {
                            id: 'bdd',
                            text: 'MongoDB',
                        },
                        {
                            id: 'bdd',
                            text: 'Algolia',
                        },
                        {
                            id: 'environnement',
                            text: 'NodeJs',
                        },
                        {
                            id: 'environnement',
                            text: 'Maven',
                        },
                        {
                            id: 'environnement',
                            text: 'GlassFish',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ]
                },
                {
                    time: '2019',
                    title: 'Staffordshire university, Stock-on-Trent',
                    subtitle: '',
                    img: 'images/Staffordshire_University_Logo.png',
                    id: 'staff',
                    title1: 'UML',
                    text: 
                    'Sujet : un site de shopping en ligne. '+
                    '<br> Nous devions concevoir et réaliser de projet. Dans la conception il y avait un travail de diagramme uml (diagramme : classe, état, séquence ...) '+ 
                    '<br> Pour la réalisation, nous étions libre sur le choix du langage.' +
                    '<br>',
                    pills1: [
                        {
                            id: 'langage',
                            text: 'HTML/CSS',
                        },
                        {
                            id: 'langage',
                            text: 'JavaScript',
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
                            text: 'Algolia',
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
                    id2: 'staff2',
                    title2: 'Web programming',
                    text2: 'Sujet : un site de gestion d\'Image.',
                    pills2: [
                        {
                            id: 'langage',
                            text: 'HTML/CSS',
                        },
                        {
                            id: 'langage',
                            text: 'Php',
                        },
                        {
                            id: 'bdd',
                            text: 'My SQL',
                        },
                        {
                            color: '#4ACFAC',
                            text: 'git',
                        }

                    ],
                    pills: [
                        {
                            id: 'langage',
                            text: 'HTML/CSS',
                        },
                        {
                            id: 'langage',
                            text: 'Javascript',
                        },
                        {
                            id: 'langage',
                            text: 'PHP',
                        },

                        {
                            id: 'langage',
                            text: 'C++',
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
                            text: 'Algolia',
                        },
                        {
                            id: 'bdd',
                            text: 'My SQL',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ]
                },
                {
                    time: '2018 - 2016',
                    title: 'EPITA, Kremlin-Bicêtre',
                    subtitle: 'Ecole des ingénieurs en intelligence informatique',
                    img: 'images/Epita.png',
                    id: 'epita',
                    title1: '42sh',
                    text: 
                    'Sujet :  réaliser un « shell ».'+
                    '<br> Le principale projet durant <a href="https://www.epita.fr/nos-formations/diplome-ingenieur/cycle-ingenieur/les-projets/">la fameuse piscine d\'EPITA. </a>' +
                    '<br>',
                    pills1: [
                        {
                            id: 'langage',
                            text: 'C',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ],
                    softs1: [],
                    id2: 'epita2',
                    title2: 'OCR : réseaux de neuronnes',
                    text2: 'Sujet : reconnaissance optique de caractères grâce aux réseaux de neuronnes.',
                    pills2: [
                        {
                            id: 'langage',
                            text: 'C',
                        }
                    ],
                    pills: [
                        {
                            id: 'langage',
                            text: 'C',
                        },
                        {
                            id: 'langage',
                            text: 'C#',
                        },

                        {
                            id: 'langage',
                            text: 'Java EE',
                        },
                        {
                            id: 'langage',
                            text: 'Python',
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
                            id: 'bdd',
                            text: 'SQL',
                        },
                        {
                            id: 'versionnement',
                            text: 'git',
                        }
                    ]
                }
            ]
        }
    }

    scrollTop = 0;
	scrollLeft = 0;
    scrollEvents = [];

    attached() {
        this.displayContent();
        this.displayContent2();
        this.displayContent3();
    }
    
    displayContent() {
        let i = 0;
        for(; i < this.data.experiences.length; i++)
        {
            var div = document.getElementById(this.data.experiences[i].id);
            if(div)
                div.innerHTML = this.data.experiences[i].text;
        }
        
    }

    displayContent2() {
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