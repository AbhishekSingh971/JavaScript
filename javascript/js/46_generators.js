// when we need a big array than we use it because in this we don't need to store the array we just yield it in run time

function * numbersGen(){
    let i = 0;
    
    //yield 1;
    //yield 2;
    //yield 3;
    //yield 4;

    //another way
    while(true){
        yield i++;
        // yield (i++).toString;
    }
}

const gen = numbersGen();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);