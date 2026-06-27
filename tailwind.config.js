/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#4B0082',
          gold: '#D4AF37',
          ink: '#1F2937',
          mist: '#F8F9FA',
        },
      },
      boxShadow: {
        soft: '0 18px 45px rgba(31, 41, 55, 0.08)',
        lift: '0 24px 70px rgba(31, 41, 55, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
