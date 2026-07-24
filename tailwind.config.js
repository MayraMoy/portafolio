/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        accent: "#818cf8",       // violeta de acento
        "surface-dark": "rgba(18, 20, 29, 0.8)",
        "surface-dark-solid": "rgba(18, 20, 29, 0.95)",
      },
      clipPath: {
        "circle-0": "circle(0% at 100% 0)",
        "circle-full": "circle(150% at 100% 0)",
      },
    },
  },
  plugins: [],
};