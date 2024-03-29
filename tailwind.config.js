import tailwindGradientMask from 'tailwind-gradient-mask-image';
import rfs from 'tailwindcss-rfs';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  important: '#root',
  corePlugins: {
    preflight: false,
  },
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#468ceb',
          50: '#e8f0fc',
          100: '#d3e2f9',
          200: '#a6c6f3',
          300: '#79aaed',
          400: '#4c8ee7',
          500: '#468ceb',
          600: '#3e7ace',
          700: '#3568b1',
          800: '#2d5794',
          900: '#244677',
        },
        secondary: {
          DEFAULT: '#ffe7a3',
          50: '#fffdf7',
          100: '#fffbef',
          200: '#fff6df',
          300: '#fff2cf',
          400: '#ffedbf',
          500: '#ffe7a3',
          600: '#ffe093',
          700: '#ffd883',
          800: '#ffd073',
          900: '#ffc863',
        },
        error: {
          DEFAULT: '#e67460',
          50: '#fdf3f1',
          100: '#fbdfd9',
          200: '#f7bfb4',
          300: '#f39f8e',
          400: '#ef7f69',
          500: '#e67460',
          600: '#dd6a57',
          700: '#d45f4d',
          800: '#cb5544',
          900: '#c24b3a',
        },
        background: '#F4F7FC',
        surface: '#FFFBFE',
        'primary-container': '#FFF',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-error': '#FFFFFF',
        'on-background': '#1C1B1F',
        'on-surface': '#1C1B1F',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        display: ['Tilt Warp', 'sans-serif'],
      },
      borderRadius: {
        'md': '8px',
        'sm': '4px',
      },
      boxShadow: {
        'elevation-1': '1px 2px 1px rgba(0,0,0,0.1)',
        'elevation-2': '2px 3px 2px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [
    rfs,
    tailwindGradientMask
  ],
};

