$(document).ready(function() {
  var id = prompt("What is the name of your pokemon?");
  var url;
  var item;
  var happiness = 220;
  var beauty;
  var gender;
  var level = 36;
  var canEvolve = false;

$.getJSON('http://pokeapi.co/api/v2/pokemon-species/' + id)
	.done(function(myArr) {
	url = myArr.evolution_chain.url;
	$.getJSON(url)
		.done(function(myArr) {
		if (myArr.chain.species.name == id) {
			canEvolve = true;+
	                if (canEvolve) {
	                  	for (i = 0; i < myArr.chain.evolves_to.length; i++) {
					if(myArr.chain.evolves_to[i].evolution_details.gender != null){
						if(myArr.chain.evolves_to[i].evolution_details.gender != gender){
							console.log("I'm sorry your pokemon is the wrong gender!");
						}
					}
					if(myArr.chain.evolves_to[i].evolution_details.min_level != null){
						if(myArr.chain.evolves_to[i].evolution_details.min_level < level){
							console.log("I'm sorry your level is not enough");
							console.log("You need " + myArr.chain.evolves_to[i].evolution_details.min_level - level + ' more');
						}
					}
					if(myArr.chain.evolves_to[i].evolution_details.min_beauty != beauty){
						if(myArr.chain.evolves_to[i].evolution_details.beauty < beauty){
							console.log("I'm sorry your beauty is not enough");
							console.log("You need " + myArr.chain.evolves_to[i].evolution_details.min_beauty - beauty + ' more');
						}
					}
					if(myArr.chain.evolves_to[i].evolution_details.min_happiness != null){
						if(myArr.chain.evolves_to[i].evolution_details.min_happiness < happiness){
							console.log("I'm sorry your happiness is not enough");
							console.log("You need " + myArr.chain.evolves_to[i].evolution_details.min_happiness - happiness + ' more');
						}
					}
					if(myArr.chain.evolves_to[i].evolution_details.item != null){
						if(myArr.chain.evolves_to[i].evolution_details.item != item){
							console.log("You need " + myArr.chain.evolves_to[i].evolution_details.item + " to evolve" );
						}
					}
				 console.log("You can evolve to " myArr.chain.evolves_to[i].species.name);
			        }
			}
		
		 }
	
	for (i = 0; i < myArr.chain.evolves_to.length; i++) {
		if (myArr.chain.evolves_to[i].species.name == id && myArr.chain.evolves_to[i].evolves_to.length > 0) {
		  canEvolve = true;
		    if (canEvolve) {
	    		for (j = 0; j < myArr.chain.evolves_to[i].evolves_to.length; i++) {
				if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.gender != null){
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.gender != gender){
						console.log("I'm sorry your pokemon is the wrong gender!");
					}
				}
				if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_level != null){
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_level < level){
						console.log("I'm sorry your level is not enough");
						console.log("You need " + myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_level - level + ' more');
					}
				}
				if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_beauty != beauty){
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.beauty < beauty){
						console.log("I'm sorry your beauty is not enough");
						console.log("You need " + myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_beauty - beauty + ' more');
					}
				}
				if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_happiness != null){
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_happiness < happiness){
						console.log("I'm sorry your happiness is not enough");
						console.log("You need " + myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_happiness - happiness + ' more');
					}
				}
				if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.item != null){
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.item != item){
						console.log("You need " + myArr.chain.evolves_to[i].evolves_to[j].evolution_details.item + " to evolve" );
					}
				}
			  console.log("You can evolve into " + myArr.chain.evolves_to[i].evolves_to[j].species.name);
		        }
		    
		    }
		}
	}
	
				
				});
		});
});

// var pokemon = new XMLHttpRequest();
// var url = "http://pokeapi.co/api/v2/evolution-chain/3";

// pokemon.onreadystatechange = function(){
// 	if(pokemon.readyState == 4 && pokemon.status == 200){
// 		var myArr = JSON.parse(pokemon.responseText);
// 		url = myArr.evolution_chain;
// 		var pokemon2 = new XMLHttpRequest();
// 		pokemon2.onreadystatechange = function() {
// 			if (pokemon2.readyState == 4 && pokemon2.status == 200) {
// 				var myArr = JSON.parse(pokemon2.responseText);
// 				console.log(myArr);
// 			}
// 		}
// 		pokemon2.open("GET", url, true);
// 		pokemon2.send();
// 	}
// }

// pokemon.open("GET", url, true);
// pokemon.send();

