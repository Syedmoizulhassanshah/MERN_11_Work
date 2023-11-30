const authModel = require("../models/authModel");

module.exports = {
  login: () => {
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
      return { error: error };
    }
  },
  logout: () => {
    try {
      const logoutResponse = authModel.logout();
      if (logoutResponse.error) {
        return {
          error: logoutResponse.error,
        };
      }
      return {
        response: logoutResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
  signup: () => {
    try {
      const signupResponse = authModel.signup();
      if (signupResponse.error) {
        return {
          error: signupResponse.error,
        };
      }
      return {
        response: signupResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  resetpassword: () => {
    try {
      const resetPassword = authModel.resetpassword();
      if (resetPassword.error) {
        return {
          error: resetPassword.error,
        };
      }
      return {
        response: resetPassword.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  forgetpassword: () => {
    try {
      const forgetPassword = authModel.forgetpassword();
      if (forgetPassword.error) {
        return {
          error: forgetPassword.error,
        };
      }
      return {
        response: forgetPassword.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
