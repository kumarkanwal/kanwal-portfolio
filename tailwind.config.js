/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        cyber: {
          50: '#f0fffe',
          100: '#ccfffe',
          200: '#99fffd',
          300: '#00fff5',
          400: '#00e5dc',
          500: '#00c4bb',
          600: '#009d96',
          700: '#007d78',
          800: '#006560',
          900: '#00524e',
        },
        dark: {
          900: '#020408',
          800: '#060d14',
          700: '#0a1520',
          600: '#0f1e2e',
          500: '#152638',
          400: '#1c3147',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1.2s step-end infinite',
        'node-pulse': 'nodePulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        nodePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: 0.7 },
          '50%': { transform: 'scale(1.3)', opacity: 1 },
        }
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}
