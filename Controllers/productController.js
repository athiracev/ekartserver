const products = require('../Models/productModel')

exports.allProducts=async(req,res)=>{

    try {
        const result = await products.find()
        res.status(200).json(result)
        
    } catch (error) {
        res.status(401).json(error)
        
    }
}

exports.getProduct = async(req,res)=>{
    try {
        const id= req.params.id
        const result= await products.findOne({id})
        res.status(200).json(result)
        
    } catch (error) {
        res.status(401).json(error)
        
    }
}