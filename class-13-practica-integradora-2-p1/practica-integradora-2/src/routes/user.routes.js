const { Router } = require("express");
const handlePolicies = require("../middleware/handle-policies.middleware");
const userModel = require("../model/user.model");

const router = Router();

router.get("/", handlePolicies(["PUBLIC"]), async (req, res) => {
  const users = await userModel.find({}).populate("notes.note");
  return res.json({ message: `getAllUsers with PUBLIC ROLE`, users });
});

router.get("/:userId", handlePolicies(["USER", "ADMIN"]), async (req, res) => {
  console.log("DATA FROM MIDDLEWARE+++++", req.user);
  const userData = await userModel
    .findById({ _id: req.params.userId })
    .populate("notes.note");
  return res.json({ message: `getUserById for USER ROLE`, user: userData });
});

router.post("/:userId/notes/:noteId", async (req, res) => {
  const { noteId, userId } = req.params;
  const userData = await userModel.findById({ _id: userId });

  userData.notes.push({ note: noteId });

  const updateUser = await userModel.updateOne({ _id: userId }, userData);
  return res.json({ message: `getUserById for USER ROLE`, user: updateUser });
});

router.delete("/:userId", handlePolicies(["ADMIN"]), async (req, res) => {
  const deleteUser = await userModel.deleteOne({ _id: req.params.userId });
  return res.json({
    message: `deleteUserById with ROLE ADMIN`,
    user: deleteUser,
  });
});

module.exports = router;
