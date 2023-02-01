const fs = require("fs/promises");
const bcrypt = require("bcryptjs");
const Joi = require("joi");

class ArmyManager {
  constructor(path) {
    this.path = path;
  }

  async generateIndex(MilitaryBases) {
    try {
      if (MilitaryBases.length === 0) return 1;
      return MilitaryBases[MilitaryBases.length - 1].id + 1;
    } catch (error) {
      console.log(
        "🚀 ~ file: armyManager.js:15 ~ ArmyManager ~ generateIndex ~ error",
        error
      );
    }
  }

  async validateMilitaryBase(militaryBase) {
    try {
      const militaryBaseSchema = Joi.object({
        nombreBase: Joi.string().required(),
        cantidadSoldados: Joi.number().required(),
        cantidadTanques: Joi.number().required(),
        poderioCombate: Joi.number().required(),
        ubicacion: Joi.string().required(),
        generalACargo: Joi.string().required(),
      });
      const { error, value } = await militaryBaseSchema.validateAsync(
        militaryBase
      );
      console.log(
        "🚀 ~ file: armyManager.js:27 ~ ArmyManager ~ validateMilitaryBase ~ error",
        error
      );
      return error ? false : true;
    } catch (error) {
      console.log(
        "🚀 ~ file: armyManager.js:19 ~ ArmyManager ~ validateMilitaryBase ~ error",
        error.message
      );
    }
  }

  async createMilitaryBase(base) {
    try {
      const validacion = await this.validateMilitaryBase(base);
      console.log(
        "🚀 ~ file: armyManager.js:51 ~ ArmyManager ~ createMilitaryBase ~ validacion",
        validacion
      );

      const {
        nombreBase,
        cantidadSoldados,
        cantidadTanques,
        poderioCombate,
        ubicacion,
        generalACargo,
      } = base;

      const dbArmy = await this.getAllMilitaryBases();

      const newId = await this.generateIndex(dbArmy.basesMilitares);

      const salt = await bcrypt.genSalt();
      const locationEncrypted = await bcrypt.hashSync(ubicacion, salt);

      const newMilitaryBase = {
        id: newId,
        nombreBase,
        cantidadSoldados,
        cantidadTanques,
        poderioCombate,
        ubicacion: locationEncrypted,
        generalACargo,
      };
      dbArmy.basesMilitares.push(newMilitaryBase);

      await fs.writeFile(this.path, JSON.stringify(dbArmy));
      return newMilitaryBase;
    } catch (error) {}
  }

  async getAllMilitaryBases() {
    try {
      const armyBasesDB = await fs.readFile(this.path, "utf-8");
      return JSON.parse(armyBasesDB);
    } catch (error) {
      console.log(
        "🚀 ~ file: armyManager.js:16 ~ ArmyManager ~ getAllMilitaryBases ~ error",
        error
      );
    }
  }
}

module.exports = ArmyManager;
