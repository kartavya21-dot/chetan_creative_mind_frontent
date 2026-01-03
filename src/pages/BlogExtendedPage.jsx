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
      <div className="min-h-screen flex items-center justify-center text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900 transition-colors">
        Loading article...
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="cursor-pointer mb-6 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2"
        >
          ← Back
        </button>

        <article className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-colors">
          {blog.image && (
            <div className="w-full h-64 md:h-96 overflow-hidden bg-slate-100 dark:bg-slate-700">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {blog.title}
            </h1>
            <hr className="border-slate-100 dark:border-slate-700 mb-8" />
            <div className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed whitespace-pre-line">
              {blog.paragraphs}
            </div>
          </div>
        </article>
      </div>
    </motion.div>
  );
};

export default BlogExtendedPage;