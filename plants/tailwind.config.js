/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'florida-green': '#2D5016',
        'florida-blue': '#0066CC',
        'florida-orange': '#FF8C00',
        'florida-yellow': '#FFD700',
        'florida-pink': '#FF69B4',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 