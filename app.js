$(document).ready(function(){
	var number = Math.floor(Math.random() * 9);
	var inter = setInterval(function(){
		var number = Math.floor(Math.random() * 9);
		$("#num").text(number);
	},
	100);
	console.log(number);
	
	setTimeout(function(){
		clearInterval(inter);
		console.log(number && "VOILÀ");
	},5000)

	$("#num").fadeOut(3500, function(){
		$ (this).show().html("");
	})
});