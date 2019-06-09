$(document).ready(function(){
   
    // .remove(): elimina un elemento con todos sus elementos hijos
    // $('#contenedor').remove();
    
    // Combinado con children elimino solo los hijos de un elemento padre
    //$('#contenedor').children().remove();
    
    //Eliminando un elemento hijo solamente 
     //$('#contenedor').children('#segunda').remove();
    
    // otro método para eliminar los hijos de un contenedor
     $('#contenedor').empty();
});