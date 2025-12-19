const categories = [];

module.exports = {
  category: {
    create: async ({ data }) => {
      const newCategory = { id: Date.now().toString(), ...data };
      categories.push(newCategory);
      return newCategory;
    },

    findMany: async ({ where }) => {
      return categories.filter((c) => c.userId === where.userId);
    },

    findUnique: async ({ where }) => {
      return categories.find((c) => c.id === where.id);
    },

    update: async ({ where, data }) => {
      const index = categories.findIndex((c) => c.id === where.id);
      categories[index] = { ...categories[index], ...data };
      return categories[index];
    },

    delete: async ({ where }) => {
      const index = categories.findIndex((c) => c.id === where.id);
      return categories.splice(index, 1)[0];
    },
  },
};
