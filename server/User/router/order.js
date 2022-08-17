const express = require("express");
const jwt=require('jsonwebtoken')
const orderModel = require("../models/ordermodel");

const router = express.Router();


router.get('/', (req,res)=> {
    const user = jwt.verify(req.headers.authorization, process.env.Secret_key)
    res.send(user)
    
})



router.post("/add", (req, res) => {
    const { email, order_id, order_type, item_id} = req.body;

    if (!email || !order_id || !order_type || !item_id) {
    return res.status(400).send("Plzz Fill the Field");
    }
    orderModel
        .create({ email, order_id, order_type, item_id})
        .then(() => {
        res.status(200).send("Order Created Successfully");
        })
        .catch((err) => {
        console.log(err);
        });
});


router.delete('/cancel/:id', (req,res)=> {
    orderModel.deleteOne({order_id: req.params.id}).then(()=> {
        res.status(200).send("Order Deleted Successfully")
    }).catch((err)=> {
        res.status(400).send(err)
    })
})



module.exports = router;
