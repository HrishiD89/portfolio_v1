/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'about-me': "url('/IMG-20230924-WA0084.jpg')",
        'my-icon': "url('/my-icon.png')",
      }
    },
  },
  plugins: [],
}

