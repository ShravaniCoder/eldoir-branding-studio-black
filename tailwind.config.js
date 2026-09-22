/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#080808",
        espresso: "#151210",
        graphite: "#202020",
        ivory: "#F0EBE2",
        taupe: "#81776B",
        champagne: "#A88B5E",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "Georgia", "serif"],
        sans: ["Manrope", "Inter", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(39, 28, 19, 0.14)",
        glass: "0 18px 55px rgba(39, 28, 19, 0.18)",
        luxury: "0 28px 80px rgba(19, 13, 8, 0.22)",
      },
      letterSpacing: {
        luxe: "0.22em",
      },
    },
  },
  plugins: [],
};
