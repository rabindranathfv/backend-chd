// TODO: Callbacks base
// function
function greet(name, callback) {
  console.log("Hi" + " " + name);
  callback(); // invocacion de funcion
}

// callback function
function callMe() {
  console.log("I am callback function");
}

const callMeV2 = () => {
  console.log("I am callback function VERSION 2");
};

// passing function as an argument
greet("Peter", callMe);
greet("Peter", callMeV2);
greet("Peter", () => console.log("I am callback function VERSION 3"));

// ejemplo de callback con map
let numbers = [1, 2, 3, 5, 6, 7, 8];

const parCallback = (num) => (num % 2 === 0 ? num : "no es par");
// TODO: Buscar xq no puedo llamar esta funcion con el MAP
const parCallbackV2 = (num) => {
  if (num % 2 === 0) {
    return num;
  } else {
    return "no es par";
  }
};

const pairNumbers = numbers.map(parCallback);
const pairNumbersV2 = numbers.map(parCallbackV2); // SIEMPRE RETORNA UN []
console.log("Callback como argumento de una funcion MAP", pairNumbers);
// TODO: acomodar aqui
console.log(
  "Callback como argumento de una funcion MAP pairNumbersV2",
  pairNumbersV2
);

// TODO: Agregar MAP con el callback dentro de la funcion para que cada valor sea el doble del original
const doubleNumbers = numbers.map((num) => num * 2);
console.log("🚀 ~ file: ej-201.js:46 ~ doubleNumbers", doubleNumbers);

// ejemplo 2 de callbacks para llenar bebidas
let bebidas = ["vacio", "lleno", "vacio", "Por la mitad"];
console.log("🚀 ~ file: ej-201.js:50 ~ bebidas", bebidas[2]);

const revisarBebidas = (arregloBeb, callback) => {
  let bebidasFull = [];
  // TODO: Substituir el for por un forEach
  for (let index = 0; index < arregloBeb.length; index++) {
    const nuevaBebida = callback(arregloBeb[index]); // aqui llamamos al callback
    bebidasFull.push(nuevaBebida);
  }
  return bebidasFull;
};

// escribir el callback como funcion para pasarlo de argumento
const llenarBebidas = (bebida) => {
  if (bebida === "vacio") {
    bebida = "lleno";
  }
  return bebida;
};

const bebidasRecargadas = revisarBebidas(bebidas, llenarBebidas);
console.log("🚀 ~ file: ej-201.js:71 ~ bebidasRecargadas", bebidasRecargadas);

// TODO: Crear una funcion que tenga como parametro 2 num y un callback que ejecute una funcion de sumar, restar, multiplicar y dividir
const sumarFun = (num1, num2) => num1 + num2;
const restarFun = (num1, num2) => num1 - num2;
const MultiFun = (num1, num2) => num1 * num2;
const diviFun = (num1, num2) => num1 / num2; // agregar la validacion en la diviFun

const hacerOP = (num1, num2, callback) => {
  console.log("Iniciando hacerOP");
  // TODO si es una divison revisar que no se pueda divir entre 0, todos los demas valores deben seguir funcionando igual
  let resultado = callback(num1, num2);

  return resultado;
};

const sum = hacerOP(1, 3, sumarFun);
console.log("🚀 ~ file: ej-201.js:87 ~ sum", sum);
const rest = hacerOP(10, 2, restarFun);
console.log("🚀 ~ file: ej-201.js:89 ~ rest", rest);
const multi = hacerOP(5, 5, MultiFun);
console.log("🚀 ~ file: ej-201.js:91 ~ multi", multi);
const divi = hacerOP(10, 0, diviFun);
console.log("🚀 ~ file: ej-201.js:93 ~ divi", divi);
