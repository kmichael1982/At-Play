/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        'themeBg': '#000000',
        'themeColor': '#ffffff',
        'white': '#ffffff',
        'black': '#000000',
        'primary': '#f90d1a',
        'secondary': '#757575',
        'tertiary': '#0e0e0e',
        'quaternary': '#040404',
        'quinary': '#c1c1c1',
        'senary': '#191919',
        'septenary': '#101010',
        'octonary': '#1a1a1a',
        'nonary': '#d9d9d9',
      },
      boxShadow: {
        'default': '0 0 12px rgba(0, 0, 0, 0.1)',
        'secondary': '0 0 31px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}