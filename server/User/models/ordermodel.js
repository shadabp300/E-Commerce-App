const mongoose=require('mongoose')

const orderschema= new mongoose.Schema({
    email: String,
    order_id:String,
    order_type:String,
    item_id:String,
})

const orderModel=mongoose.model("order", orderschema)

module.exports=orderModel