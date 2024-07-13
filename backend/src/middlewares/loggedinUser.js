import { apiError } from '../utils/apiError.js'
import { apiResponse } from '../utils/apiResponse.js'
import {getUser} from '../utils/jwtVerification.js'

const usercookieVerification = (req,res,next)=>{
    const token = req.cookies.uid

    if(!token) throw new apiError(405,"Logged in again")

    try {
        const userVerification = getUser(token)
        console.log(userVerification);
        if(!userVerification) throw new apiError(404,"cookie not matched")
        req.user = userVerification
        next();

    } catch (error) {
        console.log(error);
        throw new apiError(404,"Invalid Cookie")
    }
    
    // res.message(apiResponse(202,"token verified and loggedin"))

}
const usercookieVerification2 = (req,res,next)=>{
    const token = req.cookies.adminuid

    if(!token) throw new apiError(405,"Logged in again")

    try {
        const userVerification = getUser(token)
        console.log(userVerification);
        if(!userVerification) throw new apiError(404,"cookie not matched")
        req.user = userVerification
        next();

    } catch (error) {
        console.log(error);
        throw new apiError(404,"Invalid Cookie")
    }
    
    // res.message(apiResponse(202,"token verified and loggedin"))

}

export  {usercookieVerification,usercookieVerification2}; 