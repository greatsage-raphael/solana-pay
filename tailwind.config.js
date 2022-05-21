module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'solana': "url('../public/solana.gif')"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
