const mongoose=require('mongoose')

const signupSchema=new mongoose.Schema({
    email:String,

    phone:Number,

    password:String
})

const SignupModel=mongoose.model("users",signupSchema)

module.exports = SignupModel