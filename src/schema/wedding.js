import mongoose from "mongoose";

const weddingSchema=new mongoose.Schema({
  userId:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:[true,"it is mandatory"]},
  eventName:{type:String,trim:true,required:[true,"it is mandatory"]},
  date:{type:String,trim:true,required:[true,"it is mandatory"]},
  time:{type:String,trim:true,required:[true,"it is mandatory"]},
  guests:{type:Number,trim:true,required:[true,"it is mandatory"]},
  amount:{type:Number,trim:true,required:[true,"it is mandatory"]}
},{timestamps:true})

export const wedding=mongoose.model("Wedding",weddingSchema);

