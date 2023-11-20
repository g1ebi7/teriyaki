import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: {
        500: "#DDDFE3",
        600: "#262827",
      },
      black: "#000",
      green: "#C6FF50",
      white: "#FFF",
      pinky: "#B287FD",
    },
    extend: {
      fontSize: {
        "title-size": "100px !important",
      },
      keyframes: {
        rotate1: {
          "0%": { transform: "rotate(60deg) scale(1)" },
          "20%": { transform: "rotate(120deg) scale(1.1)" },
          "40%": { transform: "rotate(180deg) scale(1)" },
          "60%": { transform: "rotate(240deg) scale(1.1)" },
          "80%": { transform: "rotate(300deg) scale(1)" },
          "100%": { transform: "rotate(360deg) scale(1.1)" },
        },
        rotate2: {
          "0%": { transform: "rotate(-60deg) scale(0.9)" },
          "20%": { transform: "rotate(-120deg) scale(1)" },
          "40%": { transform: "rotate(-180deg) scale(0.9)" },
          "60%": { transform: "rotate(-240deg) scale(1)" },
          "80%": { transform: "rotate(-300deg) scale(0.9)" },
          "100%": { transform: "rotate(-360deg) scale(1)" },
        },
        graphicRotate: {
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        rotate1: "rotate1 3s ease-in-out infinite alternate forwards",
        rotate2: "rotate2 2.5s ease-in-out infinite alternate forwards",
        graphic: "graphicRotate 8s linear infinite",
      },
      transitionTimingFunction: {
        DEFAULT: "ease-in-out",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};
export default config;
