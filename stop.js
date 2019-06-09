$(document).ready(function(){
    
    // Crear variables con los botones
    var ejecutar = $('#ejecutar');
    var parar = $('#parar');
    var caja = $('.caja');
    
    //Animación para el boton de ejecutar
    ejecutar.on('click', function(){
        
        caja.animate({
            marginLeft: '500px'
        }, 5000);
        
        caja.animate({
            marginLeft: '0px'
        }, 5000);
        
    });
    
    // detener la animación 
    parar.on('click', function(){
        // el método stop elimina solo una animación sino se le pasan los parametros
        //. stop(limpiarAnimaciones, Saltar al final)
        caja.stop(true, false);
    });
    
    
});