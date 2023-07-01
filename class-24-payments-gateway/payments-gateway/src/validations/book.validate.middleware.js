import { body } from "express-validator";
import { mappingValidateMdw } from "../middleware/mapping.validation.midlleware.js";

export const validateCreateBook = [
  body("title").notEmpty().withMessage("Book title is required"),
  body("author").notEmpty().withMessage("Authour is required"),
  body("genre").notEmpty().withMessage("gender is required"),
  body("publicationYear")
    .notEmpty()
    .withMessage("gender is required")
    .isInt()
    .withMessage("publication year must be a number")
    .custom((value) => value > 0)
    .withMessage("publication year must be a positive number"),
  mappingValidateMdw,
];
