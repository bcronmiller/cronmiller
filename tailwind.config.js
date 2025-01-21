/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
      backgroundColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.97)',
      },
      borderColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.7)',
      },
      boxShadow: {
        'custom-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}