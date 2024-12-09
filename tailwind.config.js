/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, #6e6f6e 5%, rgba(48, 50, 48, 0.4) 40%, transparent 100%)',
      },
    },
  },
  
  plugins: [],
}