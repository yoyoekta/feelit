const express = require('express')
const {checkAuthenticated} = require('../middlewares/checkAdmin') 
const { getProducts, getProductsById, getProductsByCategory, getProductsByBrand, getNewArrivals, getOrders, postOrder, getOrderById } = require('../controllers/users')
const router = express.Router()

// Routes

router.get('/allProducts', getProducts)
router.get('/products/:id', getProductsById)
router.get('/products/category/:category', getProductsByCategory)
router.get('/products/brand/:brand', getProductsByBrand)
router.get('/newarrivals', getNewArrivals)
router.get('/orders/:email', getOrders)
router.get('/orders/order/:id', getOrderById)
router.post('/post/order', postOrder)

module.exports = router