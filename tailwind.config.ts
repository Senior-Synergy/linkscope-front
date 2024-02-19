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
        primary: "#525FE1",
        "primary-light": "#718fdb",
        "primary-dark": "#24438e",
        "primary-faded": "#c2cfef",

        accent: "#F86F03",
        "accent-light": "#FFA41B",
        "accent-dark": "#8e7024",

        link: "#6144CF",
        alert: "#CF446C",
        success: "#66BB6A",
        deactive: "#D2D2D2",

        background: "#FFF6F4",
        text: "#515151",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        moveUpDown: {
          "0%, 100%": {
            transform: "translate(0)",
          },
          "50%": {
            transform: "translate(0, 30%)",
          },
        },
        moveLeftRight: {
          "0%, 100%": {
            transform: "translate(0)",
          },
          "50%": {
            transform: "translate(-150%, 0)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        moveUpDown: "moveUpDown 2s ease-in-out infinite",
        moveLeftRight: "moveLeftRight 4s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
