// classes using static methods and attribute with extends examples

class Figure {
  static customName = "Figure";
  static description = "I am a geometric Figure";
  area;

  constructor(sides, area) {
    this.sides = sides;
    this.area = area;
  }

  static calculate(n = 1) {
    return n * 3;
  }

  getPerimeter() {
    return this.area;
  }

  getSides() {
    return this.sides;
  }
}

class Square extends Figure {
  static type = "square";
  static description = "I am a square and a Figure";

  constructor() {
    super(); // hace referencia a la clase padre
    this.sides = 4;
  }
  static calculate(n) {
    // return this.calculate(n) * this.calculate(n); // este forma da error - revisarlo
    return super.calculate(n) * super.calculate(n);
  }

  getSides() {
    return this.sides;
  }
}

console.log(Figure.description); // 'I am a geometric Figure'
console.log(Figure.calculate()); // 3
console.log(Figure.calculate(6)); // 18

const pentagonoPerimeter = (n) => n + n + n + n + n;
const fig = new Figure(5, pentagonoPerimeter(2));
console.log("🚀 ~ file: ej-106-review.js:44 ~ fig", fig.getPerimeter());

console.log("i have ", fig.sides, " sides"); // 5
console.log("i have ", fig.getSides(), " sides using a method"); // 5

console.log(Square.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(Square.description); // 'I am a square and a Figure'
console.log(Square.type); // square
console.log(Square.customName); // 'square', 'Figure' ya que la clase padre es la que tiene el atributo estatico

const sq = new Square();
console.log("i have ", sq.sides, " sides"); // 4

// This throws because calculate() is a static member, not an instance member.
// console.log(fig.calculate()); // 'tp.calculate is not a function'
console.log("calling method calculate from Square ", Square.calculate());
console.log("i have ", sq.getSides(), " sides"); // 4 ya que es un cuadrado
console.log("i have ", fig.getSides(), " sides"); // 5 referencia de la instancia fig
