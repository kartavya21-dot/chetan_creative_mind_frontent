import React from "react";
import Hero from "./component/Hero";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Services from "./component/Services";
import { Route, Routes } from "react-router-dom";
import BlogExtendedPage from "./pages/BlogExtendedPage";
import Portfolio from "./component/Portfolio";
import Home from "./pages/Home";
import StickyBlog from "./component/StickyBlog";

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />
      <StickyBlog/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:blogId" element={<BlogExtendedPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
