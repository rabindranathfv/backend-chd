class UsersMenServiceDao {
  users;
  constructor() {
    this.users = [];
  }

  getAllUsers = async (req, res) => {
    try {
      const users = await this.users;
      return users;
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  };

  getUserById = async (req, res) => {
    try {
      return this.users.find( u => u.id === req.params.userId)
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

module.exports = UsersMenServiceDao;
