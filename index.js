const date_fns = require('date-fns');
//const {isAfter} = require('date-fns');  // otra forma de importar la libreria

const [dia, mes, anio] = [process.argv[2], process.argv[3], process.argv[4]]; 
const fechaIngresada = new Date(anio, mes - 1, dia);
const fechaActual = new Date();

console.log(
    //fechaIngresada > fechaActual ? "la fecha aun no paso" : "la fecha ya paso"
    date_fns.isAfter(fechaIngresada, fechaActual) ? "la fecha aun no paso" : "la fecha ya paso"
)
// npm i date-fns-tz@1.1.1  ^ Actualizable, [sin nada] no actulaiza, ~ actualiza el minor
// git stash save -m "mensaje" ##  git stash pop - git stash apply  