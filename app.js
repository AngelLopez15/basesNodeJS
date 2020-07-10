// App para crear txt con las tablas de multiplicar y guardarlas en una carpeta
// haciendo uso de require de node

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar")
const { arch } = require("os")
const { error } = require("console")

const argv = require('yargs')
    .command('listar', 'impreme en consola la tabla de multiplicar',{
        base:{
            demand:true,
            alias:'b'
        },
        limite:{
            alias:'l',
            default:10
        }
    })
    .command('crear', 'genera un archivo con la tabla de multiplicar',{
        base:{
            demand:true,
            alias:'b'
        },
        limite:{
            alias:'l',
            default:10
        }
    })
    .help()
    .argv

// Para acceder al arreglo donde el argv almacena las entradas
let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo=>console.log(`Archivo creado: ${archivo}`))
            .catch(error => console.log(error))
        break;
    default:
        console.log('Opcion no valida')
        break;
}

