$(document).ready(function(){
    
    var titulo = $('#titulo');
    var info = $('#info');
    
    //obtener el ancho de un elemento
    info.append('Ancho: '+ titulo.width() + '<br>');
    
    //Calcular el ancho más el padding
    info.append('Ancho Interno: '+ titulo.innerWidth() + '<br>');
    
    // Calcular el ancho+el padding + elborde
    info.append('Ancho Externo: '+ titulo.outerWidth() + '<br>');
    
    //Calcular el ancho+ padding+borde+margin
    info.append('Ancho Externo: '+ titulo.outerWidth(true) + '<br>');
    
// ***************** Calculo de alto ********************///
    
    //Calcular el alto de un elemento
    info.append('Alto: '+ titulo.height() + '<br>');
    
    //Calcular el alto de un elemento + el padding
    info.append('Alto interno: '+ titulo.innerHeight() + '<br>');
    
    //Calcular el alto de un elemento + el padding + el borde
    info.append('Alto externo: '+ titulo.outerHeight() + '<br>');
    
    //Calcular el alto de un elemento + padding + borde + margin
    info.append('Alto: '+ titulo.outerHeight(true) + '<br>');
});