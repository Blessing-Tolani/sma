module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'accent-1': '#333',
        'maroon':'rgb(94, 5, 5)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
