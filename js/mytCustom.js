$( document ).ready(function() {
	
	var userFeed = new Instafeed({
	    get: 'user',
	    userId: '3991179505',
	    limit: '35',
	    sortBy: 'most-recent',
	    resolution: 'standard_resolution',
	    clientId: 'c400f2940c624504a67b87ad2159d976',
		accessToken: '3991179505.1677ed0.bb3a32b98f384983bfaac7340fec426e',
		template: '<div class="col-lg-3 myt-gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" keywords=""class="img-responsive"/></a></div>'
	});
	userFeed.run();
	
	// This will create a single gallery from all elements that have class "myt-gallery"
	$('.myt-gallery').magnificPopup({
	  type: 'image',
	  delegate: 'a',	// target anchor <a> tag
	  gallery:{
	  enabled:true
	  }
	});
	
});
