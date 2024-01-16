const mongoose = require("mongoose")

const ProductModel = mongoose.Schema({
    name : {
        type : String,
        require : true
    },
    price : {
        type : String,
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

const productModel = mongoose.model("product",ProductModel);

module.exports = productModel;