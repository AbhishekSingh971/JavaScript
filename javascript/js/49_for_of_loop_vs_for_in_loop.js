let people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikarant"];


// **********************For-in loop***********************
//Traditional for loop :
// for (let index = 0; index < people.length; index++) {
//     const element = people[index];
//     console.log(element);
// }

// 1. Iterating an object
// let obj = {
//     name: "Harry",
//     language: "javaScript",
//     hobbies: "Android app development"
// }
// console.log(obj);

// 1.1 Iterating an object using Traditional for loop :
// for (let index = 0; index < Object.keys(obj).length; index++) {
//     const element = obj[Object.keys(obj)[index]];
//     console.log(element);
// }

// 1.2 Iterating an object using for-in loop :
// for(let key in obj){
//     console.log(obj[key]);
// }

// 1.3 Iterating an string
//We can use for-in with strings to loop through all the characters
// myString = "This is my string";
// for(let char in myString){
//     console.log(myString[char]);
// }
// for(let index in myString){
//     console.log(myString[index]);
// }




// **********************For-of loop***********************
people = ["Harry", "Rohan", "SkillF", "Shubham", "Vikarant"];

for(let name of people){
    console.log(name);
}

for(let name of myString){
    console.log(name);
}