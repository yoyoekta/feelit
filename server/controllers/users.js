const connectDB = require("../utils/db");
const Product = require("../models/Product");
const Cloudinary = require("../utils/cloudinary");

const getProducts = async (req, res) => {
    try{
        await connectDB();
        const products = await Product.find({});
        if(!products){
            return res.status(404).json({
                success:false,
                message: "No products found"
            })
        }

        return res.status(200).json({
            success:true,
            message: "Products found",
            products
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message: "Error occurred while fetching products",
            err
        })
    }
}

const getProductsById = async (req, res) => {
    try{
        await connectDB();
        const product = await Product.findById({_id:req.params.id});
        if(!product){
            return res.status(404).json({
                success:false,
                message: "Product not found"
            })
        }

        return res.status(200).json({
            success:true,
            message: "Product found",
            product
        })

    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message: "Error occurred while fetching product",
            err
        })
    }
}

const getProductsByCategory = async (req, res) => {
    try{
        await connectDB();
        const products = await Product.find({category:req.params.category});
        if(!products){
            return res.status(404).json({
                success:false,
                message: "No products found"
            })
        }

        return res.status(200).json({
            success:true,
            message: "Products found",
            products
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message: "Error occurred while fetching products",
            err
        })
    }
}

const getProductsByBrand = async (req, res) => {
    try{
        await connectDB();
        const products = await Product.find({brand:req.params.brand});
        if(!products){
            return res.status(404).json({
                success:false,
                message: "No products found"
            })
        }

        return res.status(200).json({
            success:true,
            message: "Products found",
            products
        })
    }
    catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message: "Error occurred while fetching products",
            err
        })
    }
}

module.exports = { getProducts, getProductsById, getProductsByCategory, getProductsByBrand }