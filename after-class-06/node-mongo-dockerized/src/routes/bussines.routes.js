import { Router } from "express";
import {
  deleteBussinessById,
  createBussiness,
  getBussiness,
  getBussinessById,
  updateBussinessById,
} from "../controllers/bussiness.controller.js";

const router = Router();

router.get("/", getBussiness);

router.get("/:bid", getBussinessById);

router.post("/", createBussiness);

router.put("/:bid", updateBussinessById);

router.delete("/:bid", deleteBussinessById);

export default router;
