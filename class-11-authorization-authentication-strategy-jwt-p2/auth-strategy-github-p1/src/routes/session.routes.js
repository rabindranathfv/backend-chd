const { Router } = require("express");
const passport = require("passport");
const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");

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
    const findUser = await userModel.findOne({ email });

    if (!findUser) {
      return res.json({ message: `este usuario no esta registrado` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);
    if (!isValidComparePsw) {
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

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
  async (req, res) => {}
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  async (req, res) => {
    try {
      req.session.user = req.user;
      res.redirect("/profile");
    } catch (error) {
      console.log("🚀 ~ file: session.routes.js:115 ~ error:", error);
    }
  }
);

module.exports = router;
