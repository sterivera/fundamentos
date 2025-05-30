let marcascelulares = {
    primera: 'samsung',
    segunda: 'Apple',
    tercero: 'huawei'
};

marcascelulares.cuarta = 'Xiami'; //forma 1 de agregar elemento al objeto
marcascelulares['quinta'] = 'Motorola'; //forma 2 de agregar elemento al objeto

//console.log(marcascelulares); //imprimir el objeto

//recorrer todas las claves y valores del onjeto
for(let clave in marcascelulares) {

//console.log(`$(clave):${marcascelulares[clave]}`);
}

//convertir el objeto a un arreglo
let arreglomarcascelulares = Object.entries(marcascelulares);
console.log(arreglomarcascelulares); //imprimir el arreglo

let arreglo2marcascelulares = Object.values(marcascelulares);
console.log(arreglo2marcascelulares); //imprimir el arreglo

