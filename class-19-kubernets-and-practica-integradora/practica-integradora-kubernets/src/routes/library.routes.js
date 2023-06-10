import { Router } from "express";
import {
  createLibrary,
  deletelibraryById,
  getAllLibraries,
  getLibraryById,
  updateLibraryById,
} from "../controllers/library.controller.js";
import { validateCreateLibrary } from "../validations/library.validate.middleware.js";
import { validateLibraryIdMdw } from "../middleware/id.validation.middleware.js";

const router = Router();

router.get("/", getAllLibraries);

// /library/:lid?location=porto
router.get("/:lid", validateLibraryIdMdw, getLibraryById);

router.post("/", validateCreateLibrary, createLibrary);

router.put("/:lid", updateLibraryById);

router.delete("/:lid", deletelibraryById);

export default router;
