const { Router } = require("express");
const userModel = require("../model/user.model");
const { createHashValue, isValidPasswd } = require("../utils/encrypt");

const router = Router();

router.get("/users", async (req, res) => {
  try {
    const users = await userModel.find();
    return res.json({ users });
  } catch (error) {
    console.log("🚀 ~ file: session.routes.js:12 ~ router.get ~ error:", error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ status: "error", error: "Errors in Body for LOGIN" });
    }
    const findUser = await userModel.findOne({ email });

    if (!findUser) {
      return res
        .status(404)
        .json({ status: "error", message: `this user does not exists` });
    }
    const isValidComparePsw = await isValidPasswd(password, findUser.password);

    if (!isValidComparePsw) {
      return res.status(400).json({
        status: "error",
        message: `Password incorrect`,
      });
    }
    console.log(`🚀 ~ user ${email} LOGIN SUCCESS***`);
    return res.json({
      status: "success",
      message: `Logged In SUCCESS`,
    });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:34 ~ router.post ~ error:",
      error
    );
  }
});

router.post("/register", async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;
    console.log(
      `REGISTER ******** ${first_name}  ${last_name} ${email} ${password}`
    );
    if (!first_name || !last_name || !email || !password) {
      return res.status(400).json({ status: "error", error: "Errors in Body" });
    }

    const userExist = await userModel.findOne({ email });
    if (userExist) {
      return res
        .status(400)
        .json({ status: "error", error: "user already exists" });
    }

    const pswHashed = await createHashValue(password);
    const userAdd = {
      email,
      password,
      first_name,
      last_name,
      password: pswHashed,
    };
    await userModel.create(userAdd);
    res.json({ status: "success", message: "User Registered" });
  } catch (error) {
    console.log(
      "🚀 ~ file: session.routes.js:73 ~ router.post ~ error:",
      error
    );
  }
});

module.exports = router;
