const mongoose=require('mongoose');
const newsDataSchema=new mongoose.Schema({
    Group:String,
    Owner:String,
    Date:{type:String,default:() => new Date().toISOString().split('T')[0]},
    Title:String,
    Content:String,
    imgUrl:String,
    Like:Number,
    Reported:Number,
    Approved:Boolean
})

module.exports=mongoose.model("newsData",newsDataSchema);