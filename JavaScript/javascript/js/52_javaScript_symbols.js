// Symbols
const sym1 = Symbol('my identifier');
const sym2 = Symbol('my identifier');
// console.log('Symbols is', syml);
// console.log('Type ofSymbols is', typeof syml);
console.log(sym1 === sym2);

const a = "this is";
const b = "this is";

console.log(a === b);
console.log(null === null);
console.log(undefined === undefined);

const k1 = Symbol();
const k2 = Symbol();

myObj = {};
myObj[k1] = "Harray";
myObj[k2] = "Rohan";
myObj["name"] = "Good boy";
myObj["4"] = "Good int";

console.log(myObj);
console.log(myObj[k1]);
console.log(myObj[k2]);
console.log(myObj.k2);   // cannot do this to get Rohan because it is same as myObj["k2"]

//symbols are ignored in for in loop
for(key in myObj){
    console.log(key,myObj[key]);
}

console.log(JSON.stringify(myObj));
