const constantA = 5;

 let a = 43;
 let b = 32;
 console.log(`${a}+${b} = ${a+b}`);

function showText(title = 'Default title',a = 200,b = 300){
	console.log(`${title} ${a} ${b}`)
};

showText('Hello World', 2);

let sum = (a,b) => a+b;
console.log(sum(2,3));

let arr = [1,2,3,4,5,6,7,8,9,'names'];
for (let number of arr){
	console.log(number);
}