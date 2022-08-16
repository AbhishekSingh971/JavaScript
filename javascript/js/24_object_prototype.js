// Object literals
let obj = {
    name : "Abhi",
    channel : "redFM",
    address : "Mars"
}

function Obj(givenName){
    this.name = givenName;
}

//change prototype
// Obj.prototype.getName = function(){
//     return this.name;
// }

// Obj.prototype.setName = function (newName){
//     this.name = newName;
// } 
 
let obj2 = new Obj("harry");
console.log(obj2);