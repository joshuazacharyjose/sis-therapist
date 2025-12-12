import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#80B2A9',
          light: '#a4d4c9',
          dark: '#5a8c82',
        },
        secondary: {
          DEFAULT: '#637593',
          light: '#8a9bb8',
          dark: '#4a5a70',
        },
        accent: {
          DEFAULT: '#E8A87C',
          light: '#f0c5a3',
          dark: '#d98e5f',
        },
        dark: {
          DEFAULT: '#344B47',
          light: '#4a6662',
          dark: '#1f2e2c',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      animation: {
        pulse: 'pulse 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'float-delayed-1': 'float 6s ease-in-out 2s infinite',
        'float-delayed-2': 'float 6s ease-in-out 4s infinite',
        fadeInUp: 'fadeInUp 1s ease forwards',
        bounce: 'bounce 2s ease-in-out infinite',
        rotate: 'rotate 10s linear infinite',
        'counter-animation': 'counterAnimation 650ms steps(50) forwards',
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.6',
            transform: 'scale(1.05)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        bounce: {
          '0%, 100%': {
            transform: 'translateY(-5%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
        rotate: {
          '0%': {
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        counterAnimation: {
          from: {
            '--num': '0',
          },
          to: {
            '--num': '100',
          },
        },
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}

export default config
