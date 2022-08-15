const express=require("express")
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const userController=require("./User/router/user")
const orderController=require('./User/router/order')
const cartController=require('./User/router/cart')
const itemController=require('./User/router/item')

const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:false}))


// Databse Connection
const db="mongodb+srv://Shadab:Shadab786@cluster0.55j0kfh.mongodb.net/E_Commerce?retryWrites=true&w=majority"

mongoose.connect(db).then(()=> {
    console.log("Database Connected")
}).catch((err)=> {
    console.log(err)
})


app.get("/", (req,res)=> {
    res.send("Backend Work")
})


app.listen(3001, ()=> {
    console.log("App Listening at Port 3001")
})

// middleware
app.use("/user", userController)
app.use('/order', orderController)
app.use('/cart', cartController)
app.use('/item', itemController)



