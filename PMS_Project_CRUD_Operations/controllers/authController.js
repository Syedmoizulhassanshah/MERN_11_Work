const authService = require("../services/authService");
const joi = require("joi");

const loginSchema = joi.object().keys({
  email: joi.string().required().email(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

const signupSchema = joi.object().keys({
  firstName: joi.string().required().min(3).max(40),
  lastName: joi.string().required().min(3).max(40),
  email: joi.string().required().email(),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: joi.ref("password"),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const loginResponse = authService.login(req.body);
      if (loginResponse.error) {
        res.send({
          error: loginResponse.error,
        });
      }
      res.send({
        response: loginResponse.response,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },

  signup: async (req, res) => {
    try {
      const validate = await signupSchema.validateAsync(req.body);
      const loginResponse = await authService.signup(validate);
      if (loginResponse.error) {
        res.send({
          error: loginResponse.error,
        });
      }
      res.send({
        response: loginResponse.response,
      });
    } catch (error) {
      res.send({
        error: error,
      });
    }
  },
};
