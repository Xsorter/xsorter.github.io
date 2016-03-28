$(function(){
	var $navicon = $('.header-navicon');
	$navicon.on('click', function(){
		var $dropdown = $('.header-navigation-menu-mobile-box');
		$dropdown.slideToggle(50);
		var $itemdrop = $('.menu-mobile-item');
		//$itemdrop.slideToggle(700);


	});
});