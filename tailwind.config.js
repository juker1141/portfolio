const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Roboto',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      colors: {
        'primary': '#121212',
        'lightBlue': '#F4F9FC',
      },
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      purple: colors.purple,
      violet: colors.violet,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
    }
  },
  variants: {
    extend: {
      letterSpacing: ['hover', 'focus'],
    },
  },
  plugins: [],
}
