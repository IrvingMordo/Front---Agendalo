/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
      BlueBg: '#058d9d',
      PrettyOrange: '#FF3618',
      GrisFeo: '#626464',
    },
    animation: {
      'fade-in': 'fadeIn 1s ease-out',
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    }
  },
},
  plugins: [],
}


