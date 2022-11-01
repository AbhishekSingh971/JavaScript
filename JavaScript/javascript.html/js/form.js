window.onload = () => {
    let input = document.getElementById("input");
    let sub = document.getElementById('submit')
    sub.addEventListener('click', submit);

    function submit(e) {
        let string = input.value;
        let html = `<div class="card col-4 bg-dark">
        <div class="card-text text-center border border-info mt-4">${string}</div>
    </div>`;


        document.getElementById('cards').innerHTML += html
        e.preventDefault();
    }
}