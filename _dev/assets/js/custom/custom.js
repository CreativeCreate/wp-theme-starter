jQuery(document).ready(function( $ ) {

	// datepicker
	let rootpath = document.location.origin;
	$( "#pickup-date" ).datepicker({
		minDate: '+1d',
		maxDate: "+7d",
		showOn: "both",
		buttonImage: rootpath+"/wp-content/themes/speedy-laundry/images/icon-datepicker.png"
	});

	// set pickup date & time from url param
	function urlParam(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results){
			return results[1] || 0;
		}
	}

	var pickup_date = urlParam('pickup-date'); // name
	var pickup_time = urlParam('pickup-time'); // name
	$( "#pickup-date" ).datepicker( "setDate", pickup_date );
	$( "#pickup-time" ).val( pickup_time );

	// navigation menu show/ hide

	$('.menu-toggle').on('click', function(e){
		e.preventDefault();
		$('.menu-mobile-menu-container').toggleClass('show-nav');
	});


});