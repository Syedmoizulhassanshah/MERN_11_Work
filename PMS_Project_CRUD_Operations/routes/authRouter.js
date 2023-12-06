const authController = require("../controllers/authController");
const router = require("express").Router();

router.post("/login", authController.login);
router.post("/signup", authController.signup);

module.exports = router;
