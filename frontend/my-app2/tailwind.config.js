/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#001F3F', // Dominant Color
        lightGray: '#F0F0F0', // Secondary Color
        coral: '#FF6B6B', // Accent Color
        mustard: '#FFC107', // Mustard color
      },
    },
  },
  plugins: [],
}

