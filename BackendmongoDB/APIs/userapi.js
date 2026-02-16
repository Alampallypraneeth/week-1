import exp from "express";
// Inside userapi.js
import { UserModel } from "../models/userModel.js";

export const userApp = exp.Router();


// GET all users
userApp.get("/users", async (req, res) => {
  let users=await UserModel.find()
  res.status(200).json({message:"all users",payload:users})
});
// create user
userApp.post("/users",async(req,res)=>{
  let newUser=req.body;
  let newUserDoc = new UserModel(newUser)
  console.log(newUserDoc);
  await newUserDoc.save()
  res.status(200).json({message:"user created successful",payload:newUserDoc})
})

//read users by object ID
userApp.get("/users/:id",async(req,res)=>{
    let objID=req.params.id;
    let userobj=await UserModel.findById(objID)
    res.status(200).json({message:"user",payload:userobj})
})

//update user
userApp.put("/users/:id",async(req,res)=>{
  let objId=req.params.id;
  let modifiedUser=req.body
  await UserModel.findByIdAndUpdate(objId,{$set:{...modifiedUser}},{new:true})
  res.status(200).json({message:"user modified successfully",payload:modifiedUser})
})

//delete user by id
userApp.delete("/users/:id",async(req,res)=>{
    let objID=req.params.id;
   let deletedUser = await UserModel.findByIdAndDelete(objID,{})
    res.status(200).json({message:"user deleted"})
})