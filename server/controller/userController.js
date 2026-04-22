import { asyncHandler } from "../utilities/asyncHandlerUtility.js";
import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';
import { errorHandler } from "../utilities/errorHandlerUtility.js";
import User from "../models/User.js"
    export const register=asyncHandler(async (req,res,next)=>{
       const {name,password,email}=req.body;
       if(!email|| !name || !password){
        return next(new errorHandler("all fields required",400))
       }
       const user=await User.findOne({email})
       if(user){
        return next(new errorHandler("user already exisits",400))
       }
       const hashedPass=await bcrypt.hash(password,10);
        const newUser=await User.create({
            name,
            password:hashedPass,
            email
        })
        const tokenData={
            _id:newUser._id
        };
        const token=jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE})
        res.status(200).cookie("token",token,{
            expires:new Date(Date.now() + process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly:true,
            secure:true,
            sameSite:'None'
        },
        
    ).json({
        success:true,
        responseData:{
            newUser,
            token
        }
    })
    })
//login
    //chk if users has entered all req fields
    //find the user with the help of username
    //chk if password is valid
    //convert the id into token
    //set the cookies
    //send response (user,token)
    export const login=asyncHandler(async (req,res,next)=>{
        const {email,password}=req.body;
        if(!email || !password){
            return next(new errorHandler("all fields required",400))
        }
        const user=await User.findOne({email})
        if(!user){
            return next(new errorHandler("invalid email or password",400))
        }
        const validPass=await bcrypt.compare(password,user.password)
        if(!validPass){
            return next(new errorHandler("invalid usename or password",400))
        }
        const tokenData={
            _id:user._id
        }
        const token=jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:process.env.JWT_EXPIRE})
        res.status(200).cookie("token",token,{
            expires:new Date(Date.now() + process.env.JWT_EXPIRES * 24 * 60 * 60 * 1000),
            httpOnly:true,
            secure:true,
            sameSite:'None'
        }).json({
            success:true,
            responseData:{
                user,
                token
            }
        })
    })
//logout controller 
    export const logout = asyncHandler(async (req, res, next) => {

    res.status(200).cookie("token", "", {
        expires: new Date(Date.now()), 
         httpOnly: true,
        secure: true,
        sameSite: 'None' 
    }).json({
        success: true,
        message: "Logged out successfully"
    });
});