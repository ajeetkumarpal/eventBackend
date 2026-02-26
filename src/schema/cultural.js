import mongoose from "mongoose";

const culturalSchema=new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:[true,"it is mandatory"]},
  eventName:{type:String,trim:true,required:[true,"it is mandatory"]},
  name:{type:String,trim:true,required:[true,"it is mandatory"]},
  email:{type:String,trim:true,required:[true,"it is mandatory"]},
  package:{type:String,trim:true,required:[true,"it is mandatory"]},
  amount:{type:Number,trim:true,required:[true,"it is mandatory"]}
},{timestamps:true})

export const cultural=mongoose.model("Cultural",culturalSchema);

