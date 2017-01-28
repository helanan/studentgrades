//practicing statements and methods with vanilla javascript

var scores;
var grade = 0
var finalGrades;
var msg = '';
var i;

grades = ['A', 'B', 'C', 'D', 'F']; //declares the grade variable with an identifier
scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87]; //array of score values

var finalGrades = scores.sort(function(a,b) {return a-b});
console.log("finalGrades", finalGrades);

var scoreTotal = finalGrades.length;

for (i = 0; i < scoreTotal; i++) {
	grade = (i + 1);
	
	msg += 'Grade ' + grade + ':';
	msg += scores[i] + '<br />';
}

document.getElementById('grade').innerHTML = msg;
Display the appropriate grade based on the current score
if (finalGrades >= 60) {
	console.log(grade[0]);
	console.log("grade", grade);
} else if (finalGrades >= 61) &&  {
	grade = 'D';
	console.log("grade", grade);
} else if (finalGrades >= 71) {
	grade = 'C';
	console.log("grade", grade);
} else if (finalGrades >= 81) {
	grade = 'B';
	console.log("grade", grade);
} else if (finalGrades >= 91) {
	grade = 'C';
	console.log("grade", grade);
} else {
	grade = 'No Score Found';
}

document.write('<em>' + grade + '</em>');

var quantity;
quantity = finalGrades.length;
var el = document.getElementById('quantity');
el.textContent = 'Number of classes taken this semester: ' + quantity;

highestGrade = Math.max(finalGrades);
console.log ("highestGrade", highestGrade);
var el2 = document.getElementById('highest');
el2.textContent = 'Highest Grade: ' + highestGrade;

lowestGrade = Math.min(finalGrades);
console.log ("lowestGrade", lowestGrade);
var el3 = document.getElementById('lowest');
// el3.textContent = 'Lowest Grade: ' + lowestGrade;




// var arrayLength = scores.length;
// var grade_A = 0;
// var grade_B = 0;
// var grade_C = 0;
// var grade_D = 0;
// var grade_F = 0;

for (var i = 0; i < array.length; i++) {

if (scores[i] >= 91) {
	grade_A++;
	console.log("grade_A", grade_A);

// } else if (scores[i] > 80) {
// 	grade_B++;
// 	console.log("grade_B", grade_B);
// }

// } else if (scores[i] > 70) {
// 	grade_C++;
// 	console.log("grade_C", grade_C);
// }

// } else if (scores[i] > 60) {
// 	grade_D++;
// 	console.log("grade_D", grade_D);
// }

// } else if (scores[i] > 50) {
// 	grade_F++;
// 	console.log("grade_F", grade_F);
// } else {
// 	console.log("no score recorded");
// }

//console.log()

//Math.min();   


//A score of 50-60 is an F
//A score of 61-70 is a D
//A score of 71-80 is a C
//A score of 81-90 is a B
//A score of 91-100 is an A
//

//var comparison = (score1 + score2) > (highScore1 + highScore2);