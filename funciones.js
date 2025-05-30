//funcion sin retorno
function saludar() {
    console.log ("hola desde la funcion saludar");
}

saludar(); //estoy invocando a la funcion saludar

//funcion con retorno
function sumar (a , b){
    return a + b;
}

const total = sumar (10 , 20); // llamar a la funcion sumar
console.log('total: ', total); //imprimir el resultado de la suma



//funciones expresada con una constante
const mostrarfecha = function()  {
    let fecha = new Date();
    console.log('fecha', fecha);
}

mostrarfecha();

const multiplicar = function(a,b) {
return a * b;
}
const resultado = multiplicar(10 , 20); // llamar a la funcion multiplicar
console.log('resultado:', resultado); // imprimir el resultado de la multiplicacion


//funciones  flecha sin retorno
const deciradios = () => {
    console.log('hasta el martes profe');
}
deciradios();

//con retornos
const dividir = (a,b) => {
    if(b===0) {
        return 'no se puede dividir entre 0'
    }
    return a / b;
}

const resultadodivision = dividir(10 , 2);
console.log('resultadodivision: ' , resultadodivision);
