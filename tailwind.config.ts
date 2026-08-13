import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: '#F7F3ED',
        surface: {
          DEFAULT: '#FFFFFF',
          cream: '#F7F3ED',
          beige: '#EDE6DA',
          alt: '#E6DDD0',
        },
        brand: {
          green: '#2F5D50',
          greenHover: '#24493F',
          beige: '#EDE6DA',
          gold: '#C8A97E',
          cream: '#F7F3ED',
          dark: '#1F2933',
        },
        txt: {
          primary: '#1F2933',
          body: '#4B5563',
          muted: '#9CA3AF',
        },
        border: {
          soft: '#E2D9CD',
        }
      },
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        "soft-sm": "0 4px 14px rgba(47, 93, 80, 0.04), 0 2px 6px rgba(0, 0, 0, 0.02)",
        "soft-md": "0 8px 24px rgba(47, 93, 80, 0.07), 0 4px 10px rgba(0, 0, 0, 0.03)",
        "soft-lg": "0 16px 36px rgba(47, 93, 80, 0.09), 0 8px 16px rgba(0, 0, 0, 0.04)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
