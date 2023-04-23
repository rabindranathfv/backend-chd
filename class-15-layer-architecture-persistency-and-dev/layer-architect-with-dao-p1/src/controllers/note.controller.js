const noteService = require("../services/note.service");

const getAllNotes = async (req, res) => {
  try {
    const data = await noteService.getAllNotes(req, res);

    return res.json({ message: `getAllNotes`, notes: data });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const noteData = await noteService.getNoteById(req, res);
    return res.json({ message: `getNoteById for USER ROLE`, note: noteData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const bodyNotes = req.body;
    const updatedNotes = await noteService.createNote(req, res);

    if (!updatedNotes.acknowledged) {
      return res.status(500).json({
        message: `note has been created but can not be related`,
      });
    }
    return res.json({
      message: `note has been created and related successfuly`,
      note: bodyNotes,
      relatated: updatedNotes,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const deleteNote = await noteService.deleteNote(req, res);

    return res.json({
      message: `deleteNoteById with ROLE ADMIN`,
      note: deleteNote,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllNotes,
  getNoteById,
  createNote,
  deleteNote,
};
