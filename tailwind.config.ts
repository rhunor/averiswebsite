import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      colors: {
        navy: {
          darkest: '#070f1a',
          dark:    '#0d2035',
          DEFAULT: '#1a3a52',
          light:   '#254e70',
        },
        teal: {
          dark:    '#1f5f6e',
          DEFAULT: '#2d7f8f',
          light:   '#3a9db0',
          bright:  '#4dbdd4',
        },
      },
      backgroundImage: {
        'gradient-navy-teal': 'linear-gradient(138deg, #0d2035 0%, #1a3a52 48%, #1f5f6e 100%)',
      },
      animation: {
        marquee:  'marquee 30s linear infinite',
        'card-bob-1': 'cardBob1 7s ease-in-out infinite',
        'card-bob-2': 'cardBob2 6.5s ease-in-out infinite',
        'card-bob-3': 'cardBob3 8s ease-in-out infinite',
        'cta-spin': 'ctaSpin 22s linear infinite',
        'pill-dot': 'pillDot 2s ease-in-out infinite',
        'bar-grow': 'barGrow 1s ease-out forwards',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to:   { transform: 'translateX(-50%)' },
        },
        cardBob1: {
          '0%,100%': { transform: 'translate(-50%,-50%) translateY(0px)' },
          '50%':     { transform: 'translate(-50%,-50%) translateY(-16px)' },
        },
        cardBob2: {
          '0%,100%': { transform: 'translateY(0px) rotate(2deg)' },
          '50%':     { transform: 'translateY(-10px) rotate(2deg)' },
        },
        cardBob3: {
          '0%,100%': { transform: 'translateY(0px) rotate(-1.5deg)' },
          '50%':     { transform: 'translateY(-12px) rotate(-1.5deg)' },
        },
        ctaSpin: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        pillDot: {
          '0%,100%': { opacity: '1' },
          '50%':     { opacity: '0.3' },
        },
        barGrow: {
          from: { transform: 'scaleY(0)' },
          to:   { transform: 'scaleY(1)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
