const express = require("express");
const categoriesRoutes = require("./categories.routes");
const router = express.Router();

router.get("/health", (req, res) => {
  res.json({ status: "I'm live!" });
});

router.use("/categories", categoriesRoutes);

module.exports = router;
