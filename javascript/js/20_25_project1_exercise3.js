//if user add a note, add it to the localstorage
window.onload = function () {
    showNotes();

document.querySelector('body').addEventListener('mousemove', function(e){
    // console.log(e.offsetX, e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.clientY}, ${e.offsetY})`
    document.body.style.color = `rgb(${e.clientY}, ${e.offsetX}, ${e.clientX})`
    // console.log('you triggered mouse move event');
});

    let addBtn = document.getElementById('addBtn');
    addBtn.addEventListener('click', function (e) {
        let addTxt =  document.getElementById("addTxt");
        let addTitle =  document.getElementById("addTitle");
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = []
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let myObj = {
            title : addTitle.value,
            text : addTxt.value
        }
        notesObj.push(myObj);
        localStorage.setItem("notes", JSON.stringify(notesObj));
        addTxt.value = "";
        addTitle.value = "";
        console.log(notesObj);
        showNotes();
    });

    // Fuction to show element in notes
    function showNotes() {
        let notes = localStorage.getItem("notes");
        if (notes == null) {
            notesObj = [];
        }
        else {
            notesObj = JSON.parse(notes);
        }
        let html = "";
        notesObj.forEach(function (element, index) {
            html += `<div class="noteCard my-2 mx-2 card bg-transparent text-dark border-warning border-4" style="width:18rem;">
        <div class="card-body">
          <h5 class="h5 card-title">Note ${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary btn-outline-danger text-light">Delete</button>
        </div>
      </div>`;
        });
        let notesElm = document.getElementById('notes');
        if (notesObj.length != 0) {
            notesElm.innerHTML = html;
        }
        else {
            notesElm.innerHTML = `<p> class="text-danger text-center">
        Nothing to show!<br> Use "Add a Note" section above to add notes.</p>`;
        }
    }  
}

//function to delete a note
function deleteNote(index) {
    console.log('I am deleting', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    document.getElementsByClassName("card").style.display = 'none';
    localStorage.setItem("notes", JSON.stringify(notesObj));
        showNotes();
}

//function to searching
let search = document.getElementById('searchTxt'); 
search.addEventListener("input", function(){
    let inputVal = search.value.toLowerCase();
    // console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
}) 