/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "50": "50px",
      },
      colors: {
        'background-dark': '#181818',
        'white': '#ffffff',
        'gray': '#b3b3b3',
        'black': '#040306',
        'accent': '#1DB954',
        'test': 'red',
      },
      boxShadow: {
        'med': 'rgba(0, 0, 0, 0.3) 0px 0px 10px',
        'circle': 'rgba(0, 0, 0, 0.3) 0px 0px 0px 2px',
      }
    },
    fontFamily: {
      'Circular': ['Circular', 'sans-serif'],
    }
  },
  plugins: [],
}
