module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        yellow: { 800: "#f28d35" },
        black: { 900: "#000000" },
        deep_purple: { 500: "#6b3cc9" },
        white: { A700: "#ffffff" },
        cyan: { 400: "#1cbddd" },
        green: { 400: "#4dca79" },
      },
      fontFamily: { poppins: "Poppins", inter: "Inter", lato: "Lato" },
      backgroundImage: { gradient: "linear-gradient(225deg ,#1cbddd,#4dca79)" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
