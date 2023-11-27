const authService = require("../services/authService");

module.exports = {
  login: (req, res) => {
    try {
      console.log("req data body", parseInt(req.body.number)); //
      const loginResponse = authService.login(parseInt(req.body.number));
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

  signup: (req, res) => {
    try {
      const signupResponse = authService.signup();
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
