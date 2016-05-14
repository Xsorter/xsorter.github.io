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


//prototypes

function Human()  {
    this.name = 'alex',
    this.age = 28,
    this.sex = 'male',
    this.height = 180, 
    this.weight = 85
};

console.log(Human);

Worker.prototype = new Human();
Student.prototype = new Human();

function Worker()  {
    this.job = 'office',
    this.salary = 10000,
    this.working = function (){
        console.log('i am working and this is work method')
    };
};

function Student()  {
    this.university = 'DNU',
    this.money = 500,
    this.watching = function (){
        console.log('i am watching TV show and this is watching method')
    };
};



var worker1 = new Worker();
var worker2 = new Worker();
var worker3 = new Worker();
var worker4 = new Worker();
var worker5 = new Worker();

console.log(worker1.salary);
console.log(worker2.name);
console.log(worker3.working());
console.log(worker4.job);
console.log(worker5.sex);

var student1 = new Student();
var student2 = new Student();
var student3 = new Student();
var student4 = new Student();
var student5 = new Student();

console.log(student1.university);
console.log(student2.name);
console.log(student3.watching());
console.log(student4.sex);
console.log(student5.height);