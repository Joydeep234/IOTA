import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const adminSchema = new mongoose.Schema(
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
        password:{
            type:String
        },    
 },{
    timestamps:true
 })

 adminSchema.pre('save',async function(next){
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,10)
    next()
 })

 adminSchema.methods.checkPassword= async function(password){
    return await bcrypt.compare(password,this.password)
 }




export const Admin = mongoose.model('admin',adminSchema)