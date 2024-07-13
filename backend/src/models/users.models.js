import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:true,
            unique:false
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phone:{
            type:Number
        },
        company:{
            type:String,
        },
        password:{
            type:String
        },    
 },{
    timestamps:true
 })

 userSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
 })

 userSchema.methods.checkPassword= async function(password){
    return await bcrypt.compare(password,this.password)
 }




export const User = mongoose.model('user',userSchema)