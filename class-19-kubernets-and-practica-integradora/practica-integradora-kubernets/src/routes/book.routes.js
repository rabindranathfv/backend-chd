import { Router } from "express";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller.js";

const router = Router();

router.get("/", getAllBooks);

router.get("/:bid", getBookById);

router.post("/", createBook);

router.put("/:bid", updateBookById);

router.delete("/:bid", deleteBookById);

export default router;
