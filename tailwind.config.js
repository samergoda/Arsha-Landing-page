/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html',
  './js/script.js'],
  theme: {
    screens: {
      'xs': '320px'
    }
  },
  plugins: [require('flowbite/plugin')],
}
