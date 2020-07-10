const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

// Funcion para listar archivos de la tabla
const listarTabla = (base, limite=10) => {

    for (let i = 1; i <= limite; i++) {
       console.log(`${base} * ${i} = ${base*i}\n`)
    }
}

// Funcion para crear el archivo .txt
const crearArchivo = (base, limite=10) =>{
    return new Promise((resolve, reject) => {
        let data = ''

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`)
            return
        }

        for (let i = 1; i <= limite; i++) {
            // let multiplicacion = base * i
            // console.log(multiplicacion)
            data += `${base} * ${i} = ${base*i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) {
                reject(err);
            }else{
                resolve(`tabla-${base}-al-${limite}.txt`) 
            }
        });
        
    })
}


module.exports={crearArchivo,listarTabla}
