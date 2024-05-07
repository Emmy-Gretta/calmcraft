/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust as needed
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'main-color': '#48A248'
        }
      }
    },
  },
  plugins: [],
}
