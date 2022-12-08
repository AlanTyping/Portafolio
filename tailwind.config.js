/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fantasy: 'Fantasy, sans-serif',
        serif: 'serif, sans-serif',
        monospace: 'monospace, sans-serif'
      },
      backgroundColor: {
        orange: 'var(--orange)',
        blue: 'var(--blue)',
      }
    },
  },
  plugins: [],
}
