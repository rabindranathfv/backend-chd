const { Router } = require("express");

const { uploader } = require("../utils");

const router = Router();

const pets = [];

router.get("/", (req, res) => {
  res.json({ ok: true, pets, message: "get all pets" });
});

router.post("/", uploader.single("thumbnail"), (req, res) => {
  const file = req.file;
  console.log("🚀 ~ file: pets.routes.js:15 ~ router.post ~ file", file);
  if (!file) return res.status(400).send({ message: "Couldn't upload file" });
  const newPet = req.body;
  newPet.thumbnail = `http://localhost:5000/public/uploads/${file.filename}`;
  pets.push(newPet);
  res.json({ ok: true, message: "upload successfully", pet: newPet });
});

module.exports = router;
