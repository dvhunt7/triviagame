
var right = 0;
var wrong = 0;
var timeLeft = 31;


$("#start").on("click", function(){
	$(this).hide();
	$("#questions").css("visibility", "visible")
	countdown();
})

$("#done").on("click", function(){
	gameOver();
	timeLeft = 0;
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
		checker();
		$("#questions").html("<h1>Your score:</h1><br><p>Correct answers: <span id='correct'></span><br><p>Wrong answers: <span id='incorrect'></span>")
		$("#correct").text(right);
		$("#incorrect").text(wrong);
		$("#timer").hide();

	}

function checker() {

	 if  ($("#correct1").is(":checked")) {

	 	right++;
	 }
	 else {
	 	wrong++;}

	 if ($("#correct2").is(":checked")){
	 	right++;}
	 else {
	 	wrong++;
	 }

	 if ($("#correct3").is(":checked")){
	 	right++;}
	 else {
	 	wrong++;
	 }

	 if ($("#correct4").is(":checked")){
	 	right++;}
	 else {
	 	wrong++;
	 }

	 }






//var timer counts down
//questions are pushed to html






//timer runs out-function call
//function shows right/wrong answers in html
//play again button refreshes page