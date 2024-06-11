const express= require('express')
const productController = require('../Controllers/productController')

const router= new express.Router()

router.get('/all-products',productController.allProducts)
router.get('/get-product/:id',productController.getProduct)

module.exports=router