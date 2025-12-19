const express = require("express");
const router = express.Router();

const categoryController = require("../controllers/categories.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware);

router.get("/", categoryController.getAllCategories);
router.post("/", categoryController.createCategory);
router.get("/:id", categoryController.getCategoryById);
router.put("/:id", categoryController.updateCategory);
router.delete("/:id", categoryController.deleteCategory);

module.exports = router;
