const numbers = [100, 21, 43, 23, 89];

let newNumbers = numbers.map((num, index) => num ** index);

let monedas = ["USD", "COP", "EUR", "MXN", "CLP"];

if (monedas.includes("VEF")) {
  console.log("Esta moneda esta registrada");
} else {
  console.log("Esta moneda no esta registrada");
}
