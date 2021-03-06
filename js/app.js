$(document).foundation();

var START_HEADER_OFFSET = $("header .nav").offset().top;
var STOP_HEADER_OFFSET = 440;
var HEADER_HEIGHT = parseInt($("header .nav").css("padding"), 10);
var LOGO_HEIGHT = parseInt($(".navbar .logo img").css("height"), 10) - 20;

window.onload = onWindowLoaded;

function onWindowLoaded() {
	$(window).scroll(onScroll);
	$(".footer_ending .btn_scroll_up").click(onSrcollTopButtonClick);
}

function onScroll() {
	if ($(document).width() > 1023) {
		var percentScaling = 1;	
		if (window.pageYOffset > STOP_HEADER_OFFSET)
		{
			percentScaling = 0;
		} else if (window.pageYOffset > START_HEADER_OFFSET){
			percentScaling = 1 - (window.pageYOffset - START_HEADER_OFFSET) / (STOP_HEADER_OFFSET - START_HEADER_OFFSET);
		};
		$("header .nav").css('padding', HEADER_HEIGHT * percentScaling + 'px 0');
		$(".navbar .logo img").css('height', LOGO_HEIGHT * percentScaling + 20  + 'px');
	} else {
		$(".navbar .logo img").css('height', LOGO_HEIGHT + 20  + 'px');
	}
}

function onSrcollTopButtonClick() {
	$("html").stop().animate({scrollTop:0}, 500);
}