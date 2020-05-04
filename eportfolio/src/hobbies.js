export class Hobbies{
    constructor(){
        this.data = {
			title: 'Mes loisirs',
            subtitle:'',
            experiences: [
                {
                    time: '',
                    title: 'Le développement personnel',
                    subtitle: '',
                    img: 'images/titanium.jpg',
                    id: 'dp',
                    text: 'Sur mes week-ends, vacances je vais à des conférences de développement personnel afin de mieux gérer mon stress durant les examens <br>et de mieux me connaître pour allier au mieux ma vie professionnelle et personnelle.<br>Cela m’aide aussi à déterminer des objectifs smart pour aller vers un objectif lointain.<br>' +
                    'Je me suis récemment inscrite au programme “Titanium Life” de David Laroche d’une durée d’un 1 an. Afin de pouvoir avancer sur mes objectifs.<br>',
                    pills: [
                        {
                            id: 'soft',
                            text: 'confiance en soi',
                        }
                    ]
                },
                {
                    time: '',
                    title: 'Le roller de vitesse',
                    subtitle: '7 ans – Compétition internationale',
                    img: 'images/roller.jpg',
                    id: 'rv',
                    text: 'J’ai commencé le roller en 6 ème, sans objectif particulier, juste en tant que loisir. <br>Après 2 mois d\'entraînement, l\'entraîneur me propose de passer dans l’équipe de compétition.<br> C’est le début d’une aventure de 7 ans où j’ai pu partir à 2 reprises à l’ile Maurice pour des compétitions internationales, sans mes parents.<br>' +
                    'Cela m’a appris la rigueur pour être toujours présente aux entraînements ainsi que l’esprit de compétition pour être la meilleure sur la piste. <br>Mais aussi à être amis en dehors des compétitions, aider ses coéquipier et à analyser les situations afin d’établir des stratégies pour gagner. <br>Ma persévérance s’est aussi développée car il y a toujours des moments de difficultés lors des compétitions et des entraînements.'   
                    ,
                    pills: [
                        {
                            id: 'soft',
                            text: 'persévérance',
                        },
                        {
                            id: 'soft',
                            text: 'esprit de compétition',
                        },
                        {
                            id: 'soft',
                            text: 'rigueur',
                        },
                        {
                            id: 'soft',
                            text: 'indépendance',
                        },
                        {
                            id: 'soft',
                            text: 'esprit d\'analyse et de synthèse',
                        }

                    ]
                },
                {
                    time: '',
                    title: 'La flûte traversière',
                    subtitle: '6 ans',
                    img: 'images/flute.JPG',
                    id: 'ft',
                    text: 'J’ai fait de la flûte traversière pendant 6 ans dont notamment 2 ans dans un orchestre.<br>'+
                    'Cela a renforcé ma rigueur car il fallait s\'entraîner tous les jours mais aussi respecter la partition. <br>En effet sur un orchestre si un musicien est décalé où ne joue pas dans le rythme cela peut s’entendre.'
                    ,
                    pills: [
                        {
                            id: 'soft',
                            text: 'Esprit d\'équipe',
                        },
                        {
                            id: 'soft',
                            text: 'Rigueur',
                        }
                    ]
                },
                {
                    time: '',
                    title: 'Le dessin ',
                    subtitle: '',
                    img: 'images/rose.jpg',
                    id: 'd',
                    text: 'Depuis toute petite je dessine afin d’exprimer ma créativité tout en travaillant  le côté technique afin d’obtenir ce que je visualise dans mon esprit.<br>' +
                    ' Au collège pour m’améliorer je demandais des sujets supplémentaires à mes professeurs d’art plastique afin de travailler ma force de proposition et ma créativité dans le but d’intégrer les beaux-arts.<br>'+
                    ' Un sujet a plusieurs interprétation et  manières de le réaliser.'
                    
                    ,
                    pills: [
                        {
                            id: 'soft',
                            text: 'créativité',
                        },
                        {
                            id: 'soft',
                            text: 'force de proposition',
                        },
                        {
                            id: 'soft',
                            text: 'proactivité',
                        }
                    ]
                },
                {
                    time: '',
                    title: 'Les voyages',
                    subtitle: '',
                    img: 'images/canada.jpg',
                    id: 'v',
                    text: 'Depuis toute petite je voyage avec mes parents : île Maurice (15 jours), Nouvelle Calédonie (4 ans), île des Paques, Australie, Tahiti<br>' +
                    'Depuis que je suis partie pour faire mes études, je continue à voyager : le Canada(2 mois), l’Angleterre(15 jours), l’Italie (10 jours).<br>' +
                    'Les voyages me permettent de découvrir de nouveaux paysages, de nouvelles architectures, de nouvelles cultures.<br> Depuis que je voyage sans mes parents j’organise, j’anticipe, je gère un budget.'
                    ,
                    pills: [
                        {
                            id: 'soft',
                            text: 'adaptabilité',
                        },
                        {
                            id: 'soft',
                            text: 'ouverture d\'esprit',
                        },
                        {
                            id: 'soft',
                            text: 'organisation',
                        },
                        {
                            id: 'soft',
                            text: 'curiosité',
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
	
	handleScrollEvent(e) {
	  let info = { 
		left: e.target.scrollLeft,
		top: e.target.scrollTop
		};
	  
	  this.scrollEvents.splice(0, 0, info);
	}
}