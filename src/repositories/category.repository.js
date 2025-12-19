const db = require("../config/database");

module.exports = {
  async create(data) {
    return db.category.create({ data });
  },

  async findAllByUser(userId) {
    return db.category.findMany({
      where: { userId },
      orderBy: { name: "asc" },
    });
  },

  async findById(id) {
    return db.category.findUnique({
      where: { id },
    });
  },

  async update(id, data) {
    return db.category.update({
      where: { id },
      data,
    });
  },

  async remove(id) {
    return db.category.delete({
      where: { id },
    });
  },
};
