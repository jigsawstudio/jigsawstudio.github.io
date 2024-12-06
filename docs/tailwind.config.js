/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        jigsawGray: '#464646',
        jigsawWhite: '#ffffff',
        jigsawYellow: '#e5bc2e',
      },
      fontFamily: {
        kalameh: ['Kalameh', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
