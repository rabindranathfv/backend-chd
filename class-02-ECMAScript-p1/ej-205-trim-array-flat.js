const matriz = [
  [2, 3, 66, 2, -1, 9],
  [97, -25, -6, 78, 55],
  [0, 1, -1, 2, [0, 100]],
];

const matrizAplanada = matriz.flat(2);
console.log(
  "🚀 ~ file: ej-205-trim-array-flat.js:9 ~ matrizAplanada:",
  matrizAplanada
);

let stringPrueba = "                 Saludos";
console.log(
  "🚀 ~ file: ej-205-trim-array-flat.js:15 ~ stringVacio:",
  stringPrueba.trim()
);

if (stringPrueba.trim().length > 0) {
  console.log("el string no esta vacio!!");
} else {
  console.log("el string esta VACIO");
}
