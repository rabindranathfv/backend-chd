function mostrarLista(lista) {

  if (lista && lista.length === 0) {
    return "Lista vacia";
  }

  for (let index = 0; index < lista.length; index++) {
    const elemento = lista[index];
    console.log("🚀 ~ file: ej-103.js:8 ~ mostrarLista ~ elemento", elemento);
  }

  return `La lista contiene ${lista.length} elementos`;
}

const lenguajes = ["C", "Javascript", "C++", "PYTHON", "JAVA"];
console.log(`llamando a la funcion::: `, mostrarLista(lenguajes));

const lenguajesVacio = [];
console.log(
  `llamando a la funcion POR 2DA VEZ::: `,
  mostrarLista(lenguajesVacio)
);

console.log(`llamando a la funcion POR 3RA VEZ::: `, mostrarLista());
