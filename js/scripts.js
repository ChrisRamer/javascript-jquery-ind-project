$(document).ready(function () {
	
	// Start quiz
	$("#button").click(function () { 
		$(".preQuiz").hide();
		$("#quiz").show();
	});

	// Submit question 1
	$("form#question1").submit(function (e) { 
		e.preventDefault();
		
		$("#question1").hide();
		$("#question2").show();
	});

	// Submit question 2
	$("form#question2").submit(function (e) {
		e.preventDefault();

		$("#question2").hide();
		$("#question3").show();
	});

	// Submit question 3
	$("form#question3").submit(function (e) {
		e.preventDefault();

		$("#question3").hide();
		$("#question4").show();
	});

	// Submit question 4
	$("form#question4").submit(function (e) {
		e.preventDefault();

		$("#question4").hide();
		$("#question5").show();
	});
	
	// Submit last question
	$("form#question5").submit(function (e) { 
		e.preventDefault();
		
		const answer = $("#question5Opts").val();
		alert("I think you should learn " + answer + "!");
	});

});