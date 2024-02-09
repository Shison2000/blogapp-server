const express=require("express")
const userModel=require("../models/usermodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body
    let user=new userModel(data)
    let result=await user.save()
    res.json({
        status:"success"
    })
})

module.exports=router