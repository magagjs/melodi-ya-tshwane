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
	
});
