/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');


module.exports = {
  content: ["*.{html,js, ts, jsx, tsx}",
],
darkMode: 'class',
  theme: {
    fontFamily: {
      'body': 'Poppins, sans-serif'
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
    },
    extend: {},
  },
  plugins: [],
}

