import UserService from "../dao/user.dao.js";

const userService = new UserService();

export const getUsers = async (req, res) => {
  const data = await userService.getUsers();

  return res.json({
    message: `getUsers`,
    users: data,
  });
};

export const getUserById = async (req, res) => {
  const { uid } = req.params
  const data = await userService.getUsersById(uid);

  // TODO: Si no trae info indicar otra respuesta segun sea el caso
  return res.json({
    message: `getUserById`,
    user: data,
  });
};

export const createUser = async (req, res) => {
  const user = req.body
  const data = await userService.createUsers(user);

  return res.json({
    message: `createUser`,
    user: data,
  });
};

export const updateUserById = async (req, res) => {
  const user = req.body;
  const { uid } = req.params;
  const data = await userService.updateUsersById(uid, user);
  return res.json({
    message: `updateUserById`,
    user: data,
  });
};

export const deleteUserById = async (req, res) => {
  const { uid } = req.params;
  const data = await userService.deleteUsersById(uid);
  return res.json({
    message: `DeleteUserById`,
    user: data
  });
};
