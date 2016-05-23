$(document).ready(function() {
  $("#button").click(function() {
		var id = $("#pokeName").val().toLowerCase();
		if (id == "") {
			id = null;
		}
		var item = $("#itemName").val();
		if (item == "") {
			item = null;
		}
		var happiness = $("#happyLev").val();
		if (happiness == "") {
			happiness = null;
		}
		happiness = parseInt("happiness", 10);
		var level = $("#pokeLev").val();
		if (level == "") {
			level = null;
		}
		level = parseInt("level", 10);
		var gender = $("#pokeGen").val().toLowerCase();
		if (gender == "") {
			gender = null;
		}
		var beauty = $("#beautyLev").val();
		if (beauty == "") {
			beauty = null;
		}
		beauty = parseInt("beauty", 10);

		var pushText;

		var link = "images/form-bg.jpg";

	$.getJSON('http://pokeapi.co/api/v2/pokemon-species/' + id)
		.done(function(myArr) {
		url = myArr.evolution_chain.url;
		$.getJSON(url)
			.done(function(myArr) {

			if (myArr.chain.species.name == id) {
				console.log(myArr);
				canEvolve = true;
		       for (i = 0; i < myArr.chain.evolves_to.length; i++) {
		       	var ready = true;
						if(myArr.chain.evolves_to[i].evolution_details.gender != null){
							if(myArr.chain.evolves_to[i].evolution_details.gender != gender){
								pushText = "I'm sorry your pokemon is the wrong gender!" + " to evolve " + myArr.chain.evolves_to[i].species.name ;
								ready = false;

								var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
							}
						}
						if(myArr.chain.evolves_to[i].evolution_details.min_level != null){
							if(myArr.chain.evolves_to[i].evolution_details.min_level < level){
								pushText = "I'm sorry your level is not enough";
								pushText = "You need " + parseInt(myArr.chain.evolves_to[i].evolution_details.min_level) - parseInt(level) + ' more' + " to evolve " + myArr.chain.evolves_to[i].species.name;
								ready = false;

								var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
							}
						}
						if(myArr.chain.evolves_to[i].evolution_details.min_beauty != beauty){
							if(myArr.chain.evolves_to[i].evolution_details.beauty < beauty){
								pushText = "I'm sorry your beauty is not enough";
								pushText = "You need " + parseInt(myArr.chain.evolves_to[i].evolution_details.min_beauty) - parseInt(beauty) + ' more' + " to evolve " + myArr.chain.evolves_to[i].species.name;
								ready = false;

								var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
							}
						}
						if(myArr.chain.evolves_to[i].evolution_details.min_happiness != null){
							if(myArr.chain.evolves_to[i].evolution_details.min_happiness < happiness){
								pushText = "I'm sorry your happiness is not enough";
								pushText = "You need " + parseInt(myArr.chain.evolves_to[i].evolution_details.min_happiness) - parseInt(happiness) + ' more' + " to evolve " + myArr.chain.evolves_to[i].species.name;
								ready = false;

								var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
							}
						}
						if(myArr.chain.evolves_to[i].evolution_details.item != null){
							if(myArr.chain.evolves_to[i].evolution_details.item.name != item){
								pushText = "You need " + myArr.chain.evolves_to[i].evolution_details.item.name + " to evolve " + myArr.chain.evolves_to[i].species.name;
								ready = false;

								var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
							}
						}
						if (ready) {
					 pushText = "You can evolve to " + myArr.chain.evolves_to[i].species.name;

					var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
					$("body").append(html);
					}
				 } 
		  }    
				
		for (i = 0; i < myArr.chain.evolves_to.length; i++) {
			console.log(myArr);
			if (myArr.chain.evolves_to[i].species.name == id && myArr.chain.evolves_to[i].evolves_to.length > 0) {
			  canEvolve = true;
			  	var ready = true;
		    for (j = 0; j < myArr.chain.evolves_to[i].evolves_to.length; j++) {
		    		
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.gender != null){
						if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.gender != gender){
							pushText = "I'm sorry your pokemon is the wrong gender!";
							 ready = false;

							 var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
						}
					}
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_level != null){
						if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_level < level){
							pushText = "I'm sorry your level is not enough";
							pushText = "You need " + parseInt(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_level) - parseInt(level) + ' more' + " to evolve " + myArr.chain.evolves_to[i].evolves_to[j].species.name;
	            ready = false;

	            var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
						}
					}
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_beauty != beauty){
						if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.beauty < beauty){
							pushText = "I'm sorry your beauty is not enough";
							pushText = "You need " + parseInt(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_beauty) - parseInt(beauty) + ' more' + " to evolve " + myArr.chain.evolves_to[i].evolves_to[j].species.name;
							ready = false;

							var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
						}
					}
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_happiness != null){
						if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_happiness < happiness){
							pushText = "I'm sorry your happiness is not enough";
							pushText = "You need " + parseInt(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.min_happiness) - parseInt(happiness) + ' more ' + " to evolve " + myArr.chain.evolves_to[i].evolves_to[j].species.name;
							ready = false;

							var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
						}
					}
					if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.item != null){
						if(myArr.chain.evolves_to[i].evolves_to[j].evolution_details.item.name != item){
							pushText = "You need " + myArr.chain.evolves_to[i].evolves_to[j].evolution_details.item.name + " to evolve " + myArr.chain.evolves_to[i].evolves_to[j].species.name;
							ready = false;
							var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
						}
					}
	       if (ready) {
				  pushText = "You can evolve into " + myArr.chain.evolves_to[i].evolves_to[j].species.name;
				  var html = "<div style = 'background-image: url(" + link + "); color: white; text-align: center; max-width: 300px; position: relative; margin: auto; border: 3px solid black'>" + pushText + "</div>";
								$("body").append(html);
					}
	      } 
	    
	  }
	 }
			});
		});
	});
});