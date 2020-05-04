import ProgressBar from 'progressbar.js';


export class About {

	constructor() {
		this.data = {
			title: "Camille Moutte",
			subtitle:"Développeuse FullStack Javascript",
			content: "Aujourd’hui développeuse web Fullstack en JavaScript de niveau intermédiaire prête à m’investir pour devenir excellente dans ce domaine et en architecture logicielle pour apporter la meilleure valeur ajoutée au client/entreprise.",
			loaders: [
				{
					dataPerc: 0.90 ,
					id: "loader1",
					title: "Persévérance",
					subtitle: "",
					link: "perseveranceLink()"
				},
				{
					dataPerc: 0.80 ,
					id: "loader2",
					title: "Organisation",
					subtitle: "",
					link: "perseveranceLink()"

				},
				{
					dataPerc: 0.80 ,
					id: 'loader3',
					title: "Adaptabilité",
					subtitle: "",
					link: "perseveranceLink()"

				},
				{
					dataPerc: 0.70 ,
					id: 'loader4',
					title: "Créativité",
					subtitle: "",
					link: "perseveranceLink()"
				}
				
			]
		}
	}

	scrollTop = 0;
	scrollLeft = 0;
	scrollEvents = [];
	handleScrollEvent(e) {
	  let info = {
		color: '#'+Math.floor(Math.random()*16777215).toString(16),
		left: e.target.scrollLeft,
		top: e.target.scrollTop
		};
	  
	  this.scrollEvents.splice(0, 0, info);
	}

	attached () {
		for(let l of this.data.loaders) {
			var bar = new ProgressBar.Circle( '#' + l.id,
				{
					color: '#8583e1',
					strokeWidth: 1,
					trailWidth: 20,
					trailColor: '#212121',
					easing: 'easeInOut',
					duration: 1400,
					text:
					{
						autoStyleContainer: false
					},
					from:{ color: '#6f42c1', width: 1 },
					to: { color: '#FF0266', width: 1 },
					step: function(state, circle)
					{
						circle.path.setAttribute('stroke', state.color);
						circle.path.setAttribute('stroke-width', state.width);
	
						var value = Math.round(circle.value() * 100);
						if (value === 0)
						{
							circle.setText('0%');
						}
						else
						{
							circle.setText(value + "%");
						}
					}
				});
				bar.text.style.fontFamily = '"Montserrat", sans-serif';
				bar.text.style.fontSize = '44px';
				bar.text.style.fontWeight = '700';
				bar.text.style.color = "#FFFFFF";
				bar.animate(l.dataPerc);
		}
	}


	perseveranceLink() {
		console.log('toto')
	}
}
  