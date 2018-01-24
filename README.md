# week-4-game
Crystal Collector - The Game!


log - 5:50PM - psuedocode

nouns:

	score - refers to the number that users need to reach with the points they have to win
	
	 - refers to the amounts that can be stored in each cystal they have, can be 1-12

	randomCrystalValue- randomly generated numbers
	
	cystals - [crystal] refers to the elements which carry the points that users put towards the score to win the game


	sumOfPoints - this is the amount of points user generated from clicking crystals. for win, sumofpoints == score, for loss, sumofpoints> score.

	userClick - only matter when user clicks a crystal to add points towards sumofpoints

	conditionals ---------------- 

	wins - times when user puts the exact amount of points that matches the number of the score (wins only occur when the sumOfPoints == score. 

	losses - times when user puts more than the amount of the score from crystals. occurs when sumOfpoints > Score


actions:

	score is a randomly generated number between 18-120:


	4 crystals each hold a value between 1-12:
		4 random numbers are generated
			each one of those 4 numbers is put inside each of the 4 crystals 


	user clicks one of the 4 crystals to add towards the sumOfPoints 

		when the user clicks crystals to add value up to score, win++
		when the user clicks crystals to add value up passed the score, lose ++

		when a user wins++ or loses++, the game resets 

	when the game resets:

		1. sumOfPoints sets to 0
		2. the score is set to a random number between 18-120.
		3. the crystals are each assigned new random values.


All stats are displayed onto the page:

Wins are shown
Losses are shown
Score is shown
sumOfPoints are shown

















