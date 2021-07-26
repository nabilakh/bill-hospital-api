const express = require("express");
const router = express.Router();
const visitorController = require('../controllers/visitor');
const authJwt = require("../middlewares/authJwt");



router.post("/create", visitorController.create);

router.get("/all", visitorController.All);
router.get("/:id", visitorController.detail);
router.put("/:id", visitorController.update);
router.delete("/:id", visitorController.delete);


module.exports = router;