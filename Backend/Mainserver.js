const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');



const app=express();
app.use(cors({
    origin:"http://localhost:3000",
    methods:["GET","POST"],
    allowedHeaders:['Content-Type']
}));


mongoose.connect('mongodb+srv://dbuser:dbpassword@cluster0.b9xvqcb.mongodb.net/')


const newsdataschema=new mongoose.Schema({
    Group:String,
    Owner:String,
    date:String,
    Title:String,
    Content:String,
    Imglink:String,
    Like:Number,
    Reported:Number,
    Approved:Boolean
})
const newuserschema=new mongoose.Schema({
    Dept:String,
    Editor:String,
    Email:String,
    Username:String,
    Password:String,
    Day:Number,
    Month:Number,
    Year:Number,
    Link:String,
    About:String,
    Newsuploaded:Array
})

const NewsDbs=mongoose.model('NewsDbs',newsdataschema);

app.post("/putData",express.json(),async(req,res)=>{
    const NewsData=req.body;
    console.log(NewsData.Email)
    const newdata=new NewsDbs(NewsData);
    await newdata.save();
    res.send("News Data Received")
})


const UserDbs=mongoose.model('UserDbs',newuserschema);
app.post("/putNewuser",express.json(),async(req,res)=>{
    const userdata=req.body;
    const emailaddress=await UserDbs.findOne({Email:userdata.Email})
    if (emailaddress){
        console.log("that user exists")
        res.send("false")
    }
    else{
        const newdata=new UserDbs(userdata);
        await newdata.save();
        console.log("added new")
        res.send("true")
    }
})

app.post("/checkUser",express.json(),async(req,res)=>{
    const userdata=req.body;
    const emailaddress=await UserDbs.findOne({Email:userdata.Email})
    if (emailaddress){
        if (emailaddress.Password===userdata.Password){
            res.send("true")
        }
        else{
            res.send("1")
        }
    }
    else{
        res.send("false")
    }
    
})

app.listen(3004,()=>[
    console.log("server is Running on port 3004")
])