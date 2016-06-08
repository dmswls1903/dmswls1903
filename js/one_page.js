//one_page.js


$(function(){
    $("#gnb a").click(function(e){
		var posY = $($(this).attr("href")).position();		
		$("html,body").stop().animate({'scrollTop':posY.top - 56},1000);
		e.preventDefault();
	});     
});
