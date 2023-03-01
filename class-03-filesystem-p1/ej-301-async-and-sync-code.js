// TODO: Codigo sincrono
const saludar = (nombre) => {
  console.log("🚀 ~ Hola ", nombre);
};

const comoEstas = (nombre) => {
  console.log(` Como estas ${nombre}?`);
};

const NOMBRE = "Frank";
// saludar(NOMBRE);
// comoEstas(NOMBRE);

// console.log("codigo sincrono 1");
// console.log("codigo sincrono 2");

// TODO: Codigo Asincrono
const esperar = (timer, callback) => {
  setTimeout(() => {
    callback();
  }, timer);
};

const op = () => console.log("ejecuto un CALLBACK");



saludar(NOMBRE); // syn
esperar(4000, op); // async, y tengo q esperar
console.log("terminamos de ejecutar TODO!!!"); // syn

