// $('button').click(func1);
// function func1(){
    // $('#div1').css('width','600px');
// }
             
             
// $('document').ready(function (){
//     $("#btn").dblclick(function(){
//     $("#div1").css('width','800px');
// })
// });


$('document').ready(function (){
    $("#div1").mouseenter(function(){
    $("#div1").css('width','800px');
})
});

$('document').ready(function (){
    $("#div1").mouseleave(function(){
    $("#div1").css('width','400px');
})
});