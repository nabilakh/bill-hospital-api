const errorHandler = (err, req, res, next) => {
    console.log(err);
  
    let code;
    let name = err.name;
    let message;
  
    switch (name) {
      case "Email_Already_Exists":
        code = 409;
        message = "Email is already Exists !";
        break;
      case "Username_Already_Exists":
        code = 409;
        message = "Username is already Exists !";
        break;
      case "Database_Error":
        code = 500;
        message = "Database Mongoose Error !";
        break;
      case "SignIn_Fail":
        code = 409;
        message = "Signin fail !";
        break;
      case "Missing_Token":
        code = 401;
        message = "Access Token is Missing";
        break;
      case "Combination_Not_Found":
        code = 401;
        success = false;
        message = "Combination Email and Password doesn't match !";
        break;
      case "All_User_Not_Found":
        code = 404;
        message = "not found all data User";
        break;
      case "Fail_Found_All_User":
        code = 500;
        message = "Fail find all data User";
        break;
      case "Update_User_Fail":
        code = 500;
        message = "Fail update data User";
        break;
        case "Fail_Delete_User":
        code = 500;
        message = "Fail delete data User";
        break;
        case "Update_Visitor_Fail":
        code = 500;
        message = "Fail update data Visitor";
        break;
        case "Fail_Delete_Visitor":
        code = 500;
        message = "Fail delete data Visitor";
        break;
        case "All_Visitor_Not_Found":
        code = 404;
        message = "not found all data Visitor";
        break;
      case "Fail_Found_All_Visitor":
        code = 500;
        message = "Fail find all data Visitor";
        break;
      case "Forbidden":
        code = 403;
        message = "Forbidden Access to this !";
        break;
  
      default:
        code = 500;
        message = "Internal server error!";
    }
  
    return res.status(code).json({
      message
    });
  };
  
  module.exports = errorHandler;