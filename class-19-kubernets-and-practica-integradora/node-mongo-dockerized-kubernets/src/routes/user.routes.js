import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const router = Router();

router.get("/", getUsers);

router.get("/:uid", getUserById);

router.post("/", createUser);

router.put("/:uid", updateUserById);

router.delete("/:uid", deleteUserById);

export default router;
