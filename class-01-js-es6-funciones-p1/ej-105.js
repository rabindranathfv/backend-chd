class Contador {
  static contadorInstances = 0;
  constructor(nombre) {
    this.nombre = nombre;
    this.valor = 0;
    Contador.contadorInstances = Contador.contadorInstances + 1;
    // Contador.contadorInstances++
  }

  getContador = () => {
    return this.valor;
  };

  setContador(valor) {
    this.valor = valor;
  }

  getResponsable() {
    return this.nombre;
  }

  getCuentaIndividual() {
    return this.valor;
  }

  getCuentaGlobal = () => {
    return this.contadorInstances;
  };
}

console.log("ATRIBUTO ESTATICO", Contador.contadorInstances);

const primerContador = new Contador("Rabin");
console.log(
  `el contador de ${primerContador.getResponsable()} tiene un valor de ${primerContador.getContador()}`
);

primerContador.valor = 10;
console.log("🚀 ~ file: ej-105.js:20 ~ primerContador", primerContador);

primerContador.setContador(200);
console.log("ASIGNANDO UN VALOR CON UN METODO DE LA CLASE", primerContador);

const contador2 = new Contador("DIBU");
console.log(
  `🚀 ~ file: ej-105.js:43 ~ contador2 es ${contador2.getResponsable()} tiene un valor de ${contador2.getCuentaIndividual()}`,
  contador2
);

const contador3 = new Contador("JOSE");
const contador4 = new Contador("ESTUDIANTES");

// Contador.contadorInstances = 3;
console.log("NUMEROS DE INSTANCIAS DE CONTADOR***", Contador.contadorInstances);
