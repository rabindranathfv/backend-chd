const UserService = require("../services/user.service");
const UserMenService = require("../services/user-men.service");

class UserCtrl {
  userService;
  constructor() {
    this.userService = new UserService();
    // TODO: Implementacion del DAO EN MEMORIA PARA LOS USUARIOS
    // this.userService = new UserMenService();
  }

  getAllUsers = async (req, res) => {
    try {
      const users = await this.userService.getAllUsers(req, res);
      return res.json({ message: `getAllUsers`, users });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      const user = await this.userService.getUserById(req, res);
      if (!user) {
        res.json({ message: `this users does not exist` });
      }
      return res.json({ message: `getUserById`, user });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  deleteUser = async (req, res) => {};
}

module.exports = UserCtrl;
