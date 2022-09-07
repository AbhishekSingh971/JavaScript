//set stroes unique values
const mySet = new Set();   //Initialize an empty set
console.log('The set looks like :', mySet);

//Adding values to this set
mySet.add('this');
mySet.add('My name');
mySet.add('this');  //set doesn't add this becuse set stores only unique values
mySet.add('that');
mySet.add('that2');
mySet.add(34);
mySet.add(true);
console.log('The set looks like this now :', mySet);


// Use a constructor to initialize the set
// let mySet2 = new Set([1, 45, 'this', false, {a:4,b:8}])
// console.log('New set :', mySet2);

console.log(mySet.size);    // get the size of the set

console.log(mySet.has(34));  //check whether the set has 34 or not

console.log('before removel :',mySet);
mySet.delete('that2'); // remove an element from the set
console.log('after removel;',mySet);

// Iterating a set
// for(let item of mySet){
//     console.log('item is :', item);
// }

// mySet.forEach(item=>{
//     console.log('item is :', item);
// });


// for converting into array
let array = Array.from(mySet);
console.log(array);
