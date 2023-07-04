const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  console.log("ENTRO AL GET COOKIES", req.cookies);
  res.json({ cookie: req.cookies });
});

router.post("/create", (req, res) => {
  console.log("BODY****", req.body);

  res
    .cookie("cookieUser", { user: `${req.body.email}` }, { maxAge: 200000 })
    .send();
});

module.exports = router;
