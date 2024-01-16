const productModel = require("../models/ProductModel");

const AddProductToDatabase = async (req,res) => {
    const { name , price , ProductType , img } = req.body;

    try {
        const NewProductToBeAdded = new productModel({
            name,
            price,
            ProductType,
            img,
        })
        NewProductToBeAdded.save();
    }catch(error){
        console.log(error);
    }
    res.json({"product updated" : "Amazon"});
}

module.exports = AddProductToDatabase;