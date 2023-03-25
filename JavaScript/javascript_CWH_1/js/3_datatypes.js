var name= 'Abhishek';
console.log("My string is " + name);
console.log("Datatype is " + (typeof name));

//numbers
let marks = 34;
console.log("Data type is " + (typeof marks));

//Boolean
let isDrive= true;
console.log("Data type is " + (typeof isDrive));

//Null
let nullvar = null;
console.log("Data type is " + (typeof nullvar));

//Undefine
let undef = undefined;
console.log("Data type is " + (typeof undef));

// Reference Data types

//Arrays
let myarr =[1,2,3,4,false,"string"];
console.log("Data type is " + (typeof myarr));

//Object Literals
let stMarks = {
    Abhi: 34,
    Aman: 45,
    Rohan: 64,
    Manas: 34
}
console.log(typeof stMarks);
console.log(stMarks);
console.table(stMarks);

//function
function findName() {
    
}
console.log(typeof findName);

let date = new Date();
console.log(typeof date);