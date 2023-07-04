const { Router } = require("express");

const router = Router();

const pets = [];

const regExpPetName = "[a-zA-Z]+";

router.get(`/:petName(${regExpPetName})`, (req, res) => {
  console.log("parametro guardo con el ROUTE.PARAM****", req.petName);
  const findPet = pets.find(
    (pet) => pet.name.toLocaleLowerCase() === req.petName.toLocaleLowerCase()
  );
  if (!findPet) {
    res.json({
      ok: true,
      message: `this pet ${req.petName} does not exist`,
    });
  }
  return res.json({ ok: true, pet: findPet, message: "search pets by name" });
});

router.get("/", (req, res) => {
  return res.json({ ok: true, pets, message: "get all pets" });
});

router.post("/", (req, res) => {
  console.log("BUSCANDO EL REQ.petName***");
  const { name, specie } = req.body;
  const newPet = {
    name: name.toLocaleLowerCase(),
    specie: specie.toLocaleLowerCase(),
  };
  pets.push(newPet);
  return res.json({ ok: true, message: "pet created", pet: newPet });
});

router.put("/:petName([a-zA-Z]+)", (req, res) => {
  const { petName } = req;
  console.log("🚀 ~ file: pets.routes.js:27 ~ router.put ~ petName:", petName);
  const pet = pets.find((p) => {
    return p.name === petName.toLocaleLowerCase();
  });
  const petIndex = pets.findIndex((p) => {
    return p.name === petName.toLocaleLowerCase();
  });
  console.log("🚀 ~ file: pets.routes.js:29 ~ router.put ~ pet:", petIndex);
  const updatedPet = { ...pet, adopted: true };
  pets[petIndex] = { ...updatedPet };
  return res.json({ ok: true, pet: updatedPet, message: "pet updated" });
});

router.param("petName", async (req, res, next, petName) => {
  console.log("PASO POR EL ROUTER.PARAM****", petName);
  if (!petName) {
    req.petName = null;
  }
  req.petName = petName;
  next();
});

module.exports = router;
