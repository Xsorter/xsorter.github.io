function GoogleCallback(data, textStatus){
    console.log(data);

    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function(i, hit){ //find object and each hit append to list
            var pageURL = hit.pageURL;
            var result = hit.webformatURL;
            $('#list').append("<li>"+"<img src="+result+ ">");              
    });
    else
        alert('Картинок с таким названием не найдено');
};        

$(function(){
    $('#submit').click(function(e){ 
    e.preventDefault();
    var query=$('#search').val(); // write query from input field
    $.ajax({ 
        //url:'https://www.googleapis.com/customsearch/v1?key=AIzaSyBpGsNzWxYyTaDXjUkhT_ygwpIMg-HB-wA&cx=018381364177235199790:cvzoqkd86t4&q='+query+ '&callback=GoogleCallback&context=?',
        url:'https://pixabay.com/api/?key=2566046-80b4e8851317db138039b9381&q='+query+'&callback=GoogleCallback&context=?',
        dataType: 'jsonp',
        method: 'GET',
        });   
    });
});