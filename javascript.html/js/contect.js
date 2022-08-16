show();
class Contact {
    constructor(name, number, type) {
        this.name = name;
        this.number = number;
        this.type = type;
    }
}

class Display {
// it show the data without saving the contact
//     add(contact) {
//         let tableBody = document.getElementById('tableBody');
//         info += `<tr class="text-warning">
//                     <th scope="col">${contact.name}</th>
//                     <th scope="col">${contact.number}</th>
//                     <th scope="col">${contact.type}</th>
//              </tr>`
// tableBody.innerHTML += info;
//     }

clear() {
    let contactForm = document.getElementById('contactForm');
    contactForm.reset();
}

validate(contact) {
    if (contact.name.length <= 3 || (contact.number <= 9 && contact.number.length >= 11)) {
        return false;
    }
    else {
        return true;
    }
}

show(type, displayMessage){
    let message = document.getElementById('message');
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>${type}:</strong> ${displayMessage}
        <button type="button" class="close float-end" data-dismiss="alert" aria-label="close">
        <span aria-hidden="true">&times;</span>
        </button>
        </div>`
    setTimeout(function () {
        message.innerHTML = ''
    }, 5000);
}
}

// For color change
// document.querySelector('body').addEventListener('mousemove', function(e){
//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.clientY}, ${e.offsetY})`
//     document.body.style.color = `rgb(${e.clientY}, ${e.offsetX}, ${e.clientX})`});

let contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', contactFormSubmit);

function contactFormSubmit(e) {
    let conname = document.getElementById('name').value;
    let connum = document.getElementById('number').value;
    let type;
    let family = document.getElementById('family');
    let friend = document.getElementById('friend');
    let buisness = document.getElementById('buisness');
    let other = document.getElementById('other');

    if (family.checked) { 
        type = family.value;
    }
    else if (friend.checked) {
        type = friend.value;
    }
    else if (buisness.checked) {
        type = buisness.value;
    }
    else if (other.checked) {
        type = other.value;
    }

    let contact = new Contact(conname, connum, type);
    let display = new Display();

    if (display.validate(contact)) {

        // this is for saving data in a local storage
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let myObj = {
            ContactName: conname,
            ContactNumber: connum,
            Type: type
        }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));

        // display.add(contact);
        show();
        display.clear();
        display.show('Success', "Congrats! You Contact has been successfully added");
    } else {
        //show error to the user
        display.show("Danger", "Sorry! You can't Add this Contact");
        // alert("The contact is empty");
    }
    e.preventDefault();

}

//this is a function to show data from local storage
function show(){
    let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let info=`<tr class="text-success">
        <th scope="col">S. No.</th>
        <th scope="col">Name</th>
        <th scope="col">Number</th>
        <th scope="col">Type</th>
        <th></th>
    </tr>`; 
        notesObj.forEach(function(element, index){
        info += `<tr id="tr" class="tr text-warning">
                    <th scope="col">${index+1}.</th>
                    <th scope="col">${element.ContactName}</th>
                    <th scope="col">${element.ContactNumber}</th>
                    <th scope="col">${element.Type}</th>
                    <th scope="col"><button id="${index}" onclick="del(this.id)" class="btn btn-primary btn-outline-danger text-light">Delete</button></th>
             </tr>`;
});
    let tableBody = document.getElementById('tableBody');
    if(notesObj.length != 0){
        tableBody.innerHTML = info;
    }
    else{
        tableBody.innerHTML = `<p class = "text-danger text-center">Nothing to show!<br> Use "Add Contact" section above to add contact.</p>`
    }
}

function del(index){
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index,1);
    document.getElementById('tr').style.display='none';
    localStorage.setItem("notes", JSON.stringify(notesObj));
    show();
}

//function to searching
let search = document.getElementById('searchTxt'); 
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let tr = document.getElementsByClassName('tr');
    Array.from(tr).forEach(function(element){
        let th = element.getElementsByTagName("th")[1].innerText;
        if(th.includes(inputVal)){
            element.style.display = "block-inline";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});

let recent = document.getElementById('recent');
recent.addEventListener('click', popHandler);

function popHandler(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET',"http://127.0.0.1:5500/javascript.html/contect.html#", true);

    xhr.onload = function(){
        if(this.status === 200){
            let change = document.getElementById('change');
            change.innerHTML = this.response;
        }
        else{
            console.error('sorry! some error occured');
        }
    }
    xhr.send();
    console.log('this is done fetching employees');
}