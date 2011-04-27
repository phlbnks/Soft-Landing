Soft-Landing
==================================================
Version 0.3

Soft-Landing is a small script to prevent an animated scrollTo being suddenly stopped due to the destination being within the last viewport's height of the document.

The floating element code is based on http://linowski.ca/experiments/03_sticky_floating_nav/assets/core.js by jakub@linowski.ca


Getting Started
---------------

### Step 1: Include jQuery and softLanding.js on your page - 
If you want to use more easing effects include an easing library - jQuery UI is given as an example, but a custom build would be better unless you are using it elsewhere on your site also.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.11/jquery-ui.min.js type="text/javascript" charset="utf-8"></script>
	<script src="softLanding.js" type="text/javascript" charset="utf-8"></script>


### Step 2: Edit softLanding.js
- Replace #nav with an identifier for your floating element.
- Replace 320 vertical position of the element on your page.
- Replace 3px with the gap you want to keep between the top of the viewport and the element (if none, set to '0px').

		$(window).scroll(function(){
			if($(window).scrollTop() > 320) {
				$('#nav').css({'top':'3px','position':'fixed'});
			}
			else {
				$('#nav').css({'position':'absolute','top':'320px'});
			}
		});

- Replace `a[href^="#"]` with the selector for your links if necessary.
- Replace easeOutCirc with the easing method you want. If you don't need 'complex'/are not using jQuery UI then you can delete the variable and jQuery core will use it's default 'swing'. 
- Replace 1500 with the duration for the scrolling animation. 


		$('a[href^="#"]').click(function(){
			var dest = $(this.hash).offset().top;
			var dHeight = $(document).height();
			var vHeight = $(window).height();
			if (dest < (dHeight-vHeight)) {
				$('html,body').stop().animate({scrollTop: dest},1500,'easeOutCirc');
			}
				else {
					var dest = (dHeight-vHeight);
					$('html,body').stop().animate({scrollTop: dest},1500,'easeOutCirc');
				}
			return false;
		});
	
      

To Do
---------------
- Re-write code to allow variable to be passed into the scripts preventing the need to modify the js file.
- Allow horizontal scrolling too.
- Add license info.
- Replace `'html,body'` with something better.


Changelog
---------------
- 0.1 - Initial release.
- 0.2 - Replaced `return false;` with `event.preventDefault();` and moved to the start to the click function to ensure defailt click behaviour is always stopped. - Changed to `$(this.hash).offset().top;` after testing in JSPerf.
- 0.3 - Better prevent.Default implimentation to stop an error in the JS preventing browser default behaviour and breaking the page. 