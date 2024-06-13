const express= require('express')
const productController = require('../Controllers/productController')
const userController = require('../Controllers/userController')
const wishlistController = require('../Controllers/wishlistController')
const jwtMiddle = require('../Middlewares/jwtMiddleware')

const router= new express.Router()

// to get all products
router.get('/all-products',productController.allProducts)
// to get one product 
router.get('/get-product/:id',productController.getProduct)
// to register user 
router.post('/register',userController.userRegister)
//  to login 
router.post('/login',userController.userLogin)
// add wishlist 

router.post('/addwishlist',jwtMiddle,wishlistController.addWishList)

module.exports=router