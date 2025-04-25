/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        white: {
          DEFAULT: "#FFFFFF",
          1: "#EFDEDE",
        },
        purple: {
          DEFAULT: "#AA14F0",
          1: "#C824EC",
          2: "#DF308D"
        },
        "dark-blue": "#534686"
      },
      fontFamily: {
        "great-primer": "var(--font-great-primer)",
        orbitron: "var(--font-orbitron)",
        inter: "var(--font-inter)"
      }
    },
  },
  plugins: [],
}

