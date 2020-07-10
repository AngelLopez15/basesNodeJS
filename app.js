// App para crear txt con las tablas de multiplicar y guardarlas en una carpeta
// haciendo uso de require de node

const { crearArchivo } = require("./multiplicar/multiplicar")
const { arch } = require("os")
const { error } = require("console")

const base = 'abc'

crearArchivo(base)
    .then(archivo=>console.log(`Archivo creado: ${archivo}`))
    .catch(error => console.log(error))