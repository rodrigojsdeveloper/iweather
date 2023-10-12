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
        transparent: "transparent",
      },
      maxWidth: {
        50: "50px",
        412: "421.24px",
        448: "448px",
        716: "716px",
        1500: "1500px",
      },
      height: {
        54: "54px",
        56: "56px",
        304: "304px",
        360: "360.2px",
        583: "583.2px",
      },
      borderRadius: {
        "def": "8px",
      },
      backgroundImage: {
        "background-weather": "url('./assets/background.png')",
        "night": "url('./assets/night.png')",
      },
      fontSize: {
        "heading-hg": [
          "96px",
          {
            lineHeight: "100%",
            fontWeight: "font-extrabold",
          },
        ],
        "heading-xl": [
          "48px",
          {
            lineHeight: "120%",
            fontWeight: "font-extrabold",
          },
        ],
        "heading-lg": [
          "32px",
          {
            lineHeight: "140%",
            fontWeight: "font-bold",
          },
        ],
        "heading-md": [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: "font-bold",
          },
        ],
        "heading-sm": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "font-bold",
          },
        ],
        "heading-xs": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "font-bold",
          },
        ],
        "t-lg": [
          "20px",
          {
            lineHeight: "140%",
            fontWeight: "font-medium",
          },
        ],
        "t-md": [
          "16px",
          {
            lineHeight: "140%",
            fontWeight: "font-medium",
          },
        ],
        "t-sm": [
          "14px",
          {
            lineHeight: "140%",
            fontWeight: "font-medium",
          },
        ],
        "t-xs": [
          "12px",
          {
            lineHeight: "140%",
            fontWeight: "font-medium",
          },
        ],
      },
      boxShadow: {
        "def": "0px 4px 30px 0px #00000040"
      }
    },
  },
  plugins: [],
};
export default config;
