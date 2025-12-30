const categories = [];
const transactions = [];
const budgets = [];
const users = [];

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
  transaction: {
    create: async ({ data }) => {
      const newTransaction = { id: Date.now().toString(), ...data };
      transactions.push(newTransaction);
      return newTransaction;
    },

    findMany: async ({ where }) => {
      return transactions.filter((t) => t.userId === where.userId);
    },

    findUnique: async ({ where }) => {
      return transactions.find((t) => t.id === where.id);
    },

    update: async ({ where, data }) => {
      const index = transactions.findIndex((t) => t.id === where.id);
      transactions[index] = { ...transactions[index], ...data };
      return transactions[index];
    },

    delete: async ({ where }) => {
      const index = transactions.findIndex((t) => t.id === where.id);
      return transactions.splice(index, 1)[0];
    },
  },
  budget: {
    create: async ({ data }) => {
      const newBudget = { id: Date.now().toString(), ...data };
      budgets.push(newBudget);
      return newBudget;
    },
    findMany: async ({ where }) => {
      return budgets.filter((b) => b.userId === where.userId);
    },
    findUnique: async ({ where }) => {
      return budgets.find((b) => b.id === where.id);
    },
    update: async ({ where, data }) => {
      const index = budgets.findIndex((b) => b.id === where.id);
      budgets[index] = { ...budgets[index], ...data };
      return budgets[index];
    },
    delete: async ({ where }) => {
      const index = budgets.findIndex((b) => b.id === where.id);
      return budgets.splice(index, 1)[0];
    },
  },
  user: {
    create: async ({ data }) => {
      const newUser = { id: Date.now().toString(), ...data };
      users.push(newUser);
      return newUser;
    },
    findMany: async () => {
      return users;
    },
    findUnique: async ({ where }) => {
      return users.find((u) => u.id === where.id);
    },
    findByEmail: async ({ email }) => {
      return users.find((u) => u.email === email);
    },
    update: async ({ where, data }) => {
      const index = users.findIndex((u) => u.id === where.id);
      users[index] = { ...users[index], ...data };
      return users[index];
    },
    delete: async ({ where }) => {
      const index = users.findIndex((u) => u.id === where.id);
      return users.splice(index, 1)[0];
    },
  },
};
