$(function() {
	var goPage;
	var topPos;
	
	$(".nav li > a").click(function(e) {
		e.preventDefault();
		goPage = $(this).attr("href");
		topPos = $(goPage).offset().top;
		$("html, body").stop().animate({scrollTop:topPos}, 800);
	});
	
	$(window).scroll(function() {
		var t= $(this).scrollTop();
		$("nav li").removeClass("active");
		if(t < S("#career").offset().top) {
			$("nav li:eq(0)").addClass("active");
		} else if(t < $("#portfolio").offset().top) {
			$("nav li:eq(1)").addClass("active");
		} else if(t < $("#contact").offset().top) {
			$("nav li:eq(2)").addClass("active");
		} else {
			$("nav li:eq(3)").addClass("active");
		}
	})
});