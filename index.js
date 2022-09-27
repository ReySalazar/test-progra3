//console.log(process.argv)
//console.log(`Hola clase de ${process.argv[2]}`);
/*const fechaProgramador = new Date(2022, 08, 13);
const fechaActual = new Date();

if (fechaActual > fechaProgramador) {
    console.log("El día del programador ya fué");
} else if (fechaActual < fechaProgramador) {
    console.log("El día del programador todavía no llegó");
} else {
    console.log("Es hoy, es hoy, es hoy");
}*/

const [dia, mes, anio] = [process.argv[2], process.argv[3], process.argv[4]]; 
const fechaIngresada = new Date(anio, mes - 1, dia);
const fechaActual = new Date();

console.log(
    fechaIngresada > fechaActual ? "la fecha aun no paso" : "la fecha ya paso"
)
// npm i date-fns-tz@1.1.1  ^ Actualizable, [sin nada] no actulaiza, ~ actualiza el minor
// git stash save -m "mensaje" ##  git stash pop - git stash apply  