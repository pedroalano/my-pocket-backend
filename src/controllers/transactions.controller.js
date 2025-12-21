const transactionsService = require("../services/transactions.service");

module.exports = {
  async getAllTransactions(req, res) {
    try {
      const transactions = await transactionsService.getAllTransactions(
        req.user.id
      );
      res.status(200).json(transactions);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve transactions" });
    }
  },

  async createTransaction(req, res) {
    try {
      const newTransaction = await transactionsService.createTransaction(
        req.user.id,
        req.body
      );
      res.status(201).json(newTransaction);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create transaction" });
    }
  },

  async getTransactionById(req, res) {
    try {
      const transaction = await transactionsService.getTransactionById(
        req.user.id,
        req.params.id
      );
      if (transaction) {
        res.status(200).json(transaction);
      } else {
        res.status(404).json({ error: "Transaction not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve transaction" });
    }
  },

  async updateTransaction(req, res) {
    try {
      const updatedTransaction = await transactionsService.updateTransaction(
        req.user.id,
        req.params.id,
        req.body
      );
      if (updatedTransaction) {
        res.status(200).json(updatedTransaction);
      } else {
        res.status(404).json({ error: "Transaction not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update transaction" });
    }
  },

  async deleteTransaction(req, res) {
    try {
      const deleted = await transactionsService.deleteTransaction(
        req.user.id,
        req.params.id
      );
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Transaction not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete transaction" });
    }
  },
};
