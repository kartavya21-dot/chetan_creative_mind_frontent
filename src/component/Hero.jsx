import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  return (
    <section id="home" className="py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            AI + Creative Agency
          </span>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.3,
                },
              },
            }}
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight"
          >
            {"We craft AI-powered videos, bold branding & growth strategies."
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  className={
                    word.includes("AI-powered") ? "text-purple-600" : ""
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
          </motion.h1>
          <p className="mt-4 text-lg text-slate-600 max-w-prose">
            2025-ready performance website built for speed (&lt;1s feel on
            Vercel), trust and conversions. Clean UI like Instagram, Myntra and
            Amazon product cards.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton size="lg" label="Talk on WhatsApp" />
            <a
              href="#services"
              className="px-4 py-2 border border-slate-300 rounded-xl hover:bg-slate-50 hover:scale-110 transition-all duration-500 ease-out"
            >
              Explore Services
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {["Fast", "Secure", "SEO-Ready", "Responsive"].map((k) => (
              <li
                key={k}
                className="cursor-pointer bg-white rounded-xl shadow-sm border border-slate-200 px-3 py-2 text-center hover:scale-110 transition-all duration-500 ease-out"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 aspect-[4/3] w-full bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-blue-500/10"
        />
      </div>
    </section>
  );
};

export default Hero;
