/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",   // <-- VERY IMPORTANT
  ],
  theme: {
    extend: {
      colors: {
        'neon-aqua': 'hsl(185, 100%, 50%)',
      },
    },
  },
  plugins: [],
};
