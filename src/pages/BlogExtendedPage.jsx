import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const BlogExtendedPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (blogId && assets.BLOGS) {
      const _blog = assets.BLOGS[blogId];
      setBlog(_blog);
    }
  }, [blogId]);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-500">
        Loading article...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6"
    >
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 text-sm font-medium text-slate-500 hover:text-purple-600 transition-colors flex items-center gap-2"
        >
          ← Back
        </button>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {blog.image && (
            <div className="w-full h-64 md:h-96 overflow-hidden">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
              {blog.title}
            </h1>
            <hr className="border-slate-100 mb-8" />
            <div className="text-slate-700 text-lg leading-relaxed whitespace-pre-line">
              {blog.paragraphs}
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogExtendedPage;
