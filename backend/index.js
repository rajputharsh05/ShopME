const express = require("express")
const app = express();
const bodyparser = require('body-parser')
const UserRouter = require("./routes/userRoute");
const DashBoardRouter = require("../backend/routes/dashboardRoutes");
const ConnectToDataBase = require("./Database/db")
const PORT = 4000 

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());


app.use(UserRouter)
app.use(DashBoardRouter)

app.listen(PORT , ()=>{
    console.log("Server is started");
    ConnectToDataBase();
})


  