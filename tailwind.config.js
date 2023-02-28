/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    colors: {
      white: '#FDFDFD',
      normalGray: '#7E7E7E',
      darkGray: '#464646',
      greenStart: '#13547a',
      greenEnd: '#80d0c7',
      blue: '#89CFF0'
    }
  },
  plugins: [],
}
