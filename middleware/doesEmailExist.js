const {User}  = require("../models/User");

const doesEmailExist = async (req , res , next)=>{
    const {email , password , name} = req.body;
    let user = await User.find({email})
    if(user.length == 0){
        return next();
    }
    return res.send("email already exist")
}

module.exports = {doesEmailExist};