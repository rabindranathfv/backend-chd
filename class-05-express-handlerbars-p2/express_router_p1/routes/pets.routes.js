const { Router } = require("express");

const router = Router();
const pets = [];

// getAllPets
// /api/pets
router.get("/", (req, res) => {
  res.json({ ok: true, message: "lista de mascotas", pets });
});

router.post(`/`, (req, res) => {
  // asumir que valido todo
  const newPet = req.body;
  console.log("🚀 ~ file: pets.routes.js:15 ~ router.post ~ newPet", newPet);
  pets.push(newPet);

  res.json({
    ok: true,
    message: `mascota a gregada exitosamente`,
    pet: newPet,
  });
});

module.exports = router;
