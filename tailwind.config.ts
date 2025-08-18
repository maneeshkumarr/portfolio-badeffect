/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      brand: {
        brown: "#7B3F00", // reddish-brown
        yellow: "#FFC107", // warm amber
      },
    },
  },
},
  plugins: [],
}
