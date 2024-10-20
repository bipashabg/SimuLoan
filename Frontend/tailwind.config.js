/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },

    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        current: "currentColor",
        transparent: "transparent",
        white: "#FFFFFF",
        black: "#000000",
        dark: "#26191B", // Updated to match your palette
        primary: "#F6ACC8", // Primary color
        yellow: "#FBB040", // Keep as is, or update if needed
        "bg-color-dark": "#241925", // Dark background matching your palette
        "body-color": {
          DEFAULT: "#AF8BAF", // Updated to match the palette
          dark: "#584153", // Darker body color for contrast
        },
        stroke: {
          stroke: "#F6ACC8", // Matching primary color
          dark: "#241925", // Darker stroke color
        },
        gray: {
          100: "#F6ACC8", // Lighter pinkish gray from the palette
          200: "#E5A4B5", // Slightly darker gray with a hint of pink
          300: "#D49BA2", // Muted mid-tone pinkish gray
          400: "#AF8BAF", // Matching one of your provided colors
          500: "#8A7385", // Darker gray for better contrast
          dark: "#241925", // Updated dark gray matching the palette
          light: "#FDF2F7", // Keep as is for light gray
        },
      },
    
      boxShadow: {
        signUp: "0px 5px 10px rgba(88, 65, 83)", // Updated to match #584153
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)", // Keep as is
        two: "0px 5px 10px rgba(6, 8, 15, 0.1)", // Keep as is
        three: "0px 5px 15px rgba(6, 8, 15, 0.05)", // Keep as is
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)", // Keep as is
        "sticky-dark": "inset 0 -1px 0 0 rgba(255, 255, 255, 0.1)", // Keep as is
        "feature-2": "0px 10px 40px rgba(48, 86, 211, 0.12)", // Keep as is
        submit: "0px 5px 20px rgba(4, 10, 34, 0.1)", // Keep as is
        "submit-dark": "0px 5px 20px rgba(4, 10, 34, 0.1)", // Keep as is
        btn: "0px 1px 2px rgba(4, 10, 34, 0.15)", // Keep as is
        "btn-hover": "0px 1px 2px rgba(0, 0, 0, 0.15)", // Keep as is
        "btn-light": "0px 1px 2px rgba(0, 0, 0, 0.1)", // Keep as is
      },
      dropShadow: {
        three: "0px 5px 15px rgba(88, 65, 83, 0.05)", // Updated shadow color to match #584153
      },
    },
    
  },
  plugins: [],
};