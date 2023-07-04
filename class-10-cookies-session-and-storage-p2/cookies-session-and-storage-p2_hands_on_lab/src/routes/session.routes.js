const { Router } = require("express");
const { find } = require("../model/user.model");
const userModel = require("../model/user.model");

const router = Router();

router.get("/logout", async (req, res) => {
  req.session.destroy((err) => {
    if (!err) return res.redirect("/login");
    return res.send({ message: `logout Error`, body: err });
  });
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const session = req.session;
    console.log(
      "🚀 ~ file: session.routes.js:17 ~ router.post ~ session:",
      session
    );

    const findUser = await userModel.findOne({ email });
    console.log(
      "🚀 ~ file: session.routes.js:18 ~ router.post ~ findUser:",
      findUser
    );

    if (!findUser) {
      return res.json({ message: `este usuario no esta registrado` });
    }

    if (findUser.password !== password) {
      return res.json({ message: `password incorrecto` });
    }

    req.session.user = {
      ...findUser,
    };

    return res.render("profile", {
      last_name: req.session?.user?.last_name || findUser.last_name,
      email: req.session?.user?.email || email,
      age: req.session?.user?.age || findUser.age,
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

    const userAdd = { email, password, first_name, last_name, age, password };
    const newUser = await userModel.create(userAdd);
    console.log(
      "🚀 ~ file: session.routes.js:61 ~ router.post ~ newUser:",
      newUser
    );

    req.session.user = { email, first_name, last_name, age };
    return res.render(`login`);
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:36 ~ router.post ~ error:",
      error
    );
  }
});

module.exports = router;
