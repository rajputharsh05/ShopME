const UserModel = require("../models/UserModel")

const UserLogin = async (req, res) => {

    const { username } = req.query;

    try {        
        const UserInformationFromDatabase = await UserModel.findOne({ username });
        if (UserInformationFromDatabase.isAdmin) {
            res.redirect("http://localhost:4000/dashboard/admin");
        } else {
            res.redirect("http://localhost:4000/dashboard");
        }
    } catch (error) {
        console.log(error);
        res.json({"internal server error":"401"});
    }

}

const UserSignUp = (req, res) => {

    const { fname , lname , username , email , SecurePassWord , isAdmin} = req.body

    try {

        const NewUser = new UserModel({ firstname: fname , lastname: lname , email: email , username: username , password: SecurePassWord , isAdmin: isAdmin});

        NewUser.save();

    } catch (err) {

        console.log(err);

    }

    res.json({ "status": "ok", "Server": "Harsh's" })
}


module.exports = {
    UserSignUp,
    UserLogin,
}