const User = require("../models/User");
const Visitor = require("../models/Visitor");


class authorization {
    static userAutho (req,res,next){
        const {id} = req.params;
        User.findById(req.UserId)
        .then((result)=>{
            if(result.id === id){ 
                next()
            } else { name: "Forbidden" }
        })
        .catch(next)    
    }
   
}

module.exports = authorization;