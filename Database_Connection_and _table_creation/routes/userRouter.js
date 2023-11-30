const userController = require("../controllers/userController");
const router = require("express").Router();

router.get("/getuser", userController.getuser);
router.get("/getallusers", userController.getallusers);
router.get("/blockuser", userController.blockuser);
router.get("/deleteuser", userController.deleteuser);
router.get("/updateuser", userController.updateuser);

module.exports = router;
