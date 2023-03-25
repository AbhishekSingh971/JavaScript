let marks = [34, 45, 32, 56, 67, 39];
const fruits = ['Orange', 'Apple', 'Pineapple'];
const mixed = ['str', 84, [3, 5]];

const arr = new Array(23, 123, 21, 'Orange');
console.log(arr);
console.log(mixed);
console.log(fruits[1]);
console.log(arr.length);
console.log(Array.isArray(arr));

arr[0] = "Red";
console.log(arr);

let arrelement = arr[0];
console.log('element :', arrelement);

let value = marks.indexOf(56);
console.log(value);

// MUtatting or modifing arrays
marks.push(97);            //Inserting element at end
console.log(marks);

marks.unshift(84);        //Insertin element at starting
console.log(marks);

marks.pop()                //Deletion from end
console.log(marks);

marks.shift();            //Deletion from starting
console.log(marks);

marks.splice(1, 3);
console.log(marks);

marks.reverse();
console.log(marks);

let marks2 = [1, 2, 3, 4];
marks = marks.concat(marks2);
console.log(marks);

// Object
let myobj = {
    'first name': 'Abhi',
    channel: 'w3school',
    isActive: true,
    marks: [1, 2, 5, 3, 7]
}

console.log(myobj);
console.log(myobj.isActive);
console.log(myobj['first name']);  // When there is space in object elements
console.log(myobj.marks);
console.log(myobj['marks']);