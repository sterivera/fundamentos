console.log("for");
 let marcas_celulares = ['Samsung' , 'Nokia' , 'Honor' , 'Apple' , 'Motorola'];

///for tradicional
console.warn("--for tradicional--");
 for(let i = 0; i<marcas_celulares.length; i++ ){
    console.log(marcas_celulares [i]);
 }

 //for in
 console.warn("--for in--");
 for(let i in marcas_celulares){
    console.log(marcas_celulares [i]);
 }

 //for of
console.warn("--for of--");
 for(let marcaCelular of marcas_celulares){
    console.log(marcaCelular);
 };

 //foreach 
 console.warn("--forEach--");
 marcas_celulares.forEach(function(marcaCelular, index){
console.log(`${index} - ${marcaCelular}`);
 });

 console.warn("--forEach simple--")
  marcas_celulares.forEach(()=> {
   console.log("Hola Mundo");
  });