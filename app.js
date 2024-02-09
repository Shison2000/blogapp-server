const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userroute=require("./controllers/userrouter")

//alliasname
const app=express()

//middleware
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://shison2000:shison@cluster0.zexubyw.mongodb.net/carDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

//routing
app.use("/api/user",userroute)


app.listen(3001,()=>{
    console.log("server is running")
})