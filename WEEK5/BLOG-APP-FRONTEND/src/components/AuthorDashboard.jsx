import { useAuth } from "../store/authStore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
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

export default function AuthorDashboard() {
  const currentUser = useAuth((state) => state.currentUser);
  const logout = useAuth((state) => state.logout);
  const navigate = useNavigate();

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!currentUser?._id || currentUser?.role !== "AUTHOR") {
      setLoading(false);
      return;
    }

    const fetchAuthorArticles = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await axios.get(
          `http://localhost:4000/author-api/articles/${currentUser._id}`,
          { withCredentials: true }
        );
        //console.log(res.data.payload);
        setArticles(res.data.payload || []);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to load articles");
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorArticles();
  }, [currentUser?._id, currentUser?.role]);

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  const openArticle = (article) => {
    navigate(`/article-by-id/${article._id}`, { state: { article } });
  };

  return (
    <div className={pageWrapper}>

      {/* ── Page header: title + action buttons ── */}
      <div className="flex justify-between items-end mb-10">
        <div>
          <p className="text-xs font-semibold text-[#0066cc] uppercase tracking-widest mb-1">
            AUTHOR PROFILE
          </p>
          <h1 className={pageTitleClass}>My Articles</h1>
        </div>
        <div className="flex gap-3">
          <button onClick={() => navigate("/addarticle")} className={primaryBtn}>
            + New Article
          </button>
          <button onClick={handleLogout} className={primaryBtn}>
            Log Out
          </button>
        </div>
      </div>

      <div className={divider} />

      {/* ── Feedback states ── */}
      {loading && <p className={loadingClass}>Loading articles...</p>}
      {error && <p className="text-center text-red-500 py-10">{error}</p>}
      {!loading && !error && articles.length === 0 && (
        <p className={emptyStateClass}>No articles yet — write your first one!</p>
      )}

      {/* ── Articles grid ── */}
      {!loading && !error && articles.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {articles.map((article) => {
            const isDeleted = article.isArticleActive === false;

            return (
              <div
                key={article._id}
                className={articleCardClass}
                style={{
                  // Visually dim deleted cards and give them a red border
                  opacity: isDeleted ? 0.72 : 1,
                  border: isDeleted ? "1.5px solid #fca5a5" : undefined,
                  transition: "opacity 0.2s",
                }}
              >
                {/* ── Category tag + Active/Deleted status badge ── */}
                <div className="flex items-center justify-between mb-2">
                  <span className={tagClass}>{article.category}</span>

                  {/* Green dot = active, Red dot = deleted */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      fontWeight: "600",
                      color: isDeleted ? "#dc2626" : "#16a34a",
                    }}
                  >
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: isDeleted ? "#dc2626" : "#16a34a",
                        display: "inline-block",
                      }}
                    />
                    {isDeleted ? "Deleted" : "Active"}
                  </span>
                </div>

                <h3 className={articleTitle}>{article.title}</h3>

                <p className={articleMeta}>
                  {new Date(article.createdAt).toLocaleString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                    timeZone: "Asia/Kolkata",
                  })}
                </p>

                <p className={`${articleExcerpt} line-clamp-3`}>
                  {article.content}
                </p>

                <button
                  onClick={() => openArticle(article)}
                  className={`${primaryBtn} mt-auto`}
                >
                  {/* Show different label based on article status */}
                  {isDeleted ? "View / Restore →" : "Read Article →"}
                </button>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
}