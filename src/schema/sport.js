import mongoose from "mongoose";

const sportSchema=new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:[true,"it is mandatory"]},
  eventName:{type:String,trim:true,required:[true,"it is mandatory"]},
  name:{type:String,trim:true,required:[true,"it is mandatory"]},
  email:{type:String,trim:true,required:[true,"it is mandatory"]},
  phone:{type:Number,trim:true,required:[true,"it is mandatory"]},
  teamName:{type:String,trim:true,required:[true,"it is mandatory"]},
  package:{type:String,trim:true,required:[true,"it is mandatory"]},
  amount:{type:Number,trim:true,required:[true,"it is mandatory"]}
},{timestamps:true})

export const sport=mongoose.model("Sport",sportSchema);

