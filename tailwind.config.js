/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: { "spin-slow": "spin 5s linear infinite" },
      colors: {
        alive: "#34D399",
        darkGreen: "#29a87a",
        dead: "#EF4444",
        unknown: "#CCCCCC",
        rick: "#1cb0c9",
        gray: "#555555",
        darkGray: "#444444",
        lightBlue: " #eff4ff",
        lightGray: "#d7dbe5",
        yellow: "#c7ff45",
        darkBg: "#393d51",
        gradientNavbar: "#2c2f3e",
        gradientLight: "#bfc3cc",
        card: "#40445a",
        greenPortal: "#6eff5e",
        cyan: "#00bcd4",
        lightFont: "#f5f5f5",
        lightBg: "#ebecee",
      },
    },
  },
  plugins: [],
};
