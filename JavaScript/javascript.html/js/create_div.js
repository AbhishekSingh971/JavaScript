window.onload = function () {
    let name = 'Abhishek';
    let html = `hello ${name} <br>`;

    let ele = document.createElement('div');
    let text = document.createTextNode('this is the created node');
    ele.className = 'createdclass';
    ele.id = 'createdid';
    ele.appendChild(text);
    // ele.innerhtml = `<b>hello this is created list</b>`;

    let ul = document.body;
    ul.appendChild(ele);
    console.log(ele);
}