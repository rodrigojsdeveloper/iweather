import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#FAFAFA",
          200: "#BFBFD4",
          300: "#ABABC4",
          400: "#7F7F98",
          500: "#3B3B54",
          600: "#1E1E29",
          700: "#1C1C27",
          800: "#16161F",
          900: "#13131A",
        },
        white: "#FFFFFF",
        blueLight: "#8FB2F5",
      },
    },
  },
  plugins: [],
};
export default config;
