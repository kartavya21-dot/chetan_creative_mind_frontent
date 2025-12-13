import React, { useState } from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";
import { assets } from "../assets/assets";

const PortfolioComponent = () => {
  const [active, setActive] = useState(null);
  const isMobile = window.matchMedia("(hover: none)").matches;

  const CARDS = [
    {
      title: "AI Video Editing",
      desc: "High-impact edits powered by AI: auto-cut, scene rebuilds, voice clones, subtitles and platform-native exports (YT/IG/TT).",
      points: [
        "Fast turnaround",
        "Platform-native formats",
        "Data-backed hooks",
      ],
    },
    {
      title: "Creative Branding",
      desc: "Visual identity systems with logo, color tokens, typography, and social kits that scale across campaigns.",
      points: ["Logo & system", "Brand voice", "Social kit"],
    },
    {
      title: "Marketing Strategy",
      desc: "Full-funnel strategy: content, paid ads, influencers, and attribution with dashboards.",
      points: ["Funnel mapping", "Influencer ops", "Paid performance"],
    },
  ];

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {CARDS.map((c, i) => {
        const isOpen = active === i;

        return (
          <motion.article
            key={i}
            onClick={() => setActive(isOpen ? null : i)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.02,
              boxShadow: "0px 15px 40px rgba(0,0,0,0.12)",
              borderColor: "rgba(0,0,0,0.15)",
            }}
            transition={{ type: "spring", stiffness: 180, damping: 15 }}
            className="cursor-pointer bg-white group aspect-square rounded-2xl border border-slate-200 p-6 flex items-center justify-center relative overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={assets.logo}
              alt=""
              className={`
          absolute inset-0 w-full h-full object-contain
          transition-opacity duration-700
          group-hover:opacity-0
          ${isOpen ? "opacity-0" : "opacity-100"}
        `}
            />

            {/* TEXT */}
            <p
              className={`
          absolute inset-0 flex items-center justify-center text-xl font-semibold
          transition-opacity duration-700
          opacity-0 group-hover:opacity-100
          ${isOpen ? "opacity-100" : ""}
        `}
            >
              Project Description
            </p>
          </motion.article>
        );
      })}
    </div>
  );
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Projects
        </h2>
        <p className="mt-3 text-center text-slate-600 max-w-2xl mx-auto">
          Projects built by me. Hover for details.
        </p>
        <PortfolioComponent />
      </motion.div>
    </section>
  );
};

export default Portfolio;
