$(document).ready(function() {


	//--------------------- variables for random generated values --------
var crystalScore = 0
var wins = 0
var losses = 0
var crystal1 = addPowertoCrystals(1,12);
var crystal2 = addPowertoCrystals(1,12);
var crystal3 = addPowertoCrystals(1,12);
var crystal4 = addPowertoCrystals(1,12);
//onsole.log("begin")

var goalScore  = Math.floor(Math.random() * (120-18+1)) + 18;



$("#wins").html("<p>Wins: " + wins + "</p>");

$("#loses").html("<p>Losses: " + losses + "</p>");

$("#crystalScore").html("<p>CrystalGoal: " + goalScore + "</p>");

$("#sumPower").html("<p> Score: "+ crystalScore +"</p>");




$(".crystal").on("click", handleclick);


function handleclick(){

	console.log("click")

	var currentValue = $(this).data("crystal")
		
	crystalScore += parseInt(currentValue)

	$("#sumPower").html("<p> Score: "+ crystalScore +"</p>");

	endGame(); 

}

/* How to handle win or loss. End Game conditions: game over 1)means crystalscore = goalscore, which means wins++ 2) crystalsore > goalscore, which means losses++

If crystalScore === goalScore
	handle win

else if crystalScore > goalScore
	handle loss


*/





var randomCrystalNum = function(){

 var addPower = Math.floor(Math.random() * (12-1+1)) + 1;

 //console.log(addPower)


}

function endGame(){
	console.log("End Happened")

	if(crystalScore===goalScore){
		winGame();
		//console.log("win")
	}else if(crystalScore>goalScore){
		losegame();
		//console.log("lost")
	}


}

function winGame(){

	wins++;
	restart()

}

function losegame(){
	losses++;
	restart()
}


function restart(){

generateGemValue();
randomGoalScore();
crystalScore = 0;

$("#wins").html("<p>Wins: " + wins + "</p>"); 

$("#loses").html("<p>Losses: " + losses + "</p>");

$("#crystalScore").html("<p>CrystalGoal: " + goalScore + "</p>");

$("#sumPower").html("<p> Score: "+ crystalScore +"</p>");



}

function addPowertoCrystals(min,max) {

	var result = Math.floor(Math.random() * (max-min)+ min);
	return result;

}

function generateGemValue(){

	crystal1 = addPowertoCrystals(1,12)
	crystal2 = addPowertoCrystals(1,12)
	crystal3 = addPowertoCrystals(1,12)
	crystal4 = addPowertoCrystals(1,12)	
	console.log(crystal1, crystal2,crystal3,crystal4)

	$("#crystal1").data('crystal', crystal1);
	$("#crystal2").data('crystal', crystal2);
	$("#crystal3").data('crystal', crystal3);
	$("#crystal4").data('crystal', crystal4);

}

function randomGoalScore(){

	goalScore  = Math.floor(Math.random() * (120-18+1)) + 18;

};

generateGemValue();




});


//console.log("end")

























	
	

	





	







		

		


