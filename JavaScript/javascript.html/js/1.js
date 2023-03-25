let btn2 = document.getElementById("btn2")
console.log(btn2)
var abhishek = true;

btn2.addEventListener('click', ()=>{
    console.log('clicked');
    if(abhishek){
     document.getElementById("hide").style.height= "100px";
     abhishek = false;
    }
    else{
        document.getElementById("hide").style.height= "10px";
        abhishek = true;
    }
})
