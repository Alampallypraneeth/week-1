import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";
import axios from "axios";
import {
  pageBackground,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
} from "../styles/common";

export default function WriteArticle() {
  // useForm for form state and validation
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      // Post article — JWT sent via httpOnly cookie (withCredentials)
      const res = await axios.post(
        "http://localhost:4000/author-api/articles",
        data,
        { withCredentials: true }
      );

      console.log(res.data);
      toast.success("Article published successfully!");
      navigate("/authordashboard");

    } catch (err) {
      console.log(err.response?.data || err.message);
      toast.error("Failed to publish article");
    }
  };

  return (
    <div className={`${pageBackground} flex justify-center pt-24`}>

      <form
  onSubmit={handleSubmit(onSubmit)}
  className="bg-[#f5f5f7] rounded-xl p-8 max-w-2xl mx-auto w-full h-fit"
>
        <h2 className={formTitle}>Add New Article</h2>

        {/* Title field */}
        <div className={formGroup}>
          <label className={labelClass}>Title</label>
          <input
            type="text"
            placeholder="Enter article title"
            className={inputClass}
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && (
            <p className={errorClass}>{errors.title.message}</p>
          )}
        </div>

        {/* Category dropdown */}
        <div className={formGroup}>
          <label className={labelClass}>Category</label>
          <select
            className={inputClass}
            {...register("category", { required: "Category is required" })}
          >
            <option value="">Select Category</option>
<option value="Technology">Technology</option>
<option value="Programming">Programming</option>
<option value="Science">Science</option>
<option value="Education">Education</option>
<option value="Health">Health</option>
<option value="Business">Business</option>
<option value="Finance">Finance</option>
<option value="Marketing">Marketing</option>
<option value="Startups">Startups</option>

<option value="Lifestyle">Lifestyle</option>
<option value="Fitness">Fitness</option>
<option value="Food & Nutrition">Food & Nutrition</option>
<option value="Travel">Travel</option>
<option value="Space">Space</option>
<option value="History">History</option>
<option value="Politics">Politics</option>
<option value="Entertainment">Entertainment</option>
<option value="Sports">Sports</option>
          </select>
          {errors.category && (
            <p className={errorClass}>{errors.category.message}</p>
          )}
        </div>

        {/* Content textarea */}
        <div className={formGroup}>
          <label className={labelClass}>Content</label>
          <textarea
            placeholder="Write your article content here..."
            rows={6}
            className={`${inputClass} resize-none`}
            {...register("content", { required: "Content is required" })}
          />
          {errors.content && (
            <p className={errorClass}>{errors.content.message}</p>
          )}
        </div>

        {/* Submit button */}
        <button type="submit" className={submitBtn}>
          Publish Article
        </button>

      </form>

    </div>
  );
}