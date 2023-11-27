module.exports = {
  login: () => {
    try {
      return {
        response: "your are logged in",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  logout: () => {
    try {
      return {
        response: "your are logged-out.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  signup: () => {
    try {
      return {
        response: "your are signed-up.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  resetpassword: () => {
    try {
      return {
        response: "resetted your password is.",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  forgetpassword: () => {
    try {
      return {
        response: "forgot your password?",
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};
