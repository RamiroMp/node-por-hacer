const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

};
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado ó pdte'

};


const argv = require('yargs')
    .command('crear', 'crea la tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'actualiza la tarea por hacer', {
        descripcion,
        completado
    })
    .command('borrar', 'borra la tarea por hacer', {
        descripcion
    })
    .help()

.argv;

module.exports = {
    argv
}


// crear comando
// comando crear 
// --descripcion -d


// comando Actualizar
// --descripcion -d
// --completado -c default true

//--help