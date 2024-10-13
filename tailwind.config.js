/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a5a18',
        secondary: '#FFD500',
        background: '#dea618',
        bg: '#D2A023',
        bg2: '#ffebdd',


      }
    },
  },
  plugins: [],
}