
// const proto = {
//     slogan : function(){
//         return `This company is the best`;
//     },
//     changeName : function(newName){
//         this.name = newName;
//     }
// }
// This create abhi object
// const abhi = Object.create(proto);
// abhi.name = "Abhishek";
// abhi.roll = "Programmer";
// abhi.changeName("AbhiSingh");
// console.log(abhi);

// This also create abhi object
// alternative syntax of line 10 - 14
// const abhi = Object.create(proto,{
//     name :{value : "Abhi", writable: true},
//     roll :{value : "Programmer"},
// })
// abhi.changeName("AbhiSingh"); //This doesn't work without writable:true 
// console.log(abhi);

function Employee(name,salary,experience){
    this.name = name;
    this.salary = salary;
    this.experience = experience;
}
//slogan
Employee.prototype.slogan = function(){
    return `This company is the best. Regards,${this.name}`;
}

let abhi = new Employee("Abhi", 34565, 87);
console.log(abhi);

function Programmer(name,salary,experience,language){
    Employee.call(this,name,salary,experience);
    this.language = language;
}
 
//Inherit the prototype//if you don't do that, Employee method not inheritat by programmer
Programmer.prototype = Object.create(Employee.prototype);

// Manually set the constructor
Programmer.prototype.constructor = Programmer;

let rohan = new Programmer("rohan",2,0,"javascript");
console.log(rohan);

