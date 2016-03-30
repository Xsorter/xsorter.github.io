$(function () {
 
    var top = 0,
        step = 50,
        viewport = $(window).height(),
        body = $.browser.webkit ? $('body') : $('html'),
        wheel = false;
 
 
    $('body').mousewheel(function(event, delta) {
 
        wheel = true;
 
        if (delta < 0) {
 
            top = (top+viewport) >= $(document).height() ? top : top+=step;
 
            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        } else {
 
            top = top <= 0 ? 0 : top-=step;
 
            body.stop().animate({scrollTop: top}, 400, function () {
                wheel = false;
            });
        }
 
        return false;
    });
 
    $(window).on('resize', function (e) {
        viewport = $(this).height();
    });