module.exports = {
  login: () => {
    try {
      return {
        response: "you are logged in",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  signup: async (body) => {
    try {
      return {
        response: body,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
