// let a = "harry bhai";
// let a=undefined
// if(a!=undefined){
//     // This is for costumiz your error
//     throw new Error('this is not undefined');
// }
// else{
//     console.log('This is undefined');
// }



try {
    // null.console
    // fhfgjgjgguhg
    functionabhi();
} catch(error){          //catch print an error in the normal text form
    console.log(error);
    console.log("you have an error");
    console.log(error.name);
    console.log(error.message);
}finally {              //finally is used for when you must have to print anything even though there is an error
    console.log("finally we will run this")
}