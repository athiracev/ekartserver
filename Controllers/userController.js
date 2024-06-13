const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')

exports.userRegister=async(req,res)=>{
    try{
        console.log(req.body)
        const {username,email,password}=req.body
        console.log(username,email,password);
        const existingUser=await users.findOne({email})
        if(existingUser){
            res.status(406).json("User Already Exist!!")
        }
        else{
            const nweUser= new users({
                username,email,password
            })
            await nweUser.save()
            res.status(200).json(nweUser)
        }
    }
    catch(err){
        console.log(err);
        res.status(401).json(err)
    }
   
}

exports.userLogin=async(req,res)=>{
    const {email,password}=req.body
    const existingUser=await users.findOne({email,password})
    if(existingUser){
        const token=jwt.sign({userId:existingUser._id},process.env.SECRET_KEY)
        res.status(200).json({existingUser,token})
    }
    else{
        res.status(406).json("Invalid Username/Password")
    }
}