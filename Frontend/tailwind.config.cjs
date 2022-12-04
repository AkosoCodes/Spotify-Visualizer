/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-dark': '#191414',
        'white': '#ffffff',
        'accent': '#1DB954',
        'test': 'red',
      },
    },
    fontFamily: {
      'Circular': ['Circular', 'sans-serif'],
    }
  },
  plugins: [],
}
