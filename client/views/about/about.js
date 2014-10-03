Template.about.events({
	'click .close':function(e,t){
		$(".jumbotron-about").fadeOut(600);
		$('.blurContent').removeClass('blurClass');
		$('.navbar-fixed-top').removeClass('blurClass');
		
	}
})