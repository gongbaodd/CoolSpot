/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#f0f5ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a4bcfd',
          400: '#8098fb',
          500: '#6371f6',
          600: '#4f4de9',
          700: '#3e3ccc',
          800: '#1E3A8A',
          900: '#1e2f76',
        },
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      boxShadow: {
        soft: '0 2px 15px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};