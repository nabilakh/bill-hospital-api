const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class UserController {

  static signup(req, res, next) {
    const {
      fullName,
      username,
      email,
      password,
    } = req.body;
    const user = new User({
      fullName,
      username,
      email,
      password,
    });
    user
      .save()
      .then((result) => {
        res.status(201).json({
          msg: "Sign Up Success ! "
        });
      })
      .catch(next);
  }

  static signin(req, res, next) {
    User.findOne({
        email: req.body.email
      })
      .then((result) => {
        if (!result) {
          {
            name: "Combination_Not_Found"
          };
        }
        let passwordIsValid = bcrypt.compareSync(req.body.password, result.password)
        if (!passwordIsValid) {
          {
            name: "Combination_Not_Found"
          };
        }
        let token = jwt.sign({
          id: result.id
        }, process.env.secretKey, {
        })
        res.status(200).json({
          message: "Sign In Success !",
          AccessToken: token
        })
      })
      .catch((err) => next({
        name: "SignIn_Fail"
      }));
  };

  static detail(req, res, next) {
    User.findById(req.UserId)
      .then((result) => {
        res.status(200).json({
          result,
          data: User
        });
      })
      .catch(next);
  }

  static findAllUser(req, res) {
    User.find()
      .then((result) => {
        if (result.length > 0) {
          res
            .status(200)
            .json({
              message: "Success find all data User !",
              data: result
            });
        } else {
          {
            name: "All_User_Not_Found"
          };
        }
      })
      .catch((err) => ({
        name: "Fail_Found_All_User"
      }));
  }

  static updateUser(req, res) {
    const {
      id
    } = req.params;
    const {
      fullName,
      username,
      email,
      password,
    } = req.body;

    const updatedData = {
      fullName,
      username,
      email,
      password,
    };

    for (const key in updatedData) {
      if (!updatedData[key]) {
        delete updatedData[key];
      }
    }

    User.findByIdAndUpdate(id, updatedData, {
        new: true
      })
      .then((result) => {
        res
          .status(200)
          .json({
            message: "Success Update Data User !",
            data: result
          });
      })
      .catch((err) => ({
        name: "Update_User_Fail"
      }));

  }

  static deleteUser (req, res) {
    const { id } = req.params;
  
    User.findByIdAndDelete(id)
      .then((result) => {
        res
          .status(200)
          .json({ message: "Data User berhasil dihapus", data: result });
      })
      .catch((err) => ({
        name: "Fail_Delete_User"
      }));
  }

  }




module.exports = UserController;