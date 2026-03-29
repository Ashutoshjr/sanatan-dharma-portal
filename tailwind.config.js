/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50: '#fff8f0',
          100: '#ffefd6',
          200: '#ffd9a3',
          300: '#ffbc66',
          400: '#ff9533',
          500: '#FF6B00',
          600: '#e55a00',
          700: '#bf4500',
          800: '#993600',
          900: '#7a2b00',
        },
        gold: {
          50: '#fdfbf0',
          100: '#faf5d3',
          200: '#f5e99e',
          300: '#edd85f',
          400: '#e4c332',
          500: '#D4AF37',
          600: '#b8941f',
          700: '#9a7618',
          800: '#7d5e16',
          900: '#674e15',
        },
        ivory: '#FDF6E3',
        maroon: {
          500: '#800000',
          600: '#6b0000',
          700: '#560000',
          800: '#420000',
        },
        dharma: {
          bg: '#1a0a00',
          dark: '#2d1200',
          medium: '#4a1e00',
        }
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Crimson Text', 'Georgia', 'serif'],
        devanagari: ['Noto Sans Devanagari', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'flicker': 'flicker 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.8', transform: 'scaleY(0.95) scaleX(1.02)' },
          '25%, 75%': { opacity: '0.9', transform: 'scaleY(1.03) scaleX(0.98)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      boxShadow: {
        'golden': '0 0 20px rgba(212, 175, 55, 0.3), 0 0 40px rgba(212, 175, 55, 0.1)',
        'saffron': '0 0 20px rgba(255, 107, 0, 0.4)',
        'divine': '0 4px 30px rgba(212, 175, 55, 0.2), 0 0 60px rgba(255, 107, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
