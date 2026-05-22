import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {UserTypeModel} from "../models/UserModel.js";
import {config} from "dotenv";
config();
//register section
export const register = async (userObj) => {
    //create document
    const user=new UserTypeModel(userObj);
    //validate for empty password
    await user.validate();
    //hash and replace plain password
    user.password=await bcrypt.hash(user.password,10);
    //save
    const created=await user.save();
    //convert document to object to remove password
    const newUserObj=created.toObject();
    //remove password
    delete newUserObj.password;
    //return
    return newUserObj;
};

//authenticate function

export const login = async({email,password})=>{
    //check user with email and role
    const user=await UserTypeModel.findOne({email});
    //if user not found
    if(!user){
        const err=new Error("Invalid Email ");
        err.status=401;
        throw err;
    }
    //compare passwords 
    const isMatch=await bcrypt.compare(password,user.password);
    //if password not matched
    if(!isMatch){
        const err=new Error("Invalid Password");
        err.status=401;
        throw err;
    }
    //check isActive state 
    if (!user.isActive){
        const err=new Error("User Inactive...Your account is blocked please contact admin");
        err.status=403;//401 if not found 
        throw err;
    }
    //generate token
    const token=jwt.sign({_id:user._id,role:user.role,email:user.email},
        process.env.JWT_SECRET,{expiresIn:"7d",});
    //return token
    const userObj=user.toObject();
    delete userObj.password;
    return {token, user:userObj};

}