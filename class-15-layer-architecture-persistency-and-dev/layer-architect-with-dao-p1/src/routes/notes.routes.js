const { Router } = require("express");
const noteCtrl = require("../controllers/note.controller");
const handlePolicies = require("../middleware/handle-policies.middleware");

const router = Router();

router.get("/", noteCtrl.getAllNotes);

router.get("/:noteId", noteCtrl.getNoteById);

router.post("/", handlePolicies(["ADMIN", "USER"]), noteCtrl.createNote);

router.delete("/:noteId", noteCtrl.deleteNote);

module.exports = router;
