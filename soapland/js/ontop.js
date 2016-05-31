<<<<<<< HEAD
$(function() {
	$(window).scroll(function() {
 		if($(this).scrollTop() != 0) {
 			$('#toTop').fadeIn();
 		} else {
 			$('#toTop').fadeOut();
 		}
 	});
 
$('#toTop').click(function() {
 	$('body,html').animate({scrollTop:0},800);
 });
 
=======
$(function() {
	$(window).scroll(function() {
 		if($(this).scrollTop() != 0) {
 			$('#toTop').fadeIn();
 		} else {
 			$('#toTop').fadeOut();
 		}
 	});
 
$('#toTop').click(function() {
 	$('body,html').animate({scrollTop:0},800);
 });
 
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
});