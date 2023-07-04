const noteModel = require("../model/notes.model");
const userModel = require("../model/user.model");

const getAllNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({});
    return notes;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getNoteById = async (req, res) => {
  try {
    const noteData = await noteModel.findById({ _id: req.params.noteId });
    return noteData;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createNote = async (req, res) => {
  try {
    const bodyNotes = req.body;
    const newNote = await noteModel.create(bodyNotes);
    const {
      user: { id },
    } = req.user;
    const userData = await userModel.findById({ _id: id });

    await userData.notes.push({ note: newNote._id });
    const updatedNotes = await userModel.updateOne({ _id: id }, userData);

    return updatedNotes;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    const deleteNote = await noteModel.deleteOne({ _id: req.params.noteId });
    return deleteNote;
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
