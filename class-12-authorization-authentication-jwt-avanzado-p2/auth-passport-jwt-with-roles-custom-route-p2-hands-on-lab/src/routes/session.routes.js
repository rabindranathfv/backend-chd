const { Router } = require("express");
const ROLES = require("../constantes/role");
const handlePolicies = require("../middleware/handle-policies.middleware");
const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");
const { generateJWT } = require("../utils/jwt");

const router = Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err)
      return res.status(500).json({ message: `error internal, logout` });
    return res.send({ message: `logout Error`, body: err });
  });
});

// PROBAR ESTE LOGIN CON POSTMAN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const findUser = await userModel.findOne({ email });

    if (!findUser) {
      return res.json({ message: `este usuario no esta registrado` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);
    if (!isValidComparePsw) {
      return res.status(401).json({ message: `credenciales invalidas` });
    }

    const signUser = {
      email,
      role: findUser.role,
      id: findUser._id,
    };
    // if(!)

    const token = await generateJWT({ ...signUser });

    req.session.user = {
      ...signUser,
    };

    return res.json({ message: `welcome $${email},login success`, token });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:50 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/register", async (req, res) => {
  try {
    console.log("BODY ****", req.body);
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

    req.session.user = { email, role, id: newUser._id };

    return res.json({
      message: `usuario creado`,
      user: newUser,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:79 ~ router.post ~ error:",
      error
    );
    return res.json({ message: `${error}` });
  }
});

router.get("/current", handlePolicies(["PUBLIC"]), async (req, res) => {
  console.log(" VALIDANDO REQ", req.user);
  return res.json({ message: `jwt en las los headers` });
});

router.get("/current/admin", handlePolicies(["ADMIN"]), async (req, res) => {
  console.log(" VALIDANDO REQ", req.user);
  return res.json({ message: `jwt en las los headers siendo ADMIN` });
});

router.get(
  "/current/user",
  handlePolicies(["USER", "ADMIN"]),
  async (req, res) => {
    console.log(" VALIDANDO REQ", req.user);
    return res.json({ message: `jwt en las los headers` });
  }
);

module.exports = router;
