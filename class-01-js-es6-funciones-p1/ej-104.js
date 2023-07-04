class Persona {
  static especie = "humano";
  constructor(nombre) {
    this.nombre = nombre;
  }
}

console.log("PROBANDO ATRIBUTO ESTATICO", Persona.especie);

const instanciaPersona = new Persona("DIBU");
console.log(
  "PROBANDO ATRIBUTO INTERNO DE LA CLASE",
  instanciaPersona,
  typeof instanciaPersona,
  instanciaPersona.nombre
);

const instanciaPersona2 = new Persona("MATIAS");
console.log("🚀 ~ file: ej-104.js:19 ~ instanciaPersona2", instanciaPersona2);

console.log("nombre de la segunda instancia", instanciaPersona2.nombre);
