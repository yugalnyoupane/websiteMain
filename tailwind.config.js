/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbarShadow' : "0 1px 5px 1px grey",
        'boxShadow': '3px 3px 5px grey'
      },
      borderRadius: {
        'customborder' : '42% 56% 72% 28% / 42% 42% 56% 48%'
      },
      animation: {
        'change' : 'change 10s linear infinite'
      },
      transitionProperty: {
        'hover' : 'all .5s ease'
      },
      keyframes: {
        change: {
          '0%, 100%': {
            'border-radius': '42% 56% 72% 28% / 42% 42% 56% 48%'
          },
          '33%': {
            'border-radius': '72% 28% 48% 48% / 28% 28% 72% 72%'
          },
          '66%': {
            'border-radius': '100% 56% 56% 100% / 100% 100% 56% 56%'
          },
        }
      },
      width: {
        'width':'var(--width)'
      },
      height: {
        'nonavbarheight':'var(--nonavbarheight)'
      },
      colors:{
        'applybgcolor' : 'var(--applybgcolor)',
        'footerbgcolor' : 'var(--footerbgcolor)',
        'copyrightbgcolor' : 'var(--copyrightbgcolor)',
      }
    },
  },
  plugins: [],
}