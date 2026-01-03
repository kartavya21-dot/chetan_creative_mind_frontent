import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import WhatsAppButton from "./WhatsAppButton";
import ThemeToggle from "./ThemeToggle";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
  const NAV = [
    { id: "services", label: "Services" },
    { id: "portfolio", label: "Portfolio" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="container h-16 mx-auto flex items-center justify-between">
        <div
          className="group cursor-pointer flex items-center gap-3"
          onClick={() => scrollTo("home")}
        >
          <img src={assets.logo} alt="logo" className="w-10 h-10" />

          <div
            className="
              h-10
              w-0 group-hover:w-44
              opacity-0 group-hover:opacity-100
              transition-all duration-1000 ease-out
              overflow-hidden
              flex items-center
            "
          >
            <div className="text-lg font-semibold tracking-tight whitespace-nowrap dark:text-white">
              Chetan CreativeMind
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <FaWhatsapp color="green" size="2em" />
        </div>
      </div>
    </header>
  );
};

export default Header;
