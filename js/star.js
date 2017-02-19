

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
});


$(document).ready(function(){ //services accardion
	$('.service-icon a').on('click', function(){
		// $('.service-icon a').css('outline','none');
		// $(this).css('outline','19px solid #666');
		
		//.eq- оставляет только элемент с порядковым номером n
		var n =$('.service-icon a').index(this);
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