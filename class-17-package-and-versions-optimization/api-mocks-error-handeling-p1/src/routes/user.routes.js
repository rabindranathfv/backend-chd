import { Router } from "express";
import { generateUser } from "../utils/generate-users.js";
import { EnumErrors, HttpResponses } from "../middleware/error-handle.js";

const router = Router();

const httpResp = new HttpResponses();

router.get("/", async (req, res) => {
  let users = [];
  for (let index = 0; index < 100; index++) {
    users.push(generateUser());
  }
  // return res.json({
  //   message: `generate users`,
  //   users,
  // });
  return httpResp.OK(res, `generate users`, users);
});

// TODO: Descomentar en la actividad
router.get("/:uid", async (req, res) => {
  const { uid } = req.params;
  if (!uid || isNaN(uid) || uid < 0) {
    return httpResp.BadRequest(
      res,
      `${EnumErrors.INVALID_PARAMS} - Invalid Params for userId `
    );
  }

  return res.json({
    message: `generate users`,
    user: { name: "mock data" },
  });
});

router.post("/", async (req, res, next) => {
  try {
    const { name } = req.body;
    // TODO: DESCOMENTAR
    if (!name) {
      return httpResp.BadRequest(res, `missing name in body`);
    }
    // throw new Error(EnumErrors.DATABASE_ERROR);
    return httpResp.OK(res, `generate users`, { name: `fake user` });
  } catch (error) {
    console.log("🚀 ~ file: user.routes.js:51 ~ router.post ~ error:", error);
    return httpResp.Error(res, `something wrong happens`, error.message);
  }
});

export default router;
