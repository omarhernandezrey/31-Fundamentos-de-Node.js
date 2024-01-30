// promesas

function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 5000);
    });
}


function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla...');
            resolve(nombre);
        },1000);
    })
}


function adios(nombre,) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios, ' + nombre);
           /*  resolve(); */
           reject('Hay un error')
        }, 4000);
    });
}

// ----
console.log('Iniciando el proceso');

hola('Omar')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminsdo el proceso');
    })
    .catch(error => {
        console.log('Ha habido un ERROR');
        console.error(error);
    })