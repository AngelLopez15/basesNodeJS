const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

const crearArchivo = (base) =>{
    return new Promise((resolve, reject) => {
        let data = ''

        if(!Number(base)){
            reject(`El valor introducido ${base} no es un número`)
            return
        }

        for (let i = 1; i <= 10; i++) {
            // let multiplicacion = base * i
            // console.log(multiplicacion)
            data += `${base} * ${i} = ${base*i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err) {
                reject(err);
            }else{
                resolve(`tabla-${base}.txt`) 
            }
        });
        
    })
}


module.exports={crearArchivo}
