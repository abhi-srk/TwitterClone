require('dotenv').config()
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const jwt_secrets=process.env.JWT_TOKEN

const validateToken= async (req,res,next)=>{

    try{
        const token = req.header('token');
        if(token==""){
            return res.status(401).send({error:"Invalid token 1"});
        }
        console.log(token);
        const dectoken = await jwt.decode(tokwn,jwt_secrets);
        req.userid=dectoken.id;
        next();
    }catch{
        return res.status(401).send({error : "invalid token 2"});
    }
}

module.exports = {validateToken};