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
					console.log(myArr.chain.evolves_to[0].evolution_details);
				}
				for (i = 0; i < myArr.chain.evolves_to.length; i++) {
					if (myArr.chain.evolves_to[i].species.name == id && myArr.chain.evolves_to[i].evolves_to.length > 0) {
					  canEvolve = true;
					    if (canEvolve) {
					    	console.log(myArr);
					    	console.log(myArr.chain.evolves_to[i].evolves_to[i].evolution_details);
					    }
					}
					// if (myArr.chain.evolves_to[i].evolves_to.length == 0 && myArr.chain.evolves_to[i].species.name == id) {
					// 	canEvolve = false;
					// }
					// if (myArr.chain.evolves_to[i].evolves_to.length > 0) {
					// 	for (j = 0; j < myArr.chain.evolves_to[i].evolves_to.length; j++) {
					// 		if (myArr.chain.evolves_to[i].evolves_to[j].species.name == id && myArr.chain.evolves_to[i].evolves_to[j].evolves_to.length == 0) {
					// 			canEvolve = false;
					// 		}
					// 	}
					// }
				}
			// if (canEvolve) {
			// 	console.log(myArr);
			// 	for (i = 0; i < myArr.chain.evolves_to.length; i++) {
			// 		console.log(i);
			// 			for (j = 0; j < myArr.chain.evolves_to[i].evolves_to.length; j++) {
			// 				console.log(myArr.chain.evolves_to[i].evolution_details);
			// 				if(myArr.chain.evolves_to[i].evolution_details.gender != null){
			// 					if(myArr.chain.evolves_to[i].evolution_details.gender != gender){
			// 						canEvolve = false;
			// 					}
			// 				}
			// 				if(myArr.chain.evolves_to[i].evolution_details.min_level != null){
			// 					if(myArr.chain.evolves_to[i].evolution_details.min_level < level){
			// 						canEvolve = false;
			// 					}
			// 				}
			// 				if(myArr.chain.evolves_to[i].evolution_details.min_beauty != beauty){
			// 					if(myArr.chain.evolves_to[i].evolution_details.beauty < beauty){
			// 						canEvolve = false;
			// 					}
			// 				}
			// 				if(myArr.chain.evolves_to[i].evolution_details.min_happiness != null){
			// 					if(myArr.chain.evolves_to[i].evolution_details.min_happiness < happiness){
			// 						canEvolve = false;
			// 					}
			// 				}
			// 				if(myArr.chain.evolves_to[i].evolution_details.item != null){
			// 					if(myArr.chain.evolves_to[i].evolution_details.item != item){
			// 						canEvolve = false;
			// 					}
			// 				}
			// 				if(canEvolve){
			// 					console.log("You can evolve into " + myArr.chain.evolves_to[i].species.name);
			// 				}
			// 			 }
			// 		}
			// }
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

