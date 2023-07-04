let user1;

console.log(user1 ?? "Anonymous"); // Anonymous (user es undefined)

let user2 = "John";

console.log(user2 ?? "Anonymous"); // John (user no es null ni undefined)

let portPrueba = 0;

let PORT = portPrueba || 5000;
console.log("🚀 ~ file: ej-206-nullish-priv-vars.js:12 ~ PORT:", PORT);

portPrueba = 3000;

PORT = portPrueba || 5000;
console.log("🚀 ~ file: ej-206-nullish-priv-vars.js:17 ~ PORT:", PORT);

class Deporte {
  #nombre;
  constructor(nombre, cantidadJug, tipoDep) {
    this.cantidadJug = cantidadJug;
    this.tipoDep = tipoDep;
    this.#nombre = nombre;
    this.#AnunciaTipoDeporte();
  }
  getNombreDeporte = () => {
    return this.#nombre;
  };
  #AnunciaTipoDeporte = () => {
    console.log(`el deporte creado fue ${this.tipoDep}`);
  };
}

const deporteRey = new Deporte("futbol", "11", "fisico y de contacto");
const nombreDep = deporteRey.getNombreDeporte();
console.log(
  "🚀 ~ file: ej-206-nullish-priv-vars.js:37 ~ nombreDep:",
  nombreDep
);

const metPrivado = deporteRey.AnunciaTipoDeporte(); // Da error ya que el metodo privado no puede accederse fuera de la clase
console.log(
  "🚀 ~ file: ej-206-nullish-priv-vars.js:43 ~ metPrivado:",
  metPrivado
);
