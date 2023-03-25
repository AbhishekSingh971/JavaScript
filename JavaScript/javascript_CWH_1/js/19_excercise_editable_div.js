/*
you have to create a div and inject it into a page which contains a heading
whenever someone clicks on the div, it should be converted into an editable item. whenever user clicks away(blur). save the note 'into the local storage
*/ 
window.onload=function(){
let divElem = document.createElement('div');
let val= localStorage.getItem('text');
let text;
if(val == null){
    text = document.createTextNode('this is going to be editable');
}
else{
     text = document.createTextNode(val);
}
divElem.appendChild(text);
divElem.className = 'elem container text-center text-warning';
divElem.id = 'elem';
divElem.setAttribute('style', 'border:2px solid black; width:200px; margin:10px;');
let container = document.querySelector('#container');
let first = document.getElementById('first');

container.insertBefore(divElem, first);

//add event listener to the divElem
divElem.addEventListener('click', function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas == 0){
    let html = divElem.innerHTML ;
    divElem.innerHTML = `<textarea class = "textarea form-control" id="textarea" rows="3">${html}</textarea>`; 
    }
    
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur', function(){
        divElem.innerHTML = textarea.value;
        localStorage.setItem('text', textarea.value)
    });
});
}
