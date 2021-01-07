// required's
const { argv } = require('./config/yargs');

const { crear, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listar(argv.base, argv.limite)
            .then(result => { console.log(result); })
            .catch(err => { console.log(err); })
        break;

    case 'crear':
        console.log(argv.base, argv.limite);
        crear(argv.base)
            .then(archivo => { console.log(`Archivo creado: ${archivo}`); })
            .catch(err => { console.log(err); })
        break;
    default:
        console.log('hola!2');

        break;
}


// let argv2 = process.argv;

// console.log('Limite', argv.limite);

// let parametro = argv[2];
// let base = parametro.split('=')[1];