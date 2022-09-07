// Promise : Best video on promises
// -resolved 
// -reject
// -pending

function func1(){
    return new Promise(function(resolved,reject){
        setTimeout(()=>{
            const error = true;
            if (!error) {
                console.log('function:your promise has been resolved');
                resolved();
            }
            else{
                console.log('function:your promise has not been resolved');
                reject('Sorry! not fulfilled');
            }
        }, 2000);
    })
}

func1().then(function(){
    console.log('Abhi : Thanks for resolving');
}).catch(function(error){
    console.log('Abhi : Very bad bro. Reason : '+ error)
})