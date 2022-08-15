const express=require('express')
const itemModel=require('../models/itemmodel')

const router = express.Router();

router.get("/", (req, res)=> {
    itemModel.find().then((itemData)=> {
        res.status(200).send({item: itemData});
    });
});


router.post("/add", (req, res)=> {
    itemModel.insertMany(req.body.items).then((itemData)=> {
        res.status(200).send("Data Added Successfully");
    });
});

module.exports = router;