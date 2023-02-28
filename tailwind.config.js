/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat : ['Montserrat', 'sans-serif'],
        shantell: ['Shantell Sans', 'cursive'],
        Tiltprims: ['Tilt Prism', 'cursive'],
        popins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
