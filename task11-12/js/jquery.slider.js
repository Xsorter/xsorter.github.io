<<<<<<< HEAD
(function($){
$.fn.slider = function(){ //plugin method

    $(function(){
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
 
        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) { //if empty image will show
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } 
        });
 
        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });
    });
}
=======
(function($){
$.fn.slider = function(){ //plugin method

    $(function(){
        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');
        var pixelsOffset = 125;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
        var maximumOffset = 0;
 
        leftUIEl.click(function() {
            if (currentLeftValue != maximumOffset) { //if empty image will show
                currentLeftValue += 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            } 
        });
 
        rightUIEl.click(function() {
            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= 125;
                elementsList.animate({ left : currentLeftValue + "px"}, 500);
            }
        });
    });
}
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
})(jQuery);