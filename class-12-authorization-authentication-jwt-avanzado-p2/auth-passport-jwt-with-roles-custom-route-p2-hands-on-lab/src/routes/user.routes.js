const { Router } = require("express");
const handlePolicies = require("../middleware/handle-policies.middleware");
const userModel = require("../model/user.model");

const router = Router();

router.get("/", handlePolicies(["PUBLIC"]), async (req, res) => {
  const users = await userModel.find({});
  return res.json({ message: `getAllUsers with PUBLIC ROLE`, users });
});

router.get("/:userId", handlePolicies(["USER", "ADMIN"]), async (req, res) => {
  const userData = await userModel.findById({ _id: req.params.userId });
  return res.json({ message: `getUserById for USER ROLE`, user: userData });
});

router.delete("/:userId", handlePolicies(["ADMIN"]), async (req, res) => {
  const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
  return res.json({
    message: `deleteUserById with ROLE ADMIN`,
    user: deleteUser,
  });
});

module.exports = router;
