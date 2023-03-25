let reg = /harry/;//This is a regular expression literal in js
// reg = /harry/g; //g means global
// reg = /harry/i; //i means case insensitiv

// console.log(reg);
// console.log(reg.source);

let s = "This is great code with harry and also harry bhai";
//function to match expressions
//1. exec() - This function will return an array for match or null for no match
let result = reg.exec(s);
// if (result) {
//     console.log(result);
//     console.log(result.input);
//     console.log(result.index);
// }

// this is used with global or we can use multiple exec with global flag like below
//result = reg.exec(s);
// console.log(result);
//result = reg.exec(s);
// console.log(result);

// 2.text() =returns true and false
let result2 = reg.test(s);
// console.log(result2); ---> This will only print true if the "reg" is there in the string "a"

// 3. match()  - It will return an array of results or null
// let result3 = reg.match(a) ----->This is wrong!!
let result3= s.match(reg) // This is right
// console.log(result3);

// 4.search()= returns index of first match else -1
// let result4 = reg.search(a) ----->This is wrong!!
let result4= s.search(reg) // This is right
// console.log(result4);

// 5. replace() - reaturn new replaced string with all the replacements (if no global flag is given first match will be replaced)
let result5 = s.replace(reg, 'rahul');
console.log(result5);