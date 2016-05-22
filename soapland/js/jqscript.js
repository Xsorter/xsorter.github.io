$(function(){
	var $navicon = $('.header-navicon');
	$navicon.on('click', function(){
		var $dropdown = $('.header-menu-mobile');
		$dropdown.slideToggle("slow");	
		//$dropdown.slideToggle();
	});
});