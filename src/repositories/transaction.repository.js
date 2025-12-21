const db = require("../config/database");

module.exports = {
  async create(data) {
    return db.transaction.create({ data });
  },

  async findAllByUser(userId) {
    return db.transaction.findMany({
      where: { userId },
      orderBy: { date: "desc" },
    });
  },

  async findById(id) {
    return db.transaction.findUnique({
      where: { id },
    });
  },

  async update(id, data) {
    return db.transaction.update({
      where: { id },
      data,
    });
  },

  async remove(id) {
    return db.transaction.delete({
      where: { id },
    });
  },
};
