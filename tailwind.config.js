/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html'],
  theme: {
    fontFamily : {
      'lora' : 'lora',
      'source' : 'Source Serif Pro',
    },
    extend: {
      text : 'text 5s ease infinite',
    },
    keyframes : {
      text: {
        '0%, 100%': {
          'background-size': '200%, 200%',
          'background-position' : 'left-center',
        },
        '50%' : {
          'backgrond-size': '200%, 200%',
          'background-position' : 'right-center',
        },
      },
    }
  },
  plugins: [],
}
