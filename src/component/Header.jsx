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
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container h-16 mx-auto flex items-center justify-between">
        <div className="group flex items-center gap-3">
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
            <div className="text-lg font-semibold tracking-tight whitespace-nowrap">
              Chetan CreativeMind
            </div>
          </div>
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
