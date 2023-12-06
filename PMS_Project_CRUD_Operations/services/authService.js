const authModel = require("../models/authModel");
const bcrypt = require("bcryptjs");

module.exports = {
  login: (body) => {
    try {
      const loginResponse = authModel.login();
      if (loginResponse.error) {
        return {
          error: loginResponse.error,
        };
      }
      return {
        response: loginResponse.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  signup: async (body) => {
    try {
      delete body.confirmPassword;
      console.log("check service");
      body.password = await bcrypt.hash(body.password, 2);
      const loginResponse = await authModel.signup(body);
      if (loginResponse.error) {
        return {
          error: loginResponse.error,
        };
      }
      return {
        response: loginResponse.response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
