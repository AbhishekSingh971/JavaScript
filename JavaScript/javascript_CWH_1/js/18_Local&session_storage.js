//Add a key-value pair inside local storage
// localStorage.setItem('name', 'Abhi');
// localStorage.setItem('name2', 'rohan');
// localStorage.setItem('name3', 'aman');

//it clear the entire local storage
// localStorage.clear();

//its remove the particular item
// localStorage.removeItem('name2');

//Retrieve an item from the local storage
// let name = localStorage.getItem('name');
// console.log(name);


// limitation : we can't use array directly in local storage, so
// let array = ['adrak', 'pyaz', 'bhindi'];
// localStorage.setItem('sabzi', JSON.stringify(array));

// let name = JSON.parse(localStorage.getItem('sabzi'));
// console.log(name);

//Session have the same function like local storage , it is valid till you not close the webpage
// sessionStorage.setItem('sessionName', 'Abhi');
// sessionStorage.setItem('sessionName2', 'Rohan');
// let array = ['adrak', 'pyaz', 'bhindi'];
// sessionStorage.setItem('sessionsabzi', JSON.stringify(array));

// let names = JSON.parse(sessionStorage.getItem('sessionsabzi'));
// console.log(names);
// console.log(sessionName);