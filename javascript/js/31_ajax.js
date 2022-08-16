window.onload = function(){
let fetchBtn = document.getElementById('fetchBtn');
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler(){
    console.log('you have clicked the fetchbtn');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', '31.txt', true);   //1 part:get for only get the information and post for we give some data and get information     3 part: true for asyncronous(non-blocking) and false for syncronous(blocking)

    //This is for Post Request
    // xhr.open('POST', 'http://dummy.restapiexample.com/api/v1/create', true);
    // xhr.getResponseHeader('content-type', 'application/json');

    //what to do on progress and on load (these are optional)
    xhr.onprogress = function(){
        console.log('On Progress');
    }

    // it shows the every status in number(0-4)
    // xhr.onreadystatechange = function(){
    //     console.log('ready state is', xhr.readyState);
    // }

    // onload shows the status no. 4 which means 'opretion is done'
    xhr.onload = function(){
        if(this.status===200){
        console.log(this.responseText);
        // This three line are not neccessary because i added it
        // let container = document.querySelector('.container');
        // console.log(container);
        // container.innerText = this.responseText;
    }
    else{
        // alert('Sorry! some error occured');
        console.error('Sorry! some error occured');
    }
}
    //send the request
    // params = `{"NAME":"test33994","salary":"1234","age":"23"}`  //this params variable written with the post method remove it to use get Request
    // xhr.send(params);   //uncomment for post Request
    xhr.send();           //this for get
    console.log('this is done');
}

let populate = document.getElementById('Populate');
populate.addEventListener('click', popHandler);

function popHandler(){
    console.log('you have clicked the populate');

    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);   //1 part:get for only get the information and post for we give some data and get information     3 part: true for asyncronous(non-blocking) and false for syncronous(blocking)

    // onload shows the status no. 4 which means 'opretion is done'
    xhr.onload = function(){
        if(this.status===200){
        let obj = JSON.parse(this.responseText);
        console.log(obj);
        let list = document.getElementById('list');
        str="";
        for(key in obj){
            str += `<li>${obj[key].employee_name}</li>`;
        }
        list.innerHTML = str;
    }
    else{
        // alert('Sorry! some error occured');
        console.error('Sorry! some error occured');
    }
}
    //send the request
    xhr.send();           //this for get
    console.log('this is done fetching employees!');
}

}