$(document).ready(function() {
  var id = prompt("What is the name of your pokemon?");
  var url;
  var item;
  var happiness;

	$.getJSON('http://pokeapi.co/api/v2/pokemon-species/' + id)
		.done(function(data) {
			console.log(data);
			url = data.evolution_chain.url;
			console.log(url);
			$.getJSON(url)
				.done(function(data) {
					console.log(data);
					if (data.chain.species.name == id) {
						for (i = 0; i < data.chain.evolves_to.length; i++) {
						console.log(data.chain.evolves_to[i].species.name);
						}
					}
					for (i = 0; i < data.chain.evolves_to.length; i++) {
						if (data.chain.evolves_to[i].species.name && data.chain.evolves_to[i].evolves_to.length > 0) {
							for (j = 0; j < data.chain.evolves_to[i].evolves_to.length; j++) {
							console.log(data.chain.evolves_to[i].evolves_to[j].species.name);
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

