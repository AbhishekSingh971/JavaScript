// Your API key is: 25e77ecdcf084a499388777ec111c2fa

//initializ the news parameters
// let q=Apple,bitcoin this is the other parametner which i can use
let sources = 'bbc-news';  //we can use sources as source/countary=us 
let countary = 'us';
let apiKey = '25e77ecdcf084a499388777ec111c2fa';

//Grab the news container
let newsAccordion = document.getElementById('newsAccordion');
// Thsi is for another api
let newsAccordion1 = document.getElementById('newsAccordion1');

//create an ajax get request
const xhr = new XMLHttpRequest();
// Thsi is for another api
const xhr1 = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${countary}&apiKey=${apiKey}`, true);
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?sources=${sources}&apiKey=${apiKey}`, true);

// what to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function(element,index){
            let news = `<div class="card bg-dark text-warning">
               <div class="card-header border-info" id="heading${index}">
                   <h2 class="mb-0">
                       <button class="btn collapsed text-light" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                           <b class="text-success">${index+1} Breaking News : </b>${element['title']}
                       </button>
                   </h2>
               </div>
               <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                   data-parent="#newsAccordion">
                   <div class="card-body"><img id="img${index}" class="img rounded me-5 float-start" style="width:200px;height:auto;" src="${element.urlToImage}">
                    ${element.content}.<br><a class="link" href="${element['url']}" target="_blank">Read more here</a>
                   </div>
               </div>
           </div>`
           newshtml += news;
        })
        newsAccordion.innerHTML = newshtml;
    }
    else {
        console.log('some error occured');
    }
}
// this is for another api
xhr1.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml1 = "";
        articles.forEach(function(element,index){
            let news1 = `<div class="card bg-dark text-warning">
               <div class="card-header border-info" id="heading${index+21}">
                   <h2 class="mb-0">
                       <button class="btn collapsed text-light" type="button" data-bs-toggle="collapse"
                           data-bs-target="#collapse${index+21}" aria-expanded="false" aria-controls="collapse${index+21}">
                           <b class="text-success">${index+1} Breaking News : </b>${element['title']}
                       </button>
                   </h2>
               </div>
               <div id="collapse${index+21}" class="collapse" aria-labelledby="heading${index+21}"
                   data-parent="#newsAccordion1">
                   <div class="card-body"><img id="img${index+21}" class="img rounded me-5 float-start" style="width:200px;height:auto;" src="${element.urlToImage}">
                      ${element.content}.<br><a class="link" href="${element['url']}" target="_blank">Read more here</a>
                   </div>
               </div>
           </div>`
           newshtml1 += news1;
        })
        newsAccordion1.innerHTML = newshtml1;
    }
    else {
        console.log('some error occured');
    }
}

xhr.send();
// Thsi is for another api
xhr1.send();