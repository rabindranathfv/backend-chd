const userModel = require("../model/user.model");

class UsersServiceDao {
  constructor() {}

  getAllUsers = async (req, res) => {
    try {
      const users = await userModel.find({});
      return users;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const userData = await userModel.findById({ _id: req.params.userId });
      return userData;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  createUser = async (req, res) => {
    try {

    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteUser = async (req, res) => {
    try {
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };
}

module.exports = UsersServiceDao;
