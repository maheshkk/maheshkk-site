import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        mist: "#f6f7f8",
        accent: "#2d6a8e",
      },
      maxWidth: {
        content: "960px",
      },
    },
  },
  plugins: [typography],
};

export default config;
