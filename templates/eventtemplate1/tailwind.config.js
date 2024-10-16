/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#61B85A', 
      },
      fontFamily: {
        'jost': ['Jost', 'sans-serif'],
        'greycliff-cf': ['greycliff-cf', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

