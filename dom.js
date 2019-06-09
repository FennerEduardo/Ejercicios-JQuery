$(document).ready(function(){
    
    // Parent
    //Acceder al elemento padre de un tag HTML, encadenando funciones para CSS
        /*$('#tercera').parent().css({
            background: '#1b3d82'
        });*/
    
    //Parents
    // Acceder a los elementos padres de un elemento html
        /*$('#tercera').parents();*/
    
    //Children
    // Acceder a los elementos hijos
        //$('#padre').children().fadeOut(1500);
    // Acceder a uno de los elementos hijos
        //$('#padre').children('#tercera').fadeOut(1500);
    
    //Find
    //Encontrar dentro de un contenedor algún elemento
        //$('#contenedor').find('div.caja').slideUp(1000);
    
    //Siblings
    // permite seleccionar los elemertos hermanos de un selector CSS o tag html
            //$('#tercera').siblings().fadeOut(1500);
    
    // Next - Prev
    // Acceder a los elementos previos y siguientes a un elemento
        // Previo    
        /*$('#tercera').prev().css({
                background: '#000'
            });
    */
        //Siguiente
        /*$('#tercera').next().css({
                background: '#f00'
            });*/
    
        // Todos los anteriores
        $('#tercera').prevAll().css({
                background: '#000'
            });
        // Todos los siguientes
        $('#tercera').nextAll().css({
                background: '#f00'
            });
    
});