import { body } from "express-validator";
import { mappingValidateMdw } from "../middleware/mapping.validation.midlleware.js";

export const validateCreateLibrary = [
  body("name").notEmpty().withMessage("Library name is required"),
  body("location").notEmpty().withMessage("Library location is required"),
  mappingValidateMdw,
];
