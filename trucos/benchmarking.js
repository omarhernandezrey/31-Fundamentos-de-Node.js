console.time('todo');
let suma = 0;
console.time('Bucle')
for (let i = 0; i< 1000000000; i++) {
    suma += 1;
}
console.timeEnd('Bucle');
let suma2 = 0;
console.time('bucle_2')
for (let j = 0; j< 10000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle_2');
console.time('asincrono')
console.log('Empieza el proceso asincrono');
asincrona()
    .then(()=> {
        console.timeEnd('asincrono');
    })
console.timeEnd('todo');
function asincrona() {
    return new Promise ( (resolve)=> {
        setTimeout(()=>{
            console.log("Termino el proceso asincrono");
            resolve();
        })
    })
}