import { useState } from "react";
import { Form, useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
 pageBackground,
 formCard,
 formTitle,
 formGroup,
 labelClass,
 inputClass,
 submitBtn,
 errorClass,
 loadingClass
} from "../styles/common";

export default function Register() {

 const { register, handleSubmit, formState:{errors} } = useForm();

 const [loading,setLoading] = useState(false);
 const [error,setError] = useState(null);
 const [preview,setPreview] = useState(null); 

 const navigate = useNavigate();

 const onSubmit = async (newUser) => {
  setLoading(true);

  try {
    const formData = new FormData();

    let { role, profileImageUrl, ...userObj } = newUser;

    // append text fields
    Object.keys(userObj).forEach((key) => {
      formData.append(key, userObj[key]);
    });

    // append file
    if (profileImageUrl && profileImageUrl[0]) {
      formData.append("profileImageUrl", profileImageUrl[0]);
    }

    let resObj;

    if (role === "AUTHOR") {
      resObj = await axios.post(
        "http://localhost:4000/author-api/authors",
        formData
      );
    } else {
      resObj = await axios.post(
        "http://localhost:4000/user-api/users",
        formData
      );
    }

    if (resObj.status === 201) {
      alert("Registration successful");
      navigate("/login");
    }

  } catch (err) {
    console.log(err);
    setError(err.response?.data?.error || "Registration failed");
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
        return () => {
            if (preview) {
                URL.revokeObjectURL(preview);
            }
        };
        }, [preview]);

 if(loading)
 {
  return <p className={loadingClass}>Registering...</p>
 }

 return (

  <div className={`${pageBackground} flex justify-center items-center min-h-screen`}>

   <form
    onSubmit={handleSubmit(onSubmit)}
  className={`${formCard} w-105 max-h-[90vh] overflow-y-auto`}
   >

   <h2 className={formTitle}>Create An Account</h2>

{/* Role */}
<div className={formGroup}>
  <label className={labelClass}>Select Role</label>

  <div className="flex gap-4 mt-1">
    <label>
     <input type="radio" value="USER" {...register("role",{required:"Role required"})} />
     <span className="ml-1">User</span>
    </label>

    <label>
     <input type="radio" value="AUTHOR" {...register("role",{required:"Role required"})} />
     <span className="ml-1">Author</span>
    </label>
  </div>
</div>

{errors.role && <p className={errorClass}>{errors.role.message}</p>}

{/* First & Last Name */}
<div className="grid grid-cols-2 gap-4">

 <div className={formGroup}>
  <label className={labelClass}>First Name</label>
  <input
   type="text"
   className={inputClass}
   {...register("firstName",{required:"First name required"})}
  />
 </div>

 <div className={formGroup}>
  <label className={labelClass}>Last Name</label>
  <input
   type="text"
   className={inputClass}
   {...register("lastName")}
  />
 </div>

</div>

{/* Email */}
<div className={formGroup}>
 <label className={labelClass}>Email</label>
 <input
  type="email"
  className={inputClass}
  {...register("email",{required:"Email required"})}
 />
</div>

{/* Password */}
<div className={formGroup}>
 <label className={labelClass}>Password</label>
 <input
  type="password"
  className={inputClass}
  {...register("password",{required:"Password required",minLength:{value:6,message:"Minimum 6 characters"}})}
 />
</div>

{/* Profile Image */}
<div className={formGroup}>
 <label className={labelClass}>Profile Image URL</label>
 <input
        type="file"
        accept="image/png, image/jpeg"
        {...register("profileImageUrl")}
        onChange={(e) => {

            //get image file
            const file = e.target.files[0];
            // validation for image format
            if (file) {
                if (!["image/jpeg", "image/png"].includes(file.type)) {
                setError("Only JPG or PNG allowed");
                return;
                }
                //validation for file size
                if (file.size > 2 * 1024 * 1024) {
                setError("File size must be less than 2MB");
                return;
                }
                //Converts file → temporary browser URL(create preview URL)
                const previewUrl = URL.createObjectURL(file);
                setPreview(previewUrl);
                setError(null);
            }
        }}
    />
    {preview && (
    <div className="flex justify-center items-center mt-3">
          <img src={preview} alt="preview" className="w-32 h-32 object-cover" />
      </div>
    )}
</div>

{error && <p className={errorClass}>{error}</p>}

<button className={submitBtn}>
  Sign Up
</button>

   </form>

  </div>
 );
}