function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const ELEMENTOS = 10_000;

const randomArr = new Array(ELEMENTOS).fill(null).map(() => random(1, 20));
console.log("🚀 ~ file: index.js:8 ~ randomArr", randomArr);

// forma 1
const mappingRandom = randomArr.reduce(
  (acc, value) => (acc[value] ? (acc[value] += 1) : (acc[value] = 1), acc),
  {}
);
console.log(
  "🚀 ~ file: index.js:16 ~ mappingRandom ~ mappingRandom",
  mappingRandom
);

// forma 2
const result = {};
randomArr.forEach((element) => {
  result[element] = result[element] + 1 || 1;
});
console.log("🚀 ~ file: index.js:27 ~ result", result);
