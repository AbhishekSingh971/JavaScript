console.log(" HEllO ");
const name = "Abhishek";
const greeting = "Good morning";
console.log(greeting + ' ' + name);

let html;
html = "<h1> This is heading </h1>" + "<p> This is my para </p>";

// String functions
html = html.concat('this', ' str2');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase());
console.log(html[1]);
console.log(html.indexOf('<'));
console.log(html.lastIndexOf('<'));
console.log(html.charAt(4));
console.log(html.endsWith('str2'));
console.log(html.includes(' This')); //to check not for include
console.log(html.substring(1, 7));
console.log(html.slice(0, 5));
console.log(html.split('>'));
console.log(html.replace('This', 'It'));

// Template literals
let fruit = "Apple";
let myhtml = `HELLO ${name}
<h1>This is our heading</h1>
<p>${fruit} is favourit of ${name};`

document.body.innerHTML = myhtml;   