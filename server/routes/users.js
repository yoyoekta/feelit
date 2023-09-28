const express = require('express')
const { getProducts, getProductsById, getProductsByCategory, getProductsByBrand } = require('../controllers/users')
const router = express.Router()

// Routes

router.get('/allProducts', getProducts)
router.get('/products/:id', getProductsById)
router.get('/products/category/:category', getProductsByCategory)
router.get('/products/brand/:brand', getProductsByBrand)

module.exports = router