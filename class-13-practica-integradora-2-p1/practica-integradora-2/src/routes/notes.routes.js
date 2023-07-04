const { Router } = require("express");
const noteModel = require("../model/notes.model");
const handlePolicies = require("../middleware/handle-policies.middleware");
const userModel = require("../model/user.model");

const router = Router();

router.get("/", async (req, res) => {
  const notes = await noteModel.find({});
  return res.json({ message: `getAllNotes`, notes });
});

router.get("/:noteId", async (req, res) => {
  const noteData = await noteModel.findById({ _id: req.params.noteId });
  return res.json({ message: `getNoteById for USER ROLE`, note: noteData });
});

router.post("/", handlePolicies(["USER", "ADMIN"]), async (req, res) => {
  // TODO: Agregar validaciones para la creacion de la nota
  const bodyNotes = req.body;
  const newNote = await noteModel.create(bodyNotes);
  const {
    user: { id },
  } = req.user;
  const userData = await userModel.findById({ _id: id });

  userData.notes.push({ note: newNote._id });
  const updatedNotes = await userModel.updateOne({ _id: id }, userData);

  if (!updatedNotes.acknowledged) {
    return res.status(500).json({
      message: `note has been created but can not be related`,
    });
  }
  return res.json({
    message: `note has been created and related successfuly`,
    note: newNote,
    relatated: updatedNotes,
  });
});

router.delete("/:noteId", async (req, res) => {
  const deleteNote = await noteModel.deleteOne({ _id: req.params.noteId });
  return res.json({
    message: `deleteNoteById with ROLE ADMIN`,
    note: deleteNote,
  });
});

module.exports = router;
