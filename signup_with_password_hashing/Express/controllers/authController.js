const authService = require("../services/authService");
const joi = require("joi");

const loginSchema = joi.object().keys({
  email: joi.string().required().email().min(3).max(60),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
});

const signupSchema = joi.object().keys({
  firstName: joi.string().required().min(3).max(40),
  lastName: joi.string().required().min(3).max(40),
  email: joi.string().required().email().min(3).max(60),
  password: joi.string().required().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
  confirmPassword: joi.ref("password"),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      console.log("login schema body:", req.body); //
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
      req.send({
        error: error,
      });
    }
  },

  logout: (req, res) => {
    try {
      console.log("req query", req.query);
      const logoutResponse = authService.logout();
      if (logoutResponse.error) {
        res.send({
          error: logoutResponse.error,
        });
      }
      res.send({
        response: logoutResponse.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  signup: async (req, res) => {
    try {
      const validate = await signupSchema.validateAsync(req.body);
      console.log("signup schema body:", req.body); //

      const signupResponse = await authService.signup(validate);
      if (signupResponse.error) {
        res.send({
          error: signupResponse.error,
        });
      }
      res.send({
        response: signupResponse.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  resetpassword: (req, res) => {
    try {
      const resetPassword = authService.resetpassword();
      if (resetPassword.error) {
        res.send({
          error: resetPassword.error,
        });
      }
      res.send({
        response: resetPassword.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  forgetpassword: (req, res) => {
    try {
      const forgetPassword = authService.forgetpassword();
      if (forgetPassword.error) {
        res.send({
          error: forgetPassword.error,
        });
      }
      res.send({
        response: forgetPassword.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },
};
