/*! css3 weighted transition plugin for Cycle2;  version: 1.0 */
(function($) {

	"use strict";
	$.fn.cycle.transitions.weighted = {
		before: function( opts, curr, next, fwd ) {

			// stack slides
			opts.API.stackSlides( curr, next, fwd );

			// measure width
			var w = opts.container.css('overflow','hidden').width();

			// set css before transition
			opts.cssBefore = { 
				left: fwd ? w : - w, 
				top: 0, 
				opacity: 1, 
				visibility: 'visible', 
				display: 'block' 
			};

			// set css after transition
			opts.cssAfter = { 
				zIndex: opts._maxZ - 2, 
				left: 0 
			};

			// set slide animation in
			opts.animIn = { 
				left: 0 
			};

			// set slide animation out
			opts.animOut = { 
				left: fwd ? -w : w 
			};

			// set slide title objects
			var $selected = jQuery(curr).find(opts.weightSelector).add( jQuery(next).find(opts.weightSelector) );

			// cut speed in half for in/out
			var speed = opts.speed / 2;

			// make arbitrary object to animate
			var obj = { t: 0 };

			// ensure gravity is between 1 and 100, convert to fraction
			var gravity = Math.min(Math.max(parseInt(opts.gravity), 1), 100) / 100;

			// set distance to be percentage of slide width
			var distance = Math.round((w / 2) * gravity);

			// use object to animate title transforms
			$(obj).animate({ t: distance }, {
				step: weightStep($selected, fwd),
				duration: speed,
				easing: opts.easeOut || opts.easing,
				complete: function(){

					// animated out, now go back to starting position
					$(obj).animate({ t: 0 }, {
						step: weightStep($selected, fwd),
						duration: speed,
						easing: opts.easeOut || opts.easing
					});

				}
			});
		}
	};

	function weightStep(selected, fwd){

		// return proper step callback for animate property
		return function( pos ){

			// if going backwards, invert value
			if ( !fwd ) pos = 0 - pos;

			// set css
			selected.css({
	            '-webkit-transform': 'translateX(' + pos + 'px)',
	            '-moz-transform': 'translateX(' + pos + 'px)',
	            '-ms-transform': 'translateX(' + pos + 'px)',
	            '-o-transform': 'translateX(' + pos + 'px)',
	            'transform': 'translateX(' + pos + 'px)'
			});

		}

	}

})(jQuery);