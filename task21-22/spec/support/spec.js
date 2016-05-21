var pow = require('../../js/pow.js');

describe("pow calculation", function() {
  it("pow()", function() {
  	//prepare
  	var result;
  	//act
  	result = pow.exponent(2,1);
  	//assert
    expect(result).toBe(2);
  });

  
});