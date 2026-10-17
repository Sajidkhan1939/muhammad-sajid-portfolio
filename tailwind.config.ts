import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        paper: "#f8fafc",
        accent: "#0f766e",
        accentLight: "#99f6e4"
      },
      boxShadow: {
        soft: "0 18px 45px -24px rgba(15, 23, 42, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
