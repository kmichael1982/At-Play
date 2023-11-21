/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    colors: {
      'red': '#f90d1a',
      'black': '#0e0e0e',
      'white': '#fff',
      'secondary-color' : '#757575'
    },

    fontFamily: {
      'sans': ['"Helvetica Neue", Helvetica, Arial, sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}