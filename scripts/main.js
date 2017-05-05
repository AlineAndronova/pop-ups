;(function($){
	'use strict';
	
	/*$('button').on('click', function() {
		$('#modal').fadeIn(400);
	});
	$('.close').on('click', function() {
		$('#modal').fadeOut(400);
	});*/

	$('button[data-popup]').on('click', function() {
		$('.modal').fadeOut(400);
		$('.modal[data-popup=' + $(this).data('popup') +']').fadeIn(400);
	});
	$('.modal .close').on('click', function() {
		$(this).parent('.modal').fadeOut(400);
	});

})(jQuery);
