import exp from 'express'
import { UserTypeModel } from '../models/UserModel.js';
import { ArticleModel } from '../models/ArticleModel.js';
export const adminRoute=exp.Router();

//read all articles(optional)
adminRoute.get("/articles",async(req,res)=>{
    //read all articles which are active
    let articles=await ArticleModel.find({isArticleActive:true}).populate("author","firstName email")
    // send res
    res.status(200).json({message:"articles",payload:articles})
})
//Block user roles
adminRoute.put("/users/:userId",async(req,res)=>{
    //get user id
    let userId=req.params.userId;
    //block user
    let user = await UserTypeModel.findByIdAndUpdate(
        userId,
        {isActive:false},
        {new:true})
    //send res
    res.status(200).json({message:"User Blocked",payload:user})
})
//unblock user roles 
adminRoute.put("/users/unblock/:userId",async(req,res)=>{
    //get user id
    let userId=req.params.userId;
    //unblock user
    let user = await UserTypeModel.findByIdAndUpdate(
        userId,
        {isActive:true},
        {new:true})
    //send res
    res.status(200).json({message:"User Unblocked",payload:user})
})