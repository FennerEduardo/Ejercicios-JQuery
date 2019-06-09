$(document).ready(function(){
    // Ocultar encabezado
    $('h1').hide();
    // ocultar dos selectores a la vez
    $('h1, h2').hide();
    
    //Acediendo a una clase de CSS
    $('.encabezado').show();
    
    // Acceder a un elemento que está dentro de una clase
    $('.primero a').hide();
/*
    //Accediendo  a un ID de CSS
    $('#primero').hide();
    // se puede acceder a un elemento con id
    $('p#primero').hide();
    // y tambien a un elemento con clase
    $('h2.encabezado').hide();*/
});