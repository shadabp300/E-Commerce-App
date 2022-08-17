const express=require("express")
const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const cors=require('cors')
require('dotenv').config();
const userController=require("./User/router/user")
const orderController=require('./User/router/order')
const cartController=require('./User/router/cart')
const itemController=require('./User/router/item')

const app=express()

const protectRoutes=['/user/login', '/user/register']


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

// app.use((req,res, next)=> {
//     protectRoutes.forEach((route)=> {
//         if (req.url===route) {
//             next()
//         }
//         else {
//             const user=jwt.verify(req.headers.authorization, process.env.Secret_key)
            
//         }
//     })
//     next()
// })


// Databse Connection
//const db="mongodb+srv://Shadab:Shadab786@cluster0.55j0kfh.mongodb.net/E_Commerce?retryWrites=true&w=majority"

const db='mongodb://localhost:27017/E-commerce'

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



