const budget = require("../repositories/budget.repository");
const categoryRepository = require("../repositories/category.repository");

function validateBudgetInput({ amount, categoryId, period }) {
  if (amount == null || !categoryId || !period) {
    throw new Error("Amount, categoryId, and period are required");
  }

  if (isNaN(amount) || amount <= 0) {
    throw new Error("Invalid amount");
  }
}

module.exports = {
  async createBudget(userId, data) {
    validateBudgetInput(data);

    // Verify category belongs to user
    const category = await categoryRepository.findById(data.categoryId);
    if (!category || category.userId !== userId) {
      throw new Error("Invalid category");
    }

    return budget.create({
      userId,
      amount: data.amount,
      categoryId: data.categoryId,
      period: data.period,
    });
  },

  async getAllBudgets(userId) {
    return budget.findAllByUser(userId);
  },

  async getBudgetById(userId, budgetId) {
    const budgetItem = await budget.findById(budgetId);

    if (!budgetItem || budgetItem.userId !== userId) {
      throw new Error("Budget not found");
    }

    return budgetItem;
  },

  async updateBudget(userId, budgetId, data) {
    const budgetItem = await this.getBudgetById(userId, budgetId);
    validateBudgetInput(data);

    // If categoryId is being updated, verify it belongs to user
    if (data.categoryId) {
      const category = await categoryRepository.findById(data.categoryId);
      if (!category || category.userId !== userId) {
        throw new Error("Invalid category");
      }
    }

    return budget.update(budgetId, data);
  },

  async deleteBudget(userId, budgetId) {
    const budgetItem = await this.getBudgetById(userId, budgetId);

    return budget.remove(budgetItem.id);
  },
};
