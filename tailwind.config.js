/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: { //add the font-theme
    screens: {
      'xs': '0px',

      'sm': '448px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    
    extend: {
      fontFamily: {
        'sans' : ["VT323", ...defaultTheme.fontFamily.sans],
      },
      width: {
        '13': '95.7671958%',
        '14': '84.1269841%',
      },
      height: {
        '7/10': "70%",
      },
      boxShadow: {
        '3xl': '6px 6px 0px #9D2B0E',
      },
    },
    colors: {
      'blood': '#E76F51',
      'yellow': '#E9C46A',
      'puke': '#2F7B15',
      'white': '#FDF2DF',
      'orange': '#F4A261',
      'red': '#9D2B0E',
    }
  },

  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

