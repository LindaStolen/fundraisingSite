/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ["./**/*.html"],
  },
  theme: {
    colors: {
      primary: {
        600: '#D4D0E7',
        500: '#C2BCDC',
        400: '#A299CA',
        300: '#8579B9',
        200: '#6657A8',
        100: '#524686'
      },
      second: {
        600: '#CDEEEE',
        500: '#B3E5E5',
        400: '#8CD8D9',
        300: '#00CED1',
        200: '#21A9AB',
        100: '#187F81',
      },
      graay: {
        600: '#FFFFFF',
        500: '#E6E6E6',
        400: '#CCCCCC',
        300: '#999999',
        200: '#808080',
        100: '#4D4D4D',
      },
      'fail': '#F05C5C',
      'success': '#4ECB71',
      'warning': '#FFD233',
      'markedPurple': '#6672DF',
      'markedPink': '#E932D6',
      'bgc': '#FAFAFA',
      'loginBg': '#F2F2F2'
    },
    screens: {
      'sm': '375px',
      'mm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
    },
    fontFamily:{
      sans: ['Noto Sans TC'],
    },
    extend: {},
  },
  plugins: [],
}
