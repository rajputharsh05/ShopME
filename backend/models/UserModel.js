const mongoose = require("mongoose")

const userScheme = mongoose.Schema({
    email:{
        type : String,
        required : true,
        unique : true,
    },
    username:{
        type : String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        unique : true,
        required : true,
    },
    firstname : {
        type : String,
        required : true,
    },
    lastname : {
        type : String,
        required : true,
    },
    isAdmin : {
        type : Boolean,
        default : false,
    }

})

const UserModel = mongoose.model("user",userScheme);

module.exports = UserModel;