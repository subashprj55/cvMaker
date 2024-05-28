/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '360px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      animation: {
        own: "own 7s linear infinite",
      },
      keyframes: {
        own: {
          "0%,100%": { top: "0", left: "0", color: "blue" },
          "25%": { top: "25%", left: "90%", color: "red" },
          "50%": { top: "0%", right: "0", color: "pink" },
          "75%": { top: "25%", left: "0", color: "green" },
        },
      },
      
    },
  },
  plugins: [],
};
