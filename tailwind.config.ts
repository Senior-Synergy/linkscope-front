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
        // primary
        primary: {
          DEFAULT: "#446CCF",
          50: "#D6DFF5",
          100: "#C6D2F0",
          200: "#A5B9E8",
          300: "#859FE0",
          400: "#6486D7",
          500: "#446CCF",
          600: "#2D52AE",
          700: "#213D82",
          800: "#162855",
          900: "#0A1328",
          950: "#050812",
        },

        // secondary
        secondary: "#FF9130",
        "secondary-light": "#FF9130",
        "secondary-dark": "#FF9130",

        // grayscale
        "gray-normal": "#909090",
        "gray-light": "#D4D4D4",
        "gray-dark": "#494848",
        "gray-semilight": "#B4B4B4",
        "gray-semidark": "#636363",

        // status
        "status-success": "#24A148",
        "status-caution": "#f1c21b",
        "status-warning": "#ff832b",
        "status-passive": "#0043ce",
        "status-failure": "#da1e28",

        // other
        deactive: "#D2D2D2",
        link: "#6144CF",
        background: "#FFF6F4",
        text: "#515151",
      },
      boxShadow: {
        light: "2px 4px 12px rgba(0,0,0,.08)",
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
    fontSize: {
      sm: "0.75rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem",
      "7xl": "4.5rem",
      "8xl": "6rem",
      "9xl": "8rem",
    },
  },
  plugins: [],
};
export default config;
