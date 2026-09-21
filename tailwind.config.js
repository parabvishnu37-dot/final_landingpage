/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        solo: {
          orange: '#FD4322',
          'orange-hover': '#e83b1c',
          navy: '#14243D',
          slate: '#5A6B82',
          muted: '#64748B',
          bg: '#F7F8FA',
          card: '#FFFFFF',
          border: '#E3EAF1',
          'border-light': '#DBE6F1',
          blue: '#1255FF',
          green: '#16a36a',
          gold: '#b65d00',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card-sm': '0 2px 8px rgba(20, 36, 61, 0.04)',
        'card-md': '0 10px 30px rgba(20, 36, 61, 0.06)',
        'card-lg': '0 20px 50px rgba(20, 36, 61, 0.09)',
        'card-floating': '0 16px 36px -6px rgba(20, 36, 61, 0.12), 0 0 0 1px rgba(227, 234, 241, 0.8)',
        'btn-orange': '0 6px 18px rgba(253, 67, 34, 0.24)',
        'btn-orange-sm': '0 4px 14px rgba(253, 67, 34, 0.20)',
      },
      animation: {
        'float-slow': 'floatSlow 5s ease-in-out infinite',
        'float-delayed': 'floatDelayed 6s ease-in-out 1.5s infinite',
        'float-alt': 'floatAlt 5.5s ease-in-out 0.8s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        floatDelayed: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatAlt: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(6px) translateX(-4px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
      }
    },
  },
  plugins: [],
}
