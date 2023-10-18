const connectDB = require("../utils/db");
const Product = require("../models/Product");
const Cloudinary = require("../utils/cloudinary");
const User = require("../models/User");
const Order = require("../models/Order");

const addProduct = async (req, res) => {
  try{
    await connectDB();
    const {name, category, brand, description, image, price, size, qty} = req.body;

    try{
      if(image){
        const uploadedImg = await Cloudinary.uploader.upload(image, {
          upload_preset : "qwikcart"
        })

        if(uploadedImg){
          const newProduct = new Product({
            name,
            category,
            brand,
            description,
            image:uploadedImg,
            price,
            size,
            qty
          })

          const savedItem = await newProduct.save();
          return res.status(200).json({
            success:true,
            message: "Item created successfully",
            newProduct
          })
        }
      }
    } 
    catch(err){
      console.log(err);
      return res.status(500).json({
        success:false,
        message: "Error occurred while uploading image",
        err
      })
    }
  } 
  catch(err){
    console.log(err);
    return res.status(500).json({
      success:false,
      message: "Error occurred while adding product",
      err
    })
  }
}

const updateProduct = async (req, res) => {
  try{
    await connectDB();
    const product = await Product.findById({_id:req.params.id});
    if(!product){
      return res.status(404).json({
        success:false,
        message: "Product not found"
      })
    }

    if(req.body.image){
      const uploadedImg = await Cloudinary.uploader.upload(req.body.image, {
        upload_preset : "qwikcart"
      })

      if(uploadedImg){
        req.body.image = uploadedImg;
      }
    }

    const editedProduct = await Product.updateOne({_id:req.params.id}, req.body);
    const finalProduct = await Product.findById({_id:req.params.id});
    return res.status(200).send({
      success:true,
      message: "Item edited successfully",
      editedProduct,
      finalProduct
    })
  } 
  catch(err){
    console.log(err);
    return res.status(500).json({
      success:false,
      message: "Error occurred while updating product",
      err
    })
  }
}

const deleteProduct = async (req, res) => {
  try{
    await connectDB();
    const product = await Product.findById({_id:req.params.id});
    if(!product){
      return res.status(404).json({
        success:false,
        message: "Product not found"
      })
    }

    const deletedProduct = await Product.deleteOne({_id:req.params.id});
    return res.status(200).send({
      success:true,
      message: "Item deleted successfully",
      deletedProduct
    })
  } 
  catch(err){
    console.log(err);
    return res.status(500).json({
      success:false,
      message: "Error occurred while deleting product",
      err
    })
  }
}

const allusers = async (req, res) => {
  try {
    await connectDB();

    const users = await User.find({});
    if (!users) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      })
    }

    return res.status(200).json({
      success: true,
      message: "Users found",
      users,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while fetching users",
      err,
    });
  }
};

const allorders = async (req, res) => {
    try {
      await connectDB();
  
      const orders = await Order.find({});
      if (!orders) {
        return res.status(404).json({
          success: false,
          message: "No orders found",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Orders found",
        orders,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Error occurred while fetching orders",
        err,
      });
    }
  };

module.exports = { addProduct, updateProduct, deleteProduct, allusers, allorders };
