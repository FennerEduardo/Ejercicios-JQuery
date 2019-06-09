$(document).ready(function(){
    // Acceder al botón y que realice un callback o función anónima
//        $('#boton').click(function(){
//            alert('Hola');
//        });
    
    // Crear variable con la ubucación del boton para usar en el código
    var boton = $('#boton');
    var desactivar = $('#desactivar');
    
    
//***** EVENTO CON FUNCIÓN *********
    // función de saludos en un alert
//    function saludo(){
//        alert('Saludos');
//    }
    
    // ejecutar función saludo() al darle click al botón
        //boton.click(saludo);

// ******** EVENTO CON FALLBACK *******
    // FALLBACK: Es una función anónima que solo se va a ejecutar cuando se dé el evento.
    
    // Cuando se pasa el mouse sobre el boton va a cambiar el color de fondo del body
    
//        boton.on('mouseenter', function(){
//            document.body.style.background = '#008';
//        });
    
    // Cuando se retira el mouse sobre el boton va a cambiar el color de fondo del body
//        boton.on('mouseleave', function(){
//            document.body.style.background = '#fff';
//        });

// *********** ELIMINAR EVENTOS **********
    
    //Creando evento para el boton de ejecutar
//    boton.on('click', function(){
//       alert('Saludos') ;
//        console.log('Saludos');
//    });
//    
//    // creando un evento que elimina el evento anterior
//    desactivar.on('click', function(){
//        boton.off('click');
//        console.log('Botón de ejecutar desactivado');
//    });
//    
// ******** PREVINIENDO EL COMPORTAMIENTO DE LOS ENLACES *******
    // desactiva el enlace 
    $('a').on('click', function(e){
        e.preventDefault();
        alert('Link desactivado');
    } );
    
    
    
});