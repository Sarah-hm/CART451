const mongoose = require("mongoose");
const FashionSchema = new mongoose.Schema({
    id:String,
    gender:String,
    masterCategory:String,
    subCategory:String,
    articleType:String,
    baseColour:String,
    season:String,
    year:Number,
    usage:String,
    productDisplayName:String
})

const fashion = mongoose.model("fashionEntry",FashionSchema,"clothes-products");
module.exports = fashion;