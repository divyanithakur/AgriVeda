/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#1A5C38',
        'mid-green': '#2E7D52',
        'light-green': '#6BAE82',
        'green-bg': '#E8F4EC',
        'terracotta': '#C8520A',
        'amber': '#F5A623',
        'cream': '#F9F4ED',
        'dark-text': '#2C1A0E',
      },
      fontFamily: {
        sans: ['Noto Sans Devanagari', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
