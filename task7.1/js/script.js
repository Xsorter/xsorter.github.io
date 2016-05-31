var names = [];
names.length = 5;

for (i = 0; i<names.length; i++){
	names[i] = prompt('Введите произвольное имя', 0);
}
var userName = prompt('Пожалуйста, введите имя пользователя');

console.log(names); //Массив, который в результате получился
console.log(userName); //Имя пользователя, которое будем сравнивать с именами из массива

for (i = 0; i<names.length; i++){ //Если находим в массиве имя пользователя - записываем в переменную
	if(names[i] === userName){
		var correctName = (userName+', Вы успешно вошли!');
			
	}else{
		var inCorrectName = ('Ошибка :( Такого имени в нашей базе нет');	
	}
}

if(correctName){ //Если переменная с именем пользователя появилась - выводим сообщение
	alert(correctName);
}else{
	alert(inCorrectName);
}