/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Poppins, sans-serif',
        secondary: 'Inter, sans-serif',
      },
      colors: {
        primary: '#00AEFF',
        primaryLight: '#61CDFF',
        blue: {
          600: '#148EFF',
        },
        gray: {
          500: '#E5E5E5',
          600: '#9D9D9D',
          700: '#8F9199',
          800: '#15171B',
        },
        black: {
          800: '#020203',
        },
      },
    },
  },
  plugins: [],
}
