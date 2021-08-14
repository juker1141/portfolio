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
      spacing: {
        '112': '28rem',
        '144': '36rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
      },
      backgroundImage: theme => ({
        'emailyImg': "url('../src/assets/img/emaily_1.jpg')",
        'storesImg': "url('../src/assets/img/stores_1.jpg')",
        'maskMapImg': "url('../src/assets/img/maskMap_1.jpg')",
      })
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      green: colors.green,
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
      backgroundImage: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      padding: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
}
