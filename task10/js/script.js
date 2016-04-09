$(function (){
	var tabs = $('.tabs');
	console.log(tabs);
	$('.tabs-content > div', tabs).each(function(i){
        if ( i != 0 ) $(this).hide(0);
    });

tabs.on('click', '.tabs-menu a', function(e){
	e.preventDefault(); //cancel standart reaction on link click
	var activeTab = $(this).attr('href');
    $('.tabs-menu a',tabs).removeClass();//add active class and remove all classes but active
    $(this).addClass('active');
    $('.tabs-content > div', tabs).hide(0);//hide all tabs but active
    $(activeTab).show();
    });
});