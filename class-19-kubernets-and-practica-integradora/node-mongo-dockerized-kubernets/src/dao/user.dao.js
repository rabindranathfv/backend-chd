import userModel from "../model/user.model.js";

export default class UserDao {
  getUsers = async () => {
    try {
      const data = await userModel.find();
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: user.dao.js:6 ~ UserDao ~ getUsers= ~ error:",
        error
      );
      return null;
    }
  };

  getUsersById = async (id) => {
    try {
      const data = await userModel.findOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: user.dao.js:16 ~ UserDao ~ getUsersById= ~ error:",
        error
      );
      return null;
    }
  };

  createUsers = async (user) => {
    try {
      const data = await userModel.create(user);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: user.dao.js:26 ~ UserDao ~ createUsers= ~ error:",
        error
      );
      return null;
    }
  };

  updateUsersById = async (id, user) => {
    try {
      // TODO: {$set: user}
      const data = await userModel.updateOne({ _id: id }, user);
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: user.dao.js:36 ~ UserDao ~ updateUsersById= ~ error:",
        error
      );
      return null;
    }
  };

  deleteUsersById = async (id) => {
    try {
      const data = await userModel.deleteOne({ _id: id });
      return data;
    } catch (error) {
      console.log(
        "🚀 ~ file: user.dao.js:47 ~ UserDao ~ DeleteUsersById ~ error:",
        error
      );
      return null;
    }
  };
}
