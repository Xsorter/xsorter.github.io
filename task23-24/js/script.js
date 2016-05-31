function Model(data){
	var self = this;
	self.data = data;

	self.addItem = function (item){
		self.data.push(item);
		if (item.lenght === 0){
			return;
		}

		return self.data;
	};

	self.removeItem = function (item){
		var index = self.data.indexOf(item);
		if (index === -1){
			return;
		}

		self.data.splice(index, 1);
		return self.data;
	};
}







function View(model){
	var self = this;

	function init(){
		var wrapper = tmpl($('#wrapper-template').html());

		$('body').append(wrapper);
		self.elements = {
			input: $('.item-value'),
			inputEditable: $('.one'),
			addBtn: $('.item-add'),
			listContainer: $('.item-list')
		};

		self.renderList(model.data);
	};


	self.renderList = function (data){
		var list = tmpl($('#list-template').html(),{data: data});
		self.elements.listContainer.html(list);
		return self.data;
	};

	init();
};






function Controller(model, view){
	var self = this;

	view.elements.addBtn.on('click', addItem);
	$(document).keypress(function(e) { //
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
};





		
$(function(){	
	var firstToDoList = ['test','test 3','test4'];
	var model = new Model(firstToDoList);
	var view = new View(model);
	var controller = new Controller(model, view);
});