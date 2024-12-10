/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #6A89A7 10%, rgba(106, 137, 167, 0.8) 40%, rgba(106, 137, 167, 0.5) 70%, transparent 100%)',

      },
    },
  },
  
  plugins: [],
}