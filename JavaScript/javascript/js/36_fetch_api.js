let myBtn = document.getElementById('myBtn');
let content = document.getElementById('content');

// function getData(){
//     console.log("started getData");
//     url = "31_36.txt";
//     fetch(url).then((response)=>{
//         console.log("inside first then");
//         return response.text();
//     }).then((data)=>{
//         console.log("inside Second then");
//         console.log(data);
//     })
// }


// function getData(){
//     url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }

function postData(){
    url = "https://dummy.restapiexample.com/api/v1/create";
    data ='{"name":"abhi98e9893","salary":"123","age":"23"}';
    params = {
        method : 'post',
        headers : {
            'content-type': 'application/json'
        },
        body: data  // if you need JSON.stringify
    }
    fetch(url, params).then(response=>response.json()).then(data=>console.log(data))
}

// console.log("Before running get Data");
// getData();
// console.log("After running get Data");
postData();