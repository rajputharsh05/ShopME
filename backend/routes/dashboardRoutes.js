const express = require("express");
const { DashBoardForNormalUser, DashBoardForAdmin } = require("../controllers/dashboardController");
const Router = express.Router();

Router.get("/dashboard",DashBoardForNormalUser);
Router.get("/dashboard/admin",DashBoardForAdmin);

module.exports = Router;