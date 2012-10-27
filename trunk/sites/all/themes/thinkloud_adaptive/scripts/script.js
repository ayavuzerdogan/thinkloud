(function($) {
	$(document).ready(function(){
		$('.menu-name-menu-user-custom-menu ul > li').hover(function(){
			$('.menu-name-menu-user-custom-menu ul > li > ul').each(function(){
				$(this).hide();
			})
			$(this).children('ul').show();
		});
		$('.mblock-menu-block-1').mouseleave(function(){
			$('.menu-name-menu-user-custom-menu ul > li > ul').hide();
		})
	});
})(jQuery);