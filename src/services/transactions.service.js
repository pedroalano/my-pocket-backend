const transactionRepository = require("../repositories/transaction.repository");
const categoryRepository = require("../repositories/category.repository");

function validateTransactionInput({ amount, date, categoryId }) {
  if (amount == null || !date || !categoryId) {
    throw new Error("Amount, date, and categoryId are required");
  }

  if (isNaN(amount) || amount <= 0) {
    throw new Error("Invalid amount");
  }
}

module.exports = {
  async createTransaction(userId, data) {
    console.log("Creating transaction with data:", data);
    validateTransactionInput(data);

    // Verify category belongs to user
    const category = await categoryRepository.findById(data.categoryId);
    if (!category || category.userId !== userId) {
      throw new Error("Invalid category");
    }

    return transactionRepository.create({
      userId,
      amount: data.amount,
      type: category.type,
      categoryId: data.categoryId,
      date: data.date,
      description: data.description || "",
    });
  },

  async getAllTransactions(userId) {
    return transactionRepository.findAllByUser(userId);
  },

  async getTransactionById(userId, transactionId) {
    const transaction = await transactionRepository.findById(transactionId);

    if (!transaction || transaction.userId !== userId) {
      throw new Error("Transaction not found");
    }

    return transaction;
  },

  async updateTransaction(userId, transactionId, data) {
    const transaction = await this.getTransactionById(userId, transactionId);
    validateTransactionInput(data);

    // If categoryId is being updated, verify it belongs to user
    if (data.categoryId) {
      const category = await categoryRepository.findById(data.categoryId);
      if (!category || category.userId !== userId) {
        throw new Error("Invalid category");
      }
      data.type = category.type; // Update type based on new category
    }

    return transactionRepository.update(transactionId, data);
  },

  async deleteTransaction(userId, transactionId) {
    await this.getTransactionById(userId, transactionId);
    return transactionRepository.remove(transactionId);
  },
};
