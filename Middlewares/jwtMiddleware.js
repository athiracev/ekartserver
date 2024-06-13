const jwt = require('jsonwebtoken')

    const jwtMiddle = (req, res, next) => {
    try {
        const token = req.headers['authorization'].split(" ")[1]
        if(token){
            const result = jst.verify(token,process.env.SECRET_KEY)
            const {userId}=result
            req.payload= userId
            next()
        }else{
            res.status(404).json('Invalid token,please login')
        }
    } catch (err) {
        console.log(err)
        res.status(406).json('Login First')
    }

    
}

module.exports = jwtMiddle