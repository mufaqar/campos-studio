/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        FoundersGroteskMedium: ['FoundersGrotesk-Medium', 'sans-serif'],
        FoundersGroteskRegular: ['FoundersGrotesk-Regular', 'sans-serif'],
        SignifierRegular: ['Signifier-Regular', 'sans-serif'],
        SignifierLight: ['Signifier-Light', 'sans-serif']        
      },
      screens: {
        'w1366': '1366px',
        'w1728': '1728px',
        'w2560': '2560px',
        'w348': '348px',
      },
    },

  },
  plugins: [],
};
