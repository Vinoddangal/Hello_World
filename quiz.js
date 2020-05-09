var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var option = document.getElementById('option');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion(questionIndex){
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion() {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	
	//when we miss the question
	if(!selectedOption){
		alert('Please select your answer!');
		return;
	}
	var answer = selectedOption.value;
	if (questions[currentQuestion].answer == answer) {
		score += 10;
	}
	else{
		alert('Wrong Answer!!!');
	}
	selectedOption.checked = false;
	currentQuestion++;

	//only for final question
	if (currentQuestion == totalQuestions - 1) {
		nextButton.textContent = 'Finish';
	}

	//final result
	if (currentQuestion == totalQuestions) {
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);