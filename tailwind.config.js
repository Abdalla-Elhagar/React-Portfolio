/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
theme: {
  extend: {
    colors: {
      drPrimary: '#000',
      drSecondary: 'rgb(24 24 27)',
      drBorder: 'rgba(63, 63, 70, 0.4)',
      drTitle: 'rgb(244 244 245)',
      drSubTitle: 'rgb(161 161 170)',
      drBgHeader: 'rgb(39 39 42)',
    },
    
    
  },
},
  plugins: [],
}

