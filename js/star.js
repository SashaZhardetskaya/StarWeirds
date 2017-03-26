

$(document).ready(function(){
	//top navigation
	$(window).scroll(function(){
		if (document.body.scrollTop >= 30) {
			// $("#nav-main").css({
   //      		'background': 'red'
   //      	});
        	$("#nav-main").addClass('nav-down').removeClass('nav-top');
		};
		if (document.body.scrollTop <= 30) {
			// $("#nav-main").css({
			// 	'background': 'transparent'
			// });
			$("#nav-main").addClass('nav-top').removeClass('nav-down');
		};
	});
});


$(document).ready(function(){ //services accardion
	$('.service-block a').on('click', function(){
		// $('.service-icon a').css('outline','none');
		// $(this).css('outline','19px solid #666');
		
		//.eq- оставляет только элемент с порядковым номером n
		var n =$('.service-block a').index(this);
		var currentHasVisible = $('.service-description').eq(n).hasClass('visible');
		$('.service-description').addClass('hidden').removeClass('visible');
		if (currentHasVisible) {
			$('.service-description').eq(n).removeClass('visible');
			$('.service-description').eq(n).addClass('hidden');
		} else {
			$('.service-description').eq(n).removeClass('hidden');
			$('.service-description').eq(n).addClass('visible');
		}
	});
});

$(document).ready(function(){ //services traingle rotation
	$('.service-block a').on('click', function(){
		var n =$('.service-block a').index(this);
		var currentHasActive = $('.icon-triangle').eq(n).hasClass('triangle-active');
		$('.icon-triangle').addClass('triangle-inactive').removeClass('triangle-active');
		if (currentHasActive) {
			$('.icon-triangle').eq(n).removeClass('triangle-active');
			$('.icon-triangle').eq(n).addClass('triangle-inactive');
		} else {
			$('.icon-triangle').eq(n).removeClass('triangle-inactive');
			$('.icon-triangle').eq(n).addClass('triangle-active');
		}
	});
});


/* ANCHORS	*/

$(document).ready(function(){  //anchors
$('.send-request-nav a').click(function(){
	var contacts = $('.contacts').offset().top-80;
	$('body').animate({scrollTop:contacts},880);
});
$('a .nav-email-icon').click(function(){
	var contactsIcon = $('.contacts').offset().top-80;
	$('body').animate({scrollTop:contactsIcon},880);
});
$('a .nav-phone-icon').click(function(){
	var contactsIcon = $('.contacts').offset().top-80;
	$('body').animate({scrollTop:contactsIcon},880);
});

$('.nav-to-service').click(function(){
	var service = $('.service').offset().top;
	$('body').animate({scrollTop:service},880);
});
$('.nav-to-price').click(function(){
	var price = $('.price').offset().top;
	$('body').animate({scrollTop:price},880);
});
$('.nav-to-questions').click(function(){
	var questions = $('.questions').offset().top;
	$('body').animate({scrollTop:questions},880);
});
$('.nav-to-contact').click(function(){
	var contacts = $('.contacts').offset().top-80;
	$('body').animate({scrollTop:contacts},880);
});
$('.send-request a').click(function(){
	var contacts = $('.contacts').offset().top-80;
	$('body').animate({scrollTop:contacts},880);
});
$('.send-request-price a').click(function(){
	var contacts = $('.contacts').offset().top-80;
	$('body').animate({scrollTop:contacts},880);
});

});