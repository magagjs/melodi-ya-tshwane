$(document).ready(function() {	
	var lastScrollPos = 1000;	// default scroll position 	
	
	//display search button and hide search box - display navbar elements
	var displaySearchButton = function(){
		if( $('#search-box').hasClass('search-box-display') ){
			// remove focus from search box input field
			$('#search-box-input').blur();
			// remove focus from search box div
			$('#search-btn-div').blur();
			
			$('#search-box').addClass('search-box-hide')		// hide search box
				.removeClass('search-box-display'); 			 
			$('#search-btn-div').addClass('toggle-search')   	// display search button
				.removeClass('toggle-search-hide');						
			$('.navbar-brand-hide').addClass('navbar-brand')	// display myt logo
				.removeClass('navbar-brand-hide'); 	
			$('.navbar-header-hide').addClass('navbar-header')	// display navbar-header Menu link
				.removeClass('navbar-header-hide'); 			
		}
	};
	
	//hide search button and display search box - hide navbar elements
	var hideSearchButton = function(){
		if( $('#search-box').hasClass('search-box-hide') ){
			$('#search-box').addClass('search-box-display')		// display search box
				.removeClass('search-box-hide'); 				
			$('#search-btn-div').addClass('toggle-search-hide') // hide search button
				.removeClass('toggle-search');			
			$('.navbar-brand').addClass('navbar-brand-hide')  	// remove myt logo - to have more horizontal space
				.removeClass('navbar-brand'); 
			$('.navbar-header').addClass('navbar-header-hide')	// remove navbar-header Menu link
				.removeClass('navbar-header'); 
			
			// put focus on search box input field
			$('#search-box-input').focus();
		}
	};
	
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
		if ( (currentScrollPos > lastScrollPos) && (currentScrollPos != lastScrollPos) 
				&& !isNavBarHasCollapsedIn ){	
			$('nav').addClass('fall-out')		// hide navbar with animation
				.removeClass('fall-in');	
			
			// on navbar hide - change search box to search button if search box is focus
			displaySearchButton();
		}else{
			$('nav').addClass('fall-in')		// display navbar with animation
				.removeClass('fall-out');	
		}
		
		lastScrollPos = currentScrollPos;		// reset the last scroll position to current
		
	/*		console.log("currentScrollPos:" + currentScrollPos +"\n");
			console.log("lastScrollPos:" + lastScrollPos +"\n");*/
	};
	
	// fire events for scroll
	$(window).scroll(function(){
		showNavArrow();		// run function to hide/display scroll icon
		navBarScroll();		// run function to hide/display navbar
	});
	
	// smooth scroll to top of page when scroll icon link clicked
	$('.scrollIcon').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 1000); 	  //perform the smooth scroll animation
		$('nav').addClass('fall-in').removeClass('fall-out'); // display navbar with animation
		lastScrollPos = 0;									  // reset to prevent navBarScroll function from firing
		
		return false;
	});
	
	// change search-button to search-box on click - hide navbar elements
	$('.toggle-search').click(function(){
		hideSearchButton();
			
		return false;
	});
	
	//change search-box to search-button when search-box input field loses focus - display navbar elements
	$('#search-box-input').focusout(function(){
		displaySearchButton();
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
	

