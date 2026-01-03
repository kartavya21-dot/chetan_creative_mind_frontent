/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1D4ED8", // A strong, professional blue
          light: "#3B82F6",
          dark: "#1E3A8A",
        },
        secondary: "#F97316", // A vibrant orange for accents
        neutral: {
          100: "#F8FAFC", // Off-white for backgrounds
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B", // Main text color
          600: "#475569",
          700: "#334155",
          800: "#1E293B", // Darker text/headings
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
