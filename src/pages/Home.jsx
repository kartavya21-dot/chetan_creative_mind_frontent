import React from "react";
import Hero from "../component/Hero";
import Blogs from "../component/Blogs";
import Contact from "../component/Contact";
import Services from "../component/Services";
import Portfolio from "../component/Portfolio";

const Home = () => {
  return (
    <main className="-mt-16">
      <Hero />
      <Services />
      <Portfolio />
      <Blogs />
      <Contact />
    </main>
  );
};

export default Home;
