import { param } from "express-validator";
import { mappingValidateMdw } from "./mapping.validation.midlleware.js";

export const validateLibraryIdMdw = [
  param("lid")
    .notEmpty()
    .withMessage("lid parameter is required")
    .isMongoId()
    .withMessage("Invalid lib format"),
  mappingValidateMdw,
];
