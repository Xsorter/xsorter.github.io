function setTimer(){

//create pause button
var buttonPause = document.createElement('button');
buttonPause.classList.add('btn', 'btn-warning', 'btn-custom');
buttonPause.setAttribute('type', 'button');
buttonPause.innerHTML = 'Пауза/Старт';

//set variables
var dom = {
	id: function(elm){
		return document.getElementById(elm);
	}
};

var buttonStart = dom.id('btnStart');
var buttonStop = dom.id('btnStop');
var wrapper = dom.id('wrapper');
var wrapperTime = dom.id('wrapper-time');
var wrapperTimeMs = dom.id('wrapper-time-milliseconds');
var timer = 0 ;
var hours;
var minutes;
var seconds;
var milli;


function setTime(h,m,s,mi){
	wrapperTime.innerHTML = '0'+h+':'+m+':'+s;
	wrapperTimeMs.innerHTML = mi;
}

function timerStart(){
	++timer;
	hours = Math.floor(timer/(3600*60));
	minutes = Math.floor(timer/3600);
	seconds = Math.floor((timer-minutes*3600)/60);
	milli = timer - minutes*3600 - seconds * 60;
	
	if (hours < 10) hour = '0'+ hours;
	if (minutes < 10) minutes = '0'+minutes;
	if (seconds < 10) seconds = '0'+seconds;
	if (hours < 100) milli = '0'+milli;

	setTime(hours,minutes,seconds,milli);

}


function replaceButtons(){ //shortcut function to replace buttons
	wrapper.removeChild(buttonPause);
	wrapper.insertBefore(buttonStart, wrapper.children[2]);
}

function pause(){ // pause timer and replace button on "start"
	replaceButtons();
	clearInterval(id);
}

function start(){ // start timer and replace button on "pause"	
	wrapper.removeChild(buttonStart);
	wrapper.insertBefore(buttonPause, wrapper.children[2]);
	id = setInterval(timerStart , 15);
}

function stop(){
	clearInterval(id);
	setTime('0','00','00','000');
	timer = 0;


}

function resetStop(){
	replaceButtons();
	stop();
}

//button events
buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', resetStop);
buttonStop.addEventListener('click', stop);
buttonPause.addEventListener('click', pause);
}

setTimer(); //call main function to start the programm