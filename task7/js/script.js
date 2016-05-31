function pow(a, b){
	var number = prompt('Please, enter the number' , 0);
	var exponent = prompt('Please, enter the exponent' , 0);
	var a = parseInt(number);
	var b = parseInt(exponent);
	var result = a;
	for(var i = 1; i < b; i++){
		result *= a;
	}
	return result;
	
}

var exponentResult = pow();
console.log('and the result is = ', exponentResult);
document.write('and the result is = ', exponentResult);