/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html',
  './js/script.js'],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
