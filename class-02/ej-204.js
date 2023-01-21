// TODO: DEFINIR UN FUN SUMA, SIN QUE LOS SUMANDOS SEAN 0, SI ALGUNA ES 0 SE RECHAZA CON Operacion innecesaria
const suma = (sumando1, sumando2) => {
  return new Promise((resolve, reject) => {
    if (sumando1 === 0 || sumando2 === 0) {
      reject("Operacion innecesaria");
    } else {
      resolve(sumando1 + sumando2);
    }
  });
};

// TODO: DEFINIR UN FUN RESTA, ambos valores de la resta deben ser distintos de 0, si el MINUENDO O EL SUSTRAENDO SON 0 SE RECHAZA CON Operacion innecesaria
// SI el resultado de la resta es negativo devolver rechazo 'La calculadora solo puede devolver valores positivos'
const resta = (resto1, resto2) => {
  return new Promise((resolve, reject) => {
    if (resto1 === 0 || resto2 === 0) {
      reject("Operacion innecesaria");
    } else {
      let resultadoResta = resto1 - resto2;
      if (resultadoResta < 0) {
        reject("La calculadora solo puede devolver valores positivos");
      }
      resolve(resultadoResta);
    }
  });
};

// TODO: DEFINIR UN FUN MULTIPLICACION REGRESA EL VALOR SIEMPRE Q NIGUNO DE LOS FACOTRES SEA NEGATIVO
// SI EL PRODUCTO ES NEGATIVO RECAHAZAR "La calculadora solo puede devolver valores positivos"
const multiplicacion = (factor1, factor2) => {
  // TODO COMPLETENLA
  return new Promise((resolve, reject) => {});
};

// POWER BY GASTON
function multiplicar(a, b) {
  return new Promise((resolve, reject) => {
    if (a < 0 || b < 0) {
      reject("La calculadora solo puede devolver valores positivos");
    } else {
      resolve(a * b);
    }
  });
}

// TODO: DEFINIR UN FUN DIVISION, USADA EN CLASE
const div = (dividendo, divisor) => {
  // a --> dividendo / b --> divisor
  return new Promise((resolve, reject) => {
    if (divisor === 0) {
      reject("No se pueden hacer diviones entre cero, hahaha salud2");
    } else {
      const result = dividendo / divisor;
      resolve(result);
      console.log("DESPUES DEL RESOLVE DE LA DIVISION");
      // llamar a otro servicion, hacer otra llamada a promesa
      youAreACrack();
    }
  });
};

function youAreACrack() {
  console.log("YOU ARE A CRACK");
}

const calculosDificiles = (input) => {
  console.log("🚀 ~ file: ej-204.js:29 ~ calculosDificiles ~ input", input);
  console.log("ME VOY A TARDAR MUCHO****");
};

// UTILIZAR UNA FUNCION ASINCRONA LLAMADA CALCULOS usando async/await y try catch

const calculos = async () => {
  console.log("*******iniciando los calculos******");
  try {
    const division1 = await div(10, 2);
    console.log("🚀 ~ file: ej-204.js:29 ~ calculos ~ division1", division1);
    calculosDificiles(division1);
    const sum1 = await suma(10, 10);
    console.log("🚀 ~ file: ej-204.js:58 ~ calculos ~ sum1", sum1);
    // await suma(20, 0); // entra en el catch correctamente
    const resta1 = await resta(10, 9);
    console.log("🚀 ~ file: ej-204.js:71 ~ calculos ~ resta1", resta1);
    // await resta(100, 0); // cubre caso de un de los parametros siendo nulo
    // await resta(0, 5); // cubre caso de un de los parametros siendo nulo
    // await resta(0, 0);
    // await resta(10, 20);
    const multi = await multiplicar(5, 5);
    await multiplicar(-1, 10);
    console.log("🚀 ~ file: ej-204.js:89 ~ calculos ~ multi", multi);
  } catch (error) {
    console.log("🚀 ~ file: ej-204.js:19 ~ calculos ~ error", error);
  }

  console.log("**** FINALIZARON LOS CALCULOS******");
};

calculos();
