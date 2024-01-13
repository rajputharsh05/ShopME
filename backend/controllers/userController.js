const  UsserModel  = require("../models/UserModel")


const UserLogin = async (req,res) => {
    const {username} = req.body;
    const UserInformationFromDatabase = await UsserModel.findOne({username})
    
    res.end("User Verified");
    res.redirect("/dashboard")
}


const UserSignUp = (req,res)=>{

    const { fname }= req.body
    const lname = req.body.lname
    const username = req.body.username
    const email = req.body.email
    const SecurePassWord = req.body.SecurePassWord
    const IsAdmin = req.body.IsAdmin
    
    try{   
        const NewUser = new UsserModel({
            firstname : fname,
            lastname : lname,
            email : email,
            username : username,
            password : SecurePassWord,
            IsAdmin : IsAdmin
        });

        NewUser.save();

    }catch(err){

        console.log(err);

    }
    
    res.json({"status" : "ok","Server":"Harsh's"})
}



module.exports = {
    UserSignUp,
    UserLogin,
}