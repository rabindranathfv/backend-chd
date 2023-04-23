const { Router } = require("express");
const userModel = require("../model/user.model");
const UserCtrl = require("../controllers/user.controller");

const { createHashValue } = require("../utils/encrypt");

const router = Router();
const userCtrl = new UserCtrl();

router.get("/", userCtrl.getAllUsers);

router.get("/:userId", userCtrl.getUserById);

router.delete("/:userId", async (req, res) => {
  const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
  return res.json({
    message: `method deleteUserById`,
    user: deleteUser,
  });
});

router.post("/", async (req, res) => {
  try {
    console.log("BODY ****", req.body);
    // TODO: verificar que no exista un usuario registrado con ese correo anteriormente
    // TODO: Adicionalment puede agregar el unique del campo email a nivel del modelo del usuario

    const { first_name, last_name, email, age, password, role } = req.body;

    const pswHashed = await createHashValue(password);

    const userAdd = {
      email,
      password,
      first_name,
      last_name,
      age,
      password: pswHashed,
      role,
    };
    const newUser = await userModel.create(userAdd);

    return res.json({
      message: `usuario creado`,
      user: newUser,
    });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:49 ~ router.post ~ error:", error);
    return res.json({ message: `${error}` });
  }
});

module.exports = router;
