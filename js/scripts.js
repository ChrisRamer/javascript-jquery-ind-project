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

});