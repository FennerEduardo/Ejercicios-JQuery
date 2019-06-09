$(document).ready(function(){
    
    //***** CALLBACKS *******
    
    //Son funciones que se ejecutan luego de una acción, como en el ejemplo siguiente, donde se envia una alerta con un saludo después de la animación. 
    
    // Los callbacks se pueden poner como en el ejemplo llamando una función, o creando una función anonima como en el parametro del método ready.
    
    // Creando variables de nuestros elementos
    var ejecutar = $('#ejecutar');
    var caja = $('.caja');
    
    //Crear función que va a servir como callback
    function saludo(){
        alert('Saludos');
        caja.slideDown(1000);
    }
    
    ejecutar.on('click', function(){
        caja.slideUp(1000, saludo);
    });
    
//  ejecutar.on('click', function(){
//    
//      caja.slideUp(300);
//      alert('Animación Iniciada');
//      caja.slideDown(300);
//    });
    
});