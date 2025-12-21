const categoriesService = require("../services/categories.service");

module.exports = {
  async getAllCategories(req, res) {
    try {
      const categories = await categoriesService.getAllCategories(req.user.id);
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve categories" });
    }
  },

  async createCategory(req, res) {
    try {
      const newCategory = await categoriesService.createCategory(
        req.user.id,
        req.body
      );
      res.status(201).json(newCategory);
    } catch (error) {
      res.status(500).json({ error: "Failed to create category" });
    }
  },

  async getCategoryById(req, res) {
    try {
      const category = await categoriesService.getCategoryById(
        req.user.id,
        req.params.id
      );
      if (category) {
        res.status(200).json(category);
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve category" });
    }
  },

  async updateCategory(req, res) {
    try {
      const updatedCategory = await categoriesService.updateCategory(
        req.user.id,
        req.params.id,
        req.body
      );
      if (updatedCategory) {
        res.status(200).json(updatedCategory);
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to update category" });
    }
  },

  async deleteCategory(req, res) {
    try {
      const deleted = await categoriesService.deleteCategory(
        req.user.id,
        req.params.id
      );
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "Category not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete category" });
    }
  },
};
