$(document).ready(function(){
    
    //******** ANIMACIONES CON JQUERY ************
    
    // SINTAXIS
    
    // $(selector).animate({parametros}, velocidad, callback);
    
    // NOTAS:
    
    //  Las animaciones por defecto y estándar vienen con una velocidad de 300 milisegundos
    
    // Las animaciones para cambios de color no funcionan con Jquery
    
    // Se pueden ejecutar múltiples animaciones en un solo evento
    
    // Crear variable para el boton y la caja
    var boton = $('#boton');
    var caja = $('.caja');
    
    
    // Crear evento para el boton
    boton.on('click', function(){
        // con el método animate(), podemos animar cualquier caracteristica del div .caja
        
        //Animación 1
        caja.animate({
 //         width: '300px', 
//            opacity: '0.2'
//          width : '+=150px'
           marginLeft: '+=50px'
        }, 300, function(){
            //alert('Fin de la animación');
        });
        
        // animando colores con CSS
        //caja.toggleClass('animacion');
        
        
        //animación 2
        caja.animate({
            marginLeft: '-=50px'
        }, 300);
    });
    
});