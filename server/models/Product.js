const mongoose = require('mongoose');
const { Schema } = mongoose; 

const productSchema = new Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
    },
    category: {
        type: String,
        required: [true, "Product category is required"],
    },
    brand: {
        type: String,
        required: [true, "Product brand is required"],
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
    },
    image: {
        type: Object,
        required: [true, "Product image is required"],
    },
    price: {
        type: Number,
        required: [true, "Product price is required"],
    },
    size: {
        type: Number,
        required: [true, "Product size is required"],
    },
    qty: {
        type: Number,
        required: [true, "Product quantity is required"],
    },
    isnew: {
        type: Boolean,
        default: false,
    },
    isfeatured: {
        type: Boolean,
        default: false,
    }
}, {timestamps:true});

module.exports = mongoose.model("Product", productSchema);