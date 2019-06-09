// Acceder al documento html y cuando cargue completamente ejecute una función 

/*
Sintaxis de JQuery

Su usa el dólar, luego un selector y por ultimo la acción a ejecutar

$(selector).accion();

        $ - Indicamos que vamos acceder a jquery
        selector - Accedemos al elemento que queremos trabajar
        acción - Lo que queremos hacer con el elemento seleccionado

Ejemplo:
*/


$(document).ready(function(){
    // Ventana de alerta
    alert('aprendiendo Jquery');
    
    //Ocultando el H
    $('h1').hide();
});


// ---> Forma rápida de acceder a Jquery y el dom listo
$(function(){
    //Código a ejecutar
});

