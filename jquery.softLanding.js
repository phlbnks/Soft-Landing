$(document).ready(function(){
	// Take an item, if the viewport scrolls past it's position, pin it to the top of the viewport
	//** This version of the code by jakub@linowski.ca 
	//** http://linowski.ca/experiments/03_sticky_floating_nav/assets/core.js
	$(window).scroll(function(){
		if($(window).scrollTop() > 320) {
			$('#nav').css({'top':'3px','position':'fixed'});
		}
		else {
			$('#nav').css({'position':'absolute','top':'320px'});
		}
	});
	// Here we animate the move to anchor, and stop a sudden stop.
	//** by Phil Banks http://customcreative.co.uk //
	//Bind to #links
	$('a[href^="#"]').click(function(){
		//Get the offset of the top of the element just clicked
		var dest = $($(this).attr('href')).offset().top;
		var dHeight = $(document).height(); // height of document
		var vHeight = $(window).height(); // height of browser viewport
		//If the destination coordinates are not in the last viewport's worth of document height then scroll to them.
		if (dest < (dHeight-vHeight)) {
			$('html, body').stop().animate({scrollTop: dest},{duration:1500,easing: 'easeOutCirc'});
		}
			//Otherwise define 'dest' as the top of the last viewport's worth of document height and scroll there. This prevents the animation trying to scroll past the end of the document and causing a sudden stop.
			else {
				var dest = (dHeight-vHeight);
				$('html, body').stop().animate({scrollTop: dest},{duration:1500,easing: 'easeOutCirc'});
			}
		return false;
	});
});