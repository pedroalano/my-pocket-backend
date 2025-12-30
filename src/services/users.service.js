const bcrypt = require("bcryptjs");
const Joi = require("joi");
const userRepository = require("../repositories/user.repository");

const userSchema = Joi.object({
  name: Joi.string().min(1).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .min(8)
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .required()
    .messages({
      "string.pattern.base":
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
      "string.min": "Password must be at least 8 characters long",
    }),
});

const updateUserSchema = Joi.object({
  name: Joi.string().min(1),
  email: Joi.string().email(),
}).min(1);

const excludePassword = (user) => {
  if (!user) return null;
  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

module.exports = {
  async createUser(userData) {
    const { error } = userSchema.validate(userData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const existingUser = await userRepository.findByEmail(userData.email);
    if (existingUser) {
      throw new Error("Email already in use");
    }

    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const user = await userRepository.create({
      ...userData,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return excludePassword(user);
  },

  async getAllUsers() {
    const users = await userRepository.findAll();
    return users.map(excludePassword);
  },

  async getUserById(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }
    return excludePassword(user);
  },

  async updateUser(id, userData) {
    const { error } = updateUserSchema.validate(userData);
    if (error) {
      throw new Error(error.details[0].message);
    }

    const existingUser = await userRepository.findById(id);
    if (!existingUser) {
      throw new Error("User not found");
    }

    if (userData.email && userData.email !== existingUser.email) {
      const emailInUse = await userRepository.findByEmail(userData.email);
      if (emailInUse) {
        throw new Error("Email already in use");
      }
    }

    const updatedUser = await userRepository.update(id, {
      ...userData,
      updatedAt: new Date().toISOString(),
    });

    return excludePassword(updatedUser);
  },

  async deleteUser(id) {
    const user = await userRepository.findById(id);
    if (!user) {
      throw new Error("User not found");
    }

    await userRepository.remove(id);
    return excludePassword(user);
  },
};
