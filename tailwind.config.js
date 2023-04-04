/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-purple":
          "linear-gradient(90deg, hsla(234, 96%, 90%, 1) 34%, hsla(186, 100%, 50%, 1) 100%)",
      },
    },
  },
  plugins: [],
};
