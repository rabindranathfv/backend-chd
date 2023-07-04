const { Router } = require("express");

const router = Router();

router.get("/", async (req, res) => {
  const cookie = req.cookie;
  res.render("cookie", {
    cookie,
  });
});

module.exports = router;
