import React from "react";
import { motion } from "framer-motion";
import WhatsAppButton from "./WhatsAppButton";

const ServicesComponent = () => {
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
      {CARDS.map((c, i) => (
        <motion.article
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{
            y: -6,
            scale: 1.02,
            boxShadow: "0px 15px 40px rgba(0,0,0,0.12)",
          }}
          transition={{ type: "spring", stiffness: 180, damping: 15 }}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold dark:text-white">{c.title}</h3>
            <span className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full">
              2025
            </span>
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
          <ul className="mt-4 space-y-2 text-sm dark:text-slate-300">
            {c.points.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <span className="text-purple-600 dark:text-purple-400">•</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <WhatsAppButton label="Get Pricing" />
          </div>
        </motion.article>
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center dark:text-white">
          Services
        </h2>
        <p className="mt-3 text-center text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
          Pick a package or mix what you need. Hover for details.
        </p>
        <ServicesComponent />
      </motion.div>
    </section>
  );
};

export default Services;