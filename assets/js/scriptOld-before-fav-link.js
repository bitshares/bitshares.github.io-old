'use strict';

$(function() {


  /*
  |--------------------------------------------------------------------------
  | Configure your website
  |--------------------------------------------------------------------------
  |
  | We provided several configuration variables for your ease of development.
  | Read their complete description and modify them based on your need.
  |
  */
 
  thesaas.config({

    /*
    |--------------------------------------------------------------------------
    | Google API Key
    |--------------------------------------------------------------------------
    |
    | Here you may specify your Google API key if you need to use Google Maps
    | in your application
    |
    | https://developers.google.com/maps/documentation/javascript/get-api-key
    |
    */

    googleApiKey: 'AIzaSyDRBLFOTTh2NFM93HpUA4ZrA99yKnCAsto',

    /*
    |--------------------------------------------------------------------------
    | Google Analytics Tracking
    |--------------------------------------------------------------------------
    |
    | If you want to use Google Analytics, you can specify your Tracking ID in
    | this option. Your key would be a value like: UA-12345678-9
    |
    */

    googleAnalyticsId: '',

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    |
    | If true, the browser's scrollbar moves smoothly on scroll and gives your
    | visitor a better experience for scrolling.
    |
    */
   
    smoothScroll: true

  });





  /*
  |--------------------------------------------------------------------------
  | Custom Javascript code
  |--------------------------------------------------------------------------
  |
  | Now that you configured your website, you can write additional Javascript
  | code below this comment. You might want to add more plugins and initialize
  | them in this file.
  |
  */
 

 
$(".has-submenu ul").hide();
$(".has-submenu > a").click(function() {
  $(this).next("ul").toggle();
});
    $("body").animate({ 
      'padding-top' : 0,
    }, "fast");
  }, 500)


/**** GO TO TOP BEGIN ***/

$(document).ready(function() {
	
	var vid = document.getElementById("main-video");
	vid.playbackRate = 0.75;

	
  /******************************
      BOTTOM SCROLL TOP BUTTON
   ******************************/

  // declare variable
  var scrollTop = $(".scrollTop");

  $(window).scroll(function() {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll-to-top button
    if (topPos > 250) {
      $(scrollTop).css("opacity", "1");
    } else {
      $(scrollTop).css("opacity", "0");
    }
	
	// if user scrolls down - show move hamburger to align properly
	if (topPos > 0) {
	  $('.button_container').css("top", "20px");
    } else {
	  $('.button_container').css("top", "35px");
    }
  }); // scroll END

  //Click event to scroll to top
  $(scrollTop).click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
    return false;

  }); // click() scroll top EMD
}); // ready() END
/**** GO TO TOP BUTTON END ***/

/**** FLIP BOXES ****/
        $('.cards').click(function(){
          $(this).toggleClass('flipped');
        });
		
		
/***** OVERLAY HAMBURGER BACKGROUND *******/
$('#toggle').click(function(event) {
	event.preventDefault();
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
      $('body').css("overflow", function(_,val){ 
           return val == "hidden" ? "scroll" : "hidden";
      });
  });
/***** END OVERLAY *****/

/***** OVERLAY MENU SYSTEM *******/
/* Thanks to the guys at https://tympanus.net/codrops/ */

var cbpHorizontalMenu=(function(){var b=$("#cbp-hrmenu > ul > li"),g=b.children("a"),c=$("body"),d=-1;function f(){g.on("click",a);b.on("click",function(h){h.stopPropagation()})}function a(j){if(d!==-1){b.eq(d).removeClass("cbp-hropen")}var i=$(j.currentTarget).parent("li"),h=i.index();if(d===h){i.removeClass("cbp-hropen");d=-1}else{i.addClass("cbp-hropen");d=h;c.off("click").on("click",e)}return false}function e(h){b.eq(d).removeClass("cbp-hropen");d=-1}return{init:f}})();

	$(function() {
				cbpHorizontalMenu.init();
			});
/***** END OVERLAY MENU SYSTEM *******/
