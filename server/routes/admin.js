const express = require('express')
const { addProduct, updateProduct, deleteProduct, allusers, allorders } = require('../controllers/admin')
const checkAdmin = require('../middlewares/checkAdmin')
const router = express.Router()

// Routes

router.post('/addProduct', checkAdmin, addProduct)
router.delete('/delete/:id', checkAdmin, deleteProduct)
router.put('/edit/:id', checkAdmin, updateProduct)
router.get('/allUsers', checkAdmin, allusers)
router.get('/allOrders', checkAdmin, allorders)

module.exports = router