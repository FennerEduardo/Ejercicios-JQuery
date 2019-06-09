$(document).ready(function(){
   // Declarando las variables de los elementos del DOM
    var nombre = $('#nombre');
    var titulo = $('#titulo');
    var enlace = $('#enlace');
    var parrafo = $('#parrafo');
    
    //titulo.text('Encabezado modificado'); //Permite modificar el texto denro de un elemento html
    titulo.html('<u>Encabezado modificado</u>');// permite agregar elementos html y contenido en otro elemento html
    
    //Cambiar el contenido de un elemento HTML con un input tipo txto
    nombre.on('change', function(){
        titulo.text(nombre.val()); // el método val nos permite acceder al valor escrito en el input
    });
    
    // Cambiar un  atributo y contenido html
    enlace.text('fenner.abrilxvi.com');
    enlace.attr('href', 'https://fenner.abrilxvi.com');
    
    // Cambiar varios atributos de un elemento html
    enlace.attr({
        'class': 'azul',
        'target': '_blank'
    });
    
});