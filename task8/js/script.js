var testPage = {}
function testPageGeneration(){
	var body = document.querySelector('BODY');
	body.style.backgroundColor = '#d6d6d6';

	var divRow = document.createElement('div'); 
	divRow.classList.add('row-custom');
	body.appendChild(divRow);

	var pTextCenter = document.createElement('p');
	pTextCenter.classList.add('text-center', 'block-center');
	pTextCenter.innerHTML = 'Тест по программированию';
	divRow.appendChild(pTextCenter);

	var divRowItem = document.createElement('div'); //Блок для вопроса №1
	divRowItem.classList.add('row-custom-item');
	divRow.appendChild(divRowItem);

	var pTextLeft = document.createElement('p');
	pTextLeft.classList.add('text-left');
	pTextLeft.innerHTML = '1.Вопрос №1';
	divRowItem.appendChild(pTextLeft);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkbox.appendChild(checkboxInput);

	var textAnswerOne = document.createTextNode('Вариант ответа №1');
	checkbox.appendChild(textAnswerOne);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkbox.appendChild(checkboxInput);

	var textAnswer = document.createTextNode('Вариант ответа №2');
	checkbox.appendChild(textAnswer);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkboxInput.innerHTML = 'Вариант ответа №12';
	checkbox.appendChild(checkboxInput);

	var textAnswer = document.createTextNode('Вариант ответа №3');
	checkbox.appendChild(textAnswer);


	var divRowItem = document.createElement('div'); //Блок для вопроса №2
	divRowItem.classList.add('row-custom-item');
	divRow.appendChild(divRowItem);

	var pTextLeft = document.createElement('p');
	pTextLeft.classList.add('text-left');
	pTextLeft.innerHTML = '2.Вопрос №2';
	divRowItem.appendChild(pTextLeft);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkbox.appendChild(checkboxInput);

	var textAnswerOne = document.createTextNode('Вариант ответа №1');
	checkbox.appendChild(textAnswerOne);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkbox.appendChild(checkboxInput);

	var textAnswer = document.createTextNode('Вариант ответа №2');
	checkbox.appendChild(textAnswer);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkboxInput.innerHTML = 'Вариант ответа №12';
	checkbox.appendChild(checkboxInput);

	var textAnswer = document.createTextNode('Вариант ответа №3');
	checkbox.appendChild(textAnswer);

	var divRowItem = document.createElement('div'); //Блок для вопроса №3
	divRowItem.classList.add('row-custom-item');
	divRow.appendChild(divRowItem);

	var pTextLeft = document.createElement('p');
	pTextLeft.classList.add('text-left');
	pTextLeft.innerHTML = '3.Вопрос №3';
	divRowItem.appendChild(pTextLeft);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkbox.appendChild(checkboxInput);

	var textAnswerOne = document.createTextNode('Вариант ответа №1');
	checkbox.appendChild(textAnswerOne);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkbox.appendChild(checkboxInput);

	var textAnswer = document.createTextNode('Вариант ответа №2');
	checkbox.appendChild(textAnswer);

	var checkbox = document.createElement('label');
	checkbox.classList.add('checkbox');
	divRowItem.appendChild(checkbox);

	var checkboxInput = document.createElement('input');
	checkboxInput.setAttribute('type', 'checkbox');
	checkboxInput.setAttribute('value', 'text');
	checkboxInput.innerHTML = 'Вариант ответа №12';
	checkbox.appendChild(checkboxInput);

	var textAnswer = document.createTextNode('Вариант ответа №3');
	checkbox.appendChild(textAnswer);


	var button = document.createElement('button'); //центральная кнопка
	button.setAttribute('type', 'button');
	button.classList.add("btn", "btn-default", "center-block", "btn-size");
	button.innerHTML = 'Проверить мои результаты';
	divRow.appendChild(button);

}

testPageGeneration();


