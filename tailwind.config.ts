import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
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
          1: "EFDEDE",
        },
        purple: {
          DEFAULT: "#AA14F0",
          1: "DF308D"
        }
      },
      fontFamily: {
        "great-primer": "var(--great-primer)",
        orbitron: "var(--font-orbitron)",
        inter: "var(--font-inter)"
      }
    },
  },
  plugins: [],
} satisfies Config;
