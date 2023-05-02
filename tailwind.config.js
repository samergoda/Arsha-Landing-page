/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html',
  './js/script.js'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
