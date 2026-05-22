import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useAuth } from "../store/authStore";

import {
  formCard,
  formTitle,
  formGroup,
  labelClass,
  inputClass,
  submitBtn,
  errorClass,
  articlePageWrapper,
} from "../styles/common";

function EditArticle() {
  const location = useLocation();
  const article = location.state;
  const currentUser = useAuth((state) => state.currentUser);
  //console.log("currentUser:", currentUser);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Prefill form with existing article data
  useEffect(() => {
    if (!article) return;
    setValue("title", article.title);
    setValue("category", article.category);
    setValue("content", article.content);
  }, [article, setValue]);

  const updateArticle = async (data) => {
    try {
      const res = await axios.put(
        `http://localhost:4000/author-api/articles`,
        { ...data, articleId: article._id },  //  articleId in body
        { withCredentials: true }
      );

      const updatedArticle = res.data.payload;

      alert("Article updated successfully");

      // Navigate back to article page with updated data
      navigate(`/article-by-id/${article._id}`, {
        state: { article: updatedArticle },
        replace: true,
      });

    } catch (error) {
      console.log("Status:", error.response?.status);
      console.log("Error:", error.response?.data);
      alert("Failed to update");
    }
  };

  return (
      <div className={articlePageWrapper}>
      <div className={`${formCard} mt-10`}>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-4 transition-colors duration-200"
        >
          ← Back
        </button>

        <h2 className={formTitle}>Edit Article</h2>


        <form onSubmit={handleSubmit(updateArticle)}>

          {/* Title */}
          <div className={formGroup}>
            <label className={labelClass}>Title</label>
            <input
              className={inputClass}
              {...register("title", { required: "Title required" })}
            />
            {errors.title && (
              <p className={errorClass}>{errors.title.message}</p>
            )}
          </div>

          {/* Category */}
          <div className={formGroup}>
            <label className={labelClass}>Category</label>
            <select
              className={inputClass}
              {...register("category", { required: "Category required" })}
            >
              <option value="">Select category</option>
              <option value="technology">Technology</option>
              <option value="programming">Programming</option>
              <option value="ai">AI</option>
              <option value="web-development">Web Development</option>
              <option value="science">Science</option>
            </select>
            {errors.category && (
              <p className={errorClass}>{errors.category.message}</p>
            )}
          </div>

          {/* Content */}
          <div className={formGroup}>
            <label className={labelClass}>Content</label>
            <textarea
              rows="14"
              className={inputClass}
              {...register("content", { required: "Content required" })}
            />
            {errors.content && (
              <p className={errorClass}>{errors.content.message}</p>
            )}
          </div>

          <button className={submitBtn}>Update Article</button>

        </form>
      </div>
    </div>
  );
}

export default EditArticle;