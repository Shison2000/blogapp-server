const express=require("express")
const userModel=require("../models/usermodel")
const bcrypt=require("bcryptjs")

const router=express.Router()

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)

}

router.post("/add",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPasswordGenerator(password).then(
        (hashedpassword)=>{
            console.log(hashedpassword)
            data.password=hashedpassword
            
            let user=new userModel(data)
            let result=user.save()
            res.json({
                status:"success"
            })
        }
    )
    
    
router.post("/signin",async(req,res)=>{
    let emailid=req.body.emailid
    let  epass=req.body.password
    let data=await userModel.findOne({"emailid":emailid})
})

//console.log(input)
if(!data)
{
    return res.json(
        {
            status:"invalid user"
        }
    )
}
let dbpass=data.password
const match=await bcrypt.compare(epass,dbpass)
if(!match)
{
    return res.json(
        {
            status:"incorrect password"
        }
    )
}
res.json(
    {
        status:"success","userdata":data
    }
)
})

module.exports=router