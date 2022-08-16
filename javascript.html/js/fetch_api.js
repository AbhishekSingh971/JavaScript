function getElementFromString(string) {
    let div = document.createElement('div')
    div.innerHTML = string;
    return div.firstElementChild;
}

let addparamcount = 0;

//initialy hide the parametersbox
let parametersbox = document.getElementById('parametersBox');
parametersbox.style.display = 'none';

// if user clicks on jsonRadio , parametersBox hide
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('parametersBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
})

// if user clicks on paramsRadio , requestJsonBox box hide
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parametersBox').style.display = 'block';
})

// if the user clicks on the addParam button 
let addParam = document.getElementById('addParam');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="row">
                    <label for="url" class="col-sm-2 col-form-label text-info">Parameter ${addparamcount + 2}</label>
                    <div class="col-4">
                        <input id="parameterKey${addparamcount + 2}" type="text" class="form-control bg-dark text-light"
                        placeholder="Enter Parameter ${addparamcount + 2} Key">
                    </div>

                    <div class="col-4">
                        <input type="text" class="form-control bg-dark text-light" id="parameterValue${addparamcount + 2}"
                        placeholder="Enter Parameter ${addparamcount + 2} Key">
                    </div>
                    <div class="col">
                        <button id="addParam" class="btn  btn-primary deleteParam">-</button>
                    </div>
                </div>`
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
           e.target.parentElement.parentElement.remove();
        })
    }

    addparamcount++;
})

// when user click on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    let response = document.getElementById('responseJsonText');
    response.value="Please Wait...Fetching response...";

    //Fetch all the values user has entered
    let url = document.getElementById('urlField').value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    if(contentType == 'params'){
        data = {};
        for (let i = 0; i < addparamcount+1; i++) {
            if(document.getElementById('parameterKey'+(i+1))!=undefined){
                let key = document.getElementById('parameterKey'+(i+1)).value;
                let value = document.getElementById('parameterValue'+(i+1)).value;
                data[key] = value;
            }
        }
        data=JSON.stringify(data);
    }
    else{
        data = document.getElementById('requestJsonText').value;
    }

     //Log all the values in the console for debugging
     console.log(url);
     console.log(requestType);
     console.log(contentType);
     console.log(data);


    if(requestType == 'GET'){
        fetch(url,{
            method: 'GET'
        }).then(Response=> Response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        });
    }
    else{
        fetch(url,{
            method: 'POST',
            body: data,
            headers: {
                'content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(Response => Response.text())
        .then((text)=>{
            document.getElementById('responseJsonText').value = text;
        });
    }
})
