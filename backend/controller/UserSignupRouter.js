const express = require("express")
const router=express.Router()
const usersignupmodel=require("../model/UserSignupModel")
const bcrypt = require("bcryptjs")
const UserSignupModel = require("../model/UserSignupModel")

hashedPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/signup",async (req,res)=>{
    let {data} = {"data":req.body}
    let password=data.hospassword
    const hashedPassword=await hashedPasswordGenerator(password)
    data.hospassword=hashedPassword
    let user=new usersignupmodel(data)
    let result=user.save()
    res.json({
        status:"success"
    })
})

router.post("/signin",async (req,res)=>{
    let input = req.body
    let email=req.body.hosemail
    
    let data=await usersignupmodel.findOne({"hosemail":email})
    if(!data) {
        return res.json({
            status:"invalid user"
        })
    }
    else {
        let dbpassword=data.hospassword
        let inputpassword=req.body.hospassword
        const match=await bcrypt.compare(inputpassword,dbpassword)
        if (!match) {
            return res.json({
                status:"invalid password"
            })
        } else {
            return res.json({
                status:"success","userData":data
            })
        }
    }
})

module.exports=router