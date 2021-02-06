const { Router } = require("express");
const router = Router();
router.get("/test", (req, res) => {
  console.log("hello TEST");
  res.send("hello TEST!");
});

module.exports = router;
