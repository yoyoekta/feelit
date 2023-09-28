const express = require('express')
const { addProduct, getProducts, updateProduct, deleteProduct, getProductsById, getProductsByCategory, getProductsByBrand } = require('../controllers/admin')
const checkAdmin = require('../middlewares/checkAdmin')
const router = express.Router()

// Routes

router.post('/addProduct', checkAdmin, addProduct)
router.delete('/delete/:id', checkAdmin, deleteProduct)
router.put('/edit/:id', checkAdmin, updateProduct)

module.exports = router