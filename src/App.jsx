import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Hero from "./component/Hero";
import Header from "./component/Header";
import Blogs from "./component/Blogs";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Services from "./component/Services";

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Header />

      <main>
        <Hero />
        <Services />
        <Blogs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}