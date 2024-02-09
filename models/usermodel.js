const mongoose=require("mongoose")
const userschema=new mongoose.Schema(
    {
        name:String,
        age:String,
        mobileno:String,
        pincode:String,
        emailid:String,
        password:String

    }
)

module.exports=mongoose.model("user",userschema)