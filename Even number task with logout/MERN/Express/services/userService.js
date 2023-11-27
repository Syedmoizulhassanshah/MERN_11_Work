const userModel = require("../models/userModel");

module.exports = {
  getuser: () => {
    try {
      const getUserResponse = userModel.getuser();
      if (getUserResponse.error) {
        return {
          error: getUserResponse.error,
        };
      }
      return {
        response: getUserResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  getallusers: () => {
    try {
      const getAllUserResponse = userModel.getallusers();
      if (getAllUserResponse.error) {
        return {
          error: getAllUserResponse.error,
        };
      }
      return {
        response: getAllUserResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  blockuser: () => {
    try {
      const blockUserResponse = userModel.blockuser();
      if (blockUserResponse.error) {
        return {
          error: blockUserResponse.error,
        };
      }
      return {
        response: blockUserResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  deleteuser: () => {
    try {
      const deleteUserResponse = userModel.deleteuser();
      if (deleteUserResponse.error) {
        return {
          error: deleteUserResponse.error,
        };
      }
      return {
        response: deleteUserResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },

  updateuser: () => {
    try {
      const updateUserResponse = userModel.updateuser();
      if (updateUserResponse.error) {
        return {
          error: updateUserResponse.error,
        };
      }
      return {
        response: updateUserResponse.response,
      };
    } catch (error) {
      return { error: error };
    }
  },
};
