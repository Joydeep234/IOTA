import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bbodyParser from 'body-parser'
const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))


app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded( { extended:true,limit:"16kb" } ))
app.use(cookieParser())
dotenv.config({
    path:'./.env'
})




import userRouter from "./src/routes/user.routes.js"

app.use('/api/v1/users',userRouter)

export {app}