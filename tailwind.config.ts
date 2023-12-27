import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        darkBlue200: "#141E30",
        darkBlue100: "#243B55",
        white300: "#ffff",
        white200: "#F7F8F8",
        white100: "#D9E1EB",
        date: "#556A83",
        ringblue: "#243C5D",
        sidebarblue: "#000409",
      },
    },
  },
  plugins: [],
};
export default config;
