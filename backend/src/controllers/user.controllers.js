import mongoose from 'mongoose'
import { apiError} from '../utils/apiError.js'
import { apiResponse} from '../utils/apiResponse.js'
import { asyncHandler} from '../utils/asyncHandler.js'
import  {User} from '../models/users.models.js'
import {Review} from '../models/review.models.js' 
import {setUser,getUser} from "../utils/jwtVerification.js"
import {ContactFormSubmission} from "../models/contact.model.js"
import { Admin } from '../models/admin.models.js'
import jwt from 'jsonwebtoken'

const dashboard = asyncHandler(async(req,res)=>{
    return res.status(202).json(new apiResponse(202,req.user,"Dashboard Access Granted"))
})

const registeruser = asyncHandler( async(req,res)=>{
    // console.log(req.body);
    
    const {username,email,phone,company,password} = req.body

    // console.log(username,email,phone,company,password);

    if(!username||!email||!phone||!company||!password){
        throw new apiError(403,"please provide all user credentioals")
    }

    const existeduser = await User.findOne({email})

    if(existeduser) throw new apiError(402,'User already existed')

    const user = await User.create({
        username,
        email,
        phone,
        company,
        password
    })

    const userCreated = await User.findById(user._id).select('-password')

    if(!userCreated) throw new apiError(401,'Failed to create an account')

    return res.status(201).json(
        new  apiResponse(200,userCreated,"Account has been created")
    )
})


const loginUser = asyncHandler( async(req,res)=>{
    const {username,email,password} = req.body

    if(!email || !password) throw new apiError(401,"Fill all credentials")

    const userExisted = await User.findOne({email})
    if(!userExisted) throw new apiError(402,"you need to signup first")

    const verifyPassword = await userExisted.checkPassword(password)
    if (!verifyPassword) throw new apiError(403,"Invalid password")

    const getToken = setUser(userExisted)

    res.status(200)
    .cookie('uid',getToken)
    .json(
        new apiResponse(
           200,
           {
              user:userExisted, getToken
           },
           "user logged In successfully"
        )
     )
})

const logoutuser = asyncHandler( async (req,res)=>{
    return res.status(200)
    .clearCookie('uid')
    .json(new apiResponse(200,"Logged out Successfully"))
})

const writeReview = asyncHandler( async (req,res)=>{
    const {content,rating} = req.body
    if (!content && !rating){
        throw new apiError(400,'any one data must present')
    }
    const cookie = req.cookies
    if(!cookie)throw new apiError(405,"cookies not geeting in writeReview")
    const getDecode = getUser(cookie.uid)
    if(!getDecode)throw new apiError(406,"Not decoded")
    // console.log("decode is",getDecode);
    const userdetails = getDecode._id; 
    const response = await Review.create({
        userdetails,
        content,
        rating
    })
    

    if(!response) throw new apiError(402,"Response not generated in review write")

    const getreview = await Review.find({}).populate('userdetails')
    if(!getreview)throw new apiError(401,"not getting review from db")

    return res.status(202).json(getreview)
})

const readReview = asyncHandler(async(req,res)=>{
    const getreview = await Review.find({}).populate('userdetails')
    if(!getreview)throw new apiError(401,"not getting review from db")
    // console.log();
    return res.status(202).json(getreview)
})

const contactPage =asyncHandler( async(req,res)=>{
    const {catagory,message}= req.body
    if(!catagory ||!message)throw new apiError(403,"Fill the form first")
    
    const cookie = req.cookies
    if(!cookie)throw new apiError(405,"cookies not geeting in writeReview")
    const getDecode = getUser(cookie.uid)
    if(!getDecode)throw new apiError(406,"Not decoded")

    const userdetails = getDecode._id; 
    const response = await ContactFormSubmission.create({
        userdetails,
        catagory,
        message
    })

    if(!response) throw new apiError(402,"Response not generated in review write")

    return res.status(202).json("successfully submitted ! U r contacted by  team member")
})

const adminLogin = asyncHandler(async(req,res)=>{
    const {username,email,password} = req.body

    if(!email || !password) throw new apiError(401,"Fill all credentials")

    const userExisted = await Admin.findOne({email})
    if(!userExisted) throw new apiError(402,"you need to signup first")

    const verifyPassword = await userExisted.checkPassword(password)
    if (!verifyPassword) throw new apiError(403,"Invalid password")

    const getToken = setUser(userExisted)

    res.status(200)
    .cookie('adminuid',getToken)
    .json(
        new apiResponse(
           200,
           {
              user:userExisted, getToken
           },
           "admin logged In successfully"
        )
     )
})


const adminregister = asyncHandler(async (req,res)=>{
    const {username,email,password} = req.body

    // console.log(username,email,phone,company,password);

    if(!username||!email||!password){
        throw new apiError(403,"please provide all user credentioals")
    }

    const existeduser = await Admin.findOne({email})

    if(existeduser) throw new apiError(402,'Admin already existed')

    const user = await Admin.create({
        username,
        email,
        password
    })

    const userCreated = await Admin.findById(user._id).select('-password')

    if(!userCreated) throw new apiError(401,'Failed to create an account')

    return res.status(201).json(
        new  apiResponse(200,userCreated,"Account has been created")
    )
})

const getContact = asyncHandler(async(req,res)=>{
    const getreview = await ContactFormSubmission.find({}).populate('userdetails')
    if(!getreview)throw new apiError(401,"not getting review from db")
    console.log("From Contacts",getreview);
    return res.status(202).json(getreview)
})

const logoutadmin = asyncHandler(async(req,res)=>{
    return res.status(200)
    .clearCookie('adminuid')
    .json(new apiResponse(200,"Logged out Successfully"))
})

export{
    dashboard,
    registeruser,
    loginUser,
    logoutuser,
    writeReview,
    readReview,
    contactPage,
    adminLogin,
    adminregister,
    getContact,
    logoutadmin
}