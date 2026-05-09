/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-green':  '#1A5C38',
        'mid-green':      '#2E7D52',
        'light-green':    '#6BAE82',
        'green-bg':       '#E8F4EC',
        'terracotta':     '#C8520A',
        'accent-dark':    '#A03E06',
        'amber':          '#F5A623',
        'amber-bg':       '#FEF3E2',
        'cream':          '#F9F4ED',
        'earth':          '#2C1A0E',
        'soil':           '#5C4033',
        'muted':          '#8D6E63',
        'dark-text':      '#1A1A1A',
        'primary-lt':     '#6BAE82',
      },
      fontFamily: {
        sans:    ['DM Sans', 'Noto Sans Devanagari', 'system-ui', 'sans-serif'],
        display: ['Syne', 'sans-serif'],
      },
      boxShadow: {
        premium:  '0 20px 60px -12px rgba(44,26,14,0.18), 0 4px 16px -4px rgba(44,26,14,0.08)',
        card:     '0 4px 24px -4px rgba(44,26,14,0.10)',
        'green-glow': '0 8px 28px rgba(26,92,56,0.30)',
        'amber-glow': '0 8px 28px rgba(245,166,35,0.30)',
      },
      borderRadius: {
        card: '20px',
        xl2: '22px',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        floatUp: {
          '0%':   { transform: 'translateY(0) rotate(0deg)', opacity: '0' },
          '8%':   { opacity: '1' },
          '92%':  { opacity: '1' },
          '100%': { transform: 'translateY(-110px) rotate(28deg)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.7', transform: 'scale(1.3)' },
        },
        scrollAnim: {
          '0%':   { transform: 'scaleY(0)', transformOrigin: 'top' },
          '50%':  { transform: 'scaleY(1)', transformOrigin: 'top' },
          '51%':  { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
      },
      animation: {
        floatUp:    'floatUp linear infinite',
        pulse:      'pulse 1.6s ease-in-out infinite',
        scrollAnim: 'scrollAnim 2.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
