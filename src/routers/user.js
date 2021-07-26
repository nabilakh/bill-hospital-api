const express = require("express");
const router = express.Router();
const userController = require('../controllers/user');
const authJwt = require("../middlewares/authJwt");
const {userAutho} = require('../middlewares/authorization');



router.post("/signup", userController.signup);
router.post("/signin", userController.signin);

router.get("/", authJwt, userController.detail);
router.get("/all", userController.findAllUser);
router.put("/:id", authJwt, userAutho, userController.updateUser);
router.delete("/:id", authJwt, userAutho, userController.deleteUser);


module.exports = router;