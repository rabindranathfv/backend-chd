const userService = require("../services/user.service");

const getAllUsers = async (req, res) => {
  try {
    console.log("USER CONTROLLER getAllUsers");
    const users = await userService.getAllUsers(req, res);
    return res.json({ message: `getAllUsers with PUBLIC ROLE`, users });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const userData = await userService.getUserById(req, res);
    return res.json({ message: `getUserById for USER ROLE`, user: userData });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {};

module.exports = {
  getAllUsers,
  getUserById,
  deleteUser,
};
