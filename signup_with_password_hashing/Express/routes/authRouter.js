const authController = require("../controllers/authController");
const router = require("express").Router();

router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.post("/signup", authController.signup);
router.get("/resetpassword", authController.resetpassword);
router.get("/forgetpassword", authController.forgetpassword);

module.exports = router;
