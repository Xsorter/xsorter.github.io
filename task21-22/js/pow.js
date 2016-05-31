var pow = {exponent : function  (a,b){
           var result = a;
           for (var i=1; i<b; i++){
               result *= a;
           }
           
           return result;
    }};
        
module.exports = pow;