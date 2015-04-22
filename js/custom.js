$(document).ready(function () {
  $('.code-box').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
	if (clicked.is('.pre-block') || clicked.parents().is('.pre-block')) {
		return; // click happened within the dialog, do nothing here
    } else { // click was outside the dialog, so close it
     $('.code-box').fadeOut("fast");
    }
	});

  $('.close-code-btn').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code-box').fadeOut("fast");
	});

  $('.code-btn1').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code1').fadeIn("fast");
	});

  $('.code-btn1').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code1').fadeIn("fast");
	});

  $('.code-btn2').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code2').fadeIn("fast");
	});

  $('.code-btn2').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code2').fadeIn("fast");
	});


  $('.code-btn3').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code3').fadeIn("fast");
	});

  $('.code-btn3').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code3').fadeIn("fast");
	});

  $('.code-btn4').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code4').fadeIn("fast");
	});

  $('.code-btn4').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code4').fadeIn("fast");
	});

  $('.code-btn5').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code5').fadeIn("fast");
	});

  $('.code-btn5').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code5').fadeIn("fast");
	});

  $('.code-btn6').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code6').fadeIn("fast");
	});

  $('.code-btn6').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code6').fadeIn("fast");
	});

  $('.code-btn7').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code7').fadeIn("fast");
	});

  $('.code-btn7').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code7').fadeIn("fast");
	});

  $('.code-btn8').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code8').fadeIn("fast");
	});

  $('.code-btn8').mousedown(function(e) {
	var clicked = $(e.target); // get the element clicked
     $('.code8').fadeIn("fast");
	});
});