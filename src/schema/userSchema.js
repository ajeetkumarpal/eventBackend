import mongoose from 'mongoose';
import bcrypt from "bcrypt";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        required:[true,"it is mandatory"],
    },
    password:{
        type:String,
        trim:true,
        required:[true,"it is mandatory"],
    },
    
},{timestamps:true});

userSchema.pre("save",async function(){
    if(!this.isModified("password")) return;
    const hashPassword=await bcrypt.hash(this.password,10);
    this.password=hashPassword;
    

})

const user=mongoose.model("User",userSchema);
export default user;