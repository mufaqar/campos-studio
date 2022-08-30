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
      }
    },
  },
  plugins: [],
};
