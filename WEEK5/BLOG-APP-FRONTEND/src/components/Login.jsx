import { useForm } from "react-hook-form";
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import {toast} from "react-hot-toast";
import {
 pageBackground,
 formCard,
 formTitle,
 formGroup,
 labelClass,
 inputClass,
 submitBtn,
 errorClass
} from "../styles/common";

export default function Login(){

 const {register,handleSubmit,formState:{errors}} = useForm();
 const login=useAuth((state)=>state.login);
 const isAuthenticated=useAuth((state)=>state.isAuthenticated);
 const currentUser=useAuth((state)=>state.currentUser);
 const navigate = useNavigate();

 const onUserLogin = async (formData) => {    
  await login(formData);    
  console.log(isAuthenticated);

};

 useEffect(()=>{
  if (isAuthenticated && currentUser)
  {
    if(currentUser.role === "USER")
    {
      toast.success("Login successful");
      navigate("/userdashboard");
    }
    else if(currentUser.role === "AUTHOR")
    {
      navigate("/authordashboard");
    }
    else if(currentUser.role === "ADMIN")
    {
      navigate("/admindashboard");
    }
  }
 },[isAuthenticated,currentUser,navigate]);

 return(

  <div className={`${pageBackground} flex justify-center items-center min-h-screen`}>

   <form
    onSubmit={handleSubmit(onUserLogin)}
    className={`${formCard} w-96 max-h-125 overflow-y-auto`}
   >

    <h2 className={formTitle}>Sign In</h2>

   
    {/* Email */}
    <div className={formGroup}>
     <label className={labelClass}>Email</label>
     <input
      type="email"
      className={inputClass}
      {...register("email",{required:"Email required"})}
     />
    </div>

    {errors.email && <p className={errorClass}>{errors.email.message}</p>}

    {/* Password */}
    <div className={formGroup}>
     <label className={labelClass}>Password</label>
     <input
      type="password"
      className={inputClass}
      {...register("password",{required:"Password required"})}
     />
    </div>

    {errors.password && <p className={errorClass}>{errors.password.message}</p>}

    <button className={`${submitBtn} w-full mt-3`}>
     Sign In
    </button>
    <p className="text-sm text-center mt-4 text-gray-600">
  Don’t have an account?{" "}
  <span
    onClick={() => navigate("/register")}
    className="text-blue-600 font-medium cursor-pointer hover:underline"
  >
    Create one
  </span>
</p>

   </form>

  </div>
 )
}