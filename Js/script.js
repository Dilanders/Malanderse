/*let menuHaut = document.getElementById('menuHaut');
let drop = document.getElementById('drop');
let tx = document.getElementById('tx');
menuHaut.style.height = 0 + 'px';
menuHaut.style.fontSize = 0 + 'px';
tx.style.visibility = 'hidden';
let x = 0;
let a = document.getElementById('a');
let b = document.getElementById('b');
b.style.visibility = 'hidden';
a.style.height = '5vh';
b.style.height = '0vh';
drop.addEventListener('click',()=>{
    if(x % 2 == 0){
        menuHaut.style.height = '290px';
        menuHaut.style.fontSize = 'large';
        b.style.visibility = 'visible';
        a.style.visibility = 'hidden';
        tx.style.visibility = 'visible';
        a.style.height = '0vh';
        b.style.height = '5vh';
    }
    else{
        menuHaut.style.height = 0+'px';
        menuHaut.style.fontSize = 0 + 'px';
        b.style.visibility = 'hidden';
        a.style.height = '5vh';
        b.style.height = '0vh';
        a.style.visibility = 'visible';
        tx.style.visibility = 'hidden';
    }
    x++;
})
let close = document.getElementById('close');
close.addEventListener('click',()=>{
    
})*/

$(document).ready(function() {
    var menu = $('#menu');
    cacher = $('#cacher'); afficher = $('#afficher');

    $(cacher).on('click', function() {
        $(menu).hide();
        $(this).hide();
        $(afficher).show();
    });

    $(afficher).on('click', function() {
        $(menu).show();
        $(this).hide();
        $(cacher).show();
    })
});