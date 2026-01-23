/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050A14',
        foreground: '#E8E8ED',
        primary: {
          DEFAULT: '#3B82F6',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1E293B',
          foreground: '#E2E8F0',
        },
        muted: {
          DEFAULT: '#1E293B',
          foreground: '#94A3B8',
        },
        card: {
          DEFAULT: '#0F172A',
          foreground: '#E2E8F0',
        },
        border: '#1E293B',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Chakra Petch', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
