$(document).ready(function() {	
	
	// fire event to hide/show scroll icon at bottom of page when scroll up/down
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {	// scrolled up
			$('.scrollIcon').fadeIn();		// hide icon
		} else {
			$('.scrollIcon').fadeOut();		// show icon
		}
	});
	// smooth scroll to top of page when scroll icon link clicked
	$('.scrollIcon').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000); //perform the smooth scroll animation
			return false;
	});
    
	// function to resize potrait and landscape images to have same height
	// make landscape images have same width and height:WARNING - will lose aspect-ratio
//	(function($) {
//		
//		$.fn.resizeImg = function() {
//			var $target = $('img');					  	  // target <img> elements
//			$target.each(function(){	  		  		  // for each <img> element
//				var widthSize = $(this).parent().width(); // get width of parent element of <img>
//				if($(this).width() > $(this).height())	  // landscape images have smaller height than width
//					$(this).css('max-height',widthSize);  // give same height was parent element	
//			});
//			
//			return this;
//		};
//	}( jQuery ));
//	
//	load function only on elements with #instafeed id - Instagram feed <div>
//	$('#instafeed').resizeImg();
	
});
	

