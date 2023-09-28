/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8b499f",
        secondary: "#e5d8ea",
        bgcolor: "#110317",
        grey: "#1a2530",
        color: "#f1f1f1",
      },
    },
  },
  plugins: [],
}

