const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'light-white': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-white': 'hsla(0, 0%, 100%, 0.6)'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'lexend-deca': ['Lexend Deca', 'sans-serif'],
      }
    },
    screens: {
      'sm': '375px',
      'lg': '1440px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
