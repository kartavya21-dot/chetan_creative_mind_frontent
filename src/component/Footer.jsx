import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-10 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 dark:text-slate-400">
          © {new Date().getFullYear()} Chetan CreativeMind. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://www.instagram.com/chetancreativemind"
            target="_blank"
            rel="noopener"
            className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:underline transition-colors"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/framebrush.ai"
            target="_blank"
            rel="noopener"
            className="text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 hover:underline transition-colors"
          >
            FrameBrush.AI
          </a>
          <WhatsAppButton variant="link" label="Chat on WhatsApp" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;