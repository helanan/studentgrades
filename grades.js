var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var arraylength = scores.length
var grade_A = 0;
var grade_B = 0;
var grade_C = 0;
var grade_D = 0;
var grade_F = 0;

for (var i = 0; i < arraylength; i++) {

}if (scores[i] >= 91){
	grade_A++;

}else (scores[i] > 80){
	grade_B++;

}else
	(scores[i] > 70){
	grade_C++;

}else
	(scores[i] > 60){
	grade_D++;

}else
	(scores[i] > 50){
	grade_F++;
}

//console.log()

//Math.min();   


//A score of 50-60 is an F
//A score of 61-70 is a D
//A score of 71-80 is a C
//A score of 81-90 is a B
//A score of 91-100 is an A
//

//var comparison = (score1 + score2) > (highScore1 + highScore2);