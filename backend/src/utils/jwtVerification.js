import jwt from 'jsonwebtoken'
import {apiError} from './apiError.js'


function setUser(user){
    try {
        if(!user) throw new apiError(401,"Unauthorized access")
        return jwt.sign(
            {
                _id:user._id,
                email:user.email,
                username:user.username
            },
            process.env.ACCESS_TOKEN_SECRET,
            {
                expiresIn:process.env.ACCESS_TOKEN_EXPIRY
            }
        )
    } catch (error) {
        throw new apiError(401,"something went wrong while generating token")
    }
}

function getUser(token){
    console.log(typeof(token),"token_is",token);
    try {
        if(!token) throw new apiError(402, "Unautoried token");
        return jwt.verify(
           token,
           process.env.ACCESS_TOKEN_SECRET,
        )
    } catch (error) {
        console.log(error);
        throw new apiError(402,'something went wrong while verifying  the token')
    }
}

export{
    setUser,
    getUser
}