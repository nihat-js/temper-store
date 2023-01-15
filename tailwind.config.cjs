/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container:{
      screens : {
        xl : '1350px',
      }
    },
    extend: {},
  },
  plugins: [],
}
