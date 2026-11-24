import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: "#1F5A43", dark: "#143D2D", light: "#E2EEE7" },
        berry: { DEFAULT: "#A8323E", dark: "#8E2733", light: "#F6E3E3" },
        gold: { DEFAULT: "#C9A227", soft: "#E7CF7A", light: "#F5EBD3" },
        cream: "#FBF6EE",
        ink: "#2B2522",
        muted: "#6E625A",
        line: "#E6DCCD",
      },
      fontFamily: {
        serif: ["Fraunces", "Georgia", "serif"],
        sans: ['"Nunito Sans"', "Segoe UI", "Arial", "sans-serif"],
      },
      boxShadow: {
        book: "0 30px 60px -20px rgba(20,61,45,.55), 0 18px 36px -18px rgba(0,0,0,.4)",
      },
    },
  },
  plugins: [],
} satisfies Config;
