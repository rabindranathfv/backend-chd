import { Router } from "express";
import {
  createBook,
  deleteBookById,
  getAllBooks,
  getBookById,
  updateBookById,
} from "../controllers/book.controller.js";
import { validateCreateBook } from "../validations/book.validate.middleware.js";

const router = Router();

router.get("/", getAllBooks);

router.get("/:bid", getBookById);

router.post("/library/:lid", validateCreateBook, createBook);

router.put("/:bid", updateBookById);

router.delete("/:bid", deleteBookById);

export default router;
