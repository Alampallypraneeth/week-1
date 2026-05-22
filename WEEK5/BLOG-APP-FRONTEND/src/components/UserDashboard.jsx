import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  pageWrapper,
  pageTitleClass,
  articleCardClass,
  articleTitle,
  articleExcerpt,
  articleMeta,
  tagClass,
  primaryBtn,
  emptyStateClass,
  loadingClass,
  divider,
  
} from "../styles/common";

export default function UserDashboard() {
  // Read currentUser from Zustand store (persisted in localStorage)
  const currentUser = useAuth((state) => state.currentUser);
  const navigate = useNavigate();
 const logout = useAuth((state) => state.logout);
  // Local state to hold fetched articles, loading flag, and error message
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all active articles from all authors on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        // This route returns articles array directly (not wrapped in payload)
        const res = await axios.get(
          "http://localhost:4000/common-api/articles",
          { withCredentials: true }
        );
        // Handle both array response and {payload: []} response formats
        setArticles(Array.isArray(res.data) ? res.data : res.data.payload || []);
      } catch (err) {
        setError(err.response?.data?.error || "Failed to load articles");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []); // runs once on mount

   // Logout — clears store and localStorage, redirects to login
  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };
  // Navigate to ArticleByID, passing the full article object via router state
  // This avoids an extra API call in ArticleByID if article is already loaded
  const openArticle = (article) => {
navigate(`/article-by-id/${article._id}`, { state: { article } });
  };

  return (
    <div className={pageWrapper}>

      {/* Page header — welcome message + title */}
      <div className="flex justify-between items-end mb-10">
        <div>
          {/* Personalized greeting using currentUser name */}
          <p className="text-xs font-semibold text-[#0066cc] uppercase tracking-widest mb-1">
            Welcome back{currentUser?.firstName ? `, ${currentUser.firstName}` : ""}
          </p>
          <h1 className={pageTitleClass}>All Articles</h1>
        </div>
        <div className="flex items-center gap-4">

  {/* 👤 Profile Image */}
  {currentUser?.profileImageUrl && (
    <img
      src={currentUser.profileImageUrl}
      alt="profile"
      className="w-10 h-10 rounded-full object-cover border border-gray-300"
    />
  )}

  {/* Logout Button */}
  <button onClick={handleLogout} className={primaryBtn}>
    Log Out
  </button>

</div>
      </div>

      {/* Visual divider below header */}
      <div className={divider} />

      {/* Loading spinner text while API call is in progress */}
      {loading && <p className={loadingClass}>Loading articles...</p>}

      {/* Error message if API call fails */}
      {error && (
        <p className="text-center text-red-500 py-10">{error}</p>
      )}

      {/* Empty state when API returns no articles */}
      {!loading && !error && articles.length === 0 && (
        <p className={emptyStateClass}>No articles available yet.</p>
      )}

      {/* Articles grid
          - 1 column on extra small screens
          - 2 columns on small screens
          - 3 columns on medium screens
          - 4 columns on large screens and above */}
      {!loading && !error && articles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {articles.map((article) => (
            <div key={article._id} className={articleCardClass}>

              {/* Category displayed as small uppercase tag */}
              <span className={tagClass}>{article.category}</span>

              {/* Article title */}
              <h3 className={articleTitle}>{article.title}</h3>

              {/* Author name and published date in IST */}
              <p className={articleMeta}>
                By {article.author?.firstName} {article.author?.lastName}
                &nbsp;·&nbsp;
                {new Date(article.createdAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                  timeZone: "Asia/Kolkata",
                })}
              </p>

              {/* Content preview — clamped to 3 lines to keep cards uniform */}
              <p className={`${articleExcerpt} line-clamp-3`}>
                {article.content}
              </p>

              {/* Read More button — navigates to full article view */}
              <button
                onClick={() => openArticle(article)}
                className={`${primaryBtn} mt-auto`}
              >
                Read More →
              </button>

            </div>
          ))}
        </div>
      )}

    </div>
  );
}