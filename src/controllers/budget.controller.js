const budgetService = require("../services/budget.service");

module.exports = {
  async getAllBudgets(req, res) {
    try {
      const budgets = await budgetService.getAllBudgets(req.user.id);
      res.status(200).json(budgets);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve budgets" });
    }
  },

  async createBudget(req, res) {
    try {
      const newBudget = await budgetService.createBudget(req.user.id, req.body);
      res.status(201).json(newBudget);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create budget" });
    }
  },

  async getBudgetById(req, res) {
    try {
      const budgetItem = await budgetService.getBudgetById(
        req.user.id,
        req.params.id
      );
      if (budgetItem) {
        res.status(200).json(budgetItem);
      } else {
        res.status(404).json({ error: "Budget not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve budget" });
    }
  },

  async updateBudget(req, res) {
    try {
      const updatedBudget = await budgetService.updateBudget(
        req.user.id,
        req.params.id,
        req.body
      );
      if (updatedBudget) {
        res.status(200).json(updatedBudget);
      } else {
        res.status(404).json({ error: "Budget not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update budget" });
    }
  },

  async deleteBudget(req, res) {
    try {
      await budgetService.deleteBudget(req.user.id, req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: "Failed to delete budget" });
    }
  },
};
