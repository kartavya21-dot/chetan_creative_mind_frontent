import React from "react";
import WhatsAppButton from "./WhatsAppButton";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Chetan CreativeMind. All rights reserved.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <a
            href="https://www.instagram.com/chetancreativemind"
            target="_blank"
            rel="noopener"
            className="hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.instagram.com/framebrush.ai"
            target="_blank"
            rel="noopener"
            className="hover:underline"
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
