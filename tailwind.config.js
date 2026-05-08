/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        leaf: '#4ADE80',
        'leaf-dark': '#22c55e',
        'earth-dark': '#14532D',
        'earth-mid': '#166534',
        'white-soft': '#F8FAF5',
        brown: '#8B5E3C',
        'brown-light': '#A8734F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
