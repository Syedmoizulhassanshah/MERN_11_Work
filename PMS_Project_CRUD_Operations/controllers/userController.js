const userService = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
  firstName: joi.string().required().min(3).max(40),
  lastName: joi.string().required().min(3).max(40),
  email: joi.string().required().email(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: joi.ref("password"),
  role: joi.string().valid("instructor", "trainee"),
});

const getByUserIdSchema = joi.object().keys({
  userId: joi.string().required(),
});

const paginationSchema = joi.object().keys({
  pageNo: joi.number().required().greater(0),
  limit: joi.number().valid(5, 10),
});

module.exports = {
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const user = await userService.createUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const validate = await paginationSchema.validateAsync(req.query);
      const users = await userService.getAllUsers(validate);
      if (users.error) {
        return res.send({
          error: users.error,
        });
      }
      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const validate = await getByUserIdSchema.validateAsync(req.query);
      const user = await userService.deleteUser(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error,
      });
    }
  },
};
