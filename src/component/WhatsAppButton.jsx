import React from 'react'

// WhatsAppButton Component
const WhatsAppButton = ({ label = "WhatsApp", size = "md", variant = "solid" }) => {
  const PHONE = "919753450585";
  const HREF = `https://wa.me/${PHONE}`;

  const sizes = {
    sm: "px-3 py-2 text-sm rounded-xl",
    md: "px-4 py-2 rounded-xl",
    lg: "px-5 py-3 text-base rounded-2xl",
  }[size];

  const styles = {
    solid: "bg-green-500 text-white hover:opacity-90",
    ghost: "border border-green-500 text-green-500 hover:bg-green-50",
    link: "underline underline-offset-4 text-green-500 hover:opacity-80"
  }[variant];

  const handleClick = () => {
    window.location.href = HREF;
  };

  return (
    <button onClick={handleClick} aria-label={label} className={`inline-flex items-center gap-2 ${sizes} ${styles} transition-all`}>
      <svg width="18" height="18" viewBox="0 0 32 32" aria-hidden>
        <path fill="#25D366" d="M16 3C9.383 3 4 8.383 4 15c0 2.377.666 4.6 1.82 6.5L4 29l7.7-1.996A11.86 11.86 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3z"/>
        <path fill="#fff" d="M24.4 18.5c-.2.6-1.2 1.1-1.7 1.1-.5 0-1 .3-3.4-1.1-2.9-1.6-4.7-4.3-4.8-4.5s-1.1-1.6-1.1-3c0-1.4.7-2 1-2.2.3-.2.6-.3.8-.3h.6c.2 0 .5 0 .7.6.2.6.9 2.1.9 2.2.1.1.1.3.1.4 0 .2-.1.4-.2.6-.1.2-.4.6-.5.7-.2.2-.4.5-.2 1 .2.5 1 1.6 2.1 2.6 1.4 1.2 2.6 1.6 3 .1.3-.5.7-.6.9-.5.2.1 1.5.7 1.7.8.2.1.4.2.4.4 0 .3 0 1-.2 1.6z"/>
      </svg>
      <span>{label}</span>
    </button>
  );
};

// Header Component
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
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg"></div>
          <span className="text-lg font-semibold tracking-tight">Chetan CreativeMind</span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <button key={n.id} onClick={() => scrollTo(n.id)} className="px-3 py-2 rounded-xl text-sm font-medium hover:bg-slate-100">
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

export default WhatsAppButton