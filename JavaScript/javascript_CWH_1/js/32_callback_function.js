// Pretend that this response is coming from the server
const students = [
    {name: "abhi", subject: "javaScript"},
    {name: "rohan", subject: "Machine Learning"}
]

function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        callback();
    }, 3000);
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
enrollStudent(newStudent, getStudents);
getStudents();
