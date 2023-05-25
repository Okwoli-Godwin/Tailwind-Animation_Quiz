/** @type {import('tailwindcss').Config} */
import img from "./src/assets/millionaire.png"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/millionaire.png')"
      }
    },
  },
  plugins: [],
}
