const express=require('express')
const cartModel=require('../models/cartmodel')

const router=express.Router()



router.post("/add", (req, res) => {
    const { email, item_id} = req.body;

    if (!email || !item_id) {
    return res.status(400).send("Plzz Fill the Field");
    }
    cartModel
        .create({ email, item_id})
        .then(() => {
        res.status(200).send("Item added Successfully");
        })
        .catch((err) => {
        console.log(err);
        });
});




router.delete('/remove/:id', (req,res)=> {
    cartModel.deleteOne({item_id: req.params.id}).then(()=> {
        res.status(200).send("Item removed Successfully")
    }).catch((err)=> {
        res.status(400).send(err)
    })
})


module.exports= router