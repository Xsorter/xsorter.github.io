<<<<<<< HEAD
define(
	'control',
    ['jquery'],
    	function(){
    return{
    	control:
    		control = function(model, view){
				var self = this;

				view.elements.addBtn.on('click', addItem);
				$(document).keypress(function(e) { 
    					if(e.which == 13) {
        				addItem();
    				}
				});

				view.elements.listContainer.on('click', '.item-delete', removeItem );

				function addItem(){
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				};

				function removeItem(){
					var item = $(this).attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
		
			};
		}
	};
=======
define(
	'control',
    ['jquery'],
    	function(){
    return{
    	control:
    		control = function(model, view){
				var self = this;

				view.elements.addBtn.on('click', addItem);
				$(document).keypress(function(e) { 
    					if(e.which == 13) {
        				addItem();
    				}
				});

				view.elements.listContainer.on('click', '.item-delete', removeItem );

				function addItem(){
					var newItem = view.elements.input.val();
					model.addItem(newItem);
					view.renderList(model.data);
					view.elements.input.val('');
				};

				function removeItem(){
					var item = $(this).attr('data-value');
					model.removeItem(item);
					view.renderList(model.data);
		
			};
		}
	};
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
});