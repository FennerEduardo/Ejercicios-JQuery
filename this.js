$(document).ready(function(){
    // cambiando clases con la palabra reservada this
    $('.caja').on('click', function(){
        //$('.caja').toggleClass('color'); // selecciona todas las cajas
        $(this).toggleClass('color'); // selecciona solo la caja a la que le doy click
    });
    
});

// toggleClass: permite alternar las clases cuando se ejecute el evento.