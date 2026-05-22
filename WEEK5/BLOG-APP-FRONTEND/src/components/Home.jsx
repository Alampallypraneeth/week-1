import React from "react";
import {
  pageBackground,
  pageWrapper,
  pageTitleClass,
  headingClass,
  bodyText,
  cardClass,
  section,
} from "../styles/common";

function Home() {
  return (
    <div className={`${pageBackground} relative overflow-hidden`}>

      {/* ✅ Subtle Background Image */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src="https://img.freepik.com/premium-photo/modern-blogging-sketch-white-wall-background-blog-media-concept-3d-rendering_670147-66810.jpg"
          alt="bg"
          className="w-175 opacity-[0.2]"
        />
      </div>

      {/* ✅ Main Content */}
      <div className={`${pageWrapper} relative z-10`}>

        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className={pageTitleClass}>
            Explore. Write. Share.
          </h1>
          <p className={`${bodyText} max-w-xl mx-auto`}>
            A minimal blogging platform where ideas flow, stories connect,
            and knowledge is shared across categories.
          </p>
        </div>

        {/* Categories */}
        <div className={section}>
          <h2 className={`${headingClass} mb-6`}>
            Popular Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              "Technology",
              "Programming",
              "Science",
              "Health",
              "Business",
              "AI",
              "Design",
              "Travel"
            ].map((cat) => (
              <div key={cat} className={cardClass}>
                <p className="text-sm font-medium text-[#1d1d1f]">
                  {cat}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className={section}>
          <h2 className={`${headingClass} mb-6`}>
            What You Can Do
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className={cardClass}>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">
                Read Articles
              </h3>
              <p className={bodyText}>
                Explore a wide range of topics written by authors.
              </p>
            </div>

            <div className={cardClass}>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">
                Write Blogs
              </h3>
              <p className={bodyText}>
                Share your ideas and knowledge with others.
              </p>
            </div>

            <div className={cardClass}>
              <h3 className="text-sm font-semibold text-[#1d1d1f] mb-1">
                Engage
              </h3>
              <p className={bodyText}>
                Comment and interact with articles.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;