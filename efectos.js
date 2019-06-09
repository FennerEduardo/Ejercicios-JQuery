//$(document).ready(function(){
   // cuando se usan eventos onclick de Js y se llama una función para dicho evento, Jquery no puede ejecutar la función especifica.
function efecto(){
   // $(selector). efecto(velocidad, callback);
    
    //para este ejemplo se oculta la caja en 3 segundos y retorna un callback con una alerta
    //Efecto 1
            $('.caja').hide(3000, function(){
               alert('La caja se ha ocultado'); 
            });
            //$('.caja').show();
    
    // Efecto 2
           /* $('.caja').toggle(3000);*/
    
    // Efecto 3: Muestra un elemento que está oculto 
            /*$('.caja').fadeIn(1000);    */
    // Efecto 4: oculta  un elemento 
           /* $('.caja').fadeOut(1000);*/
    // Efecto 5: combinación de fadein y fadeout
           /* $('.caja').fadeToggle(1000);*/
    
    
    // Efecto 6: slide down
           /* $('.caja').slideDown();*/
    // Efecto 6: slide UP
            //$('.caja').slideUp();
    // Efecto 6: slide combinado
          //  $('.caja').slideToggle();
}
//});