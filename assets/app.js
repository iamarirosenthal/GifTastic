//Var Animals: Monkey, Penguin, Turle, Giraffe, Dog, Leopard, Lion, Snake, Otter, Squid

var animalsArray = ["Monkey", "Peniguin", "Turle", "Giraffe", "Dog", "Leopard", "Lion", "Snake", "Otter", "Squid"]; 

//Buttons will display Animal Buttons.

function renderButtons(){

	$("buttonPanel").empty(); 

	for(var i = 0; i <animalsArray.length; i++) {
	  var button = $("<button>"); 
	  button.addClass("animalButton"); 
	  button.attr("data-animal", animalsArray[i]); 
	  button.text(animalsArray[i]); 

	  $("buttonPanel").append(button); 


	}
}

// ****Event Handlers****//

		$("#add-animal").on("click", function(event){
		  event.preventDefault(); 

		  var animal = $("#animal-input").val().trim(); 

		  animalsArray.push(animal); 
		  $("#animal-input").val(""); 

		  renderButtons(); 

		}); 

		// search Animal Gifs

		function searchAnimalGifs() {

		var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + animals + 
                 "&rating=pg-13&limit=20&api_key=t5AWLUQpt05dM3CRhFlOVtHEkbijYMPC";

           $.ajax({
           	url: queryURL,
           	method: "GET",

           })
           .done(function(result){

           var dataArray = result.data; 

           $("#gifPanel").empty(); 
            for(var i = 0; i < dataArray.length; i++); 

               var newDiv = $("<div>"); 

           		newDiv.addClass("animalGif"); 

           		var newRating = $("<h2>").html("Rating: " + dataArray[i].rating); 
           		newDiv.append(newRating); 

           		var newImg = $("<img>"); 
           		newImg.attr("src", dataArray[i].images.fixed_height_still.url); 
           		newImg.attr("data-still", dataArray[i].images.fixed_height_still.url); 
           		newImg.attr("data-animate", dataArray[i].images.fixed_height.url); 
           		newImg.attr("data-state", "still"); 
           		newDiv.append(newImg); 


           		$("#gifPanel").append(newDiv); 

           	}

           }); 

		}

		function animateAnimalGif(){

			var state = $(this).find("img").attr("data-state"); 

			if (state === "still") {

				$(this).find("img").attr("src", $(this).find("img").attr("data-animate")); 
				$(this).find("img").attr("data-state", "animate"); 
			} else {
				$(this).find("img").attr("src", $(this).find("img").attr("data-still")); 
				$(this).find("img").attr("data-state", "still"); 

			}
		}


		$(document).ready(function(){
			renderButtons(); 
		}
		}); 