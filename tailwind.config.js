/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'clementine-orange': '#ff764d',
        'pale-yellow': '#fbffa7',
        'pale-blue': '#b1c5ff',
        'deep-blue': '#0000ff',
        'lavender': '#d5b3ff',
        'mint': '#b6ffc0'
      },
      fontFamily: {
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
      },
      fontWeight: {
        'regular': 400,
        'medium': 500,
        'bold': 700,
      },

    },
  },
  plugins: [],
}

