const path = require("path");
const ArmyManager = require("./army/armyManager");

const mainArmy = async () => {
  try {
    const dbPath = path.join(`${__dirname}/db_army.json`);
    const armyInstance = new ArmyManager(dbPath);
    const listArmyBases = await armyInstance.getAllMilitaryBases();
    console.log(
      "🚀 ~ file: app.js:10 ~ mainArmy ~ listArmyBases",
      listArmyBases.basesMilitares
    );

    const base1 = {
      // nombreBase: "Base coderhouse",
      cantidadSoldados: 60,
      cantidadTanques: 6,
      poderioCombate: 40,
      ubicacion: "Mendoza, Argentina",
      generalACargo: "Mariano Gago",
    };
    const newUser = await armyInstance.createMilitaryBase(base1);
    console.log("🚀 ~ file: app.js:23 ~ mainArmy ~ newUser", newUser);
  } catch (error) {
    console.log("🚀 ~ file: app.js:9 ~ mainArmy ~ dbPath", dbPath);
  }
};

mainArmy();
