$(document).ready(function () {
	
	// Start quiz
	$("#button").click(function () { 
		$(".preQuiz").fadeOut(500);
		$("#quiz").fadeIn(500);
	});

	// Submit question 1
	$("form#question1").submit(function (e) { 
		e.preventDefault();
		
		$("#question1").hide();
		$("#question2").fadeIn(500);
	});

	// Submit question 2
	$("form#question2").submit(function (e) {
		e.preventDefault();

		$("#question2").hide();
		$("#question3").fadeIn(500);
	});

	// Submit question 3
	$("form#question3").submit(function (e) {
		e.preventDefault();

		$("#question3").hide();
		$("#question4").fadeIn(500);
	});

	// Submit question 4
	$("form#question4").submit(function (e) {
		e.preventDefault();

		$("#question4").hide();
		$("#question5").fadeIn(500);
	});
	
	// Submit last question
	$("form#question5").submit(function (e) { 
		e.preventDefault();
		
		// Fade in jumbotron & hide result text & quiz
		$("#quiz").hide();
		$(".jumbotron").fadeIn(500);
		$("#result").hide();

		// Fade result text & cycle through texts
		$("#result").text("Please wait while this super powerful AI accurately predicts the best language for you......").fadeIn(5000, function() {
			
			$("#result").fadeOut(500, function() {

				$("#result").text("This is taking awhile... It's a lot to process, I'm a new AI, it takes me time to learn....").fadeIn(5000, function() {

					$("#result").fadeOut(500, function () {
						
						$("#result").text("Oh wait.... I think the answer is near.....").fadeIn(5000, function () {

							$("#result").fadeOut(500, function () { 
								
								$("#result").text("We're so close, I can taste it! Wait.. can an AI taste?").fadeIn(5000, function () {

									$("#result").fadeOut(500, function () {
										
										let answer;

										if ($("#question3Opts").val() === "Binary") {
											answer = "Binary";
										}
										else {
											answer = $("#question5Opts").val();
										}

										$("#result").text("This 100% accurate AI has determined based on your input that you should learn: " + answer + "! Hoorah!").fadeIn(5000);
									});
								});
							});
						});
					});
				});
			});
		});
	});
});