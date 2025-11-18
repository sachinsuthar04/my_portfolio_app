
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './data/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0b0f19',
        fg: '#e5e7eb',
        muted: '#9ca3af',
        brand: '#6ee7b7',
        card: '#0f1324',
        border: '#1f2937'
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};
