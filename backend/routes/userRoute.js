const express = require("express");
const {UserLogin , UserSignUp} = require("../controllers/userController");
const { NormalToHasedPassWordConverter, PassWordVerification } = require("../middleware/AuthUser")

const Router = express.Router();

Router.post("/signup",NormalToHasedPassWordConverter,UserSignUp);
Router.get("/login",PassWordVerification,UserLogin);

module.exports = Router;