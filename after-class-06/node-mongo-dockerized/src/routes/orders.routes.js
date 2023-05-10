import { Router } from "express";
import {
  createOrder,
  getOrderById,
  getOrders,
  updateOrderById,
  deleteOrderById,
} from "../controllers/order.controller.js";

const router = Router();

router.get("/", getOrders);

router.get("/:oid", getOrderById);

router.post("/", createOrder);

router.put("/:oid", updateOrderById);

router.delete("/:oid", deleteOrderById);

export default router;
