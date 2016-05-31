require.config({
    
    paths: {
        'jquery': 'http://code.jquery.com/jquery-2.1.3.min',
        
    },
    shim: {
        'jquery': {
            exports: 'jQuery',
           
        }
    }    
});


require(
    [  
        'model',
        'view',
        'control',
        'jquery' 
    ],

    function (model, view, control,  $) {
        console.log('$', $);
        console.log('model', model);
        console.log('view', view);
        console.log('control', control);
        
        var firstToDoList = ['Just add','Your task','To not forget it :)'];
        var model = new model.model(firstToDoList);
        var view = new view.view(model);
        var control = new control.control(model, view);
     });
       
