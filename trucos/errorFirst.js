const { callbackify } = require("util")
const { Z_ASCII } = require("zlib")

function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z
            callback(null, a)
        }catch (e) {
            callback(e)
        }
    }, 1000)
}

    asincrona(function (err, dato) {
        if (err) {
            console.error('Tenemos un error');
            console.error(err)
            return false; 
            //throw err; No va a funcionar 
        }
        console.log('Todo ha ido bien, mi data es', dato);
    })

