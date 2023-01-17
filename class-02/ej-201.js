// TODO: Callbacks base
// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback();
}

// callback function
function callMe() {
  console.log("I am callback function");
}

// passing function as an argument
greet("Peter", callMe);

// ejemplo de callback con map
let numbers = [1, 2, 3, 5, 6, 7, 8];

const parCallback = (num) => (num % 2 === 0 ? num : "no es par");

const pairNumbers = numbers.map(parCallback);
console.log("Callback como argumento de una funcion MAP", pairNumbers);

// TODO: Agregar MAP con el callback dentro de la funcion para que cada valor sea el doble del original

// ejemplo 2 de callbacks para llenar bebidas
// let bebidas = ["vacio", "lleno", "vacio", "Por la mitad"];
// const revisarBebidas = (arregloBeb, callback) => {
//   let bebidasFull = [];
//   for (let index = 0; index < arregloBeb.length; index++) {
//     const nuevaBebida = callback(arregloBeb[index]); // aqui llamamos al callback
//     bebidasFull.push(nuevaBebida);
//   }
//   return bebidasFull;
// };

// escribir el callback como funcion para pasarlo de argumento
// const llenarBebidas = (bebida) => {
//   if (bebida === "vacio") {
//     bebida = "lleno";
//   }
//   return bebida;
// };

// const bebidasRecargadas = revisarBebidas(bebidas, llenarBebidas);
// console.log("🚀 ~ file: ej-201.js:47 ~ bebidasRecargadas", bebidasRecargadas);

// TODO: Crear una funcion que tenga como parametro 2 num y un callback que ejecute una funcion de sumar, restar, multiplicar y dividir