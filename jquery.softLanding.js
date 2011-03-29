//softLanding v0.2

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
	// Here we bind to clicks on the anchors, animate the movement, and prevent a sudden stop.
	//** by Phil Banks http://customcreative.co.uk
	$('a[href^="#"]').click(function(){
		event.preventDefault();
		//Get the offset of the top of the element just clicked
		var dest = $(this.hash).offset().top;
		var dHeight = $(document).height(); // height of document
		var vHeight = $(window).height(); // height of browser viewport
		//If the destination coordinates are not in the last viewport's worth of document height then scroll to them.
		if (dest < (dHeight-vHeight)) {
			$('html,body').stop().animate({scrollTop: dest},1500,'easeOutCirc');
		}
			//Otherwise define 'dest' as the top of the last viewport's worth of document height and scroll there. This prevents the animation trying to scroll past the end of the document and causing a sudden stop.
			else {
				var dest = (dHeight-vHeight);
				$('html,body').stop().animate({scrollTop: dest},1500,'easeOutCirc');
			}
	});
});