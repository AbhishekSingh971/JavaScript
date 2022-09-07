// Utility functions:
// 1. Utility function to get element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}

// initialize no of parameters
let addedParamCount = 0;

// Hide the parameter box initially
let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display = "none";

// if the user clicks on params box, hide the json box
let paramsRadio = document.getElementById('paramsRadio');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = "none"
    document.getElementById('parametersBox').style.display = "block"
})

// if the user clicks on json box, hide the params box
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = "block"
    document.getElementById('parametersBox').style.display = "none"
})

// if the user clicks on + button , add more parameters
let addparam = document.getElementById('addParam');
addparam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = `<div class="row mb-3">
                    <label for="url" class="col-sm-2 col-form-label text-info">Parameter ${addedParamCount + 2}</label>
                    <div class="col-4">
                        <input type="text" class="form-control bg-dark text-light" id="parameterKey${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                    </div>
                    <div class="col-4">
                        <input type="text" class="form-control bg-dark text-light" id="parameterValue${addedParamCount + 2}" placeholder="Enter Parameter ${addedParamCount + 2} Key">
                    </div>
                    <div class="col">
                        <button id="addParam" class="btn  btn-primary deleteParam">-</button>
                    </div>
                </div>`;
    // convert the element string to DOM node
    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    // add an evenlistener to remove the parameter on clicking - button
    let deleteParam = document.getElementsByClassName('deleteParam');
    for (item of deleteParam) {
        item.addEventListener('click', (e) => {
            e.target.parentElement.parentElement.remove();
        })
    }

    addedParamCount++;
})

// if the user clicks on submit button
let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    // show please wait in the response box to request patience from the user
    // document.getElementById('responseJsonText').value = "Please Wait.. Fetching response...";
    //This is for prism library
    document.getElementById('responsePrism').innerHTML
        = "Please Wait.. Fetching response...";

    //Fetch all the values user has entered
    let url = document.getElementById("urlField").value;
    let requestType = document.querySelector("input[name='requestType']:checked").value;
    let contentType = document.querySelector("input[name='contentType']:checked").value;

    //if user has used params option instead of json, collect all the parameters in an object
    if (contentType == 'params') {
        data = {};
        for (let i = 0; i < addedParamCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let value = document.getElementById('parameterValue' + (i + 1)).value;
                data[key] = value;
            }
        }
        data = JSON.stringify(data)
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }

    //Log all the values in the console for debugging
    console.log(url);
    console.log(requestType);
    console.log(contentType);
    console.log(data);

    //  if the request type is post, create incoke fetch api to create a post request
    if (requestType == 'GET') {
        fetch(url, {
            method: 'GET'
        })
        .then(Response => Response.text())
        .then((text) => {
            // document.getElementById('responseJsonText').value = text;

            //This is for prism library
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }
    else {
        fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(Response => Response.text())
            .then((text) => {
                // document.getElementById('responseJsonText').value = text;
                //This is for prism library

                //This is for prism
                document.getElementById('responsePrism').innerHTML = text;
                Prism.highlightAll();
            });
    }
})