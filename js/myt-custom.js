$(document).ready(function() {	
	var lastScrollPos = 10;					// default scroll position 	
	
	// function to hide/display scroll icon at bottom of page when scroll up/down
	var showNavArrow = function(){
		if ($(this).scrollTop() > 100) {	// scrolled up
			$('.scrollIcon').fadeIn();		// hide icon
		} else {
			$('.scrollIcon').fadeOut();		// show icon
		}
	};
	showNavArrow();		//run function on page load - default: dont show icon
	
	// function to hide/display/animate navbar on scroll up/down
	var navBarScroll = function(){
		var currentScrollPos = $(this).scrollTop();
		var isNavBarHasCollapsedIn = $('#myt-navbar-collapse').hasClass('in');
		
		// current scroll position must be greater than last scroll position
		// navbar must not be 'collapsed in'
		if ( (currentScrollPos > lastScrollPos) 
				&& !isNavBarHasCollapsedIn ){	
			$('nav').addClass('fall-out')		// hide navbar with animation
				.removeClass('fall-in');	
		}else{
			$('nav').addClass('fall-in')		// display navbar with animation
				.removeClass('fall-out');	
		}
		
		lastScrollPos = currentScrollPos;		// reset the last scroll position to current
	};
	
	// fire events for scroll
	$(window).scroll(function(){
		showNavArrow();		// run function to hide/display scroll icon
		navBarScroll();		// run function to hide/display navbar
		
		// restore navbar to default menu if search button is activated
		if( $('#search-box').hasClass('search-box-display') ){
			$('#search-box').addClass('search-box-hide')		   		 // hide search box
				.removeClass('search-box-display'); 			   		 
			$('#search-button').addClass('glyphicon glyphicon-search')   // change close icon back into search icon
				.removeClass('fas fa-window-close');
			$('.navbar-brand-hide').addClass('navbar-brand')	   		 // display myt logo link
				.removeClass('navbar-brand-hide'); 	
			$('.navbar-header-hide').addClass('navbar-header')	   		 // display navbar-header Menu link
				.removeClass('navbar-header-hide'); 
		}
	});
	
	// smooth scroll to top of page when scroll icon link clicked
	$('.scrollIcon').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000); 	  //perform the smooth scroll animation
		$('nav').addClass('fall-in').removeClass('fall-out'); // display navbar with animation
		lastScrollPos = 0;									  // reset to prevent navBarScroll function from firing
		
		return false;
	});
	
	// change search button to search box on click
	$('.toggle-search').click(function(){
		if( $('#search-box').hasClass('search-box-hide') ){
			$('#search-box').addClass('search-box-display')		   // display search box
				.removeClass('search-box-hide'); 				   // remove hide class used to hide search box
			$('#search-button').addClass('fas fa-window-close')    // change search icon into close icon
				.removeClass('glyphicon glyphicon-search');			
			$('.navbar-brand').addClass('navbar-brand-hide')	   // remove myt logo link - to have more horizontal space
				.removeClass('navbar-brand'); 
			$('.navbar-header').addClass('navbar-header-hide')	   // remove navbar-header Menu link
				.removeClass('navbar-header'); 
		}else{
			$('#search-box').addClass('search-box-hide')		   		 // hide search box
				.removeClass('search-box-display'); 			   		 // remove display class used to display search box
			$('#search-button').addClass('glyphicon glyphicon-search')   // change close icon back into search icon
				.removeClass('fas fa-window-close');
			$('.navbar-brand-hide').addClass('navbar-brand')	   		 // display myt logo link
				.removeClass('navbar-brand-hide'); 	
			$('.navbar-header-hide').addClass('navbar-header')	   		 // display navbar-header Menu link
				.removeClass('navbar-header-hide'); 			
		}
			
		return false;
	});
	
	// accordion to display minus icon to an element that is collapsed in panel-heading
	$(".collapse.in").each(function(){
		$(this).siblings(".panel-heading").find(".fas").addClass("fa-minus")
			.removeClass("fa-plus");
	});
	
	// accordion to toggle plus/minus icon to an element that is collapsed/expanded in panel-heading
	$(".collapse").on('show.bs.collapse', function(){
		$(this).parent().find(".fas").removeClass("fa-plus").addClass("fa-minus");})
			.on('hide.bs.collapse', function(){
				$(this).parent().find(".fas").removeClass("fa-minus").addClass("fa-plus");
			});	
});
	

