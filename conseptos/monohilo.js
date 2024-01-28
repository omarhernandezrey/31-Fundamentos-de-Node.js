// Imprime "Hola mundo" en la consola
console.log('Hola mundo');

// Inicialización de la variable i
let i = 0;

// Función que se ejecuta cada segundo
setInterval(function() {
    // Imprime el valor de i en la consola
    console.log(i);
    // Incrementa el valor de i
    i++;

    // Condición para forzar un error cuando i llega a 5 (comentado para evitar el error)
    /*
    if (i ===5) {
        console.log('forzamos error');
        var a = 3 + z;
    }
    */
}, 1000);

// Imprime "Segunda Instruccion" en la consola
console.log('Segunda Instruccion');
