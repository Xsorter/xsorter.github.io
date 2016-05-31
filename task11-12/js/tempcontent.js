$(function(){
	var html = $('#profile').html();
	var data = {
		name: 'Нелин Алексей Евгеньевич',
		sourceimage: 'img/pic.jpg',
		workplace: 'Работник банка ПУМБ',
		reasonFirst: 'Мечтал заниматься версткой',
		reasonSecond: 'Хочу работать в frontend направлении',
		reasonThird: 'Хочу заниматься любимым делом профессионально',
		phone: '0953236476',
		hrefVk: 'http://vk.com/xsorter',
		hrefVkName: 'vk.com',
		feedback: 'Большое спасибо за труды и качественное обучение!'
	};
	var content = tmpl(html, data);
	$('body').append(content);

});