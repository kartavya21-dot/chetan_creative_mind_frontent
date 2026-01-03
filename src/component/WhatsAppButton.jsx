import React from 'react'
import {motion} from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa';


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
    <button onClick={handleClick} aria-label={label} className={`cursor-pointer inline-flex items-center gap-2 ${sizes} ${styles} transition-all`}>
      <FaWhatsapp size="1.7em"/>
      <span>{label}</span>
    </button>
  );
};

export default WhatsAppButton