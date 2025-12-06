import React from "react";
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

      <main  className="mt-[-4rem]">
        <Hero />
        <Services />
        <Blogs />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}