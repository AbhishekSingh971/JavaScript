// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

//Display constructor
function Display() {

}

//Add methods to display prototype
Display.prototype.add = function(book){
    console.log('Adding to UI');
    tableBody = document.getElementById('tableBody');
    let uistring = `<tr>
                      <th>${book.name}</th>
                      <th>${book.author}</th>
                      <th>${book.type}</th>
                    </tr>`
    tableBody.innerHTML += uistring;
}
//impliment the clear function
Display.prototype.clear = function(){
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}

//impliment the validate function
Display.prototype.validate = function(book){
    if (book.name.length<2 || book.author.length<2){
        return false;
    }
    else{
        return true;
    }
}

Display.prototype.show = function(type, displayMessage){
 let message = document.getElementById('message');
 message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
 <strong>Message:</strong> ${displayMessage}
 <button type="button" class="close float-end" data-dismiss="alert" aria-label="close">
 <span aria-hidden="true">&times;</span>
 </button>
 </div>`
 setTimeout(function(){
    message.innerHTML = ''
 },2000);
}

//Add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('You have submitted library form');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('Fiction');
    let programming = document.getElementById('Programming');
    let cooking = document.getElementById('Cooking');

    if (fiction.checked) {
        type= fiction.value;
    }
    else if (programming.checked) {
        type= programming.value;
    }
    else if (cooking.checked) {
        type= cooking.value;
    }

    let book = new Book(name, author,type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('Success',"You book has been successfully added");
    }else {
        //show error to the user
        display.show("danger", "Sorry You can't Add this Book");
    }
    
    e.preventDefault();
}