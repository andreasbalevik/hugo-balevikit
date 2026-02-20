/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{md,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066A1',
        secondary: '#004E7A',
        accent: '#0080C8',
      },
    },
  },
  plugins: [],
}
