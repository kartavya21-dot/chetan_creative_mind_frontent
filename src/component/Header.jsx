import React from "react";
import WhatsAppButton from "./WhatsappButton";
import { assets } from "../assets/assets";

const Header = () => {
  const NAV = [
    { id: "services", label: "Services" },
    { id: "blogs", label: "Blogs" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container h-16 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={assets.logo} alt="logo" className="w-10 h-10" />
          <span className="text-lg font-semibold tracking-tight">
            Chetan CreativeMind
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-slate-100"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <WhatsAppButton size="sm" />
        </div>
      </div>
    </header>
  );
};

export default Header;
