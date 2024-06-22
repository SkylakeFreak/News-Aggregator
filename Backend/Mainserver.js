const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');



const app=express();
app.use(cors({
    origin:"http://localhost:3005",
    methods:["GET","POST"],
    allowedHeaders:['Content-Type']
}));


mongoose.connect('mongodb+srv://dbuser:dbpassword@cluster0.b9xvqcb.mongodb.net/')


const newsdataschema=new mongoose.Schema({
    Group:String,
    Owner:String,
    Date:String,
    Title:String,
    Content:String,
    Imglink:String,
    Like:Number,
    Reported:Number,
    Approved:Boolean
})

const User=mongoose.model('User',newsdataschema);

app.post("/putData",express.json(),async(req,res)=>{
    const NewsData=req.body;
    console.log(NewsData)
    const newdata=new User(NewsData);
    await newdata.save();
    res.send("News Data Received")
})
app.listen(3004,()=>[
    console.log("server is Running on port 3004")
])