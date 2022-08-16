// Pretend that this response is coming from the server
const students = [
    {name: "abhi", subject: "javaScript"},
    {name: "rohan", subject: "Machine Learning"}
]

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            const error= false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    });
}
function getStudents(){
setTimeout(function(){
    let str = "";
    students.forEach(function(student){
        str += `<li>${student.name}</li>`;
    });
    document.getElementById('students').innerHTML = str;
}, 1000);
}

let newStudent = {name: "Rahul", subject: "Python"}
enrollStudent(newStudent).than(getStudents).catch(function(){
    console.log('some error occured');
});

// function inside then is ran as = resolve()
// function inside catch is ran as = rject()