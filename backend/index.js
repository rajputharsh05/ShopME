const express = require("express")
const app = express();
const bodyparser = require('body-parser')
const Router = require("./routes/userRoute");
const ConnectToDataBase = require("./Database/db")
const PORT = 4000 

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

app.use(Router)

app.listen(PORT , ()=>{
    console.log("Server is started");
    ConnectToDataBase();
})