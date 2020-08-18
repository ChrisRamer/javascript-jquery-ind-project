$(document).ready(function () {
	
	$("#button").click(function () { 
		$(".preQuiz").hide();
		$("#quiz").show();
	});

	$("form#question1").submit(function (e) { 
		e.preventDefault();
		
		$("#question1").hide();
		$("#question2").show();
	});

	$("form#question2").submit(function (e) {
		e.preventDefault();

		$("#question2").hide();
		$("#question3").show();
	});

	$("form#question3").submit(function (e) {
		e.preventDefault();

		$("#question3").hide();
		$("#question4").show();
	});

});