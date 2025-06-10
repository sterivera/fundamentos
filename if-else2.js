

let ahora = new Date();
let diaSemana = ahora.getDay(); 
let horaActual = ahora.getHours();    


const HORAAPERTURASEMANA = 11;
const HORAAPERTURAFINSEMANA = 9;
const HORACIERRE = 18;

 diaSemana=4;
 horaActual=12;


let horaApertura;

if (diaSemana >= 1 && diaSemana <= 5) { 

 //Lunes a viernes 
  horaApertura = HORAAPERTURASEMANA;
} else {
  // Sábado o domingo
  horaApertura = HORAAPERTURAFINSEMANA;
}


//tienda abierta
if (horaActual >= horaApertura && horaActual < HORACIERRE) {
  console.log("¡Bienvenido! Nuestra tienda está abierta.");
} 


//tienda cerrada
else {
  console.log(`Lo sentimos, nuestra tienda está cerrada en este momento. Abrimos a las ${horaApertura}:00`);
}
 




 

