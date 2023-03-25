const { Router } = require("express");
const { authToken } = require("../middleware/auth-token.middleware");
const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");
const { generateJWT } = require("../utils/jwt");

const router = Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.redirect("/login");
    return res.send({ message: `logout Error`, body: err });
  });
});

// PROBAR ESTE LOGIN CON POSTMAN
router.post("/login", authToken, async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = req?.user || (await userModel.findOne({ email }));

    if (!findUser) {
      return res
        .status(401)
        .json({ message: `este usuario no esta registrado` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);
    if (!isValidComparePsw) {
      return res.status(401).json({ message: `credenciales invalidas` });
    }

    req.session.user = {
      ...findUser,
    };

    const token = req.token;
    return res.json({
      user: findUser,
      token,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:23 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("BODY ****", req.body);
    const { first_name, last_name, email, age, password } = req.body;

    const pswHashed = await createHashValue(password);

    const userAdd = {
      email,
      password,
      first_name,
      last_name,
      age,
      password: pswHashed,
    };
    const newUser = await userModel.create(userAdd);

    const token = await generateJWT(newUser);
    console.log(
      "🚀 ~ file: session.routes.js:63 ~ router.post ~ token:",
      token
    );

    req.session.user = { email, first_name, last_name, age, token };
    return res.render(`login`);
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:36 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/update", async (req, res) => {
  try {
    console.log("BODY UPDATE****", req.body);
    const { new_password, email } = req.body;

    const newPswHashed = await createHashValue(new_password);
    const user = await userModel.findOne({ email });

    const updateUser = await userModel.findByIdAndUpdate(user._id, {
      password: newPswHashed,
    });

    if (!updateUser) {
      res.json({ message: "problemas actualizando la contrasena" });
    }

    return res.render(`login`);
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:97 ~ router.post ~ error:",
      error
    );
  }
});

module.exports = router;
