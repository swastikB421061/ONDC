const mongoose = require('mongoose');
const { Schema } = mongoose;
const ProductSchema = new Schema({
    product_name: String,
    price: Number,
    category: String,
    image: String,
    rating: {
        type:Number,
        default:0
    },
    type: {
        type:String,
        default:""
    },
    author:{
        type:String,
        default:""
    },
    description: {
        type:String,
        default:""
    },
    gender: {
        type:String,
        default:""
    }
},{timestamps:true})

module.exports = mongoose.model("product", ProductSchema)