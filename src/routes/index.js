const express = require("express");
const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "I'm live!" });
});

module.exports = router;
