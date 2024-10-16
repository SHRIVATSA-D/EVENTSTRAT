/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#61B85A',
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'greycliff-cf': ['greycliff-cf', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

