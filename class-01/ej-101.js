const nombre = "Rabindranath";

// TypeError
// nombre = "jose";

const estudiante = { name: "Rabindranath" };
console.log(
  "🚀 ~ file: ej-101.js:8 ~ estudiante",
  estudiante,
  typeof estudiante
);
estudiante.name = "Jose";

console.log("🚀 ~ file: ej-101.js:10 ~ estudiante", estudiante);

const numeros = [1, 2, 3, 4, 6, 7];

console.log("valor en la posicion 1", numeros[1], typeof numeros);

numeros[1] = 200;

console.log("valor en la posicion 1 despues de modificarlo", numeros[1]);
