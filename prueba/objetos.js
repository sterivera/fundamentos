let valoreeentrada = {
    primera: 'Domingo',
    segunda: 'Lunes',
    tercero: 'Martes',
    cuarto: 'Miercoles',
    quinto: 'Jueves',
    sexto: 'Viernes',
    septimo: 'Sabado'
};

let arreglovaloreeentrada = Object.values(valoreeentrada);
console.log(arreglovaloreeentrada [1]);
console.log(arreglovaloreeentrada [2]);
console.log(arreglovaloreeentrada [4]);
console.log(arreglovaloreeentrada [9]);
/* Valor de entrada de 1, 2, 4 y 9 */



//respuesta alternativa de la practica 29/05/2025
const diassemana = {
    0: 'Domingo',
    1: 'Lunes',
    2: 'Martes',
    3: 'Miercoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sabado'
};
/* const dia = 3; */
console.log(diassemana [1] || "dia no valido");
console.log(diassemana [2] || "dia no valido");
console.log(diassemana [4] || "dia no valido");
console.log(diassemana [9] || "dia no valido");


//mtodo crut