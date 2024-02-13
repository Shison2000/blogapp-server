const express=require("express")
const postmodel=require("../models/postmodel")

const router=express()

router.post("/add",async(req,res)=>{
    let data=req.body
    let postadd=new postmodel(data)
    let result=await postadd.save()
    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await postmodel.find()
    res.json(data)
})

module.exports=router