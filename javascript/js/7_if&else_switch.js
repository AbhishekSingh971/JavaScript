const age = 23;
if (age == 23) {
    console.log('age is 23');
}
else if(age == 65){
    console.log('age is 65');
}
else{
    console.log('age is not 23')
}

//2.
const vari = 34;
if (typeof vari !== 'undefined') {
    console.log('vari is defined');
}
else{
    console.log('vari is not defined')
}

//3.
const doesDrive = false ;
if(doesDrive && age>18){
    console.log("You can drive");
}
else{
    console.log("You cannot drive");
}

//4.
console.log(age==23? 'age is 23': 'age is not 23');

//Switch
switch(age){
    case 18:
        console.log("You are 18");
        break;
    case 23:
        console.log("You are 23");
        break;
    case 34:
        console.log("You are 34");
        break;
    defualt:
        console.log("You are unknown age");
        break;
}