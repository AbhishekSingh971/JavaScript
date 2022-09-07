let regex = /harry/;
// lets look into some metacharacter symbols
regex = /^harr/; //^ means expression will match if string starts with 
regex = /ry$/; // $ means expression will match if string ends with
regex = /h.rry/; // . matches any one charcters
regex = /h*rry/; // . matches any 0 or more charcters
regex = /h?rry?/; // ? after character means taht  character is optional
regex = /h\*arry/; // here * is not a metacharacter it's a character for serching

let str = "harry is harry";
let result = regex.exec(str);
console.log("The result from the exec is ", result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`the string ${str} does not matche the expression ${regex.source}`)
}