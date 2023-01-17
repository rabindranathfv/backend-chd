// classes using static methods and attribute with extends examples

class Figure {
  static customName = "Figure";
  static description = "I am a geometric Figure";

  constructor(sides) {
    this.sides = sides;
  }

  static calculate(n = 1) {
    return n * 3;
  }
}

class Square extends Figure {
  static type = "square";
  static description = "I am a square and a Figure";

  constructor() {
    super();
    this.sides = 4;
  }
  static calculate(n) {
    return super.calculate(n) * super.calculate(n);
  }
}

console.log(Figure.description); // 'I am a geometric Figure'
console.log(Figure.calculate()); // 3
console.log(Figure.calculate(6)); // 18

const fig = new Figure(6);
console.log("i have ", fig.sides, " sides"); // 6

console.log(Square.calculate(3)); // 81 (not affected by parent's instantiation)
console.log(Square.description); // 'I am a square and a Figure'
console.log(Square.type); // square
console.log(Square.customName); // 'Figurer'

const sq = new Square();
console.log(sq.sides);

// This throws because calculate() is a static member, not an instance member.
console.log(fig.calculate()); // 'tp.calculate is not a function'
