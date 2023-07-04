let user = {
  name: "John",
  lastName: "Smith",
  age: 30,
  gender: "M",
};

const users = [
  { ...user },
  {
    name: "Carlos",
    lastName: "Ferrer",
    age: 22,
    gender: "M",
  },
  {
    name: "Jimena",
    lastName: "Gimenez",
    age: 19,
    gender: "F",
  },
];

const ArrEntries = Object.entries(user);
console.log(
  "🚀 ~ file: ej-202-nullish-priv-vars.js:9 ~ ArrEntries:",
  ArrEntries
);

const ArrKeys = Object.keys(user);
console.log("🚀 ~ file: ej-202-nullish-priv-vars.js:12 ~ ArrKeys:", ArrKeys);

const ArrValues = Object.values(user);
console.log(
  "🚀 ~ file: ej-202-nullish-priv-vars.js:15 ~ ArrValues:",
  ArrValues
);

let totalUserAges = users.reduce(
  (acum, currentVal) => acum + currentVal.age,
  0
);
console.log(
  "🚀 ~ file: ej-202-nullish-priv-vars.js:40 ~ totalUserAges:",
  totalUserAges
);

let maxUserAge = users.reduce((acum, currentVal) => {
  return acum <= currentVal.age ? currentVal.age : acum;
}, 0);
console.log(
  "🚀 ~ file: ej-202-nullish-priv-vars.js:51 ~ maxUserAge ~ maxUserAge:",
  maxUserAge
);
