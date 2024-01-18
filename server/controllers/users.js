const connectDB = require("../utils/db");
const Product = require("../models/Product");
const Cloudinary = require("../utils/cloudinary");
const Order = require("../models/Order");
const User = require("../models/User");

const getProducts = async (req, res) => {
  try {
    await connectDB();
    const queryObj = {};

    if (req.query.category) {
      queryObj.category = { $in: req.query.category.split(",") };
    }
    if (req.query.brand) {
      queryObj.brand = { $in: req.query.brand.split(",") };
    }

    console.log(queryObj);
    const products = await Product.find(queryObj);
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products found",
      products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while fetching products",
      err,
    });
  }
};

const getProductsById = async (req, res) => {
  try {
    await connectDB();
    const product = await Product.findById({ _id: req.params.id });
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product found",
      product,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while fetching product",
      err,
    });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find({ category: req.params.category });
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products found",
      products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while fetching products",
      err,
    });
  }
};

const getProductsByBrand = async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find({ brand: req.params.brand });
    if (!products) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products found",
      products,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while fetching products",
      err,
    });
  }
};

const getNewArrivals = async (req, res) => {
  try {
    await connectDB();
    const newarrivals = await Product.find({ isnew: true });
    console.log(newarrivals);
    return res.status(200).json({
      success: true,
      message: "New Arrivals found",
      newarrivals,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred in fetching new arrivals",
      err,
    });
  }
};

const getOrders = async (req, res) => {
  try {
    await connectDB();
    const user = await User.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log(user._id);
    const orders = await Order.find({ user: user._id });
    console.log(orders);
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

const getOrderById = async (req, res) => {
  try {
    await connectDB();
    // const user = await User.find({ email: req.params.email });
    // if (!user) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "User not found",
    //   });
    // }

    const order = await Order.findById({ _id: req.params.id });
    console.log(order);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: "No such order found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Order found",
      order,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while fetching order",
      err,
    });
  }
};

const postOrder = async (req, res) => {
  const { method, items, total, address, user } = await req.body;
  try {
    await connectDB();
    const founduser = await User.findOne({ email: user });
    if (!founduser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("User id is ", founduser._id);
    const neworder = new Order({
      method: method,
      items: items,
      total: total,
      address: address,
      user: founduser._id,
    });
    const response = await neworder.save();
    return res.status(200).json({
      success: true,
      message: "Order created successfully",
      response,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: "Error occurred while processing order",
      err,
    });
  }
};

module.exports = {
  getProducts,
  getProductsById,
  getProductsByCategory,
  getProductsByBrand,
  getNewArrivals,
  getOrders,
  getOrderById,
  postOrder,
};
