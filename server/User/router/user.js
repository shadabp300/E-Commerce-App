const express=require('express')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const SignupModel=require("../models/signup")


const router=express.Router()


router.post("/register", (req,res)=> {

    const {email, phone, password} = req.body
    
    if (!email || !phone || !password) {
        return res.status(400).send("Plzz Fill the Required Field")
    }

    SignupModel.findOne({email}).then((exist)=> {
        if (exist) {
            res.status(400).send("User Already Exist")
        }
        else {
            bcrypt.hash(password,10).then((hashpassword)=> {
                SignupModel.create({email, phone, password:hashpassword}).then(()=> {
                    res.status(200).send("user Successfully Created")
                })
            }).catch((err)=> {
                console.log(err)
            })
            
        }
    }).catch((err)=> {
        res.status(400).send(err)
    })


})




router.post("/login", (req,res)=> {
    let {email, password} =req.body

    if (!email || !password) {
        res.status(400).send("Plzz fill the required Field")
    }

    SignupModel.findOne({email}).then((exist)=> {
        if (exist){
            bcrypt.compare(password, exist.password).then((check)=> {


                if (check){
                    let auth=jwt.sign(exist.email, process.env.Secret_key)
                    res.status(200).send(auth)
                }
                else {
                    res.status(400).send("User Not Exist")
                }


            }).catch((err)=> {
                console.log(err)
            })


        }else {
            res.status(400).send("User Not Exist")
        }


    }).catch((err)=> {
        console.log(err)
    })
})


router.put("/updatepassword", (req,res)=> {
    let {email, oldpassword, newpassword} = req.body

    if (!email || !oldpassword || !newpassword) {
        return res.status(400).send("Plzz fill The Field First")
    }

    SignupModel.findOne({email}).then((exist)=> {
        if (exist){
            bcrypt.compare(oldpassword, exist.password).then((match)=> {
                if (match){
                    bcrypt.hash(newpassword, 12).then((hashpassword)=> {
                        SignupModel.updateOne({email}, {password:hashpassword}).then(()=> {
                            res.status(200).send("Password Update Successfully")
                        })
                    })
                }
                else {
                    res.status(400).send("Password MisMatch")
                }
            })
        }
        else {
            res.status(400).send("User Not Exist")
        }
    }).catch((err)=> {
        console.log(err)
    })


})


module.exports =router