/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        'display' : 'Cabinet Grotesk, ui-sans-serif',
        'body' : 'Satoshi, ui-sans-serif'
      },
      animation: {
        jump: 'jump 0.5s ease-in-out 1',
        wiggle: 'wiggle .5s ease-out infinite',
        blob: "blob 10s infinite",
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translate(0px, 0px)' },
          '50%': { transform: 'translate(0px, -6px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          }
        }
      }
    },
  },
  plugins: [],
}