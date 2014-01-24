$("#dropdown").hide();

$("#button").mouseenter(function() {
    $("#dropdown").toggle('slow');
});

$("#dropdown").mouseleave(function() {
	$("#dropdown").toggle('slow');
});
