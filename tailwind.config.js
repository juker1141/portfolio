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
        'emailyImg': "url('https://images.unsplash.com/photo-1563225409-127c18758bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
        'storesImg': "url('https://images.unsplash.com/photo-1502343019212-cc6a09783255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        'maskMapImg': "url('https://images.unsplash.com/photo-1617480088922-2f606360c354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')",
        'emailyImg_lg': "url('../src/assets/img/emaily_1.jpg')",
        'storesImg_lg': "url('../src/assets/img/stores_1.jpg')",
        'maskMapImg_lg': "url('../src/assets/img/maskMap_1.jpg')",
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
      rotate: ['group-hover'],
      margin: ['group-hover'],
      inset: ['group-hover'],
    },
  },
  plugins: [],
}
