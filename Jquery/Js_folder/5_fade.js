$(document).ready(function(){
    $('#fadein').click(function(){
        $('#div1').fadeIn()
    })
    $('#fadeout').click(function(){
        $('#div1').fadeOut()
    })
    $('#fadetoggle').click(function(){
        $('#div1').fadeToggle()
    })
    $('#fadeto').click(function(){
        $('#div1').fadeTo(2000, 0.14)
    })
})