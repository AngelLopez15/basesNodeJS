// App para crear txt con las tablas de multiplicar y guardarlas en una carpeta
// haciendo uso de require de node

const fs = require('fs');

const base = 5
let data = ''

for (let i = 1; i <= 10; i++) {
    // let multiplicacion = base * i
    // console.log(multiplicacion)
    data += `${base} * ${i} = ${base*i}\n`
}


fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

    if (err) throw err;
    
    console.log(`El archivo de la tabla del ${base} tabla-${base}.txt ha sido creado`);
});