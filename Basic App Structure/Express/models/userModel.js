module.exports = {
  getuser: () => {
    try {
      return {
        response: "user returned.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  getallusers: () => {
    try {
      return {
        response: "returned all users.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  blockuser: () => {
    try {
      return {
        response: "user is blocked.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  deleteuser: () => {
    try {
      return {
        response: "user is deleted.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  updateuser: () => {
    try {
      return {
        response: "user is updated.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
