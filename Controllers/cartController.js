const carts = require('../Models/cartModel')

exports.addCart = async (req, res) => {
    try {
        const userId = req.payload

        const { id, title, price, image } = req.body

        const existingProduct = await carts.findOne({ userId, id })
        if (existingProduct) {
            existingProduct.quantity += 1
            existingProduct.totalPrice = existingProduct.price * existingProduct.quantity
            await existingProduct.save()
            res.status(200).json('Product again added cart')



        } else {
            const newCart = new carts({
                id, title, price, image, quantity: 1, totalPrice: price, userId
            })
            await newCart.save()
            res.status(200).json('Product added to cart')
        }

    } catch (error) {
        res.status(401).json(error)

    }
}


exports.getCart = async (req, res) => {
    try {
        const userId = req.payload
        const result = await carts.find({ userId })
        res.status(200).json(result)

    } catch (error) {
        res.status(401).json(error)



    }

}


exports.removeCart = async(req,res)=>{
    try {
        const cid = req.params.id
        // const userId = req.payload
        const result = await carts.findByIdAndDelete({_id:cid})
        res.status(200).json("Item removed from cart")

        
    } catch (error) {
        res.status(401).json(error)

        
    }
}