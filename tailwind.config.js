/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      dropShadow: {
        'custom': '2px 3px 6px rgba(7, 4, 59, 0.16)',
      },
    },
  },
  plugins: [],
}