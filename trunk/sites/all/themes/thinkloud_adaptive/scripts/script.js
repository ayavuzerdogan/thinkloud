(function($) {
	$(document).ready(function(){
		$('.menu-block-wrapper ul > li').hover(function(){
			$('.menu-block-wrapper ul > li > ul').each(function(){
				$(this).hide();
			})
			$(this).children('ul').show();
		});
		if ($('.menu-block-wrapper li a.active').parent().parent().hasClass('menu')) $('.menu-block-wrapper li a.active').parent().parent().show();

		$('.menu-block-wrapper ul > li.active').children('ul').show();

//		$('.mblock-menu-block-1').mouseleave(function(){
//			$('.menu-block-wrapper ul > li > ul').hide();
//		})
	});
})(jQuery);