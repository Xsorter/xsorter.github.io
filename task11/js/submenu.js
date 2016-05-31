$(function(){
  var $links = $('.menu a');

  $links.on('click', function(e){
    var $submenu = $(this).siblings('.submenu');
    var $subsubmenu = $(this).siblings('.subsubmenu');
    e.preventDefault();
    $submenu.slideToggle('slow');
    $subsubmenu.slideToggle('slow');
  });
});
