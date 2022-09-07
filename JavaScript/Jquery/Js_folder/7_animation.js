$(document).ready(function(){
    $('#1h').click(function(){
        let div = $('#div1');
        div.animate({width: '400px',opacity: 'o.5'}, '1500')
        div.animate({width: '400px',height: '400px',opacity: 'o.10'}, '1500')
        div.animate({width: '200px',height: '400px',opacity: 'o.15'}, '1500')
        div.animate({width: '200px',height: '200px',opacity: 'o.19'}, '1500')
    })
})