const mongoose=require('mongoose')

const cartSchema= new mongoose.Schema({
    email:String,
    item_id:String
})

const cartModel= mongoose.model("carts", cartSchema)

module.exports= cartModel