		$(document).ready(function(){
  $(window).scroll(function(){
    if (document.body.scrollTop >= 30) {
      $("#fixed-top").css({
        'display':'block',
        'background': 'red'
      });
    };
    if (document.body.scrollTop <= 30) {
      $("#fixed-top").css({
        'display':'block',
        'background': 'green'
      });
    };
  });
});




// $(document).ready(function() {
// 	var cbpAnimatedHeader = (function() {
// 		var docElem = document.documentElement,
//         	header = document.querySelector( '.cbp-af-header' ),
//         	didScroll = false,
//         	changeHeaderOn = 300;
//         	function init() {
//         		window.addEventListener( 'scroll', function( event ) {
//         			if( !didScroll ) {
//         				didScroll = true;
//         				setTimeout( scrollPage, 250 );
//         			}
//         		}, false );
//         	}
//         	function scrollPage() {
//         		var sy = scrollY();
//         		if ( sy >= changeHeaderOn ) {
//         			.addClass('cbp-af-header-shrink')
//         			// class.add( header, 'cbp-af-header-shrink' );
//         		}
//         		else {
//             		class.remove( header, 'cbp-af-header-shrink' );
//         		}
//         		didScroll = false;
//         	}
//         	function scrollY() {
//         		return window.pageYOffset || docElem.scrollTop;
//         	}
//         	init();
//         })();
//     });



//     "use strict";
//     t("a.page-scroll").bind("click", function(a) {
//         var o = t(this);
//         t("html, body").stop().animate({
//             scrollTop: t(o.attr("href")).offset().top - 50
//         }, 1250, "easeInOutExpo"),
//         a.preventDefault()
//     }),
//     t("body").scrollspy({
//         target: ".navbar-fixed-top",
//         offset: 51
//     }),
//     t(".navbar-collapse ul li a").click(function() {
//         t(".navbar-toggle:visible").click()
//     }),
//     t("#mainNav").affix({
//         offset: {
//             top: 100
//         }
//     })
// });


// $(document).ready(!function(t) {
//     "use strict";
//     t("a.page-scroll").bind("click", function(a) {
//         var o = t(this);
//         t("html, body").stop().animate({
//             scrollTop: t(o.attr("href")).offset().top - 50
//         }, 1250, "easeInOutExpo"),
//         a.preventDefault()
//     }),
//     t("body").scrollspy({
//         target: ".navbar-fixed-top",
//         offset: 51
//     }),
//     t(".navbar-collapse ul li a").click(function() {
//         t(".navbar-toggle:visible").click()
//     }),
//     t("#mainNav").affix({
//         offset: {
//             top: 100
//         }
//     })
// });