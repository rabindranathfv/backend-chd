import { Router } from "express";
import { generateUser } from "../utils/generate-users.js";

const router = Router();

router.get("/", async (req, res) => {
  let users = [];
  for (let index = 0; index < 100; index++) {
    users.push(generateUser());
  }
  return res.json({
    message: `generate users`,
    users,
  });
});

export default router;
