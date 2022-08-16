// For creating Element
// let element = document.createElement('li' );

//first way
//Add a class name,id,and other attribute in element
// element.className = 'child';
// element.id = 'chlildred';
// element.setAttribute('title', 'mytitle');
// element.innerText = 'hello this is created list';
// element.innerHTML = '<b>hello This is created list</b>';

// let ul = document.querySelector('.container');
// ul.appendChild('element');
// console.log(element);

//second way
// let text = document.createTextNode('this list is created');
// element.appendChild(text);

// let ul = document.querySelector('.container');
// ul.appendChild('element');
// console.log(element);


//For Replacing Element
// let elem = document.createElement('h3');
// elem.className = 'newe';
// elem.id = 'newe';
// let text=document.createTextNode('this is for replacing');
// elem.appendChild(text);
// let place = document.querySelector('.fdi');
// console.log(elem);

//1.way
// place.replaceWith(elem);

//2way
// let container=document.getElementById('con');
// container.replaceChild(elem,document.getElementById('fdi'));

// for removing
// container.removeChild(document.getElementById('fdi'));



// console.log(elem.hasAttribute('class'));
// console.log(elem.getAttribute('id'));
// console.log(elem.removeAttribute('id'));
// console.log(elem.setAttribute('title', 'mytitle'));
// console.log(elem);


// Quick quiz
// create a heading element with text as "Go to w3school" and create an a tag outside it with href = "http://www.w3school.com";

let link = document.createElement('a');
link.setAttribute('href', 'http://www.w3school.com');
link.className = 'link';

let heading = document.createElement('h1');
heading.className = 'h1';
let text1 = document.createTextNode('Go to w3school');
heading.appendChild(text1);
link.appendChild(heading);
console.log(link);