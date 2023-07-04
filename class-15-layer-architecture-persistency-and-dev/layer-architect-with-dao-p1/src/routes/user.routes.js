const { Router } = require("express");
const handlePolicies = require("../middleware/handle-policies.middleware");
const userModel = require("../model/user.model");
const userCtrl = require('../controllers/user.controller')

const router = Router();

router.get("/", handlePolicies(["PUBLIC"]), userCtrl.getAllUsers);

router.get("/:userId", handlePolicies(["USER", "ADMIN"]), userCtrl.getUserById);

router.delete("/:userId", handlePolicies(["ADMIN"]), async (req, res) => {
  const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
  return res.json({
    message: `deleteUserById with ROLE ADMIN`,
    user: deleteUser,
  });
});

module.exports = router;
