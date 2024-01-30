// Async/await

async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, '+ nombre);
            resolve(nombre);
        }, 5000);
    });
}


async function hablar(nombre) {
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('bla bla bla bla...');
            resolve('Hay un error');
        },1000);
    })
}


async function adios(nombre,) {
    return new Promise((resolve, reject) => {
        setTimeout(function(){
            console.log('Adios, ' + nombre);
           resolve();
        }, 1000);
    });
}
async function main () {
    let nombre = await hola('Omar');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Termina el proceso...');
}

console.log('Empezamos el proceso...');
main();

console.log('Va a ser la segunda instruccion a ejecutar');

