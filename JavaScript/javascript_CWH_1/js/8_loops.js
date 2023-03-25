let name = "Abhisehk"
let html = `<h1 class="bg-dark text-light text-center">Hello ${name} </h1>
<h2>Welcome to out website</h2>

<nav class="navbar navbar-expand-md navbar-dark bg-dark mt-3">
    <div class="container-fluid">
      <a class="navbar-brand text-danger" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row justify-content-between">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item text-warning" href="#">Action</a></li>
              <li><a class="dropdown-item text-warning" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item text-warning" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>

    <div class="container-fluid">
    <p>this our first website by javascript</p>
    </div>

    <div class="container d-grid gap-2 text-center text-uppercase bg-dark text-light">
    <span>Name : </span>
    <input type="text" name="name" placeholder="Name">
    <span>Email : </span>
    <input type="Email" name="email" placeholder="@gmail.com">
    <span>Password : </span>
    <input type="password" name="password" placeholder="Password">
    </div>

    <br>

    <div class="btn-group-md container rounded-pill ms-auto bg-dark pt-3 pb-3">
    <button class="btn btn-block btn-outline-warning text-light rounded-pill btn-info" type="submit" name="submit">submit</button>
    <button class="btn btn-block btn-outline-warning flex-end text-light rounded-pill btn-info" type="reset" name="Reset">Reset</button>
    <span class="spinner-border text-warning float-end"><script>console.log('helo')</script></span>
    </div>`

document.body.innerHTML = html;

// General loops :for, while, do-while
// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// let j = 0;
// while (j < 10) {
//   console.log(j);
//   j++;
// }

// let k = 0;
// do {
//   if (k===5) {
//     k++;
//     continue;
//   }
//   console.log(k);
//   k++;
// } while (k < 10)


//Example
// let arr=[2,4,5,6,7,9];

// for(let i=0;i<arr.length;i++){
//   const elemenet=arr[i];
//   console.log(elemenet);
// }

// arr.forEach(function(element,index,array){
//    console.log(element,index,array);
// })

//Example
// let obj={
//   name:"Abhishek",
//   age: 87,
//   type: "programmer",
//   os: "ubuntu"
// }

// for(let key in obj){
//   console.log(`The ${key} of object is ${obj[key]}`)
// }
console.log('done');