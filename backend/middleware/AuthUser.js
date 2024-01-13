const bcrypt = require("bcrypt");
const UserModel = require("../models/UserModel");

const NormalToHasedPassWordConverter = async (req,res,next) => {

    const {password} = req.body;
    
    req.body.SecurePassWord = await bcrypt.hash(password,10);
    
    next();
}


const PassWordVerification = async (req,res,next) => {
    const {password , username} = req.body;

    try {

        const UserDetailsFromDatabase = await UserModel.findOne({username});

        if(UserDetailsFromDatabase)
        {

            const UserPassWordFromDataBase = UserDetailsFromDatabase.password;
            console.log(UserDetailsFromDatabase,password);
            await bcrypt.compare(password,UserPassWordFromDataBase) ? next() : res.end("User Not Verified");
            
        }else{
            res.json("User Not Found !!")
        }
    }catch(error) {
        res.json("Internal Server Error !")
        console.log(error);
    }
}

module.exports = {
    NormalToHasedPassWordConverter,
    PassWordVerification,
}