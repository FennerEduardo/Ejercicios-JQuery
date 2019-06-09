$(document).ready(function(){
    
    // Declaración de variables
    var contenedor = $('#contenedor');
    var contador = 1;
    var agregar = $('#agregar');
    
    // agregando el evento
    agregar.on('click', function(){
        // agregar un elemento a una variable
        var caja = $('<div></div>').attr('class', 'caja').text(contador);
        // incrementa el contador
        contador++;
        
        //Uso del metodo append() y prepend()
        //contenedor.append(caja); // agrega una caja al inicio del contenedor
        //contenedor.prepend(caja); // agrega una caja al al final del contenedor
        //contenedor.before(caja); // agrega una caja antes del del contenedor
        contenedor.after(caja); // agrega una caja después del contenedor
    });
    
});