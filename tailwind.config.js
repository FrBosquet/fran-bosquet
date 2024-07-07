const plugin = require('tailwindcss/plugin')
const { transform } = require('typescript')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      }
    },
    keyframes: {
      fadeIn: {
        '0%': {
          filter: 'blur(10px)'
        },
        '100%': {}
      }
    },
    animation: {
      fadeIn: 'fadeIn 1s ease-in forwards'
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.title': {},
        '.image': {}
      })
    })
  ]
}
