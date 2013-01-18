(function($) {
	$(document).ready(function(){
		/*
		main menu basic actions
		 */
//		$('.menu-block-wrapper > ul > li > a').addClass('first-level');
		$('.menu-block-wrapper > ul > li > a').click(function(e){
//			if ($(this).parent().parent().hasClass('menu-level-1'))
			if ($(this).parent().children('ul').length) e.preventDefault();
			$('.menu-block-wrapper > ul > li > a').removeClass('fake-active');
			$(this).addClass('fake-active');
			$('.menu-block-wrapper ul > li > ul').each(function(){
				$(this).hide();
			})
			$(this).parent().children('ul').fadeIn();
		});
//		if ($('.menu-block-wrapper li a.active').parent().parent().hasClass('menu'))
//			$('.menu-block-wrapper li a.active').parent().parent().show();
//		$('.menu-block-wrapper > ul > li > a.active').parent().child('ul').show();
		$('.menu-block-wrapper > ul > li > ul > li > a.active').parent().parent().parent().children('a').addClass('active');
//			$('.menu-block-wrapper li a.active').parent().parent().show();

		$('.menu-block-wrapper ul > li > a.active').parent().children('ul').show();
		/*
		end of main menu basic actions
		 */

		/*
		 volume control
		 */
		var volumeControl = new slider('volume-control', 120, 0, 100, 0);
		volumeControl.setValue(75);
		$('#volume-control').css('position','fixed');
		/*
		 end of volume control
		 */


		/*
		name trim
		 */
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

		if($('.node-teaser .node-title a').length){
			$('.node-teaser .node-title a').each(function(){
				var node_classes = $(this).parent().parent().attr('class');
				var mood_class = node_classes.substr(node_classes.indexOf('mood-'));
				var mood_index = parseFloat(mood_class.substr(mood_class.indexOf('-')+1));
				switch (mood_index){
					case 1:
				}
				if($(this).html().length > 8){ //console.log(this);
					var href = $(this).attr('href');
					var name = $(this).html();
					var width = this.offsetWidth + 50;
					$(this).html(name.substr(0,12));
					$(this).addClass('true-node-title');
					$(this).parent().append('<a href="'+href+'" class="fake-node-title" style="display:none">'+name+'</a>');
					$(this).parent().mouseover(function(){
						$(this).find('.true-node-title').hide();
						$(this).find('.fake-node-title').show();
//						$(this).find('.fake-node-title').css('display','inline-block');
						$(this).css('background','rgba(255, 255, 255, .5)');
						$(this).css('max-width', width);
						$(this).css('border-radius','4px');
					});
					$(this).parent().mouseout(function(){
						$(this).find('.true-node-title').show();
						$(this).find('.fake-node-title').hide();
						$(this).css('background','none');
						$(this).css('max-width','125px');
					})

				}
			})
		}
		/*
		end name trim
		 */
	});
})(jQuery);


function slider(elemId, sliderWidth, range1, range2, step) {
	var knobWidth = 17;				// ширина и высота бегунка
	var knobHeight = 21;			// изменяются в зависимости от используемых изображений
	var sliderHeight = 21;			// высота slider'а

	var offsX,tmp;					// вспомагательные переменные
	var d = document;
	var isIE = d.all || window.opera;	// определяем модель DOM
	var point = (sliderWidth-knobWidth-3)/(range2-range1);
	// point - количество пикселей на единицу значения

	var slider = d.createElement('DIV'); // создаем slider
	slider.id = elemId + '_slider';
	slider.className = 'slider';
	d.getElementById(elemId).appendChild(slider);

	var knob = d.createElement('DIV');	// создаем ползунок
	knob.id = elemId + '_knob';
	knob.className = 'knob';
	slider.appendChild(knob); // добавляем его в документ

	knob.style.left = 0;			// бегунок в нулевое значение
	knob.style.width = knobWidth+'px';
	knob.style.height = knobHeight+'px';
	slider.style.width = sliderWidth+'px';
	slider.style.height = sliderHeight+'px';

	var sliderOffset = slider.offsetLeft;			// sliderOffset - абсолютное смещение slider'а
	tmp = slider.offsetParent;		// от левого края в пикселях (в IE не работает)
	while(tmp.tagName != 'BODY') {
		sliderOffset += tmp.offsetLeft;		// тут его и находим
		tmp = tmp.offsetParent;
	}

	if(isIE)						// в зависимости от модели DOM
	{								// назначаем слушателей событий
		knob.onmousedown = startCoord;
		slider.onclick = sliderClick;
		knob.onmouseup = endCoord;
		slider.onmouseup = endCoord;
	}
	else {
		knob.addEventListener("mousedown", startCoord, true);
		slider.addEventListener("click", sliderClick, true);
		knob.addEventListener("mouseup", endCoord, true);
		slider.addEventListener("mouseup", endCoord, true);
	}


// далее подробно не описываю, кто захочет - разберется
//////////////////// функции установки/получения значения //////////////////////////

	function setValue(x)	// установка по пикселям
	{
		if(x < 0) knob.style.left = 0;
		else if(x > sliderWidth-knobWidth-3) knob.style.left = (sliderWidth-3-knobWidth)+'px';
		else {
			if(step == 0) knob.style.left = x+'px';
			else knob.style.left = Math.round(x/(step*point))*step*point+'px';
		}
//				d.getElementById('info').value = getValue();	// это вывод значения для примера
		if (threeSixtyPlayer.lastSound !== null)
		threeSixtyPlayer.lastSound.setVolume(getValue()); 	// это вывод значения для примера
	}
	function setValue2(x)	// установка по значению
	{
		if(x < range1 || x > range2) alert('Value is not included into a slider range!');
		else setValue((x-range1)*point);

//				d.getElementById('info').value = getValue();
		if (threeSixtyPlayer.lastSound !== null)
		threeSixtyPlayer.lastSound.setVolume(getValue());
	}

	function getValue()
	{return Math.round(parseInt(knob.style.left)/point)+range1;}

//////////////////////////////// слушатели событий ////////////////////////////////////

	function sliderClick(e) {
		var x;
		if(isIE) {
			if(event.srcElement != slider) return; //IE onclick bug
			x = event.offsetX - Math.round(knobWidth/2);
		}
		else x = e.pageX-sliderOffset-knobWidth/2;
		setValue(x);
	}

	function startCoord(e) {
		if(isIE) {
			offsX = event.clientX - parseInt(knob.style.left);
			slider.onmousemove = mov;
		}
		else {
			slider.addEventListener("mousemove", mov, true);
		}
	}

	function mov(e)	{
		var x;
		if(isIE) x = event.clientX-offsX;
		else x = e.pageX-sliderOffset-knobWidth/2;
		setValue(x);
	}

	function endCoord()	{
		if(isIE) slider.onmousemove = null;
		else slider.removeEventListener("mousemove", mov, true);
	}

	// объявляем функции setValue2 и getValue как методы класса
	this.setValue = setValue2;
	this.getValue = getValue;
} // конец класса