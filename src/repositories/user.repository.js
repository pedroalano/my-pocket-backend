const db = require("../config/database");

module.exports = {
  async create(data) {
    return db.user.create({ data });
  },

  async findAll() {
    return db.user.findMany();
  },

  async findById(id) {
    return db.user.findUnique({
      where: { id },
    });
  },

  async findByEmail(email) {
    return db.user.findByEmail({ email });
  },

  async update(id, data) {
    return db.user.update({
      where: { id },
      data,
    });
  },

  async remove(id) {
    return db.user.delete({
      where: { id },
    });
  },
};
