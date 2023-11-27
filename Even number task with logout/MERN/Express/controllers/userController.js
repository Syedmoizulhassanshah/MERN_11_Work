const userService = require("../services/userService");

module.exports = {
  getuser: (req, res) => {
    try {
      const getUserResponse = userService.getuser();
      if (getUserResponse.error) {
        res.send({
          error: getUserResponse.error,
        });
      }
      res.send({
        response: getUserResponse.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  getallusers: (req, res) => {
    try {
      const getAllUserResponse = userService.getallusers();
      if (getAllUserResponse.error) {
        res.send({
          error: getAllUserResponse.error,
        });
      }
      res.send({
        response: getAllUserResponse.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  blockuser: (req, res) => {
    try {
      const blockUserResponse = userService.blockuser();
      if (blockUserResponse.error) {
        res.send({
          error: blockUserResponse.error,
        });
      }
      res.send({
        response: blockUserResponse.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  deleteuser: (req, res) => {
    try {
      const deleteUserPassword = userService.deleteuser();
      if (deleteUserPassword.error) {
        res.send({
          error: deleteUserPassword.error,
        });
      }
      res.send({
        response: deleteUserPassword.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },

  updateuser: (req, res) => {
    try {
      const updateUserResponse = userService.updateuser();
      if (updateUserResponse.error) {
        res.send({
          error: updateUserResponse.error,
        });
      }
      res.send({
        response: updateUserResponse.response,
      });
    } catch (error) {
      req.send({
        error: error,
      });
    }
  },
};
