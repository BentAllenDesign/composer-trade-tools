/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  important: "#root",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        primary: '#6750A4',
        'primary-container': '#EADDFF',
        secondary: '#625B71',
        'secondary-container': '#E8DEF8',
        error: '#B3261E',
        background: '#FFFBFE',
        surface: '#FFFBFE',
        'on-primary': '#FFFFFF',
        'on-secondary': '#FFFFFF',
        'on-error': '#FFFFFF',
        'on-background': '#1C1B1F',
        'on-surface': '#1C1B1F',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
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
  plugins: [],
}

