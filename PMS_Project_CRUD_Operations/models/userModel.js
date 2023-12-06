const { models } = require("./index");

module.exports = {
  createUser: async (body, userId) => {
    try {
      const user = await models.users.create({
        userId,
        ...body,
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getUserByEmail: async (email) => {
    try {
      const user = await models.users.findOne({
        where: {
          email: email,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getAllUsers: async (offset, limit) => {
    try {
      const users = await models.users.findAll({
        // attributes : ["firstName", "lastName", "role", "email"]
        attributes: {
          exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
        },

        offset: offset,
        limit: limit,
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteUser: async (userId) => {
    try {
      const user = await models.users.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
