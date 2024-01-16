const express = require("express");
const { DashBoardForNormalUser, DashBoardForAdmin } = require("../controllers/dashboardController");
const AddProductToDatabase = require("../controllers/addProductController");
const Router = express.Router();

Router.get("/dashboard",DashBoardForNormalUser);
Router.get("/dashboard/admin",DashBoardForAdmin);
Router.post("/dashboard/admin/addproduct",AddProductToDatabase);

module.exports = Router;