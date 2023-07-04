const { Router } = require("express");
const petsData = require("../data/pets");
const router = Router();

const petsModel = require("../model/pets.model");

router.get("/insertion", async (req, res) => {
  let result = await petsModel.insertMany(petsData);
  return res.json({
    message: "all the pets are inserted succesfully",
    pets: result,
  });
});

router.get("/", async (req, res) => {
  const petsList = await petsModel.find();
  return res.json({
    message: "getAllPets succesfully",
    petsSize: petsList.length,
    pets: petsList,
  });
});

router.post("/", async (req, res) => {
  const { nombre, edad, especie } = req.body;
  if (!nombre || !edad || !especie)
    return res.status(400).json({ message: "Incomplet values" });
  let pet = {
    nombre,
    edad,
    especie,
  };
  let newPet = await petsModel.create(pet);
  return res.json({
    message: "create new student successfully",
    pet: newPet,
  });
});

module.exports = router;
