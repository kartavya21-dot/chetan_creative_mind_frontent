import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const Hero = () => {
  const images = [
    "https://blog.tubikstudio.com/wp-content/uploads/2024/08/home-care-service-app-design-tubik.jpg",
    "https://s3-alpha.figma.com/hub/file/1641488388/6170ee52-bd3f-44b1-b6cf-a5488946d1fd-cover.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6250Kt0BH0b2eXAK-eHohoiyzTb-4kdn0Vw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRutuJaId8nuKJCunwl9AmoyC1m_t5G-yfJmg&s",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      id="home"
      className="py-20 dark:bg-slate-900 transition-colors duration-300"
    >
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
            {["Aeshtetic", "Modern", "User-Friendly", "Responsive"].map((k) => (
              <li
                key={k}
                className="cursor-pointer bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 px-3 py-2 text-center hover:scale-110 transition-all duration-500 ease-out dark:text-white"
              >
                {k}
              </li>
            ))}
          </ul>
        </div>

        {/* Enhanced Image Slider */}
        <div className="relative w-full group">
          <div className="relative overflow-hidden rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 aspect-[4/3] w-full bg-gradient-to-br from-purple-500/15 via-fuchsia-500/10 to-blue-500/10 dark:from-purple-500/20 dark:via-fuchsia-500/15 dark:to-blue-500/15">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={false}
                animate={{
                  x: `${(idx - currentIndex) * 100}%`,
                  opacity: idx === currentIndex ? 1 : 0.3,
                  scale: idx === currentIndex ? 1 : 0.95,
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.5 },
                }}
                className="absolute inset-0 flex items-center justify-center p-2"
              >
                <img
                  src={img}
                  className="w-full h-full object-cover rounded-xl"
                  alt={`Slide ${idx + 1}`}
                />
              </motion.div>
            ))}
            
            {/* Previous Button */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  idx === currentIndex
                    ? "w-8 bg-purple-600 dark:bg-purple-500"
                    : "w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;