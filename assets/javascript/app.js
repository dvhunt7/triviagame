
var right = 0;
var wrong = 0;
var timeLeft = 5;


$("#start").on("click", function(){
	$(this).hide();
	countdown();
})

function countdown(){

	var countTimer = setInterval(function(){

	timeLeft = timeLeft -1;

	if (timeLeft == 0) {
		gameOver();
		clearTimeout(countTimer);
	} 

	else {
		$("#timer").text(timeLeft + " seconds remaining");
	} }, 1000);
}

	function gameOver() {
		$("#questions").html("<h1>Your score:</h1><br><p>Correct answers: <span id='correct'></span><br><p>Wrong answers: <span id='incorrect'></span>")
		$("#correct").text(right);
		$("#incorrect").text(wrong);
		$("#timer").hide();

	}




//function countdown() {
 // if (timeLeft == 0) {
//    clearTimeout(timerId);
//    gameOver();
//  } else {
//    $("#timer").text(timeLeft + ' seconds remaining');
//    timeLeft--;
//  }
//}
//var timer counts down
//questions are pushed to html






//timer runs out-function call
//function shows right/wrong answers in html
//play again button refreshes page