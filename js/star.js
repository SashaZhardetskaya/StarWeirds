

$(document).ready(function(){
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