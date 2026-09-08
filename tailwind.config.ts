import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      colors: {
        // Paleta Noche
        night: {
          bg: "#0F1423",
          surface: "#1A2138",
          surfaceHover: "#232D48",
          text: "#F3F4F6",
          muted: "#9CA3AF",
          accent: "#6366F1",
          accentHover: "#4F46E5",
        },
        // Paleta Día
        day: {
          bg: "#FCE7D2",
          surface: "#FDF1E5",
          surfaceHover: "#FCE7D2",
          text: "#592D1F",
          muted: "#734327",
          accent: "#C25A24",
          accentHover: "#A1491C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
