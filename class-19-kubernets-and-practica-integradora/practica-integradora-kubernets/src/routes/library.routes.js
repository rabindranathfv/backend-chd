import { Router } from "express";
import {
  createLibrary,
  deletelibraryById,
  getAllLibraries,
  getLibraryById,
  updateLibraryById,
} from "../controllers/library.controller.js";

const router = Router();

router.get("/", getAllLibraries);

router.get("/:lid", getLibraryById);

router.post("/", createLibrary);

router.put("/:lid", updateLibraryById);

router.delete("/:lid", deletelibraryById);

export default router;
