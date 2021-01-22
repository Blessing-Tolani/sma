const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    screens: {
      'mobile': '500px',
      'tablet': '900px',
      ...defaultTheme.screens
    },
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'cursive']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
