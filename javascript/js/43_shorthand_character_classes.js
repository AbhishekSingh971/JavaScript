//character classes
let regex = /\w rry/;         //  word character - __ or alphabat or numbers 
regex = /\w+d1r/;             //  \w+ means one or more word characters
regex = /\wbhai/;             //  non word character like space
regex = /\w+bhai/;            //  \w+ means more than one non word character
regex = /number \d999/;       //  \d means digit 
regex = /number \d+999/;      //  \d+ means more than one digit 
regex = /\D999/;              //  \D means non-digit 
regex = /\D+999/;             //  \D+ means more than one non-digit 
regex = /\ska number/;        //  \s means whitespace character 
regex = /\s+ka number/;        //  \s+ match more than one whitespaces
regex = /\Ska number/;        //  \S means non-whitespace character 
regex = /\S+ka number/;        //  \S+ match more than one non-whitespaces
regex = /4r5r\b/;        //  word boundary

//Assertions
regex = /h(?=y)/;           
regex = /h(?!y)/;

let str = "harh7rd1r4r5r %%$@bhai harry   ka number 89999harry99999";

let result = regex.exec(str);
console.log("The result from the exec is ", result);

if(regex.test(str)){
    console.log(`the string ${str} matches the expression ${regex.source}`)
}
else{
    console.log(`the string ${str} does not matche the expression ${regex.source}`)
} 