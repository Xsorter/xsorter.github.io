$(function(){
  $('.showhelp').on('click', function(){ 
    $('.tooltip').css('display', 'block');
  });

    $(".input").mouseover(function (){ 
    $(this).next('.tooltip').fadeIn(300); 
    }); 

    $(".input").mouseout(function (){
    $(this).next('.tooltip').fadeOut(50); 
    }); 
});