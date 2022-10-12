/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "2rem",
          xl: "4rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        "hero-main": "url('/src/assets/images/herobg.jpg')",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      colors: {
        blackGray: "#131722",
        white: "#fff",
        borderColor: "#2a2d36",
        bgMain: "#24baef",
        pgColor: "#949cb0",
      },
    },
  },
};
