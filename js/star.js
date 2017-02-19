

$(document).ready(function(){
	//top navigation
	$(window).scroll(function(){
		if (document.body.scrollTop >= 30) {
			$("#nav-main").css({
				'display':'block',
        		'background': 'red'
        	});
		};
		if (document.body.scrollTop <= 30) {
			$("#nav-main").css({
				'display':'block',
				'background': 'transparent'
			});
		};
	});

 //    //services accardion
	// $('.service-icon a').on('click', function(){
	// 	//next()  получает след-й за текущим элемент
	// 	//prev()  получает пред-й за текущим элемент
	// 	$('.service-description').not(this).next().slideUp(700);
	// 	$(this).next().slideToggle(1000);
	// 	$('.service-description').not(this).css('display','block');
	// 	$(this).css('display','block');
	// });
});


$(document).ready(function(){ //services accardion
	$('.service-description').eq(0).css('display','block');
	$('.service-icon a').eq(0).css('background','green');
	
	$('.service-icon a').on('click', function(){
		var a =$('.service-icon a').index(this);
		// console.log(a);
		//.eq- оставляет только элемент с порядковым номером а
		$('.service-description').css('display','none')
		$('.service-description').eq(a).css('display','block');
		$('.service-icon a').css('background','gold');
		$(this).css('background','green');
	});
});