const express = require('express');
const router = express.Router();
const userRouter = require('./user');
const visitorRouter = require('./visitor');
const authentication = require('../middlewares/authJWT');
const errorHandler = require("../middlewares/errorHandler");


router.get("/", (req, res, next) => {
    res.send("Welcome to BiLL Hospital - Customer Queue Management Website");
  });

router.use('/user', userRouter); 
router.use('/visitor', visitorRouter);



router.use(errorHandler);

module.exports = router;