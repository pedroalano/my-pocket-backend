const express = require("express");
const router = express.Router();

const transactionController = require("../controllers/transactions.controller");
const authMiddleware = require("../middlewares/auth.middleware");

router.use(authMiddleware);

router.get("/", transactionController.getAllTransactions);
router.post("/", transactionController.createTransaction);
router.get("/:id", transactionController.getTransactionById);
router.put("/:id", transactionController.updateTransaction);
router.delete("/:id", transactionController.deleteTransaction);

module.exports = router;
