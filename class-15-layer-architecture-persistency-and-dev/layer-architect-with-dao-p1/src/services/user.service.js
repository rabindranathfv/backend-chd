const userModel = require("../model/user.model");

const getAllUsers = async (req, res) => {
  try {
    console.log("USER SERVICE getAllUsers");
    const users = await userModel.find({}).populate("notes.note");
    return users;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userData = await userModel
      .findById({ _id: req.params.userId })
      .populate("notes.note");
    return userData;
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  deleteUser,
};
