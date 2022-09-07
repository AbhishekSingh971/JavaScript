//type conversion and type coercion
 
// TO change in string
console.log('Welcome to 4 part');

let myVar;
myVar = String(34);
console.log(myVar, (typeof myVar));

let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let date = String(new Date());
console.log(date, (typeof date));

let arr = String([1,2,3,4,5]);
console.log(arr.length, (typeof arr));

let i = 32;
console.log(i.toString());

// To change in Number
let stri = Number("3434");
stri = Number("343d4");
stri = Number(true);
stri = Number([1,2,3,4,5,6,7,8,9]);
// console.log(stri, (typeof stri));

let number = parseInt('34.89');
let number2 = parseFloat('34.89');
console.log(number, (typeof number), number2, (typeof number2));
//To find out number after the decimal
console.log(number2.toFixed(20));