import exp from 'express'
import {login} from '../services/authService.js'
import {UserTypeModel} from '../models/UserModel.js'
import bcrypt from 'bcryptjs'
export const commonRoute=exp.Router()


//login
commonRoute.post("/login", async (req, res) => {
  try {
    const userCred = req.body;

    const { token, user } = await login(userCred);

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    res.status(200).json({message: "Login Success",payload: { token, user }});

  } 
  catch (err)
   {
    res.status(err.status || 500).json({
      message: err.message || "Login failed"
    });
  }
});

//logout
commonRoute.get("/logout",async(req,res)=>{
    //logout for User,Author and Admin
  //clear the coookie named 'token'
  //must match the original settings 
  res.clearCookie("token",{
    httpOnly:true,
    secure:false,
    sameSite:"lax",

  })
  res.status(200).json({ message: "Logout success" });
  
})
//change password(protected route)
commonRoute.put('/change-password',async(req,res)=>{
    //get current password and new password
    const { email, currentPassword, newPassword } = req.body;
    //check the current password
    const user = await UserTypeModel.findOne({email});

    const isMatch = await bcrypt.compare(
        currentPassword,
        user.password
    );

    if (!isMatch) {
        return res.status(401).json({
            message: "Current password is incorrect"
        });
    }
    //replace the current password with new password
     const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    await user.save()
    //send res
     res.json({ message: "Password changed successfully" });
});