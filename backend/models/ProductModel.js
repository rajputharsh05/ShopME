const mongoose = require("mongoose")

const ProductModel = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price : {
        type : Number,
        required : true
    },
    ProductType : {
        type : String,
        required : true
    },
    img : {
        type : String,
        required : true
    },

})