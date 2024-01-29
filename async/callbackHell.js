// Definición de la función 'hola', que muestra un saludo después de un tiempo determinado
function hola(nombre, miCallback) {
    setTimeout(function(){
        console.log('Hola '+ nombre); // Imprime el saludo con el nombre especificado
        miCallback(nombre); // Llama a la función de retorno de llamada, pasando el nombre como argumento
    }, 5000); // Espera 5 segundos antes de ejecutar la función
}

// Definición de la función 'hablar', que imprime un mensaje después de un tiempo determinado
function hablar(callbacHablar) {
    setTimeout(function() {
        console.log('bla bla bla bla...'); // Imprime un mensaje
        callbacHablar(); // Llama a la función de retorno de llamada
    },1000); // Espera 1 segundo antes de ejecutar la función
}

// Definición de la función 'adios', que despide al usuario después de un tiempo determinado
function adios(nombre, otroCalback) {
    setTimeout(function(){
        console.log('Adios ' + nombre); // Imprime el mensaje de despedida con el nombre especificado
        otroCalback(); // Llama a la función de retorno de llamada
    }, 4000); // Espera 4 segundos antes de ejecutar la función
}

// Función 'conversacion' que simula una conversación mediante llamadas a la función 'hablar' y luego 'adios'
function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function(){ // Llama a la función 'hablar'
            conversacion(nombre, --veces, callback); // Llama recursivamente a 'conversacion' hasta que 'veces' sea 0
        });
    } else {
        adios(nombre, callback); // Llama a la función 'adios' cuando 'veces' es 0
    }
}

// Inicio del proceso
console.log('Iniciando proceso...');

// Llamada a la función 'hola' para saludar al usuario
hola('Omar', function(nombre) {
    // Llamada a la función 'conversacion' para simular una conversación después de saludar
    conversacion(nombre, 3, function() {
        console.log('Proceso terminado'); // Mensaje de finalización del proceso
    });
});
