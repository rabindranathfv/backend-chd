const userJohn = {
  name: "John",
  lastName: "Smith",
  age: 30,
  gender: "M",
};

const userCarlos = {
  name: "Carlos",
  lastName: "Ferrer",
  age: 22,
  gender: "M",
};

const users = [
  { ...userJohn },
  {
    ...userCarlos,
  },
  {
    name: "Jimena",
    lastName: "Gimenez",
    age: 19,
    gender: "F",
  },
];
console.log("🚀 ~ file: ej-203-spredOP-rest-OP.js:27 ~ users:", users);

let animal = {
  especie: "Mamifero",
  nombre: "Leon",
  longevidad: 20,
  alimentacion: "Carnivoro",
};

const { nombre, ...restAnimal } = animal;
console.log("🚀 ~ file: ej-203-spredOP-rest-OP.js:37 ~ nombre:", nombre);
console.log(
  "🚀 ~ file: ej-203-spredOP-rest-OP.js:39 ~ restAnimal:",
  restAnimal
);
