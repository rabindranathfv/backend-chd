import { Router } from "express";
import { paymentsIntents } from "../controllers/payments.controller.js";

const router = Router();

router.post("/payment-intents", paymentsIntents);

router.get("/payment-check", (req, res) => {
  res.json({ message: `payments-check endpoint` });
});

export default router;
