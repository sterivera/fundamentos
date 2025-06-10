const fechaActual = new Date();
let diaSemana = ahora.getDay(); 
let horaActual = ahora.getHours(); 

let horadeApertura;
let mensaje;

/* if(diaSemana===0 || diaSemana===6){
console.log("fin de semana");
horadeApertura=9;
}else{
    console.log("dia de la semana");
    horadeApertura= 11;
}

if(horaActual >= horadeApertura){
    mensaje="bienvenido, esta abierto";
}else{
    mensaje=`lo sentimos,nuestra tienda esta cerrrada. 
    ${horadeApertura} horas`;
} */

horaApertura([0,6].includes(diaSemana)) ? 9 : 11;
if (horaActual >= horadeApertura){ 
mensaje = "!bienvenido¡ Nuestra tienda esta abierta";
}else{
   mensaje = `lo sentimos, nuestra tienda esta cerrada en estos momentos. Abrimos a las ${horadeApertura} horas`;
}






/* if(horaActual >= horadeApertura){
    mensaje="bienvenido, esta abierto";
}else{
    mensaje=`lo sentimos,nuestra tienda esta cerrrada. 
    ${horadeApertura} horas`;
}
 */



mensaje = (horaActual >= horadeApertura)
             ?"bienvenido, esta abierto"
             :mensaje=`lo sentimos,nuestra tienda esta cerrrada. 
             ${horadeApertura} horas`;

             console.log(mensaje);