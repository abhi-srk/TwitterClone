const checkSignupFormat =  (req,res,next)=>{

    console.log("checking is the user us signup or not");

    console.log(req);

    const {name, email, password, cpassword} = req.body;

    if(password != cpassword){
        return res.send("worng password");
    }
    if(password.length < 6){
        return res.send("password must have atleast 6 chars")
    }
    if(name.length < 6){
        return res.send("please enter the vaild name");
    }
    if(!email.indcludes("@")){
        return res.send("email does not contain @")
    }

    next();
}

module.exports= {checkSignupFormat}