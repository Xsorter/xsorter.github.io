<<<<<<< HEAD
$(function(){
	var $navicon = $('.header-navicon');
	$navicon.on('click', function(){
		var $dropdown = $('.header-menu-mobile');
		$dropdown.toggle();
		$dropdown.animate({margin: '10'}, 500);
		//$dropdown.slideToggle();
	});
=======
$(function(){
	var $navicon = $('.header-navicon');
	$navicon.on('click', function(){
		var $dropdown = $('.header-menu-mobile');
		$dropdown.toggle();
		$dropdown.animate({margin: '10'}, 500);
		//$dropdown.slideToggle();
	});
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
});