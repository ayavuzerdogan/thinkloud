(function($) {
	$(document).ready(function(){
		$('.menu-block-wrapper ul > li').click(function(e){
//			if ($(this).parent().parent().hasClass('menu-level-1'))
			console.log($(this).parent().parent());
				e.preventDefault();
			$('.menu-block-wrapper ul > li > ul').each(function(){
				$(this).hide();
			})
			$(this).children('ul').show();
		});
		if ($('.menu-block-wrapper li a.active').parent().parent().hasClass('menu'))
			$('.menu-block-wrapper li a.active').parent().parent().show();

		$('.menu-block-wrapper ul > li.active').children('ul').show();

		if($('.node-teaser .username').length){
			$('.node-teaser .username').each(function(){

				if($(this).html().length > 8){ //console.log(this);
					var href = $(this).attr('href');
					var name = $(this).html();
					var width = this.offsetWidth + 50;
					$(this).html(name.substr(0,8));
					$(this).parent().append('<a href="'+href+'" class="fake-username" style="display:none">'+name+'</a>');
					$(this).parent().mouseover(function(){
						$(this).find('.username').hide();
						$(this).find('.fake-username').show();
						$(this).css('background','rgba(255, 255, 255, .5)');
						$(this).css('max-width', width);
						$(this).css('border-radius','4px');
					});
					$(this).parent().mouseout(function(){
						$(this).find('.username').show();
						$(this).find('.fake-username').hide();
						$(this).css('background','none');
						$(this).css('max-width','125px');
					})

				}
			})
		}
	});
})(jQuery);