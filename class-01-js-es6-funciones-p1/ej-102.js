function saludo(nombre) {
  return "hola " + nombre + " , Bienvenido";
}

const saludar = saludo("Rabin");
console.log("🚀 ~ file: eje-102.js:6 ~ saludar CON PARAMETROS", saludar);
const saludar2 = saludo();
console.log(
  "🚀 ~ file: eje-102.js:8 ~ saludar USANDO EL PARAMETRO OPCIONAL",
  saludar2
);

// TODO: Crear arrow function example
const saludoV2 = (nombre) => {
  return "hola " + nombre + " , Bienvenido";
};

// TODO: INVOCANDO LA FUNCION LLAMADA saludoV2
const saludarV2 = saludoV2("SERGIO");
console.log("🚀 ~ file: ej-102.js:19 ~ saludarV2", saludarV2);

const saludoV3 = (nombre) => "hola " + nombre + " , Bienvenido";

// INVOCANDO LA FUNCION LLAMADA saludoV3
const retornoImplicito = saludoV3('SALVADOR');
console.log('🚀 ~ file: ej-102.js:24 ~ retornoImplicito', retornoImplicito);
