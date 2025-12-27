const db = require("../config/database");

module.exports = {
  async create(data) {
    return db.budget.create({ data });
  },

  async findAllByUser(userId) {
    return db.budget.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  },

  async findById(id) {
    return db.budget.findUnique({
      where: { id },
    });
  },

  async update(id, data) {
    return db.budget.update({
      where: { id },
      data,
    });
  },

  async remove(id) {
    return db.budget.delete({
      where: { id },
    });
  },
};
