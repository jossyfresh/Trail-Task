/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#040033",
        buttonPrimary: "#4B42F4",
        textPrimary: "#4B42F4",
      },
      fontFamily: {
        worksans: ["Work Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        display: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
