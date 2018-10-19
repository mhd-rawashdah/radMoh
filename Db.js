
/// 

// This variable to store The  object person info
var studentsDb = [];

var competitorsDb = {};

// variable to store generateID; 
var nameId = generateID();
function makeCohortFiveNames(id, firstName, lastName, age, score, image) {
	return {
		id: id ,
	    firstName: firstName,
	    lastName: lastName,
	    age: age,
	    score: score,
	    image: image
	};
}

studentsDb.push(makeCohortFiveNames( nameId(), "Mohammad", "Rawashdah", 24, 0, ""));
studentsDb.push(makeCohortFiveNames(nameId(), "Radwan", "Abdoh", 28, 0, ""));
studentsDb.push(makeCohortFiveNames(nameId(), "Omar", "bla", 24, 0, ""))
studentsDb.push(makeCohortFiveNames(nameId(), "Mohanad", "bla", 24, 0, ""))
studentsDb.push(makeCohortFiveNames(nameId(), "waled", "assaf", 24, 0, ""))

function mackCompetitor(info){
	var competitor = {};

	competitor.info = info;
	competitor.score = 0;
	competitor.increaseScore = increaseScore;
	return competitor;
}

var increaseScore = function(){
	return this.score += 1;
}

function makeQuestions(title, desc){
 	var question = {}

 	question.title = title;
 	question.desc = desc;
 	question.answers = [];
 	question.addAnswer = addAnswer;

 	return question;
}

var addAnswer = function(answer){
	this.answers.push(answer);
}
 
function makeAnswer(id, valueAnwser, correct){
 	return{
 		id: id,
 		value: valueAnwser,
 		correct: correct,
 	};
}


var question1 = makeQuestions("what the result", "var x = 8 * 4 - 6 + 8 % 3(9 / 3)");
question1.addAnswer(makeAnswer("A", "x = 5", false));
question1.addAnswer(makeAnswer("B", "x = 10", false));
question1.addAnswer(makeAnswer("C", "x = 6", true));
question1.addAnswer(makeAnswer("D", "x = 57", false));




