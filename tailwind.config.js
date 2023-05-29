/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [],
  theme: {
    extend: {
      colors: {
        'brand-color': '#5d3ebc',
        'primary-brand-color': '#5d3ebc',
        'secondary-brand-color': '#7849f7'
      }

    },
  },
  plugins: [],
}

