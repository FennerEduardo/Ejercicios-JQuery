$(document).ready(function(){
    
    // seleccionar el primer elemento de una clase
//        $('.caja').first().css({ background: '#f00'});
//        $('.caja').last().css({ background: '#000'});
    
    // seleccionar cualquier elemento dentro de un conjunto con la misma clase
//        $('.caja').eq(1).css({ background: '#000'}); // selecciona un solo elemento
    
    
    // Seleccionar todos los elementos bajo un críterio
        //$('.caja').filter('#segunda').css({ background: '#f9a03f'}); // este permite seleccionar varios elementos con la misma clase
    
    // Seleccionar todas las cajas menos una 
        $('.caja').not('#segunda').css({ background: '#f9a03f'});
    
});