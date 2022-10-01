const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#121212',
        'lightBlue': '#edf7ff',
        'lighterBlue': '#d4ecff',
      },
      spacing: {
        '112': '28rem',
        '144': '36rem',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 15s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
      },   
      keyframes: {
        "spin-reverse": {
          "0%": {
            transform: "rotate(360deg)"
          },
          "100%": {
            transform: "rotate(0deg)"
          },
        }
      },
      backgroundImage: theme => ({
        'meImg': "url('../src/assets/img/me.jpg')",
        'metafameImg_sm': "url('../src/assets/img/metafame_sm.png')",
        'velhallaImg_sm': "url('../src/assets/img/velhalla_sm.png')",
        'musicImg_sm': "url('../src/assets/img/music_sm.png')",
        'emailyImg_sm': "url('https://images.unsplash.com/photo-1563225409-127c18758bd5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
        'storesImg_sm': "url('https://images.unsplash.com/photo-1502343019212-cc6a09783255?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')",
        'maskMapImg_sm': "url('https://images.unsplash.com/photo-1617480088922-2f606360c354?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80')",
        'metafameImg_lg_1': "url('../src/assets/img/metafame_1.jpg')",
        'metafameImg_lg_2': "url('../src/assets/img/metafame_2.jpg')",
        'velhallaImg_lg_1': "url('../src/assets/img/velhalla_1.jpg')",
        'velhallaImg_lg_2': "url('../src/assets/img/velhalla_2.jpg')",
        'musicImg_lg_1': "url('../src/assets/img/music_1.jpg')",
        'musicImg_lg_2': "url('../src/assets/img/music_2.jpg')",
        'emailyImg_lg_1': "url('../src/assets/img/emaily_1.jpg')",
        'emailyImg_lg_2': "url('../src/assets/img/emaily_3.jpg')",
        'storesImg_lg_1': "url('../src/assets/img/stores_1.jpg')",
        'storesImg_lg_2': "url('../src/assets/img/stores_2.jpg')",
        'maskMapImg_lg_1': "url('../src/assets/img/maskMap_1.jpg')",
        'maskMapImg_lg_2': "url('../src/assets/img/maskMap_2.jpg')",
      }),
      inset: {
        '-34': '-8.5rem',
      },
    },
    colors: {
      // Build your palette here
      transparent: 'transparent',
      current: 'currentColor',
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      purple: colors.purple,
      violet: colors.violet,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      sky: colors.sky,
    },
    backgroundPosition: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        right: 'right',
        top: 'top',
        'top-3': 'center top -3rem',
      }
  },
  variants: {
    extend: {
      letterSpacing: ['hover', 'focus'],
      backgroundImage: ['hover', 'focus'],
      borderWidth: ['hover', 'focus', 'group-hover'],
      padding: ['hover', 'focus'],
      fontWeight: ['hover', 'focus', 'disabled'],
      opacity: ['disabled'],
      rotate: ['group-hover'],
      margin: ['group-hover'],
      inset: ['group-hover'],
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
    },
  },
  plugins: [],
}
