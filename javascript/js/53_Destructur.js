// Destructuring in JavaScript

let a, b;
[a, b]= [34, 64];
// console.log(a, b);

[a,b,c,...d] = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// console.log(a,b,c,d);

// Array destructuring
({a, b, c, ...d} = {a:34, b:645, c:25, d:75, e:37});
console.log(a,b,c);

const fruits = ['apple', 'bananas', 'Mangoes'];
[a, b, c]= fruits;
console.log(a, b, c);

// Object Destructuring
laptop = {
    model: "HP Paviliaon",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function(){console.log('started')
    }
}

const{model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);
start();
