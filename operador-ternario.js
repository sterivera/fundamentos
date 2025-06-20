 const fechaActual=new Date();
let diaSemana=fechaActual.getDay();
let horaActual=fechaActual.getHours();

let horaApertura;
let horaCierre=18;
let mensaje;

diaSemana=0;
horaActual=9;

console.log("fecha y hora actual: ", fechaActual);
console.log("dia actual: ", diaSemana);
console.log("hora actual: ", horaActual);
// if(diaSemana==0||diaSemana==6){
//     console.log("Fin de semana");
//    horaApertura=9;
// }
// else{
//     console.log("Dia de semana");
//     horaApertura=11;
// }

horaApertura=([0,6].includes(diaSemana))?9:11;
// if([0,6].includes(diaSemana)){
//     console.log("Fin de semana");
//    horaApertura=9;
// }
// else{
//     console.log("Dia de semana");
//     horaApertura=11;
// }

mensaje=(horaActual>=horaApertura)?"¡Bienvenido! Nuestra tienda está abierta.":"Lo sentimos, nuestra tienda está cerrada en este momento. Abrimos a las "+horaApertura+ "horas";
// if(horaActual>=horaApertura){
//     mensaje="¡Bienvenido! Nuestra tienda está abierta.";
// }else{
//     mensaje="Lo sentimos, nuestra tienda está cerrada en este momento. Abrimos a las "+horaApertura+ "horas";
// }
console.log(horaApertura, mensaje);