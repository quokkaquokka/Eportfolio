import ProgressBar from 'progressbar.js';

export class Skills {

	constructor() {
		this.data = {
			title: 'Mes compétentes',
			subtitle:'En quoi je suis compétente',
			contents: [
                {
                    generalTitle: 'Langages',
                    id: 'langage',
                    bars:
                    [
                        {
                            subtitle: '',
                            title: 'HTML/CSS',
                            dataPerc: 0.70,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#9b74ff'
                        },
                        {
                            subtitle: '',
                            id: 'bar2',
                            title: 'JavaScript',
                            dataPerc: 0.70,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#ff26d9'
                        },
                        {
                            subtitle: '',
                            title: 'Pug/ Stylus',
                            dataPerc: 0.60,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff23d3'
                        },
                        {
                            subtitle: '',
                            title: 'Java EE',
                            dataPerc: 0.60,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#79ccff'
                        },
                        {
                            subtitle: '',
                            title: 'C',
                            dataPerc: 0.70,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#7b74ff'
                        },
                        {
                            subtitle: '',
                            title: 'PHP',
                            dataPerc: 0.50,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#79ccff'
                        },
                        {
                            subtitle: '',
                            title: 'Python',
                            dataPerc: 0.40,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#79ccff'
                        },
                        {
                            subtitle: '',
                            title: 'C#',
                            dataPerc: 0.40,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#9b74ff'
                        }
                    ]
                },
                {
                    id: 'framework',
                    generalTitle: 'Frameworks',
                    bars:[
                        {
                            subtitle: '(Javascript Front)',
                            title: 'Aurelia',
                            dataPerc: 0.70,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#9b74ff'
                        },
                        {
                            subtitle: '(Javascript Back)',
                            title: 'HapiJs',
                            dataPerc: 0.70,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff26d9'
                        },
                        {
                            subtitle: '(Javascript Front)',
                            title: 'VueJs',
                            dataPerc: 0.50,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff26d9'
                        }
                    ]
    
                },
                {
                    id: 'bdd',
                    generalTitle: 'Base de données',
                    bars:[
                        {
                            subtitle: '',
                            title: 'SQL',
                            dataPerc: 0.90,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff23d3'
                        },
                        {
                            subtitle: '',
                            title: 'MongoDb cloud',
                            dataPerc: 0.70,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#9b74ff'
                        },
                        {
                            subtitle: '',
                            title: 'Algolia',
                            dataPerc: 0.80,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff26d9'
                        },
                        {
                            subtitle: '',
                            title: 'Elastic Search',
                            dataPerc: 0.60,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#79ccff'
                        }
                    ]
    
                },
                {
                    id: 'environnement',
                    generalTitle: 'Environnements',
                    bars:[
                        {
                            subtitle: '',
                            title: 'NodeJs',
                            dataPerc: 0.70,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff23d3'
                        },
                        {
                            subtitle: '',
                            title: 'Webpack',
                            dataPerc: 0.60,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#79ccff'
                        },
                        {
                            subtitle: '',
                            title: 'Maven',
                            dataPerc: 0.50,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#9b74ff'
                        },
                        {
                            subtitle: '',
                            title: 'Tomcat',
                            dataPerc: 0.50,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff26d9'
                        },
                        
                        {
                            title: 'GlassFish',
                            dataPerc: 0.50,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#7b74ff'
                        }
                    ]
    
                },
                {
                    id: 'devops',
                    generalTitle: 'DevOps',
                    bars:[
                        {
                            title: 'Docker',
                            dataPerc: 0.70,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#7b74ff'
                        },
                        {
                            subtitle: '',
                            title: 'Jenkins',
                            dataPerc: 0.50,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff23d3'
                        },
                        {
                            subtitle: '',
                            title: 'DigitalOcean',
                            dataPerc: 0.50,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#9b74ff'
                        }
                        
                    ]
    
                },
                {
                    id: 'versionnement',
                    generalTitle: 'Gestionnaire de versionnement',
                    bars:[
                        {
                            title: 'git',
                            dataPerc: 0.70,
                            dataColorStart: '#79ccff',
                            dataColorEnd:'#7b74ff'
                        },
                        {
                            subtitle: '',
                            title: 'mercurial',
                            dataPerc: 0.60,
                            dataColorStart: '#0054ff',
                            dataColorEnd:'#ff23d3'
                        }  
                    ]
    
                }
            ]

		}
	}

	scrollTop = 0;
	scrollLeft = 0;
	scrollEvents = [];

	handleScrollEvent(e) {
	  let info = { 
		left: e.target.scrollLeft,
		top: e.target.scrollTop
		};
	  
	  this.scrollEvents.splice(0, 0, info);
    }
    
    attached () {
		for(let c of this.data.contents) {
            for(let i = 0; i < c.bars.length; i++) {
                var eleGradient = 'url(#' + c.id + '_' + i +')';
                let linearGradient = '<defs><linearGradient id="' + c.id + '_' + i + '" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse"><stop offset="20%" stop-color="'+ c.bars[i].dataColorStart +'"/><stop offset="50%" stop-color="'+ c.bars[i].dataColorEnd +'"/></linearGradient></defs>'
                let pbar = new ProgressBar.Line( '#' + c.id + '_' + i + '_pbar', 
		    		{
		    			strokeWidth: 1,
						easing: 'easeInOut',
						duration: 1400,
						color: eleGradient,
						trailColor: '#ffffff',
						trailWidth: 1,
						svgStyle: { width: '100%', height: '100%' },
						text: {
							style: {
								position: 'absolute',
								right: '0',
								top: '-20px',
								padding: 0,
								margin: 0,
								transform: null
								},
								autoStyleContainer: false
						},
						step: (state, bar) => {
						    bar.setText(Math.round(bar.value() * 100) + ' %');
						}
		    		});
		    	pbar.animate(c.bars[i].dataPerc);
				pbar.svg.insertAdjacentHTML('afterBegin', linearGradient);
            }
		}
	}
}
  