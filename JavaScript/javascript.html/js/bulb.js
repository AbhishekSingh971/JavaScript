window.onload = function(){
let img=document.getElementById('img');
let div=document.createElement('div');
let btn=document.createElement('button');
div.className = "div container border border-danger";
btn.className = "btn btn-warning btn-outline-info text-light";
text = document.createTextNode('Switch ON')
div.id = "btnDiv";
btn.id = "btn"
div.appendChild(btn);
btn.appendChild(text);
console.log(div);

let div2=document.querySelector('#div');
let on=document.querySelector('#on');

div2.insertBefore(div,on);

}
