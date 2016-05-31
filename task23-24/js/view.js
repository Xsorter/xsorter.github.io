<<<<<<< HEAD
define(
	'view',
    ['jquery'],
    	function(){
    return{
    	view:
    		view = function (model){
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
			}
		};
=======
define(
	'view',
    ['jquery'],
    	function(){
    return{
    	view:
    		view = function (model){
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
			}
		};
>>>>>>> 97f5991d9fb678b9c1d7704b696a77ad568a530e
});