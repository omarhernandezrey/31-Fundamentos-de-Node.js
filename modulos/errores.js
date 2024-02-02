function otraFuncion() {
    serompe();
}

function serompe() {
    let z = 0; // Debes definir la variable z aquí
    return 3 + z;
}

function seRompeAsincrona(cb) { // Eliminé el parámetro params, ya que no se estaba utilizando
    setTimeout(function() { // Eliminé cb como parámetro de la función
        try {
            let z = 0; // Debes definir la variable z aquí
            return 3 + z;
        } catch (err) {
            console.log('Error en mi función asincrónica');
            cb(err);
        }
    });
}

try {
    /* otraFuncion(); */
    seRompeAsincrona(function (err) {
        console.log(err.message);
    });
} catch (err) {
    console.error('Algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto está aquí al final... ');
