import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Bevan"],
        typewrite: ["Source Code Pro"],
        rubik: ["Rubik"],
      },
      keyframes: {
        fadeInOut: {
          to: {
            visibility: "hidden",
          },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
      animation: {
        blink: "fadeInOut 1s steps(2, start) infinite",
        titleBlink:
          "fadeInOut 1s steps(2, start) infinite, typewriter 1s steps(var(--titleLength)) 1s forwards",
        titleTyping: "typewriter 1s steps(var(--titleLength)) 1s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
