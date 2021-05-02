const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/*.{js,jsx,ts,tsx}',
    './src/components/*.{js,jsx,ts,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      open: ['Open 24 Display St'],
      pixel: ['Pixelated'],
      start: ['Press Start 2P']
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        gray: colors.coolGray,
        blue: {
          ...colors.blue,
          1000: 'rgb(31,29,50)'
        }
      },
      backgroundImage: () => ({
        'app-wallpaper': "url('/img/screen.png')"
      }),
      keyframes: {
        'bounce-once': {
          '0%, 20%, 50%, 80%, 100%': {transform: 'translateY(0)'},
          '40%': {transform: 'translateY(-30px)'},
          '60%': {transform: 'translateY(-15px)'}
        }
      },
      animation: {
        'bounce-once': 'bounce-once 1.5s both'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('@tailwindcss/forms')]
};
