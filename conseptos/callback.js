function hola(nombre, miCallback) {
    setTimeout(function(){
        console.log('Hola '+ nombre); // Hola Omar (después de 5 segundos)
        miCallback(nombre);
    }, 5000);
}

function adios(nombre, otroCalback) {
    setTimeout(function(){
        console.log('Adios ' + nombre); // Adios Omar (después de 4 segundos)
        otroCalback();
    }, 4000);
}

console.log('Iniciando proceso...'); // Iniciando proceso...
hola('Omar', function (nombre) {
    adios (nombre, function() {
        console.log('Proceso finalizado...') // Proceso finalizado... (después de 9 segundos)
    })
});

/* 
hola('Omar', function() {})
adios('Omar', function() {}) */
