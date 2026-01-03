import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  return (
    <section id="home" className="py-20 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
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
            className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight dark:text-white"
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
                    word.includes("AI-powered") 
                      ? "text-purple-600 dark:text-purple-400" 
                      : ""
                  }
                >
                  {word}{" "}
                </motion.span>
              ))}
          </motion.h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300 max-w-prose">
            2025-ready performance website built for speed (&lt;1s feel on
            Vercel), trust and conversions. Clean UI like Instagram, Myntra and
            Amazon product cards.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <WhatsAppButton size="lg" label="Talk on WhatsApp" />
            <a
              href="#services"
              className="px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-110 transition-all duration-500 ease-out dark:text-white"
            >
              Explore Services
            </a>
          </div>
          <ul className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {["Fast", "Secure", "SEO-Ready", "Responsive"].map((k) => (
              <li
                key={k}
                className="cursor-pointer bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 px-3 py-2 text-center hover:scale-110 transition-all duration-500 ease-out dark:text-white"
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
          className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 aspect-[4/3] w-full bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-blue-500/10 dark:from-purple-500/20 dark:via-fuchsia-500/15 dark:to-blue-500/15"
        />
      </div>
    </section>
  );
};

export default Hero;