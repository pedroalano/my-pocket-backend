const { getAllCategories } = require("../controllers/categories.controller");
const categoryRepository = require("../repositories/category.repository");

function validateCategoryInput({ name, type }) {
  if (!name || !type) {
    throw new Error("Name and type are required");
  }

  if (!["income", "expense"].includes(type)) {
    throw new Error("Invalid category type");
  }
}

module.exports = {
  async createCategory(userId, data) {
    console.log("Creating category with data:", data);
    validateCategoryInput(data);

    return categoryRepository.create({
      userId,
      name: data.name,
      type: data.type,
    });
  },

  async getAllCategories(userId) {
    return categoryRepository.findAllByUser(userId);
  },

  async getCategoryById(userId, categoryId) {
    const category = await categoryRepository.findById(categoryId);

    if (!category || category.userId !== userId) {
      throw new Error("Category not found");
    }

    return category;
  },

  async updateCategory(userId, categoryId, data) {
    await this.getCategoryById(userId, categoryId);
    validateCategoryInput(data);

    return categoryRepository.update(categoryId, data);
  },

  async deleteCategory(userId, categoryId) {
    await this.getCategoryById(userId, categoryId);
    return categoryRepository.remove(categoryId);
  },
};
