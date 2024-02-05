// const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});
// Establece un listener para el evento 'beforeExit' del proceso. Este evento se dispara justo antes de que el proceso finalice.

process.on('exit', () => {
    console.log('Ale, el proceso ha terminado');
    setTimeout(()=>{
        console.log("Esto no se va a ver nunca");
    }, 0);
});
// Establece un listener para el evento 'exit' del proceso. Cuando el proceso termina, se ejecuta la función de callback que imprime un mensaje indicando que el proceso ha finalizado. Sin embargo, cualquier operación asíncrona programada en el evento 'exit' no se ejecutará, como se muestra aquí con el uso de setTimeout.

// process.on('')

setTimeout(()=>{
    console.log("Esto si se va a ver");
}, 0);
// Programa una tarea para ejecutarse después de un tiempo determinado (0 milisegundos en este caso). Este mensaje se imprimirá en la consola antes de que finalice el proceso.

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya, se nos ha olvidado capturar un error');
    setTimeout(()=>{
        console.log("Esto viene desde las excepciones");
    }, 0);
});
// Establece un listener para el evento 'uncaughtException' del proceso. Este evento se dispara cuando se produce una excepción no capturada en el proceso. La función de callback imprime un mensaje de error y programa una tarea para imprimir otro mensaje después de un tiempo determinado.

// Intencionadamente lanzamos un error para simular una excepción no capturada
// Cambié 'funcionQueNoExiste()' a 'funcionQueNoExiste()' para que lance un error y sea capturado
funcionQueNoExiste();
// Se lanza una función que no existe para simular una excepción no capturada.

console.log('Esto se ejecutará si el error no es capturado.');
// Si no se produce un error no capturado, este mensaje se imprime en la consola.

