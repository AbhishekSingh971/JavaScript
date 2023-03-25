//regular expression :
//Basic functions
//Metacharacters symbols

//const regex = /^h/i;

//character sets - we use []
let regex = /h[a-z]rry/;  //can be any character from a to z
regex = /h[aty]rry/; // can be an a , t or y
regex = /h[^aty]rry/; // cannot be any of a, t or y
regex = /h[^aty]rr[aYu]/; //cannot be any of a ,t, or y + can be a,u or y
regex = /h[a-zA-Z]rr[yu0-9][0-9]/; //we can have as many character sets as we want

//quantifiers - we use{}
regex = /har{2}y/; //r can occur exactly 2 times
regex = /har{0,2}y/;  //r can occur exactly 0 to 2(0 or 1 or 2) times

//Groupings - we use paranthesis for groupings()
regex = /(har){2}([0-9]r){3}/;

//const str = "hirry9 bhai";
// let s = "harrry bhai";       // This is for quantifiers
// let s = "harhar1r4r5r bhai"; // This is for grouping


let s="hello harry is here, why are you looking there";

if(regex.test(s)){
    console.log('there is a match in a string');
}
else{
    console.log('there is not a match in a string');
}