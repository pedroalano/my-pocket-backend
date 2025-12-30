const usersService = require("../services/users.service");

module.exports = {
  async create(req, res) {
    try {
      const user = await usersService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const users = await usersService.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const user = await usersService.getUserById(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const user = await usersService.updateUser(req.params.id, req.body);
      return res.status(200).json(user);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ error: error.message });
      }
      if (error.message === "Email already in use") {
        return res.status(400).json({ error: error.message });
      }
      return res.status(400).json({ error: error.message });
    }
  },

  async remove(req, res) {
    try {
      const user = await usersService.deleteUser(req.params.id);
      return res.status(200).json(user);
    } catch (error) {
      if (error.message === "User not found") {
        return res.status(404).json({ error: error.message });
      }
      return res.status(500).json({ error: error.message });
    }
  },
};
