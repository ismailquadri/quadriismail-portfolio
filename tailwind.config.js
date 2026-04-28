/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#134901',
          700: '#1a6b01',
        },
        secondary: '#CCFF00',
        bg: '#F8F8F6',
        dark: '#0F0F0F',
        neutral: '#888888',
        border: '#E0E0DC',
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Geist', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.02em',
        wide: '0.08em',
        wider: '0.1em',
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
}
